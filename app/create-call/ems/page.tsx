"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { emsComplaints } from "@/data/protocols/emsProtocols";
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
    skipQuestions?: boolean
  ) => {
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

  const getPatientData = () => {
    const patientData = localStorage.getItem("PATIENT_DATA");
    if (!patientData) return;
    const data = JSON.parse(patientData);
    return {
      age: data.age,
      ageUnit: data.ageUnit,
      gender: data.gender,
      isConscious:
        data.isConscious === "Unknown" ? "Unknown" : data.isConscious === "Yes",
      isBreathing:
        data.isBreathing === "Unknown" ? "Unknown" : data.isBreathing === "Yes",
      callerType: data.callerType,
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
    callData.reconfigured = true;
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

  const handleDeterminantSelect = async (code: string, plan: number, text: string) => {
    const [patientData, proqaAnswers] = await Promise.all([
      getPatientData(),
      getProQAAnswers(),
    ]);

    const finalCallData = {
        ...callData,
        complaint: selectedComplaint,
        code: code,
        codeText: text,
        plan: plan,
        patient: patientData,
        proqaAnswers: proqaAnswers,
        timestamp: new Date().toISOString(),
    }

    localStorage.setItem('PENDING_ASSIGN_EMS', JSON.stringify(finalCallData));
    localStorage.removeItem('PATIENT_DATA');
    localStorage.removeItem("EMS_PROQA_DATA");
    localStorage.removeItem("EMS_PROQA_ANSWERS");

    if(typeof window !== "undefined") {
      window.location.href = "/assign/ems";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="w-full flex justify-center flex-1 mt-12">
            
        </main>
        <Footer />
    </div>
  )
}
