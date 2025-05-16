import { IEMSComplaint } from "@/models/interfaces/complaints/ems/IEMSComplaint";
import { IPatientData } from "@/models/interfaces/complaints/ems/IPatientData";

export function getEMSComplaintOptions() {
  return emsComplaints.map((complaint: IEMSComplaint) => ({
    value: complaint.name,
    label: complaint.name,
    protocol: complaint.protocol,
  }));
}

export const emsComplaints: IEMSComplaint[] = [
  {
    protocol: 1,
    name: "Abdominal Pain",
    description: (
      <>
        <p>
          Key considerations for Abdominal Pain include patient alertness,
          pregnancy status for females of childbearing age, fainting/syncope,
          pain characteristics (especially ripping/tearing pain that may
          indicate aortic issues), and pain location.
        </p>
        <p className="mt-2">
          Pay special attention to age and gender factors, as they significantly
          impact determinant selection. For example, males over 35 with pain
          above the navel may require a higher response level due to increased
          cardiac risk.
        </p>
        <p className="mt-2">
          <span className="font-medium">REMEMBER:</span> Pain{" "}
          <span className="text-red-500 font-medium">above the navel</span> in
          older adults often signals greater risk, especially for cardiac or
          vascular emergencies. Use skin color (ashen/gray), fainting symptoms,
          and pain description to guide response escalation. Groin/testicular
          pain in males, while less urgent, still requires appropriate
          classification. Think in terms of:
        </p>
        <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-1">
          <li>
            <span className="font-medium">Above Navel</span> + Age + Gender →
            Increased concern
          </li>
          <li>
            <span className="font-medium">Tearing Pain</span> → Possible
            vascular event
          </li>
          <li>
            <span className="font-medium">Not Alert / Fainting</span> →
            Prioritize immediately
          </li>
        </ul>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 1,
    questions: [
      {
        text: (
          <p>
            Is **pronoun** <b>completely alert</b>{" "}
            <span className="text-red-400">(responding appropriately)</span>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Responding nlly",
            continue: true,
          },
          {
            answer: "No",
            display: "NOT responding nlly",
            continue: true,
            updateCode: "01D01",
            send: true,
          },
          {
            answer: "Unknown",
            display: "Unk if responding nlly",
            continue: true,
          },
        ],
      },

      {
        text: <p>Is she pregnant?</p>,
        questionType: "select",
        preRenderInstructions: (patient?: IPatientData) => {
          if (!patient) return false;
          const { age, gender } = patient;
          return age >= 12 && age <= 50 && gender === "Female";
        },
        answers: [
          {
            answer: "No",
            continue: true,
            display: "Not pregnant",
          },
          {
            answer: "Yes",
            continue: true,
            display: "Pregnant",
            goto: 24,
          },
          {
            answer: "Unknown",
            continue: true,
            display: "Unk if pregnant",
          },
        ],
      },

      {
        text: (
          <p>Does **pronoun** appear ashen or grey (compared to usual color)</p>
        ),
        preRenderInstructions: (patient?: IPatientData) => {
          if (!patient) return false;
          const { age } = patient;
          return age >= 50;
        },
        questionType: "select",
        answers: [
          {
            answer: "No",
            continue: true,
            display: "Not ashen or grey",
          },
          {
            answer: "Yes",
            display: "Ashen or grey",
            dependency: (patient?: IPatientData) => {
              if (!patient) return undefined;
              const { age } = patient;
              if (age >= 50) {
                return { code: "01D02" };
              }
              return undefined;
            },
            send: true,
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if ashen or grey",
            continue: true,
          },
        ],
      },

      {
        text: <p>Did **pronoun** faint or pass out? (nearly)</p>,
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "Not fainted or feeling faint",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Fainted or feeling faint",
            dependency: (patient?: IPatientData) => {
              if (!patient) return undefined;
              const { age, gender } = patient;
              if (age >= 50) {
                return { code: "01C03" };
              } else if (age >= 12 && age <= 50 && gender === "Female") {
                return { code: "01C04" };
              }
              return undefined;
            },
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if fainted or feeling faint",
            continue: true,
          },
        ],
      },

      {
        text: <p>Is **pronoun** vomiting?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "Not vomiting",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Vomiting",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if vomiting",
            continue: true,
          },
        ],
      },

      {
        text: <p>Can you describe the pain?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Pain:",
            display: "{input} pn",
            input: true,
            continue: true,
          },
          {
            answer: "Ripping/Tearing",
            display: "Ripping/Tearing pn",
            updateCode: "01C01",
            continue: true,
          },
          {
            answer: "No",
            display: "Not able to describe pn",
            continue: true,
          },
        ],
      },

      {
        text: <p>Where is the pain located?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Below the navel",
            display: "Pn below the navel",
            end: true,
          },
          {
            answer: "Above the navel",
            display: "Pn above the navel",
            dependency: (patient?: IPatientData) => {
              if (!patient) return undefined;
              const { age, gender } = patient;
              if (gender === "Male" && age >= 35) {
                return { code: "01C05" };
              } else if (gender === "Female" && age >= 45) {
                return { code: "01C06" };
              }
              return undefined;
            },
            end: true,
          },
          {
            answer: "Groin/Testical",
            preRenderInstructions: (patient?: IPatientData) => {
              if (!patient) return false;
              const { gender } = patient;
              return gender === "Male";
            },
            display: "Pn in groin/testicles",
            updateCode: "01A02",
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
            code: "01A01",
            text: "General Abdominal Pain",
            recResponse: 1,
            defaultCode: true,
          },
          {
            code: "01A02",
            text: "Testical or Groin Pain (Male)",
            recResponse: 2,
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "01C00",
            text: "ALS Override (Charlie)",
            recResponse: 3,
          },
          {
            code: "01C01",
            text: "Suspected Aortic Aneurysm (Tearing/Ripping Pain) (>= 50)",
            recResponse: 3,
          },
          {
            code: "01C02",
            text: "Diagnosed Aortic Aneurysm",
            recResponse: 3,
          },
          {
            code: "01C03",
            text: "Fainting or Near Fainting (>= 50)",
            recResponse: 3,
          },
          {
            code: "01C04",
            text: "Females w/ Fainting or Near Fainting (12-50)",
            recResponse: 3,
          },
          {
            code: "01C05",
            text: "Males w/ Pain Above Navel (>= 35)",
            recResponse: 2,
          },
          {
            code: "01C06",
            text: "Females w/ Pain Above Navel (>= 45)",
            recResponse: 2,
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "01D00",
            text: "ALS Override (Delta)",
            recResponse: 3,
          },
          {
            code: "01D01",
            text: "Not Alert",
            recResponse: 3,
          },
          {
            code: "01D02",
            text: "Ashen or Gray Color (>= 50)",
            recResponse: 3,
          },
        ],
      },
    ],
  },
  {
    protocol: 2,
    name: "Allergies",
    description: (
      <>
        <p>
          When handling Allergic Reactions, assess for signs of airway
          involvement and consciousness first. Ineffective or agonal breathing
          is treated as a true emergency requiring the highest response level.
          If the patient is not alert, or is having trouble speaking between
          breaths, escalate immediately.
        </p>

        <p className="mt-2">
          Difficulty breathing or swallowing—especially in a patient with a
          known history of severe reactions—suggests airway compromise and
          should never be underestimated. Consider whether the patient has used
          an injection (e.g., EpiPen) or taken medications; this may affect
          sub-code selection but does not rule out severity. Prior reactions
          often mean increased risk of rapid progression.
        </p>

        <p className="mt-2">
          Note what caused the reaction. Insect stings, spider bites, or snake
          bites may trigger systemic symptoms and need appropriate coding. A
          swarming attack (e.g., multiple stings) is always treated as a
          higher-priority event due to increased toxin load and the risk of
          rapid deterioration. Time of onset, known allergy history, and any
          treatment taken so far should all be captured to guide proper
          determinant selection.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: 0 },
    ],
    defaultPriority: 4,
    defaultPlan: 4,
    questions: [
      {
        text: (
          <p>
            Is **pronoun** <b>completely alert</b>{" "}
            <span className="text-red-400">(responding appropriately)</span>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Responding nlly",
            continue: true,
          },
          {
            answer: "No",
            display: "NOT responding nlly",
            continue: true,
            updateCode: "02D01",
          },
          {
            answer: "Unknown",
            display: "Unk if responding nlly",
            continue: true,
          },
        ],
      },

      {
        text: <p>Is **pronoun** having difficulty breathing or swallowing?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No diff breathing or swallowing",
            continue: true,
            updateCode: "02A01",
          },
          {
            answer: "Yes",
            display: "Diff breathing or swallowing",
            continue: true,
            updateCode: "02C01",
          },
          {
            answer: "INEFFECTIVE/AGONAL BREATHING",
            display: "INEFFECTIVE/AGONAL BREATHING",
            end: true,
            updateCode: "02E01",
          },
          {
            answer: "Unknown",
            display: "Unk if diff breathing or swallowing",
            continue: true,
            updateCode: "02B01",
          },
        ],
      },

      {
        text: <p>Is **pronoun** having difficulty speaking between breaths?</p>,
        questionType: "select",
        preRenderInstructions: (patient?: IPatientData, answers?: any[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.answer;
          return lastAnswer === "Diff breathing or swallowing";
        },
        answers: [
          {
            answer: "No",
            display: "No diff speaking between breaths",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Diff speaking between breaths",
            continue: true,
            updateCode: "02D02",
          },
          {
            answer: "Unknown",
            display: "Unk if diff speaking between breaths",
            continue: true,
          },
        ],
      },

      {
        text: <p>What caused or led up to the reaction?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Insect Sting",
            display: "Caused by Insect Sting",
            continue: true,
          },
          {
            answer: "Spider Bite",
            display: "Caused by Spider Bite",
            continue: true,
            updateCode: "02A02",
          },
          {
            answer: "SWARMING ATTACK",
            display: "Caused by SWARMING ATTACK (Bees, Wasps, Hornets)",
            continue: true,
            updateCode: "02D03",
          },
          {
            answer: "SNAKE BITE",
            display: "Caused by SNAKE BITE",
            continue: true,
            updateCode: "02D04",
          },
          {
            answer: "Other:",
            display: "Caused by {input}",
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk cause of rx",
            continue: true,
          },
        ],
      },

      {
        text: <p>When did the reaction start?</p>,
        questionType: "input",
        answers: [
          {
            answer: "Time of reaction...",
            display: "Rx started {input}",
            continue: true,
          },
        ],
      },

      {
        text: <p>Does **pronoun** have a history of allergic reactions?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No hx of allergic rx",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Hx of allergic rx",
            continue: true,
            updateCode: "02C02",
          },
          {
            answer: "Unknown",
            display: "Unk hx of allergic rx",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Do they take any medications or have an injection for this type of
            reaction?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No meds or injection for this rx",
            continue: true,
          },
          {
            answer: "Yes - Injection",
            display: "Injection Administered or Advised",
            continue: true,
            updateSubCode: "I",
          },
          {
            answer: "Yes - Medication",
            display: "Medication Administered or Advised",
            continue: true,
            updateSubCode: "M",
          },
          {
            answer: "Unknown",
            display: "Unk if meds or injection have been taken",
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
            code: "02A01",
            text: "No Diff Breathing or Swallowing",
            recResponse: 4,
          },
          {
            code: "02A02",
            text: "Spider Bite",
            recResponse: 5,
          },
          {
            code: "02A03",
            text: "Asymptomatic Allergic Rx",
            recResponse: 5,
            defaultCode: true,
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "02B00",
            text: "BLS Override (Bravo)",
            recResponse: 4,
            subCodes: [
              {
                code: "I",
                text: "Injection Administered or Advised",
                recResponse: 4,
              },
              {
                code: "M",
                text: "Medication Administered or Advised",
                recResponse: 4,
              },
            ],
          },
          {
            code: "02B01",
            text: "Unk Code/Other Codes not Applicable",
            recResponse: 4,
            subCodes: [
              {
                code: "I",
                text: "Injection Administered or Advised",
                recResponse: 4,
              },
              {
                code: "M",
                text: "Medication Administered or Advised",
                recResponse: 4,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "02C00",
            text: "ALS Override (Charlie)",
            recResponse: 6,
            subCodes: [
              {
                code: "I",
                text: "Injection Administered or Advised",
                recResponse: 6,
              },
              {
                code: "M",
                text: "Medication Administered or Advised",
                recResponse: 6,
              },
            ],
          },
          {
            code: "02C01",
            text: "Diff Breathing or Swallowing",
            recResponse: 6,
            subCodes: [
              {
                code: "I",
                text: "Injection Administered or Advised",
                recResponse: 6,
              },
              {
                code: "M",
                text: "Medication Administered or Advised",
                recResponse: 6,
              },
            ],
          },
          {
            code: "02C02",
            text: "Hx of Severe Allergic Rx",
            recResponse: 6,
            subCodes: [
              {
                code: "I",
                text: "Injection Administered or Advised",
                recResponse: 6,
              },
              {
                code: "M",
                text: "Medication Administered or Advised",
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
            code: "02D00",
            text: "ALS Override (Delta)",
            recResponse: 7,
            subCodes: [
              {
                code: "I",
                text: "Injection Administered or Advised",
                recResponse: 7,
              },
              {
                code: "M",
                text: "Medication Administered or Advised",
                recResponse: 7,
              },
            ],
          },
          {
            code: "02D01",
            text: "Not Alert",
            recResponse: 6,
            subCodes: [
              {
                code: "I",
                text: "Injection Administered or Advised",
                recResponse: 6,
              },
              {
                code: "M",
                text: "Medication Administered or Advised",
                recResponse: 6,
              },
            ],
          },
          {
            code: "02D02",
            text: "Diff Speaking Between Breaths",
            recResponse: 6,
            subCodes: [
              {
                code: "I",
                text: "Injection Administered or Advised",
                recResponse: 6,
              },
              {
                code: "M",
                text: "Medication Administered or Advised",
                recResponse: 6,
              },
            ],
          },
          {
            code: "02D03",
            text: "Swarming Attack (Bees, Wasps, Hornets)",
            recResponse: 6,
            subCodes: [
              {
                code: "I",
                text: "Injection Administered or Advised",
                recResponse: 6,
              },
              {
                code: "M",
                text: "Medication Administered or Advised",
                recResponse: 6,
              },
            ],
          },
          {
            code: "02D04",
            text: "Snakebite",
            recResponse: 6,
            subCodes: [
              {
                code: "I",
                text: "Injection Administered or Advised",
                recResponse: 6,
              },
              {
                code: "M",
                text: "Medication Administered or Advised",
                recResponse: 6,
              },
            ],
          },
        ],
      },
      {
        priority: "E",
        determinants: [
          {
            code: "02E00",
            text: "ALS Override (Echo)",
            recResponse: 8,
            subCodes: [
              {
                code: "I",
                text: "Injection Administered or Advised",
                recResponse: 8,
              },
              {
                code: "M",
                text: "Medication Administered or Advised",
                recResponse: 8,
              },
            ],
          },
          {
            code: "02E01",
            text: "INEFFECTIVE BREATHING",
            recResponse: 8,
            notBreathing: true,
            subCodes: [
              {
                code: "I",
                text: "Injection Administered or Advised",
                recResponse: 6,
              },
              {
                code: "M",
                text: "Medication Administered or Advised",
                recResponse: 6,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 3,
    name: "Animal Bite",
    description: (
      <>
        <p>
          Key considerations for Animal Bites include the type of animal
          involved, the location and severity of the injury, and whether the
          attack is ongoing. Certain animals—such as large or exotic
          species—present increased risk of severe trauma, infection, or
          envenomation.
        </p>
        <p className="mt-2">
          Body area affected is a major factor; bites to the head, neck, or
          chest, or those involving dangerous bleeding, airway compromise, or
          altered consciousness may indicate the need for a higher-level
          response. Always assess for breathing difficulty when injury involves
          upper body structures.
        </p>
        <p className="mt-2">
          Additional factors such as the presence of multiple bites, evidence of
          mauling, or uncertainty about the animal's current location should
          prompt consideration of scene safety and potential law enforcement
          involvement.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: 3 },
    ],
    defaultPriority: 4,
    defaultPlan: 9,
    questions: [
      {
        text: <p>Is the attack currently happening?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "Attack not happening now",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Attack is happening now",
            end: true,
            updateCode: "03D09",
          },
          {
            answer: "Unknown",
            display: "Unk if attack is happening now",
            continue: true,
            updateCode: "03B03",
          },
        ],
      },

      {
        text: <p>When did the attack/incident happen?</p>,
        questionType: "select",
        answers: [
          {
            answer: "< 6 hours ago",
            display: "Happened < 6 hours ago",
            continue: true,
          },
          {
            answer: ">= 6 hours ago",
            display: "Happened >= 6 hours ago",
            continue: true,
            updateCode: "03A02",
          },
          {
            answer: "Unknown",
            display: "Unk when attack happened",
            continue: true,
          },
        ],
      },

      {
        text: <p>What kind of animal bit the patient?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Insect",
            display: "Insect Bite",
            continue: true,
          },
          {
            answer: "Spider",
            display: "Spider Bite",
            continue: true,
          },
          {
            answer: "Large:",
            display: "Bit by {input}",
            input: true,
            continue: true,
            updateCode: "03D06",
          },
          {
            answer: "Exotic:",
            display: "Bit by {input}",
            input: true,
            continue: true,
            updateCode: "03D07",
          },
          {
            answer: "MULTIPLE ANIMALS/MAULING",
            display: "Multiple Animals or Mauling",
            continue: true,
            updateCode: "03D08",
          },
          {
            answer: "Other:",
            display: "Bit by {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk animal",
            continue: true,
            updateCode: "03B03",
          },
        ],
      },

      {
        text: <p>Where is the animal now?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Location:",
            display: "Animal is at {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Gone",
            display: "Animal is gone",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk where animal is",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is there any <span className="text-red-400">SERIOUS</span> bleeding?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No serious bleeding",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Serious bleeding",
            continue: true,
            updateCode: "03B02",
          },
          {
            answer: "Unknown",
            display: "Unk if serious bleeding",
            continue: true,
            updateCode: "03B03",
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** <b>completely alert</b>{" "}
            <span className="text-red-400">(responding appropriately)</span>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Responding nlly",
            continue: true,
          },
          {
            answer: "No",
            display: "NOT responding nlly",
            updateCode: "03D03",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if responding nlly",
            continue: true,
          },
        ],
      },

      {
        text: <p>What part of the body was bitten?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Not Dangerous Body Area:",
            display: "Bit on {input}",
            input: true,
            continue: true,
            updateCode: "03A01",
          },
          {
            answer: "Possibly Dangerous Body Area:",
            display: "Bit on {input}",
            input: true,
            continue: true,
            updateCode: "03B01",
          },
          {
            answer: "Chest/Neck/Head",
            display: "Bit on Chest/Neck/Head",
            continue: true,
            updateCode: "03D05",
          },
          {
            answer: "Dangerous Body Area:",
            display: "Bit on {input}",
            input: true,
            continue: true,
            updateCode: "03D05",
          },
          {
            answer: "Unknown",
            display: "Unk body area bitten",
            continue: true,
            updateCode: "03B03",
          },
        ],
      },

      {
        text: <p>Is **pronoun** having difficulty breathing or speaking?</p>,
        questionType: "select",
        preRenderInstructions: (patient?: IPatientData, answers?: any[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.answer;
          return lastAnswer === "Bit on Chest/Neck/Head";
        },
        answers: [
          {
            answer: "No",
            display: "Not diff breathing or speaking",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Diff breathing or speaking",
            continue: true,
            updateCode: "03D04",
          },
          {
            answer: "INEFFECTIVE/AGONAL BREATHING",
            display: "INEFFECTIVE/AGONAL BREATHING",
            end: true,
            updateCode: "03D01",
          },
          {
            answer: "Unknown",
            display: "Unk if diff breathing or speaking",
            continue: true,
            updateCode: "03B03",
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "A",
        determinants: [
          {
            code: "03A01",
            text: "Not Dangerous Body Area",
            recResponse: 9,
            defaultCode: true,
          },
          {
            code: "03A02",
            text: "Non-Recent (>= 6hrs) Injs (w/o priority symptoms)",
            recResponse: 10,
          },
          {
            code: "03A03",
            text: "Superficial Injs",
            recResponse: 10,
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "03B00",
            text: "BLS Override (Bravo)",
            recResponse: 9,
          },
          {
            code: "03B01",
            text: "Possibly Dangerous Body Area",
            recResponse: 9,
          },
          {
            code: "03B02",
            text: "Serious Hemorrhage",
            recResponse: 9,
          },
          {
            code: "03B03",
            text: "Unkn Code/Other Codes not Applicable",
            recResponse: 9,
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "03D00",
            text: "ALS Override (Delta)",
            recResponse: 11,
          },
          {
            code: "03D01",
            text: "Arrest",
            recResponse: 12,
            notBreathing: true,
          },
          {
            code: "03D02",
            text: "Unconscious",
            recResponse: 13,
            notConscious: true,
          },
          {
            code: "03D03",
            text: "Not Alert",
            recResponse: 11,
          },
          {
            code: "03D04",
            text: "Chest/Neck/Head Injs (w/ Diff Breathing)",
            recResponse: 11,
          },
          {
            code: "03D05",
            text: "Dangerous Body Area",
            recResponse: 11,
          },
          {
            code: "03D06",
            text: "Large Animal",
            recResponse: 11,
          },
          {
            code: "03D07",
            text: "Exotic Animal",
            recResponse: 11,
          },
          {
            code: "03D08",
            text: "Mauling or Mult Animals",
            recResponse: 11,
          },
          {
            code: "03D09",
            text: "Attack In Progress",
            recResponse: 11,
          },
        ],
      },
    ],
  },
  {
    protocol: 4,
    name: "Assault",
    description: (
      <>
        <p>
          Key considerations for Assault incidents include the mechanism and
          severity of injury, patient consciousness, and the body area affected.
          Particular attention should be given to injuries involving the head,
          neck, or chest, as well as signs of serious bleeding or deformity.
        </p>
        <p className="mt-2">
          This protocol also differentiates between general assault, sexual
          assault, and less common incidents such as stun gun deployment. The
          patient's alertness level and any difficulty breathing should prompt
          escalation if airway compromise or decreased consciousness is
          observed.
        </p>
        <p className="mt-2">
          Ensure scene safety is considered, especially if the assailant is
          still nearby. In cases of sexual assault, preserve forensic evidence
          and provide care with sensitivity. Law enforcement involvement is
          typically required.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: 4 },
    ],
    defaultPriority: 4,
    defaultPlan: 14,
    questions: [
      {
        text: <p>When did this incident happen?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Just Now",
            display: "Happened just now",
            continue: true,
          },
          {
            answer: "< 6 hours ago",
            display: "Happened < 6 hours ago",
            continue: true,
          },
          {
            answer: ">= 6 hours ago",
            display: "Happened >= 6 hours ago",
            continue: true,
            updateCode: "04A03",
          },
          {
            answer: "Unknown",
            display: "Unk when incident happened",
            continue: true,
          },
        ],
      },

      {
        text: <p>What type of incident is this?</p>,
        questionType: "select",
        omitQuestion: true,
        answers: [
          {
            answer: "Assault",
            display: "Assault",
            continue: true,
            updateSubCode: "A",
          },
          {
            answer: "Sexual Assault",
            display: "Sexual Assault",
            continue: true,
            updateSubCode: "S",
          },
          {
            answer: "Stun Gun",
            display: "Stun Gun",
            continue: true,
            updateSubCode: "T",
          },
        ],
      },

      {
        text: <p>Where is the assailant now?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Location:",
            display: "Assailant is {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk where assailant is",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is there any <span className="text-red-400">SERIOUS</span> bleeding?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No serious bleeding",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Serious bleeding",
            continue: true,
            updateCode: "04B02",
          },
          {
            answer: "Unknown",
            display: "Unk if serious bleeding",
            continue: true,
            updateCode: "04B03",
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** <b>completely alert</b>{" "}
            <span className="text-red-400">(responding appropriately)</span>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Responding nlly",
            continue: true,
          },
          {
            answer: "No",
            display: "NOT responding nlly",
            updateCode: "04D01",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if responding nlly",
            continue: true,
          },
        ],
      },

      {
        text: <p>What part of the body was/is injured?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Not Dangerous Body Area:",
            display: "Injury to {input}",
            input: true,
            continue: true,
            updateCode: "04A02",
          },
          {
            answer: "Possibly Dangerous Body Area:",
            display: "Injury to {input}",
            input: true,
            continue: true,
            updateCode: "04B01",
          },
          {
            answer: "Chest/Neck/Head",
            display: "Injury to Chest/Neck/Head",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk body area injured",
            continue: true,
            updateCode: "04B03",
          },
        ],
      },

      {
        text: <p>Is **pronoun** having difficulty breathing or speaking?</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.answer;
          return lastAnswer === "Injured on Chest/Neck/Head";
        },
        answers: [
          {
            answer: "No",
            display: "Not diff breathing or speaking",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Diff breathing or speaking",
            continue: true,
            updateCode: "04D04",
          },
          {
            answer: "INEFFECTIVE/AGONAL BREATHING",
            display: "INEFFECTIVE/AGONAL BREATHING",
            end: true,
            updateCode: "04D01",
          },
          {
            answer: "Unknown",
            display: "Unk if diff breathing or speaking",
            continue: true,
          },
        ],
      },

      {
        text: <p>Is there any deformity from the injury?</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const answer = answers?.find(
            (a) => a.question === "What part of the body was/is injured?"
          );
          return answer?.defultAnswer === "Not Dangerous Body Area:";
        },
        answers: [
          {
            answer: "No",
            display: "No deformity",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Deformity present",
            continue: true,
            updateCode: "04A01",
          },
          {
            answer: "Unknown",
            display: "Unk if deformity present",
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
            code: "04A01",
            text: "Not Dangerous Body Area w/ Deformity",
            recResponse: 14,
            subCodes: [
              {
                code: "A",
                text: "Assault",
                recResponse: 14,
              },
              {
                code: "S",
                text: "Sexual Assault",
                recResponse: 14,
              },
              {
                code: "T",
                text: "Stun Gun",
                recResponse: 14,
              },
            ],
          },
          {
            code: "04A02",
            text: "Not Dangerous Body Area",
            recResponse: 14,
            subCodes: [
              {
                code: "A",
                text: "Assault",
                recResponse: 14,
              },
              {
                code: "S",
                text: "Sexual Assault",
                recResponse: 14,
              },
              {
                code: "T",
                text: "Stun Gun",
                recResponse: 14,
              },
            ],
          },
          {
            code: "04A03",
            text: "Non-Recent (>= 6hrs) Injs (w/o priority symptoms)",
            recResponse: 15,
            subCodes: [
              {
                code: "A",
                text: "Assault",
                recResponse: 15,
              },
              {
                code: "S",
                text: "Sexual Assault",
                recResponse: 15,
              },
              {
                code: "T",
                text: "Stun Gun",
                recResponse: 15,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "04B00",
            text: "BLS Override (Bravo)",
            recResponse: 14,
            subCodes: [
              {
                code: "A",
                text: "Assault",
                recResponse: 14,
              },
              {
                code: "S",
                text: "Sexual Assault",
                recResponse: 14,
              },
              {
                code: "T",
                text: "Stun Gun",
                recResponse: 14,
              },
            ],
          },
          {
            code: "04B01",
            text: "Possibly Dangerous Body Area",
            recResponse: 14,
            subCodes: [
              {
                code: "A",
                text: "Assault",
                recResponse: 14,
              },
              {
                code: "S",
                text: "Sexual Assault",
                recResponse: 14,
              },
              {
                code: "T",
                text: "Stun Gun",
                recResponse: 14,
              },
            ],
          },
          {
            code: "04B02",
            text: "Serious Hemorrhage",
            recResponse: 14,
            subCodes: [
              {
                code: "A",
                text: "Assault",
                recResponse: 14,
              },
              {
                code: "S",
                text: "Sexual Assault",
                recResponse: 14,
              },
              {
                code: "T",
                text: "Stun Gun",
                recResponse: 14,
              },
            ],
          },
          {
            code: "04B03",
            text: "Unkn Code/Other Codes not Applicable",
            recResponse: 14,
            defaultCode: true,
            subCodes: [
              {
                code: "A",
                text: "Assault",
                recResponse: 14,
              },
              {
                code: "S",
                text: "Sexual Assault",
                recResponse: 14,
              },
              {
                code: "T",
                text: "Stun Gun",
                recResponse: 14,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "04D00",
            text: "ALS Override (Delta)",
            recResponse: 16,
            subCodes: [
              {
                code: "A",
                text: "Assault",
                recResponse: 16,
              },
              {
                code: "S",
                text: "Sexual Assault",
                recResponse: 16,
              },
              {
                code: "T",
                text: "Stun Gun",
                recResponse: 16,
              },
            ],
          },
          {
            code: "04D01",
            text: "Arrest",
            recResponse: 17,
            subCodes: [
              {
                code: "A",
                text: "Assault",
                recResponse: 17,
              },
              {
                code: "S",
                text: "Sexual Assault",
                recResponse: 17,
              },
              {
                code: "T",
                text: "Stun Gun",
                recResponse: 17,
              },
            ],
          },
          {
            code: "04D02",
            text: "Unconscious",
            recResponse: 18,
            subCodes: [
              {
                code: "A",
                text: "Assault",
                recResponse: 18,
              },
              {
                code: "S",
                text: "Sexual Assault",
                recResponse: 18,
              },
              {
                code: "T",
                text: "Stun Gun",
                recResponse: 18,
              },
            ],
          },
          {
            code: "04D03",
            text: "Not Alert",
            recResponse: 16,
            subCodes: [
              {
                code: "A",
                text: "Assault",
                recResponse: 16,
              },
              {
                code: "S",
                text: "Sexual Assault",
                recResponse: 16,
              },
              {
                code: "T",
                text: "Stun Gun",
                recResponse: 16,
              },
            ],
          },
          {
            code: "04D04",
            text: "Chest/Neck/Head Inj (w/ Diff Breathing)",
            recResponse: 16,
            subCodes: [
              {
                code: "A",
                text: "Assault",
                recResponse: 16,
              },
              {
                code: "S",
                text: "Sexual Assault",
                recResponse: 16,
              },
              {
                code: "T",
                text: "Stun Gun",
                recResponse: 16,
              },
            ],
          },
          {
            code: "04D05",
            text: "Multiple Victims",
            recResponse: 19,
            multVictim: true,
            subCodes: [
              {
                code: "A",
                text: "Assault",
                recResponse: 19,
              },
              {
                code: "S",
                text: "Sexual Assault",
                recResponse: 19,
              },
              {
                code: "T",
                text: "Stun Gun",
                recResponse: 19,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 5,
    name: "Back Pain",
    description: (
      <>
        <p>
          Key considerations for Back Pain include the cause of pain (traumatic
          vs. non-traumatic), associated symptoms such as difficulty breathing
          or altered consciousness, and high-risk pain descriptions (e.g.,
          ripping or tearing pain in older adults). These factors may indicate
          vascular emergencies such as aortic aneurysm.
        </p>
        <p className="mt-2">
          Traumatic causes such as recent falls or injuries require additional
          evaluation for spinal involvement or internal bleeding. Non-traumatic
          back pain is often less urgent but may still warrant transport
          depending on the patient's condition and comorbidities.
        </p>
        <p className="mt-2">
          Fainting, color changes (e.g., ashen/grey skin), or chest involvement
          may indicate systemic compromise and should be prioritized
          accordingly. Always assess pain characteristics and associated
          symptoms in patients over 50 with severe or sudden onset.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 20,
    questions: [
      {
        text: (
          <p>
            What <b>caused</b> the back pain?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Recent Fall",
            display: "Pain from a recent fall",
            goto: 17,
          },
          {
            answer: "Recent Trauma",
            display: "Pain from a recent trauma",
            goto: 30,
          },
          {
            answer: "Non-Traumatic",
            display: "Caused by non-trauma",
            continue: true,
            updateCode: "05A01",
          },
          {
            answer: "Non-Recent (>= 6hrs ago) Trauma",
            display: "Caused by non-recent trauma",
            continue: true,
            updateCode: "05A02",
          },
          {
            answer: "Unknown",
            display: "Unk cause of pn",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            <b>When</b> did the pain <b>start</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Time:",
            display: "Pn started {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk when pn started",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Does **pronoun** have any <b>chest pain</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No chest pn",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Has chest pn",
            goto: 10,
          },
          {
            answer: "Unknown",
            display: "Unk if has chest pn",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** <b>completely alert</b>{" "}
            <span className="text-red-400">(responding appropriately)</span>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Responding nlly",
            continue: true,
          },
          {
            answer: "No",
            display: "NOT responding nlly",
            updateCode: "05D01",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if responding nlly",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>Does **pronoun** appear ashen or grey (compared to usual color)</p>
        ),
        preRenderInstructions: (patient?: IPatientData) => {
          if (!patient) return false;
          const { age } = patient;
          return age >= 50;
        },
        questionType: "select",
        answers: [
          {
            answer: "No",
            continue: true,
            display: "Not ashen or grey",
          },
          {
            answer: "Yes",
            display: "Ashen or grey",
            dependency: (patient?: IPatientData) => {
              if (!patient) return undefined;
              const { age } = patient;
              if (age >= 50) {
                return { code: "05D02" };
              }
              return undefined;
            },
            send: true,
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if ashen or grey",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** having <b>difficulty breathing</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No diff breathing",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Diff breathing",
            continue: true,
            updateCode: "05C04",
          },
          {
            answer: "Unknown",
            display: "Unk if diff breathing",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** <b>fainting</b> or <b>near fainting</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (patient?: IPatientData) => {
          if (!patient) return false;
          const { age } = patient;
          return age >= 50;
        },
        answers: [
          {
            answer: "No",
            display: "Not fainting or near fainting",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Fainting or near fainting",
            continue: true,
            updateCode: "05C03",
          },
          {
            answer: "Unknown",
            display: "Unk if fainting or near fainting",
            continue: true,
          },
        ],
      },

      {
        text: <p>Can **pronoun** describe the pain?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Pain:",
            display: "Pn is {input}",
            input: true,
            continue: true,
          },
          {
            answer: "RIPPING/TEARING",
            display: "Pn is ripping or tearing",
            continue: true,
            dependency: (patient?: IPatientData) => {
              if (!patient) return undefined;
              const { age } = patient;
              if (age >= 50) {
                return { code: "05C01" };
              }
              return undefined;
            },
          },
          {
            answer: "No",
            display: "Unable to describe pn",
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
            code: "05A01",
            text: "Non-Traumatic Back Pain",
            recResponse: 20,
            defaultCode: true,
          },
          {
            code: "05A02",
            text: "Non-Recent (>= 6hrs) Traumatic Back Pain (w/o priority symptoms)",
            recResponse: 20,
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "05C00",
            text: "ALS Override (Charlie)",
            recResponse: 21,
          },
          {
            code: "05C01",
            text: "Suspected Aortic Aneurysm (Tearing/Ripping Pain) (>= 50)",
            recResponse: 21,
          },
          {
            code: "05C02",
            text: "Diagnosed Aortic Aneurysm",
            recResponse: 21,
          },
          {
            code: "05C03",
            text: "Fainting or Near Fainting (>= 50)",
            recResponse: 21,
          },
          {
            code: "05C04",
            text: "Diff Breathing",
            recResponse: 21,
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "05D00",
            text: "ALS Override (Delta)",
            recResponse: 21,
          },
          {
            code: "05D01",
            text: "Not Alert",
            recResponse: 21,
          },
          {
            code: "05D02",
            text: "Ashen or Gray Color (>= 50)",
            recResponse: 21,
          },
        ],
      },
    ],
  },
  {
    protocol: 6,
    name: "Breathing Problems",
    description: (
      <>
        <p>
          Key considerations for Breathing Problems include the patient’s
          alertness, effectiveness of breathing, and presence of airway
          interventions such as tracheostomies. Difficulty speaking, skin color
          changes, and clammy or cold skin may indicate a progression toward
          respiratory failure and should prompt rapid ALS response.
        </p>
        <p className="mt-2">
          Respiratory history—such as asthma, COPD, or other lung conditions—can
          impact treatment decisions and prioritization. Confirm whether
          prescribed inhalers or medications were taken, and assess for
          tracheostomy use, especially in patients showing signs of distress.
        </p>
        <p className="mt-2">
          Ineffective or absent breathing requires immediate intervention.
          Always consider airway compromise, oxygenation status, and the need
          for advanced airway management or ventilatory support.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 2,
    defaultPlan: 22,
    questions: [
      {
        text: <p>Is **pronoun** able to talk to your (cry) at all?</p>,
        questionType: "select",
        omitQuestion: true,
        answers: [
          {
            answer: "Yes",
            display: "Can talk or cry",
            continue: true,
          },
          {
            answer: "No",
            display: "Cannot talk or cry",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if can talk or cry",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Does **pronoun** have <b>difficulty</b> speaking <b>between</b>{" "}
            breaths?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const firstAnswer = answers?.[0]?.answer;
          return firstAnswer === "Can talk or cry";
        },
        answers: [
          {
            answer: "No",
            display: "No diff speaking btwn breaths",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Diff speaking btwn breaths",
            updateCode: "06D02",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if diff speaking btwn breaths",
            continue: true,
          },
        ],
      },

      {
        text: <p>Did **pronoun** choke on anything first?</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const firstAnswer = answers?.[0]?.answer;
          return firstAnswer === "Cannot talk or cry";
        },
        answers: [
          {
            answer: "No",
            display: "Did NOT choke prior",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Did choke prior",
            goto: 11,
          },
          {
            answer: "Unknown",
            display: "Unk if choked prior",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** <b>completely alert</b>{" "}
            <span className="text-red-400">(responding appropriately)</span>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Responding nlly",
            continue: true,
          },
          {
            answer: "No",
            display: "NOT responding nlly",
            updateCode: "06D01",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if responding nlly",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** <b>changing color</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "Not changing color",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Changing color",
            updateCode: "06D03",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if changing color",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** <b>clammy</b> (cold sweats)?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "Not clammy",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Clammy or cold sweats",
            updateCode: "06D04",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if clammy or cold sweats",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Does **pronoun** have <b>asthma</b> or <b>COPD</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No asthma or COPD",
            continue: true,
          },
          {
            answer: "Asthma",
            display: "Has asthma",
            continue: true,
            updateSubCode: "A",
          },
          {
            answer: "COPD",
            display: "Has COPD",
            continue: true,
            updateSubCode: "E",
          },
          {
            answer: "Both",
            display: "Has both asthma and COPD",
            continue: true,
            updateSubCode: "E",
          },
          {
            answer: "Other:",
            display: "Has other lung problems: {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if any lung problems",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Does **pronoun** have a <b>prescribed inhaler</b> or{" "}
            <b>nebulizer</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.answer;
          return lastAnswer === "Has asthma" || lastAnswer === "Has COPD";
        },
        omitQuestion: true,
        answers: [
          {
            answer: "Yes - available now",
            display: "Has inhaler/nebulizer available now",
            continue: true,
          },
          {
            answer: "Yes - but not readily available now",
            display: "Has inhaler/nebulizer but not available now",
            continue: true,
          },
          {
            answer: "No",
            display: "No inhaler/nebulizer available",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if has inhaler/nebulizer",
            continue: true,
          },
        ],
      },

      {
        text: <p>Has **pronoun** used it yet?</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const answer = answers?.find(
            (a) =>
              a.question ===
              "Does **pronoun** have a prescribed inhaler or nebulizer?"
          )?.answer;
          return (
            answer === "Has inahler/nebulizer available now" ||
            answer === "Has inhaler/nebulizer but not available now"
          );
        },
        answers: [
          {
            answer: "No",
            display: "Has NOT used inhaler/nebulizer",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Has used inhaler/nebulizer",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if used inhaler/nebulizer",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Can you, or someone there, <b>go</b> get it <b>now</b>?
          </p>
        ),
        questionType: "select",
        omitQuestion: true,
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const answer = answers?.find(
            (a) => a.question === "Has **pronoun** used it yet?"
          )?.answer;
          return answer === "Has NOT used inhaler/nebulizer";
        },
        answers: [
          {
            answer: "Yes",
            display: "Can get inhaler/nebulizer now",
            continue: true,
          },
          {
            answer: "No",
            display: "Cannot get inhaler/nebulizer now",
            continue: true,
          },
        ],
      },

      {
        text: <p>Give instructions on using nebulizer/inhaler</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const answer = answers?.find(
            (a) => a.question === "Can you, or someone there, go get it now?"
          )?.answer;
          return answer === "Can get inhaler/nebulizer now";
        },
        answers: [
          {
            answer: "Complete",
            display: "Inhaler/Nebulizer instructions given",
            continue: true,
          },
          {
            answer: "Unable to complete",
            display: "Unable to give inhaler/nebulizer instructions",
            continue: true,
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "C",
        determinants: [
          {
            code: "06C01",
            text: "Abnormal Breathing",
            recResponse: 22,
            defaultCode: true,
            subCodes: [
              {
                code: "A",
                text: "Asthma",
                recResponse: 22,
              },
              {
                code: "E",
                text: "COPD (Emphysema/Chronic Bronchitis)",
                recResponse: 22,
              },
              {
                code: "O",
                text: "Other Lung Problems",
                recResponse: 22,
              },
            ],
          },
          {
            code: "06C02",
            text: "Tracheostomy (No Obvious Distress)",
            recResponse: 23,
            subCodes: [
              {
                code: "A",
                text: "Asthma",
                recResponse: 23,
              },
              {
                code: "E",
                text: "COPD (Emphysema/Chronic Bronchitis)",
                recResponse: 23,
              },
              {
                code: "O",
                text: "Other Lung Problems",
                recResponse: 23,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "06D00",
            text: "ALS Override (Delta)",
            recResponse: 24,
            subCodes: [
              {
                code: "A",
                text: "Asthma",
                recResponse: 24,
              },
              {
                code: "E",
                text: "COPD (Emphysema/Chronic Bronchitis)",
                recResponse: 24,
              },
              {
                code: "O",
                text: "Other Lung Problems",
                recResponse: 24,
              },
            ],
          },
          {
            code: "06D01",
            text: "Not Alert",
            recResponse: 22,
            subCodes: [
              {
                code: "A",
                text: "Asthma",
                recResponse: 22,
              },
              {
                code: "E",
                text: "COPD (Emphysema/Chronic Bronchitis)",
                recResponse: 22,
              },
              {
                code: "O",
                text: "Other Lung Problems",
                recResponse: 22,
              },
            ],
          },
          {
            code: "06D02",
            text: "Diff Speaking Between Breaths",
            recResponse: 22,
            subCodes: [
              {
                code: "A",
                text: "Asthma",
                recResponse: 22,
              },
              {
                code: "E",
                text: "COPD (Emphysema/Chronic Bronchitis)",
                recResponse: 22,
              },
              {
                code: "O",
                text: "Other Lung Problems",
                recResponse: 22,
              },
            ],
          },
          {
            code: "06D03",
            text: "Changing Color",
            recResponse: 22,
            subCodes: [
              {
                code: "A",
                text: "Asthma",
                recResponse: 22,
              },
              {
                code: "E",
                text: "COPD (Emphysema/Chronic Bronchitis)",
                recResponse: 22,
              },
              {
                code: "O",
                text: "Other Lung Problems",
                recResponse: 22,
              },
            ],
          },
          {
            code: "06D04",
            text: "Clammy or Cold Sweats",
            recResponse: 22,
            subCodes: [
              {
                code: "A",
                text: "Asthma",
                recResponse: 22,
              },
              {
                code: "E",
                text: "COPD (Emphysema/Chronic Bronchitis)",
                recResponse: 22,
              },
              {
                code: "O",
                text: "Other Lung Problems",
                recResponse: 22,
              },
            ],
          },
          {
            code: "06D05",
            text: "Tracheostomy (Obvious Distress)",
            recResponse: 22,
            subCodes: [
              {
                code: "A",
                text: "Asthma",
                recResponse: 22,
              },
              {
                code: "E",
                text: "COPD (Emphysema/Chronic Bronchitis)",
                recResponse: 22,
              },
              {
                code: "O",
                text: "Other Lung Problems",
                recResponse: 22,
              },
            ],
          },
        ],
      },
      {
        priority: "E",
        determinants: [
          {
            code: "06E00",
            text: "ALS Override (Echo)",
            recResponse: 25,
            subCodes: [
              {
                code: "A",
                text: "Asthma",
                recResponse: 25,
              },
              {
                code: "E",
                text: "COPD (Emphysema/Chronic Bronchitis)",
                recResponse: 25,
              },
              {
                code: "O",
                text: "Other Lung Problems",
                recResponse: 25,
              },
            ],
          },
          {
            code: "06E01",
            text: "Ineffective Breathing",
            notBreathing: true,
            recResponse: 25,
            subCodes: [
              {
                code: "A",
                text: "Asthma",
                recResponse: 25,
              },
              {
                code: "E",
                text: "COPD (Emphysema/Chronic Bronchitis)",
                recResponse: 25,
              },
              {
                code: "O",
                text: "Other Lung Problems",
                recResponse: 25,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 7,
    name: "Burns/Explosion",
    description: (
      <>
        <p>
          Key considerations for Burns and Explosions include the mechanism of
          injury (open flame, explosion, fireworks, etc.), extent and location
          of burns, and the presence of any active fire or smoldering hazards.
          Always assess whether this is associated with a structure fire and if
          victims are still trapped.
        </p>
        <p className="mt-2">
          Significant burn area (≥18%), facial involvement, and signs of
          inhalation injury (e.g., difficulty breathing, soot in airway, or
          inability to speak between breaths) may indicate airway compromise and
          require ALS-level response. Blast injuries may involve multiple trauma
          mechanisms, including blunt, penetrating, and barotrauma.
        </p>
        <p className="mt-2">
          Scene safety must be prioritized in active fire or explosive
          environments. In cases involving fireworks or explosions, multiple
          victims are possible. Consider the potential for toxic inhalation,
          unconsciousness, and severe systemic burns that demand urgent
          intervention.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: 3 },
    ],
    defaultPriority: 4,
    defaultPlan: 26,
    questions: [
      {
        text: (
          <p>
            Is this a <b className="text-red-400">building fire</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No structure on fire",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Structure on fire",
            continue: true,
            updateSubCode: "F",
          },
          {
            answer: "Alarm Sounding",
            display: "Fire alarm sounding",
            continue: true,
            updateCode: "07A02",
          },
          {
            answer: "Unknown",
            display: "Unk if structure on fire",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is there anyone <b>inside</b> the <b>structure</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const firstAnswer = answers?.[0]?.answer;
          return firstAnswer === "Structure on fire";
        },
        answers: [
          {
            answer: "No",
            display: "No one rptd inside structure",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Person(s) rptd inside structure",
            continue: true,
            updateCode: "07C01",
            override: true,
          },
          {
            answer: "Unknown",
            display: "Unk if person(s) inside structure",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is <b>anything</b> still <b className="text-red-400">burning</b> or{" "}
            <b className="text-red-400">smoldering</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "Nothing burning or smoldering",
            continue: true,
          },
          {
            answer: "Yes:",
            display: "{input} burning or smoldering",
            continue: true,
            input: true,
            updateSubCode: "F",
          },
          {
            answer: "Yes - PERSON",
            display: "PERSON ON FIRE",
            end: true,
            updateCode: "07E01",
          },
          {
            answer: "Unknown",
            display: "Unk if anything burning or smoldering",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** <b>completely alert</b>{" "}
            <span className="text-red-400">(responding appropriately)</span>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Responding nlly",
            continue: true,
          },
          {
            answer: "No",
            display: "NOT responding nlly",
            continue: true,
            updateCode: "07D04"
          },
          {
            answer: "Unknown",
            display: "Unk if responding nlly",
            continue: true,
          }
        ]
      },

      {
        text: <p>Is **pronoun** breathing <b>normally</b>?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Breathing nlly",
            continue: true,
          },
          {
            answer: "No",
            display: "NOT breathing nlly",
            continue: true,
            updateCode: "07C02",
          },
          {
            answer: "Unknown",
            display: "Unk if breathing nlly",
            continue: true,
          }
        ]
      },

      {
        text: <p>Is **pronoun** having difficulty <b>speaking</b> between <b>breaths</b>?</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.answer;
          return lastAnswer === "NOT breathing nlly";
        },
        answers: [
          {
            answer: "No",
            display: "No diff speaking btwn breaths",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Diff speaking btwn breaths",
            continue: true,
            updateCode: "07D05",
          },
          {
            answer: "Unknown",
            display: "Unk if diff speaking btwn breaths",
            continue: true,
          }
        ]
      },

      {
        text: <p>How was **pronoun** injured?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Method:",
            display: "Injured by {input}",
            continue: true,
            input: true,
          },
          {
            answer: "BLAST",
            display: "Injured by blast",
            continue: true,
            updateCode: "07B01",
          },
          {
            answer: "Fireworks",
            display: "Injured by fireworks",
            continue: true,
            updateSubCode: "W"
          },
          {
            answer: "Explosion",
            display: "Injured by explosion",
            continue: true,
            updateSubCode: "E"
          },
          {
            answer: "Sunburn",
            display: "Injured by sunburn",
            end: true,
            updateCode: "07A04",
          },
          {
            answer: "Unknown",
            display: "Unk how injured",
            continue: true,
          }
        ]
      },

      {
        text: <p>Where was **pronoun** burned/injured?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Location:",
            display: "Burns to {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Face/Head",
            continue: true,
            display: "Burns to face/head",
          },
          {
            answer: "Unknown",
            display: "Unk where burned/injured",
            continue: true,
          }
        ]
      },

      {
        text: <p>How much of the body was burned/injured?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Minor (< 9% Body Area)",
            display: "Burns to < 9% body area",
            continue: true,
            updateCode: "07A03",
          },
          {
            answer: "> 9% but < 18% Body Area",
            display: "Burns < 18% body area",
            continue: true,
            updateCode: "07A01",
          },
          {
            answer: ">= 18% Body Area",
            display: "Burns >= 18% body area",
            continue: true,
            dependency: (patient?: IPatientData, answers?: any[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.answer;
              if(lastAnswer === "Burns to face/head") {
                return { code: "07C04" }
              } else {
                return { code: "07C03" }
              }
            },
          },
          {
            answer: "SIGNIFICANT FACIAL BURNS",
            display: "Significant facial burns",
            continue: true,
            updateCode: "07C04",
          },
          {
            answer: "Unknown",
            display: "Unk how much burned/injured",
            continue: true,
            updateCode: "07B02",
          }
        ]
      },

      {
        text: <p>When did this occur?</p>,
        questionType: "select",
        answers: [
          {
            answer: "< 6 hours ago",
            display: "Occurred < 6 hours ago",
            continue: true,
          },
          {
            answer: ">= 6 hours ago",
            display: "Occurred >= 6 hours ago",
            continue: true,
            updateCode: "07A05",
          },
          {
            answer: "Unknown",
            display: "Unk when occurred",
            continue: true,
          }
        ]
      }

    ],
    availableDeterminants: [
      {
        priority: "A",
        determinants: [
          {
            code: "07A01",
            text: "Burns < 18% Body Area",
            recResponse: 26,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 27,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 27,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 27,
              },
            ],
          },
          {
            code: "07A02",
            text: "Fire Alarm (Unkn Situation)",
            recResponse: 28,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 28,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 27,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 28,
              },
            ],
          },
          {
            code: "07A03",
            text: "Minor Burns",
            recResponse: 29,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 27,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 27,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 27,
              },
            ],
          },
          {
            code: "07A04",
            text: "Sunburn",
            recResponse: 29,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 27,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 27,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 27,
              },
            ],
          },
          {
            code: "07A05",
            text: "Non-Recent (>= 6hrs) Burns/Injs (w/o priority symptoms)",
            recResponse: 29,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 27,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 27,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 27,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "07B00",
            text: "BLS Override (Bravo)",
            recResponse: 26,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 27,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 27,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 27,
              },
            ],
          },
          {
            code: "07B01",
            text: "Blast Injs (w/o priority symptoms)",
            recResponse: 26,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 27,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 27,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 27,
              },
            ],
          },
          {
            code: "07B02",
            text: "Unkn Status/Other Cods Not Applicable",
            defaultCode: true,
            recResponse: 26,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 27,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 27,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 27,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "07C00",
            text: "ALS Override (Charlie)",
            recResponse: 30,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 31,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 32,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 31,
              },
            ],
          },
          {
            code: "07C01",
            text: "Fire w/ Persons Rptd Inside",
            recResponse: 30,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 31,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 32,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 31,
              },
            ],
          },
          {
            code: "07C02",
            text: "Diff Breathing",
            recResponse: 30,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 30,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 33,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 30,
              },
            ],
          },
          {
            code: "07C03",
            text: "Burns >= 18% Body Area",
            recResponse: 30,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 30,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 33,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 30,
              },
            ],
          },
          {
            code: "07C04",
            text: "Significant Facial Burns",
            recResponse: 30,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 30,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 33,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 30,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "07D00",
            text: "ALS Override (Delta)",
            recResponse: 34,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 34,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 34,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 34,
              },
            ],
          },
          {
            code: "07D01",
            text: "Mult Victims",
            recResponse: 35,
            multVictim: true,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 35,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 35,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 35,
              },
            ],
          },
          {
            code: "07D02",
            text: "Arrest",
            notBreathing: true,
            recResponse: 36,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 36,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 36,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 36,
              },
            ],
          },
          {
            code: "07D03",
            text: "Unconscious",
            notConscious: true,
            recResponse: 34,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 37,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 34,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 37,
              },
            ],
          },
          {
            code: "07D04",
            text: "Not Alert",
            recResponse: 38,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 30,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 33,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 30,
              },
            ],
          },
          {
            code: "07D05",
            text: "Diff Speaking Between Breaths",
            recResponse: 30,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 30,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 33,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 30,
              },
            ],
          },
        ],
      },
      {
        priority: "E",
        determinants: [
          {
            code: "07E00",
            text: "ALS Override (Echo)",
            recResponse: 34,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 37,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 34,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 37,
              },
            ],
          },
          {
            code: "07E01",
            text: "Person on Fire",
            recResponse: 39,
            subCodes: [
              {
                code: "E",
                text: "Explosion",
                recResponse: 39,
              },
              {
                code: "F",
                text: "Fire Present",
                recResponse: 39,
              },
              {
                code: "W",
                text: "Fireworks",
                recResponse: 39,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 8,
    name: "Carbon Monoxide/Inhalation/Hazmat/CBRN",
    description: (
      <>
        <p>
          Key considerations for Inhalation emergencies include the type of
          substance involved (chemical, biological, gas, carbon monoxide, etc.),
          the number of patients affected, and whether the scene is safe.
          Exposure to hazardous materials may result in respiratory distress,
          unconsciousness, or toxic systemic effects.
        </p>
        <p className="mt-2">
          Determinants are driven by the patient's alertness, breathing status,
          and ability to speak. Triggers such as carbon monoxide poisoning, gas
          leaks, and industrial chemical exposure may present with subtle or
          delayed symptoms. Multiple victim scenarios and known contamination
          increase priority and resource needs.
        </p>
        <p className="mt-2">
          Consider law enforcement and HazMat response for scene safety and
          containment, especially if the substance is unknown, still active, or
          intentionally released. Prompt decontamination and transport to
          facilities equipped for toxicological emergencies may be necessary.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: 1 },
    ],
    defaultPriority: 3,
    defaultPlan: 40,
    questions: [
      {
        text: <p>Is everyone <b>safe</b> and <b>out of danger</b>?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Out of danger",
            continue: true,
          },
          {
            answer: "No",
            display: "In danger",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if still in danger",
            continue: true,
          }
        ]
      },
      
      {
        text: <p>What type of incident is this?</p>,
        questionType: 'select',
        answers: [
          {
            answer: "CO Alarm Activated",
            display: "CO alarm activated",
            continue: true,
            updateCode: "08O02"
          },
          {
            answer: "Inhalation/Other",
            display: "Hazmat or Inhalation incident",
            continue: true,
          },
          {
            answer: "Completely Unknown",
            display: "Completely unknown incident",
            continue: true,
            updateCode: "08D06",
          }
        ]
      },

      {
        text: <p>Is **pronoun** or anyone else experiencing <b>symptoms</b>?</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const secondAnswer = answers?.[1]?.answer;
          return secondAnswer === "CO alarm activated";
        },
        answers: [
          {
            answer: "No",
            display: "No CO symptoms",
            continue: true,
          },
          {
            answer: "Yes",
            display: "CO symptoms",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if CO symptoms present",
            continue: true,
          }
        ]
      },

      {
        text: <p>What kind of <b>chemicals/fumes</b> or <b className="text-green-400">hazardous materials</b> are involved?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Biological:",
            display: "Biological Hazmat: {input}",
            continue: true,
            input: true,
            updateSubCode: "B"
          },
          {
            answer: "Chemical:",
            display: "Chemical Hazmat: {input}",
            continue: true,
            input: true,
            updateSubCode: "C"
          },
          {
            answer: "Gas/Fumes:",
            display: "Fumes: {input}",
            continue: true,
            input: true,
            updateSubCode: "G"
          },
          {
            answer: "Nuclear",
            continue: true,
            display: "Nuclear Hazmat",
            updateSubCode: "N"
          },
          {
            answer: "Radiological:",
            display: "Radiological Hazmat: {input}",
            continue: true,
            input: true,
            updateSubCode: "R"
          },
          {
            answer: "Other:",
            display: "Other Hazmat: {input}",
            continue: true,
            input: true,
            updateSubCode: "O"
          },
          {
            answer: "Unknown",
            display: "Unk Hazmat",
            continue: true,
            updateSubCode: "U"
          }
        ]
      },

      {
        text: <p>Where are the chemicals/fumes coming from?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Location:",
            display: "Chemicals/fumes coming from {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk where chemicals/fumes coming from",
            continue: true,
          }
        ]
      },

      {
        text: <p>Is **pronoun** contaminated with chemicals/fumes?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "Not contaminated",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Contaminated w/ chemicals/fumes",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if contaminated",
            continue: true,
          }
        ]
      },

      {
        text: (
          <p>
            Is **pronoun** <b>completely alert</b>{" "}
            <span className="text-red-400">(responding appropriately)</span>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Responding nlly",
            continue: true,
          },
          {
            answer: "No",
            display: "NOT responding nlly",
            continue: true,
            updateCode: "08D03"
          },
          {
            answer: "Unknown",
            display: "Unk if responding nlly",
            continue: true,
          }
        ]
      },

      {
        text: <p>Is **pronoun** breathing <b>normally</b>?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Breathing nlly",
            continue: true,
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.answer;
              if(lastAnswer === "Responding nlly") {
                return { code: "08B01" }
              }
              return undefined;
            }
          },
          {
            answer: "No",
            display: "NOT breathing nlly",
            continue: true,
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.answer;
              if(lastAnswer === "Responding nlly") {
                return { code: "08C01" }
              }
              return undefined;
            }
          },
          {
            answer: "Unknown",
            display: "Unk if breathing nlly",
            continue: true,
          }
        ]
      },

      {
        text: <p>Is **pronoun** having difficulty <b>speaking</b> between <b>breaths</b>?</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.answer;
          return lastAnswer === "NOT breathing nlly";
        },
        answers: [
          {
            answer: "No",
            display: "No diff speaking btwn breaths",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Diff speaking btwn breaths",
            continue: true,
            updateCode: "08D05"
          },
          {
            answer: "Unknown",
            display: "Unk if diff speaking btwn breaths",
            continue: true,
          }
        ]
      }

    ],
    availableDeterminants: [
      {
        priority: "O",
        determinants: [
          {
            code: "08O01",
            text: "Carbon Monoxide Detector Alarm (Scene Contact w/o priority symptoms)",
            recResponse: 46
          },
          {
            code: "08O02",
            text: "Carbon Monoxide Detector Alarm (No Scene Contact)",
            recResponse: 46
          }
        ]
      },
      {
        priority: "B",
        determinants: [
          {
            code: "08B00",
            text: "BLS Override (Bravo)",
            recResponse: 40,
            subCodes: [
              {
                code: "B",
                text: "Biological",
                recResponse: 40
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 40
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 40
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 40
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 40
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 40
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 40
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 40
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 40
              }
            ]
          },
          {
            code: "08B01",
            text: "Alert w/o Diff Breathing",
            recResponse: 41,
            subCodes: [
              {
                code: "B",
                text: "Biological",
                recResponse: 41
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 41
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 41
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 41
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 41
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 41
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 41
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 41
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 41
              }
            ]
          }
        ]
      },
      {
        priority: "C",
        determinants: [
          {
            code: "08C00",
            text: "ALS Override (Charlie)",
            recResponse: 42,
            subCodes: [
              {
                code: "B",
                text: "Biological",
                recResponse: 42
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 42
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 42
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 42
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 42
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 42
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 42
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 42
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 42
              }
            ]
          },
          {
            code: "08C01",
            text: "Alert w/ Diff Breathing",
            recResponse: 42,
            subCodes: [
              {
                code: "B",
                text: "Biological",
                recResponse: 42
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 42
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 42
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 42
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 42
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 42
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 42
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 42
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 42
              }
            ]
          }
        ]
      },
      {
        priority: "D",
        determinants: [
          {
            code: "08D00",
            text: "ALS Override (Delta)",
            recResponse: 43,
            subCodes: [
              {
                code: "B",
                text: "Biological",
                recResponse: 43
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 43
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 43
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 43
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 43
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 43
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 43
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 43
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 43
              }
            ]
          },
          {
            code: "08D01",
            text: "Arrest",
            notBreathing: true,
            recResponse: 44,
            subCodes: [
              {
                code: "B",
                text: "Biological",
                recResponse: 44
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 44
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 44
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 44
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 44
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 44
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 44
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 44
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 44
              }
            ]
          },
          {
            code: "08D02",
            text: "Unconscious",
            notConscious: true,
            recResponse: 43,
            subCodes: [
              {
                code: "B",
                text: "Biological",
                recResponse: 43
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 43
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 43
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 43
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 43
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 43
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 43
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 43
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 43
              }
            ]
          },
          {
            code: "08D03",
            text: "Not Alert",
            recResponse: 42,
            subCodes: [
              {
                code: "B",
                text: "Biological",
                recResponse: 42
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 42
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 42
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 42
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 42
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 42
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 42
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 42
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 42
              }
            ]
          },
          {
            code: "08D04",
            text: "Diff Speaking Between Breaths",
            recResponse: 42,
            subCodes: [
              {
                code: "B",
                text: "Biological",
                recResponse: 42
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 42
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 42
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 42
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 42
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 42
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 42
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 42
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 42
              }
            ]
          },
          {
            code: "08D05",
            text: "Mult Victims",
            multVictim: true,
            recResponse: 45,
            subCodes: [
              {
                code: "B",
                text: "Biological",
                recResponse: 45
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 45
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 45
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 45
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 45
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 45
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 45
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 45
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 45
              }
            ]
          },
          {
            code: "08D06",
            text: "Unkn Status/Other Codes Not Applicable",
            recResponse: 42,
            defaultCode: true,
            subCodes: [
              {
                code: "B",
                text: "Biological",
                recResponse: 42
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 42
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 42
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 42
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 42
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 42
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 42
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 42
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 42
              }
            ]
          }
        ]
      }
    ]
  }
];
