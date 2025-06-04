interface Unit {
    type: string;
    quantity: number;
}

export interface IResponsePlan {
    id: number;
    name: string;
    text?: string;
    incidentType: string;
    sendPolice?: boolean;
    policePlan?: number;
    units: Unit[];
}