"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { emsComplaints } from "@/data/protocols/emsProtocols";
import { cn, getPriorityLevel } from "@/lib/utils";
import {
  evaluateDependencies,
  evaluatePreRenderInstructions,
  replacePronounInNode,
} from "@/lib/utils/evaluators";
import { IEMSComplaint } from "@/models/interfaces/complaints/ems/IEMSComplaint";
import { IPatientData } from "@/models/interfaces/complaints/ems/IPatientData";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { InputModal } from "@/components/modals/input-modal";
import { IPreferences } from "@/models/interfaces/IPreferences";

interface ProQAAnswer {
  question: string;
  defaultQuestion: string;
  defaultAnswer: string;
  answer: string;
  questionIndex: number;
  omit: boolean;
  timestamp: string;
}

interface EMSProQAProps {
  complaintName: string;
  patientData: IPatientData;
  hasCalledBack?: boolean;
  onComplete: (
    code: string,
    baseCode?: string,
    subType?: string,
    shouldCallBack?: boolean
  ) => void;
  onBack: () => void;
  onSwitchProtocol: (protocol: number) => void;
}

const findHighestPriorityDeterminant = (
  complaint: IEMSComplaint,
  patientData: IPatientData
): { code: string; override: boolean } | null => {
  if (!complaint.availableDeterminants) return null;

  let highestPriorityCode: string | null = null;
  let shouldOverride = false;

  // First check for notBreathing across all determinants
  for (const priorityGroup of complaint.availableDeterminants) {
    for (const determinant of priorityGroup.determinants) {
      if (determinant.notBreathing && patientData.isBreathing === false) {
        return { code: determinant.code, override: true };
      }
    }
  }

  // Then check other conditions
  for (const priorityGroup of complaint.availableDeterminants) {
    for (const determinant of priorityGroup.determinants) {
      if (determinant.notConscious && patientData.isConscious === false) {
        return { code: determinant.code, override: true };
      }
      if (determinant.multVictim && patientData.count > 1) {
        if (!highestPriorityCode) {
          highestPriorityCode = determinant.code;
          shouldOverride = true;
        }
      }
    }
  }

  return highestPriorityCode
    ? { code: highestPriorityCode, override: shouldOverride }
    : null;
};

const findLowestPriorityDeterminant = (complaint: IEMSComplaint): string => {
  if (!complaint.availableDeterminants) return "DEFAULT";

  let lowestCode = "DEFAULT";
  let lowestPriority = 6;

  for (const priorityGroup of complaint.availableDeterminants) {
    for (const determinant of priorityGroup.determinants) {
      const priority = getPriorityLevel(determinant.code);
      if (priority < lowestPriority) {
        lowestPriority = priority;
        lowestCode = determinant.code;
      }
    }
  }

  return lowestCode;
};

const getProperPronoun = (gender: string): string => {
  switch (gender) {
    case "Male":
      return "he";
    case "Female":
      return "she";
    default:
      return "the patient";
  }
};

const processQuestionText = (text: React.ReactNode): string => {
  if (typeof text === "string") return text;
  if (React.isValidElement(text)) {
    let content = "";
    const element = text as React.ReactElement<{ children?: React.ReactNode }>;

    if (element.props.children) {
      React.Children.forEach(
        element.props.children,
        (child: React.ReactNode) => {
          if (typeof child === "string") {
            content += child;
          } else if (React.isValidElement(child)) {
            content += processQuestionText(child);
          }
        }
      );
    }
    return content;
  }
  return "";
};

const isHigherPriority = (newCode: string, currentCode: string): boolean => {
  if (!currentCode) return true;
  const currentPriority = getPriorityLevel(currentCode);
  const newPriority = getPriorityLevel(newCode);
  return newPriority > currentPriority;
};

