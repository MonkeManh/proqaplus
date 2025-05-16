import { IResponsePlan } from "@/models/interfaces/plans/fire-ems/IResponsePlan";
import { emsComplaints } from "../protocols/emsProtocols";
import { IEMSComplaint } from "@/models/interfaces/complaints/ems/IEMSComplaint";

export const getEmsResponsePlan = (id: number): IResponsePlan | undefined => {
  return emsPlans.find((plan) => plan.id === id);
}

export const getEMSResponsePlanFromProtocol = (protocol: number, priority: string, code: string): IResponsePlan | undefined => {
  const complaint = emsComplaints.find((c: IEMSComplaint) => c.protocol === protocol);
  if (!complaint) return undefined;

  const priorityGroup = complaint.availableDeterminants.find(p => p.priority === priority);
  if (!priorityGroup) return undefined;

  const determinant = priorityGroup.determinants.find(d => d.code === code);
  if (!determinant) return undefined;

  return getEmsResponsePlan(determinant.recResponse);
}

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
      }
    ]
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
      }
    ]
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
    ]
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
      }
    ]
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
      }
    ]
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
      }
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
      }
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
      }
    ]
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
      }
    ]
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
      }
    ]
  },
  {
    id: 19,
    name: "MLTP",
    incidentType: "ASSAULT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2
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
      }
    ]
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
    ]
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
      }
    ]
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
      }
    ]
  }
];
