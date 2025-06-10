import { IAnswerData } from "@/models/interfaces/complaints/IAnswerData";
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
  },
  {
    protocol: 101,
    name: "Abduction (Kidnapping) / Custodial Abduction / Hostage Situation",
    shortName: "Abduction/Hostage Situation",
    description: <></>,
    services: [
      { name: "Police", priority: true },
      { name: "EMS", priority: undefined },
      { name: "Fire", priority: undefined },
    ],
    defaultPriority: 2,
    defaultPlan: 28,
    questions: [
      {
        text: <p>Are you <b>at that location now</b>?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Caller on location",
            continue: true,
          },
          {
            answer: "No",
            display: "Caller not on location",
            continue: true,
          }
        ]
      },

      {
        text: <p className="text-blue-400">What party is the caller?</p>,
        questionType: "select",
        answers: [
          {
            answer: "2nd party",
            display: "RP is 2nd pty",
            continue: true,
          },
          {
            answer: "Victim",
            display: "RP is victim",
            continue: true,
          },
          {
            answer: "3rd party",
            display: "RP is 3rd pty",
            continue: true,
          },
          {
            answer: "4th party",
            display: "RP is 4th pty",
            continue: true,
          },
          {
            answer: "Suspect",
            display: "RP is suspect",
            continue: true,
          }
        ]
      },

      {
        text: <p><b>When</b> did this <b>happen</b>?</p>,
        questionType: "select",
        answers: [
          {
            answer: "In progress",
            display: "Happening now",
            continue: true,
          },
          {
            answer: "Just occurred:",
            display: "Just occurred: {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Past:",
            display: "Occurred earlier: {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk when incident occurred",
            continue: true,
            updateCode: "101C09",
          }
        ]
      },

      {
        text: <p className="text-blue-400">What type of incident is this?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Abduction",
            display: "Abduction",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if(lastAnswer === "In progress") {
                return { code: "101D02" }
              } else if(lastAnswer === "Just occurred:") {
                return { code: "101C02" }
              } else if(lastAnswer === "Past:") {
                return { code: "101C06" }
              } else {
                return { code: "101C09" }
              }
            }
          },
          {
            answer: "Hostage situation",
            display: "Hostage situation",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if(lastAnswer === "In progress") {
                return { code: "101D01" }
              } else if(lastAnswer === "Just occurred:") {
                return { code: "101C01" }
              } else if(lastAnswer === "Past:") {
                return { code: "101C05" }
              } else {
                return { code: "101C09" }
              }
            }
          },
          {
            answer: "Parental/custodial abduction",
            display: "Parental/custodial abduction",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if(lastAnswer === "In progress") {
                return { code: "101D03" }
              } else if(lastAnswer === "Just occurred:") {
                return { code: "101C03" }
              } else if(lastAnswer === "Past:") {
                return { code: "101C07" }
              } else {
                return { code: "101C09" }
              }
            }
          },
          {
            answer: "Attempted abduction",
            display: "Attempted abduction",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if(lastAnswer === "In progress") {
                return { code: "101D04" }
              } else if(lastAnswer === "Just occurred:") {
                return { code: "101C04" }
              } else if(lastAnswer === "Past:") {
                return { code: "101C08" }
              } else {
                return { code: "101C09" }
              }
            }
          },
          {
            answer: "Unknown",
            display: "Completely unk situation",
            continue: true,
            updateCode: "101C09",
          }
        ]
      },

      {
        text: <p className="text-red-400">Were <b>weapons</b> involved or mentioned?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No wpns rptd",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Wpns involved or mentioned",
            continue: true,
            updateSubCode: "W",
          },
          {
            answer: "Unknown",
            display: "Unk if wpns involved",
            continue: true,
          }
        ]
      },
      
      {
        text: <p>What <b>type</b>?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "Yes";
        },
        answers: [
          {
            answer: "Gun:",
            display: "A gun is involved: {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Knife:",
            display: "A knife is involved: {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Club:",
            display: "A club is involved: {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Explosive:",
            display: "An explosive is involved: {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Other:",
            display: "Other wpns involved: {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk type of wpns involved",
            continue: true,
          }
        ]
      },

      {
        text: <p><b>Where</b> are the weapons <b>now</b>?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 2]?.defaultAnswer;
          return lastAnswer === "Yes";
        },
        answers: [
          {
            answer: "Carrying in hand",
            display: "Suspect carrying wpns in hand",
            continue: true,
          },
          {
            answer: "Put away",
            display: "Suspect put away wpns",
            continue: true,
          },
          {
            answer: "Other:",
            display: "Wpns are {input}",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk where wpns are now",
            continue: true,
          }
        ]
      },

      {
        text: <p><b>Decision point</b></p>,
        questionType: "select",
        omitQuestion: true,
        answers: [
          {
            answer: "Continue key questions",
            display: "Continue key questions",
            continue: true,
          },
          {
            answer: "Proceed to dispatch",
            display: "Proceed to dispatch",
            end: true,
          }
        ]
      },

      {
        text: <p>How <b>many</b> people are <b>involved</b>?</p>,
        questionType: "select",
        answers: [
          {
            answer: "One",
            display: "One person involved",
            continue: true,
          },
          {
            answer: "More than one (enter number):",
            display: "{input} persons involved",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk how many persons involved",
            continue: true,
          }
        ]
      },

      {
        text: <p><b>Where's</b> the <b>suspect/person responsible now</b>?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Detained",
            display: "Suspect(s) is detained",
            continue: true,
          },
          {
            answer: "On scene",
            display: "Suspect(s) is on scene",
            continue: true,
          },
          {
            answer: "Still in area",
            display: "Suspect(s) is still in area",
            continue: true,
          },
          {
            answer: "Left/leaving area",
            display: "Suspect(s) has left/leaving area",
            continue: true,
          },
          {
            answer: "Circulating the area",
            display: "Suspect(s) is circulating the area",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk where suspect(s) is now",
            continue: true,
          },
        ]
      },

      {
        text: <p><b>How</b> did s/he <b>leave</b>?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "Left/leaving area" || lastAnswer === "Circulating the area";
        },
        answers: [
          {
            answer: "Vehicle",
            display: "Suspect(s) left in vehicle",
            continue: true,
          },
          {
            answer: "On foot",
            display: "Suspect(s) left on foot",
            continue: true,
          },
          {
            answer: "Motorcycle",
            display: "Suspect(s) left on motorcycle",
            continue: true,
          },
          {
            answer: "Bicycle",
            display: "Suspect(s) left on bicycle",
            continue: true,
          },
          {
            answer: "Boat",
            display: "Suspect(s) left on boat",
            continue: true,
          },
          {
            answer: "Other:",
            display: "Suspect(s) left by {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk how suspect(s) left",
            continue: true,
          }
        ]
      },

      {
        text: <p>Describe the vehicle</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "Vehicle" || lastAnswer === "Motorcycle" || lastAnswer === "Bicycle" || lastAnswer === "Boat";
        },
        answers: [
          {
            answer: "Info:",
            display: "Suspect Veh: {vehicle}",
            continue: true,
            vehicleInput: true
          },
          {
            answer: "Unknown",
            display: "Unk vehicle description",
            continue: true,
          }
        ]
      },

      {
        text: <p>What <b>direction</b> was s/he going?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Info:",
            display: "Direction of travel: {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk direction of travel",
            continue: true,
          }
        ]
      },

      {
        text: <p>Do you know <b>where</b> s/he's going?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Info:",
            display: "Destination: {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk destination",
            continue: true,
          }
        ]
      },

      {
        text: <p className="text-blue-400">Obtain the suspect's description</p>,
        questionType: "select",
        answers: [
          {
            answer: "Info:",
            display: "Suspect: {person}",  // Changed this - remove "Suspect description: " prefix
            continue: true,
            personInput: true
          },
          {
            answer: "Unknown",
            display: "Unk suspect description",
            continue: true,
          }
        ]
      },

      {
        text: <p className="text-blue-400">Obtain the victim's description</p>,
        questionType: "select",
        answers: [
          {
            answer: "Info:",
            display: "Victim: {person}",  // Changed this - remove "Victim description: " prefix
            continue: true,
            personInput: true
          },
          {
            answer: "Unknown",
            display: "Unk victim description",
            continue: true,
          }
        ]
      },

      {
        text: <p><b className="text-blue-400">(Appropriate)</b> <b>Where's</b> the <b>victim</b>?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Info:",
            display: "Victim is {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk where victim is",
            continue: true,
          },
        ]
      },

      {
        text: <p>Is anyone <b>injured</b> or <b>sick</b>?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No injs rptd",
            continue: true,
          },
          {
            answer: "Yes - Medical needed",
            display: "Injs & medical required",
            continue: true,
          },
          {
            answer: "Yes - Medical not needed",
            display: "Injs but no medical needed",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if injs or sick",
            continue: true,
          }
        ]
      }
    ],
    availableDeterminants: [
      {
        priority: "C",
        determinants: [
          {
            code: "101C01",
            text: "Hostage Situation, Just Occurred",
            recResponse: 29,
            subCodes: [
              {
                code: "C",
                text: "Child involved (minor)",
                recResponse: 29
              },
              {
                code: "M",
                text: "Mult persons",
                recResponse: 29
              },
              {
                code: "P",
                text: "Public place",
                recResponse: 29
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 29
              },
              {
                code: "V",
                text: "Vehicle abduction",
                recResponse: 29
              },
            ]
          },
          {
            code: "101C02",
            text: "Abduction, Just Occurred",
            recResponse: 29,
            subCodes: [
              {
                code: "C",
                text: "Child involved (minor)",
                recResponse: 29
              },
              {
                code: "M",
                text: "Mult persons",
                recResponse: 29
              },
              {
                code: "P",
                text: "Public place",
                recResponse: 29
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 29
              },
              {
                code: "V",
                text: "Vehicle abduction",
                recResponse: 29
              },
            ]
          },
          {
            code: "101C03",
            text: "Parental/Custodial Abduction, Just Occurred",
            recResponse: 29,
            subCodes: [
              {
                code: "C",
                text: "Child involved (minor)",
                recResponse: 29
              },
              {
                code: "M",
                text: "Mult persons",
                recResponse: 29
              },
              {
                code: "P",
                text: "Public place",
                recResponse: 29
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 29
              },
              {
                code: "V",
                text: "Vehicle abduction",
                recResponse: 29
              },
            ]
          },
          {
            code: "101C04",
            text: "Attempted Abduction, Just Occurred",
            recResponse: 29,
            subCodes: [
              {
                code: "C",
                text: "Child involved (minor)",
                recResponse: 29
              },
              {
                code: "M",
                text: "Mult persons",
                recResponse: 29
              },
              {
                code: "P",
                text: "Public place",
                recResponse: 29
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 29
              },
              {
                code: "V",
                text: "Vehicle abduction",
                recResponse: 29
              },
            ]
          },
          {
            code: "101C05",
            text: "Hostage Situation, Occurred Earlier",
            recResponse: 29
          },
          {
            code: "101C06",
            text: "Abduction, Occurred Earlier",
            recResponse: 29,
            subCodes: [
              {
                code: "C",
                text: "Child involved (minor)",
                recResponse: 29
              },
              {
                code: "M",
                text: "Mult persons",
                recResponse: 29
              },
              {
                code: "P",
                text: "Public place",
                recResponse: 29
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 29
              },
              {
                code: "V",
                text: "Vehicle abduction",
                recResponse: 29
              },
            ]
          },
          {
            code: "101C07",
            text: "Parental/Custodial Abduction, Occurred Earlier",
            recResponse: 29,
            subCodes: [
              {
                code: "C",
                text: "Child involved (minor)",
                recResponse: 29
              },
              {
                code: "M",
                text: "Mult persons",
                recResponse: 29
              },
              {
                code: "P",
                text: "Public place",
                recResponse: 29
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 29
              },
              {
                code: "V",
                text: "Vehicle abduction",
                recResponse: 29
              },
            ]
          },
          {
            code: "101C08",
            text: "Attempted Abduction, Occurred Earlier",
            recResponse: 29,
            subCodes: [
              {
                code: "C",
                text: "Child involved (minor)",
                recResponse: 29
              },
              {
                code: "M",
                text: "Mult persons",
                recResponse: 29
              },
              {
                code: "P",
                text: "Public place",
                recResponse: 29
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 29
              },
              {
                code: "V",
                text: "Vehicle abduction",
                recResponse: 29
              },
            ]
          },
          {
            code: "101C09",
            text: "Unknown Situation (Investigation)",
            recResponse: 29,
            subCodes: [
              {
                code: "C",
                text: "Child involved (minor)",
                recResponse: 29
              },
              {
                code: "M",
                text: "Mult persons",
                recResponse: 29
              },
              {
                code: "P",
                text: "Public place",
                recResponse: 29
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 29
              },
              {
                code: "V",
                text: "Vehicle abduction",
                recResponse: 29
              },
            ]
          }
        ]
      },
      {
        priority: "D",
        determinants: [
          {
            code: "101D00",
            text: "Override (Delta)",
            recResponse: 28,
            subCodes: [
              {
                code: "C",
                text: "Child involved (minor)",
                recResponse: 28
              },
              {
                code: "M",
                text: "Mult persons",
                recResponse: 28
              },
              {
                code: "P",
                text: "Public place",
                recResponse: 28
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 28
              },
              {
                code: "V",
                text: "Vehicle abduction",
                recResponse: 28
              },
            ]
          },
          {
            code: "101D01",
            text: "Hostage Situation, In Progress",
            recResponse: 28,
            subCodes: [
              {
                code: "C",
                text: "Child involved (minor)",
                recResponse: 28
              },
              {
                code: "M",
                text: "Mult persons",
                recResponse: 28
              },
              {
                code: "P",
                text: "Public place",
                recResponse: 28
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 28
              },
              {
                code: "V",
                text: "Vehicle abduction",
                recResponse: 28
              },
            ]
          },
          {
            code: "101D02",
            text: "Abduction, In Progress",
            recResponse: 28,
            subCodes: [
              {
                code: "C",
                text: "Child involved (minor)",
                recResponse: 28
              },
              {
                code: "M",
                text: "Mult persons",
                recResponse: 28
              },
              {
                code: "P",
                text: "Public place",
                recResponse: 28
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 28
              },
              {
                code: "V",
                text: "Vehicle abduction",
                recResponse: 28
              },
            ]
          },
          {
            code: "101D03",
            text: "Parental/Custodial Abduction, In Progress",
            recResponse: 28,
            subCodes: [
              {
                code: "C",
                text: "Child involved (minor)",
                recResponse: 28
              },
              {
                code: "M",
                text: "Mult persons",
                recResponse: 28
              },
              {
                code: "P",
                text: "Public place",
                recResponse: 28
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 28
              },
              {
                code: "V",
                text: "Vehicle abduction",
                recResponse: 28
              },
            ]
          },
          {
            code: "101D04",
            text: "Attempted Abduction, In Progress",
            recResponse: 28,
            subCodes: [
              {
                code: "C",
                text: "Child involved (minor)",
                recResponse: 28
              },
              {
                code: "M",
                text: "Mult persons",
                recResponse: 28
              },
              {
                code: "P",
                text: "Public place",
                recResponse: 28
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 28
              },
              {
                code: "V",
                text: "Vehicle abduction",
                recResponse: 28
              },
            ]
          },
        ]
      },
    ]
  }
]