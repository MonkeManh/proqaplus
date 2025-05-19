import { IResponsePlan } from "@/models/interfaces/plans/fire-ems/IResponsePlan";
import { emsComplaints } from "../protocols/emsProtocols";
import { IEMSComplaint } from "@/models/interfaces/complaints/ems/IEMSComplaint";

export const getEmsResponsePlan = (id: number): IResponsePlan | undefined => {
  return emsPlans.find((plan) => plan.id === id);
};

export const getEMSResponsePlanFromProtocol = (
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

  return getEmsResponsePlan(determinant.recResponse);
};

export const emsPlans: IResponsePlan[] = [
  {
    id: 1,
    name: "BLSR",
    incidentType: "ABDOMINALPAIN|ROUTINE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 2,
    name: "BLSU",
    incidentType: "ABDOMINALPAIN|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 3,
    name: "ALS1",
    incidentType: "ABDOMINALPAIN|ALS1",
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
    id: 4,
    name: "BLSU9",
    incidentType: "ALLERGIC|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 5,
    name: "BLSR",
    incidentType: "ALLERGIC|ROUTINE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 6,
    name: "ALS1",
    incidentType: "ALLERGIC|ALS1",
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
    id: 7,
    name: "ALS2",
    incidentType: "ALLERGIC|ALS2",
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
    id: 8,
    name: "AL2D",
    incidentType: "ALLERGIC|CPR",
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
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 9,
    name: "BLSU9",
    incidentType: "ANIMALBITE|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 10,
    name: "BLSR",
    incidentType: "ANIMALBITE|ROUTINE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 11,
    name: "ALS1",
    incidentType: "ANIMALBITE|ALS1",
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
    id: 12,
    name: "AL2D",
    incidentType: "ANIMALBITE|CPR",
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
    id: 13,
    name: "AL2D",
    incidentType: "ANIMALBITE|ALS2",
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
    id: 14,
    name: "BLSU9",
    incidentType: "ASSAULT|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 15,
    name: "BLSR",
    incidentType: "ASSAULT|ROUTINE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 16,
    name: "ALS1",
    incidentType: "ASSAULT|ALS1",
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
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 17,
    name: "AL2D",
    incidentType: "ASSAULT|CPR",
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
      {
        type: "Police Patrol",
        quantity: 2,
      },
    ],
  },
  {
    id: 18,
    name: "AL2D",
    incidentType: "ASSAULT|ALS2",
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
      {
        type: "Police Patrol",
        quantity: 2,
      },
    ],
  },
  {
    id: 19,
    name: "MLTP",
    incidentType: "ASSAULT|MULT",
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
      {
        type: "Police Patrol",
        quantity: 2,
      },
    ],
  },
  {
    id: 20,
    name: "BLSR",
    incidentType: "BACKPAIN|ROUTINE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 21,
    name: "ALS1",
    incidentType: "BACKPAIN|ALS1",
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
    id: 22,
    name: "ALS1",
    incidentType: "TROUBLEBREATHING|ALS1",
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
    id: 23,
    name: "BLSU9",
    incidentType: "TROUBLEBREATHING|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 24,
    name: "ALS2",
    incidentType: "TROUBLEBREATHING|ALS2",
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
    id: 25,
    name: "AL2D",
    incidentType: "TROUBLEBREATHING|CPR",
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
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 26,
    name: "BLSU9",
    incidentType: "BURN|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 27,
    name: "FCFMO",
    incidentType: "BURN|FMO|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 28,
    name: "FDALS1",
    incidentType: "ALARM|FIRE",
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
    id: 29,
    name: "BLSU9",
    incidentType: "BURN|ROUTINE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 30,
    name: "FALS1FMO",
    incidentType: "BURN|FMO|ALS1",
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
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 31,
    name: "FJH",
    incidentType: "FIRE|BLDG|HM",
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
        quantity: 1,
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
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 32,
    name: "FJT",
    incidentType: "FIRE|BLDG|TRAP",
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
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 33,
    name: "FDALS1",
    incidentType: "BURNFD|ALS1",
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
    id: 34,
    name: "FDALS2",
    incidentType: "BURN|ALS2",
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
    id: 35,
    name: "FDMULTP",
    incidentType: "BURN|MULT",
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
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 36,
    name: "AL2D",
    incidentType: "BURN|CPR",
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
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 37,
    name: "HMADAPTALS2",
    incidentType: "BURN|HM|ALS2",
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
        type: "EMS Officer",
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
    ],
  },
  {
    id: 38,
    name: "AL1D",
    incidentType: "BURN|ALS1",
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
    id: 39,
    name: "FY2",
    incidentType: "FIRE|PERSON|ALS2",
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
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 40,
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
    id: 41,
    name: "HMADAPT",
    incidentType: "INHALE|BLS",
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
    id: 42,
    name: "HMADAPT",
    incidentType: "INHALE|ALS1",
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
    id: 43,
    name: "HMADAPTALS2",
    incidentType: "INHALE|ALS2",
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
        type: "EMS Officer",
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
    ],
  },
  {
    id: 44,
    name: "HMADAPTALS2",
    incidentType: "CPRHM|ALS2",
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
        type: "EMS Officer",
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
    ],
  },
  {
    id: 45,
    name: "HMADPD",
    incidentType: "INHALE|MULT",
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
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
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
    ],
  },
  {
    id: 46,
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
    id: 47,
    name: "ALS2",
    incidentType: "CPR|ALS2",
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
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 48,
    name: "SCLA",
    incidentType: "DOA|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Medical Examiner",
        quantity: 1,
      },
    ],
  },
  {
    id: 49,
    name: "BLSU9",
    incidentType: "CHESTPAIN|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 50,
    name: "ALS1",
    incidentType: "CHESTPAIN|ALS1",
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
    id: 51,
    name: "ALS1",
    incidentType: "OVERDOSE|INTENTIONAL|ALS1",
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
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 52,
    name: "ALS2",
    incidentType: "CHESTPAIN|ALS2",
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
    id: 53,
    name: "BLSU9",
    incidentType: "CHOKING|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 54,
    name: "ALS1",
    incidentType: "CHOKING|ALS1",
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
    id: 55,
    name: "ALS2",
    incidentType: "CHOKING|ALS2",
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
    id: 56,
    name: "AL2D",
    incidentType: "CHOKING|CPR",
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
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 57,
    name: "BLSU9",
    incidentType: "SEIZURE|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 58,
    name: "ALS1",
    incidentType: "SEIZURE|ALS1",
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
    id: 59,
    name: "ALS1",
    incidentType: "OVERDOSE|ALS1",
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
    id: 60,
    name: "ALS2",
    incidentType: "SEIZURE|ALS2",
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
    id: 61,
    name: "AL2D",
    incidentType: "SEIZURE|CPR",
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
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 62,
    name: "BLSU9",
    incidentType: "DIABETIC|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 63,
    name: "ALS1",
    incidentType: "DIABETIC|ALS1",
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
    id: 64,
    name: "AL1D",
    incidentType: "DIABETIC|w/PD|ALS1",
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
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 65,
    name: "BLSU9",
    incidentType: "DROWN|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 66,
    name: "WTRALS1",
    incidentType: "WATER|SWIFT",
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
        type: "Swift Water",
        quantity: 3,
      },
      {
        type: "Helicopter",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 67,
    name: "WTRALS2",
    incidentType: "WATER|INLAND",
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
        type: "Swift Water",
        quantity: 3,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 68,
    name: "AL1D",
    incidentType: "DROWN|ALS1",
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
    id: 69,
    name: "PAALS2",
    incidentType: "DROWN|ALS2",
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
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 70,
    name: "AL2D",
    incidentType: "DROWN|CPR",
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
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 71,
    name: "AL1D",
    incidentType: "ELECTROCUTION|ALS1",
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
    id: 72,
    name: "AL2D",
    incidentType: "ELECTROCUTION|ALS2",
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
      {
        type: "Helicopter",
        quantity: 1,
      },
    ],
  },
  {
    id: 73,
    name: "MLTP",
    incidentType: "ELECTROCUTION|MULT",
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
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 74,
    name: "AL2D",
    incidentType: "ELECTROCUTION|FALL|ALS2",
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
      {
        type: "Helicopter",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 75,
    name: "AL2D",
    incidentType: "ELECTROCUTION|CPR",
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
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 76,
    name: "BLSU9",
    incidentType: "EYEINJURY|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 77,
    name: "BLSR",
    incidentType: "EYEINJURY|ROUTINE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 78,
    name: "ALS1",
    incidentType: "EYEINJURY|ALS1",
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
    id: 79,
    name: "BLSU9",
    incidentType: "FALL|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 80,
    name: "BLSU9",
    incidentType: "FALL|w/PD|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 81,
    name: "BLSR",
    incidentType: "FALL|ROUTINE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 82,
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
    id: 83,
    name: "ALS1",
    incidentType: "FALL|ALS1",
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
        type: "Helicopter",
        quantity: 1,
      },
    ],
  },
  {
    id: 84,
    name: "AL1D",
    incidentType: "FALL|w/PD|ALS1",
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
      {
        type: "Helicopter",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 85,
    name: "AL2D",
    incidentType: "FALL|ALS2",
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
      {
        type: "Helicopter",
        quantity: 1,
      },
    ],
  },
  {
    id: 86,
    name: "AL2D",
    incidentType: "FALL|w/PD|ALS2",
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
      {
        type: "Helicopter",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 2,
      },
    ],
  },
  {
    id: 87,
    name: "AL2D",
    incidentType: "FALL|CPR",
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
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 88,
    name: "BLSR",
    incidentType: "HEADACHE|ROUTINE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 89,
    name: "BLSU9",
    incidentType: "HEADACHE|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 90,
    name: "ALS1",
    incidentType: "HEADACHE|ALS1",
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
    id: 91,
    name: "ALS1",
    incidentType: "STROKE|ALS1",
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
    id: 92,
    name: "ALS1",
    incidentType: "HEADACHE|DELOC|ALS1",
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
    id: 93,
    name: "ALS1",
    incidentType: "HEADACHE|TROUBLEBREATHING|ALS1",
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
    name: "BLSU9",
    incidentType: "HEART|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 95,
    name: "BLSU9",
    incidentType: "HEART|CHESTPAIN|BLS",
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
    id: 96,
    name: "ALS1",
    incidentType: "HEART|ALS1",
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
    id: 97,
    name: "ALS1",
    incidentType: "HEART|CHESTPAIN|ALS1",
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
    id: 98,
    name: "ALS2",
    incidentType: "HEART|ALS2",
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
    id: 99,
    name: "BLSR",
    incidentType: "COLD|ROUTINE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 100,
    name: "BLSR",
    incidentType: "HEAT|ROUTINE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 101,
    name: "BLSU9",
    incidentType: "COLD|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 102,
    name: "BLSU9",
    incidentType: "HEAT|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 103,
    name: "ALS1",
    incidentType: "COLD|ALS1",
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
    name: "ALS1",
    incidentType: "HEAT|ALS1",
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
    id: 105,
    name: "MLTP",
    incidentType: "COLD|MULT",
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
    name: "MLTP",
    incidentType: "HEAT|MULT",
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
    id: 107,
    name: "BLSU9",
    incidentType: "HEMORRHAGE|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 108,
    name: "BLSU9",
    incidentType: "HEMORRHAGE|MEDICAL|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 109,
    name: "BLSU9",
    incidentType: "HEMORRHAGE|TRAUMA|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 110,
    name: "BLSR",
    incidentType: "HEMORRHAGE|ROUTINE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 111,
    name: "BLSR",
    incidentType: "HEMORRHAGE|MEDICAL|ROUTINE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 112,
    name: "BLSR",
    incidentType: "HEMORRHAGE|TRAUMA|ROUTINE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 113,
    name: "ALS1",
    incidentType: "HEMORRHAGE|ALS1",
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
    name: "ALS1",
    incidentType: "HEMORRHAGE|MEDICAL|ALS1",
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
    id: 115,
    name: "ALS1",
    incidentType: "HEMORRHAGE|TRAUMA|ALS1",
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
    id: 116,
    name: "AL2D",
    incidentType: "HEMORRHAGE|CPR",
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
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 117,
    name: "AL2D",
    incidentType: "HEMORRHAGE|MEDICAL|CPR",
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
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 118,
    name: "AL2D",
    incidentType: "HEMORRHAGE|TRAUMA|CPR",
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
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 119,
    name: "ALS2",
    incidentType: "HEMORRHAGE|ALS2",
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
    id: 120,
    name: "ALS2",
    incidentType: "HEMORRHAGE|MEDICAL|ALS2",
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
    id: 121,
    name: "ALS2",
    incidentType: "HEMORRHAGE|TRAUMA|ALS2",
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
    id: 122,
    name: "SE",
    incidentType: "INVEST",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 123,
    name: "TRAP1",
    incidentType: "ENTRAP|ALS1",
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
    ],
  },
  {
    id: 124,
    name: "TRAPB",
    incidentType: "ENTRAP|BLS",
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
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 125,
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
    id: 126,
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
    id: 127,
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
    id: 128,
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
    id: 129,
    name: "BLSU9",
    incidentType: "OVERDOSE|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 130,
    name: "BLSU9",
    incidentType: "OVERDOSE|INTENTIONAL|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 131,
    name: "BLSU9",
    incidentType: "OVERDOSE|w/PD|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 132,
    name: "ALS1",
    incidentType: "OVERDOSE|w/PD|ALS1",
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
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 133,
    name: "ALS2",
    incidentType: "OVERDOSE|ALS2",
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
    id: 134,
    name: "ALS2",
    incidentType: "OVERDOSE|INTENTIONAL|ALS2",
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
    id: 135,
    name: "ALS2",
    incidentType: "OVERDOSE|w/PD|ALS2",
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
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
  },
  {
    id: 136,
    name: "AL2D",
    incidentType: "OVERDOSE|CPR",
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
      {
        type: "Police Patrol",
        quantity: 2,
      },
    ],
  },
  {
    id: 137,
    name: "AL2D",
    incidentType: "OVERDOSE|INTENTIONAL|CPR",
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
      {
        type: "Police Patrol",
        quantity: 2,
      },
    ],
  },
  {
    id: 138,
    name: "BLSR",
    incidentType: "OVERDOSE|ROUTINE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 139,
    name: "BLSR",
    incidentType: "MATERNITY|ROUTINE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 140,
    name: "BLSU9",
    incidentType: "MATERNITY|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 141,
    name: "ALS1",
    incidentType: "MATERNITY|ALS1",
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
    id: 142,
    name: "BLSU9",
    incidentType: "PSYCH|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 143,
    name: "BLSU9",
    incidentType: "PSYCH|w/PD|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ]
  },
  {
    id: 144,
    name: "ALS1",
    incidentType: "PSYCH|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ]
  },
  {
    id: 145,
    name: "ALS1",
    incidentType: "PSYCH|w/PD|ALS1",
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
        type: "Police Patrol",
        quantity: 1,
      },
    ]
  },
  {
    id: 146,
    name: "AL2D",
    incidentType: "PSYCH|CPR",
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
      {
        type: "Police Patrol",
        quantity: 2,
      },
    ]
  },
  {
    id: 147,
    name: "BLSR",
    incidentType: "SICK|ROUTINE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ]
  },
  {
    id: 148,
    name: "BLSU9",
    incidentType: "SICK|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ]
  },
  {
    id: 149,
    name: "ALS1",
    incidentType: "SICK|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ]
  },
  {
    id: 150,
    name: "ALS1",
    incidentType: "DECLOC|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ]
  },
  {
    id: 151,
    name: "ALSR",
    incidentType: "SICK|ALSR",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ]
  },
  {
    id: 152,
    name: "BLSU9",
    incidentType: "SHOT|w/PD|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 2,
      }
    ]
  },
  {
    id: 153,
    name: "BLSU9",
    incidentType: "TRAUMA|w/PD|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 2,
      }
    ]
  },
  {
    id: 154,
    name: "BLSU9",
    incidentType: "STAB|w/PD|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 2,
      }
    ]
  },
  {
    id: 155,
    name: "AL1D",
    incidentType: "SHOT|w/PD|ALS1",
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
      {
        type: "Police Patrol",
        quantity: 3,
      }
    ]
  },
  {
    id: 156,
    name: "AL1D",
    incidentType: "TRAUMA|w/PD|ALS1",
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
      {
        type: "Police Patrol",
        quantity: 2,
      }
    ]
  },
  {
    id: 157,
    name: "AL1D",
    incidentType: "STAB|w/PD|ALS1",
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
      {
        type: "Police Patrol",
        quantity: 3,
      }
    ]
  },
  {
    id: 158,
    name: "AL2D",
    incidentType: "CPRTRAUMA|ALS2",
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
      {
        type: "Police Patrol",
        quantity: 2
      }
    ]
  },
  {
    id: 159,
    name: "AL2D",
    incidentType: "CPRSHOT|ALS2",
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
      {
        type: "Police Patrol",
        quantity: 3
      }
    ]
  },
  {
    id: 160,
    name: "AL2D",
    incidentType: "CPRSTAB|ALS2",
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
      {
        type: "Police Patrol",
        quantity: 3
      }
    ]
  },
  {
    id: 161,
    name: "AL2D",
    incidentType: "SHOT|w/PD|ALS2",
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
      {
        type: "Police Patrol",
        quantity: 3
      }
    ]
  },
  {
    id: 162,
    name: "AL2D",
    incidentType: "TRAUMA|w/PD|ALS2",
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
      {
        type: "Police Patrol",
        quantity: 2
      }
    ]
  },
  {
    id: 163,
    name: "AL2D",
    incidentType: "STAB|w/PD|ALS2",
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
      {
        type: "Police Patrol",
        quantity: 3
      }
    ]
  },
  {
    id: 164,
    name: "MLTP",
    incidentType: "SHOT|w/PD|MULT",
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
      {
        type: "Police Patrol",
        quantity: 5
      }
    ]
  },
  {
    id: 165,
    name: "MLTP",
    incidentType: "TRAUMA|w/PD|MULT",
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
      {
        type: "Police Patrol",
        quantity: 4
      }
    ]
  },
  {
    id: 166,
    name: "MLTP",
    incidentType: "STAB|w/PD|MULT",
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
      {
        type: "Police Patrol",
        quantity: 5
      }
    ]
  },
  {
    id: 167,
    name: "BLSU9",
    incidentType: "STROKE|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ]
  },
  {
    id: 168,
    name: "MVCB",
    incidentType: "MVC|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 1,
      }
    ]
  },
  {
    id: 169,
    name: "PDC",
    incidentType: "PropertyDamageCollision",
    units: [
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ]
  },
  {
    id: 170,
    name: "MVCMCIB",
    incidentType: "MVC|MULT|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2
      },
      {
        type: "Police Patrol",
        quantity: 2
      },
      {
        type: "Traffic",
        quantity: 1
      }
    ]
  },
  {
    id: 171,
    name: "MVC1",
    incidentType: "MVC|ALS1",
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
        type: "Police Patrol",
        quantity: 1,
      }
    ]
  },
  {
    id: 172,
    name: "MVCMCI1",
    incidentType: "MVC|MULT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2
      },
      {
        type: "Helicopter",
        quantity: 1
      },
      {
        type: "Chief",
        quantity: 1
      },
      {
        type: "Police Patrol",
        quantity: 2
      },
      {
        type: "Traffic",
        quantity: 1
      }
    ]
  },
  {
    id: 173,
    name: "MVC2",
    incidentType: "MVC|ALS2",
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
      {
        type: "Helicopter",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 2,
      },
      {
        type: "Traffic",
        quantity: 2
      }
    ]
  },
  {
    id: 174,
    name: "MVCMCI2",
    incidentType: "MVC|MULT|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Helicopter",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 2
      },
      {
        type: "Traffic",
        quantity: 1
      }
    ]
  },
  {
    id: 175,
    name: "HMFULL",
    incidentType: "AIR|CRASH|LARGE",
    units: [
      {
        type: "Engine",
        quantity: 3
      },
      {
        type: "Truck",
        quantity: 1
      },
      {
        type: "Rescue",
        quantity: 1
      },
      {
        type: "Transport (ALS)",
        quantity: 2
      },
      {
        type: "Crash",
        quantity: 2
      },
      {
        type: "Hazmat",
        quantity: 2
      },
      {
        type: "Chief",
        quantity: 1
      },
      {
        type: "Helicopter",
        quantity: 1
      },
      {
        type: "Police Patrol",
        quantity: 3
      },
      {
        type: "Traffic",
        quantity: 1
      },
      {
        type: "Port Authority",
        quantity: 2
      },
      {
        type: "Police Supervisor",
        quantity: 1
      },
      {
        type: "Police Watch Commander",
        quantity: 1
      }
    ]
  },
  {
    id: 176,
    name: "TRC",
    incidentType: "TRAIN|CRASH",
    units: [
      {
        type: "Engine",
        quantity: 3
      },
      {
        type: "Truck",
        quantity: 1
      },
      {
        type: "Rescue",
        quantity: 1
      },
      {
        type: "Transport (ALS)",
        quantity: 4
      },
      {
        type: "EMS Officer",
        quantity: 1
      },
      {
        type: "Hazmat",
        quantity: 1
      },
      {
        type: "Chief",
        quantity: 1
      },
      {
        type: "Helicopter",
        quantity: 1
      },
      {
        type: "Police Patrol",
        quantity: 2
      },
      {
        type: "Port Authority",
        quantity: 2
      },
      {
        type: "Police Supervisor",
        quantity: 1
      }
    ]
  },
  {
    id: 177,
    name: "WTRALS2",
    incidentType: "BOATCRASH",
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
        type: "Swift Water",
        quantity: 2
      },
      {
        type: "Marine",
        quantity: 2
      },
      {
        type: "Rescue Boat",
        quantity: 1
      },
      {
        type: "Helicopter",
        quantity: 1
      },
      {
        type: "Chief",
        quantity: 1
      },
      {
        type: "Port Authority",
        quantity: 2
      }
    ]
  },
  {
    id: 178,
    name: "MVCBLDG1",
    incidentType: "MVC|STRUC|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2
      },
      {
        type: "Truck",
        quantity: 1
      },
      {
        type: "Rescue",
        quantity: 1
      },
      {
        type: "Transport (ALS)",
        quantity: 1
      },
      {
        type: "Transport (BLS)",
        quantity: 1
      },
      {
        type: "Helicopter",
        quantity: 1
      },
      {
        type: "Chief",
        quantity: 1
      },
      {
        type: "Police Patrol",
        quantity: 2
      },
      {
        type: "Traffic",
        quantity: 1
      },
    ]
  },
  {
    id: 179,
    name: "MVCPC1",
    incidentType: "MVC|CYCLE|ALS1",
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
        type: "Helicopter",
        quantity: 1
      },
      {
        type: "Police Patrol",
        quantity: 1
      },
      {
        type: "Traffic",
        quantity: 1
      }
    ]
  },
  {
    id: 180,
    name: "MVCMECH1",
    incidentType: "MVC|MECH|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1
      },
      {
        type: "Rescue",
        quantity: 1
      },
      {
        type: "Transport (ALS)",
        quantity: 1
      },
      {
        type: "Transport (BLS)",
        quantity: 1
      },
      {
        type: "Helicopter",
        quantity: 1
      },
      {
        type: "Chief",
        quantity: 1
      },
      {
        type: "Police Patrol",
        quantity: 2
      },
      {
        type: "Traffic",
        quantity: 1
      }
    ]
  },
  {
    id: 181,
    name: "MVCPC1",
    incidentType: "MVC|PED|ALS1",
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
        type: "Helicopter",
        quantity: 1
      },
      {
        type: "Police Patrol",
        quantity: 1
      },
      {
        type: "Traffic",
        quantity: 1
      }
    ]
  },
  {
    id: 182,
    name: "MVCEJEC2",
    incidentType: "MVC|EJEC|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1
      },
      {
        type: "Rescue",
        quantity: 1
      },
      {
        type: "Transport (ALS)",
        quantity: 2
      },
      {
        type: "Helicopter",
        quantity: 1
      },
      {
        type: "EMS Officer",
        quantity: 1
      },
      {
        type: "Police Patrol",
        quantity: 2
      },
      {
        type: "Traffic",
        quantity: 1
      }
    ]
  },
  {
    id: 183,
    name: "MVCROLL1",
    incidentType: "MVC|ROLL|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1
      },
      {
        type: "Rescue",
        quantity: 1
      },
      {
        type: "Transport (ALS)",
        quantity: 1
      },
      {
        type: "Transport (BLS)",
        quantity: 1
      },
      {
        type: "Helicopter",
        quantity: 1
      },
      {
        type: "Police Patrol",
        quantity: 2
      },
      {
        type: "Traffic",
        quantity: 1
      }
    ]
  },
  {
    id: 184,
    name: "MVCMECH2",
    incidentType: "MVC|MECH|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1
      },
      {
        type: "Rescue",
        quantity: 1
      },
      {
        type: "Transport (ALS)",
        quantity: 2
      },
      {
        type: "EMS Officer",
        quantity: 1
      },
      {
        type: "Helicopter",
        quantity: 1
      },
      {
        type: "Chief",
        quantity: 1
      },
      {
        type: "Police Patrol",
        quantity: 2
      },
      {
        type: "Traffic",
        quantity: 1
      }
    ]
  },
  {
    id: 185,
    name: "WTR2RS",
    incidentType: "VEH|SINKING|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 1
      },
      {
        type: "Truck",
        quantity: 1
      },
      {
        type: "Rescue",
        quantity: 1
      },
      {
        type: "Transport (ALS)",
        quantity: 1
      },
      {
        type: "Transport (BLS)",
        quantity: 1
      },
      {
        type: "Swift Water",
        quantity: 2
      },
      {
        type: "Rescue Boat",
        quantity: 1
      },
      {
        type: "Helicopter",
        quantity: 1
      },
      {
        type: "Chief",
        quantity: 1
      },
      {
        type: "Police Marine",
        quantity: 1
      },
      {
        type: "Traffic",
        quantity: 1
      },
    ]
  },
  {
    id: 186,
    name: "TRAT",
    incidentType: "TRAIN|PED",
    units: [
      {
        type: "Engine",
        quantity: 1
      },
      {
        type: "Truck",
        quantity: 1
      },
      {
        type: "Rescue",
        quantity: 1
      },
      {
        type: "Transport (ALS)",
        quantity: 1
      },
      {
        type: "Helicopter",
        quantity: 1
      },
      {
        type: "Chief",
        quantity: 1
      },
      {
        type: "Police Patrol",
        quantity: 2
      },
      {
        type: "Port Authority",
        quantity: 1
      }
    ]
  },
  {
    id: 187,
    name: "MVCHM1",
    incidentType: "MVC|HM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1
      },
      {
        type: "Rescue",
        quantity: 1
      },
      {
        type: "Transport (ALS)",
        quantity: 1
      },
      {
        type: "Hazmat",
        quantity: 1
      },
      {
        type: "Chief",
        quantity: 1
      },
      {
        type: "Police Patrol",
        quantity: 2
      },
      {
        type: "Traffic",
        quantity: 1
      }
    ]
  },
  {
    id: 188,
    name: "MVCTRAP1",
    incidentType: "MVC|TRAP|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1
      },
      {
        type: "Truck",
        quantity: 1
      },
      {
        type: "Rescue",
        quantity: 1
      },
      {
        type: "Transport (ALS)",
        quantity: 1
      },
      {
        type: "Chief",
        quantity: 1
      },
      {
        type: "Police Patrol",
        quantity: 2
      },
      {
        type: "Traffic",
        quantity: 1
      }
    ]
  },
  {
    id: 189,
    name: "MVCMCI1",
    incidentType: "MVC|TRAP|MULT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1
      },
      {
        type: "Truck",
        quantity: 1
      },
      {
        type: "Rescue",
        quantity: 1
      },
      {
        type: "Transport (ALS)",
        quantity: 1
      },
      {
        type: "Transport (BLS)",
        quantity: 1
      },
      {
        type: "Chief",
        quantity: 1
      },
      {
        type: "Police Patrol",
        quantity: 2
      },
      {
        type: "Traffic",
        quantity: 1
      }
    ]
  },
  {
    id: 190,
    name: "BLSU9",
    incidentType: "INJURED|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ]
  },
  {
    id: 191,
    name: "BLSR",
    incidentType: "INJURED|ROUTINE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ]
  },
  {
    id: 192,
    name: "ALS1",
    incidentType: "INJURED|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ]
  },
  {
    id: 193,
    name: "AL2D",
    incidentType: "INJURED|ALS2",
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
    ]
  },
  {
    id: 194,
    name: "BLSU9",
    incidentType: "FAINT|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ]
  },
  {
    id: 195,
    name: "ALS1",
    incidentType: "UNCON|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ]
  },
  {
    id: 196,
    name: "ALS2",
    incidentType: "UNCON|ALS2",
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
    id: 197,
    name: "AL2D",
    incidentType: "UNCON|INEFF",
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
    id: 198,
    name: "AL2D",
    incidentType: "UNCON|CPR",
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
      {
        type: "Police Patrol",
        quantity: 1,
      }
    ]
  }
];
