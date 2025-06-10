"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { policePlans } from "@/data/plans/policePlans";
import { getPostal } from "@/data/postals";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface CallData {
  buildingInfo: string;
  callerNumber: string;
  code: string;
  codeText: string;
  complaint: string;
  crossStreet1: string;
  crossStreet2: string;
  callerStatement: string;
  dispatchTime: string;
  plan: number;
  postal: string;
  complaintShort: string;
  proqaAnswers: {
    question: string;
    answer: string;
    questionIndex: number;
    omit: boolean;
    timestamp: string;
  }[];
  service: string;
  street: string;
  tandem: boolean;
  timestamp: string;
  isOverriden?: boolean;
  callerName?: string;
  units: string[];
  reconfigured?: string;
  fromOther?: boolean;
}

// Add this helper function before the component
const formatPersonDescription = (answer: string): string => {
  if (!answer.includes("Subject: {")) return answer;

  const parseSubject = (subjectStr: string) => {
    // Extract the prefix/label from the original answer
    const label = subjectStr.split("Subject: {")[0].trim();
    const fields = subjectStr.match(/\{([^}]+)\}/)?.[1].split(", ") || [];
    const data: Record<string, string> = {};

    fields.forEach((field) => {
      const [key, value] = field.split(":");
      if (value && value.trim()) {
        data[key] = value.trim();
      }
    });

    // Race/Gender abbreviations
    const raceAbbr: Record<string, string> = {
      White: "W",
      white: "W",
      Black: "B",
      black: "B",
      Hispanic: "H",
      hispanic: "H",
      Asian: "A",
      asian: "A",
      "Pacific Islander": "PI",
      "Native American": "NA",
    };

    const race = raceAbbr[data.Race] || data.Race?.[0] || "";
    const gender = data.Gender?.[0] || "";
    const raceGender = (race + gender).toUpperCase();

    // Build description parts
    const parts = [];

    // Core description
    if (raceGender) parts.push(raceGender);
    if (data.Age) parts.push(`${data.Age}YO`);
    if (data.Hair) parts.push(`w/ ${data.Hair} hair`);

    // Physical description
    const physical = [];
    if (data.Height) physical.push(`- ${data.Height}`);
    if (data.Weight) physical.push(data.Weight);
    if (physical.length) parts.push(physical.join("/"));

    // Clothing
    if (data.Clothing) parts.push(`// WEARING: ${data.Clothing}`);

    // Additional details
    if (data.Name) parts.push(`// NAME: ${data.Name}`);
    if (data.Other) parts.push(`// ${data.Other}`);

    return `${label} ${parts.join(" ")}`;
  };

  // Handle multiple subjects
  const subjects = answer.split(" | ");
  return subjects
    .map((subject) => {
      if (subject.includes("Subject: {")) {
        return `-- ${parseSubject(subject)}`;
      }
      return `-- ${subject}`;
    })
    .join("\n");
};

const formatVehicleDescription = (vehicleStr: string): string => {
  if (!vehicleStr.includes("Vehicle: {")) return vehicleStr;

  const formatSingleVehicle = (singleVehicleStr: string) => {
    const label = singleVehicleStr.split("Vehicle: {")[0].trim();
    const fields = singleVehicleStr.match(/\{([^}]+)\}/)?.[1].split(", ") || [];
    const data: Record<string, string> = {};

    fields.forEach((field) => {
      const [key, value] = field.split(":");
      if (value && value.trim() && value.trim() !== "Unk") {
        data[key] = value.trim();
      }
    });

    const parts = [];
    const core = [];
    if (data.Color) core.push(data.Color.toUpperCase());
    if (data.Year) core.push(data.Year);
    if (data.Make) core.push(data.Make);
    if (data.Model) core.push(data.Model);
    if (core.length) parts.push(core.join(" "));

    if (data.LP) parts.push(`// LP: ${data.LP}`);
    if (data.Occ) parts.push(`// ${data.Occ}x OCC`);
    if (data.Other) parts.push(`// ${data.Other}`);

    return `-- ${label} ${parts.join(" ")}`;
  };

  // Handle multiple vehicles
  const vehicles = vehicleStr.split("|");
  return vehicles.map(formatSingleVehicle).join("\n");
};

