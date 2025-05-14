interface Unit {
    type: string;
    quantity: number;
}

export interface IResponsePlan {
    id: number;
    name: string;
    incidentType: string;
    units: Unit[];
}