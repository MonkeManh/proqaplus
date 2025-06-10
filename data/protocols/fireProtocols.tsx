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
  {
    protocol: 55,
    name: "Electrical Hazard",
    shortName: "Electrical Hazard",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: undefined },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 91,
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
            answer: "Transformer Issue",
            display: "Transformer issue",
            continue: true,
            updateCode: "55A01",
          },
          {
            answer: "Appliance Issue",
            display: "Appliance issue",
            continue: true,
          },
          {
            answer: "Electrical Arcing",
            display: "Electrical arcing",
            continue: true,
            updateCode: "55B01",
          },
          {
            answer: "Downed Power Lines",
            display: "Downed power lines",
            continue: true,
          },
          {
            answer: "Other Electrical Hazard",
            display: "Other electrical hazard",
            continue: true,
          },
          {
            answer: "Unknown Situation",
            display: "Unk situation",
            continue: true,
            updateCode: "55B05",
          },
        ],
      },

      {
        text: (
          <p>
            Is there any <b className="text-red-400">smoking</b> or{" "}
            <b className="text-red-400">arcing</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Downed Power Lines";
        },
        answers: [
          {
            answer: "No",
            display: "No smoking or arcing",
            continue: true,
            updateCode: "55B02",
          },
          {
            answer: "Yes",
            display: "Smoking or arcing",
            continue: true,
            updateCode: "55C02",
          },
          {
            answer: "Unknown",
            display: "Unk if smoking or arcing",
            continue: true,
            updateCode: "55B02",
          },
        ],
      },

      {
        text: (
          <p>
            Is there any <b>odor</b> present?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return (
            firstAnswer === "Appliance Issue" ||
            firstAnswer === "Other Electrical Hazard"
          );
        },
        answers: [
          {
            answer: "No",
            display: "No odor present",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              if (firstAnswer === "Appliance Issue") {
                return { code: "55A02" };
              }
            },
          },
          {
            answer: "Yes",
            display: "Odor present",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              if (firstAnswer === "Appliance Issue") {
                return { code: "55B03" };
              } else if (firstAnswer === "Other Electrical Hazard") {
                return { code: "55B04" };
              }
            },
          },
          {
            answer: "Unknown",
            display: "Unk if odor present",
            continue: true,
            updateCode: "55B04",
          },
        ],
      },

      {
        text: (
          <p>
            Is there any <b className="text-red-400">SMOKE or FIRE</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Appliance Issue";
        },
        answers: [
          {
            answer: "No",
            display: "No smoke or fire",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Smoke or fire present",
            goto: 69,
          },
          {
            answer: "Unknown",
            display: "Unk if smoke or fire present",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is the <b className="text-green-400">HAZARD</b> in or near water?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "Hazard not in or near water",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Hazard in or near water",
            continue: true,
            updateCode: "55C01",
          },
          {
            answer: "Unknown",
            display: "Unk if hazard in or near water",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            What type of <b>loaction</b> is the hazard at?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer !== "Transformer Issue";
        },
        answers: [
          {
            answer: "Indoors",
            display: "Hazard is indoors",
            continue: true,
          },
          {
            answer: "Outdoors",
            display: "Hazard is outdoors",
            continue: true,
          },
          {
            answer: "Substation/Distribution Station",
            display: "Hazard is at substation/distribution station",
            continue: true,
            updateCode: "55C03",
          },
          {
            answer: "Underground",
            display: "Hazard is underground",
            continue: true,
            updateCode: "55C04",
          },
          {
            answer: "Solar Farm",
            display: "Hazard is at solar farm",
            continue: true,
            updateCode: "55C05",
          },
          {
            answer: "Location:",
            display: "Hazard is at {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk hazard location",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is anything (anyone) <b className="text-red-400">THREATENED</b> by
            the hazard?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No threat",
            continue: true,
          },
          {
            answer: "People Threatened",
            display: "Persons threatened",
            continue: true,
            updateSubCode: "P",
          },
          {
            answer: "Building (Non-Residential) Threatened",
            display: "Building (non-residential) threatened",
            continue: true,
            updateSubCode: "B",
          },
          {
            answer: "Residential Threatened",
            display: "Residential threatened",
            continue: true,
            updateSubCode: "R",
          },
          {
            answer: "Vehicle Threatened",
            display: "Vehicle threatened",
            continue: true,
            updateSubCode: "V",
          },
          {
            answer: "Animals Threatened",
            display: "Animals threatened",
            continue: true,
            updateSubCode: "A",
          },
          {
            answer: "Brush/Grass Threatened",
            display: "Brush/grass threatened",
            continue: true,
            updateSubCode: "C",
          },
          {
            answer: "Wildland Threatened",
            display: "Wildland threatened",
            continue: true,
            updateSubCode: "D",
          },
          {
            answer: "Other:",
            display: "{input} threatened",
            input: true,
            continue: true,
            updateSubCode: "O",
          },
          {
            answer: "Unknown",
            display: "Unk if threatening anyone/thing",
            continue: true,
            updateSubCode: "U",
          },
        ],
      },

      {
        text: (
          <p>
            Is <b>anyone</b> in <b>CONTACT</b> with the <b>hazard</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No-one in contact w/ hazard",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Person in contact w/ hazard",
            continue: true,
            updateSubCode: "N",
          },
          {
            answer: "Unknown",
            display: "Unk if anyone in contact w/ hazard",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is anyone <b>injured</b> or <b>sick</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No injs rptd",
            continue: true,
          },
          {
            answer: "Yes - Single Person",
            display: "Single person injured",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if (lastAnswer === "Yes") {
                return { subCode: "S" };
              } else {
                return { subCode: "X" };
              }
            },
          },
          {
            answer: "Yes - Multiple:",
            display: "{input} persons injured",
            input: true,
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if (lastAnswer === "Yes") {
                return { subCode: "T" };
              } else {
                return { subCode: "Y" };
              }
            },
          },
          {
            answer: "Unknown",
            display: "Unk if anyone injured",
            continue: true,
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "A",
        determinants: [
          {
            code: "55A01",
            text: "Transformer Outside (Wire or Pole)",
            recResponse: 91,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 91,
              },
              {
                code: "B",
                text: "Building (Non-Residential) Threatened",
                recResponse: 91,
              },
              {
                code: "C",
                text: "Brush/Grass Threatened",
                recResponse: 92,
              },
              {
                code: "D",
                text: "Wildland Threatened",
                recResponse: 92,
              },
              {
                code: "N",
                text: "Person in Contact w/ Electrical Hazard",
                recResponse: 93,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 91,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 92,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 92,
              },
              {
                code: "S",
                text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
                recResponse: 94,
              },
              {
                code: "T",
                text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
                recResponse: 95,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 91,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 92,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 93,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 95,
              },
            ],
          },
          {
            code: "55A02",
            text: "Appliance w/o Odor Present",
            recResponse: 96,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 96,
              },
              {
                code: "B",
                text: "Building (Non-Residential) Threatened",
                recResponse: 96,
              },
              {
                code: "C",
                text: "Brush/Grass Threatened",
                recResponse: 97,
              },
              {
                code: "D",
                text: "Wildland Threatened",
                recResponse: 97,
              },
              {
                code: "N",
                text: "Person in Contact w/ Electrical Hazard",
                recResponse: 98,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 96,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 97,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 97,
              },
              {
                code: "S",
                text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
                recResponse: 99,
              },
              {
                code: "T",
                text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
                recResponse: 100,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 96,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 97,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 98,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 100,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "55B00",
            text: "Override (Bravo)",
            recResponse: 101,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 101,
              },
              {
                code: "B",
                text: "Building (Non-Residential) Threatened",
                recResponse: 101,
              },
              {
                code: "C",
                text: "Brush/Grass Threatened",
                recResponse: 102,
              },
              {
                code: "D",
                text: "Wildland Threatened",
                recResponse: 102,
              },
              {
                code: "N",
                text: "Person in Contact w/ Electrical Hazard",
                recResponse: 103,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 101,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 102,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 102,
              },
              {
                code: "S",
                text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
                recResponse: 104,
              },
              {
                code: "T",
                text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
                recResponse: 105,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 101,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 102,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 103,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 105,
              },
            ],
          },
          {
            code: "55B01",
            text: "Electrical Arcing",
            recResponse: 106,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 106,
              },
              {
                code: "B",
                text: "Building (Non-Residential) Threatened",
                recResponse: 106,
              },
              {
                code: "C",
                text: "Brush/Grass Threatened",
                recResponse: 107,
              },
              {
                code: "D",
                text: "Wildland Threatened",
                recResponse: 107,
              },
              {
                code: "N",
                text: "Person in Contact w/ Electrical Hazard",
                recResponse: 108,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 106,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 107,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 107,
              },
              {
                code: "S",
                text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
                recResponse: 109,
              },
              {
                code: "T",
                text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
                recResponse: 110,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 106,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 107,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 108,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 110,
              },
            ],
          },
          {
            code: "55B02",
            text: "Wires Down w/o Smoke or Arcing",
            recResponse: 111,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 111,
              },
              {
                code: "B",
                text: "Building (Non-Residential) Threatened",
                recResponse: 111,
              },
              {
                code: "C",
                text: "Brush/Grass Threatened",
                recResponse: 112,
              },
              {
                code: "D",
                text: "Wildland Threatened",
                recResponse: 112,
              },
              {
                code: "N",
                text: "Person in Contact w/ Electrical Hazard",
                recResponse: 113,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 111,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 112,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 112,
              },
              {
                code: "S",
                text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
                recResponse: 114,
              },
              {
                code: "T",
                text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
                recResponse: 115,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 111,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 112,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 113,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 115,
              },
            ],
          },
          {
            code: "55B03",
            text: "Appliance w/ Odor Present",
            recResponse: 116,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 116,
              },
              {
                code: "B",
                text: "Building (Non-Residential) Threatened",
                recResponse: 116,
              },
              {
                code: "C",
                text: "Brush/Grass Threatened",
                recResponse: 117,
              },
              {
                code: "D",
                text: "Wildland Threatened",
                recResponse: 117,
              },
              {
                code: "N",
                text: "Person in Contact w/ Electrical Hazard",
                recResponse: 118,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 116,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 117,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 117,
              },
              {
                code: "S",
                text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
                recResponse: 119,
              },
              {
                code: "T",
                text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
                recResponse: 120,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 116,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 117,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 118,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 120,
              },
            ],
          },
          {
            code: "55B04",
            text: "Electrical Odor",
            recResponse: 121,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 121,
              },
              {
                code: "B",
                text: "Building (Non-Residential) Threatened",
                recResponse: 121,
              },
              {
                code: "C",
                text: "Brush/Grass Threatened",
                recResponse: 122,
              },
              {
                code: "D",
                text: "Wildland Threatened",
                recResponse: 122,
              },
              {
                code: "N",
                text: "Person in Contact w/ Electrical Hazard",
                recResponse: 123,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 121,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 122,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 122,
              },
              {
                code: "S",
                text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
                recResponse: 124,
              },
              {
                code: "T",
                text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
                recResponse: 125,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 121,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 122,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 123,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 125,
              },
            ],
          },
          {
            code: "55B05",
            text: "Unkn Situation (Investigation)",
            defaultCode: true,
            recResponse: 126,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 126,
              },
              {
                code: "B",
                text: "Building (Non-Residential) Threatened",
                recResponse: 126,
              },
              {
                code: "C",
                text: "Brush/Grass Threatened",
                recResponse: 127,
              },
              {
                code: "D",
                text: "Wildland Threatened",
                recResponse: 127,
              },
              {
                code: "N",
                text: "Person in Contact w/ Electrical Hazard",
                recResponse: 128,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 126,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 127,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 127,
              },
              {
                code: "S",
                text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
                recResponse: 129,
              },
              {
                code: "T",
                text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
                recResponse: 130,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 126,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 127,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 128,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 130,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "55C00",
            text: "Override (Charlie)",
            recResponse: 101,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 101,
              },
              {
                code: "B",
                text: "Building (Non-Residential) Threatened",
                recResponse: 101,
              },
              {
                code: "C",
                text: "Brush/Grass Threatened",
                recResponse: 102,
              },
              {
                code: "D",
                text: "Wildland Threatened",
                recResponse: 102,
              },
              {
                code: "N",
                text: "Person in Contact w/ Electrical Hazard",
                recResponse: 103,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 101,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 102,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 102,
              },
              {
                code: "S",
                text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
                recResponse: 104,
              },
              {
                code: "T",
                text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
                recResponse: 105,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 101,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 102,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 103,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 105,
              },
            ],
          },
          {
            code: "55C01",
            text: "Electrical Hazard w/ or Near Water",
            recResponse: 131,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 131,
              },
              {
                code: "B",
                text: "Building (Non-Residential) Threatened",
                recResponse: 131,
              },
              {
                code: "C",
                text: "Brush/Grass Threatened",
                recResponse: 132,
              },
              {
                code: "D",
                text: "Wildland Threatened",
                recResponse: 132,
              },
              {
                code: "N",
                text: "Person in Contact w/ Electrical Hazard",
                recResponse: 133,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 131,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 132,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 132,
              },
              {
                code: "S",
                text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
                recResponse: 134,
              },
              {
                code: "T",
                text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
                recResponse: 135,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 131,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 132,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 133,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 135,
              },
            ],
          },
          {
            code: "55C02",
            text: "Wires Down w/ Smoke or Arcing",
            recResponse: 136,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 136,
              },
              {
                code: "B",
                text: "Building (Non-Residential) Threatened",
                recResponse: 136,
              },
              {
                code: "C",
                text: "Brush/Grass Threatened",
                recResponse: 137,
              },
              {
                code: "D",
                text: "Wildland Threatened",
                recResponse: 137,
              },
              {
                code: "N",
                text: "Person in Contact w/ Electrical Hazard",
                recResponse: 138,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 136,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 137,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 137,
              },
              {
                code: "S",
                text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
                recResponse: 139,
              },
              {
                code: "T",
                text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
                recResponse: 140,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 136,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 137,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 138,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 140,
              },
            ],
          },
          {
            code: "55C03",
            text: "Substation/Distribution Station",
            recResponse: 141,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 141,
              },
              {
                code: "B",
                text: "Building (Non-Residential) Threatened",
                recResponse: 141,
              },
              {
                code: "C",
                text: "Brush/Grass Threatened",
                recResponse: 142,
              },
              {
                code: "D",
                text: "Wildland Threatened",
                recResponse: 142,
              },
              {
                code: "N",
                text: "Person in Contact w/ Electrical Hazard",
                recResponse: 143,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 141,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 142,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 142,
              },
              {
                code: "S",
                text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
                recResponse: 144,
              },
              {
                code: "T",
                text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
                recResponse: 145,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 141,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 142,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 143,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 145,
              },
            ],
          },
          {
            code: "55C04",
            text: "Underground Electrical Problem (Vault/Manhole)",
            recResponse: 146,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 146,
              },
              {
                code: "B",
                text: "Building (Non-Residential) Threatened",
                recResponse: 146,
              },
              {
                code: "C",
                text: "Brush/Grass Threatened",
                recResponse: 147,
              },
              {
                code: "D",
                text: "Wildland Threatened",
                recResponse: 147,
              },
              {
                code: "N",
                text: "Person in Contact w/ Electrical Hazard",
                recResponse: 148,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 146,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 147,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 147,
              },
              {
                code: "S",
                text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
                recResponse: 149,
              },
              {
                code: "T",
                text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
                recResponse: 150,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 146,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 147,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 148,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 150,
              },
            ],
          },
          {
            code: "55C05",
            text: "Solar Farm",
            recResponse: 151,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 151,
              },
              {
                code: "B",
                text: "Building (Non-Residential) Threatened",
                recResponse: 151,
              },
              {
                code: "C",
                text: "Brush/Grass Threatened",
                recResponse: 152,
              },
              {
                code: "D",
                text: "Wildland Threatened",
                recResponse: 152,
              },
              {
                code: "N",
                text: "Person in Contact w/ Electrical Hazard",
                recResponse: 153,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 151,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 152,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 152,
              },
              {
                code: "S",
                text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
                recResponse: 154,
              },
              {
                code: "T",
                text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
                recResponse: 155,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 151,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 152,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 153,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 155,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 56,
    name: "Elevator/Escelator Incident",
    shortName: "Elevator/Escalator Incident",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: 3 },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 156,
    questions: [
      {
        text: (
          <p>
            Is this an <b>escalator</b> or <b>elevator</b> incident?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Escalator",
            display: "Escalator incident",
            continue: true,
          },
          {
            answer: "Elevator",
            display: "Elevator incident",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk incident",
            continue: true,
            updateCode: "56B03",
          },
        ],
      },

      {
        text: <p>Is anyone trapped in the escalator?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "Escalator";
        },
        answers: [
          {
            answer: "No",
            display: "No one trapped",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Entrapment rptd",
            continue: true,
            updateCode: "56B02",
          },
          {
            answer: "Unknown",
            display: "Unk if trapped",
            continue: true,
            updateCode: "56B03",
          },
        ],
      },

      {
        text: (
          <p>
            Is anyone <b>injured</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Escalator";
        },
        answers: [
          {
            answer: "No",
            display: "No injs rptd",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if (lastAnswer === "Yes") {
                return { code: "56B02" };
              } else {
                return { code: "56O02" };
              }
            },
          },
          {
            answer: "Yes",
            display: "Injs rptd",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if (lastAnswer === "Yes") {
                return { code: "56D02" };
              } else {
                return { code: "56D00" };
              }
            },
          },
          {
            answer: "Unknown",
            display: "Unk if injured",
            continue: true,
            updateCode: "56B03",
          },
        ],
      },

      {
        text: (
          <p>
            What type of <b>elevator incident</b> is this?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Elevator";
        },
        answers: [
          {
            answer: "Alarm Activation",
            display: "Elevator alm activation",
            updateCode: "56A02",
            end: true,
          },
          {
            answer: "Malfunction",
            display: "Elevator malfunction",
            continue: true,
          },
          {
            answer: "Elevator Accident",
            display: "Elevator accident",
            updateCode: "56D02",
            end: true,
          },
          {
            answer: "Unknown",
            display: "Unk elevator incident",
            continue: true,
            updateCode: "56B03",
          },
        ],
      },

      {
        text: (
          <p>
            Was the elevator <b>occupied</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "Malfunction";
        },
        answers: [
          {
            answer: "No",
            display: "No occupants inside",
            continue: true,
            updateCode: "56O01",
          },
          {
            answer: "Yes",
            display: "Occupants inside",
            continue: true,
            updateCode: "56A01",
          },
          {
            answer: "Unknown",
            display: "Unk if occupied",
            continue: true,
            updateCode: "56B03",
          },
        ],
      },

      {
        text: (
          <p>
            Are there any <b>injuries</b> or <b>sick persons</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.answer;
          return lastAnswer === "Occupants inside";
        },
        answers: [
          {
            answer: "No",
            display: "No injs or sick persons rptd",
            end: true,
          },
          {
            answer: "Yes",
            display: "Injs or sick persons rptd",
            continue: true,
            updateCode: "56B01",
          },
          {
            answer: "Unknown",
            display: "Unk if injs or sick persons",
            continue: true,
            updateCode: "56B03",
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "O",
        determinants: [
          {
            code: "56O01",
            text: "Elevator Malfunction - No Occupants Inside",
            recResponse: 156,
          },
          {
            code: "56O02",
            text: "Escalator (Not Trapped) w/ or w/o Injs",
            recResponse: 156,
          },
        ],
      },
      {
        priority: "A",
        determinants: [
          {
            code: "56A00",
            text: "Override (Alpha)",
            recResponse: 156,
          },
          {
            code: "56A01",
            text: "Elevator Malfunction - Occupants Inside",
            recResponse: 157,
          },
          {
            code: "56A02",
            text: "Elevator Alarm",
            recResponse: 158,
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "56B00",
            text: "Override (Bravo)",
            recResponse: 159,
          },
          {
            code: "56B01",
            text: "Elevator Malfunction - Occupants Inside (Medical Condition Present)",
            recResponse: 159,
          },
          {
            code: "56B02",
            text: "Escalator Entrapment/Trapped w/o Injs",
            recResponse: 156,
          },
          {
            code: "56B03",
            text: "Unkn Situation (Investigation)",
            recResponse: 156,
            defaultCode: true,
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "56D00",
            text: "Override (Delta)",
            recResponse: 160,
          },
          {
            code: "56D01",
            text: "Escalator Entrapment/Trapped w/ Injs",
            recResponse: 161,
          },
          {
            code: "56D02",
            text: "Elevator Accident",
            recResponse: 85,
          },
        ],
      },
    ],
  },
  {
    protocol: 57,
    name: "Explosion",
    shortName: "Explosion",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: 3 },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 3,
    defaultPlan: 162,
    questions: [
      {
        text: <p>Where/what exploded?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Structure",
            display: "Structure expl",
            continue: true,
          },
          {
            answer: "Vehicle",
            display: "Vehicle expl",
            continue: true,
          },
          {
            answer: "Manhole",
            display: "Manhole expl",
            updateCode: "57C03",
            continue: true,
          },
          {
            answer: "Open Area",
            display: "Expl in open area",
            updateCode: "57C02",
            continue: true,
          },
          {
            answer: "Other:",
            display: "Other explosion - {input}",
            continue: true,
            input: true,
            updateCode: "57B01",
          },
          {
            answer: "Unknown",
            display: "Unk explosion",
            continue: true,
            updateCode: "57B02",
          },
        ],
      },

      {
        text: (
          <p>
            What <b>type</b> of <b>structure</b> is involved?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "Structure";
        },
        answers: [
          {
            answer: "Residential (Single Family)",
            display: "Residential (single) structure",
            continue: true,
            updateCode: "57D06",
          },
          {
            answer: "Residential (Multi-Family)",
            display: "Residential (multi) structure",
            continue: true,
            updateCode: "57D05",
          },
          {
            answer: "HIGH RISE",
            display: "High rise structure",
            continue: true,
            updateCode: "57D02",
          },
          {
            answer: "Government Building",
            display: "Government building",
            continue: true,
            updateCode: "57D03",
          },
          {
            answer: "Commercial/Industrial Building",
            display: "Commercial/Industrial building",
            continue: true,
            updateCode: "57D04",
          },
          {
            answer: "Non-Dwelling (Large)",
            display: "Large non-dwelling structure",
            continue: true,
            updateCode: "57D07",
          },
          {
            answer: "Non-Dwelling (Small)",
            display: "Small non-dwelling structure",
            continue: true,
            updateCode: "57D08",
          },
          {
            answer: "Mobile Home",
            display: "Mobile home",
            continue: true,
            updateCode: "57D11",
          },
          {
            answer: "House Trailer",
            display: "House trailer",
            continue: true,
            updateCode: "57D11",
          },
          {
            answer: "Portable Office",
            display: "Portable office",
            continue: true,
            updateCode: "57D11",
          },
          {
            answer: "Other:",
            display: "Other structure - {input}",
            continue: true,
            updateCode: "57D12",
          },
          {
            answer: "Unknown",
            display: "Unk structure type",
            continue: true,
            updateCode: "57D012",
          },
        ],
      },

      {
        text: (
          <p>
            What type of <b>vehicle</b> is involved?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Vehicle";
        },
        answers: [
          {
            answer: "Car",
            display: "Veh type - car",
            continue: true,
            updateCode: "57C01",
          },
          {
            answer: "Commercial Vehicle",
            display: "Veh type - commercial",
            continue: true,
            updateCode: "57D09",
          },
          {
            answer: "High Fuel/Fire Load Vehicle",
            display: "Veh type - high fuel/fire load",
            continue: true,
            updateCode: "57D10",
          },
          {
            answer: "Other:",
            display: "Veh type - {input}",
            continue: true,
            input: true,
            updateCode: "57C01",
          },
          {
            answer: "Unknown",
            display: "Unk vehicle type",
            continue: true,
            updateCode: "57C01",
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
            updateCode: "57D01",
            override: true,
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
            Is there any <b className="text-red-400">FIRE</b> present?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No fire present",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Fire present",
            continue: true,
            updateSubCode: "F",
          },
          {
            answer: "Unknown",
            display: "Unk if fire present",
            continue: true,
          },
        ],
      },

      {
        text: <p>Is there anyone injured?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No Injuries",
            display: "No injs rptd",
            continue: true,
          },
          {
            answer: "Single Injured Person",
            display: "Single inj person rptd",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const isFirePresent =
                answers?.[answers.length - 1]?.defaultAnswer === "Yes";
              if (isFirePresent) {
                return { subCode: "G" };
              } else {
                return { subCode: "V" };
              }
            },
          },
          {
            answer: "2 Persons Injured",
            display: "2 persons injured",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const isFirePresent =
                answers?.[answers.length - 1]?.defaultAnswer === "Yes";
              if (isFirePresent) {
                return { subCode: "H" };
              } else {
                return { subCode: "W" };
              }
            },
          },
          {
            answer: "3-8 Persons Injured:",
            display: "{input} persons injured",
            end: true,
            input: true,
            updateSubCode: "X",
          },
          {
            answer: "9-20 Persons Injured:",
            display: "{input} persons injured",
            end: true,
            input: true,
            updateSubCode: "Y",
          },
          {
            answer: "20+ Persons Injured:",
            display: "{input} persons injured",
            end: true,
            input: true,
            updateSubCode: "Z",
          },
          {
            answer: "Unknown",
            display: "Unk if injured",
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
            code: "57B01",
            text: "Other Explosion",
            recResponse: 162,
            subCodes: [
              {
                code: "F",
                text: "Fire",
                recResponse: 162,
              },
              {
                code: "G",
                text: "Fire w/ Single Injured Person",
                recResponse: 162,
              },
              {
                code: "H",
                text: "Fire w/ Multiple Injured Persons",
                recResponse: 163,
              },
              {
                code: "V",
                text: "Single Injured Person",
                recResponse: 162,
              },
              {
                code: "W",
                text: "Multiple Injured Persons",
                recResponse: 163,
              },
              {
                code: "X",
                text: "MCI Level 1",
                recResponse: 162,
              },
              {
                code: "Y",
                text: "MCI Level 2",
                recResponse: 163,
              },
              {
                code: "Z",
                text: "MCI Level 3",
                recResponse: 163,
              },
            ],
          },
          {
            code: "57B02",
            text: "Unkn Situation (Investigation)",
            recResponse: 162,
            defaultCode: true,
            subCodes: [
              {
                code: "F",
                text: "Fire",
                recResponse: 162,
              },
              {
                code: "G",
                text: "Fire w/ Single Injured Person",
                recResponse: 162,
              },
              {
                code: "H",
                text: "Fire w/ Multiple Injured Persons",
                recResponse: 163,
              },
              {
                code: "V",
                text: "Single Injured Person",
                recResponse: 162,
              },
              {
                code: "W",
                text: "Multiple Injured Persons",
                recResponse: 163,
              },
              {
                code: "X",
                text: "MCI Level 1",
                recResponse: 162,
              },
              {
                code: "Y",
                text: "MCI Level 2",
                recResponse: 163,
              },
              {
                code: "Z",
                text: "MCI Level 3",
                recResponse: 163,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "57C00",
            text: "Override (Charlie)",
            recResponse: 163,
            subCodes: [
              {
                code: "F",
                text: "Fire",
                recResponse: 163,
              },
              {
                code: "G",
                text: "Fire w/ Single Injured Person",
                recResponse: 163,
              },
              {
                code: "H",
                text: "Fire w/ Multiple Injured Persons",
                recResponse: 163,
              },
              {
                code: "V",
                text: "Single Injured Person",
                recResponse: 163,
              },
              {
                code: "W",
                text: "Multiple Injured Persons",
                recResponse: 163,
              },
              {
                code: "X",
                text: "MCI Level 1",
                recResponse: 163,
              },
              {
                code: "Y",
                text: "MCI Level 2",
                recResponse: 163,
              },
              {
                code: "Z",
                text: "MCI Level 3",
                recResponse: 163,
              },
            ],
          },
          {
            code: "57C01",
            text: "Other Vehicle Explosion",
            recResponse: 164,
            subCodes: [
              {
                code: "F",
                text: "Fire",
                recResponse: 165,
              },
              {
                code: "G",
                text: "Fire w/ Single Injured Person",
                recResponse: 166,
              },
              {
                code: "H",
                text: "Fire w/ Multiple Injured Persons",
                recResponse: 167,
              },
              {
                code: "V",
                text: "Single Injured Person",
                recResponse: 168,
              },
              {
                code: "W",
                text: "Multiple Injured Persons",
                recResponse: 169,
              },
              {
                code: "X",
                text: "MCI Level 1",
                recResponse: 169,
              },
              {
                code: "Y",
                text: "MCI Level 2",
                recResponse: 169,
              },
              {
                code: "Z",
                text: "MCI Level 3",
                recResponse: 169,
              },
            ],
          },
          {
            code: "57C02",
            text: "Open Area",
            recResponse: 170,
            subCodes: [
              {
                code: "F",
                text: "Fire",
                recResponse: 171,
              },
              {
                code: "G",
                text: "Fire w/ Single Injured Person",
                recResponse: 172,
              },
              {
                code: "H",
                text: "Fire w/ Multiple Injured Persons",
                recResponse: 173,
              },
              {
                code: "V",
                text: "Single Injured Person",
                recResponse: 174,
              },
              {
                code: "W",
                text: "Multiple Injured Persons",
                recResponse: 175,
              },
              {
                code: "X",
                text: "MCI Level 1",
                recResponse: 175,
              },
              {
                code: "Y",
                text: "MCI Level 2",
                recResponse: 175,
              },
              {
                code: "Z",
                text: "MCI Level 3",
                recResponse: 175,
              },
            ],
          },
          {
            code: "57C03",
            text: "Manhole (Cover/Underground Vault)",
            recResponse: 162,
            subCodes: [
              {
                code: "F",
                text: "Fire",
                recResponse: 162,
              },
              {
                code: "G",
                text: "Fire w/ Single Injured Person",
                recResponse: 176,
              },
              {
                code: "H",
                text: "Fire w/ Multiple Injured Persons",
                recResponse: 177,
              },
              {
                code: "V",
                text: "Single Injured Person",
                recResponse: 176,
              },
              {
                code: "W",
                text: "Multiple Injured Persons",
                recResponse: 177,
              },
              {
                code: "X",
                text: "MCI Level 1",
                recResponse: 177,
              },
              {
                code: "Y",
                text: "MCI Level 2",
                recResponse: 177,
              },
              {
                code: "Z",
                text: "MCI Level 3",
                recResponse: 177,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "57D00",
            text: "Override (Delta)",
            recResponse: 178,
            subCodes: [
              {
                code: "F",
                text: "Fire",
                recResponse: 178,
              },
              {
                code: "G",
                text: "Fire w/ Single Injured Person",
                recResponse: 178,
              },
              {
                code: "H",
                text: "Fire w/ Multiple Injured Persons",
                recResponse: 178,
              },
              {
                code: "V",
                text: "Single Injured Person",
                recResponse: 178,
              },
              {
                code: "W",
                text: "Multiple Injured Persons",
                recResponse: 178,
              },
              {
                code: "X",
                text: "MCI Level 1",
                recResponse: 178,
              },
              {
                code: "Y",
                text: "MCI Level 2",
                recResponse: 178,
              },
              {
                code: "Z",
                text: "MCI Level 3",
                recResponse: 178,
              },
            ],
          },
          {
            code: "57D01",
            text: "High Life Hazard",
            recResponse: 178,
            subCodes: [
              {
                code: "F",
                text: "Fire",
                recResponse: 178,
              },
              {
                code: "G",
                text: "Fire w/ Single Injured Person",
                recResponse: 178,
              },
              {
                code: "H",
                text: "Fire w/ Multiple Injured Persons",
                recResponse: 179,
              },
              {
                code: "V",
                text: "Single Injured Person",
                recResponse: 178,
              },
              {
                code: "W",
                text: "Multiple Injured Persons",
                recResponse: 179,
              },
              {
                code: "X",
                text: "MCI Level 1",
                recResponse: 179,
              },
              {
                code: "Y",
                text: "MCI Level 2",
                recResponse: 179,
              },
              {
                code: "Z",
                text: "MCI Level 3",
                recResponse: 179,
              },
            ],
          },
          {
            code: "57D02",
            text: "High Rise",
            recResponse: 180,
            subCodes: [
              {
                code: "F",
                text: "Fire",
                recResponse: 180,
              },
              {
                code: "G",
                text: "Fire w/ Single Injured Person",
                recResponse: 180,
              },
              {
                code: "H",
                text: "Fire w/ Multiple Injured Persons",
                recResponse: 179,
              },
              {
                code: "V",
                text: "Single Injured Person",
                recResponse: 180,
              },
              {
                code: "W",
                text: "Multiple Injured Persons",
                recResponse: 179,
              },
              {
                code: "X",
                text: "MCI Level 1",
                recResponse: 179,
              },
              {
                code: "Y",
                text: "MCI Level 2",
                recResponse: 179,
              },
              {
                code: "Z",
                text: "MCI Level 3",
                recResponse: 179,
              },
            ],
          },
          {
            code: "57D03",
            text: "Government Building",
            recResponse: 178,
            subCodes: [
              {
                code: "F",
                text: "Fire",
                recResponse: 178,
              },
              {
                code: "G",
                text: "Fire w/ Single Injured Person",
                recResponse: 178,
              },
              {
                code: "H",
                text: "Fire w/ Multiple Injured Persons",
                recResponse: 179,
              },
              {
                code: "V",
                text: "Single Injured Person",
                recResponse: 178,
              },
              {
                code: "W",
                text: "Multiple Injured Persons",
                recResponse: 179,
              },
              {
                code: "X",
                text: "MCI Level 1",
                recResponse: 179,
              },
              {
                code: "Y",
                text: "MCI Level 2",
                recResponse: 179,
              },
              {
                code: "Z",
                text: "MCI Level 3",
                recResponse: 179,
              },
            ],
          },
          {
            code: "57D04",
            text: "Comm/Ind Building",
            recResponse: 178,
            subCodes: [
              {
                code: "F",
                text: "Fire",
                recResponse: 178,
              },
              {
                code: "G",
                text: "Fire w/ Single Injured Person",
                recResponse: 178,
              },
              {
                code: "H",
                text: "Fire w/ Multiple Injured Persons",
                recResponse: 179,
              },
              {
                code: "V",
                text: "Single Injured Person",
                recResponse: 178,
              },
              {
                code: "W",
                text: "Multiple Injured Persons",
                recResponse: 179,
              },
              {
                code: "X",
                text: "MCI Level 1",
                recResponse: 179,
              },
              {
                code: "Y",
                text: "MCI Level 2",
                recResponse: 179,
              },
              {
                code: "Z",
                text: "MCI Level 3",
                recResponse: 179,
              },
            ],
          },
          {
            code: "57D05",
            text: "Residential (Mult)",
            recResponse: 178,
            subCodes: [
              {
                code: "F",
                text: "Fire",
                recResponse: 178,
              },
              {
                code: "G",
                text: "Fire w/ Single Injured Person",
                recResponse: 178,
              },
              {
                code: "H",
                text: "Fire w/ Multiple Injured Persons",
                recResponse: 179,
              },
              {
                code: "V",
                text: "Single Injured Person",
                recResponse: 178,
              },
              {
                code: "W",
                text: "Multiple Injured Persons",
                recResponse: 179,
              },
              {
                code: "X",
                text: "MCI Level 1",
                recResponse: 179,
              },
              {
                code: "Y",
                text: "MCI Level 2",
                recResponse: 179,
              },
              {
                code: "Z",
                text: "MCI Level 3",
                recResponse: 179,
              },
            ],
          },
          {
            code: "57D06",
            text: "Residential (Single)",
            recResponse: 178,
            subCodes: [
              {
                code: "F",
                text: "Fire",
                recResponse: 178,
              },
              {
                code: "G",
                text: "Fire w/ Single Injured Person",
                recResponse: 178,
              },
              {
                code: "H",
                text: "Fire w/ Multiple Injured Persons",
                recResponse: 179,
              },
              {
                code: "V",
                text: "Single Injured Person",
                recResponse: 178,
              },
              {
                code: "W",
                text: "Multiple Injured Persons",
                recResponse: 179,
              },
              {
                code: "X",
                text: "MCI Level 1",
                recResponse: 179,
              },
              {
                code: "Y",
                text: "MCI Level 2",
                recResponse: 179,
              },
              {
                code: "Z",
                text: "MCI Level 3",
                recResponse: 179,
              },
            ],
          },
          {
            code: "57D07",
            text: "Large Non-Dwelling Structure",
            recResponse: 178,
            subCodes: [
              {
                code: "F",
                text: "Fire",
                recResponse: 178,
              },
              {
                code: "G",
                text: "Fire w/ Single Injured Person",
                recResponse: 178,
              },
              {
                code: "H",
                text: "Fire w/ Multiple Injured Persons",
                recResponse: 179,
              },
              {
                code: "V",
                text: "Single Injured Person",
                recResponse: 178,
              },
              {
                code: "W",
                text: "Multiple Injured Persons",
                recResponse: 179,
              },
              {
                code: "X",
                text: "MCI Level 1",
                recResponse: 179,
              },
              {
                code: "Y",
                text: "MCI Level 2",
                recResponse: 179,
              },
              {
                code: "Z",
                text: "MCI Level 3",
                recResponse: 179,
              },
            ],
          },
          {
            code: "57D08",
            text: "Small Non-Dwelling Structure",
            recResponse: 181,
            subCodes: [
              {
                code: "F",
                text: "Fire",
                recResponse: 181,
              },
              {
                code: "G",
                text: "Fire w/ Single Injured Person",
                recResponse: 181,
              },
              {
                code: "H",
                text: "Fire w/ Multiple Injured Persons",
                recResponse: 181,
              },
              {
                code: "V",
                text: "Single Injured Person",
                recResponse: 181,
              },
              {
                code: "W",
                text: "Multiple Injured Persons",
                recResponse: 181,
              },
              {
                code: "X",
                text: "MCI Level 1",
                recResponse: 181,
              },
              {
                code: "Y",
                text: "MCI Level 2",
                recResponse: 181,
              },
              {
                code: "Z",
                text: "MCI Level 3",
                recResponse: 181,
              },
            ],
          },
          {
            code: "57D09",
            text: "Comm Vehicle",
            recResponse: 182,
            subCodes: [
              {
                code: "F",
                text: "Fire",
                recResponse: 182,
              },
              {
                code: "G",
                text: "Fire w/ Single Injured Person",
                recResponse: 182,
              },
              {
                code: "H",
                text: "Fire w/ Multiple Injured Persons",
                recResponse: 182,
              },
              {
                code: "V",
                text: "Single Injured Person",
                recResponse: 182,
              },
              {
                code: "W",
                text: "Multiple Injured Persons",
                recResponse: 182,
              },
              {
                code: "X",
                text: "MCI Level 1",
                recResponse: 182,
              },
              {
                code: "Y",
                text: "MCI Level 2",
                recResponse: 182,
              },
              {
                code: "Z",
                text: "MCI Level 3",
                recResponse: 182,
              },
            ],
          },
          {
            code: "57D10",
            text: "Large Fuel/Fire Load Vehicle",
            recResponse: 182,
            subCodes: [
              {
                code: "F",
                text: "Fire",
                recResponse: 182,
              },
              {
                code: "G",
                text: "Fire w/ Single Injured Person",
                recResponse: 182,
              },
              {
                code: "H",
                text: "Fire w/ Multiple Injured Persons",
                recResponse: 182,
              },
              {
                code: "V",
                text: "Single Injured Person",
                recResponse: 182,
              },
              {
                code: "W",
                text: "Multiple Injured Persons",
                recResponse: 182,
              },
              {
                code: "X",
                text: "MCI Level 1",
                recResponse: 182,
              },
              {
                code: "Y",
                text: "MCI Level 2",
                recResponse: 182,
              },
              {
                code: "Z",
                text: "MCI Level 3",
                recResponse: 182,
              },
            ],
          },
          {
            code: "57D11",
            text: "Mobile Home, House Trailer, Portable Office",
            recResponse: 181,
            subCodes: [
              {
                code: "F",
                text: "Fire",
                recResponse: 181,
              },
              {
                code: "G",
                text: "Fire w/ Single Injured Person",
                recResponse: 181,
              },
              {
                code: "H",
                text: "Fire w/ Multiple Injured Persons",
                recResponse: 181,
              },
              {
                code: "V",
                text: "Single Injured Person",
                recResponse: 181,
              },
              {
                code: "W",
                text: "Multiple Injured Persons",
                recResponse: 181,
              },
              {
                code: "X",
                text: "MCI Level 1",
                recResponse: 181,
              },
              {
                code: "Y",
                text: "MCI Level 2",
                recResponse: 181,
              },
              {
                code: "Z",
                text: "MCI Level 3",
                recResponse: 181,
              },
            ],
          },
          {
            code: "57D12",
            text: "Unkn Type Building/Structure",
            recResponse: 178,
            subCodes: [
              {
                code: "F",
                text: "Fire",
                recResponse: 178,
              },
              {
                code: "G",
                text: "Fire w/ Single Injured Person",
                recResponse: 178,
              },
              {
                code: "H",
                text: "Fire w/ Multiple Injured Persons",
                recResponse: 179,
              },
              {
                code: "V",
                text: "Single Injured Person",
                recResponse: 178,
              },
              {
                code: "W",
                text: "Multiple Injured Persons",
                recResponse: 179,
              },
              {
                code: "X",
                text: "MCI Level 1",
                recResponse: 179,
              },
              {
                code: "Y",
                text: "MCI Level 2",
                recResponse: 179,
              },
              {
                code: "Z",
                text: "MCI Level 3",
                recResponse: 179,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 58,
    name: "Extrication/Entrapment",
    shortName: "Extrication/Entrapment",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: true },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 183,
    questions: [
      {
        text: <p>Is the person still trapped?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No longer trapped",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Still trapped",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if still trapped",
            continue: true,
            updateCode: "58B02",
          },
        ],
      },

      {
        text: (
          <p>
            What <b>part</b> of the <b>body</b> is (was) trapped?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Didget",
            display: "Didget trapped",
            continue: true,
            updateCode: "58A01",
          },
          {
            answer: "Hair",
            display: "Hair trapped",
            continue: true,
            updateCode: "58A01",
          },
          {
            answer: "Peripheral",
            display: "Peripheral trapped",
            continue: true,
            updateCode: "58B01",
          },
          {
            answer: "Possibly Dangerous Body Area:",
            display: "{input} trapped",
            continue: true,
            input: true,
            updateCode: "58C02",
          },
          {
            answer: "Dangerous Body Area:",
            display: "{input} trapped",
            continue: true,
            input: true,
            updateCode: "58D01",
          },
          {
            answer: "Whole Body",
            display: "Whole body trapped",
            continue: true,
            updateCode: "58D01",
          },
          {
            answer: "Unknown",
            display: "Unk body area trapped",
            continue: true,
            updateCode: "58C01",
          },
        ],
      },

      {
        text: (
          <p>
            Is the person <b>injured</b> at all?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No Injuries",
            display: "No injs rptd",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              if (firstAnswer === "No") {
                return { code: "58O01" };
              }
            },
          },
          {
            answer: "Injuries",
            display: "Injs rptd",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if injs",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            <span className="text-blue-400">(If appropriate)</span> Are there
            any <b className="text-green-400">HAZARDOUS</b> materials involved?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No hazmat rptd",
            end: true,
          },
          {
            answer: "Yes",
            display: "Hazmat rptd",
            end: true,
            updateSubCode: "H",
          },
          {
            answer: "Unknown",
            display: "Unk if hazmat present",
            end: true,
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "O",
        determinants: [
          {
            code: "58O01",
            text: "No Longer Trapped (No/Unkn Injs)",
            recResponse: 183,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 184,
              },
            ],
          },
        ],
      },
      {
        priority: "A",
        determinants: [
          {
            code: "58A00",
            text: "Override (Alpha)",
            recResponse: 183,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 184,
              },
            ],
          },
          {
            code: "58A01",
            text: "Entrapment/Trapped (Finger, Toe, Hair)",
            recResponse: 189,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 186,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "58B00",
            text: "Override (Bravo)",
            recResponse: 185,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 186,
              },
            ],
          },
          {
            code: "58B01",
            text: "Entrapment/Trapped (Peripheral Only)",
            recResponse: 185,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 186,
              },
            ],
          },
          {
            code: "58B02",
            text: "Unkn Situation (Investigation)",
            recResponse: 34,
            defaultCode: true,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 186,
              },
            ],
          },
          {
            code: "58B03",
            text: "Entrapment/Trapped (Non-Threatened)",
            recResponse: 20,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 186,
              },
            ],
          },
          {
            code: "58B04",
            text: "Entrapment/Trapped",
            recResponse: 185,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 186,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "58C00",
            text: "Override (Charlie)",
            recResponse: 185,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 186,
              },
            ],
          },
          {
            code: "58C01",
            text: "Entrapment/Trapped (Unkn Body Area)",
            recResponse: 185,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 186,
              },
            ],
          },
          {
            code: "58C02",
            text: "Entrapment/Trapped (Possibly Dangerous Body Area)",
            recResponse: 185,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 186,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "58D00",
            text: "Override (Delta)",
            recResponse: 187,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 188,
              },
            ],
          },
          {
            code: "58D01",
            text: "Entrapment/Trapped (Dangerous Body Area or Full Body)",
            recResponse: 187,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 188,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 59,
    name: "Fuel Spill/Fuel Odor",
    shortName: "Fuel Spill/Odor",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: undefined },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 3,
    defaultPlan: 190,
    questions: [
      {
        text: (
          <p>
            Is there a <b>fuel spill</b>, or <b>odor of fuel</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Fuel Spill",
            display: "Fuel spill",
            continue: true,
          },
          {
            answer: "Fuel Odor",
            display: "Odor of fuel",
            continue: true,
            updateCode: "59B03",
          },
          {
            answer: "Completely Unknown",
            display: "Completely unknown situation",
            continue: true,
            updateCode: "59C03",
          },
        ],
      },

      {
        text: <p>What is the size of the spill?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "Fuel Spill";
        },
        answers: [
          {
            answer: "Minor Spill (< 1 gallon)",
            display: "Minor spill (< 1 gallon)",
            continue: true,
            updateCode: "59O01",
          },
          {
            answer: "Small Spill (1-25 gallons)",
            display: "Small spill (1-25 gallons)",
            continue: true,
          },
          {
            answer: "Large Spill (> 25 gallons)",
            display: "Large spill (> 25 gallons)",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk size of spill",
            continue: true,
            updateCode: "59C03",
          },
        ],
      },

      {
        text: (
          <p>
            Is the spill <b>contained</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Fuel Spill";
        },
        answers: [
          {
            answer: "Yes",
            display: "Spill is contained",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if (lastAnswer === "Small Spill (1-25 gallons)") {
                return { code: "59B02" };
              } else if (lastAnswer === "Large Spill (> 25 gallons)") {
                return { code: "59C02" };
              }
            },
          },
          {
            answer: "No",
            display: "Spill is not contained",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if (lastAnswer === "Small Spill (1-25 gallons)") {
                return { code: "59B01" };
              } else if (lastAnswer === "Large Spill (> 25 gallons)") {
                return { code: "59C01" };
              }
            },
          },
          {
            answer: "Unknown",
            display: "Unk if spill is contained",
            continue: true,
            updateCode: "59C03",
          },
        ],
      },

      {
        text: (
          <p>
            Is the spill by or spilling into a <b>waterway</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Fuel Spill";
        },
        answers: [
          {
            answer: "No",
            display: "Not by or into a waterway",
            continue: true,
          },
          {
            answer: "Yes",
            display: "By or into a waterway",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if by or into a waterway",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            <b>What</b> type of waterway is involved?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.answer;
          return lastAnswer === "By or into a waterway";
        },
        answers: [
          {
            answer: "Inland Waterway",
            display: "Threatening inland waterway",
            continue: true,
            updateCode: "59D02",
            updateSubCode: "O",
          },
          {
            answer: "Coastal Waterway",
            display: "Threatening inland waterway",
            continue: true,
            updateCode: "59D01",
            updateSubCode: "O",
          },
          {
            answer: "Ocean",
            display: "Threatening oceanic waters",
            continue: true,
            updateCode: "59D03",
            updateSubCode: "O",
          },
          {
            answer: "Sewer",
            display: "Threatening sewer system",
            continue: true,
            updateCode: "59D04",
            updateSubCode: "O",
          },
          {
            answer: "Storm Drain",
            display: "Threatening storm drain",
            continue: true,
            updateCode: "59D05",
            updateSubCode: "O",
          },
          {
            answer: "Unknown",
            display: "Unk type of waterway",
            continue: true,
            updateCode: "59D00",
          },
        ],
      },

      {
        text: (
          <p>
            What is the <b>location</b> of the spill/odor?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const doesWaterwayQuestionExist = answers?.some(
            (answer) =>
              answer.defaultQuestion === "What type of waterway is involved?"
          );
          return !doesWaterwayQuestionExist;
        },
        answers: [
          {
            answer: "Inside",
            display: "Incident is inside",
            continue: true,
            updateSubCode: "I",
          },
          {
            answer: "Outside",
            display: "Incident is outside",
            continue: true,
            updateSubCode: "O",
          },
          {
            answer: "Unknown",
            display: "Unk if inside or outside",
            continue: true,
            updateSubCode: "U",
          },
        ],
      },

      {
        text: (
          <p>
            Are there any <b>sick</b> or <b>injured</b> persons?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No sick/inj'd persons",
            continue: true,
          },
          {
            answer: "Yes - Single",
            display: "Single sick/inj'd person",
            end: true,
            dependency: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if (lastAnswer === "Inside") {
                return { subCode: "V" };
              } else if (lastAnswer === "Outside") {
                return { subCode: "X" };
              }
            },
          },
          {
            answer: "Yes - Multiple:",
            display: "{input} sick/inj'd persons",
            end: true,
            dependency: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if (lastAnswer === "Inside") {
                return { subCode: "W" };
              } else if (lastAnswer === "Outside") {
                return { subCode: "Y" };
              }
            },
          },
          {
            answer: "Unknown",
            display: "Unk if sick/inj'd persons",
            end: true,
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "O",
        determinants: [
          {
            code: "59O01",
            text: "Minor Spill",
            recResponse: 193,
            subCodes: [
              {
                code: "I",
                text: "Inside",
                recResponse: 193,
              },
              {
                code: "O",
                text: "Outside",
                recResponse: 193,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 193,
              },
              {
                code: "V",
                text: "Inside & Single Sick/Injured Person",
                recResponse: 191,
              },
              {
                code: "W",
                text: "Inside & Mult Sick/Injured Persons",
                recResponse: 191,
              },
              {
                code: "X",
                text: "Outside & Single Sick/Injured Person",
                recResponse: 191,
              },
              {
                code: "Y",
                text: "Outside & Mult Sick/Injured Persons",
                recResponse: 191,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "59B00",
            text: "Override (Bravo)",
            recResponse: 190,
            subCodes: [
              {
                code: "I",
                text: "Inside",
                recResponse: 190,
              },
              {
                code: "O",
                text: "Outside",
                recResponse: 190,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 190,
              },
              {
                code: "V",
                text: "Inside & Single Sick/Injured Person",
                recResponse: 191,
              },
              {
                code: "W",
                text: "Inside & Mult Sick/Injured Persons",
                recResponse: 191,
              },
              {
                code: "X",
                text: "Outside & Single Sick/Injured Person",
                recResponse: 191,
              },
              {
                code: "Y",
                text: "Outside & Mult Sick/Injured Persons",
                recResponse: 191,
              },
            ],
          },
          {
            code: "59B01",
            text: "Uncontained Small Spill",
            recResponse: 190,
            subCodes: [
              {
                code: "I",
                text: "Inside",
                recResponse: 190,
              },
              {
                code: "O",
                text: "Outside",
                recResponse: 190,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 190,
              },
              {
                code: "V",
                text: "Inside & Single Sick/Injured Person",
                recResponse: 191,
              },
              {
                code: "W",
                text: "Inside & Mult Sick/Injured Persons",
                recResponse: 191,
              },
              {
                code: "X",
                text: "Outside & Single Sick/Injured Person",
                recResponse: 191,
              },
              {
                code: "Y",
                text: "Outside & Mult Sick/Injured Persons",
                recResponse: 191,
              },
            ],
          },
          {
            code: "59B02",
            text: "Contained Small Spill",
            recResponse: 193,
            subCodes: [
              {
                code: "I",
                text: "Inside",
                recResponse: 193,
              },
              {
                code: "O",
                text: "Outside",
                recResponse: 193,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 193,
              },
              {
                code: "V",
                text: "Inside & Single Sick/Injured Person",
                recResponse: 191,
              },
              {
                code: "W",
                text: "Inside & Mult Sick/Injured Persons",
                recResponse: 191,
              },
              {
                code: "X",
                text: "Outside & Single Sick/Injured Person",
                recResponse: 191,
              },
              {
                code: "Y",
                text: "Outside & Mult Sick/Injured Persons",
                recResponse: 191,
              },
            ],
          },
          {
            code: "59B03",
            text: "Fuel Odor",
            recResponse: 194,
            subCodes: [
              {
                code: "I",
                text: "Inside",
                recResponse: 194,
              },
              {
                code: "O",
                text: "Outside",
                recResponse: 195,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 194,
              },
              {
                code: "V",
                text: "Inside & Single Sick/Injured Person",
                recResponse: 191,
              },
              {
                code: "W",
                text: "Inside & Mult Sick/Injured Persons",
                recResponse: 191,
              },
              {
                code: "X",
                text: "Outside & Single Sick/Injured Person",
                recResponse: 191,
              },
              {
                code: "Y",
                text: "Outside & Mult Sick/Injured Persons",
                recResponse: 191,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "59C00",
            text: "Override (Charlie)",
            recResponse: 198,
            subCodes: [
              {
                code: "I",
                text: "Inside",
                recResponse: 190,
              },
              {
                code: "O",
                text: "Outside",
                recResponse: 199,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 199,
              },
              {
                code: "V",
                text: "Inside & Single Sick/Injured Person",
                recResponse: 198,
              },
              {
                code: "W",
                text: "Inside & Mult Sick/Injured Persons",
                recResponse: 198,
              },
              {
                code: "X",
                text: "Outside & Single Sick/Injured Person",
                recResponse: 198,
              },
              {
                code: "Y",
                text: "Outside & Mult Sick/Injured Persons",
                recResponse: 198,
              },
            ],
          },
          {
            code: "59C01",
            text: "Uncontained Large Spill",
            recResponse: 198,
            subCodes: [
              {
                code: "I",
                text: "Inside",
                recResponse: 190,
              },
              {
                code: "O",
                text: "Outside",
                recResponse: 199,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 199,
              },
              {
                code: "V",
                text: "Inside & Single Sick/Injured Person",
                recResponse: 198,
              },
              {
                code: "W",
                text: "Inside & Mult Sick/Injured Persons",
                recResponse: 198,
              },
              {
                code: "X",
                text: "Outside & Single Sick/Injured Person",
                recResponse: 198,
              },
              {
                code: "Y",
                text: "Outside & Mult Sick/Injured Persons",
                recResponse: 198,
              },
            ],
          },
          {
            code: "59C02",
            text: "Contained Large Spill",
            recResponse: 198,
            subCodes: [
              {
                code: "I",
                text: "Inside",
                recResponse: 190,
              },
              {
                code: "O",
                text: "Outside",
                recResponse: 199,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 199,
              },
              {
                code: "V",
                text: "Inside & Single Sick/Injured Person",
                recResponse: 198,
              },
              {
                code: "W",
                text: "Inside & Mult Sick/Injured Persons",
                recResponse: 198,
              },
              {
                code: "X",
                text: "Outside & Single Sick/Injured Person",
                recResponse: 198,
              },
              {
                code: "Y",
                text: "Outside & Mult Sick/Injured Persons",
                recResponse: 198,
              },
            ],
          },
          {
            code: "59C03",
            text: "Unkn Situation (Investigation)",
            recResponse: 198,
            defaultCode: true,
            subCodes: [
              {
                code: "I",
                text: "Inside",
                recResponse: 190,
              },
              {
                code: "O",
                text: "Outside",
                recResponse: 199,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 199,
              },
              {
                code: "V",
                text: "Inside & Single Sick/Injured Person",
                recResponse: 198,
              },
              {
                code: "W",
                text: "Inside & Mult Sick/Injured Persons",
                recResponse: 198,
              },
              {
                code: "X",
                text: "Outside & Single Sick/Injured Person",
                recResponse: 198,
              },
              {
                code: "Y",
                text: "Outside & Mult Sick/Injured Persons",
                recResponse: 198,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "59D00",
            text: "Override (Delta)",
            recResponse: 199,
            subCodes: [
              {
                code: "I",
                text: "Inside",
                recResponse: 199,
              },
              {
                code: "O",
                text: "Outside",
                recResponse: 199,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 199,
              },
              {
                code: "V",
                text: "Inside & Single Sick/Injured Person",
                recResponse: 198,
              },
              {
                code: "W",
                text: "Inside & Mult Sick/Injured Persons",
                recResponse: 198,
              },
              {
                code: "X",
                text: "Outside & Single Sick/Injured Person",
                recResponse: 198,
              },
              {
                code: "Y",
                text: "Outside & Mult Sick/Injured Persons",
                recResponse: 198,
              },
            ],
          },
          {
            code: "59D01",
            text: "Costal Water",
            recResponse: 199,
            subCodes: [
              {
                code: "I",
                text: "Inside",
                recResponse: 199,
              },
              {
                code: "O",
                text: "Outside",
                recResponse: 199,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 199,
              },
              {
                code: "V",
                text: "Inside & Single Sick/Injured Person",
                recResponse: 198,
              },
              {
                code: "W",
                text: "Inside & Mult Sick/Injured Persons",
                recResponse: 198,
              },
              {
                code: "X",
                text: "Outside & Single Sick/Injured Person",
                recResponse: 198,
              },
              {
                code: "Y",
                text: "Outside & Mult Sick/Injured Persons",
                recResponse: 198,
              },
            ],
          },
          {
            code: "59D02",
            text: "Inland Water",
            recResponse: 199,
            subCodes: [
              {
                code: "I",
                text: "Inside",
                recResponse: 199,
              },
              {
                code: "O",
                text: "Outside",
                recResponse: 199,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 199,
              },
              {
                code: "V",
                text: "Inside & Single Sick/Injured Person",
                recResponse: 198,
              },
              {
                code: "W",
                text: "Inside & Mult Sick/Injured Persons",
                recResponse: 198,
              },
              {
                code: "X",
                text: "Outside & Single Sick/Injured Person",
                recResponse: 198,
              },
              {
                code: "Y",
                text: "Outside & Mult Sick/Injured Persons",
                recResponse: 198,
              },
            ],
          },
          {
            code: "59D03",
            text: "Oceanic Water",
            recResponse: 199,
            subCodes: [
              {
                code: "I",
                text: "Inside",
                recResponse: 199,
              },
              {
                code: "O",
                text: "Outside",
                recResponse: 199,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 199,
              },
              {
                code: "V",
                text: "Inside & Single Sick/Injured Person",
                recResponse: 198,
              },
              {
                code: "W",
                text: "Inside & Mult Sick/Injured Persons",
                recResponse: 198,
              },
              {
                code: "X",
                text: "Outside & Single Sick/Injured Person",
                recResponse: 198,
              },
              {
                code: "Y",
                text: "Outside & Mult Sick/Injured Persons",
                recResponse: 198,
              },
            ],
          },
          {
            code: "59D04",
            text: "Sewer/Drain",
            recResponse: 199,
            subCodes: [
              {
                code: "I",
                text: "Inside",
                recResponse: 199,
              },
              {
                code: "O",
                text: "Outside",
                recResponse: 199,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 199,
              },
              {
                code: "V",
                text: "Inside & Single Sick/Injured Person",
                recResponse: 198,
              },
              {
                code: "W",
                text: "Inside & Mult Sick/Injured Persons",
                recResponse: 198,
              },
              {
                code: "X",
                text: "Outside & Single Sick/Injured Person",
                recResponse: 198,
              },
              {
                code: "Y",
                text: "Outside & Mult Sick/Injured Persons",
                recResponse: 198,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 60,
    name: "Gas Leak/Gas Odor (Natural & LP Gases)",
    shortName: "Gas Leak/Odor",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: undefined },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 3,
    defaultPlan: 200,
    questions: [
      {
        text: <p>Do you know where the leak is? (Is coming from)?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Leak located",
            continue: true,
          },
          {
            answer: "No",
            display: "No obvious leak",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is there an <b>odor</b> of gas (or other)?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "No";
        },
        answers: [
          {
            answer: "Yes",
            display: "Odor present",
            continue: true,
            updateSubCode: "O",
          },
          {
            answer: "No",
            display: "No odor present",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if odor present",
            continue: true,
            updateCode: "60B04",
          },
        ],
      },

      {
        text: (
          <p>
            Where is the <b>leak</b> (odor) coming from?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Outside (General)",
            display: "Odor outside",
            continue: true,
            updateCode: "60B03",
          },
          {
            answer: "Outside Line",
            display: "Coming frm outside line",
            continue: true,
          },
          {
            answer: "Outside Tank",
            display: "Coming frm outside tank",
            continue: true,
          },
          {
            answer: "Dwelling",
            display: "Coming frm dwelling",
            continue: true,
          },
          {
            answer: "Transmission/Distribution Line",
            display: "Coming frm transmission/distribution line",
            continue: true,
            updateCode: "60C04",
          },
          {
            answer: "High-Pressure Line",
            display: "Coming frm high-pressure line",
            continue: true,
            updateCode: "60C05",
          },
          {
            answer: "Unknown",
            display: "Unk where leak is coming from",
            continue: true,
            updateCode: "60B04",
          },
        ],
      },

      {
        text: (
          <p>
            What <b>type</b> of outside line is it?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "Outside Line";
        },
        answers: [
          {
            answer: "Residential",
            display: "Residential line",
            continue: true,
            updateCode: "60B01",
          },
          {
            answer: "Commercial",
            display: "Comm line",
            continue: true,
            updateCode: "60C02",
          },
          {
            answer: "Unknown",
            display: "Unk type of outside line",
            continue: true,
            updateCode: "60B04",
          },
        ],
      },

      {
        text: (
          <p>
            What is the <b>size</b> of the tank?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "Outside Tank";
        },
        answers: [
          {
            answer: "<= 5 Gallons",
            display: "Tank <= 5 gallons",
            continue: true,
            updateCode: "60B02",
          },
          {
            answer: "> 5 Gallons",
            display: "Tank > 5 gallons",
            continue: true,
            updateCode: "60C03",
          },
          {
            answer: "Unknown",
            display: "Unk size of tank",
            continue: true,
            updateCode: "60B04",
          },
        ],
      },

      {
        text: (
          <p>
            What <b>type</b> of dwelling is the <b>leak (odor)</b> coming from?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "Dwelling";
        },
        answers: [
          {
            answer: "Residential (Single)",
            display: "Single-family residential",
            continue: true,
            updateCode: "60C01",
          },
          {
            answer: "Residential (Multi)",
            display: "Multi-family residential",
            continue: true,
            updateCode: "60D04",
          },
          {
            answer: "HIGH RISE",
            display: "High-rise dwelling",
            continue: true,
            updateCode: "60D02",
          },
          {
            answer: "Commercial",
            display: "Commercial dwelling",
            continue: true,
            updateCode: "60D03",
          },
          {
            answer: "Industrial",
            display: "Industrial dwelling",
            continue: true,
            updateCode: "60D03",
          },
          {
            answer: "Unknown",
            display: "Unk type of dwelling",
            continue: true,
            updateCode: "60B04",
          },
        ],
      },

      {
        text: (
          <p>
            Is there a high <b className="text-red-400">LIFE HAZARD</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No life hazard ID'd",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Life hazard present",
            continue: true,
            updateCode: "60D01",
          },
          {
            answer: "Unknown",
            display: "Unk if life hazard present",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is anyone <b>sick</b> or <b>injured</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No sick/inj'd persons rptd",
            end: true,
          },
          {
            answer: "Yes - Single",
            display: "Single sick/inj'd person rptd",
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              const secondAnswer = answers?.[1]?.defaultAnswer;
              if (firstAnswer === "No" && secondAnswer === "Yes") {
                return { subCode: "V" };
              } else {
                return { subCode: "X" };
              }
            },
            end: true,
          },
          {
            answer: "Yes - Multiple:",
            display: "{input} sick/inj'd persons rptd",
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              const secondAnswer = answers?.[1]?.defaultAnswer;
              if (firstAnswer === "No" && secondAnswer === "Yes") {
                return { subCode: "W" };
              } else {
                return { subCode: "Y" };
              }
            },
            end: true,
          },
          {
            answer: "Unknown",
            display: "Unk if sick/inj'd persons",
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
            code: "60B01",
            text: "Outside Residential Line",
            recResponse: 200,
            subCodes: [
              {
                code: "O",
                text: "Odor Only",
                recResponse: 201,
              },
              {
                code: "V",
                text: "Odor w/ Single Sick/Injured Person",
                recResponse: 202,
              },
              {
                code: "W",
                text: "Odor w/ Mult Sick/Injured Persons",
                recResponse: 203,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 204,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 205,
              },
            ],
          },
          {
            code: "60B02",
            text: "Outside Tank <= 5 Gallons/20 Liters",
            recResponse: 206,
            subCodes: [
              {
                code: "O",
                text: "Odor Only",
                recResponse: 201,
              },
              {
                code: "V",
                text: "Odor w/ Single Sick/Injured Person",
                recResponse: 202,
              },
              {
                code: "W",
                text: "Odor w/ Mult Sick/Injured Persons",
                recResponse: 203,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 207,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 208,
              },
            ],
          },
          {
            code: "60B03",
            text: "Outside Odor (Other/Unkn Source)",
            recResponse: 201,
            subCodes: [
              {
                code: "O",
                text: "Odor Only",
                recResponse: 201,
              },
              {
                code: "V",
                text: "Odor w/ Single Sick/Injured Person",
                recResponse: 202,
              },
              {
                code: "W",
                text: "Odor w/ Mult Sick/Injured Persons",
                recResponse: 203,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 202,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 203,
              },
            ],
          },
          {
            code: "60B04",
            text: "Unkn Situation (Investigation)",
            recResponse: 209,
            defaultCode: true,
            subCodes: [
              {
                code: "O",
                text: "Odor Only",
                recResponse: 209,
              },
              {
                code: "V",
                text: "Odor w/ Single Sick/Injured Person",
                recResponse: 210,
              },
              {
                code: "W",
                text: "Odor w/ Mult Sick/Injured Persons",
                recResponse: 211,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 210,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 211,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "60C00",
            text: "Override (Charlie)",
            recResponse: 206,
            subCodes: [
              {
                code: "O",
                text: "Odor Only",
                recResponse: 206,
              },
              {
                code: "V",
                text: "Odor w/ Single Sick/Injured Person",
                recResponse: 207,
              },
              {
                code: "W",
                text: "Odor w/ Mult Sick/Injured Persons",
                recResponse: 208,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 207,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 208,
              },
            ],
          },
          {
            code: "60C01",
            text: "Residential (Single)",
            recResponse: 212,
            subCodes: [
              {
                code: "O",
                text: "Odor Only",
                recResponse: 212,
              },
              {
                code: "V",
                text: "Odor w/ Single Sick/Injured Person",
                recResponse: 213,
              },
              {
                code: "W",
                text: "Odor w/ Mult Sick/Injured Persons",
                recResponse: 214,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 213,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 214,
              },
            ],
          },
          {
            code: "60C02",
            text: "Outside Comm Line",
            recResponse: 200,
            subCodes: [
              {
                code: "O",
                text: "Odor Only",
                recResponse: 200,
              },
              {
                code: "V",
                text: "Odor w/ Single Sick/Injured Person",
                recResponse: 204,
              },
              {
                code: "W",
                text: "Odor w/ Mult Sick/Injured Persons",
                recResponse: 205,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 204,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 205,
              },
            ],
          },
          {
            code: "60C03",
            text: "Outside Tank > 5 Gallons/20 Liters",
            recResponse: 212,
            subCodes: [
              {
                code: "O",
                text: "Odor Only",
                recResponse: 212,
              },
              {
                code: "V",
                text: "Odor w/ Single Sick/Injured Person",
                recResponse: 213,
              },
              {
                code: "W",
                text: "Odor w/ Mult Sick/Injured Persons",
                recResponse: 214,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 213,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 214,
              },
            ],
          },
          {
            code: "60C04",
            text: "Transmission/Distribution (Main/Service) Pipeline",
            recResponse: 215,
            subCodes: [
              {
                code: "O",
                text: "Odor Only",
                recResponse: 215,
              },
              {
                code: "V",
                text: "Odor w/ Single Sick/Injured Person",
                recResponse: 215,
              },
              {
                code: "W",
                text: "Odor w/ Mult Sick/Injured Persons",
                recResponse: 215,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 215,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 215,
              },
            ],
          },
          {
            code: "60C05",
            text: "High-Pressure Line",
            recResponse: 215,
            subCodes: [
              {
                code: "O",
                text: "Odor Only",
                recResponse: 215,
              },
              {
                code: "V",
                text: "Odor w/ Single Sick/Injured Person",
                recResponse: 215,
              },
              {
                code: "W",
                text: "Odor w/ Mult Sick/Injured Persons",
                recResponse: 215,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 215,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 215,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "60D00",
            text: "Override (Delta)",
            recResponse: 215,
            subCodes: [
              {
                code: "O",
                text: "Odor Only",
                recResponse: 215,
              },
              {
                code: "V",
                text: "Odor w/ Single Sick/Injured Person",
                recResponse: 215,
              },
              {
                code: "W",
                text: "Odor w/ Mult Sick/Injured Persons",
                recResponse: 215,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 215,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 215,
              },
            ],
          },
          {
            code: "60D01",
            text: "High Life Hazard",
            recResponse: 212,
            subCodes: [
              {
                code: "O",
                text: "Odor Only",
                recResponse: 212,
              },
              {
                code: "V",
                text: "Odor w/ Single Sick/Injured Person",
                recResponse: 213,
              },
              {
                code: "W",
                text: "Odor w/ Mult Sick/Injured Persons",
                recResponse: 214,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 213,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 214,
              },
            ],
          },
          {
            code: "60D02",
            text: "High Rise",
            recResponse: 212,
            subCodes: [
              {
                code: "O",
                text: "Odor Only",
                recResponse: 212,
              },
              {
                code: "V",
                text: "Odor w/ Single Sick/Injured Person",
                recResponse: 213,
              },
              {
                code: "W",
                text: "Odor w/ Mult Sick/Injured Persons",
                recResponse: 214,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 213,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 214,
              },
            ],
          },
          {
            code: "60D03",
            text: "Comm/Ind Building",
            recResponse: 212,
            subCodes: [
              {
                code: "O",
                text: "Odor Only",
                recResponse: 212,
              },
              {
                code: "V",
                text: "Odor w/ Single Sick/Injured Person",
                recResponse: 213,
              },
              {
                code: "W",
                text: "Odor w/ Mult Sick/Injured Persons",
                recResponse: 214,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 213,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 214,
              },
            ],
          },
          {
            code: "60D04",
            text: "Residential (Mult)",
            recResponse: 212,
            subCodes: [
              {
                code: "O",
                text: "Odor Only",
                recResponse: 212,
              },
              {
                code: "V",
                text: "Odor w/ Single Sick/Injured Person",
                recResponse: 213,
              },
              {
                code: "W",
                text: "Odor w/ Mult Sick/Injured Persons",
                recResponse: 214,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 213,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 214,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 61,
    name: "Hazmat",
    shortName: "Hazmat",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: 3 },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 184,
    questions: [
      {
        text: (
          <p>
            What <b>type</b> of <span className="text-green-400">hazmat</span>{" "}
            is this?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Biological",
            display: "Biological hazmat",
            continue: true,
          },
          {
            answer: "Chemical",
            display: "Chemical hazmat",
            continue: true,
          },
          {
            answer: "Nuclear",
            display: "Nuclear hazmat",
            continue: true,
          },
          {
            answer: "Radiological",
            display: "Radiological hazmat",
            continue: true,
          },
          {
            answer: "Other:",
            display: "{input} hazmat",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk type of hazmat",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is the <b className="text-green-400">hazmat</b> <b>contained</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Hazmat contained",
            continue: true,
          },
          {
            answer: "No",
            display: "Hazmat not contained",
            continue: true,
            updateCode: "61D02",
          },
          {
            answer: "Unknown",
            display: "Unk if hazmat contained",
            continue: true,
            updateCode: "61C00",
          },
        ],
      },

      {
        text: (
          <p>
            What is the <b>size</b> of the incident?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "Yes";
        },
        answers: [
          {
            answer: "Abandoned Waste only",
            display: "Abandoned waste only",
            continue: true,
            updateCode: "61A01",
          },
          {
            answer: "Small Spill (<= 5 Gallons/20 Liters)",
            display: "Small spill rptd",
            continue: true,
            updateCode: "61B01",
          },
          {
            answer: "Large Spill (> 5 Gallons/20 Liters)",
            display: "Large spill rptd",
            continue: true,
            updateCode: "61C01",
          },
          {
            answer: "Unknown",
            display: "Unk size of incident",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is the <b className="text-green-400">hazmat</b> threatening any{" "}
            <b className="text-blue-400">waterways</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No waterways threatened",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Waterways threatened",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if (lastAnswer === "No") {
                return { code: "61D01" };
              } else {
                return { code: "61C02" };
              }
            },
          },
          {
            answer: "Unknown",
            display: "Unk if waterways threatened",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            What <b>type</b> of <b className="text-blue-400">waterway</b> is
            threatened?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "Yes";
        },
        answers: [
          {
            answer: "Costal Water",
            display: "Costal waterway involved",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const targetAnswer = answers?.find(
                (a) => a.defaultQuestion === "Is the hazmat contained?"
              )?.defaultAnswer;
              if (targetAnswer === "No") {
                return { code: "61D03" };
              }
            },
          },
          {
            answer: "Inland Water",
            display: "Inland waterway involved",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const targetAnswer = answers?.find(
                (a) => a.defaultQuestion === "Is the hazmat contained?"
              )?.defaultAnswer;
              if (targetAnswer === "No") {
                return { code: "61D04" };
              }
            },
          },
          {
            answer: "Oceanic Water",
            display: "Oceanic waterway involved",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const targetAnswer = answers?.find(
                (a) => a.defaultQuestion === "Is the hazmat contained?"
              )?.defaultAnswer;
              if (targetAnswer === "No") {
                return { code: "61D05" };
              }
            },
          },
          {
            answer: "Sewer/Drain",
            display: "Sewer/Drain involved",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const targetAnswer = answers?.find(
                (a) => a.defaultQuestion === "Is the hazmat contained?"
              )?.defaultAnswer;
              if (targetAnswer === "No") {
                return { code: "61D06" };
              }
            },
          },
          {
            answer: "Unknown",
            display: "Unk type of waterway",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is anyone <b>sick</b> or <b>injured</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No sick/inj'd persons rptd",
            end: true,
          },
          {
            answer: "Yes - Single",
            display: "Single sick/inj'd person rptd",
            end: true,
            updateSubCode: "V",
          },
          {
            answer: "Yes - Two",
            display: "2 sick/inj'd persons rptd",
            end: true,
            updateSubCode: "W",
          },
          {
            answer: "MCI Level I (3-8 pts):",
            display: "{input} sick/inj'd persons rptd",
            end: true,
            input: true,
            updateSubCode: "X",
          },
          {
            answer: "MCI Level II (9-20 pts):",
            display: "{input} sick/inj'd persons rptd",
            end: true,
            input: true,
            updateSubCode: "Y",
          },
          {
            answer: "MCI Level III (> 20 pts):",
            display: "{input} sick/inj'd persons rptd",
            end: true,
            input: true,
            updateSubCode: "Z",
          },
          {
            answer: "Unknown",
            display: "Unk if sick/inj'd persons",
            end: true,
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "A",
        determinants: [
          {
            code: "61A01",
            text: "Abandoned Waste",
            recResponse: 184,
            subCodes: [
              {
                code: "V",
                text: "Single Sick/Injured Person",
                recResponse: 184,
              },
              {
                code: "W",
                text: "Mult Sick/Injured Persons",
                recResponse: 19,
              },
              {
                code: "X",
                text: "MCI Level I",
                recResponse: 19,
              },
              {
                code: "Y",
                text: "MCI Level II",
                recResponse: 19,
              },
              {
                code: "Z",
                text: "MCI Level III",
                recResponse: 19,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "61B00",
            text: "Override (Bravo)",
            recResponse: 184,
            subCodes: [
              {
                code: "V",
                text: "Single Sick/Injured Person",
                recResponse: 19,
              },
              {
                code: "W",
                text: "Mult Sick/Injured Persons",
                recResponse: 19,
              },
              {
                code: "X",
                text: "MCI Level I",
                recResponse: 19,
              },
              {
                code: "Y",
                text: "MCI Level II",
                recResponse: 19,
              },
              {
                code: "Z",
                text: "MCI Level III",
                recResponse: 19,
              },
            ],
          },
          {
            code: "61B01",
            text: "Small Spill (<= 5 Gallons/20 Liters)",
            recResponse: 216,
            subCodes: [
              {
                code: "D",
                text: "Drug Lab",
                recResponse: 216,
              },
              {
                code: "S",
                text: "Chemical Suicide",
                recResponse: 216,
              },
              {
                code: "V",
                text: "Single Sick/Injured Person",
                recResponse: 217,
              },
              {
                code: "W",
                text: "Mult Sick/Injured Persons",
                recResponse: 217,
              },
              {
                code: "X",
                text: "MCI Level I",
                recResponse: 217,
              },
              {
                code: "Y",
                text: "MCI Level II",
                recResponse: 217,
              },
              {
                code: "Z",
                text: "MCI Level III",
                recResponse: 217,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "61C00",
            text: "Override (Charlie)",
            recResponse: 217,
            subCodes: [
              {
                code: "D",
                text: "Drug Lab",
                recResponse: 217,
              },
              {
                code: "S",
                text: "Chemical Suicide",
                recResponse: 217,
              },
              {
                code: "V",
                text: "Single Sick/Injured Person",
                recResponse: 217,
              },
              {
                code: "W",
                text: "Mult Sick/Injured Persons",
                recResponse: 217,
              },
              {
                code: "X",
                text: "MCI Level I",
                recResponse: 217,
              },
              {
                code: "Y",
                text: "MCI Level II",
                recResponse: 217,
              },
              {
                code: "Z",
                text: "MCI Level III",
                recResponse: 217,
              },
            ],
          },
          {
            code: "61C01",
            text: "Contained Hazmat",
            recResponse: 218,
            subCodes: [
              {
                code: "D",
                text: "Drug Lab",
                recResponse: 218,
              },
              {
                code: "S",
                text: "Chemical Suicide",
                recResponse: 218,
              },
              {
                code: "V",
                text: "Single Sick/Injured Person",
                recResponse: 218,
              },
              {
                code: "W",
                text: "Mult Sick/Injured Persons",
                recResponse: 219,
              },
              {
                code: "X",
                text: "MCI Level I",
                recResponse: 219,
              },
              {
                code: "Y",
                text: "MCI Level II",
                recResponse: 219,
              },
              {
                code: "Z",
                text: "MCI Level III",
                recResponse: 219,
              },
            ],
          },
          {
            code: "61C02",
            text: "Contained In/Near Other Waterway",
            recResponse: 218,
            subCodes: [
              {
                code: "D",
                text: "Drug Lab",
                recResponse: 218,
              },
              {
                code: "S",
                text: "Chemical Suicide",
                recResponse: 218,
              },
              {
                code: "V",
                text: "Single Sick/Injured Person",
                recResponse: 218,
              },
              {
                code: "W",
                text: "Mult Sick/Injured Persons",
                recResponse: 219,
              },
              {
                code: "X",
                text: "MCI Level I",
                recResponse: 219,
              },
              {
                code: "Y",
                text: "MCI Level II",
                recResponse: 219,
              },
              {
                code: "Z",
                text: "MCI Level III",
                recResponse: 219,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "61D00",
            text: "Override (Delta)",
            recResponse: 220,
            subCodes: [
              {
                code: "D",
                text: "Drug Lab",
                recResponse: 220,
              },
              {
                code: "S",
                text: "Chemical Suicide",
                recResponse: 220,
              },
              {
                code: "V",
                text: "Single Sick/Injured Person",
                recResponse: 220,
              },
              {
                code: "W",
                text: "Mult Sick/Injured Persons",
                recResponse: 221,
              },
              {
                code: "X",
                text: "MCI Level I",
                recResponse: 221,
              },
              {
                code: "Y",
                text: "MCI Level II",
                recResponse: 221,
              },
              {
                code: "Z",
                text: "MCI Level III",
                recResponse: 221,
              },
            ],
          },
          {
            code: "61D01",
            text: "Uncontained In/Near Other Waterway",
            recResponse: 220,
            subCodes: [
              {
                code: "D",
                text: "Drug Lab",
                recResponse: 220,
              },
              {
                code: "S",
                text: "Chemical Suicide",
                recResponse: 220,
              },
              {
                code: "V",
                text: "Single Sick/Injured Person",
                recResponse: 220,
              },
              {
                code: "W",
                text: "Mult Sick/Injured Persons",
                recResponse: 221,
              },
              {
                code: "X",
                text: "MCI Level I",
                recResponse: 221,
              },
              {
                code: "Y",
                text: "MCI Level II",
                recResponse: 221,
              },
              {
                code: "Z",
                text: "MCI Level III",
                recResponse: 221,
              },
            ],
          },
          {
            code: "61D02",
            text: "Uncontained Hazmat",
            recResponse: 220,
            subCodes: [
              {
                code: "D",
                text: "Drug Lab",
                recResponse: 220,
              },
              {
                code: "S",
                text: "Chemical Suicide",
                recResponse: 220,
              },
              {
                code: "V",
                text: "Single Sick/Injured Person",
                recResponse: 220,
              },
              {
                code: "W",
                text: "Mult Sick/Injured Persons",
                recResponse: 221,
              },
              {
                code: "X",
                text: "MCI Level I",
                recResponse: 221,
              },
              {
                code: "Y",
                text: "MCI Level II",
                recResponse: 221,
              },
              {
                code: "Z",
                text: "MCI Level III",
                recResponse: 221,
              },
            ],
          },
          {
            code: "61D03",
            text: "In/Near Costal Water",
            recResponse: 220,
            subCodes: [
              {
                code: "D",
                text: "Drug Lab",
                recResponse: 220,
              },
              {
                code: "S",
                text: "Chemical Suicide",
                recResponse: 220,
              },
              {
                code: "V",
                text: "Single Sick/Injured Person",
                recResponse: 220,
              },
              {
                code: "W",
                text: "Mult Sick/Injured Persons",
                recResponse: 221,
              },
              {
                code: "X",
                text: "MCI Level I",
                recResponse: 221,
              },
              {
                code: "Y",
                text: "MCI Level II",
                recResponse: 221,
              },
              {
                code: "Z",
                text: "MCI Level III",
                recResponse: 221,
              },
            ],
          },
          {
            code: "61D04",
            text: "In/Near Inland Water",
            recResponse: 220,
            subCodes: [
              {
                code: "D",
                text: "Drug Lab",
                recResponse: 220,
              },
              {
                code: "S",
                text: "Chemical Suicide",
                recResponse: 220,
              },
              {
                code: "V",
                text: "Single Sick/Injured Person",
                recResponse: 220,
              },
              {
                code: "W",
                text: "Mult Sick/Injured Persons",
                recResponse: 221,
              },
              {
                code: "X",
                text: "MCI Level I",
                recResponse: 221,
              },
              {
                code: "Y",
                text: "MCI Level II",
                recResponse: 221,
              },
              {
                code: "Z",
                text: "MCI Level III",
                recResponse: 221,
              },
            ],
          },
          {
            code: "61D05",
            text: "In/Near Oceanic Water",
            recResponse: 220,
            subCodes: [
              {
                code: "D",
                text: "Drug Lab",
                recResponse: 220,
              },
              {
                code: "S",
                text: "Chemical Suicide",
                recResponse: 220,
              },
              {
                code: "V",
                text: "Single Sick/Injured Person",
                recResponse: 220,
              },
              {
                code: "W",
                text: "Mult Sick/Injured Persons",
                recResponse: 221,
              },
              {
                code: "X",
                text: "MCI Level I",
                recResponse: 221,
              },
              {
                code: "Y",
                text: "MCI Level II",
                recResponse: 221,
              },
              {
                code: "Z",
                text: "MCI Level III",
                recResponse: 221,
              },
            ],
          },
          {
            code: "61D06",
            text: "In/Near Sewer Drain",
            recResponse: 220,
            subCodes: [
              {
                code: "D",
                text: "Drug Lab",
                recResponse: 220,
              },
              {
                code: "S",
                text: "Chemical Suicide",
                recResponse: 220,
              },
              {
                code: "V",
                text: "Single Sick/Injured Person",
                recResponse: 220,
              },
              {
                code: "W",
                text: "Mult Sick/Injured Persons",
                recResponse: 221,
              },
              {
                code: "X",
                text: "MCI Level I",
                recResponse: 221,
              },
              {
                code: "Y",
                text: "MCI Level II",
                recResponse: 221,
              },
              {
                code: "Z",
                text: "MCI Level III",
                recResponse: 221,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 62,
    name: "High Angle Rescue",
    shortName: "High Angle Rescue",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: 2 },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 3,
    defaultPlan: 210,
    questions: [
      {
        text: <p>How many people are injured?</p>,
        questionType: "select",
        answers: [
          {
            answer: "None",
            display: "No sick/inj'd persons rptd",
            continue: true,
            updateCode: "62D01",
          },
          {
            answer: "Single Person",
            display: "Single sick/inj'd person rptd",
            continue: true,
            updateCode: "62D03",
          },
          {
            answer: "Multiple Persons:",
            display: "{input} sick/inj'd persons rptd",
            continue: true,
            input: true,
            updateCode: "62D04",
          },
          {
            answer: "Unknown",
            display: "Unk if sick/inj'd persons",
            continue: true,
            updateCode: "62D05",
          },
        ],
      },

      {
        text: (
          <p>
            What is the <b>location</b> of the <b>incident</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Above Grade",
            display: "Incident above grade",
            end: true,
            updateSubCode: "A",
          },
          {
            answer: "Below Grade",
            display: "Incident below grade",
            end: true,
            updateSubCode: "B",
          },
          {
            answer: "Above Water",
            display: "Incident above water",
            end: true,
            updateSubCode: "W",
          },
          {
            answer: "Unknown",
            display: "Unk location of incident",
            end: true,
          },
        ],
      },

      {
        text: <p>Is the person(s) suicidal?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No suicidal persons rptd",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Suicidal person rptd",
            continue: true,
            updateCode: "62D02",
          },
          {
            answer: "Unknown",
            display: "Unk if suicidal persons",
            continue: true,
            updateCode: "62B01",
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "B",
        determinants: [
          {
            code: "62B01",
            text: "Unkn Situation (Investigation)",
            defaultCode: true,
            recResponse: 210,
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "62C00",
            text: "Override (Charlie)",
            recResponse: 85,
          },
          {
            code: "62C01",
            text: "Unkn Situation (Suicidal w/ Injs)",
            recResponse: 85,
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "62D00",
            text: "Override (Delta)",
            recResponse: 85,
          },
          {
            code: "62D01",
            text: "High Angle Rescue",
            recResponse: 85,
            subCodes: [
              {
                code: "A",
                text: "Above Grade",
                recResponse: 85,
              },
              {
                code: "B",
                text: "Below Grade",
                recResponse: 85,
              },
              {
                code: "W",
                text: "Above Water",
                recResponse: 85,
              },
            ],
          },
          {
            code: "62D02",
            text: "High Angle Rescue (Suicidal Person)",
            recResponse: 85,
            subCodes: [
              {
                code: "A",
                text: "Above Grade",
                recResponse: 85,
              },
              {
                code: "B",
                text: "Below Grade",
                recResponse: 85,
              },
              {
                code: "W",
                text: "Above Water",
                recResponse: 85,
              },
            ],
          },
          {
            code: "62D03",
            text: "High Angle Rescue w/ Single Injured Person",
            recResponse: 85,
            subCodes: [
              {
                code: "A",
                text: "Above Grade",
                recResponse: 85,
              },
              {
                code: "B",
                text: "Below Grade",
                recResponse: 85,
              },
              {
                code: "W",
                text: "Above Water",
                recResponse: 85,
              },
            ],
          },
          {
            code: "62D04",
            text: "High Angle Rescue w/ Mult Injured Persons",
            recResponse: 85,
            subCodes: [
              {
                code: "A",
                text: "Above Grade",
                recResponse: 85,
              },
              {
                code: "B",
                text: "Below Grade",
                recResponse: 85,
              },
              {
                code: "W",
                text: "Above Water",
                recResponse: 85,
              },
            ],
          },
          {
            code: "62D05",
            text: "High Angle Rescue w/ Unkn Number of Injs",
            recResponse: 85,
            subCodes: [
              {
                code: "A",
                text: "Above Grade",
                recResponse: 85,
              },
              {
                code: "B",
                text: "Below Grade",
                recResponse: 85,
              },
              {
                code: "W",
                text: "Above Water",
                recResponse: 85,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 63,
    name: "Lightning Strike (Investigation)",
    shortName: "Lightning Strike",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: undefined },
      { name: "Police", priority: false },
    ],
    defaultPriority: 3,
    defaultPlan: 222,
    questions: [
      {
        text: (
          <p>
            What did the <b className="text-blue-400">lightning</b> strike?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Outside",
            display: "Outside strike",
            continue: true,
            updateCode: "63B05",
          },
          {
            answer: "Structure",
            display: "Structure strike",
            continue: true,
          },
          {
            answer: "Vehicle",
            display: "Vehicle strike",
            continue: true,
            updateCode: "63B06",
          },
          {
            answer: "Unknown",
            display: "Unk what lightning struck",
            continue: true,
            updateCode: "63B07",
          },
        ],
      },

      {
        text: (
          <p>
            Did the lightning hit <b>anything</b> outside?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "Outside";
        },
        answers: [
          {
            answer: "No",
            display: "Nothing struck outside",
            continue: true,
          },
          {
            answer: "Outdoor Venue",
            display: "Outdoor venue hit",
            continue: true,
            updateCode: "63C05",
          },
          {
            answer: "Structure",
            display: "Structure hit",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if anything struck outside",
            continue: true,
            updateCode: "63B07",
          },
        ],
      },

      {
        text: (
          <p>
            What type of <b>structure</b> was hit?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return firstAnswer === "Structure" || lastAnswer === "Structure";
        },
        answers: [
          {
            answer: "Residential (Single)",
            display: "Single-family residential",
            continue: true,
            updateCode: "63B01",
          },
          {
            answer: "Large Non-Dwelling Building/Structure",
            display: "Large non-dwelling",
            continue: true,
            updateCode: "63B02",
          },
          {
            answer: "Small Non-Dwelling Building/Structure",
            display: "Small non-dwelling",
            continue: true,
            updateCode: "63B03",
          },
          {
            answer: "Mobile Home",
            display: "Mobile home",
            continue: true,
            updateCode: "63B04",
          },
          {
            answer: "House Trailer",
            display: "House trailer",
            continue: true,
            updateCode: "63B04",
          },
          {
            answer: "Portable Office",
            display: "Portable office",
            continue: true,
            updateCode: "63B04",
          },
          {
            answer: "HIGH RISE",
            display: "High rise",
            continue: true,
            updateCode: "63C02",
          },
          {
            answer: "Comm/Ind Building",
            display: "Comm/Ind building",
            continue: true,
            updateCode: "63C03",
          },
          {
            answer: "Residential (Mult)",
            display: "Mult-family residential",
            continue: true,
            updateCode: "63C04",
          },
          {
            answer: "Outdoor Venue",
            display: "Outdoor venue",
            continue: true,
            updateCode: "63C05",
          },
          {
            answer: "Unknown",
            display: "Unk type of structure",
            continue: true,
            updateCode: "63B07",
          },
        ],
      },

      {
        text: (
          <p>
            Is there a high <b className="text-red-400">life hazard</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No life hazard ID'd",
            continue: true,
          },
          {
            answer: "Yes",
            display: "High life hazard",
            continue: true,
            updateCode: "63C01",
          },
          {
            answer: "Unknown",
            display: "Unk if life hazard present",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is anyone <b>injured</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No inj'd persons rptd",
            continue: true,
          },
          {
            answer: "Yes - Single",
            display: "Single inj'd person rptd",
            continue: true,
            updateSubCode: "X",
          },
          {
            answer: "Yes - Multiple:",
            display: "{input} inj'd persons rptd",
            continue: true,
            input: true,
            updateSubCode: "Y",
          },
          {
            answer: "Unknown",
            display: "Unk if inj'd persons",
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
            code: "63B01",
            text: "Residential (Single)",
            recResponse: 222,
            subCodes: [
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 223,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 224,
              },
            ],
          },
          {
            code: "63B02",
            text: "Large Non-Dwelling Building/Structure",
            recResponse: 222,
            subCodes: [
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 223,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 224,
              },
            ],
          },
          {
            code: "63B03",
            text: "Small Non-Dwelling Building/Structure",
            recResponse: 222,
            subCodes: [
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 223,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 224,
              },
            ],
          },
          {
            code: "63B04",
            text: "Mobile Home, House Trailer, Portable Office",
            recResponse: 222,
            subCodes: [
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 223,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 224,
              },
            ],
          },
          {
            code: "63B05",
            text: "Outside Lighting Strike",
            recResponse: 20,
            subCodes: [
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 225,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 224,
              },
            ],
          },
          {
            code: "63B06",
            text: "Vehicle",
            recResponse: 222,
            subCodes: [
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 223,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 224,
              },
            ],
          },
          {
            code: "63B07",
            text: "Unkn Situation (Investigation)/Unkn Building Type",
            recResponse: 20,
            defaultCode: true,
            subCodes: [
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 223,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 224,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "63C00",
            text: "Override (Charlie)",
            recResponse: 222,
            subCodes: [
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 223,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 224,
              },
            ],
          },
          {
            code: "63C01",
            text: "High Life Hazard",
            recResponse: 222,
            subCodes: [
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 223,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 224,
              },
            ],
          },
          {
            code: "63C02",
            text: "High Rise",
            recResponse: 222,
            subCodes: [
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 223,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 224,
              },
            ],
          },
          {
            code: "63C03",
            text: "Comm/Ind Building",
            recResponse: 222,
            subCodes: [
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 223,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 224,
              },
            ],
          },
          {
            code: "63C04",
            text: "Residential (Mult)",
            recResponse: 222,
            subCodes: [
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 223,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 224,
              },
            ],
          },
          {
            code: "63C05",
            text: "Outdoor Venue (Sporting Event/Concert/Campground)",
            recResponse: 222,
            subCodes: [
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 223,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 224,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 64,
    name: "Marine/Boat Fire",
    shortName: "Marine/Boat Fire",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: true },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 3,
    defaultPlan: 227,
    questions: [
      {
        text: (
          <p>
            Is the boat still <b className="text-red-400">on fire</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Fire confirmed",
            continue: true,
          },
          {
            answer: "No",
            display: "Fire rptd out",
            continue: true,
            updateCode: "64B01",
          },
          {
            answer: "Unknown",
            display: "Unk if fire is present",
            continue: true,
            updateCode: "64B02",
          },
        ],
      },

      {
        text: <p>What is the status of the boat?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Docked",
            display: "Boat is docked",
            continue: true,
          },
          {
            answer: "Dry Dock",
            display: "Boat is in dry dock",
            continue: true,
            updateCode: "64D01",
          },
          {
            answer: "Beached",
            display: "Boat is beached",
            continue: true,
          },
          {
            answer: "At Sea",
            display: "Boat is at sea",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk status of boat",
            continue: true,
            updateCode: "64B02",
          },
        ],
      },

      {
        text: (
          <p>
            What type of <b className="text-blue-400">water</b> is the boat in?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer !== "Dry Dock";
        },
        answers: [
          {
            answer: "Coastal",
            display: "Costal water",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              if (firstAnswer === "No") return undefined;
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if (lastAnswer === "Docked") {
                return { code: "64D02" };
              } else if (lastAnswer === "Beached") {
                return { code: "64D04" };
              } else {
                return { code: "64D06" };
              }
            },
          },
          {
            answer: "Inland",
            display: "Inland water",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              if (firstAnswer === "No") return undefined;
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if (lastAnswer === "Docked") {
                return { code: "64D03" };
              } else if (lastAnswer === "Beached") {
                return { code: "64D05" };
              } else {
                return { code: "64D08" };
              }
            },
          },
          {
            answer: "Oceanic",
            display: "Oceanic water",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              if (firstAnswer === "Yes") {
                return { code: "64D07" };
              }
            },
          },
          {
            answer: "Unknown",
            display: "Unk type of water",
            continue: true,
            updateCode: "64D08",
          },
        ],
      },

      {
        text: (
          <p>
            What is the <b>size</b> of the <b>vessel</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Small (< 25ft)",
            display: "Small vessel (< 25ft)",
            continue: true,
            updateSubCode: "S",
          },
          {
            answer: "Medium (25-49ft)",
            display: "Medium vessel (25-49ft)",
            continue: true,
            updateSubCode: "M",
          },
          {
            answer: "Large (>= 50ft)",
            display: "Large vessel (>= 50ft)",
            continue: true,
            updateSubCode: "L",
          },
          {
            answer: "Unknown",
            display: "Unk size of vessel",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is there anyone <b>injured</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No inj'd persons rptd",
            end: true,
          },
          {
            answer: "Yes - Single",
            display: "Single inj'd person rptd",
            end: true,
            dependency: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if (lastAnswer === "Small (< 25ft)") {
                return { subCode: "X" };
              } else if (lastAnswer === "Medium (25-49ft)") {
                return { subCode: "V" };
              } else if (lastAnswer === "Large (>= 50ft)") {
                return { subCode: "T" };
              }
            },
          },
          {
            answer: "Yes - Multiple:",
            display: "{input} inj'd persons rptd",
            end: true,
            input: true,
            dependency: (answers?: IAnswerData[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if (lastAnswer === "Small (< 25ft)") {
                return { subCode: "Y" };
              } else if (lastAnswer === "Medium (25-49ft)") {
                return { subCode: "W" };
              } else if (lastAnswer === "Large (>= 50ft)") {
                return { subCode: "U" };
              }
            },
          },
          {
            answer: "Unknown",
            display: "Unk if inj'd persons",
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
            code: "64B01",
            text: "Extinguished Fire",
            recResponse: 227,
            subCodes: [
              {
                code: "L",
                text: "Large >= 50ft (>=15m)",
                recResponse: 227,
              },
              {
                code: "M",
                text: "Medium 25-49ft (8-14m)",
                recResponse: 227,
              },
              {
                code: "S",
                text: "Small < 25ft (<8m)",
                recResponse: 227,
              },
              {
                code: "T",
                text: "Large & Single Injured Person",
                recResponse: 228,
              },
              {
                code: "U",
                text: "Large & Multiple Injured Persons",
                recResponse: 229,
              },
              {
                code: "V",
                text: "Medium & Single Injured Person",
                recResponse: 228,
              },
              {
                code: "W",
                text: "Medium & Multiple Injured Persons",
                recResponse: 229,
              },
              {
                code: "X",
                text: "Small & Single Injured Person",
                recResponse: 228,
              },
              {
                code: "Y",
                text: "Small & Multiple Injured Persons",
                recResponse: 229,
              },
            ],
          },
          {
            code: "64B02",
            text: "Unkn Situation (Investigation)",
            recResponse: 209,
            defaultCode: true,
            subCodes: [
              {
                code: "L",
                text: "Large >= 50ft (>=15m)",
                recResponse: 209,
              },
              {
                code: "M",
                text: "Medium 25-49ft (8-14m)",
                recResponse: 209,
              },
              {
                code: "S",
                text: "Small < 25ft (<8m)",
                recResponse: 209,
              },
              {
                code: "T",
                text: "Large & Single Injured Person",
                recResponse: 210,
              },
              {
                code: "U",
                text: "Large & Multiple Injured Persons",
                recResponse: 211,
              },
              {
                code: "V",
                text: "Medium & Single Injured Person",
                recResponse: 210,
              },
              {
                code: "W",
                text: "Medium & Multiple Injured Persons",
                recResponse: 211,
              },
              {
                code: "X",
                text: "Small & Single Injured Person",
                recResponse: 210,
              },
              {
                code: "Y",
                text: "Small & Multiple Injured Persons",
                recResponse: 211,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "64D00",
            text: "Override (Delta)",
            recResponse: 230,
            subCodes: [
              {
                code: "L",
                text: "Large >= 50ft (>=15m)",
                recResponse: 230,
              },
              {
                code: "M",
                text: "Medium 25-49ft (8-14m)",
                recResponse: 230,
              },
              {
                code: "S",
                text: "Small < 25ft (<8m)",
                recResponse: 230,
              },
              {
                code: "T",
                text: "Large & Single Injured Person",
                recResponse: 231,
              },
              {
                code: "U",
                text: "Large & Multiple Injured Persons",
                recResponse: 232,
              },
              {
                code: "V",
                text: "Medium & Single Injured Person",
                recResponse: 231,
              },
              {
                code: "W",
                text: "Medium & Multiple Injured Persons",
                recResponse: 232,
              },
              {
                code: "X",
                text: "Small & Single Injured Person",
                recResponse: 231,
              },
              {
                code: "Y",
                text: "Small & Multiple Injured Persons",
                recResponse: 232,
              },
            ],
          },
          {
            code: "64D01",
            text: "Threatened Building/Structure or Other Boats",
            recResponse: 233,
            subCodes: [
              {
                code: "L",
                text: "Large >= 50ft (>=15m)",
                recResponse: 233,
              },
              {
                code: "M",
                text: "Medium 25-49ft (8-14m)",
                recResponse: 233,
              },
              {
                code: "S",
                text: "Small < 25ft (<8m)",
                recResponse: 233,
              },
              {
                code: "T",
                text: "Large & Single Injured Person",
                recResponse: 233,
              },
              {
                code: "U",
                text: "Large & Multiple Injured Persons",
                recResponse: 233,
              },
              {
                code: "V",
                text: "Medium & Single Injured Person",
                recResponse: 233,
              },
              {
                code: "W",
                text: "Medium & Multiple Injured Persons",
                recResponse: 233,
              },
              {
                code: "X",
                text: "Small & Single Injured Person",
                recResponse: 233,
              },
              {
                code: "Y",
                text: "Small & Multiple Injured Persons",
                recResponse: 233,
              },
            ],
          },
          {
            code: "64D02",
            text: "Docked in Costal Water",
            recResponse: 233,
            subCodes: [
              {
                code: "L",
                text: "Large >= 50ft (>=15m)",
                recResponse: 233,
              },
              {
                code: "M",
                text: "Medium 25-49ft (8-14m)",
                recResponse: 230,
              },
              {
                code: "S",
                text: "Small < 25ft (<8m)",
                recResponse: 230,
              },
              {
                code: "T",
                text: "Large & Single Injured Person",
                recResponse: 233,
              },
              {
                code: "U",
                text: "Large & Multiple Injured Persons",
                recResponse: 233,
              },
              {
                code: "V",
                text: "Medium & Single Injured Person",
                recResponse: 231,
              },
              {
                code: "W",
                text: "Medium & Multiple Injured Persons",
                recResponse: 232,
              },
              {
                code: "X",
                text: "Small & Single Injured Person",
                recResponse: 231,
              },
              {
                code: "Y",
                text: "Small & Multiple Injured Persons",
                recResponse: 232,
              },
            ],
          },
          {
            code: "64D03",
            text: "Docked in Inland Water",
            recResponse: 233,
            subCodes: [
              {
                code: "L",
                text: "Large >= 50ft (>=15m)",
                recResponse: 233,
              },
              {
                code: "M",
                text: "Medium 25-49ft (8-14m)",
                recResponse: 230,
              },
              {
                code: "S",
                text: "Small < 25ft (<8m)",
                recResponse: 230,
              },
              {
                code: "T",
                text: "Large & Single Injured Person",
                recResponse: 233,
              },
              {
                code: "U",
                text: "Large & Multiple Injured Persons",
                recResponse: 233,
              },
              {
                code: "V",
                text: "Medium & Single Injured Person",
                recResponse: 231,
              },
              {
                code: "W",
                text: "Medium & Multiple Injured Persons",
                recResponse: 232,
              },
              {
                code: "X",
                text: "Small & Single Injured Person",
                recResponse: 231,
              },
              {
                code: "Y",
                text: "Small & Multiple Injured Persons",
                recResponse: 232,
              },
            ],
          },
          {
            code: "64D04",
            text: "Beached in Costal Water",
            recResponse: 233,
            subCodes: [
              {
                code: "L",
                text: "Large >= 50ft (>=15m)",
                recResponse: 233,
              },
              {
                code: "M",
                text: "Medium 25-49ft (8-14m)",
                recResponse: 230,
              },
              {
                code: "S",
                text: "Small < 25ft (<8m)",
                recResponse: 230,
              },
              {
                code: "T",
                text: "Large & Single Injured Person",
                recResponse: 233,
              },
              {
                code: "U",
                text: "Large & Multiple Injured Persons",
                recResponse: 233,
              },
              {
                code: "V",
                text: "Medium & Single Injured Person",
                recResponse: 231,
              },
              {
                code: "W",
                text: "Medium & Multiple Injured Persons",
                recResponse: 232,
              },
              {
                code: "X",
                text: "Small & Single Injured Person",
                recResponse: 231,
              },
              {
                code: "Y",
                text: "Small & Multiple Injured Persons",
                recResponse: 232,
              },
            ],
          },
          {
            code: "64D05",
            text: "Beached in Inland Water",
            recResponse: 233,
            subCodes: [
              {
                code: "L",
                text: "Large >= 50ft (>=15m)",
                recResponse: 233,
              },
              {
                code: "M",
                text: "Medium 25-49ft (8-14m)",
                recResponse: 230,
              },
              {
                code: "S",
                text: "Small < 25ft (<8m)",
                recResponse: 230,
              },
              {
                code: "T",
                text: "Large & Single Injured Person",
                recResponse: 233,
              },
              {
                code: "U",
                text: "Large & Multiple Injured Persons",
                recResponse: 233,
              },
              {
                code: "V",
                text: "Medium & Single Injured Person",
                recResponse: 231,
              },
              {
                code: "W",
                text: "Medium & Multiple Injured Persons",
                recResponse: 232,
              },
              {
                code: "X",
                text: "Small & Single Injured Person",
                recResponse: 231,
              },
              {
                code: "Y",
                text: "Small & Multiple Injured Persons",
                recResponse: 232,
              },
            ],
          },
          {
            code: "64D06",
            text: "Costal Water",
            recResponse: 234,
            subCodes: [
              {
                code: "L",
                text: "Large >= 50ft (>=15m)",
                recResponse: 234,
              },
              {
                code: "M",
                text: "Medium 25-49ft (8-14m)",
                recResponse: 234,
              },
              {
                code: "S",
                text: "Small < 25ft (<8m)",
                recResponse: 234,
              },
              {
                code: "T",
                text: "Large & Single Injured Person",
                recResponse: 234,
              },
              {
                code: "U",
                text: "Large & Multiple Injured Persons",
                recResponse: 234,
              },
              {
                code: "V",
                text: "Medium & Single Injured Person",
                recResponse: 234,
              },
              {
                code: "W",
                text: "Medium & Multiple Injured Persons",
                recResponse: 234,
              },
              {
                code: "X",
                text: "Small & Single Injured Person",
                recResponse: 234,
              },
              {
                code: "Y",
                text: "Small & Multiple Injured Persons",
                recResponse: 234,
              },
            ],
          },
          {
            code: "64D07",
            text: "Oceanic Water",
            recResponse: 234,
            subCodes: [
              {
                code: "L",
                text: "Large >= 50ft (>=15m)",
                recResponse: 234,
              },
              {
                code: "M",
                text: "Medium 25-49ft (8-14m)",
                recResponse: 234,
              },
              {
                code: "S",
                text: "Small < 25ft (<8m)",
                recResponse: 234,
              },
              {
                code: "T",
                text: "Large & Single Injured Person",
                recResponse: 234,
              },
              {
                code: "U",
                text: "Large & Multiple Injured Persons",
                recResponse: 234,
              },
              {
                code: "V",
                text: "Medium & Single Injured Person",
                recResponse: 234,
              },
              {
                code: "W",
                text: "Medium & Multiple Injured Persons",
                recResponse: 234,
              },
              {
                code: "X",
                text: "Small & Single Injured Person",
                recResponse: 234,
              },
              {
                code: "Y",
                text: "Small & Multiple Injured Persons",
                recResponse: 234,
              },
            ],
          },
          {
            code: "64D08",
            text: "Inland Water",
            recResponse: 234,
            subCodes: [
              {
                code: "L",
                text: "Large >= 50ft (>=15m)",
                recResponse: 234,
              },
              {
                code: "M",
                text: "Medium 25-49ft (8-14m)",
                recResponse: 234,
              },
              {
                code: "S",
                text: "Small < 25ft (<8m)",
                recResponse: 234,
              },
              {
                code: "T",
                text: "Large & Single Injured Person",
                recResponse: 234,
              },
              {
                code: "U",
                text: "Large & Multiple Injured Persons",
                recResponse: 234,
              },
              {
                code: "V",
                text: "Medium & Single Injured Person",
                recResponse: 234,
              },
              {
                code: "W",
                text: "Medium & Multiple Injured Persons",
                recResponse: 234,
              },
              {
                code: "X",
                text: "Small & Single Injured Person",
                recResponse: 234,
              },
              {
                code: "Y",
                text: "Small & Multiple Injured Persons",
                recResponse: 234,
              },
            ],
          },
          {
            code: "64D09",
            text: "Dry Dock/On Land",
            recResponse: 233,
            subCodes: [
              {
                code: "L",
                text: "Large >= 50ft (>=15m)",
                recResponse: 233,
              },
              {
                code: "M",
                text: "Medium 25-49ft (8-14m)",
                recResponse: 230,
              },
              {
                code: "S",
                text: "Small < 25ft (<8m)",
                recResponse: 230,
              },
              {
                code: "T",
                text: "Large & Single Injured Person",
                recResponse: 233,
              },
              {
                code: "U",
                text: "Large & Multiple Injured Persons",
                recResponse: 233,
              },
              {
                code: "V",
                text: "Medium & Single Injured Person",
                recResponse: 231,
              },
              {
                code: "W",
                text: "Medium & Multiple Injured Persons",
                recResponse: 232,
              },
              {
                code: "X",
                text: "Small & Single Injured Person",
                recResponse: 231,
              },
              {
                code: "Y",
                text: "Small & Multiple Injured Persons",
                recResponse: 232,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 65,
    name: "Mutual Aid/Assist Outside Agency",
    shortName: "Muautal Aid",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: undefined },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 235,
    questions: [
      {
        text: (
          <p>
            What type of <b>mutual aid</b> incident is this?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Mutual Aid to Incident",
            display: "MA to incident",
            continue: true,
          },
          {
            answer: "Assist Outside Agency",
            display: "Assist outside agency",
            continue: true,
          },
          {
            answer: "Station Coverage",
            display: "Station coverage",
            continue: true,
            updateCode: "65A05",
          },
          {
            answer: "Mutual Aid to Staging Area",
            display: "MA to staging area",
            continue: true,
            updateCode: "65A06",
          },
          {
            answer: "Unknown",
            display: "Unk type of mutual aid",
            continue: true,
          },
        ],
      },

      {
        text: <p>How many units are responding?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Single Unit",
            display: "Single unit response",
            continue: true,
          },
          {
            answer: "Multiple Units",
            display: "Multiple unit response",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk number of units",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Are the units requested <b className="text-red-400">hot</b> or{" "}
            <b className="text-blue-400">cold</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Hot",
            display: "Hot response requested",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if (
                firstAnswer === "Mutual Aid to Incident" &&
                lastAnswer === "Single Unit"
              ) {
                return { code: "65B01" };
              } else if (
                firstAnswer === "Assist Outside Agency" &&
                lastAnswer === "Single Unit"
              ) {
                return { code: "65B02" };
              } else if (
                firstAnswer === "Mutual Aid to Incident" &&
                lastAnswer === "Multiple Units"
              ) {
                return { code: "65D01" };
              } else if (
                firstAnswer === "Assist Outside Agency" &&
                lastAnswer === "Multiple Units"
              ) {
                return { code: "65D02" };
              }
            },
          },
          {
            answer: "Cold",
            display: "Cold response requested",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              if (
                firstAnswer === "Mutual Aid to Incident" &&
                lastAnswer === "Single Unit"
              ) {
                return { code: "65A03" };
              } else if (
                firstAnswer === "Mutual Aid to Incident" &&
                lastAnswer === "Multiple Units"
              ) {
                return { code: "65A01" };
              } else if (
                firstAnswer === "Assist Outside Agency" &&
                lastAnswer === "Single Unit"
              ) {
                return { code: "65A04" };
              } else if (
                firstAnswer === "Assist Outside Agency" &&
                lastAnswer === "Multiple Units"
              ) {
                return { code: "65A02" };
              }
            },
          },
          {
            answer: "Not Specified",
            display: "Response mode not specified",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if hot or cold",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Are the any <b>special instructions</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No special instructions/details",
            end: true,
          },
          {
            answer: "Yes:",
            display: "Special instructions: {input}",
            end: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk if special instructions",
            end: true,
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "A",
        determinants: [
          {
            code: "65A00",
            text: "Override (Alpha)",
            recResponse: 235,
          },
          {
            code: "65A01",
            text: "Mutual Aid to Incident (Mult Units-Cold)",
            recResponse: 236,
          },
          {
            code: "65A02",
            text: "Assist Outside Agency (Mult Units-Cold)",
            recResponse: 236,
          },
          {
            code: "65A03",
            text: "Mutual Aid to Incident (Single Unit-Cold)",
            recResponse: 237,
          },
          {
            code: "65A04",
            text: "Assist Outside Agency (Single Unit-Cold)",
            recResponse: 237,
          },
          {
            code: "65A05",
            text: "Mutual Aid Move-Up/Cover (Station Assignment)",
            recResponse: 238,
          },
          {
            code: "65A06",
            text: "Mutual Aid to Staging Area",
            recResponse: 239,
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "65B00",
            text: "Override (Bravo)",
            recResponse: 240,
          },
          {
            code: "65B01",
            text: "Mutual Aid to Incident (Single Unit-Hot)",
            recResponse: 241,
          },
          {
            code: "65B02",
            text: "Assist Outside Agency (Single Unit-Hot)",
            recResponse: 241,
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "65D00",
            text: "Override (Delta)",
            recResponse: 242,
          },
          {
            code: "65D01",
            text: "Mutual Aid to Incident (Mult Units-Hot)",
            recResponse: 240,
          },
          {
            code: "65D02",
            text: "Assist Outside Agency (Mult Units-Hot)",
            recResponse: 240,
          },
        ],
      },
    ],
  },
  {
    protocol: 66,
    name: "Odor (Strange/Unkn)",
    shortName: "Unknown Odors",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: 3 },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 243,
    questions: [
      {
        text: (
          <p>
            <b>Where</b> is the <b className="text-yellow-400">odor</b> located?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Inside:",
            display: "Located inside - {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Outside:",
            display: "Located outside - {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk location of odor",
            continue: true,
            updateCode: "66A03",
          },
        ],
      },

      {
        text: (
          <p>
            Are there any <b className="text-green-400">hazardous materials</b>{" "}
            involved?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No hazmat involved",
            continue: true,
          },
          {
            answer: "Yes:",
            display: "Hazmat involved - {input}",
            continue: true,
            input: true,
            updateSubCode: "H",
          },
          {
            answer: "Unknown",
            display: "Unk if hazmat involved",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is anyone sick or experiencing symptoms{" "}
            <small className="text-blue-400">
              (Nausea, Vomiting, Headache)
            </small>
            ?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No sick persons rptd",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              if (firstAnswer === "Inside:") {
                return { code: "66A01" };
              } else if (firstAnswer === "Outside:") {
                return { code: "66A02" };
              }
            },
          },
          {
            answer: "Yes - Single",
            display: "Single sick person rptd",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              if (firstAnswer === "Inside:") {
                return { code: "66C01" };
              } else if (firstAnswer === "Outside:") {
                return { code: "66C03" };
              } else {
                return { code: "66B01" };
              }
            },
          },
          {
            answer: "Yes - Multiple:",
            display: "{input} sick persons rptd",
            continue: true,
            input: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              if (firstAnswer === "Inside:") {
                return { code: "66C02" };
              } else if (firstAnswer === "Outside:") {
                return { code: "66C04" };
              } else {
                return { code: "66B01" };
              }
            },
          },
          {
            answer: "Unknown",
            display: "Unk if sick persons",
            continue: true,
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "A",
        determinants: [
          {
            code: "66A01",
            text: "Odor Inside",
            recResponse: 243,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 244,
              },
            ],
          },
          {
            code: "66A02",
            text: "Odor Outside",
            recResponse: 243,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 244,
              },
            ],
          },
          {
            code: "66A03",
            text: "Unkn Situation (Investigation)",
            recResponse: 243,
            defaultCode: true,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 244,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "66B00",
            text: "Override (Bravo)",
            recResponse: 245,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 19,
              },
            ],
          },
          {
            code: "66B01",
            text: "Unkn Situation (Investigation) w/ Sick Person(s)",
            recResponse: 245,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 19,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "66C00",
            text: "Override (Charlie)",
            recResponse: 245,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 19,
              },
            ],
          },
          {
            code: "66C01",
            text: "Odor Inside w/ Single Sick Person",
            recResponse: 245,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 19,
              },
            ],
          },
          {
            code: "66C02",
            text: "Odor Inside w/ Multiple Sick Persons",
            recResponse: 246,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 19,
              },
            ],
          },
          {
            code: "66C03",
            text: "Odor Outside w/ Single Sick Person",
            recResponse: 245,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 19,
              },
            ],
          },
          {
            code: "66C04",
            text: "Odor Outside w/ Multiple Sick Persons",
            recResponse: 246,
            subCodes: [
              {
                code: "H",
                text: "Hazmat",
                recResponse: 19,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 67,
    name: "Outside/Other Fires",
    shortName: "Outside/Other Fires",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: undefined },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 247,
    questions: [
      {
        text: (
          <p>
            What exactly is on <b className="text-red-400">fire</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "General Outside",
            display: "General outside fire",
            continue: true,
          },
          {
            answer: "Trash",
            display: "Trash fire",
            continue: true,
          },
          {
            answer: "Grass/Wildland",
            display: "Grass/wildland fire",
            goto: 82,
          },
          {
            answer: "Elevated Structure",
            display: "Elevated structure fire",
            continue: true,
          },
          {
            answer: "PERSON",
            display: "Person on fire",
            end: true,
            updateCode: "67E01",
          },
          {
            answer: "Extinguished Now",
            display: "Extinguished fire",
            updateCode: "67A01",
            end: true,
          },
          {
            answer: "Illegal Burning",
            display: "Illegal burning",
            continue: true,
            updateCode: "67A02",
          },
          {
            answer: "Unknown",
            display: "Unk type of fire",
            continue: true,
            updateCode: "67B03",
          },
        ],
      },

      {
        text: (
          <p>
            What is the <b>size</b> of the elevated structure?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Elevated Structure";
        },
        answers: [
          {
            answer: "Small",
            display: "Small elevated structure",
            continue: true,
            updateCode: "67C01",
          },
          {
            answer: "Large",
            display: "Large elevated structure",
            continue: true,
            updateCode: "67D01",
          },
          {
            answer: "Unknown",
            display: "Unk size of elevated structure",
            continue: true,
            updateCode: "67D01",
          },
        ],
      },

      {
        text: (
          <p>
            What is the <b>size</b> of the <b className="text-red-400">fire</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer !== "Elevated Structure";
        },
        answers: [
          {
            answer: "Small (< 1 Acre)",
            display: "Small fire (< 1 Acre)",
            continue: true,
            updateCode: "67B01",
          },
          {
            answer: "Large (>= 1 Acre)",
            display: "Large fire (>= 1 Acre)",
            continue: true,
            updateCode: "67D02",
          },
          {
            answer: "Unknown",
            display: "Unk size of fire",
            continue: true,
            updateCode: "67B03",
          },
        ],
      },

      {
        text: (
          <p>
            Are there any <b className="text-green-400">hazardous materials</b>{" "}
            involved?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No hazmat rptd",
            continue: true,
          },
          {
            answer: "Yes:",
            display: "Hazmat involved - {input}",
            continue: true,
            input: true,
            dependency: (answers?: IAnswerData[]) => {
              const answer = answers?.find(
                (a) => a.defaultQuestion === "What is the size of the fire?"
              )?.defaultAnswer;
              if (answer === "Small (< 1 Acre)") {
                return { code: "67B02" };
              } else if (answer === "Large (>= 1 Acre)") {
                return { code: "67D03" };
              }
            },
          },
          {
            answer: "Unknown",
            display: "Unk if hazmat involved",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is anyone <b className="text-red-400">trapped</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No one trapped",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Person(s) rptd trapped",
            continue: true,
            updateSubCode: "T",
          },
          {
            answer: "Unknown",
            display: "Unk if person(s) trapped",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is anyone <b className="text-red-400">threatened</b> or{" "}
            <b className="text-red-400">in danger</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No-one/nothing threatened",
            continue: true,
          },
          {
            answer: "Animals",
            display: "Animals threatened",
            continue: true,
            updateSubCode: "A",
          },
          {
            answer: "Buildings (Non-Residential)",
            display: "Buildings (Non-Residential) threatened",
            continue: true,
            updateSubCode: "B",
          },
          {
            answer: "People",
            display: "People in danger",
            continue: true,
            updateSubCode: "P",
          },
          {
            answer: "Residential",
            display: "Residential threatened",
            continue: true,
            updateSubCode: "R",
          },
          {
            answer: "Other:",
            display: "{input} threatened",
            continue: true,
            input: true,
            updateSubCode: "O",
          },
          {
            answer: "Unknown",
            display: "Unk if anything threatened",
            continue: true,
            updateSubCode: "U",
          },
        ],
      },

      {
        text: (
          <p>
            Is there anyone <b>sick</b> or <b>injured</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No sick/inj'd persons rptd",
            end: true,
          },
          {
            answer: "Yes - Single",
            display: "Single sick/inj'd person rptd",
            end: true,
            updateSubCode: "X",
          },
          {
            answer: "Yes - Multiple:",
            display: "{input} sick/inj'd persons rptd",
            end: true,
            input: true,
            updateSubCode: "Y",
          },
          {
            answer: "Unknown",
            display: "Unk if sick/inj'd persons",
            end: true,
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "A",
        determinants: [
          {
            code: "67A01",
            text: "Extinguished Fire (1st/2nd Party)",
            recResponse: 247,
            subCodes: [
              {
                code: "P",
                text: "People in Danger",
                recResponse: 247,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 247,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 248,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 249,
              },
            ],
          },
          {
            code: "67A02",
            text: "Illegal Burning",
            recResponse: 34,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 247,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 250,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 247,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 247,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 250,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 247,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 247,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 247,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 248,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 249,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "67B00",
            text: "Override (Bravo)",
            recResponse: 247,
            subCodes: [
              {
                code: "P",
                text: "People in Danger",
                recResponse: 247,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 247,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 248,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 249,
              },
            ],
          },
          {
            code: "67B01",
            text: "Small Outside Fire",
            recResponse: 247,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 247,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 250,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 250,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 247,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 250,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 247,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 247,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 247,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 248,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 249,
              },
            ],
          },
          {
            code: "67B02",
            text: "Small Outside Fire w/ Hazardous Materials",
            recResponse: 251,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 251,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 251,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 251,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 251,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 251,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 251,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 251,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 251,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 251,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 251,
              },
            ],
          },
          {
            code: "67B03",
            text: "Unkn Situation (Investigation)",
            recResponse: 209,
            defaultCode: true,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 209,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 209,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 209,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 209,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 209,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 209,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 209,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 209,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 210,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 211,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "67C00",
            text: "Override (Charlie)",
            recResponse: 250,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 250,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 250,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 250,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 250,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 250,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 250,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 250,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 250,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 252,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 249,
              },
            ],
          },
          {
            code: "67C01",
            text: "Small Elevated Structures",
            recResponse: 253,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 253,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 253,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 253,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 253,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 253,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 254,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 253,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 253,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 254,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 255,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "67D00",
            text: "Override (Delta)",
            recResponse: 256,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 256,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 256,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 256,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 256,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 256,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 256,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 256,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 256,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 256,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 256,
              },
            ],
          },
          {
            code: "67D01",
            text: "Large Elevated Structures",
            recResponse: 256,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 256,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 256,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 256,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 256,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 256,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 256,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 256,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 256,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 256,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 256,
              },
            ],
          },
          {
            code: "67D02",
            text: "Large Outside Fire",
            recResponse: 250,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 250,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 250,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 250,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 250,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 250,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 252,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 250,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 250,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 252,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 249,
              },
            ],
          },
          {
            code: "67D03",
            text: "Large Outside Fire w/ Hazardous Materials",
            recResponse: 251,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 251,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 251,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 251,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 251,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 251,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 251,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 251,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 251,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 251,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 251,
              },
            ],
          },
        ],
      },
      {
        priority: "E",
        determinants: [
          {
            code: "67E00",
            text: "Override (Echo)",
            recResponse: 257,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 257,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 257,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 257,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 257,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 257,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 257,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 257,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 257,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 257,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 257,
              },
            ],
          },
          {
            code: "67E01",
            text: "Person on Fire (Outside)",
            recResponse: 258,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 258,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 258,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 258,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 258,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 258,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 258,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 258,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 258,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 258,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 258,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 68,
    name: "Smoke Investigation (Outside)",
    shortName: "Smoke Investigation (Outside)",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: undefined },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 259,
    questions: [
      {
        text: (
          <p>
            Can you see <b>smoke</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No smoke rptd",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Smoke rptd",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if smoke",
            continue: true,
            updateCode: "68A03",
          },
        ],
      },

      {
        text: (
          <p>
            Is there an <b>odor</b> of smoke?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "No";
        },
        answers: [
          {
            answer: "No",
            display: "No odor of smoke rptd",
            continue: true,
            updateCode: "68A03",
          },
          {
            answer: "Yes",
            display: "Odor of smoke rptd",
            continue: true,
            updateCode: "68A02",
          },
          {
            answer: "Unknown",
            display: "Unk if odor of smoke",
            continue: true,
            updateCode: "68A03",
          },
        ],
      },

      {
        text: (
          <p>
            Where is the <b>odor</b> coming from?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const targetAnswer = answers?.find(
            (a) => a.defaultQuestion === "Is there an odor of smoke?"
          )?.defaultAnswer;
          return targetAnswer === "Yes";
        },
        answers: [
          {
            answer: "Outside:",
            display: "Odor coming from {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Structure",
            display: "Odor coming from structure",
            goto: 69,
          },
          {
            answer: "Unknown",
            display: "Unk where odor is coming from",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Where is the <b>smoke</b> coming from?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Yes";
        },
        answers: [
          {
            answer: "Outside:",
            display: "Smoke is coming from {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Structure",
            display: "Smoke coming from structure",
            goto: 69,
          },
          {
            answer: "Unknown",
            display: "Unk where smoke is coming from",
            continue: true,
            updateCode: "68A03",
          },
        ],
      },

      {
        text: (
          <p>
            Is there any <b className="text-red-400">flames</b> visible?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return firstAnswer === "Yes" && lastAnswer === "Outside:";
        },
        answers: [
          {
            answer: "No",
            display: "No flames visible",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Flames visible",
            goto: 67,
          },
          {
            answer: "Unknown",
            display: "Unk if flames visible",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Are <b>you</b> able to see <b>through</b> the smoke?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Yes";
        },
        answers: [
          {
            answer: "Yes",
            display: "Light smoke rptd",
            continue: true,
            updateCode: "68A01",
          },
          {
            answer: "No",
            display: "Heavy smoke rptd",
            continue: true,
            updateCode: "68C01",
          },
          {
            answer: "Unknown",
            display: "Unk type of smoke",
            continue: true,
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "A",
        determinants: [
          {
            code: "68A01",
            text: "Light Smoke",
            recResponse: 259,
          },
          {
            code: "68A02",
            text: "Odor of Smoke",
            recResponse: 259,
          },
          {
            code: "68A03",
            text: "Unkn Situation (Investigation)",
            defaultCode: true,
            recResponse: 259,
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "68C00",
            text: "Override (Charlie)",
            recResponse: 260,
          },
          {
            code: "68C01",
            text: "Heavy Smoke",
            recResponse: 260,
          },
        ],
      },
    ],
  },
  {
    protocol: 69,
    name: "Structure Fire",
    shortName: "Structure Fire",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: true },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 1,
    defaultPlan: 261,
    questions: [
      {
        text: (
          <p>
            Are you <b>at that location now</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes (1st party)",
            display: "Caller is on scene (1st pty)",
            continue: true,
          },
          {
            answer: "Yes (2nd party)",
            display: "Caller is on scene (2nd pty)",
            continue: true,
          },
          {
            answer: "No",
            display: "Caller is not on scene",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Do you see <b>flames</b> or <b>smoke</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No (Odor of smoke)",
            display: "Odor of smoke only",
            continue: true,
            updateSubCode: "O",
          },
          {
            answer: "Flames",
            display: "Flames are visible",
            continue: true,
          },
          {
            answer: "Smoke",
            display: "Smoke is visible",
            continue: true,
          },
          {
            answer: "Both",
            display: "Flames and smoke are visible",
            continue: true,
          },
          {
            answer: "Extinguished Fire",
            display: "Fire rptd extinguished",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              if (firstAnswer === "No") return undefined;
              return { subCode: "E" };
            },
          },
          {
            answer: "LIGHT smoke",
            display: "Light smoke rptd",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              if (firstAnswer !== "Yes (1st party)") return undefined;
              return { subCode: "K" };
            },
          },
          {
            answer: "Burned food",
            display: "Burned food rptd",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              if (firstAnswer === "No") return undefined;
              return { subCode: "F" };
            },
          },
        ],
      },

      {
        text: (
          <p>
            What <b>type</b> of <b>building</b> is involved?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Chimney",
            display: "Chimney fire",
            continue: true,
            updateSubCode: "C",
          },
          {
            answer: "Appliance (contained)",
            display: "Appliance fire (contained)",
            continue: true,
            updateSubCode: "A",
          },
          {
            answer: "Commercial/Industrial building",
            display: "Involves commercial/industrial bldg",
            continue: true,
            updateCode: "69D03",
          },
          {
            answer: "HIGH RISE",
            display: "Involves high rise bldg",
            continue: true,
            updateCode: "69D02",
          },
          {
            answer: "HIGH LIFE HAZARD",
            display: "Involves high life hazard bldg",
            continue: true,
            updateCode: "69D01",
          },
          {
            answer: "Large NON-DWELLING (barn, storage building):",
            display: "{input} on fire",
            continue: true,
            input: true,
            updateCode: "69D07",
          },
          {
            answer: "Small NON-DWELLING (shed, garage):",
            display: "{input} on fire",
            continue: true,
            input: true,
            updateCode: "69D08",
          },
          {
            answer: "Mixed-use building",
            display: "Involves mixed-use bldg",
            continue: true,
            updateCode: "69D11",
          },
          {
            answer: "Residential (multiple)",
            display: "Involves multi-family residential bldg",
            continue: true,
            updateCode: "69D05",
          },
          {
            answer: "Residential (single)",
            display: "Involves single-family residential bldg",
            continue: true,
            updateCode: "69D06",
          },
          {
            answer: "Mobile home",
            display: "Involves mobile home",
            continue: true,
            updateCode: "69D09",
          },
          {
            answer: "House trailer",
            display: "Involves house trailer",
            continue: true,
            updateCode: "69D09",
          },
          {
            answer: "Portable office",
            display: "Involves portable office",
            continue: true,
            updateCode: "69D09",
          },
          {
            answer: "Parking garage",
            display: "Involves parking garage",
            continue: true,
            updateCode: "69D12",
          },
          {
            answer: "Unknown",
            display: "Unk type of bldg",
            continue: true,
            updateCode: "69D13",
          },
        ],
      },

      {
        text: (
          <p>
            How many <b>floors</b> or <b>stories</b> are there?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Single level",
            display: "Bldg is 1 story",
            continue: true,
          },
          {
            answer: "> 7 stories:",
            display: "Bldg has {input} stories",
            continue: true,
            updateCode: "69D02",
          },
          {
            answer: "3-7 stories:",
            display: "Bldg has {input} stories",
            input: true,
            continue: true,
          },
          {
            answer: "Doesn't know",
            display: "Unk number of stories",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is <b>anyone trapped</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No one rptd to be trapped",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Person(s) rptd trapped",
            continue: true,
            updateSubCode: "R",
          },
          {
            answer: "Unknown",
            display: "Unk if person(s) trapped",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is <b>anyone injured</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No injs rptd",
            end: true,
          },
          {
            answer: "Yes - Single",
            display: "Single inj'd person rptd",
            end: true,
            updateSubCode: "X",
          },
          {
            answer: "Yes - Multiple:",
            display: "{input} inj'd persons rptd",
            end: true,
            input: true,
            updateSubCode: "Y",
          },
          {
            answer: "Unknown",
            display: "Unk if inj'd persons",
            end: true,
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "D",
        determinants: [
          {
            code: "69D01",
            text: "High Life Hazard",
            recResponse: 233,
            subCodes: [
              {
                code: "A",
                text: "Appliance (Contained)",
                recResponse: 261,
              },
              {
                code: "C",
                text: "Chimney",
                recResponse: 262,
              },
              {
                code: "E",
                text: "Extinguished Fire (1st/2nd Party)",
                recResponse: 263,
              },
              {
                code: "F",
                text: "Burned Food (1st Pty)",
                recResponse: 263,
              },
              {
                code: "K",
                text: "Light Smoke (1st Pty)",
                recResponse: 264,
              },
              {
                code: "L",
                text: "Electrical Problem",
                recResponse: 265,
              },
              {
                code: "O",
                text: "Odor of Smoke",
                recResponse: 266,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 267,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 268,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 269,
              },
            ],
          },
          {
            code: "69D02",
            text: "High Rise",
            recResponse: 270,
            subCodes: [
              {
                code: "A",
                text: "Appliance (Contained)",
                recResponse: 261,
              },
              {
                code: "C",
                text: "Chimney",
                recResponse: 262,
              },
              {
                code: "E",
                text: "Extinguished Fire (1st/2nd Party)",
                recResponse: 263,
              },
              {
                code: "F",
                text: "Burned Food (1st Pty)",
                recResponse: 263,
              },
              {
                code: "K",
                text: "Light Smoke (1st Pty)",
                recResponse: 270,
              },
              {
                code: "L",
                text: "Electrical Problem",
                recResponse: 265,
              },
              {
                code: "O",
                text: "Odor of Smoke",
                recResponse: 266,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 271,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 272,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 273,
              },
            ],
          },
          {
            code: "69D03",
            text: "Comm/Ind Building",
            recResponse: 274,
            subCodes: [
              {
                code: "A",
                text: "Appliance (Contained)",
                recResponse: 261,
              },
              {
                code: "C",
                text: "Chimney",
                recResponse: 262,
              },
              {
                code: "E",
                text: "Extinguished Fire (1st/2nd Party)",
                recResponse: 263,
              },
              {
                code: "F",
                text: "Burned Food (1st Pty)",
                recResponse: 263,
              },
              {
                code: "K",
                text: "Light Smoke (1st Pty)",
                recResponse: 264,
              },
              {
                code: "L",
                text: "Electrical Problem",
                recResponse: 265,
              },
              {
                code: "O",
                text: "Odor of Smoke",
                recResponse: 266,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 275,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 276,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 277,
              },
            ],
          },
          {
            code: "69D04",
            text: "Comm/Ind Building w/ Hazardous Materials",
            recResponse: 278,
            subCodes: [
              {
                code: "A",
                text: "Appliance (Contained)",
                recResponse: 279,
              },
              {
                code: "C",
                text: "Chimney",
                recResponse: 278,
              },
              {
                code: "E",
                text: "Extinguished Fire (1st/2nd Party)",
                recResponse: 280,
              },
              {
                code: "F",
                text: "Burned Food (1st Pty)",
                recResponse: 280,
              },
              {
                code: "K",
                text: "Light Smoke (1st Pty)",
                recResponse: 19,
              },
              {
                code: "L",
                text: "Electrical Problem",
                recResponse: 281,
              },
              {
                code: "O",
                text: "Odor of Smoke",
                recResponse: 19,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 282,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 283,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 284,
              },
            ],
          },
          {
            code: "69D05",
            text: "Residential (Mult)",
            recResponse: 285,
            subCodes: [
              {
                code: "A",
                text: "Appliance (Contained)",
                recResponse: 261,
              },
              {
                code: "C",
                text: "Chimney",
                recResponse: 262,
              },
              {
                code: "E",
                text: "Extinguished Fire (1st/2nd Party)",
                recResponse: 263,
              },
              {
                code: "F",
                text: "Burned Food (1st Pty)",
                recResponse: 263,
              },
              {
                code: "K",
                text: "Light Smoke (1st Pty)",
                recResponse: 264,
              },
              {
                code: "L",
                text: "Electrical Problem",
                recResponse: 265,
              },
              {
                code: "O",
                text: "Odor of Smoke",
                recResponse: 266,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 286,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 287,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 288,
              },
            ],
          },
          {
            code: "69D06",
            text: "Residential (Single)",
            recResponse: 289,
            subCodes: [
              {
                code: "A",
                text: "Appliance (Contained)",
                recResponse: 261,
              },
              {
                code: "C",
                text: "Chimney",
                recResponse: 262,
              },
              {
                code: "E",
                text: "Extinguished Fire (1st/2nd Party)",
                recResponse: 263,
              },
              {
                code: "F",
                text: "Burned Food (1st Pty)",
                recResponse: 263,
              },
              {
                code: "K",
                text: "Light Smoke (1st Pty)",
                recResponse: 264,
              },
              {
                code: "L",
                text: "Electrical Problem",
                recResponse: 265,
              },
              {
                code: "O",
                text: "Odor of Smoke",
                recResponse: 266,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 290,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 291,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 292,
              },
            ],
          },
          {
            code: "69D07",
            text: "Large Non-Dwelling Building/Structure",
            recResponse: 293,
            subCodes: [
              {
                code: "A",
                text: "Appliance (Contained)",
                recResponse: 261,
              },
              {
                code: "C",
                text: "Chimney",
                recResponse: 262,
              },
              {
                code: "E",
                text: "Extinguished Fire (1st/2nd Party)",
                recResponse: 263,
              },
              {
                code: "F",
                text: "Burned Food (1st Pty)",
                recResponse: 263,
              },
              {
                code: "K",
                text: "Light Smoke (1st Pty)",
                recResponse: 264,
              },
              {
                code: "L",
                text: "Electrical Problem",
                recResponse: 265,
              },
              {
                code: "O",
                text: "Odor of Smoke",
                recResponse: 266,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 294,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 295,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 296,
              },
            ],
          },
          {
            code: "69D08",
            text: "Small Non-Dwelling Building/Structure",
            recResponse: 297,
            subCodes: [
              {
                code: "A",
                text: "Appliance (Contained)",
                recResponse: 261,
              },
              {
                code: "C",
                text: "Chimney",
                recResponse: 262,
              },
              {
                code: "E",
                text: "Extinguished Fire (1st/2nd Party)",
                recResponse: 263,
              },
              {
                code: "F",
                text: "Burned Food (1st Pty)",
                recResponse: 263,
              },
              {
                code: "K",
                text: "Light Smoke (1st Pty)",
                recResponse: 264,
              },
              {
                code: "L",
                text: "Electrical Problem",
                recResponse: 265,
              },
              {
                code: "O",
                text: "Odor of Smoke",
                recResponse: 266,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 298,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 299,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 300,
              },
            ],
          },
          {
            code: "69D09",
            text: "Mobile Home, House Trailer, or Portable Office",
            recResponse: 297,
            subCodes: [
              {
                code: "A",
                text: "Appliance (Contained)",
                recResponse: 261,
              },
              {
                code: "C",
                text: "Chimney",
                recResponse: 262,
              },
              {
                code: "E",
                text: "Extinguished Fire (1st/2nd Party)",
                recResponse: 263,
              },
              {
                code: "F",
                text: "Burned Food (1st Pty)",
                recResponse: 263,
              },
              {
                code: "K",
                text: "Light Smoke (1st Pty)",
                recResponse: 264,
              },
              {
                code: "L",
                text: "Electrical Problem",
                recResponse: 265,
              },
              {
                code: "O",
                text: "Odor of Smoke",
                recResponse: 266,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 298,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 299,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 300,
              },
            ],
          },
          {
            code: "69D10",
            text: "Building/Structure Over Water",
            recResponse: 301,
            subCodes: [
              {
                code: "A",
                text: "Appliance (Contained)",
                recResponse: 302,
              },
              {
                code: "C",
                text: "Chimney",
                recResponse: 303,
              },
              {
                code: "E",
                text: "Extinguished Fire (1st/2nd Party)",
                recResponse: 304,
              },
              {
                code: "F",
                text: "Burned Food (1st Pty)",
                recResponse: 304,
              },
              {
                code: "K",
                text: "Light Smoke (1st Pty)",
                recResponse: 264,
              },
              {
                code: "L",
                text: "Electrical Problem",
                recResponse: 305,
              },
              {
                code: "O",
                text: "Odor of Smoke",
                recResponse: 266,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 306,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 307,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 308,
              },
            ],
          },
          {
            code: "69D11",
            text: "Mixed-Use Occupancy Building",
            recResponse: 309,
            subCodes: [
              {
                code: "A",
                text: "Appliance (Contained)",
                recResponse: 261,
              },
              {
                code: "C",
                text: "Chimney",
                recResponse: 262,
              },
              {
                code: "E",
                text: "Extinguished Fire (1st/2nd Party)",
                recResponse: 263,
              },
              {
                code: "F",
                text: "Burned Food (1st Pty)",
                recResponse: 263,
              },
              {
                code: "K",
                text: "Light Smoke (1st Pty)",
                recResponse: 264,
              },
              {
                code: "L",
                text: "Electrical Problem",
                recResponse: 265,
              },
              {
                code: "O",
                text: "Odor of Smoke",
                recResponse: 266,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 310,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 311,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 312,
              },
            ],
          },
          {
            code: "69D12",
            text: "Parking Garage",
            recResponse: 313,
            subCodes: [
              {
                code: "A",
                text: "Appliance (Contained)",
                recResponse: 261,
              },
              {
                code: "C",
                text: "Chimney",
                recResponse: 262,
              },
              {
                code: "E",
                text: "Extinguished Fire (1st/2nd Party)",
                recResponse: 263,
              },
              {
                code: "F",
                text: "Burned Food (1st Pty)",
                recResponse: 263,
              },
              {
                code: "K",
                text: "Light Smoke (1st Pty)",
                recResponse: 264,
              },
              {
                code: "L",
                text: "Electrical Problem",
                recResponse: 265,
              },
              {
                code: "O",
                text: "Odor of Smoke",
                recResponse: 266,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 314,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 315,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 316,
              },
            ],
          },
          {
            code: "69D13",
            text: "Unkn Structure Type",
            recResponse: 233,
            subCodes: [
              {
                code: "A",
                text: "Appliance (Contained)",
                recResponse: 261,
              },
              {
                code: "C",
                text: "Chimney",
                recResponse: 262,
              },
              {
                code: "E",
                text: "Extinguished Fire (1st/2nd Party)",
                recResponse: 263,
              },
              {
                code: "F",
                text: "Burned Food (1st Pty)",
                recResponse: 263,
              },
              {
                code: "K",
                text: "Light Smoke (1st Pty)",
                recResponse: 264,
              },
              {
                code: "L",
                text: "Electrical Problem",
                recResponse: 265,
              },
              {
                code: "O",
                text: "Odor of Smoke",
                recResponse: 266,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 267,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 268,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 269,
              },
            ],
          },
        ],
      },
      {
        priority: "E",
        determinants: [
          {
            code: "69E00",
            text: "Override (Echo)",
            recResponse: 233,
            subCodes: [
              {
                code: "A",
                text: "Appliance (Contained)",
                recResponse: 233,
              },
              {
                code: "C",
                text: "Chimney",
                recResponse: 233,
              },
              {
                code: "E",
                text: "Extinguished Fire (1st/2nd Party)",
                recResponse: 233,
              },
              {
                code: "F",
                text: "Burned Food (1st Pty)",
                recResponse: 233,
              },
              {
                code: "K",
                text: "Light Smoke (1st Pty)",
                recResponse: 233,
              },
              {
                code: "L",
                text: "Electrical Problem",
                recResponse: 233,
              },
              {
                code: "O",
                text: "Odor of Smoke",
                recResponse: 233,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 267,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 268,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 269,
              },
            ],
          },
          {
            code: "69E01",
            text: "High Life Hazard",
            recResponse: 233,
            subCodes: [
              {
                code: "P",
                text: "Person on Fire (Inside)",
                recResponse: 258,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 267,
              },
              {
                code: "T",
                text: "Trapped Person(s) (Inside)",
                recResponse: 317,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 268,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 269,
              },
            ],
          },
          {
            code: "69E02",
            text: "High Rise",
            recResponse: 270,
            subCodes: [
              {
                code: "P",
                text: "Person on Fire (Inside)",
                recResponse: 258,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 271,
              },
              {
                code: "T",
                text: "Trapped Person(s) (Inside)",
                recResponse: 318,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 272,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 273,
              },
            ],
          },
          {
            code: "69E03",
            text: "Comm/Ind Building",
            recResponse: 274,
            subCodes: [
              {
                code: "P",
                text: "Person on Fire (Inside)",
                recResponse: 258,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 275,
              },
              {
                code: "T",
                text: "Trapped Person(s) (Inside)",
                recResponse: 319,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 276,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 277,
              },
            ],
          },
          {
            code: "69E04",
            text: "Comm/Ind Building w/ Hazardous Materials",
            recResponse: 320,
            subCodes: [
              {
                code: "P",
                text: "Person on Fire (Inside)",
                recResponse: 321,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 322,
              },
              {
                code: "T",
                text: "Trapped Person(s) (Inside)",
                recResponse: 323,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 324,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 325,
              },
            ],
          },
          {
            code: "69E05",
            text: "Residential (Mult)",
            recResponse: 285,
            subCodes: [
              {
                code: "P",
                text: "Person on Fire (Inside)",
                recResponse: 258,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 286,
              },
              {
                code: "T",
                text: "Trapped Person(s) (Inside)",
                recResponse: 326,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 287,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 288,
              },
            ],
          },
          {
            code: "69E06",
            text: "Residential (Single)",
            recResponse: 289,
            subCodes: [
              {
                code: "P",
                text: "Person on Fire (Inside)",
                recResponse: 258,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 290,
              },
              {
                code: "T",
                text: "Trapped Person(s) (Inside)",
                recResponse: 327,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 291,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 292,
              },
            ],
          },
          {
            code: "69E07",
            text: "Large Non-Dwelling Building/Structure",
            recResponse: 293,
            subCodes: [
              {
                code: "P",
                text: "Person on Fire (Inside)",
                recResponse: 258,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 294,
              },
              {
                code: "T",
                text: "Trapped Person(s) (Inside)",
                recResponse: 328,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 295,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 296,
              },
            ],
          },
          {
            code: "69E08",
            text: "Small Non-Dwelling Building/Structure",
            recResponse: 297,
            subCodes: [
              {
                code: "P",
                text: "Person on Fire (Inside)",
                recResponse: 258,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 298,
              },
              {
                code: "T",
                text: "Trapped Person(s) (Inside)",
                recResponse: 329,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 299,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 300,
              },
            ],
          },
          {
            code: "69E09",
            text: "Mobile Home, House Trailer, or Portable Office",
            recResponse: 297,
            subCodes: [
              {
                code: "P",
                text: "Person on Fire (Inside)",
                recResponse: 258,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 298,
              },
              {
                code: "T",
                text: "Trapped Person(s) (Inside)",
                recResponse: 329,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 299,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 300,
              },
            ],
          },
          {
            code: "69E10",
            text: "Building/Structure Over Water",
            recResponse: 301,
            subCodes: [
              {
                code: "P",
                text: "Person on Fire (Inside)",
                recResponse: 330,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 306,
              },
              {
                code: "T",
                text: "Trapped Person(s) (Inside)",
                recResponse: 331,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 307,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 308,
              },
            ],
          },
          {
            code: "69E11",
            text: "Mixed-Use Occupancy Building",
            recResponse: 309,
            subCodes: [
              {
                code: "P",
                text: "Person on Fire (Inside)",
                recResponse: 258,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 310,
              },
              {
                code: "T",
                text: "Trapped Person(s) (Inside)",
                recResponse: 332,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 311,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 312,
              },
            ],
          },
          {
            code: "69E12",
            text: "Parking Garage",
            recResponse: 313,
            subCodes: [
              {
                code: "P",
                text: "Person on Fire (Inside)",
                recResponse: 258,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 314,
              },
              {
                code: "T",
                text: "Trapped Person(s) (Inside)",
                recResponse: 333,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 315,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 316,
              },
            ],
          },
          {
            code: "69E13",
            text: "Unkn Building/Structure Type",
            recResponse: 233,
            subCodes: [
              {
                code: "P",
                text: "Person on Fire (Inside)",
                recResponse: 258,
              },
              {
                code: "R",
                text: "Trapped Person(s)",
                recResponse: 267,
              },
              {
                code: "T",
                text: "Trapped Person(s) (Inside)",
                recResponse: 317,
              },
              {
                code: "X",
                text: "Single Injured Person",
                recResponse: 268,
              },
              {
                code: "Y",
                text: "Mult Injured Persons",
                recResponse: 269,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 70,
    name: "Train & Rail Collision/Derailment",
    shortName: "Train & Rail Collision/Derailment",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: true },
      { name: "Police", priority: 1 },
    ],
    defaultPriority: 2,
    defaultPlan: 334,
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
            answer: "Vehicle on tracks",
            display: "A vehicle is on the tracks",
            continue: true,
          },
          {
            answer: "Stranded on train",
            display: "A person is stranded on a train",
            continue: true,
            updateCode: "70C04",
          },
          {
            answer: "Collision/Derailment",
            display: "There is a collision or derailment",
            continue: true,
          },
          {
            answer: "Unknown situation",
            display: "Unk situation (investigation required)",
            continue: true,
            updateCode: "70C05",
          },
        ],
      },

      {
        text: (
          <p>
            What <b>type</b> of <b>vehicle</b> is on <b>the tracks</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Vehicle on tracks";
        },
        answers: [
          {
            answer: "Large fuel/fire load vehicle",
            display: "Large fuel/fire load vehicle on tracks",
            continue: true,
            updateCode: "70C01",
          },
          {
            answer: "Commercial vehicle",
            display: "Commercial vehicle on tracks",
            continue: true,
            updateCode: "70C02",
          },
          {
            answer: "Other vehicle:",
            display: "{input} on tracks",
            continue: true,
            updateCode: "70C03",
          },
          {
            answer: "Unknown vehicle",
            display: "Unknown vehicle on tracks",
            continue: true,
            updateCode: "70C03",
          },
        ],
      },

      {
        text: (
          <p>
            Can you <b>describe</b> the <b>vehicle</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return (
            firstAnswer === "Vehicle on tracks" &&
            lastAnswer !== "Unknown vehicle"
          );
        },
        answers: [
          {
            answer: "Description:",
            display: "Vehicle description is {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown vehicle description",
            display: "Unk vehcile description",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            What did the train <b>hit</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Collision/Derailment";
        },
        answers: [
          {
            answer: "Pedestrian(s)",
            display: "Train hit a pedestrian",
            continue: true,
            override: true,
            updateCode: "70D01",
          },
          {
            answer: "Structure/Building",
            display: "Train hit a structure/building",
            continue: true,
            override: true,
            updateCode: "70D02",
          },
          {
            answer: "Vehicle(s)",
            display: "Train hit vehicle(s)",
            continue: true,
            override: true,
            updateCode: "70D03",
          },
          {
            answer: "Other Ttain(s)",
            display: "Train hit other train(s)",
            continue: true,
            override: true,
            updateCode: "70D03",
          },
          {
            answer: "Derailment only",
            display: "Derailment only",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk what the train hit",
            continue: true,
            updateCode: "70C05",
          },
        ],
      },

      {
        text: <p>Where did the incident occur?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Collision/Derailment";
        },
        answers: [
          {
            answer: "At ground level",
            display: "Occurred at ground level",
            continue: true,
            updateCode: "70D06",
          },
          {
            answer: "Below ground level",
            display: "Occurred below ground level",
            continue: true,
            updateCode: "70D04",
          },
          {
            answer: "Above ground level",
            display: "Occurred above ground level",
            continue: true,
            updateCode: "70D05",
          },
          {
            answer: "In a tunnel",
            display: "Occurred in a tunnel",
            continue: true,
            updateCode: "70D07",
          },
          {
            answer: "Bridge/Trestle",
            display: "Occurred on a bridge/trestle",
            continue: true,
            updateCode: "70D08",
          },
          {
            answer: "Into/Over water",
            display: "Occurred into/over water",
            continue: true,
            updateCode: "70D09",
          },
          {
            answer: "Unknown location",
            display: "Unk location",
            continue: true,
            updateCode: "70C05",
          },
        ],
      },

      {
        text: (
          <p>
            What type of <b>train</b> or <b>rail</b> vehicle is involved?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Cable car",
            display: "Cable car involved",
            end: true,
            updateSubCode: "C",
          },
          {
            answer: "Freight train",
            display: "Freight train involved",
            end: true,
            updateSubCode: "F",
          },
          {
            answer: "Light rail",
            display: "Light rail involved",
            end: true,
            updateSubCode: "L",
          },
          {
            answer: "Monorail",
            display: "Monorail involved",
            end: true,
            updateSubCode: "M",
          },
          {
            answer: "Passenger (commuter) train",
            display: "Passenger (commuter) train involved",
            end: true,
            updateSubCode: "P",
          },
          {
            answer: "Subway",
            display: "Subway involved",
            end: true,
            updateSubCode: "S",
          },
          {
            answer: "Trolley/streetcar",
            display: "Trolley/streetcar involved",
            end: true,
            updateSubCode: "T",
          },
          {
            answer: "Other:",
            display: "{input} involved",
            end: true,
            input: true,
            updateSubCode: "O",
          },
          {
            answer: "Unknown",
            display: "Unk train/rail vehicle involved",
            end: true,
            updateSubCode: "U",
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "C",
        determinants: [
          {
            code: "70C01",
            text: "Large Fuel/Fire Load Vehicle on Tracks",
            recResponse: 334,
            subCodes: [
              {
                code: "C",
                text: "Cabe Car",
                recResponse: 334,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 334,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 334,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 334,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 334,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 334,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 334,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 334,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 334,
              },
            ],
          },
          {
            code: "70C02",
            text: "Comm Vehicle on Tracks",
            recResponse: 334,
            subCodes: [
              {
                code: "C",
                text: "Cabe Car",
                recResponse: 334,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 334,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 334,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 334,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 334,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 334,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 334,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 334,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 334,
              },
            ],
          },
          {
            code: "70C03",
            text: "Other Vehicle on Tracks",
            recResponse: 334,
            subCodes: [
              {
                code: "C",
                text: "Cabe Car",
                recResponse: 334,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 334,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 334,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 334,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 334,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 334,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 334,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 334,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 334,
              },
            ],
          },
          {
            code: "70C04",
            text: "Stranded on Train",
            recResponse: 334,
            subCodes: [
              {
                code: "C",
                text: "Cabe Car",
                recResponse: 334,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 334,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 334,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 334,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 334,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 334,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 334,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 334,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 334,
              },
            ],
          },
          {
            code: "70C05",
            text: "Unkn Situation (Investigation)",
            recResponse: 334,
            defaultCode: true,
            subCodes: [
              {
                code: "C",
                text: "Cabe Car",
                recResponse: 334,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 334,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 334,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 334,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 334,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 334,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 334,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 334,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 334,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "70D00",
            text: "Override (Delta)",
            recResponse: 336,
            subCodes: [
              {
                code: "C",
                text: "Cabe Car",
                recResponse: 336,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 336,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 336,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 336,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 336,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 336,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 335,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 336,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 336,
              },
            ],
          },
          {
            code: "70D01",
            text: "Person Trapped/Struck by Train (No Collision/Derailment)",
            recResponse: 337,
            subCodes: [
              {
                code: "C",
                text: "Cabe Car",
                recResponse: 337,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 337,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 337,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 337,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 337,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 337,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 335,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 337,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 337,
              },
            ],
          },
          {
            code: "70D02",
            text: "Collision/Derailment Involving Buildings/Structures",
            recResponse: 336,
            subCodes: [
              {
                code: "C",
                text: "Cabe Car",
                recResponse: 336,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 336,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 336,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 336,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 336,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 336,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 335,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 336,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 336,
              },
            ],
          },
          {
            code: "70D03",
            text: "Collision/Derailment Involving Vehicles",
            recResponse: 336,
            subCodes: [
              {
                code: "C",
                text: "Cabe Car",
                recResponse: 336,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 336,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 336,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 336,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 336,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 336,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 335,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 336,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 336,
              },
            ],
          },
          {
            code: "70D04",
            text: "Collision/Derailment Below Ground Level",
            recResponse: 336,
            subCodes: [
              {
                code: "C",
                text: "Cabe Car",
                recResponse: 336,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 336,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 336,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 336,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 336,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 336,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 335,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 336,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 336,
              },
            ],
          },
          {
            code: "70D05",
            text: "Collision/Derailment Above Ground Level",
            recResponse: 336,
            subCodes: [
              {
                code: "C",
                text: "Cabe Car",
                recResponse: 336,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 336,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 336,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 336,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 336,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 336,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 335,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 336,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 336,
              },
            ],
          },
          {
            code: "70D06",
            text: "Collision/Derailment at Ground Level",
            recResponse: 336,
            subCodes: [
              {
                code: "C",
                text: "Cabe Car",
                recResponse: 336,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 336,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 336,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 336,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 336,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 336,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 335,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 336,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 336,
              },
            ],
          },
          {
            code: "70D07",
            text: "Collision/Derailment in Tunnel",
            recResponse: 336,
            subCodes: [
              {
                code: "C",
                text: "Cabe Car",
                recResponse: 336,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 336,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 336,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 336,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 336,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 336,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 335,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 336,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 336,
              },
            ],
          },
          {
            code: "70D08",
            text: "Collision/Derailment on Bridge/Trestle",
            recResponse: 336,
            subCodes: [
              {
                code: "C",
                text: "Cabe Car",
                recResponse: 336,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 336,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 336,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 336,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 336,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 336,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 335,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 336,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 336,
              },
            ],
          },
          {
            code: "70D09",
            text: "Collision/Derailment into/over Water",
            recResponse: 336,
            subCodes: [
              {
                code: "C",
                text: "Cabe Car",
                recResponse: 336,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 336,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 336,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 336,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 336,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 336,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 335,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 336,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 336,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 71,
    name: "Vehicle Fire",
    shortName: "Vehicle Fire",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: true },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 338,
    questions: [
      {
        text: (
          <p>
            <b className="text-blue-400">(Appropriate)</b> Is the vehicle{" "}
            <b>still</b> on <b className="text-red-400">fire</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Vehicle is on fire",
            continue: true,
          },
          {
            answer: "No - Extinguished",
            display: "Vehicle rptd extinguished",
            continue: true,
            updateCode: "71A01",
          },
          {
            answer: "Unknown",
            display: "Unk if vehicle is on fire",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            What type of <b>vehicle</b> is on <b>involved</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Passenger vehicle",
            display: "Passenger vehicle rptd",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              if (firstAnswer !== "No") {
                return { code: "71B01" };
              } else if (firstAnswer === "No") {
                return { code: "71A01" };
              }
            },
          },
          {
            answer: "Commercial Vehicle",
            display: "Commercial vehicle rptd",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              if (firstAnswer !== "No") {
                return { code: "71D04" };
              } else if (firstAnswer === "No") {
                return { code: "71B03" };
              }
            },
          },
          {
            answer: "Large Fuel/Fire Load Vehicle",
            display: "Large fuel/fire load vehicle rptd",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              if (firstAnswer !== "No") {
                return { code: "71D05" };
              } else if (firstAnswer === "No") {
                return { code: "71B04" };
              }
            },
          },
          {
            answer: "Agricultural Vehicle",
            display: "Agricultural vehicle rptd",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              if (firstAnswer !== "No") {
                return { code: "71D06" };
              } else if (firstAnswer === "No") {
                return { code: "71B05" };
              }
            },
          },
          {
            answer: "Construction Vehicle",
            display: "Construction vehicle rptd",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              if (firstAnswer !== "No") {
                return { code: "71D06" };
              } else if (firstAnswer === "No") {
                return { code: "71B05" };
              }
            },
          },
          {
            answer: "Delivery Vehicle",
            display: "Delivery vehicle rptd",
            continue: true,
            updateCode: "71C03",
          },
          {
            answer: "Electric Vehicle",
            display: "Electric vehicle rptd",
            continue: true,
            updateCode: "71C02",
          },
          {
            answer: "Motorcycle",
            display: "Motorcycle rptd",
            continue: true,
            updateCode: "71B02",
          },
          {
            answer: "Scooter",
            display: "Scooter rptd",
            continue: true,
            updateCode: "71B02",
          },
          {
            answer: "ATV",
            display: "ATV rptd",
            continue: true,
            updateCode: "71B02",
          },
          {
            answer: "Other:",
            display: "{input} rptd",
            continue: true,
            input: true,
            updateCode: "71B01",
          },
          {
            answer: "Unknown",
            display: "Unk vehicle rptd",
            continue: true,
            updateCode: "71B01",
          },
        ],
      },

      {
        text: (
          <p>
            How many <b>vehicles</b> are <b>involved</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Single Vehicle",
            display: "Single vehicle involved",
            continue: true,
          },
          {
            answer: "Multiple:",
            display: "{input} vehicles involved",
            continue: true,
            updateCode: "71D02",
          },
          {
            answer: "Unknown",
            display: "Unk number of vehicles involved",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is anyone <b className="text-red-400">trapped</b> in the vehicle?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No one rptd trapped",
            continue: true,
          },
          {
            answer: "Yes - Single Person",
            display: "Single person rptd trapped",
            continue: true,
            updateCode: "71E01",
          },
          {
            answer: "Yes - Multiple Persons:",
            display: "{input} persons rptd trapped",
            continue: true,
            updateCode: "71E01",
          },
          {
            answer: "Yes - Unknown (Suspected)",
            display: "Person(s) rptd trapped",
            continue: true,
            updateCode: "71D01",
          },
          {
            answer: "Unknown",
            display: "Unk if person(s) trapped",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is the <b>incident</b> inside a <b>tunnel</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "Incident not in a tunnel",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Incident in a tunnel",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const targetAnswer = answers?.find(
                (a) => a.defaultQuestion === "How many vehicles are involved?"
              )?.defaultAnswer;
              if (targetAnswer === "Single Vehicle") {
                return { code: "71D07" };
              } else if (targetAnswer === "Multiple:") {
                return { code: "71D08" };
              }
            },
          },
          {
            answer: "Unknown",
            display: "Unk if incident in a tunnel",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is the <b>fire</b> <b className="text-red-400">threatening</b>{" "}
            anything?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "Fire not rpdt threatening anything",
            continue: true,
          },
          {
            answer: "Non-Structure Object(s)",
            display: "Fire threatening non-structure object(s)",
            continue: true,
            updateCode: "71C01",
          },
          {
            answer: "Structure(s)",
            display: "Fire threatening structure(s)",
            continue: true,
            updateCode: "71D03",
          },
          {
            answer: "Vegitation/Brush",
            display: "Fire threatening vegitation/brush",
            continue: true,
            updateCode: "71C04",
          },
          {
            answer: "Unknown",
            display: "Unk if fire threatening anything",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Does the vehicle run on{" "}
            <b className="text-green-400">alternate fuel</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Unknown",
            display: "Unk if vehicle has alt fuel",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Vehicle has alt fuel",
            continue: true,
            updateSubCode: "A",
          },
          {
            answer: "No",
            display: "Vehicle does not have alt fuel",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Does the vehicle have{" "}
            <b className="text-green-400">hazardous materials</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Unknown",
            display: "Unk if vehicle has hazmat",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Vehicle has hazmat",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const targetAnswer = answers?.find(
                (a) =>
                  a.defaultQuestion ===
                  "Does the vehicle run on alternate fuel?"
              )?.defaultAnswer;
              if (targetAnswer === "Yes") {
                return { subCode: "M" };
              } else {
                return { subCode: "H" };
              }
            },
          },
          {
            answer: "No",
            display: "Vehicle does not have hazmat",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is anyone <b>sick or injured</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No injs rpd",
            end: true,
          },
          {
            answer: "Yes - Single Person",
            display: "Single inj'd person rptd",
            end: true,
            dependency: (answers?: IAnswerData[]) => {
              const hasAlt =
                answers?.find(
                  (a) =>
                    a.defaultQuestion ===
                    "Does the vehicle run on alternate fuel?"
                )?.defaultAnswer === "Yes";
              const hasHaz =
                answers?.find(
                  (a) =>
                    a.defaultQuestion ===
                    "Does the vehicle have hazardous materials?"
                )?.defaultAnswer === "Yes";
              if (hasAlt && hasHaz) {
                return { subCode: "V" };
              } else if (hasAlt && !hasHaz) {
                return { subCode: "R" };
              } else if (!hasAlt && hasHaz) {
                return { subCode: "T" };
              } else if (!hasAlt && !hasHaz) {
                return { subCode: "X" };
              }
            },
          },
          {
            answer: "Yes - Multiple Persons:",
            display: "{input} inj'd persons rptd",
            end: true,
            input: true,
            dependency: (answers?: IAnswerData[]) => {
              const hasAlt =
                answers?.find(
                  (a) =>
                    a.defaultQuestion ===
                    "Does the vehicle run on alternate fuel?"
                )?.defaultAnswer === "Yes";
              const hasHaz =
                answers?.find(
                  (a) =>
                    a.defaultQuestion ===
                    "Does the vehicle have hazardous materials?"
                )?.defaultAnswer === "Yes";
              if (hasAlt && hasHaz) {
                return { subCode: "W" };
              } else if (hasAlt && !hasHaz) {
                return { subCode: "S" };
              } else if (!hasAlt && hasHaz) {
                return { subCode: "U" };
              } else if (!hasAlt && !hasHaz) {
                return { subCode: "Y" };
              }
            },
          },
          {
            answer: "Unknown",
            display: "Unk if inj'd persons rptd",
            end: true,
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "A",
        determinants: [
          {
            code: "71A01",
            text: "Vehicle Fire (Extinguished)",
            recResponse: 338,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 339,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 340,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 341,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 342,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 343,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 344,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 345,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 346,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 347,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 348,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 349,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "71B00",
            text: "Override (Bravo)",
            recResponse: 338,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 339,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 340,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 341,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 342,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 343,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 344,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 345,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 346,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 347,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 348,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 349,
              },
            ],
          },
          {
            code: "71B01",
            text: "Vehicle Fire",
            recResponse: 338,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 339,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 340,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 341,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 342,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 343,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 344,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 345,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 346,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 347,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 348,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 349,
              },
            ],
          },
          {
            code: "71B02",
            text: "Motorcycle/Scooter/ATV",
            recResponse: 350,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 351,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 352,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 353,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 354,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 355,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 356,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 357,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 358,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 359,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 360,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 361,
              },
            ],
          },
          {
            code: "71B03",
            text: "Comm Vehicle (Extinguished)",
            recResponse: 338,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 339,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 340,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 341,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 342,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 343,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 344,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 345,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 346,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 347,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 348,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 349,
              },
            ],
          },
          {
            code: "71B04",
            text: "Large Fuel/Fire Load Vehicle (Extinguished)",
            recResponse: 338,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 339,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 340,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 341,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 342,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 343,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 344,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 345,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 346,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 347,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 348,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 349,
              },
            ],
          },
          {
            code: "71B05",
            text: "Agricultural/Farm/Excavation/Construction Machinery (Extinguished)",
            recResponse: 338,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 339,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 340,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 341,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 342,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 343,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 344,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 345,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 346,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 347,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 348,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 349,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "71C00",
            text: "Override (Charlie)",
            recResponse: 362,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 363,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 364,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 365,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 366,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 367,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 368,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 369,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 370,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 371,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 372,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 373,
              },
            ],
          },
          {
            code: "71C01",
            text: "Vehicle Fire Threatening Non-Structure Object(s)",
            recResponse: 362,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 363,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 364,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 365,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 366,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 367,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 368,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 369,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 370,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 371,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 372,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 373,
              },
            ],
          },
          {
            code: "71C02",
            text: "Electrical Vehicle",
            recResponse: 340,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 341,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 340,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 341,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 374,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 347,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 375,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 345,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 374,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 347,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 375,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 345,
              },
            ],
          },
          {
            code: "71C03",
            text: "Delivery Vehicle",
            recResponse: 376,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 377,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 378,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 379,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 380,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 381,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 382,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 383,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 384,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 385,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 386,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 397,
              },
            ],
          },
          {
            code: "71C04",
            text: "Vehicle Fire Threatening Vegitation/Wildland/Brush/Gass",
            recResponse: 362,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 363,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 364,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 365,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 366,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 367,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 368,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 369,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 370,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 371,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 372,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 373,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "71D00",
            text: "Override (Delta)",
            recResponse: 388,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 389,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 390,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 391,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 392,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 393,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 394,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 395,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 396,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 397,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 398,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 399,
              },
            ],
          },
          {
            code: "71D01",
            text: "Vehicle Fire (Occupants Trapped)",
            recResponse: 388,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 389,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 390,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 391,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 392,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 393,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 394,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 395,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 396,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 397,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 398,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 399,
              },
            ],
          },
          {
            code: "71D02",
            text: "Mult Vehicles on Fire",
            recResponse: 400,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 401,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 402,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 403,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 404,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 405,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 406,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 407,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 408,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 409,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 410,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 411,
              },
            ],
          },
          {
            code: "71D03",
            text: "Vehicle Fire w/ Threatened Building/Structure",
            recResponse: 233,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 278,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 278,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 278,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 283,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 284,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 283,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 284,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 283,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 284,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 268,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 269,
              },
            ],
          },
          {
            code: "71D04",
            text: "Comm Vehicle",
            recResponse: 376,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 377,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 378,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 379,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 380,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 381,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 382,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 383,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 384,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 385,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 386,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 397,
              },
            ],
          },
          {
            code: "71D05",
            text: "Large Fuel/Fire Load Vehicle",
            recResponse: 376,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 377,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 378,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 379,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 380,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 381,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 382,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 383,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 384,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 385,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 386,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 397,
              },
            ],
          },
          {
            code: "71D06",
            text: "Agricultural/Farm/Excavation/Construction Machinery",
            recResponse: 376,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 377,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 378,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 379,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 380,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 381,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 382,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 383,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 384,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 385,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 386,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 397,
              },
            ],
          },
          {
            code: "71D07",
            text: "Vehicle Fire in Tunnel",
            recResponse: 412,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 413,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 414,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 415,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 416,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 417,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 418,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 419,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 420,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 421,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 422,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 423,
              },
            ],
          },
          {
            code: "71D08",
            text: "Mult Vehicles on Fire in Tunnel",
            recResponse: 412,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 413,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 414,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 415,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 416,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 417,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 418,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 419,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 420,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 421,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 422,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 423,
              },
            ],
          },
        ],
      },
      {
        priority: "E",
        determinants: [
          {
            code: "71E00",
            text: "Override (Echo)",
            recResponse: 388,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 389,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 390,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 391,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 392,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 393,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 394,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 395,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 396,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 397,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 398,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 399,
              },
            ],
          },
          {
            code: "71E01",
            text: "Vehicle Fire (Occupants Trapped)",
            recResponse: 388,
            subCodes: [
              {
                code: "A",
                text: "Alternative Fuel",
                recResponse: 389,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 390,
              },
              {
                code: "M",
                text: "Alternative Fuel & Hazmat",
                recResponse: 391,
              },
              {
                code: "R",
                text: "Alternative Fuel w/ Single Injured Person",
                recResponse: 392,
              },
              {
                code: "S",
                text: "Alternative Fuel w/ Mult Injured Persons",
                recResponse: 393,
              },
              {
                code: "T",
                text: "Hazmat w/ Single Injured Person",
                recResponse: 394,
              },
              {
                code: "U",
                text: "Hazmat w/ Mult Injured Persons",
                recResponse: 395,
              },
              {
                code: "V",
                text: "Alternative Fuel & Hazmat w/ Single Injured Person",
                recResponse: 396,
              },
              {
                code: "W",
                text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
                recResponse: 397,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 398,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 399,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 72,
    name: "Water/Ice/Mud Rescue",
    shortName: "Water/Ice/Mud Rescue",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: true },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 424,
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
            answer: "Rescue",
            display: "This is a rescue incident",
            continue: true,
          },
          {
            answer: "Stranded",
            display: "This is a stranded incident",
            continue: true,
          },
          {
            answer: "Animal rescue",
            display: "This is an animal rescue",
            continue: true,
            updateCode: "72A01",
          },
          {
            answer: "Body recovery",
            display: "This is a body recovery",
            continue: true,
            updateCode: "72A02",
          },
          {
            answer: "Scuba diving accident",
            display: "This is a scuba diving accident",
            continue: true,
            updateCode: "72D03",
          },
          {
            answer: "Completely unknown situation",
            display: "This is a completely unk situation",
            continue: true,
            updateCode: "72B02",
          },
        ],
      },

      {
        text: <p>What type of rescue is this?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Rescue";
        },
        answers: [
          {
            answer: "Ice rescue",
            display: "Ice rescue ID'd",
            continue: true,
            updateCode: "72D01",
          },
          {
            answer: "Swift water rescue",
            display: "Swift water rescue ID'd",
            continue: true,
            updateCode: "72D02",
          },
          {
            answer: "Swimming pool rescue",
            display: "Swimming pool rescue ID'd",
            continue: true,
            updateCode: "72D04",
          },
          {
            answer: "Costal water rescue",
            display: "Costal water rescue ID'd",
            continue: true,
            updateCode: "72D05",
          },
          {
            answer: "Inland water rescue",
            display: "Inland water rescue ID'd",
            continue: true,
            updateCode: "72D06",
          },
          {
            answer: "Oceanic water rescue",
            display: "Oceanic water rescue ID'd",
            continue: true,
            updateCode: "72D07",
          },
          {
            answer: "Surf rescue",
            display: "Surf rescue ID'd",
            continue: true,
            updateCode: "72D08",
          },
          {
            answer: "Large flood rescue",
            display: "Large flood rescue ID'd",
            continue: true,
            updateCode: "72D09",
          },
          {
            answer: "Small flood rescue",
            display: "Small flood rescue ID'd",
            continue: true,
            updateCode: "72D10",
          },
          {
            answer: "Quick sand rescue",
            display: "Quicksand rescue",
            continue: true,
            updateCode: "72D11",
          },
          {
            answer: "Marsh rescue",
            display: "Marsh rescue",
            continue: true,
            updateCode: "72D11",
          },
          {
            answer: "Mud rescue",
            display: "Mud rescue",
            continue: true,
            updateCode: "72D11",
          },
          {
            answer: "Unknown situation",
            display: "Unk situation",
            continue: true,
            updateCode: "72B02",
          },
        ],
      },

      {
        text: <p>What type of stranded situation is this?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Stranded";
        },
        answers: [
          {
            answer: "Stranded person (non-threatened)",
            display: "Stranded person (non-threatened)",
            continue: true,
            updateCode: "72B01",
          },
          {
            answer: "Stranded in building/structure due to flood",
            display: "Stranded in building/structure due to flood",
            continue: true,
            updateCode: "72C01",
          },
          {
            answer: "Unknown situation",
            display: "Unk situation",
            continue: true,
            updateCode: "72B02",
          },
        ],
      },

      {
        text: (
          <p>
            Do <b>multiple</b> people need rescuing/help?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "Single person rescue",
            continue: true,
          },
          {
            answer: "Yes:",
            display: "{input} persons need rescuing",
            continue: true,
            input: true,
            updateSubCode: "M",
          },
          {
            answer: "Unknown",
            display: "Unk number of persons involved",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is anyone <b>sick</b> or <b>injured</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No sick or inj'd person(s) rptd",
            continue: true,
          },
          {
            answer: "Yes - Single",
            display: "Single sick/inj'd person rptd",
            continue: true,
            updateSubCode: "X",
          },
          {
            answer: "Yes - Multiple:",
            display: "{input} sick/inj'd persons rptd",
            continue: true,
            input: true,
            updateSubCode: "Y",
          },
          {
            answer: "Unknown",
            display: "Unk if sick/inj'd persons",
            continue: true,
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "A",
        determinants: [
          {
            code: "72A01",
            text: "Animal Rescue",
            recResponse: 424,
          },
          {
            code: "72A02",
            text: "Body Recovery",
            recResponse: 425,
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "72B00",
            text: "Override (Bravo)",
            recResponse: 426,
            subCodes: [
              {
                code: "M",
                text: "Mult-Person Rescue",
                recResponse: 427,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 428,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 427,
              },
            ],
          },
          {
            code: "72B01",
            text: "Stranded Person (Non-Threatened)",
            recResponse: 429,
            subCodes: [
              {
                code: "M",
                text: "Mult-Person Rescue",
                recResponse: 427,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 428,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 427,
              },
            ],
          },
          {
            code: "72B02",
            text: "Unkn Situation (Investigation)",
            recResponse: 426,
            defaultCode: true,
            subCodes: [
              {
                code: "M",
                text: "Mult-Person Rescue",
                recResponse: 427,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 428,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 427,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "72C00",
            text: "Override (Charlie)",
            recResponse: 430,
            subCodes: [
              {
                code: "M",
                text: "Mult-Person Rescue",
                recResponse: 431,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 432,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 431,
              },
            ],
          },
          {
            code: "72C01",
            text: "Stranded in Building/Structure Due to Flood",
            recResponse: 433,
            subCodes: [
              {
                code: "M",
                text: "Mult-Person Rescue",
                recResponse: 434,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 435,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 434,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "72D00",
            text: "Override (Delta)",
            recResponse: 430,
            subCodes: [
              {
                code: "M",
                text: "Mult-Person Rescue",
                recResponse: 431,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 432,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 431,
              },
            ],
          },
          {
            code: "72D01",
            text: "Ice Rescue",
            recResponse: 436,
            subCodes: [
              {
                code: "M",
                text: "Mult-Person Rescue",
                recResponse: 436,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 438,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 436,
              },
            ],
          },
          {
            code: "72D02",
            text: "Swift Water Rescue",
            recResponse: 430,
            subCodes: [
              {
                code: "M",
                text: "Mult-Person Rescue",
                recResponse: 431,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 432,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 431,
              },
            ],
          },
          {
            code: "72D03",
            text: "Scuba Dive Accident",
            recResponse: 439,
            subCodes: [
              {
                code: "M",
                text: "Mult-Person Rescue",
                recResponse: 427,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 428,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 427,
              },
            ],
          },
          {
            code: "72D04",
            text: "Swimming Pool Rescue",
            recResponse: 440,
            subCodes: [
              {
                code: "M",
                text: "Mult-Person Rescue",
                recResponse: 441,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 442,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 441,
              },
            ],
          },
          {
            code: "72D05",
            text: "Costal Water Rescue",
            recResponse: 443,
            subCodes: [
              {
                code: "M",
                text: "Mult-Person Rescue",
                recResponse: 444,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 445,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 444,
              },
            ],
          },
          {
            code: "72D06",
            text: "Inland Water Rescue",
            recResponse: 446,
            subCodes: [
              {
                code: "M",
                text: "Mult-Person Rescue",
                recResponse: 447,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 448,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 447,
              },
            ],
          },
          {
            code: "72D07",
            text: "Oceanic Water Rescue",
            recResponse: 449,
            subCodes: [
              {
                code: "M",
                text: "Mult-Person Rescue",
                recResponse: 450,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 451,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 450,
              },
            ],
          },
          {
            code: "72D08",
            text: "Surf Rescue",
            recResponse: 452,
            subCodes: [
              {
                code: "M",
                text: "Mult-Person Rescue",
                recResponse: 453,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 454,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 453,
              },
            ],
          },
          {
            code: "72D09",
            text: "Large Flood Water Rescue",
            recResponse: 433,
            subCodes: [
              {
                code: "M",
                text: "Mult-Person Rescue",
                recResponse: 434,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 435,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 434,
              },
            ],
          },
          {
            code: "72D10",
            text: "Small Flood Water Rescue",
            recResponse: 455,
            subCodes: [
              {
                code: "M",
                text: "Mult-Person Rescue",
                recResponse: 456,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 457,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 456,
              },
            ],
          },
          {
            code: "72D11",
            text: "Quicksand/Marsh/Mud Resuce",
            recResponse: 458,
            subCodes: [
              {
                code: "M",
                text: "Mult-Person Rescue",
                recResponse: 459,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 460,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 459,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 73,
    name: "Watercraft in Distress/Collision",
    shortName: "Watercraft in Distress/Collision",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: 3 },
      { name: "Police", priority: true },
    ],
    defaultPriority: 4,
    defaultPlan: 461,
    questions: [
      {
        text: (
          <p>
            What type of <b>situation</b> is <b>this</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Watercraft disabled",
            display: "Watercraft disabled",
            continue: true,
          },
          {
            answer: "Watercraft won't start",
            display: "Watercraft engine won't start",
            continue: true,
          },
          {
            answer: "Watercraft COLLISION",
            display: "Watercraft collision",
            continue: true,
            updateCode: "73D04",
          },
          {
            answer: "Welfare check",
            display: "Welfare check on watercraft",
            continue: true,
            updateCode: "73A01",
          },
          {
            answer: "PERSON(s) OVERBOARD",
            display: "Person(s) overboard",
            continue: true,
            updateCode: "73D01",
          },
          {
            answer: "Medical emergency on board",
            display: "Medical emergency on board watercraft",
            continue: true,
            updateCode: "73B02",
          },
          {
            answer: "Flare/Smoke sighting",
            display: "Flare/Smoke sighting",
            continue: true,
          },
          {
            answer: "FIRE on watercraft",
            display: "Fire on watercraft",
            goto: 64,
          },
          {
            answer: "Taking on water/SINKING",
            display: "Watercraft taking on water/sinking",
            continue: true,
            updateCode: "73D02",
          },
          {
            answer: "Run aground",
            display: "Watercraft run aground",
            continue: true,
            updateCode: "73B04",
          },
          {
            answer: "Unknown situation",
            display: "Unk situation",
            continue: true,
            updateCode: "73D05",
          },
        ],
      },

      {
        text: (
          <p>
            <b>Why</b> (how) is the watercraft disabled?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[0]?.defaultAnswer;
          return (
            lastAnswer === "Watercraft disabled" ||
            lastAnswer === "Watercraft won't start"
          );
        },
        answers: [
          {
            answer: "Out of fuel",
            display: "Out of fuel",
            continue: true,
            updateCode: "73B01",
          },
          {
            answer: "Engine problems",
            display: "Engine problems",
            continue: true,
            updateCode: "73B01",
          },
          {
            answer: "Engine won't start",
            display: "Engine won't start",
            continue: true,
            updateCode: "73B03",
          },
          {
            answer: "Broken sail",
            display: "Broken sail",
            continue: true,
            updateCode: "73B01",
          },
          {
            answer: "Lost oars",
            display: "Lost oars",
            continue: true,
            updateCode: "73B01",
          },
          {
            answer: "Unknown",
            display: "Unk reason for watercraft disabled",
            continue: true,
            updateCode: "73B01",
          },
        ],
      },

      {
        text: (
          <p>
            What did the watercraft <b>hit</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Watercraft COLLISION";
        },
        answers: [
          {
            answer: "Other watercraft:",
            display: "Struck other watercraft: {input}",
            continue: true,
          },
          {
            answer: "Dock/wharf",
            display: "Struck dock/wharf",
            continue: true,
          },
          {
            answer: "Bridge",
            display: "Struck bridge",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk what watercraft struck",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            What is the <b className="text-blue-400">medical emergency</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Medical emergency on board";
        },
        answers: [
          {
            answer: "Complaint:",
            display: "Medical complaint - {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk medical emergency on board",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            What can you <b>see</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Flare/Smoke sighting";
        },
        answers: [
          {
            answer: "Flare(s)",
            display: "Flare(s) sighted",
            continue: true,
          },
          {
            answer: "Smoke",
            display: "Smoke sighted",
            continue: true,
          },
          {
            answer: "Flare(s) and smoke",
            display: "Flare(s) and smoke sighted",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk what is sighted",
            continue: true,
            updateCode: "73D05",
          },
        ],
      },

      {
        text: <p>What is the color of the flare(s)?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return (
            lastAnswer === "Flare(s) sighted" ||
            lastAnswer === "Flare(s) and smoke sighted"
          );
        },
        answers: [
          {
            answer: "Red",
            display: "Red flare(s) sighted",
            continue: true,
            updateCode: "73D03",
          },
          {
            answer: "Orange",
            display: "Orange flare(s) sighted",
            continue: true,
            updateCode: "73D03",
          },
          {
            answer: "Other:",
            display: "{input} flare(s) sighted",
            continue: true,
            input: true,
            updateCode: "73B05",
          },
          {
            answer: "Unknown",
            display: "Unk color of flare(s) sighted",
            continue: true,
            updateCode: "73D05",
          },
        ],
      },

      {
        text: <p>What is the color of the smoke?</p>,
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return (
            lastAnswer === "Smoke sighted" ||
            lastAnswer === "Flare(s) and smoke sighted"
          );
        },
        answers: [
          {
            answer: "Red",
            display: "Red smoke sighted",
            continue: true,
            updateCode: "73D03",
          },
          {
            answer: "Orange",
            display: "Orange smoke sighted",
            continue: true,
            updateCode: "73D03",
          },
          {
            answer: "Other:",
            display: "{input} smoke sighted",
            continue: true,
            input: true,
            updateCode: "73B05",
          },
          {
            answer: "Unknown",
            display: "Unk color of smoke sighted",
            continue: true,
            updateCode: "73D05",
          },
        ],
      },

      {
        text: (
          <p>
            What <b>body of water</b> is the incident occurring?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Costal",
            display: "Costal water incident",
            continue: true,
            updateSubCode: "C",
          },
          {
            answer: "Inland",
            display: "Inland water incident",
            continue: true,
            updateSubCode: "I",
          },
          {
            answer: "Oceanic",
            display: "Oceanic water incident",
            continue: true,
            updateSubCode: "O",
          },
          {
            answer: "Unknown",
            display: "Unk body of water",
            continue: true,
          },
        ],
      },

      {
        text: <p>Can you describe the watercraft(s) involved?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Description:",
            display: "Watercraft(s) description - {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk watercraft(s) involved",
            continue: true,
          },
        ],
      },

      {
        text: <p>Can you see any landmarks?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Landmark(s):",
            display: "Landmark(s) - {input}",
            continue: true,
            input: true,
          },
          {
            answer: "No landmarks",
            display: "No landmarks visible",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk landmarks visible",
            continue: true,
          },
        ],
      },

      {
        text: <p>Is anyone sick or injured?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No injuries",
            display: "No sick/injured person(s) rptd",
            end: true,
          },
          {
            answer: "Single sick/injured person",
            display: "Single sick/injured person rptd",
            end: true,
            dependency: (answers?: IAnswerData[]) => {
              const waterBodyType = answers?.find(
                (a) =>
                  a.defaultQuestion ===
                  "What body of water is the incident occurring?"
              )?.defaultAnswer;
              if (waterBodyType === "Costal") {
                return { subCode: "T" };
              } else if (waterBodyType === "Inland") {
                return { subCode: "V" };
              } else if (waterBodyType === "Oceanic") {
                return { subCode: "X" };
              }
            },
          },
          {
            answer: "Multiple sick/injured persons:",
            display: "{input} sick/injured persons rptd",
            end: true,
            input: true,
            dependency: (answers?: IAnswerData[]) => {
              const waterBodyType = answers?.find(
                (a) =>
                  a.defaultQuestion ===
                  "What body of water is the incident occurring?"
              )?.defaultAnswer;
              if (waterBodyType === "Costal") {
                return { subCode: "U" };
              } else if (waterBodyType === "Inland") {
                return { subCode: "W" };
              } else if (waterBodyType === "Oceanic") {
                return { subCode: "Y" };
              }
            },
          },
          {
            answer: "Unknown if sick/injured persons",
            display: "Unk if sick/injured persons",
            end: true,
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "A",
        determinants: [
          {
            code: "73A01",
            text: "Watercraft Welfare Check",
            recResponse: 461,
            subCodes: [
              {
                code: "C",
                text: "Costal",
                recResponse: 461,
              },
              {
                code: "I",
                text: "Inland",
                recResponse: 462,
              },
              {
                code: "O",
                text: "Oceanic",
                recResponse: 463,
              },
              {
                code: "T",
                text: "Costal w/ Single Sick/Injured Person",
                recResponse: 464,
              },
              {
                code: "U",
                text: "Costal w/ Mult Sick/Injured Persons",
                recResponse: 444,
              },
              {
                code: "V",
                text: "Inland w/ Single Sick/Injured Person",
                recResponse: 465,
              },
              {
                code: "W",
                text: "Inland w/ Mult Sick/Injured Persons",
                recResponse: 447,
              },
              {
                code: "X",
                text: "Oceanic w/ Single Sick/Injured Person",
                recResponse: 466,
              },
              {
                code: "Y",
                text: "Oceanic w/ Mult Sick/Injured Persons",
                recResponse: 450,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "73B00",
            text: "Override (Bravo)",
            recResponse: 443,
            subCodes: [
              {
                code: "C",
                text: "Costal",
                recResponse: 443,
              },
              {
                code: "I",
                text: "Inland",
                recResponse: 446,
              },
              {
                code: "O",
                text: "Oceanic",
                recResponse: 449,
              },
              {
                code: "T",
                text: "Costal w/ Single Sick/Injured Person",
                recResponse: 464,
              },
              {
                code: "U",
                text: "Costal w/ Mult Sick/Injured Persons",
                recResponse: 444,
              },
              {
                code: "V",
                text: "Inland w/ Single Sick/Injured Person",
                recResponse: 465,
              },
              {
                code: "W",
                text: "Inland w/ Mult Sick/Injured Persons",
                recResponse: 447,
              },
              {
                code: "X",
                text: "Oceanic w/ Single Sick/Injured Person",
                recResponse: 466,
              },
              {
                code: "Y",
                text: "Oceanic w/ Mult Sick/Injured Persons",
                recResponse: 450,
              },
            ],
          },
          {
            code: "73B01",
            text: "Watercraft Disabled (Out of Fuel, Broken Sail, Lost Oars, Engine Problems)",
            recResponse: 461,
            subCodes: [
              {
                code: "C",
                text: "Costal",
                recResponse: 461,
              },
              {
                code: "I",
                text: "Inland",
                recResponse: 462,
              },
              {
                code: "O",
                text: "Oceanic",
                recResponse: 463,
              },
              {
                code: "T",
                text: "Costal w/ Single Sick/Injured Person",
                recResponse: 464,
              },
              {
                code: "U",
                text: "Costal w/ Mult Sick/Injured Persons",
                recResponse: 444,
              },
              {
                code: "V",
                text: "Inland w/ Single Sick/Injured Person",
                recResponse: 465,
              },
              {
                code: "W",
                text: "Inland w/ Mult Sick/Injured Persons",
                recResponse: 447,
              },
              {
                code: "X",
                text: "Oceanic w/ Single Sick/Injured Person",
                recResponse: 466,
              },
              {
                code: "Y",
                text: "Oceanic w/ Mult Sick/Injured Persons",
                recResponse: 450,
              },
            ],
          },
          {
            code: "73B02",
            text: "Medical Emergency on Board",
            recResponse: 443,
            subCodes: [
              {
                code: "C",
                text: "Costal",
                recResponse: 443,
              },
              {
                code: "I",
                text: "Inland",
                recResponse: 446,
              },
              {
                code: "O",
                text: "Oceanic",
                recResponse: 449,
              },
              {
                code: "T",
                text: "Costal w/ Single Sick/Injured Person",
                recResponse: 464,
              },
              {
                code: "U",
                text: "Costal w/ Mult Sick/Injured Persons",
                recResponse: 444,
              },
              {
                code: "V",
                text: "Inland w/ Single Sick/Injured Person",
                recResponse: 465,
              },
              {
                code: "W",
                text: "Inland w/ Mult Sick/Injured Persons",
                recResponse: 447,
              },
              {
                code: "X",
                text: "Oceanic w/ Single Sick/Injured Person",
                recResponse: 466,
              },
              {
                code: "Y",
                text: "Oceanic w/ Mult Sick/Injured Persons",
                recResponse: 450,
              },
            ],
          },
          {
            code: "73B03",
            text: "Engine Will not Start",
            recResponse: 461,
            subCodes: [
              {
                code: "C",
                text: "Costal",
                recResponse: 461,
              },
              {
                code: "I",
                text: "Inland",
                recResponse: 462,
              },
              {
                code: "O",
                text: "Oceanic",
                recResponse: 463,
              },
              {
                code: "T",
                text: "Costal w/ Single Sick/Injured Person",
                recResponse: 464,
              },
              {
                code: "U",
                text: "Costal w/ Mult Sick/Injured Persons",
                recResponse: 444,
              },
              {
                code: "V",
                text: "Inland w/ Single Sick/Injured Person",
                recResponse: 465,
              },
              {
                code: "W",
                text: "Inland w/ Mult Sick/Injured Persons",
                recResponse: 447,
              },
              {
                code: "X",
                text: "Oceanic w/ Single Sick/Injured Person",
                recResponse: 466,
              },
              {
                code: "Y",
                text: "Oceanic w/ Mult Sick/Injured Persons",
                recResponse: 450,
              },
            ],
          },
          {
            code: "73B04",
            text: "Run Aground",
            recResponse: 443,
            subCodes: [
              {
                code: "C",
                text: "Costal",
                recResponse: 443,
              },
              {
                code: "I",
                text: "Inland",
                recResponse: 446,
              },
              {
                code: "O",
                text: "Oceanic",
                recResponse: 449,
              },
              {
                code: "T",
                text: "Costal w/ Single Sick/Injured Person",
                recResponse: 464,
              },
              {
                code: "U",
                text: "Costal w/ Mult Sick/Injured Persons",
                recResponse: 444,
              },
              {
                code: "V",
                text: "Inland w/ Single Sick/Injured Person",
                recResponse: 465,
              },
              {
                code: "W",
                text: "Inland w/ Mult Sick/Injured Persons",
                recResponse: 447,
              },
              {
                code: "X",
                text: "Oceanic w/ Single Sick/Injured Person",
                recResponse: 466,
              },
              {
                code: "Y",
                text: "Oceanic w/ Mult Sick/Injured Persons",
                recResponse: 450,
              },
            ],
          },
          {
            code: "73B05",
            text: "Flare Sighting (Other than Orange or Red)",
            recResponse: 443,
            subCodes: [
              {
                code: "C",
                text: "Costal",
                recResponse: 443,
              },
              {
                code: "I",
                text: "Inland",
                recResponse: 446,
              },
              {
                code: "O",
                text: "Oceanic",
                recResponse: 449,
              },
              {
                code: "T",
                text: "Costal w/ Single Sick/Injured Person",
                recResponse: 464,
              },
              {
                code: "U",
                text: "Costal w/ Mult Sick/Injured Persons",
                recResponse: 444,
              },
              {
                code: "V",
                text: "Inland w/ Single Sick/Injured Person",
                recResponse: 465,
              },
              {
                code: "W",
                text: "Inland w/ Mult Sick/Injured Persons",
                recResponse: 447,
              },
              {
                code: "X",
                text: "Oceanic w/ Single Sick/Injured Person",
                recResponse: 466,
              },
              {
                code: "Y",
                text: "Oceanic w/ Mult Sick/Injured Persons",
                recResponse: 450,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "73D00",
            text: "Override (Delta)",
            recResponse: 443,
            subCodes: [
              {
                code: "C",
                text: "Costal",
                recResponse: 443,
              },
              {
                code: "I",
                text: "Inland",
                recResponse: 446,
              },
              {
                code: "O",
                text: "Oceanic",
                recResponse: 449,
              },
              {
                code: "T",
                text: "Costal w/ Single Sick/Injured Person",
                recResponse: 445,
              },
              {
                code: "U",
                text: "Costal w/ Mult Sick/Injured Persons",
                recResponse: 444,
              },
              {
                code: "V",
                text: "Inland w/ Single Sick/Injured Person",
                recResponse: 448,
              },
              {
                code: "W",
                text: "Inland w/ Mult Sick/Injured Persons",
                recResponse: 447,
              },
              {
                code: "X",
                text: "Oceanic w/ Single Sick/Injured Person",
                recResponse: 451,
              },
              {
                code: "Y",
                text: "Oceanic w/ Mult Sick/Injured Persons",
                recResponse: 450,
              },
            ],
          },
          {
            code: "73D01",
            text: "People in Water",
            recResponse: 443,
            subCodes: [
              {
                code: "C",
                text: "Costal",
                recResponse: 443,
              },
              {
                code: "I",
                text: "Inland",
                recResponse: 446,
              },
              {
                code: "O",
                text: "Oceanic",
                recResponse: 449,
              },
              {
                code: "T",
                text: "Costal w/ Single Sick/Injured Person",
                recResponse: 445,
              },
              {
                code: "U",
                text: "Costal w/ Mult Sick/Injured Persons",
                recResponse: 444,
              },
              {
                code: "V",
                text: "Inland w/ Single Sick/Injured Person",
                recResponse: 448,
              },
              {
                code: "W",
                text: "Inland w/ Mult Sick/Injured Persons",
                recResponse: 447,
              },
              {
                code: "X",
                text: "Oceanic w/ Single Sick/Injured Person",
                recResponse: 451,
              },
              {
                code: "Y",
                text: "Oceanic w/ Mult Sick/Injured Persons",
                recResponse: 450,
              },
            ],
          },
          {
            code: "73D02",
            text: "Taking on Water",
            recResponse: 443,
            subCodes: [
              {
                code: "C",
                text: "Costal",
                recResponse: 443,
              },
              {
                code: "I",
                text: "Inland",
                recResponse: 446,
              },
              {
                code: "O",
                text: "Oceanic",
                recResponse: 449,
              },
              {
                code: "T",
                text: "Costal w/ Single Sick/Injured Person",
                recResponse: 445,
              },
              {
                code: "U",
                text: "Costal w/ Mult Sick/Injured Persons",
                recResponse: 444,
              },
              {
                code: "V",
                text: "Inland w/ Single Sick/Injured Person",
                recResponse: 448,
              },
              {
                code: "W",
                text: "Inland w/ Mult Sick/Injured Persons",
                recResponse: 447,
              },
              {
                code: "X",
                text: "Oceanic w/ Single Sick/Injured Person",
                recResponse: 451,
              },
              {
                code: "Y",
                text: "Oceanic w/ Mult Sick/Injured Persons",
                recResponse: 450,
              },
            ],
          },
          {
            code: "73D03",
            text: "Flare/Smoke Sighting (Orange or Red)",
            recResponse: 443,
            subCodes: [
              {
                code: "C",
                text: "Costal",
                recResponse: 443,
              },
              {
                code: "I",
                text: "Inland",
                recResponse: 446,
              },
              {
                code: "O",
                text: "Oceanic",
                recResponse: 449,
              },
              {
                code: "T",
                text: "Costal w/ Single Sick/Injured Person",
                recResponse: 445,
              },
              {
                code: "U",
                text: "Costal w/ Mult Sick/Injured Persons",
                recResponse: 444,
              },
              {
                code: "V",
                text: "Inland w/ Single Sick/Injured Person",
                recResponse: 448,
              },
              {
                code: "W",
                text: "Inland w/ Mult Sick/Injured Persons",
                recResponse: 447,
              },
              {
                code: "X",
                text: "Oceanic w/ Single Sick/Injured Person",
                recResponse: 451,
              },
              {
                code: "Y",
                text: "Oceanic w/ Mult Sick/Injured Persons",
                recResponse: 450,
              },
            ],
          },
          {
            code: "73D04",
            text: "Collision",
            recResponse: 443,
            subCodes: [
              {
                code: "C",
                text: "Costal",
                recResponse: 443,
              },
              {
                code: "I",
                text: "Inland",
                recResponse: 446,
              },
              {
                code: "O",
                text: "Oceanic",
                recResponse: 449,
              },
              {
                code: "T",
                text: "Costal w/ Single Sick/Injured Person",
                recResponse: 445,
              },
              {
                code: "U",
                text: "Costal w/ Mult Sick/Injured Persons",
                recResponse: 444,
              },
              {
                code: "V",
                text: "Inland w/ Single Sick/Injured Person",
                recResponse: 448,
              },
              {
                code: "W",
                text: "Inland w/ Mult Sick/Injured Persons",
                recResponse: 447,
              },
              {
                code: "X",
                text: "Oceanic w/ Single Sick/Injured Person",
                recResponse: 451,
              },
              {
                code: "Y",
                text: "Oceanic w/ Mult Sick/Injured Persons",
                recResponse: 450,
              },
            ],
          },
          {
            code: "73D05",
            text: "Unkn Situation (Investigation)",
            recResponse: 443,
            defaultCode: true,
            subCodes: [
              {
                code: "C",
                text: "Costal",
                recResponse: 443,
              },
              {
                code: "I",
                text: "Inland",
                recResponse: 446,
              },
              {
                code: "O",
                text: "Oceanic",
                recResponse: 449,
              },
              {
                code: "T",
                text: "Costal w/ Single Sick/Injured Person",
                recResponse: 445,
              },
              {
                code: "U",
                text: "Costal w/ Mult Sick/Injured Persons",
                recResponse: 444,
              },
              {
                code: "V",
                text: "Inland w/ Single Sick/Injured Person",
                recResponse: 448,
              },
              {
                code: "W",
                text: "Inland w/ Mult Sick/Injured Persons",
                recResponse: 447,
              },
              {
                code: "X",
                text: "Oceanic w/ Single Sick/Injured Person",
                recResponse: 451,
              },
              {
                code: "Y",
                text: "Oceanic w/ Mult Sick/Injured Persons",
                recResponse: 450,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 74,
    name: "Suspicious Package (Letter,Item, Substance) / Explosives",
    shortName: "Suspicious Package/Explosives",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: true },
      { name: "Police", priority: true },
    ],
    defaultPriority: 3,
    defaultPlan: 468,
    questions: [
      {
        text: (
          <p>
            What is the current <b>situation</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Suspicious package",
            display: "Suspicious package rptd",
            continue: true,
            updateCode: "74C02",
          },
          {
            answer: "Military ordnance",
            display: "Military ordnance rptd",
            continue: true,
            updateCode: "74B01",
          },
          {
            answer: "Explosives (known or suspected)",
            display: "Explosives rptd",
            continue: true,
            updateCode: "74B02",
          },
          {
            answer: "Unknown situation",
            display: "Unk situation",
            continue: true,
            updateCode: "74B03",
          },
        ],
      },

      {
        text: (
          <p>
            Is there any <b className="text-green-400">leakage</b> or{" "}
            <b className="text-green-400">residue</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const firstAnswer = answers?.[0]?.defaultAnswer;
          return firstAnswer === "Suspicious package";
        },
        answers: [
          {
            answer: "No",
            display: "No leakage or residue",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Leakage or residue",
            continue: true,
            updateCode: "74C01",
          },
          {
            answer: "Unknown",
            display: "Unk if leakage or residue",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is anyone <b>sick</b> or <b>injured</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No sick/injured person(s) rptd",
            continue: true,
          },
          {
            answer: "Single sick/injured person",
            display: "Single sick/injured person rptd",
            continue: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              const isLeakage =
                answers?.find(
                  (a) =>
                    a.defaultQuestion === "Is there any leakage or residue?"
                )?.defaultAnswer === "Yes";
              if (firstAnswer === "Suspicious package") {
                if (isLeakage) {
                  return { code: "74D01" };
                } else {
                  return { code: "74D03" };
                }
              } else if (firstAnswer === "Military ordnance") {
                return { code: "74D05" };
              }
            },
          },
          {
            answer: "Multiple sick/injured persons:",
            display: "{input} sick/injured persons rptd",
            continue: true,
            input: true,
            dependency: (answers?: IAnswerData[]) => {
              const firstAnswer = answers?.[0]?.defaultAnswer;
              const isLeakage =
                answers?.find(
                  (a) =>
                    a.defaultQuestion === "Is there any leakage or residue?"
                )?.defaultAnswer === "Yes";
              if (firstAnswer === "Suspicious package") {
                if (isLeakage) {
                  return { code: "74D02" };
                } else {
                  return { code: "74D04" };
                }
              } else if (firstAnswer === "Military ordnance") {
                return { code: "74D06" };
              }
            },
          },
          {
            answer: "Unknown",
            display: "Unk if sick/injured persons",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            What is the <b>location</b> of the incident?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Open area",
            display: "Incident in open area",
            continue: true,
            updateSubCode: "O",
          },
          {
            answer: "Comm/Ind building",
            display: "Incident in comm/ind bldg",
            continue: true,
            updateSubCode: "C",
          },
          {
            answer: "Government building",
            display: "Incident in government bldg",
            continue: true,
            updateSubCode: "G",
          },
          {
            answer: "High rise",
            display: "Incident in high rise bldg",
            continue: true,
            updateSubCode: "H",
          },
          {
            answer: "Non-dwelling building/structure",
            display: "Incident in non-dwelling bldg/structure",
            continue: true,
            updateSubCode: "N",
          },
          {
            answer: "Unknown",
            display: "Unk incident location",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Can you <b>describe</b> the package/explosive?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Description:",
            display: "Description: {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk package/explosive description",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            How big is the <b>package/explosive</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Size:",
            display: "Size: {input}",
            end: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk package/explosive size",
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
            code: "74B01",
            text: "Military Ordnance",
            recResponse: 467,
            subCodes: [
              {
                code: "C",
                text: "Comm/Ind Building",
                recResponse: 467,
              },
              {
                code: "G",
                text: "Government Building",
                recResponse: 467,
              },
              {
                code: "H",
                text: "High Life Hazard/High Rise",
                recResponse: 467,
              },
              {
                code: "N",
                text: "Non-Dwelling Building/Structure",
                recResponse: 467,
              },
              {
                code: "O",
                text: "Open Area",
                recResponse: 467,
              },
              {
                code: "R",
                text: "Residential Building",
                recResponse: 467,
              },
            ],
          },
          {
            code: "74B02",
            text: "Explosives",
            recResponse: 468,
            subCodes: [
              {
                code: "C",
                text: "Comm/Ind Building",
                recResponse: 468,
              },
              {
                code: "G",
                text: "Government Building",
                recResponse: 468,
              },
              {
                code: "H",
                text: "High Life Hazard/High Rise",
                recResponse: 468,
              },
              {
                code: "N",
                text: "Non-Dwelling Building/Structure",
                recResponse: 468,
              },
              {
                code: "O",
                text: "Open Area",
                recResponse: 468,
              },
              {
                code: "R",
                text: "Residential Building",
                recResponse: 468,
              },
            ],
          },
          {
            code: "74B03",
            text: "Unkn Situation (Investigation)",
            recResponse: 468,
            defaultCode: true,
            subCodes: [
              {
                code: "C",
                text: "Comm/Ind Building",
                recResponse: 468,
              },
              {
                code: "G",
                text: "Government Building",
                recResponse: 468,
              },
              {
                code: "H",
                text: "High Life Hazard/High Rise",
                recResponse: 468,
              },
              {
                code: "N",
                text: "Non-Dwelling Building/Structure",
                recResponse: 468,
              },
              {
                code: "O",
                text: "Open Area",
                recResponse: 468,
              },
              {
                code: "R",
                text: "Residential Building",
                recResponse: 468,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "74C00",
            text: "Override (Charlie)",
            recResponse: 469,
            subCodes: [
              {
                code: "C",
                text: "Comm/Ind Building",
                recResponse: 469,
              },
              {
                code: "G",
                text: "Government Building",
                recResponse: 469,
              },
              {
                code: "H",
                text: "High Life Hazard/High Rise",
                recResponse: 469,
              },
              {
                code: "N",
                text: "Non-Dwelling Building/Structure",
                recResponse: 469,
              },
              {
                code: "O",
                text: "Open Area",
                recResponse: 469,
              },
              {
                code: "R",
                text: "Residential Building",
                recResponse: 469,
              },
            ],
          },
          {
            code: "74C01",
            text: "Suspicious Package w/ Leakage/Residue",
            recResponse: 469,
            subCodes: [
              {
                code: "C",
                text: "Comm/Ind Building",
                recResponse: 469,
              },
              {
                code: "G",
                text: "Government Building",
                recResponse: 469,
              },
              {
                code: "H",
                text: "High Life Hazard/High Rise",
                recResponse: 469,
              },
              {
                code: "N",
                text: "Non-Dwelling Building/Structure",
                recResponse: 469,
              },
              {
                code: "O",
                text: "Open Area",
                recResponse: 469,
              },
              {
                code: "R",
                text: "Residential Building",
                recResponse: 469,
              },
            ],
          },
          {
            code: "74C02",
            text: "Suspicious Package",
            recResponse: 468,
            subCodes: [
              {
                code: "C",
                text: "Comm/Ind Building",
                recResponse: 468,
              },
              {
                code: "G",
                text: "Government Building",
                recResponse: 468,
              },
              {
                code: "H",
                text: "High Life Hazard/High Rise",
                recResponse: 468,
              },
              {
                code: "N",
                text: "Non-Dwelling Building/Structure",
                recResponse: 468,
              },
              {
                code: "O",
                text: "Open Area",
                recResponse: 468,
              },
              {
                code: "R",
                text: "Residential Building",
                recResponse: 468,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "74D00",
            text: "Override (Delta)",
            recResponse: 469,
            subCodes: [
              {
                code: "C",
                text: "Comm/Ind Building",
                recResponse: 469,
              },
              {
                code: "G",
                text: "Government Building",
                recResponse: 469,
              },
              {
                code: "H",
                text: "High Life Hazard/High Rise",
                recResponse: 469,
              },
              {
                code: "N",
                text: "Non-Dwelling Building/Structure",
                recResponse: 469,
              },
              {
                code: "O",
                text: "Open Area",
                recResponse: 469,
              },
              {
                code: "R",
                text: "Residential Building",
                recResponse: 469,
              },
            ],
          },
          {
            code: "74D01",
            text: "Suspicious Package w/ Leakage/Residue & Single Sick/Injured Person",
            recResponse: 469,
            subCodes: [
              {
                code: "C",
                text: "Comm/Ind Building",
                recResponse: 469,
              },
              {
                code: "G",
                text: "Government Building",
                recResponse: 469,
              },
              {
                code: "H",
                text: "High Life Hazard/High Rise",
                recResponse: 469,
              },
              {
                code: "N",
                text: "Non-Dwelling Building/Structure",
                recResponse: 469,
              },
              {
                code: "O",
                text: "Open Area",
                recResponse: 469,
              },
              {
                code: "R",
                text: "Residential Building",
                recResponse: 469,
              },
            ],
          },
          {
            code: "74D02",
            text: "Suspicious Package w/ Leakage/Residue & Mult Sick/Injured Person",
            recResponse: 469,
            subCodes: [
              {
                code: "C",
                text: "Comm/Ind Building",
                recResponse: 469,
              },
              {
                code: "G",
                text: "Government Building",
                recResponse: 469,
              },
              {
                code: "H",
                text: "High Life Hazard/High Rise",
                recResponse: 469,
              },
              {
                code: "N",
                text: "Non-Dwelling Building/Structure",
                recResponse: 469,
              },
              {
                code: "O",
                text: "Open Area",
                recResponse: 469,
              },
              {
                code: "R",
                text: "Residential Building",
                recResponse: 469,
              },
            ],
          },
          {
            code: "74D03",
            text: "Suspicious Package w/ Single Sick/Injured Person",
            recResponse: 469,
            subCodes: [
              {
                code: "C",
                text: "Comm/Ind Building",
                recResponse: 469,
              },
              {
                code: "G",
                text: "Government Building",
                recResponse: 469,
              },
              {
                code: "H",
                text: "High Life Hazard/High Rise",
                recResponse: 469,
              },
              {
                code: "N",
                text: "Non-Dwelling Building/Structure",
                recResponse: 469,
              },
              {
                code: "O",
                text: "Open Area",
                recResponse: 469,
              },
              {
                code: "R",
                text: "Residential Building",
                recResponse: 469,
              },
            ],
          },
          {
            code: "74D04",
            text: "Suspicious Package w/ Mult Sick/Injured Person",
            recResponse: 469,
            subCodes: [
              {
                code: "C",
                text: "Comm/Ind Building",
                recResponse: 469,
              },
              {
                code: "G",
                text: "Government Building",
                recResponse: 469,
              },
              {
                code: "H",
                text: "High Life Hazard/High Rise",
                recResponse: 469,
              },
              {
                code: "N",
                text: "Non-Dwelling Building/Structure",
                recResponse: 469,
              },
              {
                code: "O",
                text: "Open Area",
                recResponse: 469,
              },
              {
                code: "R",
                text: "Residential Building",
                recResponse: 469,
              },
            ],
          },
          {
            code: "74D05",
            text: "Military Ordinance/Explosives w/ Single Sick/Injured Person",
            recResponse: 469,
            subCodes: [
              {
                code: "C",
                text: "Comm/Ind Building",
                recResponse: 469,
              },
              {
                code: "G",
                text: "Government Building",
                recResponse: 469,
              },
              {
                code: "H",
                text: "High Life Hazard/High Rise",
                recResponse: 469,
              },
              {
                code: "N",
                text: "Non-Dwelling Building/Structure",
                recResponse: 469,
              },
              {
                code: "O",
                text: "Open Area",
                recResponse: 469,
              },
              {
                code: "R",
                text: "Residential Building",
                recResponse: 469,
              },
            ],
          },
          {
            code: "74D06",
            text: "Military Ordinance/Explosives w/ Mult Sick/Injured Person",
            recResponse: 469,
            subCodes: [
              {
                code: "C",
                text: "Comm/Ind Building",
                recResponse: 469,
              },
              {
                code: "G",
                text: "Government Building",
                recResponse: 469,
              },
              {
                code: "H",
                text: "High Life Hazard/High Rise",
                recResponse: 469,
              },
              {
                code: "N",
                text: "Non-Dwelling Building/Structure",
                recResponse: 469,
              },
              {
                code: "O",
                text: "Open Area",
                recResponse: 469,
              },
              {
                code: "R",
                text: "Residential Building",
                recResponse: 469,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 75,
    name: "Train & Rail Fire",
    shortName: "Train/Rail Fire",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: true },
      { name: "Police", priority: true },
    ],
    defaultPriority: 4,
    defaultPlan: 470,
    questions: [
      {
        text: (
          <p>
            What <b>type</b> of <b>train</b> is involved?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Cable car",
            display: "Cable car involved",
            continue: true,
            updateSubCode: "C",
          },
          {
            answer: "Freight train",
            display: "Freight train involved",
            continue: true,
            updateSubCode: "F",
          },
          {
            answer: "Light rail",
            display: "Light rail involved",
            continue: true,
            updateSubCode: "L",
          },
          {
            answer: "Monorail",
            display: "Monorail involved",
            continue: true,
            updateSubCode: "M",
          },
          {
            answer: "Other:",
            display: "Other train type: {input}",
            continue: true,
            input: true,
            updateSubCode: "O",
          },
          {
            answer: "Passenger (commuter) train",
            display: "Passenger train involved",
            continue: true,
            updateSubCode: "P",
          },
          {
            answer: "Subway",
            display: "Subway involved",
            continue: true,
            updateSubCode: "S",
          },
          {
            answer: "Trolley/streetcar",
            display: "Trolley/streetcar involved",
            continue: true,
            updateSubCode: "T",
          },
          {
            answer: "Unknown",
            display: "Unk train type",
            continue: true,
            updateSubCode: "U",
          },
        ],
      },

      {
        text: (
          <p>
            What type of <b>incident</b> is this?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Train fire",
            display: "Train fire",
            continue: true,
          },
          {
            answer: "Train fire (contents only and still moving)",
            display: "Contents fire (moving train)",
            continue: true,
            updateCode: "75O01",
          },
          {
            answer: "Train collision/derailment",
            display: "Train collision/derailment",
            goto: 70,
          },
          {
            answer: "Unknown situation (investigation)",
            display: "Unk situation",
            continue: true,
            updateCode: "75C01",
          },
        ],
      },

      {
        text: (
          <p>
            What is the <b>location</b> of the incident?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return lastAnswer === "Train fire";
        },
        answers: [
          {
            answer: "At ground level",
            display: "At grd level",
            continue: true,
            updateCode: "75D05",
          },
          {
            answer: "Above ground level",
            display: "Above grd level",
            continue: true,
            updateCode: "75D03",
          },
          {
            answer: "Below ground level",
            display: "Below grd level",
            continue: true,
            updateCode: "75D04",
          },
          {
            answer: "In tunnel",
            display: "In tunnel",
            continue: true,
            updateCode: "75D06",
          },
          {
            answer: "On bridge/trestle",
            display: "On bridge/trestle",
            continue: true,
            updateCode: "75D07",
          },
          {
            answer: "In/over water",
            display: "In/over water",
            continue: true,
            updateCode: "75D08",
          },
          {
            answer: "Unknown",
            display: "Unk incident location",
            continue: true,
            updateCode: "75D00",
          },
        ],
      },

      {
        text: (
          <p>
            Does the train fire <b>involve</b> or <b>threaten</b> anything?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 2]?.defaultAnswer;
          return lastAnswer === "Train fire";
        },
        answers: [
          {
            answer: "No",
            display: "Nothing rptd threatened",
            end: true,
          },
          {
            answer: "Yes - Building/structure",
            display: "Building/structure involved or threatened",
            end: true,
            updateCode: "75D01",
          },
          {
            answer: "Yes - Vehicles",
            display: "Vehicles involved or threatened",
            end: true,
            updateCode: "75D02",
          },
          {
            answer: "Unknown",
            display: "Unk if anything threatened",
            end: true,
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "O",
        determinants: [
          {
            code: "75O01",
            text: "Moving Train",
            recResponse: 470,
            subCodes: [
              {
                code: "C",
                text: "Cable Car",
                recResponse: 470,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 470,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 470,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 470,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 470,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 470,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 335,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 470,
              },
              {
                code: "U",
                text: "Unknown",
                recResponse: 470,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "75C00",
            text: "Override (Charlie)",
            recResponse: 334,
            subCodes: [
              {
                code: "C",
                text: "Cable Car",
                recResponse: 334,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 334,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 334,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 334,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 334,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 334,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 335,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 334,
              },
              {
                code: "U",
                text: "Unknown",
                recResponse: 334,
              },
            ],
          },
          {
            code: "75C01",
            text: "Unkn Situation (Investigation)",
            recResponse: 334,
            defaultCode: true,
            subCodes: [
              {
                code: "C",
                text: "Cable Car",
                recResponse: 334,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 334,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 334,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 334,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 334,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 334,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 335,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 334,
              },
              {
                code: "U",
                text: "Unknown",
                recResponse: 334,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "75D00",
            text: "Override (Delta)",
            recResponse: 471,
            subCodes: [
              {
                code: "C",
                text: "Cable Car",
                recResponse: 471,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 471,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 471,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 471,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 471,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 471,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 471,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 471,
              },
              {
                code: "U",
                text: "Unknown",
                recResponse: 471,
              },
            ],
          },
          {
            code: "75D01",
            text: "Train Fire Involving Building/Structure",
            recResponse: 471,
            subCodes: [
              {
                code: "C",
                text: "Cable Car",
                recResponse: 471,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 471,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 471,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 471,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 471,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 471,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 471,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 471,
              },
              {
                code: "U",
                text: "Unknown",
                recResponse: 471,
              },
            ],
          },
          {
            code: "75D02",
            text: "Train Fire Involving Vehicles",
            recResponse: 471,
            subCodes: [
              {
                code: "C",
                text: "Cable Car",
                recResponse: 471,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 471,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 471,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 471,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 471,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 471,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 471,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 471,
              },
              {
                code: "U",
                text: "Unknown",
                recResponse: 471,
              },
            ],
          },
          {
            code: "75D03",
            text: "Train Fire Below Ground Level",
            recResponse: 471,
            subCodes: [
              {
                code: "C",
                text: "Cable Car",
                recResponse: 471,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 471,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 471,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 471,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 471,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 471,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 471,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 471,
              },
              {
                code: "U",
                text: "Unknown",
                recResponse: 471,
              },
            ],
          },
          {
            code: "75D04",
            text: "Train Fire Above Ground Level",
            recResponse: 471,
            subCodes: [
              {
                code: "C",
                text: "Cable Car",
                recResponse: 471,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 471,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 471,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 471,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 471,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 471,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 471,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 471,
              },
              {
                code: "U",
                text: "Unknown",
                recResponse: 471,
              },
            ],
          },
          {
            code: "75D05",
            text: "Train Fire At Ground Level",
            recResponse: 471,
            subCodes: [
              {
                code: "C",
                text: "Cable Car",
                recResponse: 471,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 471,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 471,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 471,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 471,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 471,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 471,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 471,
              },
              {
                code: "U",
                text: "Unknown",
                recResponse: 471,
              },
            ],
          },
          {
            code: "75D06",
            text: "Train Fire In Tunnel",
            recResponse: 471,
            subCodes: [
              {
                code: "C",
                text: "Cable Car",
                recResponse: 471,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 471,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 471,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 471,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 471,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 471,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 471,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 471,
              },
              {
                code: "U",
                text: "Unknown",
                recResponse: 471,
              },
            ],
          },
          {
            code: "75D07",
            text: "Train Fire on Bridge/Trestle",
            recResponse: 471,
            subCodes: [
              {
                code: "C",
                text: "Cable Car",
                recResponse: 471,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 471,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 471,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 471,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 471,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 471,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 471,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 471,
              },
              {
                code: "U",
                text: "Unknown",
                recResponse: 471,
              },
            ],
          },
          {
            code: "75D08",
            text: "Train Fire in/over Water",
            recResponse: 471,
            subCodes: [
              {
                code: "C",
                text: "Cable Car",
                recResponse: 471,
              },
              {
                code: "F",
                text: "Freight Train",
                recResponse: 471,
              },
              {
                code: "L",
                text: "Light Rail",
                recResponse: 471,
              },
              {
                code: "M",
                text: "Monorail",
                recResponse: 471,
              },
              {
                code: "O",
                text: "Other",
                recResponse: 471,
              },
              {
                code: "P",
                text: "Passenger (Commuter) Train",
                recResponse: 471,
              },
              {
                code: "S",
                text: "Subway",
                recResponse: 471,
              },
              {
                code: "T",
                text: "Trolley/Streetcar",
                recResponse: 471,
              },
              {
                code: "U",
                text: "Unknown",
                recResponse: 471,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 76,
    name: "Bomb Threat",
    shortName: "Bomb Threat",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: true },
      { name: "Police", priority: true },
    ],
    defaultPriority: 3,
    defaultPlan: 472,
    questions: [
      {
        text: (
          <p>
            Who is the <b>caller</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Suspect caller (known)",
            display: "Suspect caller (known)",
            continue: true,
            updateCode: "76C01",
          },
          {
            answer: "Suspect caller (suspected)",
            display: "Suspect caller (suspected)",
            continue: true,
            updateCode: "76C01",
          },
          {
            answer: "2nd party caller",
            display: "2nd pty caller",
            continue: true,
            updateCode: "76B01",
          },
          {
            answer: "3rd party caller",
            display: "3rd pty caller",
            continue: true,
            updateCode: "76B01",
          },
          {
            answer: "4th party caller",
            display: "4th pty caller",
            continue: true,
            updateCode: "76B01",
          },
          {
            answer: "Unknown caller",
            display: "Unk caller",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            What is <b>your name</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (answers?: IAnswerData[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.defaultAnswer;
          return (
            lastAnswer === "Suspect caller (known)" ||
            lastAnswer === "Suspect caller (suspected)"
          );
        },
        answers: [
          {
            answer: "Name:",
            display: "RP: {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Refused to give name",
            display: "RP refused to give name",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "RP unknown",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            What is the <b>location</b> of the bomb threat?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Comm/Ind building",
            display: "Comm/Ind bldg involved",
            continue: true,
            updateSubCode: "C",
          },
          {
            answer: "Residential building",
            display: "Residential bldg involved",
            continue: true,
            updateSubCode: "R",
          },
          {
            answer: "Open area",
            display: "Open area involved",
            continue: true,
            updateSubCode: "O",
          },
          {
            answer: "Government building",
            display: "Government bldg involved",
            continue: true,
            updateSubCode: "G",
          },
          {
            answer: "High rise building",
            display: "High rise bldg involved",
            continue: true,
            updateSubCode: "H",
          },
          {
            answer: "Non-dwelling building/structure",
            display: "Non-dwelling bldg/structure involved",
            continue: true,
            updateSubCode: "N",
          },
          {
            answer: "Other:",
            display: "{input} involved",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk location",
            continue: true,
            updateSubCode: "U",
          },
        ],
      },

      {
        text: (
          <p>
            Is there a <b className="text-red-400">HIGH LIFE HAZARD</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No high life hazard ID'd",
            end: true,
          },
          {
            answer: "Yes",
            display: "High life hazard",
            end: true,
            updateSubCode: "H",
          },
          {
            answer: "Unknown",
            display: "Unk if high life hazard",
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
            code: "76B01",
            text: "Bomb Threat (Not 1st Pty)",
            recResponse: 472,
            subCodes: [
              {
                code: "C",
                text: "Comm/Ind Building",
                recResponse: 472,
              },
              {
                code: "G",
                text: "Government Building",
                recResponse: 472,
              },
              {
                code: "H",
                text: "High Life Hazard/High Rise",
                recResponse: 472,
              },
              {
                code: "N",
                text: "Non-Dwelling Building/Structure",
                recResponse: 472,
              },
              {
                code: "O",
                text: "Open Area",
                recResponse: 472,
              },
              {
                code: "R",
                text: "Residential Building",
                recResponse: 472,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "76C00",
            text: "Override (Charlie)",
            recResponse: 472,
            subCodes: [
              {
                code: "C",
                text: "Comm/Ind Building",
                recResponse: 472,
              },
              {
                code: "G",
                text: "Government Building",
                recResponse: 472,
              },
              {
                code: "H",
                text: "High Life Hazard/High Rise",
                recResponse: 472,
              },
              {
                code: "N",
                text: "Non-Dwelling Building/Structure",
                recResponse: 472,
              },
              {
                code: "O",
                text: "Open Area",
                recResponse: 472,
              },
              {
                code: "R",
                text: "Residential Building",
                recResponse: 472,
              },
            ],
          },
          {
            code: "76C01",
            text: "Bomb Threat (Suspect Caller)",
            recResponse: 472,
            subCodes: [
              {
                code: "C",
                text: "Comm/Ind Building",
                recResponse: 472,
              },
              {
                code: "G",
                text: "Government Building",
                recResponse: 472,
              },
              {
                code: "H",
                text: "High Life Hazard/High Rise",
                recResponse: 472,
              },
              {
                code: "N",
                text: "Non-Dwelling Building/Structure",
                recResponse: 472,
              },
              {
                code: "O",
                text: "Open Area",
                recResponse: 472,
              },
              {
                code: "R",
                text: "Residential Building",
                recResponse: 472,
              },
            ],
          },
        ],
      },
    ],
  },
  // Needs Questions
  {
    protocol: 77,
    name: "Motor Vehicle Collision",
    shortName: "Motor Vehicle Collision",
    description: <></>,
    services: [
      { name: "Fire", priority: 4 },
      { name: "EMS", priority: 4 },
      { name: "Police", priority: true },
    ],
    defaultPriority: 4,
    defaultPlan: 474,
    questions: [],
    availableDeterminants: [
      {
        priority: "O",
        determinants: [
          {
            code: "77O01",
            text: "Vehicle Blocking Traffic (No Injs & No Hazard)",
            recResponse: 473,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 473,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 473,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 473,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 338,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 474,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 473,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 340,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 338,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 388,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 474,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 474,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 340,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 390,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 388,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 474,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 390,
              },
            ],
          },
          {
            code: "77O02",
            text: "No Injs & No Hazard",
            recResponse: 473,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 473,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 473,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 473,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 338,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 474,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 473,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 340,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 338,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 388,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 474,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 474,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 340,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 390,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 388,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 474,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 390,
              },
            ],
          },
        ],
      },
      {
        priority: "A",
        determinants: [
          {
            code: "77A00",
            text: "Override (Alpha)",
            recResponse: 476,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 476,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 476,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 476,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 477,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 478,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 476,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 479,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 477,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 478,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 479,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 482,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 482,
              },
            ],
          },
          {
            code: "77A01",
            text: "Low Mechanism",
            recResponse: 476,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 476,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 476,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 476,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 477,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 478,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 476,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 479,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 477,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 478,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 479,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 482,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 482,
              },
            ],
          },
          {
            code: "77A02",
            text: "No Injs w/ Hazard",
            recResponse: 476,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 476,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 476,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 476,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 477,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 478,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 476,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 479,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 477,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 478,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 479,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 482,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 482,
              },
            ],
          },
          {
            code: "77A03",
            text: "Past Traffic Incident",
            recResponse: 473,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 473,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 473,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 473,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 338,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 474,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 473,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 340,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 338,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 388,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 474,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 474,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 340,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 390,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 388,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 474,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 390,
              },
            ],
          },
          {
            code: "77A04",
            text: "Past Hit-and-Run",
            recResponse: 473,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 473,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 473,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 473,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 338,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 474,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 473,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 340,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 338,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 388,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 474,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 474,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 340,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 390,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 388,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 474,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 390,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "77B00",
            text: "Override (Bravo)",
            recResponse: 476,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 476,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 476,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 476,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 477,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 478,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 476,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 479,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 477,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 478,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 479,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 482,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 482,
              },
            ],
          },
          {
            code: "77B01",
            text: "Injs",
            recResponse: 476,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 476,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 476,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 476,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 477,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 478,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 476,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 479,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 477,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 478,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 479,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 482,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 482,
              },
            ],
          },
          {
            code: "77B02",
            text: "Unkn Status/Other Codes Not Applicable",
            defaultCode: true,
            recResponse: 476,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 476,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 476,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 476,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 477,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 478,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 476,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 479,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 477,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 478,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 479,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 482,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 482,
              },
            ],
          },
          {
            code: "77B03",
            text: "Serious Hemorrhage",
            recResponse: 476,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 476,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 476,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 476,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 477,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 478,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 476,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 479,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 477,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 478,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 479,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 482,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 482,
              },
            ],
          },
          {
            code: "77B04",
            text: "Other Hazards",
            recResponse: 476,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 476,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 476,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 476,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 477,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 478,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 476,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 479,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 477,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 478,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 479,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 482,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 482,
              },
            ],
          },
          {
            code: "77B05",
            text: "Low Mechanism (1st or 2nd Party Caller)",
            recResponse: 476,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 476,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 476,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 476,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 477,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 478,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 476,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 479,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 477,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 478,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 479,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 482,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 482,
              },
            ],
          },
          {
            code: "77B06",
            text: "Traffic Incident (No Inj)",
            recResponse: 473,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 473,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 473,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 473,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 338,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 474,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 473,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 340,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 338,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 388,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 474,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 474,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 340,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 390,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 388,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 474,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 390,
              },
            ],
          },
          {
            code: "77B07",
            text: "Traffic Incident (Unkn Inj)",
            recResponse: 476,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 476,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 476,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 476,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 477,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 478,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 476,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 479,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 477,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 478,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 479,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 482,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 482,
              },
            ],
          },
          {
            code: "77B08",
            text: "Hit-and-Run (No Inj)",
            recResponse: 473,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 473,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 473,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 473,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 338,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 474,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 473,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 340,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 338,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 388,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 474,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 474,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 340,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 390,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 388,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 474,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 390,
              },
            ],
          },
          {
            code: "77B09",
            text: "Hit-and-Run (Unkn Inj)",
            recResponse: 476,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 476,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 476,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 476,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 477,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 478,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 476,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 479,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 477,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 478,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 479,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 482,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 480,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 481,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 475,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 482,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "77C00",
            text: "Override (Charlie)",
            recResponse: 483,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 483,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 483,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 483,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 484,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 485,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 483,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 486,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 484,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 485,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 486,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 490,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 490,
              },
            ],
          },
          {
            code: "77C01",
            text: "Injs w/ Hazard",
            recResponse: 483,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 483,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 483,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 483,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 484,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 485,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 483,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 486,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 484,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 485,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 486,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 490,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 490,
              },
            ],
          },
          {
            code: "77C02",
            text: "Fuel/Fluid Leak",
            recResponse: 483,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 483,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 483,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 483,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 484,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 485,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 483,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 486,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 484,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 485,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 486,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 490,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 490,
              },
            ],
          },
          {
            code: "77C03",
            text: "Traffic Incident (w/ Inj)",
            recResponse: 483,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 483,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 483,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 483,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 484,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 485,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 483,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 486,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 484,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 485,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 486,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 490,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 490,
              },
            ],
          },
          {
            code: "77C04",
            text: "Hit-and-Run (w/ Inj)",
            recResponse: 483,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 483,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 483,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 483,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 484,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 485,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 483,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 486,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 484,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 485,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 486,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 490,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 490,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "77D00",
            text: "Override (Delta)",
            recResponse: 491,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 491,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 491,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 491,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 492,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 493,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 491,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 494,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 492,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 495,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 493,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 496,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 497,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 494,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 498,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 495,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 496,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 497,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 498,
              },
            ],
          },
          {
            code: "77D01",
            text: "High Occupancy Vehicle (High Mechanism)",
            recResponse: 499,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 499,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 499,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 499,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 500,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 501,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 499,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 502,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 500,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 503,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 501,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 504,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 505,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 502,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 506,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 503,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 504,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 505,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 506,
              },
            ],
          },
          {
            code: "77D02",
            text: "High Mechanism",
            recResponse: 507,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 507,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 507,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 507,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 508,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 509,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 507,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 510,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 508,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 509,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 510,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 490,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 490,
              },
            ],
          },
          {
            code: "77D03",
            text: "Multi-Vehicle (>= 10) Pile-Up",
            recResponse: 499,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 499,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 499,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 499,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 500,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 501,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 499,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 502,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 500,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 503,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 501,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 504,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 505,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 502,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 506,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 503,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 504,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 505,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 506,
              },
            ],
          },
          {
            code: "77D04",
            text: "Trapped (Pinned) Victim",
            recResponse: 489,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 489,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 489,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 489,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 487,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 488,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 489,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 490,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 488,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 488,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 490,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 490,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 490,
              },
            ],
          },
          {
            code: "77D05",
            text: "Ejection",
            recResponse: 511,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 511,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 511,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 511,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 512,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 513,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 511,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 514,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 512,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 495,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 513,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 496,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 497,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 514,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 498,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 495,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 496,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 497,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 498,
              },
            ],
          },
          {
            code: "77D06",
            text: "Vehicle vs. Pedestrian/Bicycle",
            recResponse: 515,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 515,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 515,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 515,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 516,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 517,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 515,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 518,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 516,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 517,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 518,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 490,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 490,
              },
            ],
          },
          {
            code: "77D07",
            text: "Vehicle/Motorcycle vs. Motorcycle",
            recResponse: 519,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 519,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 519,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 519,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 520,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 521,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 519,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 522,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 520,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 521,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 522,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 490,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 490,
              },
            ],
          },
          {
            code: "77D08",
            text: "Vehicle vs. Building",
            recResponse: 523,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 523,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 523,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 523,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 524,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 525,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 523,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 526,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 524,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 524,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 525,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 525,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 523,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 526,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 525,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 524,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 525,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 523,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 526,
              },
            ],
          },
          {
            code: "77D09",
            text: "Unstable Vehicle",
            recResponse: 507,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 507,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 507,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 507,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 508,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 509,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 507,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 510,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 508,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 509,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 510,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 490,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 490,
              },
            ],
          },
          {
            code: "77D10",
            text: "Comm Vehicle",
            recResponse: 507,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 507,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 507,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 507,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 508,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 509,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 507,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 510,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 508,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 509,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 510,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 490,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 490,
              },
            ],
          },
          {
            code: "77D11",
            text: "Arrest",
            recResponse: 491,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 491,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 491,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 491,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 492,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 493,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 491,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 494,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 492,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 495,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 493,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 496,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 497,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 494,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 498,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 495,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 496,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 497,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 498,
              },
            ],
          },
          {
            code: "77D12",
            text: "Unconscious",
            recResponse: 483,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 483,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 483,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 483,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 484,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 485,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 483,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 486,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 484,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 485,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 486,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 490,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 490,
              },
            ],
          },
          {
            code: "77D13",
            text: "Not Alert w/ Abnormal Breathing",
            recResponse: 483,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 483,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 483,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 483,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 484,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 485,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 483,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 486,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 484,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 485,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 486,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 490,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 490,
              },
            ],
          },
          {
            code: "77D14",
            text: "Not Alert w/ Normal Breathing",
            recResponse: 483,
            subCodes: [
              {
                code: "A",
                text: "Animal",
                recResponse: 483,
              },
              {
                code: "B",
                text: "Blocking or Slowing Traffic",
                recResponse: 483,
              },
              {
                code: "D",
                text: "Airbags Deployed",
                recResponse: 483,
              },
              {
                code: "F",
                text: "Fire",
                recResponse: 484,
              },
              {
                code: "H",
                text: "Hazmat",
                recResponse: 485,
              },
              {
                code: "I",
                text: "Interstate/Fwy/Hwy",
                recResponse: 483,
              },
              {
                code: "J",
                text: "Fire & Hazmat",
                recResponse: 486,
              },
              {
                code: "K",
                text: "Fire & Interstate/Fwy/Hwy",
                recResponse: 484,
              },
              {
                code: "L",
                text: "Fire & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "M",
                text: "Hazmat & Interstate/Fwy/Hwy",
                recResponse: 485,
              },
              {
                code: "N",
                text: "Hazmat & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "O",
                text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "P",
                text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
                recResponse: 486,
              },
              {
                code: "Q",
                text: "Fire, Hazmat, & Trapped/Pinned Victim",
                recResponse: 490,
              },
              {
                code: "R",
                text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 487,
              },
              {
                code: "S",
                text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 488,
              },
              {
                code: "T",
                text: "Trapped/Pinned Victim",
                recResponse: 489,
              },
              {
                code: "U",
                text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
                recResponse: 490,
              },
            ],
          },
        ],
      },
    ],
  },
  // Needs Questions
  {
    protocol: 78,
    name: "Backcountry Rescue",
    shortName: "Backcountry Rescue",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: true },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 3,
    defaultPlan: 527,
    questions: [],
    availableDeterminants: [
      {
        priority: "B",
        determinants: [
          {
            code: "78B01",
            text: "Unkn Situation (Investigation)",
            defaultCode: true,
            recResponse: 527,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 527,
              },
              {
                code: "C",
                text: "Both Rising Water & Mult Sick/Injured Persons",
                recResponse: 527,
              },
              {
                code: "H",
                text: "Rising Water",
                recResponse: 527,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 527,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 527,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "78C00",
            text: "Override (Charlie)",
            recResponse: 527,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 527,
              },
              {
                code: "C",
                text: "Both Rising Water & Mult Sick/Injured Persons",
                recResponse: 527,
              },
              {
                code: "H",
                text: "Rising Water",
                recResponse: 527,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 527,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 527,
              },
            ],
          },
          {
            code: "78C01",
            text: "Avalanche (Unkn Number of Trapped Persons)",
            recResponse: 527,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 527,
              },
              {
                code: "C",
                text: "Both Rising Water & Mult Sick/Injured Persons",
                recResponse: 527,
              },
              {
                code: "H",
                text: "Rising Water",
                recResponse: 527,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 527,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 527,
              },
            ],
          },
          {
            code: "78C02",
            text: "Injured in Accessible Area",
            recResponse: 527,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 527,
              },
              {
                code: "C",
                text: "Both Rising Water & Mult Sick/Injured Persons",
                recResponse: 527,
              },
              {
                code: "H",
                text: "Rising Water",
                recResponse: 527,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 527,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 527,
              },
            ],
          },
          {
            code: "78C03",
            text: "Not Injured in Inaccessible Area",
            recResponse: 527,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 527,
              },
              {
                code: "C",
                text: "Both Rising Water & Mult Sick/Injured Persons",
                recResponse: 527,
              },
              {
                code: "H",
                text: "Rising Water",
                recResponse: 527,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 527,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 527,
              },
            ],
          },
          {
            code: "78C04",
            text: "Not Injured in High Angle Terrain",
            recResponse: 527,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 527,
              },
              {
                code: "C",
                text: "Both Rising Water & Mult Sick/Injured Persons",
                recResponse: 527,
              },
              {
                code: "H",
                text: "Rising Water",
                recResponse: 527,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 527,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 527,
              },
            ],
          },
          {
            code: "78C05",
            text: "Backcountry Rescue",
            recResponse: 85,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 85,
              },
              {
                code: "C",
                text: "Both Rising Water & Mult Sick/Injured Persons",
                recResponse: 85,
              },
              {
                code: "H",
                text: "Rising Water",
                recResponse: 85,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 85,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 85,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "78D00",
            text: "Override (Delta)",
            recResponse: 527,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 528,
              },
              {
                code: "C",
                text: "Both Rising Water & Mult Sick/Injured Persons",
                recResponse: 529,
              },
              {
                code: "H",
                text: "Rising Water",
                recResponse: 530,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 531,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 532,
              },
            ],
          },
          {
            code: "78D01",
            text: "Avalanche (Mult Trapped Persons)",
            recResponse: 533,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 534,
              },
              {
                code: "C",
                text: "Both Rising Water & Mult Sick/Injured Persons",
                recResponse: 535,
              },
              {
                code: "H",
                text: "Rising Water",
                recResponse: 535,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 533,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 534,
              },
            ],
          },
          {
            code: "78D02",
            text: "Avalanche (Single Trapped Person)",
            recResponse: 536,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 534,
              },
              {
                code: "C",
                text: "Both Rising Water & Mult Sick/Injured Persons",
                recResponse: 535,
              },
              {
                code: "H",
                text: "Rising Water",
                recResponse: 537,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 533,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 538,
              },
            ],
          },
          {
            code: "78D03",
            text: "Trapped/Injured in Crevasse",
            recResponse: 539,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 539,
              },
              {
                code: "C",
                text: "Both Rising Water & Mult Sick/Injured Persons",
                recResponse: 539,
              },
              {
                code: "H",
                text: "Rising Water",
                recResponse: 539,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 539,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 539,
              },
            ],
          },
          {
            code: "78D04",
            text: "Trapped/Injured in Inaccessible Area",
            recResponse: 540,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 540,
              },
              {
                code: "C",
                text: "Both Rising Water & Mult Sick/Injured Persons",
                recResponse: 540,
              },
              {
                code: "H",
                text: "Rising Water",
                recResponse: 540,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 540,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 540,
              },
            ],
          },
          {
            code: "78D05",
            text: "Trapped/Injured in High Angle Terrain",
            recResponse: 541,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 541,
              },
              {
                code: "C",
                text: "Both Rising Water & Mult Sick/Injured Persons",
                recResponse: 541,
              },
              {
                code: "H",
                text: "Rising Water",
                recResponse: 541,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 541,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 541,
              },
            ],
          },
          {
            code: "78D06",
            text: "Cave/Abandoned Mine",
            recResponse: 542,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 543,
              },
              {
                code: "C",
                text: "Both Rising Water & Mult Sick/Injured Persons",
                recResponse: 544,
              },
              {
                code: "H",
                text: "Rising Water",
                recResponse: 545,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 546,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 547,
              },
            ],
          },
          {
            code: "78D07",
            text: "Backcountry Rescue",
            recResponse: 85,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 85,
              },
              {
                code: "C",
                text: "Both Rising Water & Mult Sick/Injured Persons",
                recResponse: 85,
              },
              {
                code: "H",
                text: "Rising Water",
                recResponse: 85,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 85,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 85,
              },
            ],
          },
        ],
      },
    ],
  },
  // Needs Questions
  {
    protocol: 79,
    name: "Lost Person",
    shortName: "Lost Person",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: true },
      { name: "Police", priority: true },
    ],
    defaultPriority: 2,
    defaultPlan: 548,
    questions: [],
    availableDeterminants: [
      {
        priority: "C",
        determinants: [
          {
            code: "79C01",
            text: "Lost Person",
            recResponse: 548,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 548,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 548,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 548,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "79D00",
            text: "Override (Delta)",
            recResponse: 549,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 549,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 549,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 549,
              },
            ],
          },
          {
            code: "79D01",
            text: "Complex Terrain w/ Mult Sick/Injured Persons",
            recResponse: 549,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 549,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 549,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 549,
              },
            ],
          },
          {
            code: "79D02",
            text: "Complex Terrain w/ Single Sick/Injured Person",
            recResponse: 549,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 549,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 549,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 549,
              },
            ],
          },
          {
            code: "79D03",
            text: "Mult Sick/Injured Persons",
            recResponse: 549,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 549,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 549,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 549,
              },
            ],
          },
          {
            code: "79D04",
            text: "Single Sick/Injured Person",
            recResponse: 549,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 549,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 549,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 549,
              },
            ],
          },
          {
            code: "79D05",
            text: "Complex Terrain",
            recResponse: 549,
            subCodes: [
              {
                code: "B",
                text: "Both Inclement Weather & Mult People Involved",
                recResponse: 549,
              },
              {
                code: "M",
                text: "Mult People Involved",
                recResponse: 549,
              },
              {
                code: "W",
                text: "Inclement Weather",
                recResponse: 549,
              },
            ],
          },
        ],
      },
    ],
  },

  // Needs Questions
  {
    protocol: 80,
    name: "Outside Tank Fire",
    shortName: "Outside Tank Fire",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: true },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 3,
    defaultPlan: 550,
    questions: [],
    availableDeterminants: [
      {
        priority: "B",
        determinants: [
          {
            code: "80B01",
            text: "Single Natrual/LP Gas Storage Tank (<= 5 Gallons/20 Liters)",
            recResponse: 550,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 551,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 553,
              },
              {
                code: "D",
                text: "Additional/Other Tanks",
                recResponse: 553,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 550,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 551,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 553,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 551,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 550,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 550,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 551,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 552,
              },
            ],
          },
          {
            code: "80B02",
            text: "Extinguished Fire - Small Tank (1st/2nd Pty)",
            recResponse: 554,
            subCodes: [
              {
                code: "T",
                text: "Trapped",
                recResponse: 555,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 555,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 556,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "80C00",
            text: "Override (Charlie)",
            recResponse: 553,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 553,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 553,
              },
              {
                code: "D",
                text: "Additional/Other Tanks",
                recResponse: 553,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 551,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 551,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 553,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 551,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 551,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 553,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 551,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 552,
              },
            ],
          },
          {
            code: "80C01",
            text: "Small Natural/LP Gas Storage Tank",
            recResponse: 557,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 557,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 557,
              },
              {
                code: "D",
                text: "Additional/Other Tanks",
                recResponse: 557,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 557,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 557,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 557,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 557,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 557,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 557,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 557,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 557,
              },
            ],
          },
          {
            code: "80C02",
            text: "Small Chemical Storage Tank",
            recResponse: 557,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 557,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 557,
              },
              {
                code: "D",
                text: "Additional/Other Tanks",
                recResponse: 557,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 557,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 557,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 557,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 557,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 557,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 557,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 557,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 557,
              },
            ],
          },
          {
            code: "80C03",
            text: "Small Fuel Storage Tank",
            recResponse: 557,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 557,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 557,
              },
              {
                code: "D",
                text: "Additional/Other Tanks",
                recResponse: 557,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 557,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 557,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 557,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 557,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 557,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 557,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 557,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 557,
              },
            ],
          },
          {
            code: "80C04",
            text: "Extinguished Fire - Large Tank (1st/2nd Pty)",
            recResponse: 558,
            subCodes: [
              {
                code: "T",
                text: "Trapped",
                recResponse: 559,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 559,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 560,
              },
            ],
          },
          {
            code: "80C05",
            text: "Unkn Situation (Investigation)",
            recResponse: 209,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 209,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 209,
              },
              {
                code: "D",
                text: "Additional/Other Tanks",
                recResponse: 209,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 209,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 210,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 209,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 210,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 209,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 209,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 210,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 211,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "80D00",
            text: "Override (Delta)",
            recResponse: 561,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 561,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 561,
              },
              {
                code: "D",
                text: "Additional/Other Tanks",
                recResponse: 561,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 561,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 561,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 561,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 561,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 561,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 561,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 561,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 561,
              },
            ],
          },
          {
            code: "80D01",
            text: "Large Natrual/LP Gas Storage Tank",
            recResponse: 561,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 561,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 561,
              },
              {
                code: "D",
                text: "Additional/Other Tanks",
                recResponse: 561,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 561,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 561,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 561,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 561,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 561,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 561,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 561,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 561,
              },
            ],
          },
          {
            code: "80D02",
            text: "Large Chemical Storage Tank",
            recResponse: 561,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 561,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 561,
              },
              {
                code: "D",
                text: "Additional/Other Tanks",
                recResponse: 561,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 561,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 561,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 561,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 561,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 561,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 561,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 561,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 561,
              },
            ],
          },
          {
            code: "80D03",
            text: "Large Fuel Storage Tank",
            recResponse: 561,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 561,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 561,
              },
              {
                code: "D",
                text: "Additional/Other Tanks",
                recResponse: 561,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 561,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 561,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 561,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 561,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 561,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 561,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 561,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 561,
              },
            ],
          },
          {
            code: "80D04",
            text: "Refinery/Tank Farm Fire",
            recResponse: 561,
            subCodes: [
              {
                code: "A",
                text: "Animals Threatened",
                recResponse: 561,
              },
              {
                code: "B",
                text: "Buildings (Non-Residential) Threatened",
                recResponse: 561,
              },
              {
                code: "D",
                text: "Additional/Other Tanks",
                recResponse: 561,
              },
              {
                code: "O",
                text: "Other Threatened",
                recResponse: 561,
              },
              {
                code: "P",
                text: "People in Danger",
                recResponse: 561,
              },
              {
                code: "R",
                text: "Residential Threatened",
                recResponse: 561,
              },
              {
                code: "T",
                text: "Trapped",
                recResponse: 561,
              },
              {
                code: "U",
                text: "Unkn Threatened",
                recResponse: 561,
              },
              {
                code: "V",
                text: "Vehicle Threatened",
                recResponse: 561,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 561,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Persons",
                recResponse: 561,
              },
            ],
          },
        ],
      },
    ],
  },

  // Needs Questions
  {
    protocol: 81,
    name: "Sinking Vehicle/Vehicle in Floodwater",
    shortName: "Sinking Vehicle",
    description: <></>,
    services: [
      { name: "Fire", priority: true },
      { name: "EMS", priority: true },
      { name: "Police", priority: 1 },
    ],
    defaultPriority: 2,
    defaultPlan: 562,
    questions: [],
    availableDeterminants: [
      {
        priority: "C",
        determinants: [
          {
            code: "81C01",
            text: "Mult Vehicles in Floodwater (Non-Threatened)",
            recResponse: 82,
            subCodes: [
              {
                code: "M",
                text: "Mult Person Rescue",
                recResponse: 82,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 82,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Person",
                recResponse: 82,
              },
            ],
          },
          {
            code: "81C02",
            text: "Vehicle in Floodwater (Non-Threatened",
            recResponse: 82,
            subCodes: [
              {
                code: "M",
                text: "Mult Person Rescue",
                recResponse: 82,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 82,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Person",
                recResponse: 82,
              },
            ],
          },
          {
            code: "81C03",
            text: "Sinking Vehicle (No People Rptd Inside)",
            recResponse: 82,
            subCodes: [
              {
                code: "M",
                text: "Mult Person Rescue",
                recResponse: 82,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 82,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Person",
                recResponse: 82,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "81D00",
            text: "Override (Delta)",
            recResponse: 562,
            subCodes: [
              {
                code: "M",
                text: "Mult Person Rescue",
                recResponse: 562,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 562,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Person",
                recResponse: 562,
              },
            ],
          },
          {
            code: "81D01",
            text: "Sinking Vehicle - Costal Water Rescue (People in Water)",
            recResponse: 562,
            subCodes: [
              {
                code: "M",
                text: "Mult Person Rescue",
                recResponse: 562,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 562,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Person",
                recResponse: 562,
              },
            ],
          },
          {
            code: "81D02",
            text: "Sinking Vehicle - Inland Water Rescue (People in Water)",
            recResponse: 562,
            subCodes: [
              {
                code: "M",
                text: "Mult Person Rescue",
                recResponse: 562,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 562,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Person",
                recResponse: 562,
              },
            ],
          },
          {
            code: "81D03",
            text: "Sinking Vehicle - Ocean Water Rescue (People in Water)",
            recResponse: 562,
            subCodes: [
              {
                code: "M",
                text: "Mult Person Rescue",
                recResponse: 562,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 562,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Person",
                recResponse: 562,
              },
            ],
          },
        ],
      },
      {
        priority: "E",
        determinants: [
          {
            code: "81E00",
            text: "Override (Echo)",
            recResponse: 563,
            subCodes: [
              {
                code: "M",
                text: "Mult Person Rescue",
                recResponse: 563,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 563,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Person",
                recResponse: 563,
              },
            ],
          },
          {
            code: "81E01",
            text: "Sinking Vehicle (People Inside)",
            recResponse: 563,
            subCodes: [
              {
                code: "M",
                text: "Mult Person Rescue",
                recResponse: 563,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 563,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Person",
                recResponse: 563,
              },
            ],
          },
          {
            code: "81E02",
            text: "Vehicle in Floodwater (Threatened)",
            recResponse: 564,
            subCodes: [
              {
                code: "M",
                text: "Mult Person Rescue",
                recResponse: 564,
              },
              {
                code: "X",
                text: "Single Sick/Injured Person",
                recResponse: 564,
              },
              {
                code: "Y",
                text: "Mult Sick/Injured Person",
                recResponse: 564,
              },
            ],
          },
        ],
      },
    ],
  },
];
