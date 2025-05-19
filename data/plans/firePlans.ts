import { IResponsePlan } from "@/models/interfaces/plans/fire-ems/IResponsePlan";
import { emsComplaints } from "../protocols/emsProtocols";
import { IEMSComplaint } from "@/models/interfaces/complaints/ems/IEMSComplaint";

export const getFireResponsePlan = (id: number): IResponsePlan | undefined => {
  return firePlans.find((plan) => plan.id === id);
}

export const getFireResponsePlanFromProtocol = (protocol: number, priority: string, code: string): IResponsePlan | undefined => {
  const complaint = emsComplaints.find((c: IEMSComplaint) => c.protocol === protocol);
  if (!complaint) return undefined;

  const priorityGroup = complaint.availableDeterminants.find(p => p.priority === priority);
  if (!priorityGroup) return undefined;

  const determinant = priorityGroup.determinants.find(d => d.code === code);
  if (!determinant) return undefined;

  return getFireResponsePlan(determinant.recResponse);
}

export const firePlans: IResponsePlan[] = [
  {
    id: 1,
    name: "SA",
    incidentType: "AIRBORNE|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1
      },
      {
        type: "Port Authority",
        quantity: 1
      }
    ]
  },
  {
    id: 2,
    name: "SE",
    incidentType: "AIR|INVEST|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1
      },
      {
        type: "Port Authority",
        quantity: 1
      }
    ]
  },
  {
    id: 3,
    name: "SE",
    incidentType: "AIR|STANDBY|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1
      },
      {
        type: "Port Authority",
        quantity: 1
      }
    ]
  },
  {
    id: 4,
    name: "PHM1",
    incidentType: "AIR|ALERT",
    units: [
      {
        type: "Engine",
        quantity: 2
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
        type: "Hazmat",
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
    id: 5,
    name: "HMFULL",
    incidentType: "AIR|FullEmergency",
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
        type: "Port Authority",
        quantity: 2
      }
    ]
  },
  {
    id: 6,
    name: "PHM1",
    incidentType: "AIR|MinorEmergency",
    units: [
      {
        type: "Engine",
        quantity: 2
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
        type: "Hazmat",
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
    id: 7,
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
        quantity: 2
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
    id: 8,
    name: "PHM1",
    incidentType: "AIR|CRASH|SMALL",
    units: [
      {
        type: "Engine",
        quantity: 2
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
        type: "Hazmat",
        quantity: 1
      },
      {
        type: "Chief",
        quantity: 1
      },
      {
        type: "Port Authority",
        quantity: 2
      },
      {
        type: "Police Patrol",
        quantity: 2
      },
      {
        type: "Police Supervisor",
        quantity: 1
      }
    ]
  },
  {
    id: 9,
    name: "HMFULL",
    incidentType: "FIRE|AIR|LARGE",
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
        quantity: 2
      },
      {
        type: "Police Patrol",
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
    ]
  },
  {
    id: 10,
    name: "PHM1",
    incidentType: "FIRE|AIR|SMALL",
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
        type: "Transport (ALS)",
        quantity: 1
      },
      {
        type: "Transport (BLS)",
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
        type: "Port Authority",
        quantity: 2
      },
      {
        type: "Police Patrol",
        quantity: 1
      },
      {
        type: "Police Supervisor",
        quantity: 1
      }
    ]
  },
  {
    id: 11,
    name: "HMFULLWTR",
    incidentType: "AIR|CRASH|LARGE|WATER",
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
        type: "Swift Water",
        quantity: 2
      },
      {
        type: "Marine",
        quantity: 2
      },
      {
        type: "Rescue Boat",
        quantity: 2
      },
      {
        type: "Chief",
        quantity: 2
      },
      {
        type: "Helicopter",
        quantity: 1
      },
      {
        type: "Port Authority",
        quantity: 3
      },
      {
        type: "Police Supervisor",
        quantity: 1
      }
    ]
  },
  {
    id: 12,
    name: "PHMWTR",
    incidentType: "AIR|CRASH|SMALL|WATER",
    units: [
      {
        type: "Engine",
        quantity: 2
      },
      {
        type: "Rescue",
        quantity: 1,
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
        type: "Hazmat",
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
        quantity: 2
      },
      {
        type: "Chief",
        quantity: 1
      },
      {
        type: "Port Authority",
        quantity: 3
      }
    ]
  }
];