export default function EmsProQA({
  complaintName,
  patientData,
  hasCalledBack = false,
  onComplete,
  onBack,
  onSwitchProtocol,
}: EMSProQAProps) {
  const [complaint, setComplaint] = useState<IEMSComplaint | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [hoverAnswerIndex, setHoverAnswerIndex] = useState<number>(0);
  const [currentCode, setCurrentCode] = useState<string>("");
  const [currentPlan, setCurrentPlan] = useState<number>(0);
  const [isCodeOverridden, setIsCodeOverridden] = useState<boolean>(false);
  const [shouldComplete, setShouldComplete] = useState<boolean>(false);
  const [previousAnswers, setPreviousAnswers] = useState<ProQAAnswer[]>([]);
  const [currentSubCode, setCurrentSubCode] = useState<string>("");
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  const [pendingAnswerIndex, setPendingAnswerIndex] = useState<number | null>(
    null
  );
  const [preferences] = useState<IPreferences>(() => {
    const rawPrefs = localStorage.getItem("PREFERENCES");
    if (!rawPrefs) {
      return {
        advancedMode: false,
        soundEffects: true,
        quickSend: false,
      };
    } else {
      return JSON.parse(rawPrefs) as IPreferences;
    }
  });
  const [shouldCallback, setShouldCallback] = useState<boolean>(false);
  const answersRef = useRef<HTMLDivElement>(null);

  const saveProQAState = useCallback(
    (answers: ProQAAnswer[]) => {
      const proqaState = {
        complaint: complaintName,
        currentQuestion: currentQuestionIndex,
        selectedAnswers: answers,
        currentCode,
        currentSubCode,
        currentPlan,
        determinant: currentCode
          ? currentSubCode
            ? `${currentCode}${currentSubCode}`
            : currentCode
          : "DEFAULT",
        protocol: complaint?.name,
        startTime:
          localStorage.getItem("DISPATCH_PROQA_START") ||
          new Date().toISOString(),
      };

      localStorage.setItem("EMS_PROQA_ANSWERS", JSON.stringify(answers));
      localStorage.setItem("EMS_PROQA_DATA", JSON.stringify(proqaState));
    },
    [
      complaintName,
      currentQuestionIndex,
      currentCode,
      currentSubCode,
      currentPlan,
      complaint?.name,
    ]
  );

  const moveToNextQuestion = useCallback(() => {
    if (!complaint) return;

    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex >= complaint.questions.length) {
      setShouldComplete(true);
      localStorage.removeItem("EMS_PROQA_DATA");
      return;
    }

    setCurrentQuestionIndex(nextIndex);
    setSelectedAnswerIndex(null);
    setHoverAnswerIndex(0);
  }, [complaint, currentQuestionIndex]);

  const shouldRenderCurrentQuestion = () => {
    if (!complaint) return false;

    const currentQuestion = complaint.questions[currentQuestionIndex];
    if (!currentQuestion) return false;

    if (currentQuestion.preRenderInstructions) {
      return evaluatePreRenderInstructions(
        currentQuestion.preRenderInstructions,
        patientData,
        previousAnswers,
        currentCode
      );
    }
    return true;
  };

  useEffect(() => {
    if (!hasCalledBack) return;

    const savedData = localStorage.getItem("EMS_PROQA_DATA");
    const savedAnswers = localStorage.getItem("EMS_PROQA_ANSWERS");

    if (savedData) {
      const state = JSON.parse(savedData);
      if (state.complaint === complaintName) {
        setCurrentQuestionIndex(state.currentQuestion + 1);
        setCurrentCode(state.determinant || "DEFAULT");
        setCurrentPlan(state.currentPlan || 0);
        setCurrentSubCode(state.currentSubCode || "");
      }
    }

    if (savedAnswers) {
      setPreviousAnswers(JSON.parse(savedAnswers));
    }
  }, [complaintName, hasCalledBack]);

  useEffect(() => {
    if (!shouldComplete) return;

    

    let finalCode = currentCode;

    if(hasCalledBack) {
      const rawDispatchHistory = localStorage.getItem("DISPATCH_HISTORY");
      const dispatchHistory = JSON.parse(rawDispatchHistory || "[]");
      finalCode = dispatchHistory.code;
    }

    const storedState = localStorage.getItem("EMS_PROQA_DATA");
    const storedData = storedState ? JSON.parse(storedState) : null;

    if (!finalCode && storedData?.currentCode) {
      finalCode = storedData.currentCode;
    }

    if (!finalCode || finalCode === "DEFAULT") {
      if (complaint) {
        finalCode = findLowestPriorityDeterminant(complaint);
      } else {
        finalCode = "DEFAULT";
      }
    }

    const subType = currentSubCode || storedData?.currentSubCode || "";

    if (finalCode !== "DEFAULT") {
      onComplete(finalCode, finalCode, subType, shouldCallback);
    } else {
      onComplete(finalCode, finalCode, subType, shouldCallback);
    }

    setShouldComplete(false);
  }, [
    shouldComplete,
    currentCode,
    currentSubCode,
    currentPlan,
    onComplete,
    complaint,
    shouldCallback,
  ]);

  useEffect(() => {
    const foundComplaint = emsComplaints.find(
      (c: IEMSComplaint) => c.name === complaintName
    );
    if (!foundComplaint) return;
    setComplaint(foundComplaint);
    setCurrentPlan(foundComplaint.defaultPlan);

    if(!hasCalledBack) {
      setCurrentQuestionIndex(0);
      setSelectedAnswerIndex(null);
      setHoverAnswerIndex(0);
      setCurrentCode("");
      setCurrentPlan(foundComplaint.defaultPlan);
      setIsCodeOverridden(false);
      setShouldComplete(false);
      setPreviousAnswers([]);
      setCurrentSubCode("");
    }

    const criticalResult = findHighestPriorityDeterminant(
      foundComplaint,
      patientData
    );
    if (criticalResult) {
      setCurrentCode(criticalResult.code);
      setIsCodeOverridden(criticalResult.override);
    }
  }, [complaintName, patientData]);

  const handleAnswerSelect = useCallback(
    (answerIndex: number, inputValue?: string) => {
      if (!complaint) return;

      const currentQuestion = complaint.questions[currentQuestionIndex];
      const selectedAnswer = currentQuestion?.answers[answerIndex];

      if (!currentQuestion || !selectedAnswer) return;

      // Handle protocol switching first, before any other operations
      if (selectedAnswer.goto !== undefined) {
        // Clear all state and storage
        localStorage.removeItem("EMS_PROQA_DATA");
        localStorage.removeItem("EMS_PROQA_ANSWERS");
        setCurrentQuestionIndex(0);
        setSelectedAnswerIndex(null);
        setHoverAnswerIndex(0);
        setCurrentCode("");
        setCurrentPlan(0);
        setIsCodeOverridden(false);
        setShouldComplete(false);
        setPreviousAnswers([]);
        setCurrentSubCode("");

        // Switch to new protocol
        if (onSwitchProtocol) {
          onSwitchProtocol(selectedAnswer.goto);
        }
        return;
      }

      setSelectedAnswerIndex(answerIndex);

      if (selectedAnswer.input && !inputValue) {
        setIsInputModalOpen(true);
        setPendingAnswerIndex(answerIndex);
        return;
      }

      const displayText = selectedAnswer.display.replace(
        "{input}",
        inputValue || selectedAnswer.answer
      );

      const rawQuestionText = processQuestionText(currentQuestion.text);
      const processedQuestion = rawQuestionText.replace(
        /\*\*pronoun\*\*/g,
        getProperPronoun(patientData.gender)
      );

      const newAnswer: ProQAAnswer = {
        question: processedQuestion,
        defaultQuestion: rawQuestionText,
        defaultAnswer: selectedAnswer.answer,
        answer: displayText,
        questionIndex: currentQuestionIndex,
        omit: currentQuestion.omitQuestion || false,
        timestamp: new Date().toISOString(),
      };

      const updatedAnswers = [...previousAnswers];
      const existingIndex = updatedAnswers.findIndex(
        (ans) => ans.questionIndex === currentQuestionIndex
      );
      if (existingIndex >= 0) {
        updatedAnswers[existingIndex] = newAnswer;
      } else {
        updatedAnswers.push(newAnswer);
      }
      setPreviousAnswers(updatedAnswers);

      const criticalResult = findHighestPriorityDeterminant(
        complaint,
        patientData
      );

      if (criticalResult && criticalResult.override) {
        setCurrentCode(criticalResult.code);
        setIsCodeOverridden(true);
      }

      if (selectedAnswer.updateSubCode) {
        setCurrentSubCode(selectedAnswer.updateSubCode);
      }

      if (selectedAnswer.dependency) {
        console.log("Checking dependency with answers:", previousAnswers); // Add debug
        const dependencyResult = evaluateDependencies(
          selectedAnswer.dependency,
          patientData,
          previousAnswers
        );
        console.log("Dependency result:", dependencyResult); // Add debug
        if (dependencyResult) {
          if (dependencyResult.code) {
            setCurrentCode(dependencyResult.code);
          }
          if (dependencyResult.subCode) {
            setCurrentSubCode(dependencyResult.subCode);
          }
          if (dependencyResult.plan) {
            setCurrentPlan(dependencyResult.plan);
          }
          if (dependencyResult.override) {
            setIsCodeOverridden(true);
          }
          if (dependencyResult.send) {
            setShouldCallback(true);
            setShouldComplete(true);
          }
        }
      }

      if (selectedAnswer.updateCode && !isCodeOverridden) {
        console.log("Updating code with:", selectedAnswer.updateCode);
        // Only update code if it's higher priority or has override
        if (
          selectedAnswer.override ||
          isHigherPriority(selectedAnswer.updateCode, currentCode)
        ) {
          setCurrentCode(selectedAnswer.updateCode);
          if (selectedAnswer.override) {
            setIsCodeOverridden(true);
          }
        }
      }

      saveProQAState(updatedAnswers);

      setSelectedAnswerIndex(answerIndex);

      if (selectedAnswer.send && preferences.quickSend && !hasCalledBack) {
        setShouldCallback(true);
        setShouldComplete(true);
        return;
      } else if (selectedAnswer.end) {
        setShouldComplete(true);
        localStorage.removeItem("EMS_PROQA_DATA");
        return;
      }

      // Only move to next question if not ending and continue is true
      if (selectedAnswer.continue) {
        moveToNextQuestion();
      }
    },
    [
      complaint,
      currentQuestionIndex,
      patientData,
      previousAnswers,
      isCodeOverridden,
      currentCode,
      onSwitchProtocol,
      moveToNextQuestion,
      saveProQAState,
    ]
  );

  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (!complaint || isInputModalOpen) return;

      const currentQuestion = complaint.questions[currentQuestionIndex];
      if (!currentQuestion || currentQuestion.questionType !== "select") return;

      const answerCount = currentQuestion.answers.length;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHoverAnswerIndex((prev) => (prev + 1) % answerCount);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHoverAnswerIndex((prev) => (prev - 1 + answerCount) % answerCount);
      } else if (e.key === "Enter") {
        e.preventDefault();
        handleAnswerSelect(hoverAnswerIndex);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    complaint,
    currentQuestionIndex,
    hoverAnswerIndex,
    isInputModalOpen,
    handleAnswerSelect,
  ]);

  useEffect(() => {
    if (answersRef.current) {
      const answers = answersRef.current.querySelectorAll(".answer-option");
      if (answers[hoverAnswerIndex]) {
        answers[hoverAnswerIndex].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [hoverAnswerIndex]);

  if (!complaint) {
    return null;
  }

  if (shouldComplete) {
    return null;
  }

  const currentQuestion = complaint.questions[currentQuestionIndex];
  if (!currentQuestion) {
    setShouldComplete(true);
    return null;
  }

  if (!shouldRenderCurrentQuestion()) {
    moveToNextQuestion();
    return null;
  }

  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswerIndex(null);
      setHoverAnswerIndex(0);
    } else {
      // Go back to case-entry
      onBack();
    }
  };

  return (
    <Card className="max-w-5xl mx-auto h-fit w-full">
      <CardHeader>
        <CardTitle className="text-2xl">ProQA Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg text-muted-foreground font-medium">
              ProQA Protocol: {complaint.name}
            </h3>
            <div className="text-sm text-muted-foreground">
              Question {currentQuestionIndex + 1} of{" "}
              {complaint.questions.length}
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4">
                <h4 className="text-lg font-medium mb-4">
                  {replacePronounInNode(
                    currentQuestion.text,
                    getProperPronoun(patientData.gender)
                  )}
                </h4>

                {currentQuestion.questionType === "select" ? (
                  <div ref={answersRef} className="space-y-2 overflow-y-auto">
                    {currentQuestion.answers.map((answer, index) => (
                      <div
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={cn(
                          "answer-option p-3 rounded-md transition-colors cursor-pointer",
                          selectedAnswerIndex === index
                            ? "bg-primary text-primary-foreground"
                            : hoverAnswerIndex === index
                            ? "bg-green-500 text-white"
                            : "bg-muted hover:bg-muted/80"
                        )}
                      >
                        {answer.answer}
                      </div>
                    ))}
                  </div>
                ) : (
                  currentQuestion.questionType === "input" && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const input = e.currentTarget.querySelector(
                          "input"
                        ) as HTMLInputElement;
                        if (input && input.value) {
                          handleAnswerSelect(0, input.value);
                          input.value = "";
                        }
                      }}
                    >
                      <Input
                        placeholder={currentQuestion.answers[0].answer}
                        autoFocus
                      />
                    </form>
                  )
                )}
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handleBackClick}
                  className="text-sm"
                >
                  {currentQuestionIndex > 0
                    ? "Previous Question"
                    : "Back to Case Entry"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
      <InputModal
        isOpen={isInputModalOpen}
        onClose={() => {
          setIsInputModalOpen(false);
          setPendingAnswerIndex(null);
          setSelectedAnswerIndex(null);
        }}
        onSubmit={(value) => {
          // First close the modal
          setIsInputModalOpen(false);
          const savedIndex = pendingAnswerIndex;
          setPendingAnswerIndex(null);

          // Then process the answer after modal is fully closed
          if (savedIndex !== null) {
            handleAnswerSelect(savedIndex, value);
          }
        }}
        title={
          currentQuestion
            ? processQuestionText(currentQuestion.text).replace(
                /\*\*pronoun\*\*/g,
                getProperPronoun(patientData.gender)
              )
            : ""
        }
      />
    </Card>
  );
}
