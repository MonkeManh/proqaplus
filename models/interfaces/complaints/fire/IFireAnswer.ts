import { IAnswerData } from "../IAnswerData";
import { DependencyResult } from "./IFireComplaint";

export type FireDependencyFunction = (answers: IAnswerData[]) => DependencyResult | undefined;
