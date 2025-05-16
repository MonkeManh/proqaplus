export interface IFireUnitType {
    name: string;
    care?: {
        canTransport?: boolean;
        defaultLevel?: "BLS" | "ALS" | "ACLS";
        airCare?: boolean;
    };
    division?: "SAFS" | "DSO" | "OFI" | "TSU" | "AMR";
    isSupervisor?: boolean;
    isEMSSupervisor?: boolean;
}