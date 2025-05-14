import { JSX } from "react";

export interface IEMSQuestions {
    text: JSX.Element;
    questionType: 'input' | 'select' | 'hybrid-select' | 'description';
    preRenderInstructions?: () => any;
    isConscious?: boolean;
    isBreathing?: boolean;
    answers: IAnswers[];
    availableDeterminants: IResponsePriority[];
}

interface IAnswers {
    answer: string;
    display: string;
    continue?: boolean;
    end?: boolean;
    goto?: number;
    gotoInstructions?: number;
    updateCode?: string;
    updateSubCode?: string;
    override?: boolean;
    dependency?: () => any;
}

interface IResponsePriority {
    priority: string;
    determinants: IDeterminants[];
}

interface IDeterminants {
    code: string;
    text: string;
    recResponse: number;
    notBreathing?: boolean;
    notConscious?: boolean;
    multVictim?: boolean;
    unknown?: boolean;
    subCodes?: ISubCode[];
}

interface ISubCode {
    code: string;
    text: string;
    recResponse: number;
}