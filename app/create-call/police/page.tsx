"use client";

import CaseEntry from "@/components/create-call/police/case-entry";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { policeProtocols } from "@/data/protocols/policeProtocols";
import { IPoliceData } from "@/models/interfaces/complaints/police/IPoliceData";
import { ICallData } from "@/models/interfaces/ICallData";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PoliceCallPage() {
  const router = useRouter();
  const [callData, setCallData] = useState<ICallData>({
    postal: "",
    street: "",
    buildingInfo: "",
    crossStreet1: "",
    crossStreet2: "",
    callerNumber: "",
    callerText: "",
    service: "Police",
  });
  const [policeData, setPoliceData] = useState<IPoliceData>({
    callerName: "",
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
    if (callData.service !== "Police") return router.push("/create-call");
    setCallData(callData);
  }, []);

  const handleInitialContinue = (
    complaintName: string,
    data: IPoliceData,
    skipQuestions?: boolean
  ) => {
    setPoliceData(data);
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
    const proqaAnswers = localStorage.getItem("POLICE_PROQA_ANSWERS");
    if (!proqaAnswers) return;
    return JSON.parse(proqaAnswers);
  };

  const handleProtocolSwitch = (protocolNumber: number) => {
    const newComplaint = policeProtocols.find(
      (complaint) => complaint.protocol === protocolNumber
    );
    if (!newComplaint) return;
    callData.reconfigured = selectedComplaint;
    localStorage.removeItem("POLICE_PROQA_DATA");
    localStorage.removeItem("POLICE_PROQA_QUESTIONS");
    setSelectedComplaint(newComplaint.name);
  };

  const isPriorityHigher = (newCode: string, currentCode: string) => {
    const priorities = ["O", "A", "B", "C", "D", "E"];
    const newPriority = newCode.charAt(3);
    const currentPriority = currentCode.charAt(3);
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

    localStorage.removeItem("POLICE_PROQA_DATA");
    localStorage.removeItem("POLICE_PROQA_ANSWERS");

    const preferences_raw = localStorage.getItem("PREFERENCES");
    const preferences = preferences_raw ? JSON.parse(preferences_raw) : {};

    if (typeof window !== "undefined" && preferences.advancedMode) {
      const finalCallData = {
        ...callData,
        complaint: selectedComplaint,
        complaintShort: policeProtocols.find(
          (c) => c.name === selectedComplaint
        )?.shortName,
        callerName: policeData.callerName,
        code: code,
        codeText: text,
        plan: plan,
        proqaAnswers: proqaAnswers,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem(
        "PENDING_ASSIGN_POLICE",
        JSON.stringify(finalCallData)
      );
      window.location.href = "/assign/police";
    } else {
      const finalCallData = {
        ...callData,
        complaint: selectedComplaint,
        complaintShort: policeProtocols.find(
          (c) => c.name === selectedComplaint
        )?.shortName,
        callerName: policeData.callerName,
        code: code,
        codeText: text,
        plan: plan,
        proqaAnswers: proqaAnswers,
        timestamp: new Date().toISOString(),
        units: ["Pending"],
        dispatchTime: new Date().toISOString(),
      };
      localStorage.setItem("DISPATCH_HISTORY", JSON.stringify(finalCallData));
      window.location.href = "/summary/police";
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
  
          {/* {currentStep === 2 && (
            // <FireProQA
            //   fireData={fireData}
            //   complaintName={selectedComplaint}
            //   onComplete={handleCompleteProQA}
            //   onBack={handleBack}
            //   onSwitchProtocol={handleProtocolSwitch}
            // />
          )}
  
          {currentStep === 3 && (
            // <FireDeterminantSelection
            //   complaintName={selectedComplaint}
            //   recommendedCode={recommendedCode}
            //   onSelect={handleDeterminantSelect}
            //   onBack={handleBack}
            // />
          )} */}
        </main>
        <Footer />
      </div>
    );
}
