import { DependencyResult } from "./IEMSAnswer";
import { IPatientData } from "./IPatientData";
import { ReactNode } from "react";

export interface IEMSComplaint {
  protocol: number;
  name: string;
  description: ReactNode;
  services: {
    name: string;
    priority?: number;
  }[];
  defaultPriority: number;
  defaultPlan: number;
  questions: IEMSQuestion[];
  availableDeterminants?: {
    priority: string;
    determinants: {
      code: string;
      text: string;
      recResponse: number;
      defaultCode?: boolean;
      notBreathing?: boolean;
      notConscious?: boolean;
      multVictim?: boolean;
      subCodes?: {
        code: string;
        text: string;
        recResponse: number;
      }[]
    }[];
  }[];
}

export interface IEMSQuestion {
  text: ReactNode;
  questionType: "select" | "input";
  preRenderInstructions?: (patient?: IPatientData, answers?: any[], currentCode?: string) => boolean;
  answers: IEMSAnswer[];
  omitQuestion?: boolean;
}

export interface IEMSAnswer {
  answer: string;
  display: string;
  continue?: boolean;
  updateCode?: string;
  override?: boolean;
  end?: boolean;
  input?: boolean;
  goto?: number;
  updateSubType?: string;
  dependency?: (patient?: IPatientData, answers?: any[]) => DependencyResult | undefined;
  preRenderInstructions?: (patient?: IPatientData, answers?: any[], currentCode?: string) => boolean;
  send?: boolean;
}