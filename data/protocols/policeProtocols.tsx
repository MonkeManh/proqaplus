import { IPoliceComplaint } from "@/models/interfaces/complaints/police/IPoliceComplaint";


export function getPoliceComplaintOptions() {
  return policeProtocols.map((complaint: IPoliceComplaint) => ({
    value: complaint.name,
    label: complaint.name,
    protocol: complaint.protocol,
  }));
}

export const policeProtocols: IPoliceComplaint[] = [
  {
    protocol: 100,
    name: "Caller in Danger",
    shortName: "Caller in Danger",
    description: <></>,
    services: [
      { name: "Police", priority: true },
      { name: "EMS", priority: undefined },
      { name: "Fire", priority: undefined },
    ],
    defaultPriority: 1,
    defaultPlan: 27,
    questions: [
      {
        text: <p><b className="text-red-400">Override</b></p>,
        questionType: "select",
        answers: [
          {
            answer: "Continue",
            display: "ProQA Override",
            end: true
          }
        ]
      }
    ],
    availableDeterminants: [
      {
        priority: "E",
        determinants: [
          {
            code: "100E01",
            text: "Caller in Danger",
            recResponse: 27
          }
        ]
      }
    ]
  }
]