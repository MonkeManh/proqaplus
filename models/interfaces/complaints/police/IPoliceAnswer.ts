import { IAnswerData } from "../IAnswerData";
import { DependencyResult } from "./IPoliceComplaint";

export type FireDependencyFunction = (answers: IAnswerData[]) => DependencyResult | undefined;
