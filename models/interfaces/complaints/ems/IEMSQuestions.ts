import { JSX, ReactNode } from "react";
import { IPatientData } from "./IPatientData";
import { DependencyResult } from "./IEMSAnswer";
import { IAnswerData } from "../IAnswerData";

export interface IEMSQuestions {
    text: ReactNode;
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
    dependency?: (patient?: IPatientData, answers?: IAnswerData[]) => DependencyResult | undefined;
}