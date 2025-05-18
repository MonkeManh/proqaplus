"use client";

import CaseEntry from "@/components/create-call/ems/case-entry";
import EMSDeterminantSelection from "@/components/create-call/ems/determinant-selection";
import EmsProQA from "@/components/create-call/ems/ems-proqa";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { emsComplaints } from "@/data/protocols/emsProtocols";
import { IEMSData } from "@/models/interfaces/complaints/ems/IEMSData";
import { IPatientData } from "@/models/interfaces/complaints/ems/IPatientData";
import { ICallData } from "@/models/interfaces/ICallData";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EMSCallPage() {
  const router = useRouter();
  const [callData, setCallData] = useState<ICallData>({
    postal: "",
    street: "",
    buildingInfo: "",
    crossStreet1: "",
    crossStreet2: "",
    callerNumber: "",
    callerText: "",
    service: "EMS",
  });
  const [emsData, setEMSData] = useState<IEMSData>({
    patientProximity: "Yes",
    patientCount: 1,
    patientAge: 0,
    ageUnit: "Years",
    gender: "Unknown",
    isConscious: "Unknown",
    isBreathing: "Unknown",
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
    if (callData.service !== "EMS") return router.push("/create-call");
    setCallData(callData);
  }, []);

  const handleInitialContinue = (
    complaintName: string,
    data: IEMSData,
    skipQuestions?: boolean
  ) => {
    setEMSData(data);
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

  const getPatientData = (): IPatientData => {
    const patientData = localStorage.getItem("PATIENT_DATA");
    if (!patientData)
      return {
        age: 0,
        ageUnit: "Years",
        gender: "Unknown",
        isConscious: "Unknown",
        isBreathing: "Unknown",
        patientProximity: "Yes",
        count: 1,
      };
    const data: IPatientData = JSON.parse(patientData);
    return {
      age: data.age,
      ageUnit: data.ageUnit,
      gender: data.gender,
      isConscious:
        data.isConscious === "Unknown" ? "Unknown" : data.isConscious === "Yes",
      isBreathing:
        data.isBreathing === "Unknown" ? "Unknown" : data.isBreathing === "Yes",
      patientProximity: data.patientProximity,
      count: data.count,
    };
  };

  const getProQAAnswers = () => {
    const proqaAnswers = localStorage.getItem("EMS_PROQA_ANSWERS");
    if (!proqaAnswers) return;
    return JSON.parse(proqaAnswers);
  };

  const handleProtocolSwitch = (protocolNumber: number) => {
    const newComplaint = emsComplaints.find(
      (complaint) => complaint.protocol === protocolNumber
    );
    if (!newComplaint) return;
    callData.reconfigured = selectedComplaint;
    localStorage.removeItem("EMS_PROQA_DATA");
    localStorage.removeItem("EMS_PROQA_QUESTIONS");
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
    const [patientData, proqaAnswers] = await Promise.all([
      getPatientData(),
      getProQAAnswers(),
    ]);

    localStorage.removeItem("PATIENT_DATA");
    localStorage.removeItem("EMS_PROQA_DATA");
    localStorage.removeItem("EMS_PROQA_ANSWERS");

    const preferences_raw = localStorage.getItem("PREFERENCES");
    const preferences = preferences_raw ? JSON.parse(preferences_raw) : {};

    if (typeof window !== "undefined" && preferences.advancedMode) {
      const finalCallData = {
        ...callData,
        complaint: selectedComplaint,
        code: code,
        codeText: text,
        plan: plan,
        patient: patientData,
        proqaAnswers: proqaAnswers,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem("PENDING_ASSIGN_EMS", JSON.stringify(finalCallData));
      window.location.href = "/assign/ems";
    } else {
      const finalCallData = {
        ...callData,
        complaint: selectedComplaint,
        complaintShort: emsComplaints.find((c) => c.name === selectedComplaint)?.shortName,
        code: code,
        codeText: text,
        plan: plan,
        patient: patientData,
        proqaAnswers: proqaAnswers,
        timestamp: new Date().toISOString(),
        units: ["Pending"],
        dispatchTime: new Date().toISOString(),
      };
      localStorage.setItem("DISPATCH_HISTORY", JSON.stringify(finalCallData));
      window.location.href = "/summary/ems";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="w-full flex justify-center flex-1 mt-12">
        {currentStep === 1 && <CaseEntry onContinue={handleInitialContinue} />}

        {currentStep === 2 && (
          <EmsProQA
            emsData={emsData}
            complaintName={selectedComplaint}
            patientData={getPatientData()}
            onComplete={handleCompleteProQA}
            onBack={handleBack}
            onSwitchProtocol={handleProtocolSwitch}
          />
        )}

        {currentStep === 3 && (
          <EMSDeterminantSelection
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
