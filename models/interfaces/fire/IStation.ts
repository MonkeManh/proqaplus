export interface IStation {
    station: string;
    stationID: string;
    units: {
        label: string;
        type: string;
    }[];
}