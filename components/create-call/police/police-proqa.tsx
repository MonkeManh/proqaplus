"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { policeProtocols } from "@/data/protocols/policeProtocols";
import { cn } from "@/lib/utils";
import {
  evaluateFireDependencies,
  evaluateFirePreRenderInstructions,
} from "@/lib/utils/evaluators";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { InputModal } from "@/components/modals/input-modal";
import { VehicleInputModal } from "@/components/modals/vehicle-input-modal";
import { PersonInputModal } from "@/components/modals/person-input-modal";
import { IPoliceData } from "@/models/interfaces/complaints/police/IPoliceData";
import { IPoliceComplaint } from "@/models/interfaces/complaints/police/IPoliceComplaint";

interface PoliceProQAProps {
  policeData?: IPoliceData;
  complaintName: string;
  onComplete: (code: string, baseCode?: string, subType?: string) => void;
  onBack: () => void;
  onSwitchProtocol: (protocol: number) => void;
}

interface ProQAAnswer {
  question: string;
  defaultQuestion: string;
  defaultAnswer: string;
  answer: string;
  questionIndex: number;
  omit: boolean;
  timestamp: string;
}

interface QuestionState {
  questionIndex: number;
  code: string;
  subCode: string;
  plan: number;
  isCodeOverridden: boolean;
  answersLength: number;
}

const getPriorityLevel = (code: string): number => {
  const priority = code.match(/[A-E]/)?.[0] || "";
  switch (priority) {
    case "E":
      return 5;
    case "D":
      return 4;
    case "C":
      return 3;
    case "B":
      return 2;
    case "A":
      return 1;
    case "O":
      return 0;
    default:
      return 0;
  }
};

