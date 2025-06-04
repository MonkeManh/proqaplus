import { IResponsePlan } from "@/models/interfaces/plans/fire-ems/IResponsePlan";
import { emsComplaints } from "../protocols/emsProtocols";
import { IEMSComplaint } from "@/models/interfaces/complaints/ems/IEMSComplaint";

export const getPoliceResponsePlan = (
  id: number
): IResponsePlan | undefined => {
  return policePlans.find((plan) => plan.id === id);
};

export const getPoliceResponsePlanFromProtocol = (
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

  return getPoliceResponsePlan(determinant.recResponse);
};

export const policePlans: IResponsePlan[] = [
  {
    id: 1,
    name: "2P",
    incidentType: "ASSIST|EMS|CPR",
    units: [
      {
        type: "Police Patrol",
        quantity: 2,
      },
    ],
  },
  {
    id: 2,
    name: "1PWLR",
    incidentType: "ANIMAL|ATTACK",
    units: [
      {
        type: "Police Patrol",
        quantity: 1,
      },
      {
        type: "Wildlife Ranger",
        quantity: 1,
      },
    ],
  },
  {
    id: 3,
    name: "1P",
    incidentType: "ASSAULT",
    units: [
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 4,
    name: "2PDET",
    incidentType: "ASSAULT|CPR|INVEST",
    units: [
      {
        type: "Police Patrol",
        quantity: 2,
      },
      {
        type: "Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 5,
    name: "2P",
    incidentType: "ASSAULT",
    units: [
      {
        type: "Police Patrol",
        quantity: 2,
      },
    ],
  },
  {
    id: 6,
    name: "3P",
    incidentType: "ASSAULT|MULTIPLE",
    units: [
      {
        type: "Police Patrol",
        quantity: 3,
      },
    ],
  },
  {
    id: 7,
    name: "2P",
    incidentType: "ASSIST|EMS|FIRE|PERSON",
    units: [
      {
        type: "Police Patrol",
        quantity: 2,
      },
    ],
  },
  {
    id: 8,
    name: "2PDET",
    incidentType: "CPR|DEATH|INVEST",
    units: [
      {
        type: "Police Patrol",
        quantity: 2,
      },
      {
        type: "Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 9,
    name: "1PDET",
    incidentType: "DEATH|INVEST",
    units: [
      {
        type: "Police Patrol",
        quantity: 1,
      },
      {
        type: "Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 10,
    name: "1P",
    incidentType: "ASSIST|EMS|DRUGS",
    units: [
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 11,
    name: "2P",
    incidentType: "ASSIST|EMS|VIOLENT",
    units: [
      {
        type: "Police Patrol",
        quantity: 2,
      },
    ],
  },
  {
    id: 12,
    name: "2PMARINE",
    incidentType: "ASSIST|EMS|MARINE",
    units: [
      {
        type: "Police Patrol",
        quantity: 2,
      },
      {
        type: "Marine Unit",
        quantity: 1,
      },
    ],
  },
  {
    id: 13,
    name: "2P",
    incidentType: "ASSIST|EMS|JUMPER",
    units: [
      {
        type: "Police Patrol",
        quantity: 2,
      },
    ],
  },
  {
    id: 14,
    name: "1P",
    incidentType: "ASSIST|EMS|PSYCH",
    units: [
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 15,
    name: "3P",
    incidentType: "SHOT|INJS",
    units: [
      {
        type: "Police Patrol",
        quantity: 3,
      },
    ],
  },
  {
    id: 16,
    name: "2P",
    incidentType: "ASSIST|EMS|TRAUMA",
    units: [
      {
        type: "Police Patrol",
        quantity: 2,
      },
    ],
  },
  {
    id: 17,
    name: "3P",
    incidentType: "STAB|INJS",
    units: [
      {
        type: "Police Patrol",
        quantity: 3,
      },
    ],
  },
  {
    id: 18,
    name: "4P1S",
    incidentType: "SHOOTING|MULT|INJS",
    units: [
      {
        type: "Police Patrol",
        quantity: 4,
      },
      {
        type: "Supervisor",
        quantity: 1,
      },
    ],
  },
  {
    id: 19,
    name: "3P",
    incidentType: "ASSIST|EMS|TRAUMA|MULT",
    units: [
      {
        type: "Police Patrol",
        quantity: 3,
      },
    ],
  },
  {
    id: 20,
    name: "4P1S",
    incidentType: "STAB|MULT|INJS",
    units: [
      {
        type: "Police Patrol",
        quantity: 4,
      },
      {
        type: "Supervisor",
        quantity: 1,
      },
    ],
  },
  {
    id: 21,
    name: "2PTRAFFIC",
    incidentType: "VEH|ACCIDENT|PI",
    units: [
      {
        type: "Police Patrol",
        quantity: 2,
      },
      {
        type: "Traffic",
        quantity: 1,
      },
    ],
  },
  {
    id: 22,
    name: "TRAFFIC",
    incidentType: "VEH|ACCIDENT|PD",
    units: [
      {
        type: "Traffic",
        quantity: 1,
      },
    ],
  },
  {
    id: 23,
    name: "4P1S1W2PA",
    incidentType: "AIR|CRASH|LARGE",
    units: [
      {
        type: "Police Patrol",
        quantity: 4,
      },
      {
        type: "Supervisor",
        quantity: 1,
      },
      {
        type: "Watch Commander",
        quantity: 1,
      },
      {
        type: "Port Authority",
        quantity: 2,
      },
    ],
  },
  {
    id: 24,
    name: "2P2PA1S",
    incidentType: "TRAIN|CRASH",
    units: [
      {
        type: "Police Patrol",
        quantity: 2,
      },
      {
        type: "Port Authority",
        quantity: 2,
      },
      {
        type: "Supervisor",
        quantity: 1,
      },
    ],
  },
  {
    id: 25,
    name: "1P2MARINE",
    incidentType: "MARINE|ACCIDENT",
    units: [
      {
        type: "Police Patrol",
        quantity: 1,
      },
      {
        type: "Traffic",
        quantity: 1,
      },
      {
        type: "Marine Unit",
        quantity: 2,
      },
    ],
  },
  {
    id: 26,
    name: "2PTRAFFIC+PA",
    incidentType: "TRAIN|PED|PI",
    units: [
      {
        type: "Police Patrol",
        quantity: 2,
      },
      {
        type: "Traffic",
        quantity: 1,
      },
      {
        type: "Port Authority",
        quantity: 1,
      },
    ],
  },
];
