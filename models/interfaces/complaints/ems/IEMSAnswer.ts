import { IPatientData } from "./IPatientData";

export type DependencyResult = {
  code?: string;
  subCode?: string;
  plan?: number;
  override?: boolean;
  send?: boolean;
};

export type DependencyFunction = (patient: IPatientData | undefined, answers?: any[]) => DependencyResult | undefined;

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
  dependency?: DependencyFunction;
  preRenderInstructions?: (patient?: IPatientData, answers?: any[], currentCode?: string) => boolean;
  send?: boolean;
}
