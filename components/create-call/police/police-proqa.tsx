"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { policeProtocols } from "@/data/protocols/policeProtocols";
import { cn } from "@/lib/utils";
import {
  evaluateFireDependencies,
  evaluateFirePreRenderInstructions,
} from "@/lib/utils/evaluators";
import React, { useEffect, useRef, useState } from "react";
import { InputModal } from "@/components/modals/input-modal";
import { IPoliceData } from "@/models/interfaces/complaints/police/IPoliceData";
import { IPoliceComplaint } from "@/models/interfaces/complaints/police/IPoliceComplaint";

interface PoliceProQAProps {
  policeData: IPoliceData;
  complaintName: string;
  onComplete: (code: string, baseCode?: string, subType?: string) => void;
  onBack: () => void;
  onSwitchProtocol: (protocol: number) => void;
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

export default function PoliceProQA({
  policeData,
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
  const [previousAnswers, setPreviousAnswers] = useState<any[]>([]);
  const [currentSubCode, setCurrentSubCode] = useState<string>("");
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  const [pendingAnswerIndex, setPendingAnswerIndex] = useState<number | null>(
    null
  );
  const answersRef = useRef<HTMLDivElement>(null);

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
  }, [complaint, currentQuestionIndex, hoverAnswerIndex, isInputModalOpen]);

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

  const handleAnswerSelect = (answerIndex: number, inputValue?: string) => {
    if (!complaint) return;

    const currentQuestion = complaint.questions[currentQuestionIndex];
    const selectedAnswer = currentQuestion?.answers[answerIndex];

    if (!currentQuestion || !selectedAnswer) return;

    // Handle protocol switching first, before any other operations
    if (selectedAnswer.goto !== undefined) {
      // Clear all state and storage
      localStorage.removeItem("FIRE_PROQA_DATA");
      localStorage.removeItem("FIRE_PROQA_ANSWERS");
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

    saveProQAState(updatedAnswers);

    setSelectedAnswerIndex(answerIndex);

    // End questioning immediately if end: true
    if (selectedAnswer.end) {
      setShouldComplete(true);
      localStorage.removeItem("FIRE_PROQA_DATA");
      return;
    }

    // Only move to next question if not ending and continue is true
    if (selectedAnswer.continue) {
      moveToNextQuestion();
    }
  };

  const saveProQAState = (answers: any[]) => {
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
  };

  const moveToNextQuestion = () => {
    if (!complaint) return;

    let nextIndex = currentQuestionIndex + 1;

    if (nextIndex >= complaint.questions.length) {
      setShouldComplete(true);
      localStorage.removeItem("FIRE_PROQA_DATA");
      return;
    }

    setCurrentQuestionIndex(nextIndex);
    setSelectedAnswerIndex(null);
    setHoverAnswerIndex(0);
  };

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
    </Card>
  );
}
