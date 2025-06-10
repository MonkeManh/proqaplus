import { IComplaintServices } from "../IComplaintServices";
import { IAnswerData } from "../IAnswerData";
import { JSX, ReactNode } from "react";

export interface IPoliceComplaint {
  protocol: number;
  name: string;
  shortName: string;
  description: ReactNode;
  services: IComplaintServices[];
  defaultPriority: number;
  defaultPlan: number;
  questions: IPoliceQuestions[];
  availableDeterminants: {
    priority: "O" | "A" | "B" | "C" | "D" | "E";
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

export interface IPoliceQuestions {
  text: JSX.Element;
  questionType: "input" | "select" | "hybrid-select" | "description" | "vehicle-description";
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
  vehicleInput?: boolean;
  personInput?: boolean;
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
  goto?: number;
};

export type DependencyFunction = (answers: IAnswerData[]) => DependencyResult | undefined;

export interface IPoliceAnswer {
  answer: string;
  display: string;
  continue?: boolean;
  updateCode?: string;
  override?: boolean;
  end?: boolean;
  input?: boolean;
  vehicleInput?: boolean;
  personInput?: boolean;
  goto?: number;
  updateSubType?: string;
  dependency?: DependencyFunction;
  preRenderInstructions?: (answers: IAnswerData[], currentCode?: string) => boolean;
  send?: boolean;
}
