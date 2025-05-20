import { IResponsePlan } from "@/models/interfaces/plans/fire-ems/IResponsePlan";
import { emsComplaints } from "../protocols/emsProtocols";
import { IEMSComplaint } from "@/models/interfaces/complaints/ems/IEMSComplaint";

export const getFireResponsePlan = (id: number): IResponsePlan | undefined => {
  return firePlans.find((plan) => plan.id === id);
};

export const getFireResponsePlanFromProtocol = (
  protocol: number,
  priority: string,
  code: string
): IResponsePlan | undefined => {
  const complaint = emsComplaints.find(
    (c: IEMSComplaint) => c.protocol === protocol
  );
  if (!complaint) return undefined;

  const priorityGroup = complaint.availableDeterminants.find(
    (p) => p.priority === priority
  );
  if (!priorityGroup) return undefined;

  const determinant = priorityGroup.determinants.find((d) => d.code === code);
  if (!determinant) return undefined;

  return getFireResponsePlan(determinant.recResponse);
};

export const firePlans: IResponsePlan[] = [
  {
    id: 1,
    name: "SA",
    incidentType: "AIRBORNE|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Port Authority",
        quantity: 1,
      },
    ],
  },
  {
    id: 2,
    name: "SE",
    incidentType: "AIR|INVEST|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Port Authority",
        quantity: 1,
      },
    ],
  },
  {
    id: 3,
    name: "SE",
    incidentType: "AIR|STANDBY|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Port Authority",
        quantity: 1,
      },
    ],
  },
  {
    id: 4,
    name: "PHM1",
    incidentType: "AIR|ALERT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Port Authority",
        quantity: 2,
      },
    ],
  },
  {
    id: 5,
    name: "HMFULL",
    incidentType: "AIR|FullEmergency",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Crash",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Port Authority",
        quantity: 2,
      },
    ],
  },
  {
    id: 6,
    name: "PHM1",
    incidentType: "AIR|MinorEmergency",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Port Authority",
        quantity: 2,
      },
    ],
  },
  {
    id: 7,
    name: "HMFULL",
    incidentType: "AIR|CRASH|LARGE",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Crash",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 2,
      },
      {
        type: "Helicopter",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 3,
      },
      {
        type: "Traffic",
        quantity: 1,
      },
      {
        type: "Port Authority",
        quantity: 2,
      },
      {
        type: "Police Supervisor",
        quantity: 1,
      },
      {
        type: "Police Watch Commander",
        quantity: 1,
      },
    ],
  },
  {
    id: 8,
    name: "PHM1",
    incidentType: "AIR|CRASH|SMALL",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Port Authority",
        quantity: 2,
      },
      {
        type: "Police Patrol",
        quantity: 2,
      },
      {
        type: "Police Supervisor",
        quantity: 1,
      },
    ],
  },
  {
    id: 9,
    name: "HMFULL",
    incidentType: "FIRE|AIR|LARGE",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Crash",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 2,
      },
      {
        type: "Police Patrol",
        quantity: 1,
      },
      {
        type: "Port Authority",
        quantity: 2,
      },
      {
        type: "Police Supervisor",
        quantity: 1,
      },
    ],
  },
  {
    id: 10,
    name: "PHM1",
    incidentType: "FIRE|AIR|SMALL",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Port Authority",
        quantity: 2,
      },
      {
        type: "Police Patrol",
        quantity: 1,
      },
      {
        type: "Police Supervisor",
        quantity: 1,
      },
    ],
  },
  {
    id: 11,
    name: "HMFULLWTR",
    incidentType: "AIR|CRASH|LARGE|WATER",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Crash",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 2,
      },
      {
        type: "Rescue Boat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 2,
      },
      {
        type: "Helicopter",
        quantity: 1,
      },
      {
        type: "Port Authority",
        quantity: 3,
      },
      {
        type: "Police Supervisor",
        quantity: 1,
      },
    ],
  },
  {
    id: 12,
    name: "PHMWTR",
    incidentType: "AIR|CRASH|SMALL|WATER",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 2,
      },
      {
        type: "Rescue Boat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Port Authority",
        quantity: 3,
      },
    ],
  },
  {
    id: 13,
    name: "SCE",
    incidentType: "ALARM|HOME|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 14,
    name: "SCT",
    incidentType: "ALARM|CO",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 15,
    name: "FDALS1",
    incidentType: "ALARM|CO|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 16,
    name: "FDMULTP",
    incidentType: "ALARM|CO|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 17,
    name: "FDALS1",
    incidentType: "ALARM|FIRE|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 18,
    name: "SCE",
    incidentType: "ALARM|SINGLE|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 19,
    name: "HMADAPT",
    incidentType: "HMINVEST",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 20,
    name: "SCE",
    incidentType: "SVC|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 21,
    name: "SCT",
    incidentType: "SVC|LOCK|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 22,
    name: "SCLA",
    incidentType: "SVC|LIFT ASSIST",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 23,
    name: "SCE",
    incidentType: "SVC|ANIMAL|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 24,
    name: "SCW",
    incidentType: "SVC|WATER|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 25,
    name: "FC",
    incidentType: "LANDINGZONE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 26,
    name: "SCFF",
    incidentType: "SVC|OFI|FOLLOWUP",
    units: [
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 27,
    name: "SCFC",
    incidentType: "SVC|OFI|CODE",
    units: [
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 28,
    name: "SCFI",
    incidentType: "SVC|OFI|INVEST",
    units: [
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 29,
    name: "SCFO",
    incidentType: "SVC|OFI|OTHER",
    units: [
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 30,
    name: "SCE",
    incidentType: "SVC|EVENT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 31,
    name: "SCE",
    incidentType: "SVC|MERCURY",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 32,
    name: "SCE",
    incidentType: "SVC|BBQ|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 33,
    name: "SCT",
    incidentType: "SVC|MALF",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 34,
    name: "SCE",
    incidentType: "SVC",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 35,
    name: "SCTE",
    incidentType: "SVC|VEH|LOCKOUT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 36,
    name: "SCE",
    incidentType: "SVC|CheckWelfare",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 37,
    name: "SCTE",
    incidentType: "SVC|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 38,
    name: "SCB",
    incidentType: "SVC|SAFE|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 39,
    name: "HMFULLB",
    incidentType: "SVC|STAGE|BLS",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Crash",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Port Authority",
        quantity: 2,
      },
    ],
  },
  {
    id: 40,
    name: "SCB",
    incidentType: "SVC|POL|SWEEP|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 41,
    name: "SCB",
    incidentType: "SVC|POL|BARRICADE|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 42,
    name: "SCB",
    incidentType: "SVC|POL|SPECOPS|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 43,
    name: "SCB",
    incidentType: "SVC|POL|TAC|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 44,
    name: "FF",
    incidentType: "SVC|LOCKOUT|FoodOnStove|BLS",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 45,
    name: "SCB",
    incidentType: "SVC|MH|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 46,
    name: "SCB",
    incidentType: "SVC|COMM|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 47,
    name: "SCFFB",
    incidentType: "SVC|OFI|FOLLOWUP|BLS",
    units: [
      {
        type: "Fire Investigator",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 48,
    name: "SCFCB",
    incidentType: "SVC|OFI|CODE|BLS",
    units: [
      {
        type: "Fire Investigator",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 49,
    name: "SCFIB",
    incidentType: "SVC|OFI|INVEST|BLS",
    units: [
      {
        type: "Fire Investigator",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 50,
    name: "SCFOB",
    incidentType: "SVC|OFI|OTHER|BLS",
    units: [
      {
        type: "Fire Investigator",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 51,
    name: "SCTEB",
    incidentType: "SVC|EVENT|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 52,
    name: "SCEB",
    incidentType: "SVC|MERCURY|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 53,
    name: "SCEB",
    incidentType: "SVC|BBQ|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 54,
    name: "SCTB",
    incidentType: "SVC|MALF|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 55,
    name: "SCB",
    incidentType: "SVC|SAFE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 56,
    name: "HMFULL",
    incidentType: "SVC|STAGE",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Crash",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Port Authority",
        quantity: 2,
      },
    ],
  },
  {
    id: 57,
    name: "TSU",
    incidentType: "SVC|POL|SWEEP",
    units: [
      {
        type: "Tactical Support Unit",
        quantity: 1,
      },
    ],
  },
  {
    id: 58,
    name: "TSU",
    incidentType: "SVC|POL|BARRICADE",
    units: [
      {
        type: "Tactical Support Unit",
        quantity: 1,
      },
    ],
  },
  {
    id: 59,
    name: "TSU",
    incidentType: "SVC|POL|SPECOPS",
    units: [
      {
        type: "Tactical Support Unit",
        quantity: 1,
      },
    ],
  },
  {
    id: 60,
    name: "TSU",
    incidentType: "SVC|POL|TAC",
    units: [
      {
        type: "Tactical Support Unit",
        quantity: 1,
      },
    ],
  },
  {
    id: 61,
    name: "FE",
    incidentType: "SVC|LOCKOUT|FoodOnStove",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 62,
    name: "SCB",
    incidentType: "SVC|MH",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 63,
    name: "SCB",
    incidentType: "SVC|COMM",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 64,
    name: "SC1",
    incidentType: "SVC|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 65,
    name: "SC1",
    incidentType: "SVC|SAFE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 66,
    name: "HMFULL",
    incidentType: "SVC|STAGE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Crash",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Port Authority",
        quantity: 2,
      },
    ],
  },
  {
    id: 67,
    name: "SC1",
    incidentType: "SVC|POL|SWEEP|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 68,
    name: "SC1",
    incidentType: "SVC|POL|BARRICADE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 69,
    name: "SC1",
    incidentType: "SVC|POL|SPECOPS|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 70,
    name: "SC1",
    incidentType: "SVC|POL|TAC|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 71,
    name: "FF",
    incidentType: "SVC|LOCKOUT|FoodOnStove|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 72,
    name: "SC1",
    incidentType: "SVC|MH|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 73,
    name: "SC1",
    incidentType: "SVC|COMM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 74,
    name: "FC",
    incidentType: "SVC|OFI|FOLLOWUP|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 75,
    name: "SCFF1",
    incidentType: "SVC|OFI|CODE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 76,
    name: "SCFC1",
    incidentType: "SVC|OFI|INVEST|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 77,
    name: "SCFI1",
    incidentType: "SVC|OFI|OTHER|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 78,
    name: "SCFO1",
    incidentType: "SVC|EVENT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 79,
    name: "SCTE1",
    incidentType: "SVC|MERCURY|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 80,
    name: "SCE1",
    incidentType: "SVC|BBQ|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 81,
    name: "SCT1",
    incidentType: "SVC|MALF|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 82,
    name: "SA",
    incidentType: "WATER",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 83,
    name: "FE",
    incidentType: "TECH|INVEST",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 84,
    name: "WTR0",
    incidentType: "TECH|INVEST|WATER",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
    ],
  },
  {
    id: 85,
    name: "RES",
    incidentType: "TECH|RESQ",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 86,
    name: "RES",
    incidentType: "CONFINEDSPACE|RESQ",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 87,
    name: "RES",
    incidentType: "COLLAPSE|RESQ",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 88,
    name: "RES",
    incidentType: "TRENCH|RESQ",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 89,
    name: "TECHWTR",
    incidentType: "TECH|RESQ|WATER",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 90,
    name: "TECHWTR",
    incidentType: "COLLAPSE|RESQ|WATER",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 91,
    name: "TRAR",
    incidentType: "TRANSFORMER|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 92,
    name: "TRA",
    incidentType: "TRANSFORMER",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 93,
    name: "TRA1",
    incidentType: "TRANSFORMER|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 94,
    name: "TRA2",
    incidentType: "TRANSFORMER|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 95,
    name: "TRAM",
    incidentType: "TRANSFORMER|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 96,
    name: "APPR",
    incidentType: "APPLIANCE|PROBLEM|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 97,
    name: "APP",
    incidentType: "APPLIANCE|PROBLEM",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 98,
    name: "APP1",
    incidentType: "APPLIANCE|PROBLEM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 99,
    name: "APP2",
    incidentType: "APPLIANCE|PROBLEM|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 100,
    name: "APPM",
    incidentType: "APPLIANCE|PROBLEM|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 101,
    name: "ELECR",
    incidentType: "ELEC|HAZ|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 102,
    name: "ELEC",
    incidentType: "ELEC|HAZ",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 103,
    name: "ELEC1",
    incidentType: "ELEC|HAZ|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 104,
    name: "ELEC2",
    incidentType: "ELEC|HAZ|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 105,
    name: "ELECM",
    incidentType: "ELEC|HAZ|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 106,
    name: "ELECARR",
    incidentType: "ELEC|ARC|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 107,
    name: "ELECARC",
    incidentType: "ELEC|ARC",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 108,
    name: "ELECARC1",
    incidentType: "ELEC|ARC|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 109,
    name: "ELECARC2",
    incidentType: "ELEC|ARC|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 110,
    name: "ELECARCM",
    incidentType: "ELEC|ARC|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 111,
    name: "SE",
    incidentType: "WIRESDOWN|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ]
  },
  {
    id: 112,
    name: "WIRES",
    incidentType: "WIRESDOWN",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 113,
    name: "WIRES1",
    incidentType: "WIRESDOWN|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 114,
    name: "WIRES2",
    incidentType: "WIRESDOWN|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 115,
    name: "WIRESM",
    incidentType: "WIRESDOWN|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 116,
    name: "APPOR",
    incidentType: "APPLIANCE|ODOR|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      }
    ]
  },
  {
    id: 117,
    name: "APPO",
    incidentType: "APPLIANCE|ODOR",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      }
    ]
  },
  {
    id: 118,
    name: "APPO1",
    incidentType: "APPLIANCE|ODOR|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      }
    ]
  },
  {
    id: 119,
    name: "APPO2",
    incidentType: "APPLIANCE|ODOR|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      }
    ]
  },
  {
    id: 120,
    name: "APPOM",
    incidentType: "APPLIANCE|ODOR|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      }
    ]
  },
  {
    id: 121,
    name: "ELECOR",
    incidentType: "ELEC|ODOR|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      }
    ]
  },
  {
    id: 122,
    name: "ELECO",
    incidentType: "ELEC|ODOR",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      }
    ]
  },
  {
    id: 123,
    name: "ELECO1",
    incidentType: "ELEC|ODOR|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      }
    ]
  },
  {
    id: 124,
    name: "ELECO2",
    incidentType: "ELEC|ODOR|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      }
    ]
  },
  {
    id: 125,
    name: "ELECOM",
    incidentType: "ELEC|ODOR|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      }
    ]
  },
  {
    id: 126,
    name: "ELECIR",
    incidentType: "ELEC|INVEST|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1
      }
    ]
  },
  {
    id: 127,
    name: "ELECI",
    incidentType: "ELEC|INVEST",
    units: [
      {
        type: "Engine",
        quantity: 1
      }
    ]
  },
  {
    id: 128,
    name: "ELECI1",
    incidentType: "ELEC|INVEST|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1
      },
      {
        type: "Transport (ALS)",
        quantity: 1
      }
    ]
  },
  {
    id: 129,
    name: "ELECI2",
    incidentType: "ELEC|INVEST|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1
      },
      {
        type: "Transport (ALS)",
        quantity: 1
      },
      {
        type: "EMS Officer",
        quantity: 1
      }
    ]
  },
  {
    id: 130,
    name: "ELECIM",
    incidentType: "ELEC|INVEST|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2
      },
      {
        type: "Transport (ALS)",
        quantity: 1
      },
      {
        type: "Transport (BLS)",
        quantity: 1
      }
    ]
  },
  {
    id: 131,
    name: "ELECWR",
    incidentType: "ELEC|HAZ|WATER|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      }
    ]
  },
  {
    id: 132,
    name: "ELECW",
    incidentType: "ELEC|HAZ|WATER",
    units: [
      {
        type: "Engine",
        quantity: 1,
      }
    ]
  },
  {
    id: 133,
    name: "ELECW1",
    incidentType: "ELEC|HAZ|WATER|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      }
    ]
  },
  {
    id: 134,
    name: "ELECW2",
    incidentType: "ELEC|HAZ|WATER|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      }
    ]
  },
  {
    id: 135,
    name: "ELECWM",
    incidentType: "ELEC|HAZ|WATER|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      }
    ]
  },
  {
    id: 136,
    name: "WIRESSMR",
    incidentType: "WIRESDOWN|ARC|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      }
    ]
  },
  {
    id: 137,
    name: "WIRESAR",
    incidentType: "WIRESDOWN|ARC",
    units: [
      {
        type: "Engine",
        quantity: 1,
      }
    ]
  },
  {
    id: 138,
    name: "WIRESAR1",
    incidentType: "WIRESDOWN|ARC|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      }
    ]
  },
  {
    id: 139,
    name: "WIRESAR2",
    incidentType: "WIRESDOWN|ARC|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      }
    ]
  },
  {
    id: 140,
    name: "WIRESARM",
    incidentType: "WIRESDOWN|ARC|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      }
    ]
  },
  {
    id: 141,
    name: "SUBSR",
    incidentType: "ELEC|SUBS|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      }
    ]
  },
  {
    id: 142,
    name: "SUBS",
    incidentType: "ELEC|SUBS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      }
    ]
  },
  {
    id: 143,
    name: "SUBS1",
    incidentType: "ELEC|SUBS|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      }
    ]
  },
  {
    id: 144,
    name: "SUBS2",
    incidentType: "ELEC|SUBS|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      }
    ]
  },
  {
    id: 145,
    name: "SUBSM",
    incidentType: "ELEC|SUBS|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      }
    ]
  },
  {
    id: 146,
    name: "ELECUR",
    incidentType: "ELEC|UNDER|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      }
    ]
  },
  {
    id: 147,
    name: "ELECU",
    incidentType: "ELEC|UNDER",
    units: [
      {
        type: "Engine",
        quantity: 1,
      }
    ]
  },
  {
    id: 148,
    name: "ELECU1",
    incidentType: "ELEC|UNDER|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      }
    ]
  },
  {
    id: 149,
    name: "ELECU2",
    incidentType: "ELEC|UNDER|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      }
    ]
  },
  {
    id: 150,
    name: "ELECUM",
    incidentType: "ELEC|UNDER|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      }
    ]
  },
  {
    id: 151,
    name: "SOLARR",
    incidentType: "SOLAR|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      }
    ]
  },
  {
    id: 152,
    name: "SOLAR",
    incidentType: "SOLAR",
    units: [
      {
        type: "Engine",
        quantity: 1,
      }
    ]
  },
  {
    id: 153,
    name: "SOLAR1",
    incidentType: "SOLAR|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      }
    ]
  },
  {
    id: 154,
    name: "SOLAR2",
    incidentType: "SOLAR|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      }
    ]
  },
  {
    id: 155,
    name: "SOLARM",
    incidentType: "SOLAR|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      }
    ]
  },
  {
    id: 156,
    name: "SCT",
    incidentType: "ELEVATOR|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      }
    ]
  },
  {
    id: 157,
    name: "SCT",
    incidentType: "ELEVATOR",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      }
    ]
  },
  {
    id: 158,
    name: "SCT",
    incidentType: "ALARM|ELEVATOR|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      }
    ]
  },
  {
    id: 159,
    name: "SCTE",
    incidentType: "ELEVATOR|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      }
    ]
  },
  {
    id: 160,
    name: "ALS1",
    incidentType: "ELEVATOR|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      }
    ]
  },
  {
    id: 161,
    name: "PAALS1",
    incidentType: "ELEVATOR|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      }
    ]
  }
];
