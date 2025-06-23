"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { policePlans } from "@/data/plans/policePlans";
import { getPostal } from "@/data/postals";
import { IPreferences } from "@/models/interfaces/IPreferences";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface CallData {
  buildingInfo: string;
  callerNumber: string;
  callerName: string;
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
  units: string[];
  reconfigured?: string;
  fromOther?: boolean;
}

// Add this helper function before the component
const formatPersonDescription = (answer: string): string => {
  if (!answer.includes("Subject: {")) return answer;

  // Extract the label from the first subject entry
  const firstSubject = answer.split(" | ")[0];
  const baseLabel = firstSubject
    .split("Subject: {")[0]
    .trim()
    .replace(/:$/, ""); // Remove trailing colon

  const parseSubject = (subjectStr: string) => {
    const fields = subjectStr.match(/\{([^}]+)\}/)?.[1].split(", ") || [];
    const data: Record<string, string> = {};

    fields.forEach((field) => {
      const [key, value] = field.split(":");
      if (value && value.trim()) {
        data[key] = value.trim();
      }
    });

    // Handle race/gender format
    let raceGender = "";
    if (data.Gender) {
      if (data.Race && data.Race !== "Unknown") {
        const raceAbbr: Record<string, string> = {
          White: "W",
          Black: "B",
          Hispanic: "H",
          Asian: "A",
          "Pacific Islander": "PI",
          "Native American": "NA",
        };
        const race = raceAbbr[data.Race] || data.Race[0];
        raceGender = race + data.Gender[0];
      } else {
        raceGender = data.Gender; // Just use full gender if no race
      }
    }

    // Build description parts
    const parts = [];
    if (raceGender) parts.push(raceGender.toUpperCase());
    if (data.Age) parts.push(`${data.Age}YO`);
    if (data.Hair) parts.push(`w/ ${data.Hair} hair`);

    const physical = [];
    if (data.Height) physical.push(data.Height);
    if (data.Weight) physical.push(data.Weight);
    if (data.DOB) physical.push(`DOB: ${data.DOB}`);
    if (data.EyeColor) physical.push(`w/ ${data.EyeColor} eyes`);
    if (data.Complexion) physical.push(data.Complexion);
    if (data.Demeanor) physical.push(data.Demeanor);
    if (physical.length) parts.push(physical.join("/"));

    if (data.Clothing) parts.push(`// WEARING: ${data.Clothing}`);
    if (data.Name) parts.push(`// NAME: ${data.Name}`);
    if (data.Relationship) parts.push(`// RELATIONSHIP: ${data.Relationship}`);
    if (data.Address) parts.push(`// ADDRESS: ${data.Address}`);
    if (data.Phone) parts.push(`// PHONE: ${data.Phone}`);
    if (data.Other) parts.push(`// OTHER: ${data.Other}`);

    return parts.join(" ");
  };

  const subjects = answer.split(" | ");
  const pluralLabel = subjects.length > 1 ? `${baseLabel}s` : baseLabel;

  return [
    `-- ${pluralLabel} (${subjects.length}):`,
    ...subjects.map(
      (subject, index) => `--  {${index + 1}} ${parseSubject(subject)}`
    ),
  ].join("\n");
};

// Do the same for vehicles - always use grouped format
const formatVehicleDescription = (vehicleStr: string): string => {
  if (!vehicleStr.includes("Vehicle: {")) return vehicleStr;

  const formatSingleVehicle = (singleVehicleStr: string) => {
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
    if (core.length) parts.push(core.join("/"));

    if (data.LP) parts.push(`// LP: ${data.LP}`);
    if (data.Occ) parts.push(`// ${data.Occ}x OCC`);
    if (data.Other) parts.push(`// ${data.Other}`);

    return parts.join(" ");
  };

  const vehicles = vehicleStr.split(" | ");
  // Remove the single-vehicle condition and always use grouped format
  return [
    "-- Vehicles (" + vehicles.length + "):",
    ...vehicles.map(
      (vehicle, index) => `-- {${index + 1}} ${formatSingleVehicle(vehicle)}`
    ),
  ].join("\n");
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
        `Caller: ${dispatchData.callerName || "Unknown"} | Phone: ${
          dispatchData.callerNumber || "N/A"
        }`,
        "ProQA Information:",
        dispatchData.reconfigured
          ? `-- Call reconfigured from ${dispatchData.reconfigured}`
          : "",
        !dispatchData?.proqaAnswers || dispatchData?.isOverriden
          ? "-- ProQA Override"
          : [
              ...(dispatchData.proqaAnswers || [])
                .filter((qa) => !qa.omit)
                .map((qa) => {
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
        } else if(unitType === "EMS Notification") {
          return "EMS Notification";
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
          policePlans.find((p) => p.id === dispatchData?.plan)?.sendEMS ===
          true;
        const hasFiretoAssign =
          policePlans.find((p) => p.id === dispatchData?.plan)?.sendFire ===
          true;

        if (hasEMStoAssign && !dispatchData.fromOther) {
          return handleContinue("EMS");
        } else if (hasFiretoAssign && !dispatchData.fromOther) {
          return handleContinue("FIRE");
        }

        toast.success("Case Created", {
          description: "Dispatch summary has been copied",
        });
        
        const preferences: IPreferences = JSON.parse(
          localStorage.getItem("PREFERENCES") || "{}"
        );

        if (preferences && preferences.soundEffects) {
          const audio = new Audio("/audio/Dispatch.mp3");
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
        callerName: dispatchData?.callerName || "",
        callerStatement: dispatchData?.callerStatement || "",
        service: type,
        notSecure: true,
        fromPolice: true,
      };

      localStorage.setItem("NEW_CALL", JSON.stringify(newCall));
      if (type === "EMS") {
        return router.push("/create-call/ems");
      } else if (type === "FIRE") {
        return router.push("/create-call/fire");
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
