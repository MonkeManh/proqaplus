"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { emsPlans } from "@/data/plans/emsPlans";
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
  patient: {
    age: number;
    ageUnit: string;
    count: number;
    gender: string;
    isBreathing: boolean;
    isConscious: boolean;
    proximity: string;
  };
  plan: number;
  postal: string;
  proqaAnswers: {
    question: string;
    answer: string;
    questionIndex: number;
    omit: boolean;
    timestamp: string;
  }[];
  service: string;
  street: string;
  tandem?: boolean;
  timestamp: string;
  isOverriden?: boolean;
  units: string[];
  reconfigured?: string;
}

export default function EMSSummaryPage() {
  const [dispatchData, setDispatchData] = useState<CallData | null>(null);
  const [summaryText, setSummaryText] = useState("");
  const router = useRouter();

  const UNIT_TYPE_ORDER = ["Engine", "Truck", "Rescue", "Medic", "Chief"];

  const isLawEnforcement = (unit: string) => {
    return (
      unit.includes("Police") ||
      unit.includes("State") ||
      unit.includes("Sheriff")
    );
  };

  function sortFDUnits(units: string[], postal: string): string[] {
    const postalData = getPostal(postal);
    const runOrder = postalData?.fdRunOrder || [];

    return units.sort((a, b) => {
      // Check for law enforcement units first
      const isLawA = isLawEnforcement(a);
      const isLawB = isLawEnforcement(b);
      if (isLawA && !isLawB) return 1;
      if (!isLawA && isLawB) return -1;
      if (isLawA && isLawB) return 0;

      // Check if units are FD units (contain numbers or known unit types)
      const isFDA =
        UNIT_TYPE_ORDER.some((type) => a.includes(type)) || /\d+/.test(a);
      const isFDB =
        UNIT_TYPE_ORDER.some((type) => b.includes(type)) || /\d+/.test(b);

      // If one is FD and other isn't, put non-FD at end
      if (isFDA && !isFDB) return -1;
      if (!isFDA && isFDB) return 1;
      if (!isFDA && !isFDB) return 0;

      const stationA = a.match(/\d+/)?.[0] || "";
      const stationB = b.match(/\d+/)?.[0] || "";

      const orderA = runOrder.indexOf(stationA);
      const orderB = runOrder.indexOf(stationB);

      // If both stations are in the run order, sort by run order
      if (orderA !== -1 && orderB !== -1) {
        if (orderA !== orderB) {
          return orderA - orderB;
        }
      }

      if (orderA === -1 && orderB !== -1) return 1;
      if (orderA !== -1 && orderB === -1) return -1;

      const typeA = UNIT_TYPE_ORDER.findIndex((type) => a.includes(type));
      const typeB = UNIT_TYPE_ORDER.findIndex((type) => b.includes(type));

      if (typeA !== -1 && typeB !== -1) {
        return typeA - typeB;
      }
      if (typeA === -1 && typeB !== -1) return 1;
      if (typeA !== -1 && typeB === -1) return -1;

      return 0;
    });
  }

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
      const sortedUnits = dispatchData.units
        ? sortFDUnits([...dispatchData.units], dispatchData.postal)
        : [];
      const text = [
        `Code: ${dispatchData.code}`,
        `Location: ${dispatchData.postal} ${dispatchData.street}${
          dispatchData.buildingInfo ? ` - ${dispatchData.buildingInfo}` : ""
        }`,
        `Cross: ${dispatchData.crossStreet1 || "N/A"} / ${
          dispatchData.crossStreet2 || "N/A"
        }`,
        `Recc: ${getRecommendedUnits(dispatchData.plan)}`,
        `Disp: ${sortedUnits.join(", ") || "None"}`,
        `Problem: ${dispatchData.complaint} - ${dispatchData.codeText}`,
        `Dispatch Text: ${dispatchData.callerStatement}`,
        "==============================",
        "Scene Status: Secure",
        "Scene Com: Not Established",
        "Channel: Fire Response",
        "Staging Location: N/A",
        "==============================",
        "ProQA Information:",
        dispatchData.patient
          ? `${dispatchData.patient.count || "Unk"}x ${
              dispatchData.patient.age && dispatchData.patient.age !== 0
                ? dispatchData.patient.age
                : "Unk"
            }-${dispatchData.patient.ageUnit}-old, ${
              dispatchData.patient.gender !== "Unknown"
                ? dispatchData.patient.gender
                : "Unk Gender"
            }, ` +
            `${
              dispatchData.patient.isConscious === true
                ? "Conscious"
                : dispatchData.patient.isConscious === false
                ? "Unconscious"
                : "Unk Consciousness"
            }, ` +
            `${
              dispatchData.patient.isBreathing === true
                ? "Breathing"
                : dispatchData.patient.isBreathing === false
                ? "Not Breathing"
                : "Unk Breathing"
            }`
          : "",
        dispatchData.reconfigured ? `Call reconfigured from ${dispatchData.reconfigured}` : "",

          !dispatchData?.proqaAnswers || dispatchData?.isOverriden
          ? "ProQA Override"
          : [
              ...(dispatchData.proqaAnswers || [])
                .filter((qa: any) => !qa.omit)
                .map((qa: any) => `- ${qa.answer}`),
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
    const plan = emsPlans.find((p) => p.id === planId);
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
        toast.success("Case Created", {
          description: "Dispatch summary has been copied",
        });
        const storedUnits = localStorage.getItem("FIRE_UNITS");
        if (storedUnits) {
          const units = JSON.parse(storedUnits);
          const updatedUnits = units.map((unit: any) => {
            if (dispatchData.units.includes(unit.name)) {
              return { ...unit, status: "On Call" };
            }

            const isUnitCrossStaffed = unit.crossStaffing?.some(
              (staffedUnit: any) =>
                dispatchData.units.includes(staffedUnit.name)
            );

            if (isUnitCrossStaffed) {
              return { ...unit, status: "Out of Service" };
            }

            return unit;
          });

          localStorage.setItem(
            "FIRE_UNITS",
            JSON.stringify(updatedUnits)
          );

          const preferences: any = localStorage.getItem("PREFERENCES");
          const parsedPreferences = JSON.parse(preferences);

          if (parsedPreferences && parsedPreferences.soundEffects) {
            const audio = new Audio("/Dispatch.mp3");
            audio.play();
            audio.volume = 0.5;
          }

          localStorage.removeItem('NEW_CALL');
          localStorage.removeItem('EMS_DATA');

          window.dispatchEvent(new CustomEvent("dispatch-storage-update"));

          router.push("/dispatch");
        }
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
        toast.error("Failed to copy", {
          description: "Could not copy to clipboard",
        });
      });
  }

  function handleContinue() {
    navigator.clipboard.writeText(summaryText).then(() => {
      toast.success("Case Created", {
        description: "Create fire call before starting the LEO call",
      });

      const storedUnits = localStorage.getItem("FIRE_UNITS");
      if (storedUnits) {
        const units = JSON.parse(storedUnits);
        if (!dispatchData) return;
        const updatedUnits = units.map((unit: any) => {
          if (dispatchData.units.includes(unit.name)) {
            return { ...unit, status: "On Call" };
          }

          const isUnitCrossStaffed = dispatchData.units.some(
            (dispatchedUnit: string) =>
              unit.crossStaffing?.includes(dispatchedUnit)
          );

          if (isUnitCrossStaffed) {
            return { ...unit, status: "Out of Service" };
          }

          return unit;
        });

        localStorage.setItem(
          "FIRE_UNITS",
          JSON.stringify(updatedUnits)
        );

        router.push('/dispatch')
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
