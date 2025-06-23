"use client";

import { emsComplaints } from "@/data/protocols/emsProtocols";
import { emsPlans } from "@/data/plans/emsPlans";
import { IEMSComplaint } from "@/models/interfaces/complaints/ems/IEMSComplaint";
import { IResponsePlan } from "@/models/interfaces/plans/fire-ems/IResponsePlan";
import { useEffect, useRef, useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DetermiantSelectionProps {
  complaintName: string;
  recommendedCode: string;
  onSelect: (code: string, plan: number, text: string) => void;
  onBack: () => void;
}

interface FlattenedDeterminant {
  code: string;
  text: string;
  recResponse: number;
  priority: string;
  isSubCode?: boolean;
  parendCode?: string;
  parentText?: string;
}

export default function EMSDeterminantSelection({
  complaintName,
  recommendedCode,
  onSelect,
  onBack,
}: DetermiantSelectionProps) {
  const [complaint, setComplaint] = useState<IEMSComplaint | null>(null);
  const [allDeterminants, setAllDeterminants] = useState<
    FlattenedDeterminant[]
  >([]);
  const [selectedCode, setSelectedCode] = useState<string>(recommendedCode);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const determinantsRef = useRef<HTMLDivElement>(null);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "O":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
      case "A":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "B":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "C":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "D":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "E":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const isRecommendedCode = (code: string) => {
    return code === recommendedCode;
  };

  const getPlanName = (planId: number) => {
    const plan = emsPlans.find((plan: IResponsePlan) => plan.id === planId);
    return plan?.incidentType || `Plan ${planId}`;
  };

  const handleSelectDeterminant = useCallback(
    (code: string, plan: number, text: string) => {
      setSelectedCode(code);
      onSelect(code, plan, text);
    },
    [onSelect]
  );

  useEffect(() => {
    const foundComplaint = emsComplaints.find(
      (c: IEMSComplaint) => c.name === complaintName
    );
    if (foundComplaint && foundComplaint.availableDeterminants) {
      setComplaint(foundComplaint);

      // Check for stored ProQA data
      const proqaData = localStorage.getItem("EMS_PROQA_DATA");
      const storedData = proqaData ? JSON.parse(proqaData) : null;

      const actualRecommendedCode = storedData?.currentSubType
        ? `${storedData.currentCode}${storedData.currentSubType}`
        : recommendedCode;

      setSelectedCode(actualRecommendedCode);

      const flattened: FlattenedDeterminant[] = [];

      foundComplaint.availableDeterminants.forEach((priorityGroup) => {
        priorityGroup.determinants.forEach((determinant) => {
          flattened.push({
            code: determinant.code,
            text: determinant.text,
            recResponse: determinant.recResponse,
            priority: priorityGroup.priority,
          });

          if (determinant.subCodes) {
            determinant.subCodes.forEach((subCode) => {
              flattened.push({
                code: `${determinant.code}${subCode.code}`,
                text: `${determinant.text} - ${subCode.text}`,
                recResponse: subCode.recResponse,
                priority: priorityGroup.priority,
                isSubCode: true,
                parendCode: determinant.code,
                parentText: determinant.text,
              });
            });
          }
        });
      });

      setAllDeterminants(flattened);

      const recommendedIndex = flattened.findIndex(
        (d) => d.code === actualRecommendedCode
      );
      if (recommendedIndex >= 0) {
        setFocusedIndex(recommendedIndex);
      }
    }
  }, [complaintName, recommendedCode]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!allDeterminants.length) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % allDeterminants.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex(
          (prev) => (prev - 1 + allDeterminants.length) % allDeterminants.length
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        const determinant = allDeterminants[focusedIndex];
        handleSelectDeterminant(
          determinant.code,
          determinant.recResponse,
          determinant.text
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [allDeterminants, focusedIndex, handleSelectDeterminant]);

  useEffect(() => {
    if (determinantsRef.current) {
      const determinants =
        determinantsRef.current.querySelectorAll(".determinant-item");
      if (determinants[focusedIndex]) {
        determinants[focusedIndex].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [focusedIndex]);

  // Add new useEffect for initial recommended code scroll
  useEffect(() => {
    if (determinantsRef.current && recommendedCode) {
      setTimeout(() => {
        const determinants = determinantsRef.current?.querySelectorAll(".determinant-item");
        const recommendedIndex = Array.from(determinants || []).findIndex(
          el => el.textContent?.includes(recommendedCode)
        );
        if (recommendedIndex >= 0 && determinants?.[recommendedIndex]) {
          determinants[recommendedIndex].scrollIntoView({
            behavior: "auto",
            block: "center"
          });
        }
      }, 100);
    }
  }, [recommendedCode, complaint]);

  if (!complaint || !complaint.availableDeterminants) {
    return <div>Loading determinants...</div>;
  }

  return (
    <Card className="max-w-5xl mx-auto h-fit w-full">
      <CardHeader>
        <CardTitle className="text-2xl">ProQA Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium">
              Select Determinant Code: {complaint.name}
            </h3>
            <p className="text-muted-foreground">
              Recommended: {recommendedCode}
            </p>
          </div>

          <Card>
            <CardContent className="p-4">
              <div ref={determinantsRef} className="overflow-y-auto">
                <div className="space-y-4">
                  {complaint.availableDeterminants
                    .sort((a, b) => a.priority.localeCompare(b.priority))
                    .map((priorityGroup) => (
                      <div key={priorityGroup.priority} className="space-y-2">
                        <h3
                          className={`text-md font-medium p-2 rounded-md ${getPriorityColor(
                            priorityGroup.priority
                          )}`}
                        >
                          {priorityGroup.priority} Level
                        </h3>
                        <div className="space-y-1">
                          {priorityGroup.determinants.map((det) => {
                            const globalIndex = allDeterminants.findIndex(
                              (d) => d.code === det.code
                            );
                            const isRecommended = isRecommendedCode(det.code);
                            const isSelected = selectedCode === det.code;
                            const isFocused = focusedIndex === globalIndex;

                            return (
                              <div key={det.code} className="space-y-0.5">
                                <div
                                  className={cn(
                                    "determinant-item flex items-center gap-4 p-2 rounded-md",
                                    isSelected
                                      ? "bg-primary text-primary-foreground"
                                      : isFocused
                                      ? "bg-green-500 text-white"
                                      : "",
                                    isRecommended
                                      ? "border-2 border-red-500"
                                      : ""
                                  )}
                                  onClick={() => {
                                    setFocusedIndex(globalIndex);
                                    handleSelectDeterminant(
                                      det.code,
                                      det.recResponse,
                                      det.text
                                    );
                                  }}
                                >
                                  <span className="font-mono font-medium w-16">
                                    {det.code}
                                  </span>
                                  <span className="flex-1">{det.text}</span>
                                  <span className="ml-2">
                                    {getPlanName(det.recResponse)}
                                  </span>
                                </div>
                                {/* Sub-codes section */}
                                {det.subCodes && (
                                  <div className="ml-6 space-y-0.5">
                                    {det.subCodes.map((subCode) => {
                                      const fullCode = `${det.code}${subCode.code}`;
                                      const subGlobalIndex =
                                        allDeterminants.findIndex(
                                          (d) => d.code === fullCode
                                        );
                                      const isSubRecommended =
                                        isRecommendedCode(fullCode);
                                      const isSubSelected =
                                        selectedCode === fullCode;
                                      const isSubFocused =
                                        focusedIndex === subGlobalIndex;

                                      return (
                                        <div
                                          key={fullCode}
                                          className={cn(
                                            "determinant-item flex items-center gap-4 p-1.5 rounded-md text-sm px-4",
                                            isSubSelected
                                              ? "bg-primary text-primary-foreground"
                                              : isSubFocused
                                              ? "bg-green-500 text-white"
                                              : "bg-muted/50",
                                            isSubRecommended
                                              ? "border-2 border-green-500"
                                              : ""
                                          )}
                                          onClick={() => {
                                            setFocusedIndex(subGlobalIndex);
                                            handleSelectDeterminant(
                                              fullCode,
                                              subCode.recResponse,
                                              `${det.text} - ${subCode.text}`
                                            );
                                          }}
                                        >
                                          <span className="font-mono font-medium w-4">
                                            {subCode.code}
                                          </span>
                                          <span className="flex-1">
                                            {subCode.text}
                                          </span>
                                          <span className="ml-2">
                                            {getPlanName(subCode.recResponse)}
                                          </span>
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={onBack}>
              Back
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
