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
      const savedState = localStorage.getItem("FIRE_PROQA_DATA");
      if (!savedState) return;
      const state = JSON.parse(savedState);
      if (state.complaint === complaintName) {
        setCurrentQuestionIndex(state.currentQuestion);
        setCurrentCode(state.currentCode || "");
        setCurrentPlan(state.currentPlan);
        setCurrentSubCode(state.currentSubCode || "");
      }
    }, [complaintName]);
}
