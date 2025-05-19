import { IFireComplaint } from "@/models/interfaces/complaints/fire/IFireComplaint";

export function getFireComplaintOptions() {
  return fireProtocols.map((complaint: IFireComplaint) => ({
    value: complaint.name,
    label: complaint.name,
    protocol: complaint.protocol,
  }));
}

export const fireProtocols: IFireComplaint[] = [
  {
    protocol: 51,
    name: "Aircraft Emergency",
    shortName: "Aircraft Emergency",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: 3 },
      { name: "Police", priority: true }
    ],
    defaultPriority: 4,
    defaultPlan: 1,
    questions: [],
    availableDeterminants: [
      {
        priority: "O",
        determinants: [
          {
            code: "51O01",
            text: "Airbourne Aircraft",
            recResponse: 1,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 1
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 1
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 1
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 1
              },
              {
                code: "L",
                text: "Large",
                recResponse: 1
              },
              {
                code: "M",
                text: "Military",
                recResponse: 1
              },
              {
                code: "S",
                text: "Small",
                recResponse: 1
              },
              {
                code: "T",
                text: "Light",
                recResponse: 1
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 1
              }
            ]
          },
        ]
      },
      {
        priority: "A",
        determinants: [
          {
            code: "51A00",
            text: "Override (Alpha)",
            recResponse: 2,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 2
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 2
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 2
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 2
              },
              {
                code: "L",
                text: "Large",
                recResponse: 2
              },
              {
                code: "M",
                text: "Military",
                recResponse: 2
              },
              {
                code: "S",
                text: "Small",
                recResponse: 2
              },
              {
                code: "T",
                text: "Light",
                recResponse: 2
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 2
              }
            ]
          },
          {
            code: "51A01",
            text: "Standby",
            recResponse: 3,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 3
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 3
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 3
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 3
              },
              {
                code: "L",
                text: "Large",
                recResponse: 3
              },
              {
                code: "M",
                text: "Military",
                recResponse: 3
              },
              {
                code: "S",
                text: "Small",
                recResponse: 3
              },
              {
                code: "T",
                text: "Light",
                recResponse: 3
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 3
              }
            ]
          }
        ]
      },
      {
        priority: "B",
        determinants: [
          {
            code: "51B00",
            text: "Override (Bravo)",
            recResponse: 2,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 2
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 2
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 2
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 2
              },
              {
                code: "L",
                text: "Large",
                recResponse: 2
              },
              {
                code: "M",
                text: "Military",
                recResponse: 2
              },
              {
                code: "S",
                text: "Small",
                recResponse: 2
              },
              {
                code: "T",
                text: "Light",
                recResponse: 2
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 2
              }
            ]
          },
          {
            code: "51B01",
            text: "Unkn Situation",
            recResponse: 2,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 2
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 2
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 2
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 2
              },
              {
                code: "L",
                text: "Large",
                recResponse: 2
              },
              {
                code: "M",
                text: "Military",
                recResponse: 2
              },
              {
                code: "S",
                text: "Small",
                recResponse: 2
              },
              {
                code: "T",
                text: "Light",
                recResponse: 2
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 2
              }
            ]
          }
        ]
      },
      {
        priority: "C",
        determinants: [
          {
            code: "51C00",
            text: "Override (Charlie)",
            recResponse: 4,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 4
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 4
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 4
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 4
              },
              {
                code: "L",
                text: "Large",
                recResponse: 4
              },
              {
                code: "M",
                text: "Military",
                recResponse: 4
              },
              {
                code: "S",
                text: "Small",
                recResponse: 4
              },
              {
                code: "T",
                text: "Light",
                recResponse: 4
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 4
              }
            ]
          },
          {
            code: "51C01",
            text: "Aircraft Incoming (Alert II)",
            recResponse: 5,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 5
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 5
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 5
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 5
              },
              {
                code: "L",
                text: "Large",
                recResponse: 5
              },
              {
                code: "M",
                text: "Military",
                recResponse: 5
              },
              {
                code: "S",
                text: "Small",
                recResponse: 5
              },
              {
                code: "T",
                text: "Light",
                recResponse: 5
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 5
              }
            ]
          },
          {
            code: "51C02",
            text: "Aircraft Incoming (Alert I)",
            recResponse: 6,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 6
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 6
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 6
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 6
              },
              {
                code: "L",
                text: "Large",
                recResponse: 6
              },
              {
                code: "M",
                text: "Military",
                recResponse: 6
              },
              {
                code: "S",
                text: "Small",
                recResponse: 6
              },
              {
                code: "T",
                text: "Light",
                recResponse: 6
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 6
              }
            ]
          }
        ]
      },
      {
        priority: "D",
        determinants: [
          {
            code: "51D00",
            text: "Override (Delta)",
            recResponse: 7,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 7
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 8
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 7
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 8
              },
              {
                code: "L",
                text: "Large",
                recResponse: 7
              },
              {
                code: "M",
                text: "Military",
                recResponse: 7
              },
              {
                code: "S",
                text: "Small",
                recResponse: 8
              },
              {
                code: "T",
                text: "Light",
                recResponse: 8
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 7
              }
            ]
          },
          {
            code: "51D01",
            text: "Aircraft Crash on Land (Alert III)",
            recResponse: 7,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 7
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 8
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 7
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 8
              },
              {
                code: "L",
                text: "Large",
                recResponse: 7
              },
              {
                code: "M",
                text: "Military",
                recResponse: 7
              },
              {
                code: "S",
                text: "Small",
                recResponse: 8
              },
              {
                code: "T",
                text: "Light",
                recResponse: 8
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 7
              }
            ]
          },
          {
            code: "51D02",
            text: "Crash Involving Building/Structure (Alert III)",
            recResponse: 7,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 7
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 8
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 7
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 8
              },
              {
                code: "L",
                text: "Large",
                recResponse: 7
              },
              {
                code: "M",
                text: "Military",
                recResponse: 7
              },
              {
                code: "S",
                text: "Small",
                recResponse: 8
              },
              {
                code: "T",
                text: "Light",
                recResponse: 8
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 7
              }
            ]
          },
          {
            code: "51D03",
            text: "Fire/Incident on Ground (Alert III)",
            recResponse: 9,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 9
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 10
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 9
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 10
              },
              {
                code: "L",
                text: "Large",
                recResponse: 9
              },
              {
                code: "M",
                text: "Military",
                recResponse: 9
              },
              {
                code: "S",
                text: "Small",
                recResponse: 10
              },
              {
                code: "T",
                text: "Light",
                recResponse: 10
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 9
              }
            ]
          },
          {
            code: "51D04",
            text: "Costal Water Crash",
            recResponse: 11,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 11
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 12
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 11
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 12
              },
              {
                code: "L",
                text: "Large",
                recResponse: 11
              },
              {
                code: "M",
                text: "Military",
                recResponse: 11
              },
              {
                code: "S",
                text: "Small",
                recResponse: 12
              },
              {
                code: "T",
                text: "Light",
                recResponse: 12
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 11
              }
            ]
          },
          {
            code: "51D05",
            text: "Inland Water Crash",
            recResponse: 11,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 11
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 12
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 11
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 12
              },
              {
                code: "L",
                text: "Large",
                recResponse: 11
              },
              {
                code: "M",
                text: "Military",
                recResponse: 11
              },
              {
                code: "S",
                text: "Small",
                recResponse: 12
              },
              {
                code: "T",
                text: "Light",
                recResponse: 12
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 11
              }
            ]
          },
          {
            code: "51D06",
            text: "Oceanic Water Crash",
            recResponse: 11,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 11
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 12
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 11
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 12
              },
              {
                code: "L",
                text: "Large",
                recResponse: 11
              },
              {
                code: "M",
                text: "Military",
                recResponse: 11
              },
              {
                code: "S",
                text: "Small",
                recResponse: 12
              },
              {
                code: "T",
                text: "Light",
                recResponse: 12
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 11
              }
            ]
          }
        ]
      }
    ]
  }
];
