type RoadCrossPair = {
  crossStreet1: string;
  crossStreet2: string;
}

type AvailableRoads = {
  [roadName: string]: RoadCrossPair;
}

type CrossStreet = {
  autoFill?: boolean;
  availableRoads?: AvailableRoads;
  mainStreet?: string;
  crossStreet1?: string;
  crossStreet2?: string;
}

type PoliceAgencies = 'MBPD' | 'RCSO' | 'PBPD' | 'BCSO' | 'SSPD' | 'SAHP' | 'LSPD' | 'LCSO';

export type IPostal = {
  postal: string;
  twp?: string;
  fdDistrict: string;
  policeDistrict: string;
  fireBox: string;
  hasHeli?: boolean;
  fdRunOrder: string[];
  policeRunOrder: PoliceAgencies[];
  streets: CrossStreet;
};
