import { getEMSResponsePlanFromProtocol } from "@/data/plans/emsPlans"
import { getFireResponsePlanFromProtocol } from "@/data/plans/firePlans";
import { getPoliceResponsePlanFromProtocol } from "@/data/plans/policePlans"
import React, { Fragment, isValidElement, ReactElement, ReactNode } from "react";

export function replacePronounInNode(node: ReactNode, pronoun = "the patient"): ReactNode {
  if (typeof node === "string") {
    return node.replace(/\*\*pronoun\*\*/g, pronoun)
  }

  if (Array.isArray(node)) {
    return node.map((child, index) => <Fragment key={index}>{replacePronounInNode(child, pronoun)}</Fragment>)
  }
  if (isValidElement(node)) {
    const element = node as ReactElement<{ children?: ReactNode }>
    const newChildren = replacePronounInNode(element.props.children, pronoun)
    return React.cloneElement(element, { ...element.props }, newChildren)
  }

  return node
}

export function formatQuestionText(text: ReactNode): ReactNode {
  if (!text) return ""

  if (typeof text === "string") {
    return text.replace(/\*\*pronoun\*\*/g, "the patient")
  }

  return replacePronounInNode(text)
}

// Helper function to interpret service priority
export const getServicePriorityText = (priority: number | boolean | undefined) => {
  if (priority === undefined) {
    return "Unset";
  } else if (typeof priority === "boolean") {
    return priority ? "Always Responds" : "Never Responds";
  } else if (priority === 0) {
    return "Echo Level";
  } else if (priority >= 1 && priority <= 5) {
    const levels = ["Echo", "Delta", "Charlie", "Bravo", "Alpha"];
    return `${levels[priority]} Level`;
  } else {
    return "Unknown";
  }
};

// Helper function to check if a question is patient dependent
export const isPatientDependent = (preRenderInstructions?: string) => {
  if (!preRenderInstructions) return false;
  return (
    preRenderInstructions.includes("patient") &&
    (preRenderInstructions.includes("age") ||
      preRenderInstructions.includes("gender") || 
      preRenderInstructions.includes('isConscious') || 
      preRenderInstructions.includes('isBreathing'))
  );
};

// Helper function to check if a question is answer dependent
export const isAnswerDependent = (preRenderInstructions?: string) => {
  if (!preRenderInstructions) return false;
  return (
    preRenderInstructions.includes("answers") ||
    preRenderInstructions.includes("lastAnswer")
  );
};

// Get priority color
export const getPriorityColor = (priority: string) => {
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

// Get response level text
export const getResponseLevelText = (code: string, type: string) => {
  const match = code.match(/^(\d{2,3})([A-Z])(\d{2})([A-Z]?)$/);
  if (!match) return "Unknown";

  let protocol: string | number = match[1];
  const responseLevel: string = match[2];

  switch (type) {
    case "EMS":
      protocol = parseInt(protocol, 10);
      if(isNaN(protocol) || !protocol) {
        return "Unable to Retrieve Response Plan";
      }
      const emsPlan = getEMSResponsePlanFromProtocol(protocol, responseLevel, code);
      if(!emsPlan) {
        return "Unable to Retrieve Response Plan";
      }
      return formatResponsePlan(emsPlan?.units)
    case "Fire":
      protocol = parseInt(protocol, 10);
      if(isNaN(protocol) || !protocol) {
        return "Unable to Retrieve Response Plan";
      }
      const firePlan = getFireResponsePlanFromProtocol(protocol, responseLevel, code);
      if(!firePlan) {
        return "Unable to Retrieve Response Plan";
      }
      return formatResponsePlan(firePlan?.units)
    case "Police":
      protocol = parseInt(protocol, 10);
      if(isNaN(protocol) || !protocol) {
        return "Unable to Retrieve Response Plan";
      }
      const policePlan = getPoliceResponsePlanFromProtocol(protocol, responseLevel, code);
      if(!policePlan) {
        return "Unable to Retrieve Response Plan";
      }
      return formatResponsePlan(policePlan?.units)
  }
};

export const formatResponsePlan = (plan: { type: string; quantity: number }[]) => {
  return plan.map((unit) => {
    let unitType = unit.type;
    if (unitType === "AMR 400 Series (BLS)") {
      unitType = "Ambulance";
    } else if (
      unitType === "AMR 600 Series (ALS)" ||
      unitType === "AMR 800 Series (ACLS)"
    ) {
      unitType = "Medic";
    }
    return `${unit.quantity}x ${unitType}`;
  }).join(", ");
}
