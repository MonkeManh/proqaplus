import React, { ReactNode, isValidElement, Fragment, ReactElement } from "react";
import { DependencyFunction, DependencyResult } from "@/models/interfaces/complaints/ems/IEMSAnswer";
import { IPatientData } from "@/models/interfaces/complaints/ems/IPatientData";
import { IAnswerData } from "@/models/interfaces/complaints/IAnswerData";
import { FireDependencyFunction } from "@/models/interfaces/complaints/fire/IFireAnswer";

export function evaluatePreRenderInstructions(
  instructions: ((patient?: IPatientData, answers?: any[], currentCode?: string) => boolean) | undefined,
  patient?: IPatientData,
  answers?: any[],
  currentCode?: string
): boolean {
  if (!instructions) return true;
  try {
    return instructions(patient, answers, currentCode);
  } catch (error) {
    console.error("Error evaluating pre-render instructions:", error);
    return true;
  }
}

export function evaluateFirePreRenderInstructions(
  instructions: ((answers?: IAnswerData[], currentCode?: string) => boolean) | undefined,
  answers?: IAnswerData[],
  currentCode?: string
): boolean {
  if (!instructions) return true;
  try {
    return instructions(answers, currentCode);
  } catch (error) {
    console.error("Error evaluating pre-render instructions:", error);
    return true;
  }
}

export function evaluateDependencies(
  dependency: DependencyFunction | undefined,
  patient: IPatientData | undefined,
  answers?: IAnswerData[]
): DependencyResult | undefined {
  if (!dependency) return undefined;
  try {
    return dependency(patient, answers);
  } catch (error) {
    console.error("Error evaluating dependencies:", error);
    return undefined;
  }
}

export function evaluateFireDependencies(dependency: FireDependencyFunction | undefined, answers: IAnswerData[]) {
  if (!dependency) return undefined;
  try {
    return dependency(answers);
  } catch (error) {
    console.error("Error evaluating dependencies:", error);
    return undefined;
  }
}

export function replacePronounInNode(node: ReactNode, pronoun: string): ReactNode {
  if (typeof node === "string") {
    return node.replace(/\*\*pronoun\*\*/g, pronoun);
  }

  if (Array.isArray(node)) {
    return node.map((child, index) => (
      <Fragment key={index}>
        {replacePronounInNode(child, pronoun)}
      </Fragment>
    ));
  }

  if (isValidElement(node)) {
    const element = node as ReactElement<any>;
    const newChildren = replacePronounInNode(element.props.children, pronoun);
    return React.cloneElement(element, { ...element.props }, newChildren);
  }

  return node;
}