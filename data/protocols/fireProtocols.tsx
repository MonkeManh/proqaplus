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
      { name: "Police", priority: true },
    ],
    defaultPriority: 4,
    defaultPlan: 1,
    questions: [
      {
        text: (
          <p>
            What <b>type</b> of aircraft is <b>involved</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Airship/Blimp",
            display: "Aircraft is an airship/blimp",
            continue: true,
            updateSubCode: "A",
          },
          {
            answer: "Hot Air Balloon",
            display: "Aircraft is a hot air balloon",
            continue: true,
            updateSubCode: "B",
          },
          {
            answer: "Cargo",
            display: "Aircraft is a cargo plane",
            continue: true,
            updateSubCode: "C",
          },
          {
            answer: "Helicopter",
            display: "Aircraft is a helicopter",
            continue: true,
            updateSubCode: "H",
          },
          {
            answer: "Large",
            display: "Aircraft is a large plane",
            continue: true,
            updateSubCode: "L",
          },
          {
            answer: "Military",
            display: "Aircraft is a military plane",
            continue: true,
            updateSubCode: "M",
          },
          {
            answer: "Small",
            display: "Aircraft is a small plane",
            continue: true,
            updateSubCode: "S",
          },
          {
            answer: "Light",
            display: "Aircraft is a light plane",
            continue: true,
            updateSubCode: "T",
          },
          {
            answer: "Unknown",
            display: "Unk aircraft type",
            continue: true,
            updateSubCode: "U",
          },
        ],
      },

      {
        text: (
          <p>
            Was the <b>aircraft</b> carrying{" "}
            <b className="text-red-400">ORDINANCE</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "Military";
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
          },
        ],
      },

      {
        text: (
          <p>
            What is the <b>current status</b> of the aircraft?
          </p>
        ),
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
            updateCode: "51B01",
          },
        ],
      },

      {
        text: (
          <p>
            What is the <b>nature</b> of the aircraft situation?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "In Flight";
        },
        answers: [
          {
            answer: "Normal Flight",
            display: "No known problems",
            continue: true,
            updateCode: "51O01",
          },
          {
            answer: "Standby (No Specific Problem)",
            display: "Requested to stby",
            continue: true,
            updateCode: "51A01",
          },
          {
            answer: "Alert I (Minor Problem)",
            display: "Minor issue (precautionary landing)",
            continue: true,
            updateCode: "51C02",
          },
          {
            answer: "Alert II (Major Problem)",
            display: "Major issue (possible emergency landing)",
            continue: true,
            updateCode: "51C01",
          },
          {
            answer: "Unknown",
            display: "Unk nature of emergency",
            continue: true,
            updateCode: "51B01",
          },
        ],
      },

      {
        text: (
          <p>
            Is there any <b className="text-red-400">FIRE</b> present?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const answer = answers?.find(
            (a) =>
              a.defaultQuestion ===
              "What is the current status of the aircraft?"
          )?.defaultAnswer;
          return answer === "On Ground";
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
            updateCode: "51D03",
          },
          {
            answer: "Unknown",
            display: "Unk if fire present",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Where did the aircraft <b className="text-red-400">CRASH</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const answer = answers?.find(
            (a) =>
              a.defaultQuestion ===
              "What is the current status of the aircraft?"
          )?.defaultAnswer;
          return answer === "CRASHED";
        },
        answers: [
          {
            answer: "On Land",
            display: "Crashed on land",
            continue: true,
            updateCode: "51D01",
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
            updateCode: "51D00",
          },
        ],
      },

      {
        text: (
          <p>
            <b>What</b> did the aircraft <b>crash</b> into
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const answer = answers?.find(
            (a) =>
              a.defaultQuestion ===
              "What is the current status of the aircraft?"
          )?.defaultAnswer;
          return answer === "CRASHED";
        },
        answers: [
          {
            answer: "Building/Structure",
            display: "Crashed into building/structure",
            continue: true,
            updateCode: "51D02",
            preRenderInstructions: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              return lastAnswer === "On Land";
            },
          },
          {
            answer: "Nothing",
            display: "Did not hit anything addtnl",
            continue: true,
            preRenderInstructions: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              return lastAnswer === "On Land";
            },
          },
          {
            answer: "Costal Water",
            display: "Crashed into costal water",
            continue: true,
            updateCode: "51D04",
            override: true,
            preRenderInstructions: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              return lastAnswer === "In Water";
            },
          },
          {
            answer: "Inland Water",
            display: "Crashed into inland water",
            continue: true,
            updateCode: "51D05",
            override: true,
            preRenderInstructions: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              return lastAnswer === "In Water";
            },
          },
          {
            answer: "Oceanic Water",
            display: "Crashed into oceanic water",
            continue: true,
            updateCode: "51D06",
            override: true,
            preRenderInstructions: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              return lastAnswer === "In Water";
            },
          },
          {
            answer: "Unknown",
            display: "Unk what aircraft crashed into",
            continue: true,
            updateCode: "51D01",
          },
        ],
      },

      {
        text: (
          <p>
            How many <b>souls</b> are/were <b>on board</b>?
          </p>
        ),
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
          },
        ],
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
          },
        ],
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
                recResponse: 1,
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 1,
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 1,
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 1,
              },
              {
                code: "L",
                text: "Large",
                recResponse: 1,
              },
              {
                code: "M",
                text: "Military",
                recResponse: 1,
              },
              {
                code: "S",
                text: "Small",
                recResponse: 1,
              },
              {
                code: "T",
                text: "Light",
                recResponse: 1,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 1,
              },
            ],
          },
        ],
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
                recResponse: 2,
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 2,
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 2,
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 2,
              },
              {
                code: "L",
                text: "Large",
                recResponse: 2,
              },
              {
                code: "M",
                text: "Military",
                recResponse: 2,
              },
              {
                code: "S",
                text: "Small",
                recResponse: 2,
              },
              {
                code: "T",
                text: "Light",
                recResponse: 2,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 2,
              },
            ],
          },
          {
            code: "51A01",
            text: "Standby",
            recResponse: 3,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 3,
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 3,
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 3,
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 3,
              },
              {
                code: "L",
                text: "Large",
                recResponse: 3,
              },
              {
                code: "M",
                text: "Military",
                recResponse: 3,
              },
              {
                code: "S",
                text: "Small",
                recResponse: 3,
              },
              {
                code: "T",
                text: "Light",
                recResponse: 3,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 3,
              },
            ],
          },
        ],
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
                recResponse: 2,
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 2,
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 2,
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 2,
              },
              {
                code: "L",
                text: "Large",
                recResponse: 2,
              },
              {
                code: "M",
                text: "Military",
                recResponse: 2,
              },
              {
                code: "S",
                text: "Small",
                recResponse: 2,
              },
              {
                code: "T",
                text: "Light",
                recResponse: 2,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 2,
              },
            ],
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
                recResponse: 2,
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 2,
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 2,
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 2,
              },
              {
                code: "L",
                text: "Large",
                recResponse: 2,
              },
              {
                code: "M",
                text: "Military",
                recResponse: 2,
              },
              {
                code: "S",
                text: "Small",
                recResponse: 2,
              },
              {
                code: "T",
                text: "Light",
                recResponse: 2,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 2,
              },
            ],
          },
        ],
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
                recResponse: 4,
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 4,
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 4,
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 4,
              },
              {
                code: "L",
                text: "Large",
                recResponse: 4,
              },
              {
                code: "M",
                text: "Military",
                recResponse: 4,
              },
              {
                code: "S",
                text: "Small",
                recResponse: 4,
              },
              {
                code: "T",
                text: "Light",
                recResponse: 4,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 4,
              },
            ],
          },
          {
            code: "51C01",
            text: "Aircraft Incoming (Alert II)",
            recResponse: 5,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 5,
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 5,
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 5,
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 5,
              },
              {
                code: "L",
                text: "Large",
                recResponse: 5,
              },
              {
                code: "M",
                text: "Military",
                recResponse: 5,
              },
              {
                code: "S",
                text: "Small",
                recResponse: 5,
              },
              {
                code: "T",
                text: "Light",
                recResponse: 5,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 5,
              },
            ],
          },
          {
            code: "51C02",
            text: "Aircraft Incoming (Alert I)",
            recResponse: 6,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 6,
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 6,
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 6,
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 6,
              },
              {
                code: "L",
                text: "Large",
                recResponse: 6,
              },
              {
                code: "M",
                text: "Military",
                recResponse: 6,
              },
              {
                code: "S",
                text: "Small",
                recResponse: 6,
              },
              {
                code: "T",
                text: "Light",
                recResponse: 6,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 6,
              },
            ],
          },
        ],
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
                recResponse: 7,
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 8,
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 7,
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 8,
              },
              {
                code: "L",
                text: "Large",
                recResponse: 7,
              },
              {
                code: "M",
                text: "Military",
                recResponse: 7,
              },
              {
                code: "S",
                text: "Small",
                recResponse: 8,
              },
              {
                code: "T",
                text: "Light",
                recResponse: 8,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 7,
              },
            ],
          },
          {
            code: "51D01",
            text: "Aircraft Crash on Land (Alert III)",
            recResponse: 7,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 7,
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 8,
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 7,
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 8,
              },
              {
                code: "L",
                text: "Large",
                recResponse: 7,
              },
              {
                code: "M",
                text: "Military",
                recResponse: 7,
              },
              {
                code: "S",
                text: "Small",
                recResponse: 8,
              },
              {
                code: "T",
                text: "Light",
                recResponse: 8,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 7,
              },
            ],
          },
          {
            code: "51D02",
            text: "Crash Involving Building/Structure (Alert III)",
            recResponse: 7,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 7,
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 8,
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 7,
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 8,
              },
              {
                code: "L",
                text: "Large",
                recResponse: 7,
              },
              {
                code: "M",
                text: "Military",
                recResponse: 7,
              },
              {
                code: "S",
                text: "Small",
                recResponse: 8,
              },
              {
                code: "T",
                text: "Light",
                recResponse: 8,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 7,
              },
            ],
          },
          {
            code: "51D03",
            text: "Fire/Incident on Ground (Alert III)",
            recResponse: 9,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 9,
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 10,
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 9,
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 10,
              },
              {
                code: "L",
                text: "Large",
                recResponse: 9,
              },
              {
                code: "M",
                text: "Military",
                recResponse: 9,
              },
              {
                code: "S",
                text: "Small",
                recResponse: 10,
              },
              {
                code: "T",
                text: "Light",
                recResponse: 10,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 9,
              },
            ],
          },
          {
            code: "51D04",
            text: "Costal Water Crash",
            recResponse: 11,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 11,
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 12,
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 11,
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 12,
              },
              {
                code: "L",
                text: "Large",
                recResponse: 11,
              },
              {
                code: "M",
                text: "Military",
                recResponse: 11,
              },
              {
                code: "S",
                text: "Small",
                recResponse: 12,
              },
              {
                code: "T",
                text: "Light",
                recResponse: 12,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 11,
              },
            ],
          },
          {
            code: "51D05",
            text: "Inland Water Crash",
            recResponse: 11,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 11,
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 12,
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 11,
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 12,
              },
              {
                code: "L",
                text: "Large",
                recResponse: 11,
              },
              {
                code: "M",
                text: "Military",
                recResponse: 11,
              },
              {
                code: "S",
                text: "Small",
                recResponse: 12,
              },
              {
                code: "T",
                text: "Light",
                recResponse: 12,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 11,
              },
            ],
          },
          {
            code: "51D06",
            text: "Oceanic Water Crash",
            recResponse: 11,
            subCodes: [
              {
                code: "A",
                text: "Airship/Blimp",
                recResponse: 11,
              },
              {
                code: "B",
                text: "Hot Air Balloon",
                recResponse: 12,
              },
              {
                code: "C",
                text: "Cargo",
                recResponse: 11,
              },
              {
                code: "H",
                text: "Helicopter",
                recResponse: 12,
              },
              {
                code: "L",
                text: "Large",
                recResponse: 11,
              },
              {
                code: "M",
                text: "Military",
                recResponse: 11,
              },
              {
                code: "S",
                text: "Small",
                recResponse: 12,
              },
              {
                code: "T",
                text: "Light",
                recResponse: 12,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 11,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 52,
    name: "Alarms",
    shortName: "Alarms",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: undefined },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 3,
    defaultPlan: 13,
    questions: [
      {
        text: (
          <p>
            <b>Who</b> is reporting the <b>alarm</b> activation?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Alarm Company",
            display: "Alarm co reporting",
            continue: true,
          },
          {
            answer: "First (1st) Party",
            display: "1st pty reporting",
            continue: true,
          },
          {
            answer: "Second (2nd) Party",
            display: "2nd pty reporting",
            continue: true,
          },
          {
            answer: "Third (3rd) Party",
            display: "3rd pty reporting",
            continue: true,
          },
          {
            answer: "Call Box",
            display: "Call box report",
            continue: true,
            updateCode: "52B04",
          },
          {
            answer: "Pull Station",
            display: "Pull station report",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk reporting party",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            What <b>type</b> of <b>alarm</b> activation is this?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "General Fire Alarm",
            display: "General fire alm activation",
            continue: true,
            updateSubCode: "G",
          },
          {
            answer: "Smoke Detector",
            display: "Smoke detector activation",
            continue: true,
            updateSubCode: "S",
          },
          {
            answer: "Carbon Monoxide Detector",
            display: "CO detector activation",
            continue: true,
            updateSubCode: "C",
          },
          {
            answer: "Waterflow/Sprinkler",
            display: "Waterflow/sprinkler activation",
            continue: true,
            updateSubCode: "W",
          },
          {
            answer: "Heat (Temperature) Detector",
            display: "Heat detector activation",
            continue: true,
            updateSubCode: "H",
          },
          {
            answer: "Industrial Gas Detector",
            display: "Industrial gas detector activation",
            continue: true,
            updateSubCode: "I",
          },
          {
            answer: "Manual Pull Station",
            display: "Manual pull station activation",
            continue: true,
            updateSubCode: "P",
          },
          {
            answer: "Trouble/Tamper",
            display: "Trouble/tamper activation",
            continue: true,
            updateSubCode: "T",
          },
          {
            answer: "Carbon Dioxide Detector",
            display: "CO2 detector activation",
            continue: true,
            updateSubCode: "D",
          },
          {
            answer: "Cooking Hood System",
            display: "Cooking hood system activation",
            continue: true,
            updateSubCode: "J",
          },
          {
            answer: "Keypad (Manual)",
            display: "Keypad (manual) activation",
            continue: true,
            updateSubCode: "K",
          },
          {
            answer: "Duct Detector",
            display: "Duct detector activation",
            continue: true,
            updateSubCode: "L",
          },
          {
            answer: "Area of Rescue Assistance",
            display: "Area of rescue assistance activation",
            continue: true,
            updateSubCode: "R",
          },
          {
            answer: "Other:",
            display: "Other alarm activation: {input}",
            input: true,
            continue: true,
            updateSubCode: "O",
          },
          {
            answer: "Unknown",
            display: "Unk alarm activation",
            continue: true,
            updateSubCode: "U",
          },
        ],
      },

      {
        text: (
          <p>
            Do you see any <b className="text-red-400">smoke</b> or{" "}
            <b className="text-red-400">FIRE</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return (
            (lastAnswer === "First (1st) Party" ||
              firstAnswer === "Second (2nd) Party" ||
              firstAnswer === "Third (3rd) Party") &&
            (lastAnswer === "General Fire Alarm" ||
              lastAnswer === "Smoke Detector" ||
              lastAnswer === "Waterflow/Sprinkler" ||
              lastAnswer === "Heat (Temperature) Detector" ||
              lastAnswer === "Manual Pull Station" ||
              lastAnswer === "Trouble/Tamper" ||
              lastAnswer === "Cooking Hood System" ||
              lastAnswer === "Keypad (Manual)" ||
              lastAnswer === "Duct Detector")
          );
        },
        answers: [
          {
            answer: "No",
            display: "No smoke/fire rptd",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Smoke/fire rptd",
            goto: 69,
          },
          {
            answer: "Unknown",
            display: "Unk if smoke/fire",
            continue: true,
            updateCode: "52B04",
          },
        ],
      },

      {
        text: (
          <p>
            What type of <b>building</b> is <b>involed</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Residential (Single-Family)",
            display: "Residential (single) bldg",
            continue: true,
            updateCode: "52B01",
          },
          {
            answer: "Commercial / Industrial",
            display: "Commercial/Industrial bldg",
            continue: true,
            updateCode: "52C03",
          },
          {
            answer: "Residential (Multi-Family)",
            display: "Residential (multi) bldg",
            continue: true,
            updateCode: "52C04",
          },
          {
            answer: "Non-Dwelling Building/Structure",
            display: "Non-dwelling bldg/structure",
            continue: true,
            updateCode: "52B02",
          },
          {
            answer: "HIGH RISE",
            display: "High rise bldg",
            continue: true,
            updateCode: "52C02",
          },
          {
            answer: "Mixed-Occupancy",
            display: "Mixed-occupancy bldg",
            continue: true,
            updateCode: "52C05",
          },
          {
            answer: "Mobile Home",
            display: "Mobile home",
            continue: true,
            updateCode: "52B03",
          },
          {
            answer: "House Trailer",
            display: "House trailer",
            continue: true,
            updateCode: "52B03",
          },
          {
            answer: "Portable Office",
            display: "Portable office",
            continue: true,
            updateCode: "52B03",
          },
          {
            answer: "Other:",
            display: "Other bldg type: {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk bldg type",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is there a <b className="text-blue-400">HIGH LIFE RISK</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No high life risk ID'd",
            continue: true,
          },
          {
            answer: "Yes",
            display: "High life risk",
            continue: true,
            override: true,
            updateCode: "52C01",
          },
          {
            answer: "Unknown",
            display: "Unk if high life risk",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is anyone <b>sick</b> or experiencing <b>symptoms</b> (nausea,
            headaches, drowsiness)?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[1]?.defaultAnswer;
          return (
            lastAnswer === "Carbon Monoxide Detector" ||
            lastAnswer === "Industrial Gas Detector"
          );
        },
        answers: [
          {
            answer: "Yes - Single Sick Person",
            display: "Single sick person",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if (lastAnswer === "Carbon Monoxide Detector") {
                return { subCode: "X" };
              } else if (lastAnswer === "Industrial Gas Detector") {
                return { subCode: "E" };
              }
            },
          },
          {
            answer: "Yes - Multiple Sick Persons:",
            display: "{input} sick persons",
            input: true,
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if (lastAnswer === "Carbon Monoxide Detector") {
                return { subCode: "Y" };
              } else if (lastAnswer === "Industrial Gas Detector") {
                return { subCode: "F" };
              }
            },
          },
          {
            answer: "No Sick Persons",
            display: "No sick persons",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if sick persons",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            What is the <b>location</b> of the alarm <b>activation</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Location:",
            display: "Activation location: {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk activation location",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Will you be attempting to <b>contact</b> the <b>keyholder</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Alarm Company";
        },
        answers: [
          {
            answer: "Yes",
            display: "Alarm co attempting to contact keyholder",
            continue: true,
          },
          {
            answer: "No",
            display: "Alarm co not attempting to contact keyholder",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if alarm co attempting to contact keyholder",
            continue: true,
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "B",
        determinants: [
          {
            code: "52B01",
            text: "Residential (Single)",
            recResponse: 13,
            subCodes: [
              {
                code: "C",
                text: "Carbon Monoxide",
                recResponse: 14,
              },
              {
                code: "D",
                text: "Carbon Dioxide",
                recResponse: 13,
              },
              {
                code: "E",
                text: "Industrial Gas w/ Sick Person",
                recResponse: 15,
              },
              {
                code: "F",
                text: "Industrial Gas w/ Mult Sick Persons",
                recResponse: 16,
              },
              {
                code: "G",
                text: "General/Fire",
                recResponse: 13,
              },
              {
                code: "H",
                text: "Heat (Temperature) Detector",
                recResponse: 13,
              },
              {
                code: "I",
                text: "Industrial Gas",
                recResponse: 13,
              },
              {
                code: "J",
                text: "Cooking Hood System",
                recResponse: 13,
              },
              {
                code: "K",
                text: "Keypad (Manual)",
                recResponse: 13,
              },
              {
                code: "L",
                text: "Duct Detector",
                recResponse: 13,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 13,
              },
              {
                code: "P",
                text: "Pull Station",
                recResponse: 13,
              },
              {
                code: "R",
                text: "Area of Rescue Assistance",
                recResponse: 13,
              },
              {
                code: "S",
                text: "Smoke Detector",
                recResponse: 13,
              },
              {
                code: "T",
                text: "Trouble/Tamper",
                recResponse: 13,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 13,
              },
              {
                code: "W",
                text: "Waterflow/Sprinkler",
                recResponse: 13,
              },
              {
                code: "X",
                text: "CO w/ Single Sick Person",
                recResponse: 15,
              },
              {
                code: "Y",
                text: "CO w/ Multiple Sick Persons",
                recResponse: 16,
              },
            ],
          },
          {
            code: "52B02",
            text: "Non-Dwelling Building/Structure (Shed, Garage)",
            recResponse: 17,
            subCodes: [
              {
                code: "C",
                text: "Carbon Monoxide",
                recResponse: 14,
              },
              {
                code: "D",
                text: "Carbon Dioxide",
                recResponse: 13,
              },
              {
                code: "E",
                text: "Industrial Gas w/ Sick Person",
                recResponse: 19,
              },
              {
                code: "F",
                text: "Industrial Gas w/ Mult Sick Persons",
                recResponse: 19,
              },
              {
                code: "G",
                text: "General/Fire",
                recResponse: 13,
              },
              {
                code: "H",
                text: "Heat (Temperature) Detector",
                recResponse: 13,
              },
              {
                code: "I",
                text: "Industrial Gas",
                recResponse: 13,
              },
              {
                code: "J",
                text: "Cooking Hood System",
                recResponse: 13,
              },
              {
                code: "K",
                text: "Keypad (Manual)",
                recResponse: 13,
              },
              {
                code: "L",
                text: "Duct Detector",
                recResponse: 13,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 13,
              },
              {
                code: "P",
                text: "Pull Station",
                recResponse: 13,
              },
              {
                code: "R",
                text: "Area of Rescue Assistance",
                recResponse: 13,
              },
              {
                code: "S",
                text: "Smoke Detector",
                recResponse: 13,
              },
              {
                code: "T",
                text: "Trouble/Tamper",
                recResponse: 13,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 13,
              },
              {
                code: "W",
                text: "Waterflow/Sprinkler",
                recResponse: 13,
              },
              {
                code: "X",
                text: "CO w/ Single Sick Person",
                recResponse: 19,
              },
              {
                code: "Y",
                text: "CO w/ Multiple Sick Persons",
                recResponse: 19,
              },
            ],
          },
          {
            code: "52B03",
            text: "Mobile Home, House Trailer, Portable Office",
            recResponse: 13,
            subCodes: [
              {
                code: "C",
                text: "Carbon Monoxide",
                recResponse: 14,
              },
              {
                code: "D",
                text: "Carbon Dioxide",
                recResponse: 13,
              },
              {
                code: "E",
                text: "Industrial Gas w/ Sick Person",
                recResponse: 15,
              },
              {
                code: "F",
                text: "Industrial Gas w/ Mult Sick Persons",
                recResponse: 16,
              },
              {
                code: "G",
                text: "General/Fire",
                recResponse: 13,
              },
              {
                code: "H",
                text: "Heat (Temperature) Detector",
                recResponse: 13,
              },
              {
                code: "I",
                text: "Industrial Gas",
                recResponse: 13,
              },
              {
                code: "J",
                text: "Cooking Hood System",
                recResponse: 13,
              },
              {
                code: "K",
                text: "Keypad (Manual)",
                recResponse: 13,
              },
              {
                code: "L",
                text: "Duct Detector",
                recResponse: 13,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 13,
              },
              {
                code: "P",
                text: "Pull Station",
                recResponse: 13,
              },
              {
                code: "R",
                text: "Area of Rescue Assistance",
                recResponse: 13,
              },
              {
                code: "S",
                text: "Smoke Detector",
                recResponse: 13,
              },
              {
                code: "T",
                text: "Trouble/Tamper",
                recResponse: 13,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 13,
              },
              {
                code: "W",
                text: "Waterflow/Sprinkler",
                recResponse: 13,
              },
              {
                code: "X",
                text: "CO w/ Single Sick Person",
                recResponse: 15,
              },
              {
                code: "Y",
                text: "CO w/ Multiple Sick Persons",
                recResponse: 16,
              },
            ],
          },
          {
            code: "52B04",
            text: "Unkn Situation (Investigation/Call Box)",
            recResponse: 13,
            defaultCode: true,
            subCodes: [
              {
                code: "C",
                text: "Carbon Monoxide",
                recResponse: 14,
              },
              {
                code: "D",
                text: "Carbon Dioxide",
                recResponse: 13,
              },
              {
                code: "E",
                text: "Industrial Gas w/ Sick Person",
                recResponse: 15,
              },
              {
                code: "F",
                text: "Industrial Gas w/ Mult Sick Persons",
                recResponse: 16,
              },
              {
                code: "G",
                text: "General/Fire",
                recResponse: 13,
              },
              {
                code: "H",
                text: "Heat (Temperature) Detector",
                recResponse: 13,
              },
              {
                code: "I",
                text: "Industrial Gas",
                recResponse: 13,
              },
              {
                code: "J",
                text: "Cooking Hood System",
                recResponse: 13,
              },
              {
                code: "K",
                text: "Keypad (Manual)",
                recResponse: 13,
              },
              {
                code: "L",
                text: "Duct Detector",
                recResponse: 13,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 13,
              },
              {
                code: "P",
                text: "Pull Station",
                recResponse: 13,
              },
              {
                code: "R",
                text: "Area of Rescue Assistance",
                recResponse: 13,
              },
              {
                code: "S",
                text: "Smoke Detector",
                recResponse: 13,
              },
              {
                code: "T",
                text: "Trouble/Tamper",
                recResponse: 13,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 13,
              },
              {
                code: "W",
                text: "Waterflow/Sprinkler",
                recResponse: 13,
              },
              {
                code: "X",
                text: "CO w/ Single Sick Person",
                recResponse: 15,
              },
              {
                code: "Y",
                text: "CO w/ Multiple Sick Persons",
                recResponse: 16,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "52C00",
            text: "Override (Charlie)",
            recResponse: 17,
            subCodes: [
              {
                code: "C",
                text: "Carbon Monoxide",
                recResponse: 14,
              },
              {
                code: "D",
                text: "Carbon Dioxide",
                recResponse: 17,
              },
              {
                code: "E",
                text: "Industrial Gas w/ Sick Person",
                recResponse: 19,
              },
              {
                code: "F",
                text: "Industrial Gas w/ Mult Sick Persons",
                recResponse: 19,
              },
              {
                code: "G",
                text: "General/Fire",
                recResponse: 17,
              },
              {
                code: "H",
                text: "Heat (Temperature) Detector",
                recResponse: 17,
              },
              {
                code: "I",
                text: "Industrial Gas",
                recResponse: 17,
              },
              {
                code: "J",
                text: "Cooking Hood System",
                recResponse: 17,
              },
              {
                code: "K",
                text: "Keypad (Manual)",
                recResponse: 17,
              },
              {
                code: "L",
                text: "Duct Detector",
                recResponse: 17,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 17,
              },
              {
                code: "P",
                text: "Pull Station",
                recResponse: 17,
              },
              {
                code: "R",
                text: "Area of Rescue Assistance",
                recResponse: 17,
              },
              {
                code: "S",
                text: "Smoke Detector",
                recResponse: 17,
              },
              {
                code: "T",
                text: "Trouble/Tamper",
                recResponse: 17,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 17,
              },
              {
                code: "W",
                text: "Waterflow/Sprinkler",
                recResponse: 17,
              },
              {
                code: "X",
                text: "CO w/ Single Sick Person",
                recResponse: 19,
              },
              {
                code: "Y",
                text: "CO w/ Multiple Sick Persons",
                recResponse: 19,
              },
            ],
          },
          {
            code: "52C01",
            text: "High Life Hazard",
            recResponse: 17,
            subCodes: [
              {
                code: "C",
                text: "Carbon Monoxide",
                recResponse: 14,
              },
              {
                code: "D",
                text: "Carbon Dioxide",
                recResponse: 17,
              },
              {
                code: "E",
                text: "Industrial Gas w/ Sick Person",
                recResponse: 19,
              },
              {
                code: "F",
                text: "Industrial Gas w/ Mult Sick Persons",
                recResponse: 19,
              },
              {
                code: "G",
                text: "General/Fire",
                recResponse: 17,
              },
              {
                code: "H",
                text: "Heat (Temperature) Detector",
                recResponse: 17,
              },
              {
                code: "I",
                text: "Industrial Gas",
                recResponse: 17,
              },
              {
                code: "J",
                text: "Cooking Hood System",
                recResponse: 17,
              },
              {
                code: "K",
                text: "Keypad (Manual)",
                recResponse: 17,
              },
              {
                code: "L",
                text: "Duct Detector",
                recResponse: 17,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 17,
              },
              {
                code: "P",
                text: "Pull Station",
                recResponse: 17,
              },
              {
                code: "R",
                text: "Area of Rescue Assistance",
                recResponse: 17,
              },
              {
                code: "S",
                text: "Smoke Detector",
                recResponse: 17,
              },
              {
                code: "T",
                text: "Trouble/Tamper",
                recResponse: 17,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 17,
              },
              {
                code: "W",
                text: "Waterflow/Sprinkler",
                recResponse: 17,
              },
              {
                code: "X",
                text: "CO w/ Single Sick Person",
                recResponse: 19,
              },
              {
                code: "Y",
                text: "CO w/ Multiple Sick Persons",
                recResponse: 19,
              },
            ],
          },
          {
            code: "52C02",
            text: "High Rise",
            recResponse: 17,
            subCodes: [
              {
                code: "C",
                text: "Carbon Monoxide",
                recResponse: 14,
              },
              {
                code: "D",
                text: "Carbon Dioxide",
                recResponse: 17,
              },
              {
                code: "E",
                text: "Industrial Gas w/ Sick Person",
                recResponse: 19,
              },
              {
                code: "F",
                text: "Industrial Gas w/ Mult Sick Persons",
                recResponse: 19,
              },
              {
                code: "G",
                text: "General/Fire",
                recResponse: 17,
              },
              {
                code: "H",
                text: "Heat (Temperature) Detector",
                recResponse: 17,
              },
              {
                code: "I",
                text: "Industrial Gas",
                recResponse: 17,
              },
              {
                code: "J",
                text: "Cooking Hood System",
                recResponse: 17,
              },
              {
                code: "K",
                text: "Keypad (Manual)",
                recResponse: 17,
              },
              {
                code: "L",
                text: "Duct Detector",
                recResponse: 17,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 17,
              },
              {
                code: "P",
                text: "Pull Station",
                recResponse: 17,
              },
              {
                code: "R",
                text: "Area of Rescue Assistance",
                recResponse: 17,
              },
              {
                code: "S",
                text: "Smoke Detector",
                recResponse: 17,
              },
              {
                code: "T",
                text: "Trouble/Tamper",
                recResponse: 17,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 17,
              },
              {
                code: "W",
                text: "Waterflow/Sprinkler",
                recResponse: 17,
              },
              {
                code: "X",
                text: "CO w/ Single Sick Person",
                recResponse: 19,
              },
              {
                code: "Y",
                text: "CO w/ Multiple Sick Persons",
                recResponse: 19,
              },
            ],
          },
          {
            code: "52C03",
            text: "Comm/Ind Building",
            recResponse: 17,
            subCodes: [
              {
                code: "C",
                text: "Carbon Monoxide",
                recResponse: 14,
              },
              {
                code: "D",
                text: "Carbon Dioxide",
                recResponse: 17,
              },
              {
                code: "E",
                text: "Industrial Gas w/ Sick Person",
                recResponse: 19,
              },
              {
                code: "F",
                text: "Industrial Gas w/ Mult Sick Persons",
                recResponse: 19,
              },
              {
                code: "G",
                text: "General/Fire",
                recResponse: 17,
              },
              {
                code: "H",
                text: "Heat (Temperature) Detector",
                recResponse: 17,
              },
              {
                code: "I",
                text: "Industrial Gas",
                recResponse: 17,
              },
              {
                code: "J",
                text: "Cooking Hood System",
                recResponse: 17,
              },
              {
                code: "K",
                text: "Keypad (Manual)",
                recResponse: 17,
              },
              {
                code: "L",
                text: "Duct Detector",
                recResponse: 17,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 17,
              },
              {
                code: "P",
                text: "Pull Station",
                recResponse: 17,
              },
              {
                code: "R",
                text: "Area of Rescue Assistance",
                recResponse: 17,
              },
              {
                code: "S",
                text: "Smoke Detector",
                recResponse: 17,
              },
              {
                code: "T",
                text: "Trouble/Tamper",
                recResponse: 17,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 17,
              },
              {
                code: "W",
                text: "Waterflow/Sprinkler",
                recResponse: 17,
              },
              {
                code: "X",
                text: "CO w/ Single Sick Person",
                recResponse: 19,
              },
              {
                code: "Y",
                text: "CO w/ Multiple Sick Persons",
                recResponse: 19,
              },
            ],
          },
          {
            code: "52C04",
            text: "Residential (Mult)",
            recResponse: 17,
            subCodes: [
              {
                code: "C",
                text: "Carbon Monoxide",
                recResponse: 14,
              },
              {
                code: "D",
                text: "Carbon Dioxide",
                recResponse: 17,
              },
              {
                code: "E",
                text: "Industrial Gas w/ Sick Person",
                recResponse: 19,
              },
              {
                code: "F",
                text: "Industrial Gas w/ Mult Sick Persons",
                recResponse: 19,
              },
              {
                code: "G",
                text: "General/Fire",
                recResponse: 17,
              },
              {
                code: "H",
                text: "Heat (Temperature) Detector",
                recResponse: 17,
              },
              {
                code: "I",
                text: "Industrial Gas",
                recResponse: 17,
              },
              {
                code: "J",
                text: "Cooking Hood System",
                recResponse: 17,
              },
              {
                code: "K",
                text: "Keypad (Manual)",
                recResponse: 17,
              },
              {
                code: "L",
                text: "Duct Detector",
                recResponse: 17,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 17,
              },
              {
                code: "P",
                text: "Pull Station",
                recResponse: 17,
              },
              {
                code: "R",
                text: "Area of Rescue Assistance",
                recResponse: 17,
              },
              {
                code: "S",
                text: "Smoke Detector",
                recResponse: 17,
              },
              {
                code: "T",
                text: "Trouble/Tamper",
                recResponse: 17,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 17,
              },
              {
                code: "W",
                text: "Waterflow/Sprinkler",
                recResponse: 17,
              },
              {
                code: "X",
                text: "CO w/ Single Sick Person",
                recResponse: 19,
              },
              {
                code: "Y",
                text: "CO w/ Multiple Sick Persons",
                recResponse: 19,
              },
            ],
          },
          {
            code: "52C05",
            text: "Mixed-Use Occupancy Building",
            recResponse: 17,
            subCodes: [
              {
                code: "C",
                text: "Carbon Monoxide",
                recResponse: 14,
              },
              {
                code: "D",
                text: "Carbon Dioxide",
                recResponse: 17,
              },
              {
                code: "E",
                text: "Industrial Gas w/ Sick Person",
                recResponse: 19,
              },
              {
                code: "F",
                text: "Industrial Gas w/ Mult Sick Persons",
                recResponse: 19,
              },
              {
                code: "G",
                text: "General/Fire",
                recResponse: 17,
              },
              {
                code: "H",
                text: "Heat (Temperature) Detector",
                recResponse: 17,
              },
              {
                code: "I",
                text: "Industrial Gas",
                recResponse: 17,
              },
              {
                code: "J",
                text: "Cooking Hood System",
                recResponse: 17,
              },
              {
                code: "K",
                text: "Keypad (Manual)",
                recResponse: 17,
              },
              {
                code: "L",
                text: "Duct Detector",
                recResponse: 17,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 17,
              },
              {
                code: "P",
                text: "Pull Station",
                recResponse: 17,
              },
              {
                code: "R",
                text: "Area of Rescue Assistance",
                recResponse: 17,
              },
              {
                code: "S",
                text: "Smoke Detector",
                recResponse: 17,
              },
              {
                code: "T",
                text: "Trouble/Tamper",
                recResponse: 17,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 17,
              },
              {
                code: "W",
                text: "Waterflow/Sprinkler",
                recResponse: 17,
              },
              {
                code: "X",
                text: "CO w/ Single Sick Person",
                recResponse: 19,
              },
              {
                code: "Y",
                text: "CO w/ Multiple Sick Persons",
                recResponse: 19,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 53,
    name: "Service Call",
    shortName: "Service Call",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: undefined },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 20,
    questions: [
      {
        text: <p>What is the call for service?</p>,
        questionType: "select",
        answers: [
          {
            answer: "General Service Call",
            display: "General service call",
            continue: true,
          },
          {
            answer: "OFI Service Call",
            display: "OFI service call",
            continue: true,
          },
          {
            answer: "Service Call w/ Medical Assistance",
            display: "Service call w/ medical assistance",
            continue: true,
            updateCode: "53B03",
          },
          {
            answer: "Standby service call",
            display: "Standby service call",
            continue: true,
            updateSubCode: "W",
            updateCode: "53A05",
          },
          {
            answer: "Unknown Service Call",
            display: "Unknown service call",
            continue: true,
            updateCode: "53A06",
          },
        ],
      },

      // GENERAL SERVICE CALLS
      {
        text: <p>Is the service call one of these OMEGA-LEVEL complaints?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "General Service Call";
        },
        answers: [
          {
            answer: "Locked Out of Vehicle (Unoccupied)",
            display: "Locked out of vehicle (unoccupied)",
            continue: true,
            updateCode: "53O01",
          },
          {
            answer: "Downed Trees & Objects",
            display: "Downed trees & objects",
            continue: true,
            updateCode: "53O02",
          },
          {
            answer: "Hydrant Problem",
            display: "Hydrant problem",
            continue: true,
            updateCode: "53O03",
          },
          {
            answer: "Sewer Problem",
            display: "Sewer problem",
            continue: true,
            updateCode: "53O04",
          },
          {
            answer: "Water Main Break",
            display: "Water main break",
            continue: true,
            updateCode: "53O05",
          },
          {
            answer: "Flooded/Water in Roadway",
            display: "Flooded/water in roadway",
            continue: true,
            updateCode: "53O06",
          },
          {
            answer: "Other:",
            display: "Other omega level complaint: {input}",
            continue: true,
            input: true,
            updateCode: "53O07",
          },
          {
            answer: "None of these",
            display: "No OMEGA-LEVEL probs ID'd",
            continue: true,
          },
        ],
      },

      {
        text: <p>Is the service call one of these ALPHA-LEVEL complaints?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          const lastAnswer = answers?.[1]?.defaultAnswer;
          return (
            firstAnswer === "General Service Call" &&
            lastAnswer === "None of these"
          );
        },
        answers: [
          {
            answer: "Locked In/Out of Building",
            display: "Locked in/out of building",
            continue: true,
            updateCode: "53A01",
          },
          {
            answer: "Lift Assist",
            display: "Lift assist",
            continue: true,
            updateCode: "53A02",
          },
          {
            answer: "Animal Rescue",
            display: "Animal rescue",
            continue: true,
            updateCode: "53A03",
          },
          {
            answer: "Water Problem (w/o Electrical Hazard)",
            display: "Water problem (w/o electrical hazard)",
            continue: true,
            updateCode: "53A04",
          },
          {
            answer: "Helicopter Landing Site",
            display: "Helicopter landing site",
            continue: true,
            updateSubCode: "R",
          },
          {
            answer: "None of these",
            display: "No ALPHA-LEVEL probs ID'd",
            continue: true,
          },
        ],
      },

      {
        text: <p>Is the service call one of these BRAVO-LEVEL complaints?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return (
            firstAnswer === "General Service Call" &&
            lastAnswer === "None of these"
          );
        },
        answers: [
          {
            answer: "Locked in Vehicle",
            display: "Locked in vehicle",
            continue: true,
            updateCode: "53B01",
          },
          {
            answer: "Welfare Check",
            display: "Welfare check",
            continue: true,
            updateCode: "53B02",
          },
          {
            answer: "Service Call w/ Medical Assistance",
            display: "Service call w/ medical assistance",
            continue: true,
            updateCode: "53B03",
          },
          {
            answer: "Helicopter Landing Site",
            display: "Helicopter landing site",
            continue: true,
            updateSubCode: "R",
          },
          {
            answer: "Urgent Service Call",
            display: "Urgent service call",
            continue: true,
            updateCode: "53B04",
          },
          {
            answer: "None of these",
            display: "No BRAVO-LEVEL probs ID'd",
            continue: true,
          },
        ],
      },

      {
        text: <p>Is the service call one of these CHARLIE-LEVEL complaints?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return (
            firstAnswer === "General Service Call" &&
            lastAnswer === "None of these"
          );
        },
        answers: [
          {
            answer: "Water Problem w/ Electrical Hazard",
            display: "Water problem w/ electrical hazard",
            continue: true,
            updateCode: "53C01",
          },
          {
            answer: "None of these",
            display: "No CHARLIE-LEVEL probs ID'd",
            continue: true,
            updateCode: "53A06",
          },
        ],
      },

      // OFI SERVICE CALLS
      {
        text: <p>What type of OFI service call is this?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "OFI Service Call";
        },
        answers: [
          {
            answer: "OFI Follow-Up",
            display: "OFI follow-up",
            continue: true,
            updateSubCode: "S",
          },
          {
            answer: "OFI Code Enforcement",
            display: "OFI code enforcement",
            continue: true,
            updateSubCode: "T",
          },
          {
            answer: "OFI Investigation",
            display: "OFI investigation",
            continue: true,
            updateSubCode: "U",
          },
          {
            answer: "OFI Other",
            display: "OFI other",
            continue: true,
            updateSubCode: "V",
          },
        ],
      },

      {
        text: <p>Does the call require medical to standby?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "OFI Service Call";
        },
        answers: [
          {
            answer: "No",
            display: "No medical required",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Medical required/requested",
            continue: true,
            updateCode: "53B03",
          },
          {
            answer: "Unknown",
            display: "Unk if medical required",
            continue: true,
          },
        ],
      },

      {
        text: <p>What is the specific situation</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Service Call w/ Medical Assistance";
        },
        answers: [
          {
            answer: "Safe Situation",
            display: "Safe situation",
            continue: true,
            updateSubCode: "A",
          },
          {
            answer: "LSIA Alert II (Stage)",
            display: "LSIA alert II (stage)",
            continue: true,
            updateSubCode: "B",
          },
          {
            answer: "Security Sweep",
            display: "Security sweep",
            continue: true,
            updateSubCode: "C",
          },
          {
            answer: "Barricade",
            display: "Barricade",
            continue: true,
            updateSubCode: "D",
          },
          {
            answer: "Special Ops",
            display: "Special ops",
            continue: true,
            updateSubCode: "E",
          },
          {
            answer: "Tac Medic",
            display: "Tac medic",
            continue: true,
            updateSubCode: "F",
          },
          {
            answer: "Lockout w/ Food on the Stove",
            display: "Lockout w/ food on the stove",
            continue: true,
            updateSubCode: "G",
          },
          {
            answer: "Mental Health Evaluation",
            display: "Mental health evaluation",
            continue: true,
            updateSubCode: "H",
          },
          {
            answer: "Community Medicine",
            display: "Community medicine",
            continue: true,
            updateSubCode: "I",
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "O",
        determinants: [
          {
            code: "53O01",
            text: "Locked Out of Vehicle (Unoccupied)",
            recResponse: 20,
          },
          {
            code: "53O02",
            text: "Downed Trees & Objects",
            recResponse: 20,
          },
          {
            code: "53O03",
            text: "Hydrant Problem",
            recResponse: 20,
          },
          {
            code: "53O04",
            text: "Sewer Problem",
            recResponse: 20,
          },
          {
            code: "53O05",
            text: "Water Main Break",
            recResponse: 20,
          },
          {
            code: "53O06",
            text: "Flooded/Water in Roadway",
            recResponse: 20,
          },
          {
            code: "53O07",
            text: "Other",
            recResponse: 20,
          },
        ],
      },
      {
        priority: "A",
        determinants: [
          {
            code: "53A00",
            text: "Override (Alpha)",
            recResponse: 20,
          },
          {
            code: "53A01",
            text: "Locked In/Out of Building",
            recResponse: 21,
          },
          {
            code: "53A02",
            text: "Lift Assist",
            recResponse: 22,
          },
          {
            code: "53A03",
            text: "Animal Rescue",
            recResponse: 23,
          },
          {
            code: "53A04",
            text: "Water Problem",
            recResponse: 24,
          },
          {
            code: "53A05",
            text: "Other",
            recResponse: 20,
            subCodes: [
              {
                code: "R",
                text: "Helicopter Landing Site",
                recResponse: 25,
              },
              {
                code: "S",
                text: "OFI Follow-Up",
                recResponse: 26,
              },
              {
                code: "T",
                text: "OFI Code Enforcement",
                recResponse: 27,
              },
              {
                code: "U",
                text: "OFI Investigation",
                recResponse: 28,
              },
              {
                code: "V",
                text: "OFI Other",
                recResponse: 29,
              },
              {
                code: "W",
                text: "Event Standby",
                recResponse: 30,
              },
              {
                code: "X",
                text: "Small Mercury Spill",
                recResponse: 31,
              },
              {
                code: "Y",
                text: "Illegal BBQ",
                recResponse: 32,
              },
              {
                code: "Z",
                text: "Malfunctioning Smoke Detector",
                recResponse: 33,
              },
            ],
          },
          {
            code: "53A06",
            text: "Unkn/Other Situation (Investigation)",
            recResponse: 34,
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "53B00",
            text: "Override (Bravo)",
            recResponse: 34,
            subCodes: [
              {
                code: "R",
                text: "Helicopter Landing Site",
                recResponse: 25,
              },
              {
                code: "S",
                text: "OFI Follow-Up",
                recResponse: 26,
              },
              {
                code: "T",
                text: "OFI Code Enforcement",
                recResponse: 27,
              },
              {
                code: "U",
                text: "OFI Investigation",
                recResponse: 28,
              },
              {
                code: "V",
                text: "OFI Other",
                recResponse: 29,
              },
              {
                code: "W",
                text: "Event Standby",
                recResponse: 30,
              },
              {
                code: "X",
                text: "Small Mercury Spill",
                recResponse: 31,
              },
              {
                code: "Y",
                text: "Illegal BBQ",
                recResponse: 32,
              },
              {
                code: "Z",
                text: "Malfunctioning Smoke Detector",
                recResponse: 33,
              },
            ],
          },
          {
            code: "53B01",
            text: "Locked in Vehicle",
            recResponse: 35,
          },
          {
            code: "53B02",
            text: "Welfare Check",
            recResponse: 36,
          },
          {
            code: "53B03",
            text: "Service Call w/ Medical Assistance",
            recResponse: 37,
            subCodes: [
              {
                code: "A",
                text: "Safe Situation",
                recResponse: 38,
              },
              {
                code: "B",
                text: "LSIA Alert II (Stage)",
                recResponse: 39,
              },
              {
                code: "C",
                text: "Security Sweep",
                recResponse: 40,
              },
              {
                code: "D",
                text: "Barricade",
                recResponse: 41,
              },
              {
                code: "E",
                text: "Special Ops",
                recResponse: 42,
              },
              {
                code: "F",
                text: "Tac Medic",
                recResponse: 43,
              },
              {
                code: "G",
                text: "Locout w/ Food on the Stove",
                recResponse: 44,
              },
              {
                code: "H",
                text: "Mental Health Evaluation",
                recResponse: 45,
              },
              {
                code: "I",
                text: "Community Medicine",
                recResponse: 46,
              },
              {
                code: "J",
                text: "Override",
                recResponse: 37,
              },
              {
                code: "R",
                text: "Helicopter Landing Site",
                recResponse: 25,
              },
              {
                code: "S",
                text: "OFI Follow-Up",
                recResponse: 47,
              },
              {
                code: "T",
                text: "OFI Code Enforcement",
                recResponse: 48,
              },
              {
                code: "U",
                text: "OFI Investigation",
                recResponse: 49,
              },
              {
                code: "V",
                text: "OFI Other",
                recResponse: 50,
              },
              {
                code: "W",
                text: "Event Standby",
                recResponse: 51,
              },
              {
                code: "X",
                text: "Small Mercury Spill",
                recResponse: 52,
              },
              {
                code: "Y",
                text: "Illegal BBQ",
                recResponse: 53,
              },
              {
                code: "Z",
                text: "Malfunctioning Smoke Detector",
                recResponse: 54,
              },
            ],
          },
          {
            code: "53B04",
            text: "Urgent Service Call",
            recResponse: 55,
            subCodes: [
              {
                code: "A",
                text: "Safe Situation",
                recResponse: 38,
              },
              {
                code: "B",
                text: "LSIA Alert II (Stage)",
                recResponse: 39,
              },
              {
                code: "C",
                text: "Security Sweep",
                recResponse: 40,
              },
              {
                code: "D",
                text: "Barricade",
                recResponse: 41,
              },
              {
                code: "E",
                text: "Special Ops",
                recResponse: 42,
              },
              {
                code: "F",
                text: "Tac Medic",
                recResponse: 43,
              },
              {
                code: "G",
                text: "Locout w/ Food on the Stove",
                recResponse: 44,
              },
              {
                code: "H",
                text: "Mental Health Evaluation",
                recResponse: 45,
              },
              {
                code: "I",
                text: "Community Medicine",
                recResponse: 46,
              },
              {
                code: "J",
                text: "Override",
                recResponse: 37,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "53C00",
            text: "Override (Charlie)",
            recResponse: 64,
            subCodes: [
              {
                code: "A",
                text: "Safe Situation",
                recResponse: 65,
              },
              {
                code: "B",
                text: "LSIA Alert II (Stage)",
                recResponse: 66,
              },
              {
                code: "C",
                text: "Security Sweep",
                recResponse: 67,
              },
              {
                code: "D",
                text: "Barricade",
                recResponse: 68,
              },
              {
                code: "E",
                text: "Special Ops",
                recResponse: 69,
              },
              {
                code: "F",
                text: "Tac Medic",
                recResponse: 70,
              },
              {
                code: "G",
                text: "Locout w/ Food on the Stove",
                recResponse: 71,
              },
              {
                code: "H",
                text: "Mental Health Evaluation",
                recResponse: 72,
              },
              {
                code: "I",
                text: "Community Medicine",
                recResponse: 73,
              },
              {
                code: "J",
                text: "Override",
                recResponse: 64,
              },
              {
                code: "R",
                text: "Helicopter Landing Site",
                recResponse: 25,
              },
              {
                code: "S",
                text: "OFI Follow-Up",
                recResponse: 74,
              },
              {
                code: "T",
                text: "OFI Code Enforcement",
                recResponse: 75,
              },
              {
                code: "U",
                text: "OFI Investigation",
                recResponse: 76,
              },
              {
                code: "V",
                text: "OFI Other",
                recResponse: 77,
              },
              {
                code: "W",
                text: "Event Standby",
                recResponse: 78,
              },
              {
                code: "X",
                text: "Small Mercury Spill",
                recResponse: 79,
              },
              {
                code: "Y",
                text: "Illegal BBQ",
                recResponse: 80,
              },
              {
                code: "Z",
                text: "Malfunctioning Smoke Detector",
                recResponse: 81,
              },
            ],
          },
          {
            code: "53C01",
            text: "Water Problem w/ Electrical Hazard",
            recResponse: 82,
          },
        ],
      },
    ],
  },
  {
    protocol: 54,
    name: "Confined Space/Structure Collapse",
    shortName: "Collapse/Entrapments",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: 2 },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 3,
    defaultPlan: 83,
    questions: [
      {
        text: (
          <p>
            What type of <b>incident</b> is this?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Structure Collapse",
            display: "Structure collapse rptd",
            continue: true,
          },
          {
            answer: "Confined Space Rescue",
            display: "Confined space rescue rptd",
            continue: true,
            updateSubCode: "C",
          },
          {
            answer: "Sinkhole",
            display: "Sinkhole rptd",
            continue: true,
            updateSubCode: "H",
          },
          {
            answer: "Landslide/Mudslide",
            display: "Landslide/mudslide rptd",
            continue: true,
            updateSubCode: "M",
          },
          {
            answer: "Trench Rescue/Collapse",
            display: "Trench rescue/collapse rptd",
            continue: true,
            updateSubCode: "T",
          },
          {
            answer: "Unknown Situation",
            display: "Unknown situation rptd",
            continue: true,
            updateSubCode: "U",
          },
        ],
      },

      // Structure Collapse
      {
        text: <p>What type of structure collapsed?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Structure Collapse";
        },
        answers: [
          {
            answer: "Large Building/Structure",
            display: "Large structure",
            continue: true,
            updateSubCode: "L",
          },
          {
            answer: "Small Building/Structure",
            display: "Small structure",
            continue: true,
            updateSubCode: "S",
          },
          {
            answer: "Unknown Structure",
            display: "Unk structure type",
            continue: true,
            updateSubCode: "L",
          },
        ],
      },

      {
        text: <p>Did the structure collapse into water?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Structure Collapse";
        },
        answers: [
          {
            answer: "No",
            display: "Did not collapse into water",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Collapsed into water",
            continue: true,
            updateSubCode: "W",
          },
          {
            answer: "Unknown",
            display: "Unk if collapsed into water",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is anyone <b>trapped</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No entrapment rptd",
            continue: true,
            updateCode: "54B02",
          },
          {
            answer: "Yes (Confirmed)",
            display: "Entrapment rptd",
            continue: true,
            updateCode: "54D01",
          },
          {
            answer: "Yes (Suspected)",
            display: "Entrapment suspected",
            continue: true,
            updateCode: "54B01",
          },
          {
            answer: "Unknown",
            display: "Unk if entrapment",
            continue: true,
            updateCode: "54B01",
          },
        ],
      },

      {
        text: (
          <p>
            How many <b>people</b> are <b>trapped</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return (
            firstAnswer === "Yes (Confirmed)" ||
            firstAnswer === "Yes (Suspected)"
          );
        },
        answers: [
          {
            answer: "Single Person",
            display: "Single person trapped",
            continue: true,
          },
          {
            answer: "Multiple People:",
            display: "{input} persons trapped",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk how many trapped",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Are there any <b className="text-green-400">HAZARDOUS</b> materials
            involved?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No hazmat involved",
            end: true,
          },
          {
            answer: "Yes:",
            display: "Hazmat involved - {input}",
            input: true,
            end: true,
            dependency: (answers?: IAnswerData[]) => {
              const trappedAnswer = answers?.find(
                (a) => a.question === "Is anyone trapped?"
              )?.defaultAnswer;
              if (trappedAnswer === "Yes (Confirmed)") {
                return { code: "54D02" };
              } else if (
                trappedAnswer === "Yes (Suspected)" ||
                trappedAnswer === "Unknown"
              ) {
                return { code: "54C01" };
              }
            },
          },
          {
            answer: "Unknown",
            display: "Unk if hazmat involved",
            end: true,
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "B",
        determinants: [
          {
            code: "54B01",
            text: "Entrapment/Trapped (Unconfirmed)",
            recResponse: 83,
            defaultCode: true,
            subCodes: [
              {
                code: "C",
                text: "Confined Space",
                recResponse: 83,
              },
              {
                code: "H",
                text: "Sinkhole",
                recResponse: 83,
              },
              {
                code: "L",
                text: "Large Building/Structure Collapse",
                recResponse: 83,
              },
              {
                code: "M",
                text: "Landslide/Mudslide",
                recResponse: 83,
              },
              {
                code: "S",
                text: "Small Building/Structure Collapse",
                recResponse: 83,
              },
              {
                code: "T",
                text: "Trench (Collapse/Rescue)",
                recResponse: 83,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 83,
              },
              {
                code: "W",
                text: "Building/Structure Collapse into Water",
                recResponse: 84,
              },
            ],
          },
          {
            code: "54B02",
            text: "No On Trapped (Investigation)",
            recResponse: 83,
            subCodes: [
              {
                code: "C",
                text: "Confined Space",
                recResponse: 83,
              },
              {
                code: "H",
                text: "Sinkhole",
                recResponse: 83,
              },
              {
                code: "L",
                text: "Large Building/Structure Collapse",
                recResponse: 83,
              },
              {
                code: "M",
                text: "Landslide/Mudslide",
                recResponse: 83,
              },
              {
                code: "S",
                text: "Small Building/Structure Collapse",
                recResponse: 83,
              },
              {
                code: "T",
                text: "Trench (Collapse/Rescue)",
                recResponse: 83,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 83,
              },
              {
                code: "W",
                text: "Building/Structure Collapse into Water",
                recResponse: 84,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "54C00",
            text: "Override (Charlie)",
            recResponse: 85,
            subCodes: [
              {
                code: "C",
                text: "Confined Space",
                recResponse: 86,
              },
              {
                code: "H",
                text: "Sinkhole",
                recResponse: 86,
              },
              {
                code: "L",
                text: "Large Building/Structure Collapse",
                recResponse: 87,
              },
              {
                code: "M",
                text: "Landslide/Mudslide",
                recResponse: 88,
              },
              {
                code: "S",
                text: "Small Building/Structure Collapse",
                recResponse: 87,
              },
              {
                code: "T",
                text: "Trench (Collapse/Rescue)",
                recResponse: 88,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 83,
              },
              {
                code: "W",
                text: "Building/Structure Collapse into Water",
                recResponse: 89,
              },
            ],
          },
          {
            code: "54C01",
            text: "Entrapment/Trapped (Unconfirmed) w/ Hazardous Materials",
            recResponse: 85,
            subCodes: [
              {
                code: "C",
                text: "Confined Space",
                recResponse: 86,
              },
              {
                code: "H",
                text: "Sinkhole",
                recResponse: 86,
              },
              {
                code: "L",
                text: "Large Building/Structure Collapse",
                recResponse: 87,
              },
              {
                code: "M",
                text: "Landslide/Mudslide",
                recResponse: 88,
              },
              {
                code: "S",
                text: "Small Building/Structure Collapse",
                recResponse: 87,
              },
              {
                code: "T",
                text: "Trench (Collapse/Rescue)",
                recResponse: 88,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 83,
              },
              {
                code: "W",
                text: "Building/Structure Collapse into Water",
                recResponse: 89,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "54D00",
            text: "Override (Delta)",
            recResponse: 85,
            subCodes: [
              {
                code: "C",
                text: "Confined Space",
                recResponse: 86,
              },
              {
                code: "H",
                text: "Sinkhole",
                recResponse: 86,
              },
              {
                code: "L",
                text: "Large Building/Structure Collapse",
                recResponse: 87,
              },
              {
                code: "M",
                text: "Landslide/Mudslide",
                recResponse: 88,
              },
              {
                code: "S",
                text: "Small Building/Structure Collapse",
                recResponse: 87,
              },
              {
                code: "T",
                text: "Trench (Collapse/Rescue)",
                recResponse: 88,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 83,
              },
              {
                code: "W",
                text: "Building/Structure Collapse into Water",
                recResponse: 89,
              },
            ],
          },
          {
            code: "54D01",
            text: "Entrapment/Trapped (Confirmed)",
            recResponse: 85,
            subCodes: [
              {
                code: "C",
                text: "Confined Space",
                recResponse: 86,
              },
              {
                code: "H",
                text: "Sinkhole",
                recResponse: 86,
              },
              {
                code: "L",
                text: "Large Building/Structure Collapse",
                recResponse: 87,
              },
              {
                code: "M",
                text: "Landslide/Mudslide",
                recResponse: 88,
              },
              {
                code: "S",
                text: "Small Building/Structure Collapse",
                recResponse: 87,
              },
              {
                code: "T",
                text: "Trench (Collapse/Rescue)",
                recResponse: 88,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 83,
              },
              {
                code: "W",
                text: "Building/Structure Collapse into Water",
                recResponse: 89,
              },
            ],
          },
          {
            code: "54D02",
            text: "Entrapment/Trapped (Confirmed) w/ Hazardous Materials",
            recResponse: 85,
            subCodes: [
              {
                code: "C",
                text: "Confined Space",
                recResponse: 86,
              },
              {
                code: "H",
                text: "Sinkhole",
                recResponse: 86,
              },
              {
                code: "L",
                text: "Large Building/Structure Collapse",
                recResponse: 87,
              },
              {
                code: "M",
                text: "Landslide/Mudslide",
                recResponse: 88,
              },
              {
                code: "S",
                text: "Small Building/Structure Collapse",
                recResponse: 87,
              },
              {
                code: "T",
                text: "Trench (Collapse/Rescue)",
                recResponse: 88,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 83,
              },
              {
                code: "W",
                text: "Building/Structure Collapse into Water",
                recResponse: 89,
              },
            ],
          },
        ],
      },
    ],
  },
];