const findLowestPriorityDeterminant = (complaint: IPoliceComplaint): string => {
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

const processQuestionText = (text: React.ReactNode): string => {
  if (typeof text === "string") return text;
  if (React.isValidElement(text)) {
    let content = "";
    const element = text as React.ReactElement<{
      children?: React.ReactNode;
    }>;

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

export default function PoliceProQA({
  complaintName,
  onComplete,
  onBack,
  onSwitchProtocol,
}: PoliceProQAProps) {
  const [complaint, setComplaint] = useState<IPoliceComplaint | null>(null);
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
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);
  const [isPersonModalOpen, setIsPersonModalOpen] = useState(false);
  const [pendingAnswerIndex, setPendingAnswerIndex] = useState<number | null>(
    null
  );
  const [questionStates, setQuestionStates] = useState<QuestionState[]>([]);
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

      localStorage.setItem("POLICE_PROQA_ANSWERS", JSON.stringify(answers));
      localStorage.setItem("POLICE_PROQA_DATA", JSON.stringify(proqaState));
    },
    [
      complaintName,
      currentCode,
      currentQuestionIndex,
      currentPlan,
      currentSubCode,
      complaint?.name,
    ]
  );

  const moveToNextQuestion = useCallback(() => {
    if (!complaint) return;

    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex >= complaint.questions.length) {
      setShouldComplete(true);
      localStorage.removeItem("POLICE_PROQA_DATA");
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
      return evaluateFirePreRenderInstructions(
        currentQuestion.preRenderInstructions,
        previousAnswers,
        currentCode
      );
    }
    return true;
  };

  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      const previousIndex = currentQuestionIndex - 1;

      // Get the state from before the current question was answered
      const previousState = questionStates[currentQuestionIndex];

      if (previousState) {
        // Restore the previous state
        setCurrentCode(previousState.code);
        setCurrentSubCode(previousState.subCode);
        setCurrentPlan(previousState.plan);
        setIsCodeOverridden(previousState.isCodeOverridden);

        // Remove answers that came after the previous question
        const filteredAnswers = previousAnswers.filter(
          (answer) => answer.questionIndex < currentQuestionIndex
        );
        setPreviousAnswers(filteredAnswers);
      }

      // Move to previous question
      setCurrentQuestionIndex(previousIndex);
      setSelectedAnswerIndex(null);
      setHoverAnswerIndex(0);

      // Update stored state
      saveProQAState(
        previousAnswers.filter(
          (answer) => answer.questionIndex < currentQuestionIndex
        )
      );
    } else {
      // Go back to case entry
      onBack();
    }
  };

  const handleAnswerSelect = useCallback(
    (
      answerIndex: number,
      inputValue?: string,
      nextQuestion: boolean = true
    ) => {
      if (!complaint) return;

      const currentQuestion = complaint.questions[currentQuestionIndex];
      const selectedAnswer = currentQuestion?.answers[answerIndex];

      if (!currentQuestion || !selectedAnswer) return;

      if (selectedAnswer.goto !== undefined) {
        // Clear all state and storage
        localStorage.removeItem("POLICE_PROQA_DATA");
        localStorage.removeItem("POLICE_PROQA_ANSWERS");
        setCurrentQuestionIndex(0);
        setSelectedAnswerIndex(null);
        setHoverAnswerIndex(0);
        setCurrentCode("");
        setCurrentPlan(0);
        setIsCodeOverridden(false);
        setShouldComplete(false);
        setPreviousAnswers([]);
        setCurrentSubCode("");
        setQuestionStates([]);

        // Switch to new protocol
        if (onSwitchProtocol) {
          onSwitchProtocol(selectedAnswer.goto);
        }
        return;
      }

      // Handle special input types first - early return to prevent state updates
      if (selectedAnswer.vehicleInput && !inputValue) {
        setIsVehicleModalOpen(true);
        setPendingAnswerIndex(answerIndex);
        return;
      }

      if (selectedAnswer.personInput && !inputValue) {
        setIsPersonModalOpen(true);
        setPendingAnswerIndex(answerIndex);
        return;
      }

      // Set selected answer index after confirming we're not showing a modal
      setSelectedAnswerIndex(answerIndex);

      if (selectedAnswer.input && !inputValue) {
        setIsInputModalOpen(true);
        setPendingAnswerIndex(answerIndex);
        return;
      }

      // Modify the display text based on the input type
      let displayText = selectedAnswer.display;
      if (inputValue) {
        if (selectedAnswer.vehicleInput) {
          displayText = selectedAnswer.display.replace("{vehicle}", inputValue);
        } else if (selectedAnswer.personInput) {
          displayText = selectedAnswer.display.replace("{person}", inputValue);
        } else {
          displayText = selectedAnswer.display.replace("{input}", inputValue);
        }
      } else {
        displayText = selectedAnswer.display.replace(
          "{input}",
          selectedAnswer.answer
        );
      }

      const currentState = {
        questionIndex: currentQuestionIndex,
        code: currentCode,
        subCode: currentSubCode,
        plan: currentPlan,
        isCodeOverridden: isCodeOverridden,
        answersLength: previousAnswers.length,
      };

      const rawQuestionText = processQuestionText(currentQuestion.text);

      const newAnswer = {
        question: rawQuestionText,
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

      if (selectedAnswer.updateSubCode) {
        setCurrentSubCode(selectedAnswer.updateSubCode);
      }

      if (selectedAnswer.dependency) {
        console.log("Checking dependency with answers:", previousAnswers);
        const dependencyResult = evaluateFireDependencies(
          selectedAnswer.dependency,
          previousAnswers
        );
        if (dependencyResult) {
          if (dependencyResult.goto !== undefined) {
            localStorage.removeItem("POLICE_PROQA_DATA");
            localStorage.removeItem("POLICE_PROQA_ANSWERS");
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
              onSwitchProtocol(dependencyResult.goto);
            }
            return;
          }
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
        }
      }

      if (selectedAnswer.updateCode && !isCodeOverridden) {
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

      // Store the state after changes for potential rollback
      const updatedStates = [...questionStates];
      updatedStates[currentQuestionIndex] = currentState;
      setQuestionStates(updatedStates);

      saveProQAState(updatedAnswers);

      setSelectedAnswerIndex(answerIndex);

      // End questioning immediately if end: true
      if (selectedAnswer.end) {
        setShouldComplete(true);
        localStorage.removeItem("POLICE_PROQA_DATA");
        return;
      }

      // Only move to next question if not ending and continue is true or nextQuestion is true
      if ((selectedAnswer.continue || nextQuestion) && !selectedAnswer.end) {
        moveToNextQuestion();
      }
    },
    [
      complaint,
      currentQuestionIndex,
      previousAnswers,
      currentCode,
      currentSubCode,
      currentPlan,
      isCodeOverridden,
      questionStates,
      onSwitchProtocol,
      moveToNextQuestion,
      saveProQAState,
    ]
  );

  useEffect(() => {
    const savedState = localStorage.getItem("POLICE_PROQA_DATA");
    if (!savedState) return;
    const state = JSON.parse(savedState);
    if (state.complaint === complaintName) {
      setCurrentQuestionIndex(state.currentQuestion);
      setCurrentCode(state.currentCode || "");
      setCurrentPlan(state.currentPlan);
      setCurrentSubCode(state.currentSubCode || "");
    }
  }, [complaintName]);

  useEffect(() => {
    if (!shouldComplete) return;

    let finalCode = currentCode;
    const storedState = localStorage.getItem("POLICE_PROQA_DATA");
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
      onComplete(finalCode, finalCode, subType);
    } else {
      onComplete(finalCode, finalCode, subType);
    }

    setShouldComplete(false);
  }, [
    shouldComplete,
    currentCode,
    currentSubCode,
    currentPlan,
    onComplete,
    complaint,
  ]);

  useEffect(() => {
    const foundComplaint = policeProtocols.find(
      (c: IPoliceComplaint) => c.name === complaintName
    );
    if (!foundComplaint) return;
    setComplaint(foundComplaint);
    setCurrentPlan(foundComplaint.defaultPlan);
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setHoverAnswerIndex(0);
    setCurrentCode("");
    setCurrentPlan(foundComplaint.defaultPlan);
    setIsCodeOverridden(false);
    setShouldComplete(false);
    setPreviousAnswers([]);
    setCurrentSubCode("");
  }, [complaintName]);

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
                  {currentQuestion.text}
                </h4>

                {currentQuestion.questionType === "select" ? (
                  <div ref={answersRef} className="space-y-2 overflow-y-auto">
                    {currentQuestion.answers
                      .filter(
                        (answer) =>
                          !answer.preRenderInstructions ||
                          evaluateFirePreRenderInstructions(
                            answer.preRenderInstructions,
                            previousAnswers,
                            currentCode
                          )
                      )
                      .map((answer, index) => (
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

              {currentQuestionIndex > 0 && (
                <div className="flex justify-end mt-4">
                  <Button
                    variant="outline"
                    onClick={handleBackClick}
                    className="text-sm"
                  >
                    Back
                  </Button>
                </div>
              )}
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
          setIsInputModalOpen(false);
          const savedIndex = pendingAnswerIndex;
          setPendingAnswerIndex(null);
          if (savedIndex !== null) {
            handleAnswerSelect(savedIndex, value);
          }
        }}
        title={currentQuestion ? processQuestionText(currentQuestion.text) : ""}
      />
      <VehicleInputModal
        isOpen={isVehicleModalOpen}
        onClose={() => {
          setIsVehicleModalOpen(false);
          setPendingAnswerIndex(null);
          setSelectedAnswerIndex(null);
        }}
        onSubmit={(value) => {
          if (pendingAnswerIndex !== null) {
            setIsVehicleModalOpen(false);
            const savedIndex = pendingAnswerIndex;
            setPendingAnswerIndex(null);
            handleAnswerSelect(savedIndex, value, true);
          }
        }}
        title={currentQuestion ? processQuestionText(currentQuestion.text) : ""}
      />
      <PersonInputModal
        isOpen={isPersonModalOpen}
        onClose={() => {
          setIsPersonModalOpen(false);
          setPendingAnswerIndex(null);
          setSelectedAnswerIndex(null);
        }}
        onSubmit={(value) => {
          if (pendingAnswerIndex !== null) {
            setIsPersonModalOpen(false);
            const savedIndex = pendingAnswerIndex;
            setPendingAnswerIndex(null);
            handleAnswerSelect(savedIndex, value, true);
          }
        }}
        title={currentQuestion ? processQuestionText(currentQuestion.text) : ""}
      />
    </Card>
  );
}
