export interface IEMSData {
    patientProximity: string;
    patientCount: number;
    patientAge: number;
    ageUnit: string;
    gender: string;
    isConscious: boolean | string;
    isBreathing: boolean | string;
    chiefComplaint: string;
}