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
