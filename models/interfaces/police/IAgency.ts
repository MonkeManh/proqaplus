export interface IAgency {
    agency: string;
    abrev: string;
    units: {
        label: string;
        type: string;
    }[];
}