export default function FireSummaryPage() {
  const [dispatchData, setDispatchData] = useState<CallData | null>(null);
  const [summaryText, setSummaryText] = useState("");
  const router = useRouter();

  useEffect(() => {
    const history = localStorage.getItem("DISPATCH_HISTORY");
    if (history) {
      const historyData = JSON.parse(history);
      if (Array.isArray(historyData)) {
        setDispatchData(historyData[historyData.length - 1]);
      } else {
        setDispatchData(historyData);
      }
    }
  }, []);

  useEffect(() => {
    if (dispatchData) {
      const sortedUnits = dispatchData.units;

      const township = getPostal(dispatchData.postal)?.twp;

      const text = [
        `Code: ${dispatchData.code}`,
        `Location: ${dispatchData.postal} ${dispatchData.street}${
          township ? `, ${township}` : ""
        }${dispatchData.buildingInfo ? ` - ${dispatchData.buildingInfo}` : ""}`,
        `Cross: ${dispatchData.crossStreet1 || "N/A"} / ${
          dispatchData.crossStreet2 || "N/A"
        }`,
        `Recc: ${getRecommendedUnits(dispatchData.plan)}`,
        `Disp: ${sortedUnits.join(", ") || "None"}`,
        `Complaint: ${dispatchData.complaintShort} - ${dispatchData.codeText}`,
        `Caller Statement: ${dispatchData.callerStatement}`,
        "==============================",
        `Caller: ${dispatchData.callerName || "Unknown"} | Phone: ${dispatchData.callerNumber || "N/A"}`,
        "ProQA Information:",
        dispatchData.reconfigured
          ? `-- Call reconfigured from ${dispatchData.reconfigured}`
          : "",
        !dispatchData?.proqaAnswers || dispatchData?.isOverriden
          ? "-- ProQA Override"
          : [
              ...(dispatchData.proqaAnswers || [])
                .filter((qa: any) => !qa.omit)
                .map((qa: any) => {
                  if (qa.answer.includes("Subject: {")) {
                    return formatPersonDescription(qa.answer);
                  }
                  if (qa.answer.includes("Vehicle: {")) {
                    return formatVehicleDescription(qa.answer);
                  }
                  return `-- ${qa.answer}`;
                }),
            ],
        `ProQA completed by: Dispatcher ${
          localStorage.getItem("CALLSIGN") || "UNKNOWN"
        }`,
      ]
        .flat()
        .filter(Boolean)
        .join("\n");
      setSummaryText(text);
    }
  }, [dispatchData]);

  function getRecommendedUnits(planId: number) {
    const plan = policePlans.find((p) => p.id === planId);
    if (!plan) return "None";

    return plan.units
      .map((u) => {
        let unitType = u.type;

        // Format transport units
        if (unitType === "Ambulance") {
          unitType = "Transport (BLS)";
        } else if (unitType === "Medic") {
          unitType = "Transport (ALS)";
        } else if (unitType === "AMR 400 Series (BLS)") {
          unitType = "Transport (BLS)";
        } else if (unitType === "AMR 600 Series (ALS)") {
          unitType = "Transport (ALS)";
        } else if (unitType === "AMR 800 Series (ACLS") {
          unitType = "Transport (ACLS)";
        }

        return `${u.quantity}x ${unitType}`;
      })
      .join(", ");
  }

  function handleCopy() {
    if (!dispatchData) return;

    navigator.clipboard
      .writeText(summaryText)
      .then(() => {
        const hasEMStoAssign =
          (policePlans.find((p) => p.id === dispatchData?.plan)?.emsPlan ?? 0) >
          0;
        const hasFiretoAssign =
          (policePlans.find((p) => p.id === dispatchData?.plan)?.firePlan ??
            0) > 0;

        if (hasEMStoAssign && !dispatchData.fromOther) {
          return handleContinue("EMS");
        } else if (hasFiretoAssign && !dispatchData.fromOther) {
          return handleContinue("FIRE");
        }

        toast.success("Case Created", {
          description: "Dispatch summary has been copied",
        });
        const preferences: any = localStorage.getItem("PREFERENCES");
        const parsedPreferences = JSON.parse(preferences);

        if (parsedPreferences && parsedPreferences.soundEffects) {
          const audio = new Audio("/Dispatch.mp3");
          audio.play();
          audio.volume = 0.5;
        }

        localStorage.removeItem("NEW_CALL");

        window.dispatchEvent(new CustomEvent("dispatch-storage-update"));

        router.push("/dispatch");
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
        toast.error("Failed to copy", {
          description: "Could not copy to clipboard",
        });
      });
  }

  function handleContinue(type: "EMS" | "FIRE" = "EMS") {
    navigator.clipboard.writeText(summaryText).then(() => {
      toast.success("Case Created", {
        description: "Call created, creating dispatch for " + type,
      });

      const newCall = {
        postal: dispatchData?.postal || "",
        buildingInfo: dispatchData?.buildingInfo || "",
        street: dispatchData?.street || "",
        crossStreet1: dispatchData?.crossStreet1 || "",
        crossStreet2: dispatchData?.crossStreet2 || "",
        callerNumber: dispatchData?.callerNumber || "",
        callerStatement: dispatchData?.callerStatement || "",
        service: type,
        notSecure: true,
        fromPolice: true,
      };

      localStorage.setItem("NEW_CALL", JSON.stringify(newCall));
      if (type === "EMS") {
        return (window.location.href = "/create-call/ems");
      } else if (type === "FIRE") {
        return (window.location.href = "/create-call/fire");
      }
    });
  }

  if (!dispatchData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex justify-center py-8">
        <div className="container space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Dispatch Summary</span>
                <Badge variant="outline" className="font-mono">
                  {dispatchData.complaint}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <textarea
                value={summaryText}
                onChange={(e) => setSummaryText(e.target.value)}
                className="w-full min-h-[500px] font-mono text-sm p-4 border rounded-lg resize-none auto-expand"
                style={{ resize: "none" }}
                spellCheck={false}
              />
              <div className="flex justify-end space-x-2 pt-4">
                <Button
                  className="cursor-pointer"
                  variant="destructive"
                  onClick={() => {
                    if (dispatchData.tandem && dispatchData.service === "EMS") {
                      return handleContinue();
                    } else {
                      return handleCopy();
                    }
                  }}
                >
                  {dispatchData.tandem && dispatchData.service === "EMS"
                    ? "Continue"
                    : "Complete Case"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
