import { IUnitStatus } from "./IUnitStatus";

export interface IFireUnitData {
    name: string;
    type: string;
    station: string;
    status: IUnitStatus;
    crossStaffing?: IFireUnitData[];
}