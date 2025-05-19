"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IResponsePlan } from "@/models/interfaces/plans/fire-ems/IResponsePlan";
import ResponsePlanDetails from "./response-plan-details";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface ResponsePlanCardProps {
  plan: IResponsePlan;
  isExpanded: boolean;
  setExpandedPlan: (planId: number | null) => void;
  serviceType: "EMS" | "Fire" | "Police";
}

export default function ResponsePlanCard({
  plan,
  isExpanded,
  setExpandedPlan,
  serviceType,
}: ResponsePlanCardProps) {
  // Parse incident type parts
  const incidentParts = plan.incidentType.split("|");
  const mainIncidentType = incidentParts[0];
  const subTypes = incidentParts.slice(1);

  const getServiceColor = () => {
    switch (serviceType) {
      case "EMS":
        return "text-green-600 dark:text-green-400";
      case "Fire":
        return "text-red-600 dark:text-red-400";
      case "Police":
        return "text-blue-600 dark:text-blue-400";
      default:
        return "text-foreground";
    }
  };

  const getSubTypeBadgeColor = (subType: string) => {
    if (subType.includes("ALS2"))
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
    if (subType.includes("ALS1"))
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
    if (subType.includes("BLS"))
      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300";
    if (subType.includes("CPR"))
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
    if (subType.includes("PD") || subType.includes("MAJOR") || subType.includes("CHESTPAIN"))
      return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300";
    if (subType.includes("ROUTINE") || subType.includes("MEDICAL"))
      return "bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-300";
    if (subType.includes("HAZMAT") || subType.includes("HM"))
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
    if (
      subType.includes("FIRE") ||
      subType.includes("BLDG") ||
      subType.includes("PERSON") ||
      subType.includes("TRAP") ||
      subType.includes("TROUBLEBREATHING") ||
      subType.includes("DELOC") || 
      subType.includes("TRAUMA")
    )
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
    if (subType.includes("RESQ"))
      return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
    if (subType.includes("MULT"))
      return "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300";
    return "bg-slate-100 text-slate-800 dark:bg-slate-300/30 dark:text-slate-300";
  };

  return (
    <Card className="mb-4 overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle
              className={`text-xl flex items-center gap-2 ${getServiceColor()}`}
            >
              <span>{mainIncidentType}</span>
              <span className="text-muted-foreground font-normal text-base">
                ({plan.name})
              </span>
            </CardTitle>
            <div className="flex flex-wrap gap-2 mt-2">
              {subTypes.map((subType, index) => (
                <Badge key={index} className={getSubTypeBadgeColor(subType)}>
                  {subType}
                </Badge>
              ))}
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setExpandedPlan(isExpanded ? null : plan.id)}
            aria-expanded={isExpanded}
            aria-controls={`response-plan-details-${plan.id}`}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="h-5 w-5" />
            </motion.div>
            <span className="sr-only">
              {isExpanded ? "Collapse" : "Expand"} response plan details
            </span>
          </Button>
        </div>
      </CardHeader>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <CardContent id={`response-plan-details-${plan.id}`}>
              <ResponsePlanDetails plan={plan} serviceType={serviceType} />
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
