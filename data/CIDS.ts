import { Location } from "@/models/interfaces/ICIDS";

export const getLocation = (location: string): Location | undefined => {
    const locations = CIDSData.filter((loc) => loc.name === location);
    if (locations.length > 0) {
        return locations[0];
    }
    return undefined;
}

export const CIDSData: Location[] = [

]