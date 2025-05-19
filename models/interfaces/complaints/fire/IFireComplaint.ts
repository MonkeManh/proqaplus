import { IComplaintServices } from "../IComplaintServices";
import { IAnswerData } from "../IAnswerData";
import { JSX, ReactNode } from "react";

export interface IFireComplaint {
  protocol: number;
  name: string;
  shortName: string;
  description: ReactNode;
  services: IComplaintServices[];
  defaultPriority: number;
  defaultPlan: number;
  questions: IFireQuestions[];
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
      }[];
    }[];
  }[];
}

export interface IFireQuestions {
  text: JSX.Element;
  questionType: "input" | "select" | "hybrid-select" | "description";
  preRenderInstructions?: (answers?: IAnswerData[]) => boolean;
  isConscious?: boolean;
  isBreathing?: boolean;
  omitQuestion?: boolean;
  answers: IAnswers[];
}

interface IAnswers {
  answer: string;
  display: string;
  preRenderInstructions?: ((answers?: IAnswerData[], currentCode?: string) => boolean);
  input?: boolean;
  send?: boolean;
  continue?: boolean;
  end?: boolean;
  goto?: number;
  gotoInstructions?: number;
  updateCode?: string;
  updateSubCode?: string;
  override?: boolean;
  dependency?: (answers: IAnswerData[]) => DependencyResult | undefined;
}


export type DependencyResult = {
  code?: string;
  subCode?: string;
  plan?: number;
  override?: boolean;
};

export type DependencyFunction = (answers: IAnswerData[]) => DependencyResult | undefined;

export interface IFireAnswer {
  answer: string;
  display: string;
  continue?: boolean;
  updateCode?: string;
  override?: boolean;
  end?: boolean;
  input?: boolean;
  goto?: number;
  updateSubType?: string;
  dependency?: DependencyFunction;
  preRenderInstructions?: (answers: IAnswerData[], currentCode?: string) => boolean;
  send?: boolean;
}
