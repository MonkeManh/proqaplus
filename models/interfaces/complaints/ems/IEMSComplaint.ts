import { IComplaintServices } from "../IComplaintServices";
import { DependencyResult } from "./IEMSAnswer";
import { IPatientData } from "./IPatientData";
import { JSX, ReactNode } from "react";

export interface IEMSComplaint {
  protocol: number;
  name: string;
  shortName: string;
  description: ReactNode;
  services: IComplaintServices[];
  defaultPriority: number;
  defaultPlan: number;
  questions: IEMSQuestions[];
  availableDeterminants: {
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

export interface IEMSQuestions {
    text: JSX.Element;
    questionType: 'input' | 'select' | 'hybrid-select' | 'description';
    preRenderInstructions?: (patient?: IPatientData) => boolean;
    isConscious?: boolean;
    isBreathing?: boolean;
    omitQuestion?: boolean;
    answers: IAnswers[];
}

interface IAnswers {
    answer: string;
    display: string;
    preRenderInstructions?: (patient?: IPatientData) => boolean;
    input?: boolean;
    send?: boolean;
    continue?: boolean;
    end?: boolean;
    goto?: number;
    gotoInstructions?: number;
    updateCode?: string;
    updateSubCode?: string;
    override?: boolean;
    dependency?: (patient?: IPatientData, answers?: any[]) => DependencyResult | undefined;
}