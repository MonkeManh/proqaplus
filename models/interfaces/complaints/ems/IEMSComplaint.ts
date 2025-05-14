import { JSX } from "react";
import { IComplaintServices } from "../IComplaintServices";

export interface IEMSComplaint {
    protocol: number;
    name: string;
    description: JSX.Element;
    services: IComplaintServices[];
    defaultPriority: number;
    defaultPlan: number;
}