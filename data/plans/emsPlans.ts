import { IResponsePlan } from "@/models/interfaces/plans/fire-ems/IResponsePlan";

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
];
