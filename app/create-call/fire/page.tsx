"use client";

import CaseEntry from "@/components/create-call/fire/case-entry";
import FireDeterminantSelection from "@/components/create-call/fire/determinant-selection";
import FireProQA from "@/components/create-call/fire/fire-proqa";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { fireProtocols } from "@/data/protocols/fireProtocols";
import { IFireData } from "@/models/interfaces/complaints/fire/IFireData";
import { ICallData } from "@/models/interfaces/ICallData";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FireCallPage() {
  const router = useRouter();
  const [callData, setCallData] = useState<ICallData>({
    postal: "",
    street: "",
    buildingInfo: "",
    crossStreet1: "",
    crossStreet2: "",
    callerName: "",
    callerNumber: "",
    callerText: "",
    service: "Fire",
  });
  const [fireData, setFireData] = useState<IFireData>({
    location: "",
    boxType: "",
    chiefComplaint: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedComplaint, setSelectedComplaint] = useState<string>("");
  const [recommendedCode, setRecommendedCode] = useState<string>("");

  useEffect(() => {
    const storedCallData_raw = localStorage.getItem("NEW_CALL");
    if (!storedCallData_raw) return router.push("/create-call");
    const callData: ICallData = JSON.parse(storedCallData_raw);
    if (!callData) return router.push("/create-call");
    if (callData.service !== "Fire") return router.push("/create-call");
    setCallData(callData);
  }, [router]);

  const handleInitialContinue = (
    complaintName: string,
    data: IFireData,
    skipQuestions?: boolean
  ) => {
    setFireData(data);
    setSelectedComplaint(complaintName);
    return setCurrentStep(skipQuestions ? 3 : 2);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      router.push("/create-call");
    }
  };

  const getProQAAnswers = () => {
    const proqaAnswers = localStorage.getItem("FIRE_PROQA_ANSWERS");
    if (!proqaAnswers) return;
    return JSON.parse(proqaAnswers);
  };

  const handleProtocolSwitch = (protocolNumber: number) => {
    const newComplaint = fireProtocols.find(
      (complaint) => complaint.protocol === protocolNumber
    );
    if (!newComplaint) return;
    callData.reconfigured = selectedComplaint;
    localStorage.removeItem("FIRE_PROQA_DATA");
    localStorage.removeItem("FIRE_PROQA_QUESTIONS");
    setSelectedComplaint(newComplaint.name);
  };

  const isPriorityHigher = (newCode: string, currentCode: string) => {
    const priorities = ["O", "A", "B", "C", "D", "E"];
    const newPriority = newCode.charAt(2);
    const currentPriority = currentCode.charAt(2);
    return (
      priorities.indexOf(newPriority) < priorities.indexOf(currentPriority)
    );
  };

  const handleCompleteProQA = (
    code: string,
    baseCode?: string,
    subType?: string
  ) => {
    const finalCode = baseCode && subType ? `${baseCode}${subType}` : code;

    if (!recommendedCode || isPriorityHigher(finalCode, recommendedCode)) {
      setRecommendedCode(finalCode);
    }

    if (finalCode && finalCode !== "DEFAULT") {
      setCurrentStep(3);
    }
  };

  const handleDeterminantSelect = async (
    code: string,
    plan: number,
    text: string
  ) => {
    const proqaAnswers = await getProQAAnswers();

    localStorage.removeItem("FIRE_PROQA_DATA");
    localStorage.removeItem("FIRE_PROQA_ANSWERS");

    const preferences_raw = localStorage.getItem("PREFERENCES");
    const preferences = preferences_raw ? JSON.parse(preferences_raw) : {};

    if (typeof window !== "undefined" && preferences.advancedMode) {
      const finalCallData = {
        ...callData,
        buildingInfo: fireData.location,
        boxType: fireData.boxType,
        complaint: selectedComplaint,
        complaintShort: fireProtocols.find((c) => c.name === selectedComplaint)
          ?.shortName,
        code: code,
        codeText: text,
        plan: plan,
        proqaAnswers: proqaAnswers,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem(
        "PENDING_ASSIGN_FIRE",
        JSON.stringify(finalCallData)
      );
      router.push("/assign/fire");
    } else {
      const finalCallData = {
        ...callData,
        complaint: selectedComplaint,
        complaintShort: fireProtocols.find((c) => c.name === selectedComplaint)
          ?.shortName,
        buildingInfo: fireData.location,
        boxType: fireData.boxType,
        code: code,
        codeText: text,
        plan: plan,
        proqaAnswers: proqaAnswers,
        timestamp: new Date().toISOString(),
        units: ["Pending"],
        dispatchTime: new Date().toISOString(),
      };
      localStorage.setItem("DISPATCH_HISTORY", JSON.stringify(finalCallData));
      router.push("/summary/fire");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="w-full flex justify-center flex-1 mt-12">
        {currentStep === 1 && (
          <CaseEntry
            onContinue={handleInitialContinue}
            handleBack={handleBack}
          />
        )}
        
        {currentStep === 2 && (
          <FireProQA
            complaintName={selectedComplaint}
            onComplete={handleCompleteProQA}
            onBack={handleBack}
            onSwitchProtocol={handleProtocolSwitch}
          />
        )}
        {currentStep === 3 && (
          <FireDeterminantSelection
            complaintName={selectedComplaint}
            recommendedCode={recommendedCode}
            onSelect={handleDeterminantSelect}
            onBack={handleBack}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
