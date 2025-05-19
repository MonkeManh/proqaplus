import { IFireComplaint } from "@/models/interfaces/complaints/fire/IFireComplaint";
import { IAnswerData } from "@/models/interfaces/complaints/IAnswerData";

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
    questions: [
      {
        text: <p>What <b>type</b> of aircraft is <b>involved</b>?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Airship/Blimp",
            display: "Aircraft is an airship/blimp",
            continue: true,
            updateSubCode: "A"
          },
          {
            answer: "Hot Air Balloon",
            display: "Aircraft is a hot air balloon",
            continue: true,
            updateSubCode: "B"
          },
          {
            answer: "Cargo",
            display: "Aircraft is a cargo plane",
            continue: true,
            updateSubCode: "C"
          },
          {
            answer: "Helicopter",
            display: "Aircraft is a helicopter",
            continue: true,
            updateSubCode: "H"
          },
          {
            answer: "Large",
            display: "Aircraft is a large plane",
            continue: true,
            updateSubCode: "L"
          },
          {
            answer: "Military",
            display: "Aircraft is a military plane",
            continue: true,
            updateSubCode: "M"
          },
          {
            answer: "Small",
            display: "Aircraft is a small plane",
            continue: true,
            updateSubCode: "S"
          },
          {
            answer: "Light",
            display: "Aircraft is a light plane",
            continue: true,
            updateSubCode: "T"
          },
          {
            answer: "Unknown",
            display: "Unk aircraft type",
            continue: true,
            updateSubCode: "U"
          }
        ]
      },

      {
        text: <p>Was the <b>aircraft</b> carrying <b className="text-red-400">ORDINANCE</b>?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "Military"
        },
        answers: [
          {
            answer: "No",
            display: "Not carrying ordinance",
            continue: true,
          },
          {
            answer: "Yes:",
            display: "Carrying ordinance: {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if carrying ordinance",
            continue: true,
          }
        ]
      },

      {
        text: <p>What is the <b>current status</b> of the aircraft?</p>,
        questionType: "select",
        answers: [
          {
            answer: "In Flight",
            display: "Aircraft is in flight",
            continue: true,
          },
          {
            answer: "On Ground",
            display: "Aircraft is on the ground",
            continue: true,
          },
          {
            answer: "CRASHED",
            display: "Aircraft has CRASHED",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk aircraft status",
            continue: true,
            updateCode: "51B01"
          }
        ]
      },

      {
        text: <p>What is the <b>nature</b> of the aircraft situation?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "In Flight"
        },
        answers: [
          {
            answer: "Normal Flight",
            display: "No known problems",
            continue: true,
            updateCode: "51O01"
          },
          {
            answer: "Standby (No Specific Problem)",
            display: "Requested to stby",
            continue: true,
            updateCode: "51A01"
          },
          {
            answer: "Alert I (Minor Problem)",
            display: "Minor issue (precautionary landing)",
            continue: true,
            updateCode: "51C02"
          },
          {
            answer: "Alert II (Major Problem)",
            display: "Major issue (possible emergency landing)",
            continue: true,
            updateCode: "51C01"
          },
          {
            answer: "Unknown",
            display: "Unk nature of emergency",
            continue: true,
            updateCode: "51B01"
          }
        ]
      },

      {
        text: <p>Is there any <b className="text-red-400">FIRE</b> present?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const answer = answers?.find((a) => a.defaultQuestion === "What is the current status of the aircraft?")?.defaultAnswer;
          return answer === "On Ground"
        },
        answers: [
          {
            answer: "No",
            display: "No fire",
            continue: true,
          },
          {
            answer: "Yes",
            display: "On fire",
            continue: true,
            updateCode: "51D03"
          },
          {
            answer: "Unknown",
            display: "Unk if fire present",
            continue: true,
          }
        ]
      },

      {
        text: <p>Where did the aircraft <b className="text-red-400">CRASH</b>?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const answer = answers?.find((a) => a.defaultQuestion === "What is the current status of the aircraft?")?.defaultAnswer;
          return answer === "CRASHED"
        },
        answers: [
          {
            answer: "On Land",
            display: "Crashed on land",
            continue: true,
            updateCode: "51D01"
          },
          {
            answer: "In Water",
            display: "Crashed in water",
            continue: true,
          },
          {
            answer: "Completely Unknown",
            display: "Unk where crashed",
            continue: true,
            updateCode: "51D00"
          }
        ]
      },

      {
        text: <p><b>What</b> did the aircraft <b>crash</b> into</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const answer = answers?.find((a) => a.defaultQuestion === "What is the current status of the aircraft?")?.defaultAnswer;
          return answer === "CRASHED"
        },
        answers: [
          {
            answer: "Building/Structure",
            display: "Crashed into building/structure",
            continue: true,
            updateCode: "51D02",
            preRenderInstructions: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              return lastAnswer === "On Land"
            }
          },
          {
            answer: "Nothing",
            display: "Did not hit anything addtnl",
            continue: true,
            preRenderInstructions: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              return lastAnswer === "On Land"
            }
          },
          {
            answer: "Costal Water",
            display: "Crashed into costal water",
            continue: true,
            updateCode: "51D04",
            override: true,
            preRenderInstructions: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              return lastAnswer === "In Water"
            }
          },
          {
            answer: "Inland Water",
            display: "Crashed into inland water",
            continue: true,
            updateCode: "51D05",
            override: true,
            preRenderInstructions: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              return lastAnswer === "In Water"
            }
          },
          {
            answer: "Oceanic Water",
            display: "Crashed into oceanic water",
            continue: true,
            updateCode: "51D06",
            override: true,
            preRenderInstructions: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              return lastAnswer === "In Water"
            }
          },
          {
            answer: "Unknown",
            display: "Unk what aircraft crashed into",
            continue: true,
            updateCode: "51D01",
          }
        ]
      },

      {
        text: <p>How many <b>souls</b> are/were <b>on board</b>?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Persons:",
            display: "{input} persons on board",
            input: true,
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk how many on board",
            continue: true,
          }
        ]
      },

      {
        text: <p>Are there any known injures?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Yes - Multiple Injuries",
            display: "Multiple injd people",
            continue: true,
          },
          {
            answer: "Yes - Single Injury",
            display: "Single injd person",
            continue: true,
          },
          {
            answer: "Yes - Obvious Fatalities",
            display: "Obvious fatalities",
            continue: true,
          },
          {
            answer: "No Injuries",
            display: "No injuries rptd",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if injuries",
            continue: true,
          }
        ]
      },
    ],
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
            text: "Unkn Situation (Investigation)",
            recResponse: 2,
            defaultCode: true,
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
