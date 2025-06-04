import { IPoliceComplaint } from "@/models/interfaces/complaints/police/IPoliceComplaint";


export function getPoliceComplaintOptions() {
  return policeProtocols.map((complaint: IPoliceComplaint) => ({
    value: complaint.name,
    label: complaint.name,
    protocol: complaint.protocol,
  }));
}

export const policeProtocols: IPoliceComplaint[] = [

]