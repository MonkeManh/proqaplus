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
    name: "Abdominal Pains/Problems",
    shortName: "Abdo Pain",
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
    name: "Allergies (Reactions) / Envenomations (Stings, Bites)",
    shortName: "Allergies",
    description: (
      <>
        <p>
          Allergic Reactions and Envenomations require immediate assessment of
          airway status, especially signs of ineffective or agonal
          breathing—these indicate a life-threatening condition and mandate an
          Echo-level response. Consciousness and the ability to speak between
          breaths are also early critical factors for triage escalation.
        </p>

        <p className="mt-2">
          If the patient is having{" "}
          <span className="font-medium">
            difficulty breathing or swallowing
          </span>
          , particularly with a known allergy history, you should assume a
          rapidly progressing airway compromise until proven otherwise. Past
          reactions, even if mild, increase risk for future severe responses.
          Injection use (e.g., EpiPen) or medications may be noted but{" "}
          <i>do not</i> guarantee symptom relief—severity must still be
          evaluated based on current presentation.
        </p>

        <p className="mt-2">
          Understanding the{" "}
          <span className="font-medium">cause of the reaction</span> is vital.
          Swarming insect attacks (multiple stings) are higher-risk due to
          cumulative venom exposure. Bites from snakes or spiders require
          consideration for systemic toxicity. Always ask about time of onset,
          previous allergic history, and any interventions already taken (like
          injections or medications) to ensure accurate coding and proper
          resource dispatch.
        </p>

        <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-1">
          <li>
            <span className="font-medium">Ineffective or Agonal Breathing</span>{" "}
            → Echo-level emergency
          </li>
          <li>
            <span className="font-medium">
              Difficulty Speaking Between Breaths
            </span>{" "}
            → Delta concern
          </li>
          <li>
            <span className="font-medium">Swarming Attack / Snakebite</span> →
            High-priority Delta determinant
          </li>
          <li>
            <span className="font-medium">Prior Allergy Hx</span> → Escalates
            concern, especially with breathing issues
          </li>
          <li>
            <span className="font-medium">Injection or Medication Taken</span> →
            May trigger sub-code but doesn’t reduce urgency
          </li>
        </ul>
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
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
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
            Does **pronoun** take any medications or have an injection for this
            type of reaction?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No meds or injection for this rx",
            end: true,
          },
          {
            answer: "Yes - Injection",
            display: "Injection Administered or Advised",
            end: true,
            updateSubCode: "I",
          },
          {
            answer: "Yes - Medication",
            display: "Medication Administered or Advised",
            end: true,
            updateSubCode: "M",
          },
          {
            answer: "Unknown",
            display: "Unk if meds or injection have been taken",
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
    name: "Animal Bites/Attacks",
    shortName: "Animal Bite",
    description: (
      <>
        <p>
          Animal bites can range from minor punctures to life-threatening
          trauma— it’s essential to identify{" "}
          <span className="text-red-500 font-semibold">attack severity</span>{" "}
          and
          <span className="text-red-500 font-semibold"> scene safety</span>{" "}
          early. Immediate danger (e.g., attack still in progress) must prompt a
          high-level response and consideration for{" "}
          <span className="text-yellow-400 font-semibold">law enforcement</span>{" "}
          dispatch.
        </p>

        <p className="mt-2">
          Focus on the <span className="font-medium">type of animal</span> and
          the
          <span className="font-medium"> area of the body affected</span>.
          Injuries to the
          <span className="text-red-400 font-semibold">
            {" "}
            head, neck, or chest
          </span>{" "}
          carry heightened risk of airway compromise, bleeding, or neurological
          involvement. Large or exotic animals also present a greater likelihood
          of deep trauma or envenomation.
        </p>

        <p className="mt-2">Look for these **red flags** during questioning:</p>

        <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-1">
          <li>
            <span className="text-red-500 font-semibold">Ongoing attack</span>{" "}
            or unknown animal location → scene may still be unsafe
          </li>
          <li>
            <span className="text-red-500 font-semibold">
              Bites to the airway
            </span>{" "}
            or face/chest → high risk of compromised breathing
          </li>
          <li>
            <span className="text-red-500 font-semibold">
              Multiple animals or mauling
            </span>{" "}
            → assume high trauma burden
          </li>
          <li>
            <span className="text-red-500 font-semibold">
              Unconscious or not alert
            </span>{" "}
            → immediate ALS-level concern
          </li>
          <li>
            <span className="text-red-500 font-semibold">Serious bleeding</span>{" "}
            → treat as time-sensitive hemorrhage
          </li>
        </ul>

        <p className="mt-2">
          Document the <span className="font-medium">time of incident</span> and
          <span className="font-medium"> whether the wound is recent</span>.
          Bites older than 6 hours without complications may be less urgent but
          still need evaluation for
          <span className="text-yellow-400 font-semibold">
            {" "}
            rabies exposure
          </span>{" "}
          or infection.
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
            display: "Happened Now (< 6 hours ago)",
            continue: true,
          },
          {
            answer: ">= 6 hours ago",
            display: "Happened Eariler (>= 6 hours ago)",
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
            override: true,
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
            end: true,
            updateCode: "03A01",
          },
          {
            answer: "Possibly Dangerous Body Area:",
            display: "Bit on {input}",
            input: true,
            end: true,
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
            end: true,
            updateCode: "03D05",
          },
          {
            answer: "Unknown",
            display: "Unk body area bitten",
            end: true,
            updateCode: "03B03",
          },
        ],
      },

      {
        text: <p>Is **pronoun** having difficulty breathing or speaking?</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.answer;
          return lastAnswer === "Bit on Chest/Neck/Head";
        },
        answers: [
          {
            answer: "No",
            display: "Not diff breathing or speaking",
            end: true,
          },
          {
            answer: "Yes",
            display: "Diff breathing or speaking",
            end: true,
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
            end: true,
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
    name: "Assault/Sexual Assault",
    shortName: "Assault",
    description: (
      <>
        <p>
          Assault cases require a dual lens: one for{" "}
          <span className="text-red-500 font-semibold">medical urgency</span>,
          and another for{" "}
          <span className="text-yellow-400 font-semibold">
            scene safety and victim sensitivity
          </span>
          . Evaluate the mechanism of injury, the region affected, and whether
          the patient is{" "}
          <span className="text-red-500 font-semibold">
            conscious and alert
          </span>
          . Head, neck, and chest injuries raise immediate concern due to
          possible airway involvement or internal trauma.
        </p>

        <p className="mt-2">This protocol includes:</p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>
            <span className="font-medium">Assault</span>
          </li>
          <li>
            <span className="font-medium">Sexual Assault</span>
          </li>
          <li>
            <span className="font-medium">Stun Gun Deployment</span>
          </li>
        </ul>

        <p className="mt-2">
          For{" "}
          <span className="text-pink-400 font-semibold">
            sexual assault victims
          </span>
          , ensure care is trauma-informed. Avoid unnecessary questioning. Focus
          on safety, preserve any potential evidence, and prioritize{" "}
          <span className="text-yellow-400 font-semibold">
            law enforcement notification
          </span>{" "}
          where appropriate.
        </p>

        <p className="mt-2">
          Be alert for the following{" "}
          <span className="text-red-500 font-semibold">
            escalation triggers
          </span>
          :
        </p>

        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>
            <span className="text-red-500 font-semibold">Serious bleeding</span>{" "}
            or signs of internal trauma
          </li>
          <li>
            <span className="text-red-500 font-semibold">
              Airway compromise
            </span>{" "}
            (e.g., difficulty breathing/speaking)
          </li>
          <li>
            <span className="text-red-500 font-semibold">
              Altered consciousness
            </span>{" "}
            or unconsciousness
          </li>
          <li>
            <span className="text-yellow-400 font-semibold">
              Assailant still on scene
            </span>{" "}
            → Confirm scene safety
          </li>
          <li>
            <span className="text-red-500 font-semibold">
              Injury to chest, neck, or head
            </span>{" "}
            → Consider Delta upgrade
          </li>
        </ul>

        <p className="mt-2">
          <span className="font-medium">REMEMBER:</span> Even when injuries
          appear minor, if the event is recent or involves psychological trauma,
          an EMS response is still warranted. Be patient-forward, respectful,
          and supportive.
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
            updateCode: "04D03",
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
            updateCode: "04B01",
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
            text: "Unkn Status / Other Codes not Applicable",
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
    name: "Back Pain (Non-Traumatic or Non-Recent Trauma)",
    shortName: "Back Pain",
    description: (
      <>
        <p>
          Back pain—especially when non-traumatic—may seem low acuity, but can conceal
          <span className="text-red-500 font-semibold"> life-threatening vascular conditions</span> in older adults.
          Always distinguish between <span className="font-medium">traumatic vs. non-traumatic</span> causes and assess
          for associated symptoms such as chest pain, fainting, or changes in skin color.
        </p>

        <p className="mt-2">
          <span className="text-yellow-400 font-semibold">Key concern:</span>{" "}
          Sudden, severe pain described as{" "}
          <span className="text-red-500 font-semibold">"ripping" or "tearing"</span>{" "}
          in patients over 50 may indicate an <i>aortic aneurysm</i> and warrants immediate ALS response.
        </p>

        <p className="mt-2">
          Use the following to guide triage:
        </p>

        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>
            <span className="font-semibold">Non-traumatic onset</span> → often Alpha, unless other risk factors present
          </li>
          <li>
            <span className="text-red-500 font-semibold">Fainting, grey skin tone, or altered mental status</span> → escalate to Charlie or Delta
          </li>
          <li>
            <span className="font-semibold">Chest pain + back pain</span> → suspect vascular or cardiac cause
          </li>
          <li>
            <span className="font-semibold">Known or suspected aneurysm</span> → treat as high-priority
          </li>
        </ul>

        <p className="mt-2">
          For <span className="font-medium">traumatic back pain</span> (e.g., from a recent fall), escalate based on the time of injury and signs
          of spinal involvement. Old injuries without new symptoms may qualify as Alpha-level.
        </p>

        <p className="mt-2">
          <span className="font-medium">REMEMBER:</span> In patients over 50, always ask about chest involvement and
          check for signs of vascular collapse, even if the chief complaint is "just back pain."
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
    shortName: "Breathing Prob",
    description: (
      <>
        <p>
          Breathing issues should always be approached with urgency—airway
          compromise can evolve <span className="text-red-500 font-semibold">rapidly</span>. Start by evaluating
          <span className="font-medium"> alertness</span> and the ability to
          <span className="text-red-500 font-semibold"> speak between breaths</span>.
          If the patient can't talk, is changing color, or has cold sweats, assume
          deteriorating respiratory status and escalate immediately.
        </p>

        <p className="mt-2">
          If the patient has a history of
          <span className="text-yellow-400 font-semibold"> asthma</span>,
          <span className="text-yellow-400 font-semibold"> COPD</span>, or uses a
          <span className="text-yellow-400 font-semibold"> tracheostomy</span>,
          assess for distress and confirm whether a prescribed
          <span className="font-medium"> inhaler or nebulizer</span> is available and in use.
          These factors inform both determinant level and field management instructions.
        </p>

        <p className="mt-2">
          Watch for the following <span className="text-red-500 font-semibold">red flags</span> that indicate ALS or Echo priority:
        </p>

        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>
            <span className="font-semibold">Cannot speak or cry</span> → assess for choking or ineffective breathing
          </li>
          <li>
            <span className="font-semibold">Not alert</span> → possible hypoxia or declining mental status
          </li>
          <li>
            <span className="font-semibold">Changing skin color</span> or
            <span className="font-semibold"> clammy/cold sweats</span> → signs of decompensation
          </li>
          <li>
            <span className="font-semibold">Known lung disease</span> without meds/inhaler access → increased risk
          </li>
          <li>
            <span className="font-semibold">Ineffective breathing</span> → treat as an
            <span className="text-red-500 font-semibold"> Echo-level emergency</span>
          </li>
        </ul>

        <p className="mt-2">
          <span className="font-medium">REMEMBER:</span> A patient with asthma or COPD may appear stable,
          but still rapidly deteriorate without proper intervention. If symptoms
          persist after inhaler/nebulizer use, response level should not be downgraded.
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
        text: <p>Is **pronoun** able to talk to you (cry) at all?</p>,
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
    name: "Burns (Scalds) / Explosion (Blast)",
    shortName: "Burns/Explosion",
    description: (
      <>
        <p>
          Burn and explosion injuries require immediate triage to assess for:
          <span className="text-red-500 font-semibold"> airway involvement</span>,
          <span className="text-red-500 font-semibold"> extent of burn area</span>,
          and
          <span className="text-yellow-400 font-semibold"> active hazards</span> (e.g., structure fire or smoldering debris).
          Always determine whether this is part of a
          <span className="text-red-400 font-semibold"> structure fire</span> and if
          <span className="font-medium"> victims are still inside</span>.
        </p>

        <p className="mt-2">
          <span className="font-medium">Critical Indicators</span> of severe burn injury include:
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>
            <span className="text-red-500 font-semibold">Burns ≥ 18%</span> of total body surface area
          </li>
          <li>
            <span className="text-red-500 font-semibold">Significant facial burns</span> or burns involving
            <span className="font-medium"> the airway</span>
          </li>
          <li>
            <span className="text-red-500 font-semibold">Difficulty breathing or speaking</span> after inhalation injury
          </li>
          <li>
            <span className="text-red-500 font-semibold">Victim on fire</span> or presence of smoldering clothing
          </li>
          <li>
            <span className="text-yellow-400 font-semibold">Explosive mechanisms</span> → consider
            <span className="font-medium"> blast injuries, barotrauma, or penetrating debris</span>
          </li>
        </ul>

        <p className="mt-2">
          <span className="font-medium text-yellow-400">Scene safety</span> is a priority.
          Explosions and fireworks often involve
          <span className="font-semibold"> multiple victims</span> and
          <span className="font-semibold"> toxic smoke inhalation</span>. When active fire or smoldering materials are present,
          coordinate with fire services for scene control and potential rescue operations.
        </p>

        <p className="mt-2">
          For <span className="font-medium">sunburns</span> or minor burns <span className="text-muted-foreground">(under 9%)</span>,
          a lower response level may be appropriate—unless complicated by age, location (e.g., face), or other comorbidities.
        </p>

        <p className="mt-2">
          <span className="font-medium">REMEMBER:</span>{" "}
          Any indication of altered consciousness, respiratory distress, or blast-related polytrauma should
          escalate immediately to a <span className="text-red-500 font-semibold">Delta or Echo-level</span> response.
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
            updateCode: "07D04",
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
            Is **pronoun** breathing <b>normally</b>?
          </p>
        ),
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
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** having difficulty <b>speaking</b> between{" "}
            <b>breaths</b>?
          </p>
        ),
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
          },
        ],
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
            updateSubCode: "W",
          },
          {
            answer: "Explosion",
            display: "Injured by explosion",
            continue: true,
            updateSubCode: "E",
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
          },
        ],
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
          },
        ],
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
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.answer;
              if (lastAnswer === "Burns to face/head") {
                return { code: "07C04" };
              } else {
                return { code: "07C03" };
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
          },
        ],
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
          },
        ],
      },
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
    shortName: "Inhalation/Hazmat",
    description: (
      <>
        <p>
          This protocol addresses emergencies involving inhaled toxins, including
          <span className="text-green-400 font-semibold"> hazardous materials</span>,
          <span className="text-green-400 font-semibold"> carbon monoxide</span>, and
          <span className="text-green-400 font-semibold"> CBRN agents</span> (chemical, biological, radiological, nuclear).
          Always assess the <span className="font-medium">scene safety</span> and whether exposure is ongoing or contained.
        </p>

        <p className="mt-2">
          Key clinical concerns include:
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li><span className="font-medium">Alertness</span> and ability to respond appropriately</li>
          <li><span className="font-medium">Breathing effectiveness</span> and respiratory effort</li>
          <li><span className="text-red-400 font-semibold">Difficulty speaking between breaths</span> → possible airway irritation or hypoxia</li>
          <li><span className="text-red-400 font-semibold">Multiple patients</span> → suspect scene-wide contamination</li>
          <li><span className="text-green-400 font-semibold">Type of material involved</span> → drives response escalation and containment needs</li>
        </ul>

        <p className="mt-2">
          Exposure to substances such as chlorine gas, carbon monoxide, or unknown fumes may cause
          <span className="text-red-400 font-semibold"> delayed onset symptoms</span> such as dizziness, confusion, or fainting.
          For CO detector calls, symptoms like headache or nausea can appear subtle but signal dangerous buildup.
        </p>

        <p className="mt-2">
          For <span className="text-green-400 font-semibold">chemical or radiological releases</span>,
          dispatch Fire and HazMat units. Victims may require
          <span className="font-medium"> decontamination</span> and transport to specialized toxicology-capable facilities.
        </p>

        <p className="mt-2">
          <span className="font-medium">REMEMBER:</span> If the substance is still present,
          unknown, or actively spreading—assume a
          <span className="text-green-400 font-semibold"> hazardous materials</span> situation until proven otherwise.
          Always protect responders and prioritize scene isolation.
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
        text: (
          <p>
            Is everyone <b>safe</b> and <b>out of danger</b>?
          </p>
        ),
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
          },
        ],
      },

      {
        text: <p>What type of incident is this?</p>,
        questionType: "select",
        answers: [
          {
            answer: "CO Alarm Activated",
            display: "CO alarm activated",
            continue: true,
            updateCode: "08O02",
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
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** or anyone else experiencing <b>symptoms</b>?
          </p>
        ),
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
          },
        ],
      },

      {
        text: (
          <p>
            What kind of <b>chemicals/fumes</b> or{" "}
            <b className="text-green-400">hazardous materials</b> are involved?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Biological:",
            display: "Biological Hazmat: {input}",
            continue: true,
            input: true,
            updateSubCode: "B",
          },
          {
            answer: "Chemical:",
            display: "Chemical Hazmat: {input}",
            continue: true,
            input: true,
            updateSubCode: "C",
          },
          {
            answer: "Gas/Fumes:",
            display: "Fumes: {input}",
            continue: true,
            input: true,
            updateSubCode: "G",
          },
          {
            answer: "Nuclear",
            continue: true,
            display: "Nuclear Hazmat",
            updateSubCode: "N",
          },
          {
            answer: "Radiological:",
            display: "Radiological Hazmat: {input}",
            continue: true,
            input: true,
            updateSubCode: "R",
          },
          {
            answer: "Other:",
            display: "Other Hazmat: {input}",
            continue: true,
            input: true,
            updateSubCode: "O",
          },
          {
            answer: "Unknown",
            display: "Unk Hazmat",
            continue: true,
            updateSubCode: "U",
          },
        ],
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
          },
        ],
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
            updateCode: "08D03",
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
            Is **pronoun** breathing <b>normally</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Breathing nlly",
            continue: true,
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.answer;
              if (lastAnswer === "Responding nlly") {
                return { code: "08B01" };
              }
              return undefined;
            },
          },
          {
            answer: "No",
            display: "NOT breathing nlly",
            continue: true,
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.answer;
              if (lastAnswer === "Responding nlly") {
                return { code: "08C01" };
              }
              return undefined;
            },
          },
          {
            answer: "Unknown",
            display: "Unk if breathing nlly",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** having difficulty <b>speaking</b> between{" "}
            <b>breaths</b>?
          </p>
        ),
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
            updateCode: "08D05",
          },
          {
            answer: "Unknown",
            display: "Unk if diff speaking btwn breaths",
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
            code: "08O01",
            text: "Carbon Monoxide Detector Alarm (Scene Contact w/o priority symptoms)",
            recResponse: 46,
          },
          {
            code: "08O02",
            text: "Carbon Monoxide Detector Alarm (No Scene Contact)",
            recResponse: 46,
          },
        ],
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
                recResponse: 40,
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 40,
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 40,
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 40,
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 40,
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 40,
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 40,
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 40,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 40,
              },
            ],
          },
          {
            code: "08B01",
            text: "Alert w/o Diff Breathing",
            recResponse: 41,
            subCodes: [
              {
                code: "B",
                text: "Biological",
                recResponse: 41,
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 41,
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 41,
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 41,
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 41,
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 41,
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 41,
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 41,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 41,
              },
            ],
          },
        ],
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
                recResponse: 42,
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 42,
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 42,
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 42,
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 42,
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 42,
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 42,
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 42,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 42,
              },
            ],
          },
          {
            code: "08C01",
            text: "Alert w/ Diff Breathing",
            recResponse: 42,
            subCodes: [
              {
                code: "B",
                text: "Biological",
                recResponse: 42,
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 42,
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 42,
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 42,
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 42,
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 42,
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 42,
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 42,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 42,
              },
            ],
          },
        ],
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
                recResponse: 43,
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 43,
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 43,
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 43,
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 43,
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 43,
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 43,
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 43,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 43,
              },
            ],
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
                recResponse: 44,
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 44,
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 44,
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 44,
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 44,
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 44,
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 44,
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 44,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 44,
              },
            ],
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
                recResponse: 43,
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 43,
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 43,
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 43,
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 43,
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 43,
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 43,
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 43,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 43,
              },
            ],
          },
          {
            code: "08D03",
            text: "Not Alert",
            recResponse: 42,
            subCodes: [
              {
                code: "B",
                text: "Biological",
                recResponse: 42,
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 42,
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 42,
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 42,
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 42,
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 42,
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 42,
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 42,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 42,
              },
            ],
          },
          {
            code: "08D04",
            text: "Diff Speaking Between Breaths",
            recResponse: 42,
            subCodes: [
              {
                code: "B",
                text: "Biological",
                recResponse: 42,
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 42,
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 42,
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 42,
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 42,
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 42,
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 42,
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 42,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 42,
              },
            ],
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
                recResponse: 45,
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 45,
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 45,
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 45,
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 45,
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 45,
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 45,
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 45,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 45,
              },
            ],
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
                recResponse: 42,
              },
              {
                code: "C",
                text: "Chemical",
                recResponse: 42,
              },
              {
                code: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 42,
              },
              {
                code: "M",
                text: "Carbon Monoxide",
                recResponse: 42,
              },
              {
                code: "N",
                text: "Nuclear",
                recResponse: 42,
              },
              {
                code: "R",
                text: "Radiological",
                recResponse: 42,
              },
              {
                code: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 42,
              },
              {
                code: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 42,
              },
              {
                code: "U",
                text: "Unkn",
                recResponse: 42,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 9,
    name: "Cardiac or Repiratory Arrest / Death",
    shortName: "Cardiac Arrest",
    description: (
      <>
        <p>
          Cardiac Arrest cases require <span className="font-medium">immediate identification</span> of whether the arrest is
          <span className="text-red-400 font-semibold"> workable</span> or if there are
          <span className="text-muted-foreground"> obvious/expected signs of death</span>.
          Early determination drives both dispatch priority and whether CPR or defibrillator instructions should begin.
        </p>

        <p className="mt-2">
          <span className="font-medium">ALS resources</span> are always required unless death is clearly irreversible.
          If the patient has a known <span className="text-muted-foreground">DNR</span> or terminal condition, adjust appropriately.
          If not, prioritize resuscitation attempts and get an
          <span className="text-red-400 font-semibold"> AED</span> to the patient if available.
        </p>

        <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-1">
          <li><span className="font-medium">Witnessed vs. Unwitnessed</span> arrest affects survivability and CPR timing.</li>
          <li><span className="text-red-400 font-semibold">Not Breathing or Agonal</span> → Initiate CPR if appropriate.</li>
          <li><span className="font-medium">Expected Death</span> (DNR/terminal) may still require unit response for verification.</li>
          <li><span className="font-medium">Obvious Death</span> signs include decomposition, incineration, or decapitation.</li>
        </ul>

        <p className="mt-2">
          <b className="text-red-500">!!!CAUTION!!!</b> Always consider scene safety.
          For cases involving <span className="text-red-400 font-semibold">hanging, suffocation, strangulation,</span> or suspicious death,
          <span className="font-bold text-red-500"> law enforcement MUST be dispatched</span> for scene control and investigation.
        </p>

        <p className="mt-2">
          Dispatcher action may include CPR coaching, AED setup guidance, and emotional support for bystanders.
          Gather clear information on last seen alive time, current condition, and any advance directives.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: true },
      { name: "Police", priority: true },
    ],
    defaultPriority: 3,
    defaultPlan: 47,
    questions: [
      {
        text: <p>What type of situation is this?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Witnessed Cardiac Arrest",
            display: "The cardiac arrest was witnessed",
            continue: true,
            updateCode: "09E01",
          },
          {
            answer: "Unwitnessed Cardiac Arrest",
            display: "The cardiac arrest was not witnessed",
            continue: true,
            updateCode: "09E02",
          },
          {
            answer: "Suspected Cardiac Arrest (3rd/4th Party)",
            display: "Suspected Cardiac Arrest (3rd/4th Party)",
            continue: true,
            updateCode: "09E02",
          },
          {
            answer: "Respiratory Arrest",
            display: "Respiratory Arrest",
            continue: true,
            updateCode: "09D01",
          },
          {
            answer: "OBVIOUS DEATH (suspected)",
            display: "Death is obvious",
            continue: true,
          },
          {
            answer: "EXPECTED DEATH",
            display: "Death was expected",
            continue: true,
          },
          {
            answer: "Completely Unknown Situation",
            display: "Completely Unknown Situation",
            continue: true,
            updateCode: "09D00",
          },
        ],
      },

      {
        text: (
          <p>
            Is a <b className="text-red-400">defibrillator (AED)</b> available?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const firstAnswer = answers?.[0]?.answer;
          return (
            firstAnswer === "The cardiac arrest was witnessed" ||
            firstAnswer === "The cardiac arrest was not witnessed" ||
            firstAnswer === "Suspected Cardiac Arrest (3rd/4th Party)"
          );
        },
        answers: [
          {
            answer: "No",
            display: "No AED available",
            gotoInstructions: 1,
            end: true,
          },
          {
            answer: "Yes",
            display: "AED available",
            gotoInstructions: 2,
            end: true,
          },
          {
            answer: "Unknown",
            display: "Unk if AED available",
            gotoInstructions: 1,
            end: true,
          },
        ],
      },

      {
        text: <p>Type of incident?</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const firstAnswer = answers?.[0]?.answer;
          return firstAnswer === "EXPECTED DEATH";
        },
        answers: [
          {
            answer: "Terminal Illness",
            display: "Terminal Illness",
            continue: true,
            updateSubCode: "x",
          },
          {
            answer: "DNR (Do Not Resuscitate) Order",
            display: "This is a DNR patient",
            continue: true,
            updateSubCode: "y",
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "O",
        determinants: [
          {
            code: "09O01",
            text: "Expected Death Unquestionable",
            recResponse: 47,
            subCodes: [
              {
                code: "x",
                text: "Terminal Illness",
                recResponse: 47,
              },
              {
                code: "y",
                text: "DNR (Do Not Resuscitate) Order",
                recResponse: 48,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "09B00",
            text: "BLS Override (Bravo)",
            recResponse: 47,
            subCodes: [
              {
                code: "x",
                text: "Terminal Illness",
                recResponse: 47,
              },
              {
                code: "y",
                text: "DNR (Do Not Resuscitate) Order",
                recResponse: 48,
              },
            ],
          },
          {
            code: "09B01",
            text: "Obvious Death Unquestionable",
            recResponse: 48,
            subCodes: [
              {
                code: "a",
                text: "Cold & Stiff in a Warm Environment",
                recResponse: 48,
              },
              {
                code: "b",
                text: "Decapitation",
                recResponse: 48,
              },
              {
                code: "c",
                text: "Decomposition",
                recResponse: 48,
              },
              {
                code: "d",
                text: "Incineration",
                recResponse: 48,
              },
              {
                code: "e",
                text: "Non-Recent Death",
                recResponse: 48,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "09D00",
            text: "ALS Override (Delta)",
            recResponse: 47,
            subCodes: [
              {
                code: "a",
                text: "Cold & Stiff in a Warm Environment",
                recResponse: 47,
              },
              {
                code: "b",
                text: "Decapitation",
                recResponse: 47,
              },
              {
                code: "c",
                text: "Decomposition",
                recResponse: 47,
              },
              {
                code: "d",
                text: "Incineration",
                recResponse: 47,
              },
              {
                code: "e",
                text: "Non-Recent Death",
                recResponse: 47,
              },
              {
                code: "f",
                text: "Severe Injs Obviously Incompatible w/ Life",
                recResponse: 47,
              },
              {
                code: "x",
                text: "Terminal Illness",
                recResponse: 47,
              },
              {
                code: "y",
                text: "DNR (Do Not Resuscitate) Order",
                recResponse: 47,
              },
            ],
          },
          {
            code: "09D01",
            text: "Ineffective Breathing",
            recResponse: 47,
          },
          {
            code: "09D02",
            text: "Obvious or Expected Death Questionable",
            recResponse: 47,
            subCodes: [
              {
                code: "a",
                text: "Cold & Stiff in a Warm Environment",
                recResponse: 47,
              },
              {
                code: "b",
                text: "Decapitation",
                recResponse: 47,
              },
              {
                code: "c",
                text: "Decomposition",
                recResponse: 47,
              },
              {
                code: "d",
                text: "Incineration",
                recResponse: 47,
              },
              {
                code: "e",
                text: "Non-Recent Death",
                recResponse: 47,
              },
              {
                code: "f",
                text: "Severe Injs Obviously Incompatible w/ Life",
                recResponse: 47,
              },
              {
                code: "x",
                text: "Terminal Illness",
                recResponse: 47,
              },
              {
                code: "y",
                text: "DNR (Do Not Resuscitate) Order",
                recResponse: 47,
              },
            ],
          },
        ],
      },
      {
        priority: "E",
        determinants: [
          {
            code: "09E00",
            text: "ALS Override (Echo)",
            recResponse: 47,
            subCodes: [
              {
                code: "a",
                text: "Cold & Stiff in a Warm Environment",
                recResponse: 47,
              },
              {
                code: "b",
                text: "Decapitation",
                recResponse: 47,
              },
              {
                code: "c",
                text: "Decomposition",
                recResponse: 47,
              },
              {
                code: "d",
                text: "Incineration",
                recResponse: 47,
              },
              {
                code: "e",
                text: "Non-Recent Death",
                recResponse: 47,
              },
              {
                code: "f",
                text: "Severe Injs Obviously Incompatible w/ Life",
                recResponse: 47,
              },
              {
                code: "x",
                text: "Terminal Illness",
                recResponse: 47,
              },
              {
                code: "y",
                text: "DNR (Do Not Resuscitate) Order",
                recResponse: 47,
              },
            ],
          },
          {
            code: "09E01",
            text: "Suspected Workable Arrest, Not Breathing At All",
            recResponse: 47,
          },
          {
            code: "09E02",
            text: "Suspected Workable Arrest, Uncertain Breathing",
            recResponse: 47,
          },
          {
            code: "09E03",
            text: "Suspected Workable Arrest, Hanging",
            recResponse: 47,
          },
          {
            code: "09E04",
            text: "Suspected Workable Arrest, Strangulation",
            recResponse: 47,
          },
          {
            code: "09E05",
            text: "Suspected Workable Arrest, Suffocation",
            recResponse: 47,
          },
        ],
      },
    ],
  },
  {
    protocol: 10,
    name: "Chest Pain (Non-Traumatic)",
    shortName: "Chest Pain",
    description: (
      <>
        <p>
          Chest pain should always be treated as <span className="font-bold text-red-400">potentially cardiac</span> until ruled out.
          Key factors include <span className="font-medium">alertness, breathing status</span>, age, and history of
          <a className="text-primary ml-1" href="/glossary#mi">MI</a> or
          <a className="text-primary ml-1" href="/glossary#angina">angina</a>.
          Additional red flags include:
        </p>

        <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
          <li><span className="text-red-400 font-semibold">Cold sweats</span> or <span className="text-red-400 font-semibold">color changes</span></li>
          <li><span className="text-red-400 font-semibold">Difficulty speaking</span> between breaths</li>
          <li><span className="font-medium">Known cardiac history</span> or recent drug use</li>
          <li><span className="font-medium">Abnormal breathing</span> or altered mental status</li>
        </ul>

        <p className="mt-2">
          Patients <b>35 and older</b> are treated with higher suspicion even if breathing is normal. 
          <span className="text-red-400 font-semibold">ALS response is indicated</span> for any abnormal signs,
          especially if <span className="text-red-400">cocaine</span> or similar stimulants are reported, due to risk of arrhythmia or MI.
        </p>

        <p className="mt-2">
          Collect info about medications taken (e.g., <i>aspirin</i>) and prior events. ALS crews may need to initiate 
          <span className="font-medium">advanced airway support, cardiac monitoring,</span> or pharmacological treatment.
        </p>

        <p className="mt-2 text-muted-foreground">
          When in doubt, escalate.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 49,
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
            display: "Not responding nlly",
            continue: true,
            updateCode: "10D01",
            override: true,
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
            Is **pronoun** breathing <b>normally</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Breathing nlly",
            continue: true,
            dependency: (_patient?: IPatientData) => {
              if (!_patient) return undefined;
              const { age } = _patient;
              if (age >= 35) {
                return { code: "10C03" };
              } else {
                return { code: "10A01" };
              }
            },
          },
          {
            answer: "No",
            display: "Not breathing nlly",
            continue: true,
            updateCode: "10C01",
          },
          {
            answer: "Unknown",
            display: "Unk if breathing nlly",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** having difficulty <b>speaking</b> bewteen{" "}
            <b>breaths</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.answer;
          return lastAnswer === "Not breathing nlly";
        },
        answers: [
          {
            answer: "No",
            display: "Not diff speaking btwn breaths",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Diff speaking btwn breaths",
            continue: true,
            updateCode: "10D02",
          },
          {
            answer: "Unknown",
            display: "Unk if diff speaking btwn breaths",
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
            continue: true,
            updateCode: "10D03",
          },
          {
            answer: "Unknown",
            display: "Unk if changing color",
            continue: true,
          },
        ],
      },

      {
        text: <p>Is **pronoun** clammy or having cold sweats?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "Not clammy or cold sweats",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Clammy or cold sweats",
            continue: true,
            updateCode: "10D04",
          },
          {
            answer: "Unknown",
            display: "Unk if clammy or cold sweats",
            continue: true,
          },
        ],
      },

      {
        text: <p>Does **pronoun** have a cardiac history?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No cardiac hx",
            continue: true,
          },
          {
            answer: "Yes - MI",
            display: "MI hx",
            continue: true,
            updateCode: "10D05",
          },
          {
            answer: "Yes - Angina",
            display: "Angina hx",
            continue: true,
            updateCode: "10D05",
          },
          {
            answer: "Yes - Other/Mltp:",
            display: "Cardiac hx: {input}",
            continue: true,
            updateCode: "10D05",
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk if cardiac hx",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Has **pronoun** taken any drugs or medications in the last 12 hours?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No drugs or meds < 12 hrs",
            continue: true,
          },
          {
            answer: "Yes:",
            display: "Took {input} < 12 hrs ago",
            continue: true,
            input: true,
          },
          {
            answer: "Yes - Cocaine",
            display: "Cocaine < 12 hrs ago",
            continue: true,
            updateCode: "10C02",
          },
          {
            answer: "Unknown",
            display: "Unk if took drugs or meds < 12 hrs",
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
            code: "10A01",
            text: "Breathing Normally (< 35)",
            recResponse: 49,
            defaultCode: true,
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "10C00",
            text: "ALS Override (Charlie)",
            recResponse: 50,
          },
          {
            code: "10C01",
            text: "Abnormal Breathing",
            recResponse: 50,
          },
          {
            code: "10C02",
            text: "Cocaine",
            recResponse: 51,
          },
          {
            code: "10C03",
            text: "Breathing Normally (>= 35)",
            recResponse: 50,
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "10D00",
            text: "ALS Override (Delta)",
            recResponse: 52,
          },
          {
            code: "10D01",
            text: "Not Alert",
            recResponse: 50,
          },
          {
            code: "10D02",
            text: "Diff Speaking Between Breaths",
            recResponse: 50,
          },
          {
            code: "10D03",
            text: "Changing Color",
            recResponse: 50,
          },
          {
            code: "10D04",
            text: "Clammy or Cold Sweats",
            recResponse: 50,
          },
          {
            code: "10D05",
            text: "Heart Attack or Angina Hx",
            recResponse: 50,
          },
        ],
      },
    ],
  },
  {
    protocol: 11,
    name: "Choking",
    shortName: "Choking",
    description: (
      <>
        <p>
          Choking incidents require <span className="text-red-400 font-semibold">immediate assessment</span> of airway patency. The priority is to distinguish between:
        </p>

        <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
          <li><b>Complete obstruction</b> – No breathing, no speech, silent attempts</li>
          <li><b>Partial obstruction</b> – Noisy breathing, struggling, limited speech</li>
          <li><b>Resolved episodes</b> – Breathing normally, may still need evaluation</li>
        </ul>

        <p className="mt-2">
          <span className="font-medium">High-acuity codes</span> are triggered by signs of
          <span className="text-red-400 font-semibold"> ineffective or absent breathing</span>,
          <b> not being alert</b>, or <b>unknown breathing status</b>. These require Echo-level response.
        </p>

        <p className="mt-2">
          The <b>object involved</b> (e.g., <i>food, candy, liquid, toy</i>) helps anticipate complications
          like aspiration or persistent airway compromise. Infants and older adults are at particular risk.
        </p>

        <p className="mt-2 text-muted-foreground">
          Dispatchers should be ready to give <b>Heimlich/back blow instructions</b> or proceed to
          CPR if patient becomes unresponsive.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: 0 },
    ],
    defaultPriority: 4,
    defaultPlan: 53,
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
            display: "Not responding nlly",
            continue: true,
            updateCode: "11D02",
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
            Is **pronoun** breathing <b>normally</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Breathing nlly",
            continue: true,
          },
          {
            answer: "No",
            display: "Not breathing nlly",
            continue: true,
            updateCode: "11D01",
            override: true,
          },
          {
            answer: "COMPLETE OBSTRUCTION",
            display: "Complete obstruction of airway",
            end: true,
            updateCode: "11E01",
            override: true,
          },
          {
            answer: "NOT BREATHING",
            display: "Not breathing at all",
            end: true,
            updateCode: "11E01",
            override: true,
          },
          {
            answer: "INEFFECTIVE BREATHING",
            display: "Ineffective breathing",
            end: true,
            updateCode: "11E01",
            override: true,
          },
          {
            answer: "Unknown",
            display: "Unk if breathing",
            end: true,
            updateCode: "11E00",
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** able to <b>talk</b> (or <b>cry</b>)?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const firstAnswer = answers?.[0]?.answer;
          const secondAnswer = answers?.[1]?.answer;
          return (
            firstAnswer === "Responding nlly" &&
            secondAnswer === "Breathing nlly"
          );
        },
        answers: [
          {
            answer: "Yes",
            display: "Can talk or cry",
            continue: true,
            updateCode: "11A01",
          },
          {
            answer: "No",
            display: "Cannot talk or cry",
            continue: true,
            updateCode: "11D01",
          },
          {
            answer: "Unknown",
            display: "Unk if can talk or cry",
            continue: true,
            updateCode: "11D00",
          },
        ],
      },

      {
        text: (
          <p>
            <b>What</b> did **pronoun** <b>choke</b> on?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Candy",
            display: "Choked on candy",
            continue: true,
            updateSubCode: "C",
          },
          {
            answer: "Food",
            display: "Choked on food",
            continue: true,
            updateSubCode: "F",
          },
          {
            answer: "Milk/Liquid (Non-Toxic):",
            display: "Choked on liquid: {input}",
            continue: true,
            updateSubCode: "M",
            input: true,
          },
          {
            answer: "Object/Toy:",
            display: "Choked on object: {input}",
            continue: true,
            updateSubCode: "O",
            input: true,
          },
          {
            answer: "Other:",
            display: "Choked on: {input}",
            continue: true,
            updateSubCode: "U",
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk what choked on",
            continue: true,
            updateSubCode: "U",
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "A",
        determinants: [
          {
            code: "11A01",
            text: "Not Choking Now (Can talk or cry, is alert & breathing nlly)",
            recResponse: 53,
            subCodes: [
              {
                code: "C",
                text: "Candy",
                recResponse: 53,
              },
              {
                code: "F",
                text: "Food",
                recResponse: 54,
              },
              {
                code: "M",
                text: "Milk/Liquid (Non-Toxic)",
                recResponse: 53,
              },
              {
                code: "O",
                text: "Object/Toy",
                recResponse: 53,
              },
              {
                code: "U",
                text: "Unknown",
                recResponse: 53,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "11D00",
            text: "ALS Override (Delta)",
            recResponse: 54,
            subCodes: [
              {
                code: "C",
                text: "Candy",
                recResponse: 54,
              },
              {
                code: "F",
                text: "Food",
                recResponse: 54,
              },
              {
                code: "M",
                text: "Milk/Liquid (Non-Toxic)",
                recResponse: 54,
              },
              {
                code: "O",
                text: "Object/Toy",
                recResponse: 54,
              },
              {
                code: "U",
                text: "Unknown",
                recResponse: 54,
              },
            ],
          },
          {
            code: "11D01",
            text: "Abnormal Breathing (Partial Obstruction)",
            recResponse: 54,
            subCodes: [
              {
                code: "C",
                text: "Candy",
                recResponse: 54,
              },
              {
                code: "F",
                text: "Food",
                recResponse: 54,
              },
              {
                code: "M",
                text: "Milk/Liquid (Non-Toxic)",
                recResponse: 54,
              },
              {
                code: "O",
                text: "Object/Toy",
                recResponse: 54,
              },
              {
                code: "U",
                text: "Unknown",
                recResponse: 54,
              },
            ],
          },
          {
            code: "11D02",
            text: "Not Alert",
            recResponse: 55,
            subCodes: [
              {
                code: "C",
                text: "Candy",
                recResponse: 55,
              },
              {
                code: "F",
                text: "Food",
                recResponse: 55,
              },
              {
                code: "M",
                text: "Milk/Liquid (Non-Toxic)",
                recResponse: 55,
              },
              {
                code: "O",
                text: "Object/Toy",
                recResponse: 55,
              },
              {
                code: "U",
                text: "Unknown",
                recResponse: 55,
              },
            ],
          },
        ],
      },
      {
        priority: "E",
        determinants: [
          {
            code: "11E00",
            text: "ALS Override (Echo)",
            recResponse: 55,
            subCodes: [
              {
                code: "C",
                text: "Candy",
                recResponse: 55,
              },
              {
                code: "F",
                text: "Food",
                recResponse: 55,
              },
              {
                code: "M",
                text: "Milk/Liquid (Non-Toxic)",
                recResponse: 55,
              },
              {
                code: "O",
                text: "Object/Toy",
                recResponse: 55,
              },
              {
                code: "U",
                text: "Unknown",
                recResponse: 55,
              },
            ],
          },
          {
            code: "11E01",
            text: "Complete Obstruction/Not Breathing/Ineffective Breathing",
            recResponse: 56,
            subCodes: [
              {
                code: "C",
                text: "Candy",
                recResponse: 56,
              },
              {
                code: "F",
                text: "Food",
                recResponse: 56,
              },
              {
                code: "M",
                text: "Milk/Liquid (Non-Toxic)",
                recResponse: 56,
              },
              {
                code: "O",
                text: "Object/Toy",
                recResponse: 56,
              },
              {
                code: "U",
                text: "Unknown",
                recResponse: 56,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 12,
    name: "Convulsions/Seizures",
    shortName: "Seizures",
    description: (
      <>
        <p>
          Key considerations for Seizures include the duration and frequency of
          the seizure, the patient's level of consciousness, and any underlying
          conditions such as pregnancy, diabetes, or neurological disorders.
          Status epilepticus (continuous or multiple seizures without full
          recovery) demands ALS response due to airway and perfusion risks.
        </p>
        <p className="mt-2">
          Secondary factors—such as recent drug ingestion, history of stroke or
          brain tumor, or atypical presentation—may indicate a more complex
          medical emergency. Confirming whether the patient is still seizing and
          if effective breathing is present is crucial for triage.
        </p>
        <p className="mt-2">
          Patients who have stopped seizing but present with abnormal breathing
          or altered mental status should be closely monitored. For pediatric or
          known epileptic patients, a stable presentation may not require
          escalation, though situational context (e.g., seizure length, airway
          patency) still determines response level.{" "}
          <span className="text-purple-500 font-semibold">
            Ineffective or agonal breathing
          </span>{" "}
          should be treated as a highest-level priority.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 57,
    questions: [
      {
        text: (
          <p>
            Has **pronoun** had <b>more than one</b> seizure in row <b>or</b> a
            seizure longer than <b>5 minutes</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No more than one seizure or seizure > 5 min",
            continue: true,
          },
          {
            answer: "Yes - More than one seizure",
            display: "More than one seizure",
            continue: true,
            updateCode: "12D02",
          },
          {
            answer: "Yes - Seizure > 5 minutes",
            display: "Seizure > 5 minutes",
            continue: true,
            updateCode: "12D02",
          },
          {
            answer: "Unknown",
            display: "Unk if more than one seizure or seizure > 5 min",
            continue: true,
          },
        ],
      },

      {
        text: <p>Is she pregnant?</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData) => {
          if (!_patient) return false;
          const { gender, age } = _patient;
          return gender === "Female" && age >= 12 && age <= 50;
        },
        answers: [
          {
            answer: "No",
            display: "PT is not pregnant",
            continue: true,
          },
          {
            answer: "Yes",
            display: "PT is pregnant",
            continue: true,
            updateCode: "12C02",
          },
          {
            answer: "Unknown",
            display: "Unk if pt is pregnant",
            continue: true,
          },
        ],
      },

      {
        text: <p>Is **pronoun** diabetic?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "PT is not diabetic",
            continue: true,
          },
          {
            answer: "Yes",
            display: "PT is diabetic",
            continue: true,
            updateCode: "12C03",
            override: true,
          },
          {
            answer: "Unknown",
            display: "Unk if pt is diabetic",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>Does **pronoun** have a history of strokes or brain tumors?</p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No hx of strokes or brain tumors",
            continue: true,
          },
          {
            answer: "Yes - Stroke",
            display: "Stroke hx",
            continue: true,
            updateCode: "12C05",
          },
          {
            answer: "Yes - Brain Tumor",
            display: "Brain tumor hx",
            continue: true,
            updateCode: "12C05",
          },
          {
            answer: "Yes - Both",
            display: "Stroke and brain tumor hx",
            continue: true,
            updateCode: "12C05",
          },
          {
            answer: "Unknown",
            display: "Unk hx of strokes or brain tumors",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Has **pronoun** ingested or taken any <b>drugs</b> before the
            seizure?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No drugs or meds before seizure",
            continue: true,
          },
          {
            answer: "Yes:",
            display: "Took {input} before seizure",
            continue: true,
            input: true,
            updateCode: "12C06",
          },
          {
            answer: "Unknown",
            display: "Unk if took drugs or meds before seizure",
            continue: true,
          },
        ],
      },

      {
        text: <p>Has **pronoun** stopped seizing?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "PT has stopped seizing",
            continue: true,
            dependency: (_patient?: IPatientData) => {
              if (!_patient) return undefined;
              if (_patient.age < 35) {
                return { code: "12B01" };
              } else if (_patient.age >= 35) {
                return { code: "12D04" };
              }
            },
          },
          {
            answer: "No",
            display: "PT is still seizing",
            continue: true,
            updateCode: "12C06",
          },
          {
            answer: "Unknown",
            display: "Unk if pt has stopped seizing",
            continue: true,
            updateCode: "12B00",
          },
        ],
      },

      {
        text: <p>Is **pronoun** breathing normally?</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.answer;
          return lastAnswer === "PT has stopped seizing";
        },
        answers: [
          {
            answer: "Yes",
            display: "Breathing nlly",
            continue: true,
          },
          {
            answer: "No",
            display: "Not breathing nlly",
            continue: true,
            updateCode: "12C00",
          },
          {
            answer: "AGONAL BREATHING",
            display: "Agonal breathing",
            end: true,
            updateCode: "12D03",
          },
          {
            answer: "Unknown",
            display: "Unk if breathing nlly",
            continue: true,
          },
        ],
      },

      {
        text: <p>Does **pronoun** have a history of seizures or diagnoses?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No hx of seizures or diagnoses",
            continue: true,
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              if (!_patient) return undefined;
              const lastAnswer = answers?.[answers.length - 1]?.answer;
              if (lastAnswer !== "Breathing nlly") return undefined;
              const { age } = _patient;
              if (age <= 6) {
                return { code: "12A03" };
              } else if (age > 6) {
                return { code: "12C04" };
              }
            },
          },
          {
            answer: "Yes",
            display: "Seizure or eplepsy hx",
            continue: true,
            updateSubCode: "E",
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.answer;
              if (lastAnswer !== "Breathing nlly") return undefined;
              return { code: "12A01" };
            },
          },
          {
            answer: "Unknown",
            display: "Unk hx of seizures or diagnoses",
            continue: true,
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.answer;
              if (lastAnswer !== "Breathing nlly") return undefined;
              return { code: "12A02" };
            },
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "A",
        determinants: [
          {
            code: "12A01",
            text: "Not Seizing Now & Effective Breathing Verified (Known Seizure Disorder)",
            recResponse: 57,
            subCodes: [
              {
                code: "E",
                text: "Epileptic or Previous Seizure Diagnosis",
                recResponse: 57,
              },
            ],
          },
          {
            code: "12A02",
            text: "Not Seizing Now & Effective Breathing Verified (Seizure Disorder Unkn)",
            recResponse: 57,
          },
          {
            code: "12A03",
            text: "Not Seizing Now & Effective Breathing Verified (<= 6, Confirmed No Seizure Disorder)",
            recResponse: 57,
          },
          {
            code: "12A04",
            text: "Focal/Absence Seizure (Alert)",
            recResponse: 57,
            subCodes: [
              {
                code: "E",
                text: "Epileptic or Previous Seizure Diagnosis",
                recResponse: 57,
              },
            ],
          },
          {
            code: "12A05",
            text: "Impending Seizure (Aura)",
            recResponse: 57,
            subCodes: [
              {
                code: "E",
                text: "Epileptic or Previous Seizure Diagnosis",
                recResponse: 57,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "12B00",
            text: "BLS Override (Bravo)",
            recResponse: 57,
            subCodes: [
              {
                code: "E",
                text: "Epileptic or Previous Seizure Diagnosis",
                recResponse: 57,
              },
            ],
          },
          {
            code: "12B01",
            text: "Effective Breathing Not Verified (< 35)",
            recResponse: 57,
            subCodes: [
              {
                code: "E",
                text: "Epileptic or Previous Seizure Diagnosis",
                recResponse: 57,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "12C00",
            text: "ALS Override (Charlie)",
            recResponse: 58,
            subCodes: [
              {
                code: "E",
                text: "Epileptic or Previous Seizure Diagnosis",
                recResponse: 58,
              },
            ],
          },
          {
            code: "12C01",
            text: "Focal/Absence Seizure (Not Alert)",
            recResponse: 58,
            subCodes: [
              {
                code: "E",
                text: "Epileptic or Previous Seizure Diagnosis",
                recResponse: 58,
              },
            ],
          },
          {
            code: "12C02",
            text: "Pregnancy",
            recResponse: 58,
            subCodes: [
              {
                code: "E",
                text: "Epileptic or Previous Seizure Diagnosis",
                recResponse: 58,
              },
            ],
          },
          {
            code: "12C03",
            text: "Diabetic",
            recResponse: 58,
            subCodes: [
              {
                code: "E",
                text: "Epileptic or Previous Seizure Diagnosis",
                recResponse: 58,
              },
            ],
          },
          {
            code: "12C04",
            text: "Not Seizing Now & Effective Breathing Verified (> 6, Confirmed No Seizure Disorder)",
            recResponse: 57,
          },
          {
            code: "12C05",
            text: "Hx of Stroke or Brain Tumor",
            recResponse: 57,
            subCodes: [
              {
                code: "E",
                text: "Epileptic or Previous Seizure Diagnosis",
                recResponse: 57,
              },
            ],
          },
          {
            code: "12C06",
            text: "Overdose/Poisoning (Ingestion)",
            recResponse: 59,
            subCodes: [
              {
                code: "E",
                text: "Epileptic or Previous Seizure Diagnosis",
                recResponse: 59,
              },
            ],
          },
          {
            code: "12C07",
            text: "Aytpical Seizure",
            recResponse: 58,
            subCodes: [
              {
                code: "E",
                text: "Epileptic or Previous Seizure Diagnosis",
                recResponse: 58,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "12D00",
            text: "ALS Override (Delta)",
            recResponse: 60,
            subCodes: [
              {
                code: "E",
                text: "Epileptic or Previous Seizure Diagnosis",
                recResponse: 60,
              },
            ],
          },
          {
            code: "12D01",
            text: "Not Breathing (After Key Questioning)",
            recResponse: 61,
            notBreathing: true,
            subCodes: [
              {
                code: "E",
                text: "Epileptic or Previous Seizure Diagnosis",
                recResponse: 61,
              },
            ],
          },
          {
            code: "12D02",
            text: "Continuous or Multiple Seizures",
            recResponse: 58,
            subCodes: [
              {
                code: "E",
                text: "Epileptic or Previous Seizure Diagnosis",
                recResponse: 58,
              },
            ],
          },
          {
            code: "12D03",
            text: "Agonal/Ineffective Breathing",
            recResponse: 60,
            subCodes: [
              {
                code: "E",
                text: "Epileptic or Previous Seizure Diagnosis",
                recResponse: 60,
              },
            ],
          },
          {
            code: "12D04",
            text: "Effective Breathing Not Verified (>= 35)",
            recResponse: 58,
            subCodes: [
              {
                code: "E",
                text: "Epileptic or Previous Seizure Diagnosis",
                recResponse: 58,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 13,
    name: "Diabetic Problems",
    shortName: "Diabetic Problem",
    description: (
      <>
        <p>
          Key considerations for Diabetic Problems include the patient's level of consciousness, respiratory status,
          and behavior. Hypoglycemia and hyperglycemia can both present with altered mental status, abnormal behavior,
          or unresponsiveness, requiring prompt assessment and intervention.
        </p>
        <p className="mt-2">
          Patients who are alert, breathing normally, and behaving appropriately are typically low acuity. However,
          abnormal breathing, confusion, or unresponsiveness may indicate a serious glucose imbalance or underlying
          complication requiring ALS care.
        </p>
        <p className="mt-2">
          Combative or aggressive behavior, especially in patients with known diabetes, may be the result of severe
          hypoglycemia. Ensure appropriate safety precautions are taken during response, and prepare for possible
          de-escalation or sedation protocols if needed.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 62,
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
            display: "Not responding nlly",
            continue: true,
            updateCode: "13C01",
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
            Is **pronoun** <b>behaving normally now</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Behaving nlly",
            continue: true,
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const firstAnswer = answers?.[0]?.answer;
              if (firstAnswer === "Responding nlly") {
                return { code: "13A01" };
              }
            },
          },
          {
            answer: "No",
            display: "Not behaving nlly",
            continue: true,
            updateCode: "13C02",
          },
          {
            answer: "Unknown",
            display: "Unk if behaving nlly",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** <b>breathing normally</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Breathing nlly",
            continue: true,
          },
          {
            answer: "No",
            display: "Not breathing nlly",
            continue: true,
            updateCode: "13C03",
          },
          {
            answer: "Unknown",
            display: "Unk if breathing nlly",
            continue: true,
          },
        ],
      },

      {
        text: <p>Is **pronoun** acting aggressively or combative?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "Not acting aggressively or combative",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Acting aggressively or combative",
            continue: true,
            updateSubCode: "C",
          },
          {
            answer: "Unknown",
            display: "Unk if acting aggressively or combative",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Does **pronoun** have <b>access to weapons</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.answer;
          return lastAnswer === "Acting aggressively or combative";
        },
        answers: [
          {
            answer: "No",
            display: "No access to weapons",
            continue: true,
          },
          {
            answer: "Yes:",
            display: "Access to weapons: {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk if access to weapons",
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
            code: "13A01",
            text: "Alert & Behaving Normally",
            defaultCode: true,
            recResponse: 62,
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "13C00",
            text: "ALS Override (Charlie)",
            recResponse: 63,
            subCodes: [
              {
                code: "C",
                text: "Combative or Aggressive",
                recResponse: 64,
              },
            ],
          },
          {
            code: "13C01",
            text: "Not Alert",
            recResponse: 63,
            subCodes: [
              {
                code: "C",
                text: "Combative or Aggressive",
                recResponse: 64,
              },
            ],
          },
          {
            code: "13C02",
            text: "Abnormal Behavior",
            recResponse: 63,
            subCodes: [
              {
                code: "C",
                text: "Combative or Aggressive",
                recResponse: 64,
              },
            ],
          },
          {
            code: "13C03",
            text: "Abnormal Breathing",
            recResponse: 63,
            subCodes: [
              {
                code: "C",
                text: "Combative or Aggressive",
                recResponse: 64,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "13D00",
            text: "ALS Override (Delta)",
            recResponse: 63,
            subCodes: [
              {
                code: "C",
                text: "Combative or Aggressive",
                recResponse: 64,
              },
            ],
          },
          {
            code: "13D01",
            text: "Unconscious",
            notConscious: true,
            recResponse: 63,
            subCodes: [
              {
                code: "C",
                text: "Combative or Aggressive",
                recResponse: 64,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 14,
    name: "Drowning (Near) / Diving / SCUBA Accident",
    shortName: "Drowning",
    description: (
      <>
        <p>
          Drowning-related calls require rapid identification of submersion
          time, level of consciousness, and breathing status. Submersion
          duration over 5 minutes or unknown submersion time significantly
          increases the urgency, triggering Echo-level responses due to the risk
          of hypoxia and cardiac arrest.
        </p>
        <p className="mt-2">
          Specialized rescue types—such as ice, floodwater, or swift water
          incidents—require appropriate teams and response posture. Subtypes
          like diving or SCUBA accidents may indicate spinal injuries or air
          embolism risks.
        </p>
        <p className="mt-2">
          Patients who are alert and breathing normally may be triaged at lower
          priority, but all drowning events demand careful evaluation for
          delayed onset respiratory compromise or neurological symptoms,
          especially in pediatric and cold-water exposures.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 3 },
      { name: "Police", priority: 0 },
    ],
    defaultPriority: 4,
    defaultPlan: 65,
    questions: [
      {
        text: (
          <p>
            <b>Where</b> is **pronoun** <b>now</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "In Water",
            display: "Pt is in water",
            continue: true,
          },
          {
            answer: "Out of Water",
            display: "Pt is out of water",
            continue: true,
          },
          {
            answer: "In Floodwater",
            display: "Pt is in floodwater",
            continue: true,
            updateSubCode: "F",
          },
          {
            answer: "In/On Ice",
            display: "Pt is in/on ice",
            continue: true,
            updateSubCode: "I",
          },
          {
            answer: "Stranded:",
            display: "Pt is stranded: {input}",
            continue: true,
            input: true,
            updateCode: "14D03",
          },
          {
            answer: "Underwater/Submerged",
            display: "Pt is underwater",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk where pt is",
            continue: true,
            updateCode: "14B03",
          },
        ],
      },

      {
        text: (
          <p>
            Is a <b>defibrillator</b>{" "}
            <span className="text-red-400">(AED)</span> available?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData) => {
          if (!_patient) return false;
          const { isBreathing } = _patient;
          return isBreathing === false;
        },
        answers: [
          {
            answer: "No",
            display: "No AED available",
            end: true,
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const firstAnswer = answers?.[0]?.answer;
              if (firstAnswer === "PT is in water") {
                return { code: "14E02" };
              } else if (firstAnswer === "PT is out of water") {
                return { code: "14E01" };
              }
            },
          },
          {
            answer: "Yes",
            display: "AED available",
            end: true,
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const firstAnswer = answers?.[0]?.answer;
              if (firstAnswer === "PT is in water") {
                return { code: "14E02" };
              } else if (firstAnswer === "PT is out of water") {
                return { code: "14E01" };
              }
            },
          },
          {
            answer: "Unknown",
            display: "Unk if AED available",
            end: true,
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const firstAnswer = answers?.[0]?.answer;
              if (firstAnswer === "PT is in water") {
                return { code: "14E02" };
              } else if (firstAnswer === "PT is out of water") {
                return { code: "14E01" };
              }
            },
          },
        ],
      },

      // For underwater
      {
        text: <p>Is it easy to get to the patient?</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.answer;
          return lastAnswer === "Pt is underwater";
        },
        answers: [
          {
            answer: "Yes",
            display: "Easy to get to pt",
            end: true,
            updateCode: "14E02",
          },
          {
            answer: "No",
            display: "Specialized rescue needed",
            end: true,
            updateCode: "14D02",
          },
          {
            answer: "Unknown",
            display: "Unk if easy to get to pt",
            end: true,
            updateCode: "14E02",
          },
        ],
      },

      // For unknown location
      {
        text: (
          <p>
            Where was **pronoun** <b>last seen</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const firstAnswer = answers?.[0]?.answer;
          return firstAnswer === "Unk where pt is";
        },
        answers: [
          {
            answer: "Location:",
            display: "Last seen at: {input}",
            end: true,
            input: true,
            updateCode: "14D00",
            updateSubCode: "W",
          },
          {
            answer: "Unknown",
            display: "Unk where pt was last seen",
            end: true,
            updateCode: "14D00",
            updateSubCode: "W",
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
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const firstAnswer = answers?.[0]?.answer;
          return (
            firstAnswer === "Pt is out of water" ||
            firstAnswer === "Pt is in water"
          );
        },
        answers: [
          {
            answer: "Yes",
            display: "Responding nlly",
            continue: true,
          },
          {
            answer: "No",
            display: "Not responding nlly",
            continue: true,
            updateCode: "14D05",
          },
          {
            answer: "Unknown",
            display: "Unk if responding nlly",
            continue: true,
            updateCode: "14B03",
          },
        ],
      },

      {
        text: <p>Is **pronoun** breathing normally?</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const firstAnswer = answers?.[0]?.answer;
          return (
            firstAnswer === "Pt is out of water" ||
            firstAnswer === "Pt is in water"
          );
        },
        answers: [
          {
            answer: "Yes",
            display: "Breathing nlly",
            continue: true,
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const firstAnswer = answers?.[0]?.answer;
              const lastAnswer = answers?.[answers.length - 1]?.answer;
              if (
                firstAnswer === "Pt is out of water" &&
                lastAnswer === "Responding nlly"
              ) {
                return { code: "14A01" };
              } else if (
                firstAnswer === "Pt is in water" &&
                lastAnswer === "Responding nlly"
              ) {
                return { code: "14B01" };
              }
            },
          },
          {
            answer: "No",
            display: "Not breathing nlly",
            continue: true,
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.answer;
              if (lastAnswer === "Responding nlly") {
                return { code: "14C01" };
              }
            },
          },
          {
            answer: "AGONAL BREATHING",
            display: "Agonal breathing",
            end: true,
            updateCode: "14E01",
            override: true,
          },
          {
            answer: "Unknown",
            display: "Unk if breathing nlly",
            continue: true,
            updateCode: "14B03",
          },
        ],
      },

      {
        text: <p>Is **pronoun** injured at all?</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const firstAnswer = answers?.[0]?.answer;
          return (
            firstAnswer === "Pt is out of water" ||
            firstAnswer === "Pt is in water"
          );
        },
        answers: [
          {
            answer: "No",
            display: "No injuries",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Injuries: {input}",
            continue: true,
            input: true,
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const isBreathingNlly =
                answers?.find((a) => a.answer === "Breathing nlly")?.answer ===
                "Breathing nlly";
              const isRespondingNlly =
                answers?.find((a) => a.answer === "Responding nlly")?.answer ===
                "Responding nlly";
              if (isBreathingNlly && isRespondingNlly) {
                return { code: "14B01" };
              }
            },
          },
          {
            answer: "Obious or Suspected Neck/Spinal Injury",
            display: "Obvious or suspected neck/spinal injury",
            continue: true,
            updateCode: "14D06",
          },
          {
            answer: "Yes - Obvious Death",
            display: "Obvious death",
            end: true,
            updateCode: "14B02",
          },
          {
            answer: "Unknown",
            display: "Unk if injured",
            continue: true,
            updateCode: "14B03",
          },
        ],
      },

      {
        text: <p>What was **pronoun** doing prior to the incident?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Swimming",
            display: "Swimming prior to incident",
            continue: true,
          },
          {
            answer: "Diving",
            display: "Diving prior to incident",
            continue: true,
            updateSubCode: "D",
          },
          {
            answer: "SCUBA Diving",
            display: "SCUBA diving prior to incident",
            continue: true,
            updateSubCode: "S",
          },
          {
            answer: "Unknown",
            display: "Unk activity prior to incident",
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
            code: "14A01",
            text: "Alert & Breathing Normally (No Injs & Out of Water)",
            recResponse: 65,
            subCodes: [
              {
                code: "S",
                text: "SCUBA Accident (Not Underwater)",
                recResponse: 65,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "14B00",
            text: "BLS Override (Bravo)",
            recResponse: 65,
            subCodes: [
              {
                code: "S",
                text: "SCUBA Accident (Not Underwater)",
                recResponse: 65,
              },
            ],
          },
          {
            code: "14B01",
            text: "Alert & Breathing Normally (Injs or In Water)",
            recResponse: 65,
            subCodes: [
              {
                code: "D",
                text: "Diving Inj (Not Underwater)",
                recResponse: 65,
              },
              {
                code: "F",
                text: "Floodwater Rescue",
                recResponse: 66,
              },
              {
                code: "I",
                text: "Ice Rescue",
                recResponse: 67,
              },
              {
                code: "S",
                text: "SCUBA Accident (Not Underwater)",
                recResponse: 65,
              },
              {
                code: "W",
                text: "Swift Water Rescue",
                recResponse: 66,
              },
            ],
          },
          {
            code: "14B02",
            text: "Obvious Death (Submersion >= 6hrs)",
            recResponse: 68,
          },
          {
            code: "14B03",
            text: "Unkn Status / Other Codes Not Applicable",
            recResponse: 65,
            defaultCode: true,
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "14C00",
            text: "ALS Override (Charlie)",
            recResponse: 68,
            subCodes: [
              {
                code: "D",
                text: "Diving Inj (Not Underwater)",
                recResponse: 68,
              },
              {
                code: "F",
                text: "Floodwater Rescue",
                recResponse: 66,
              },
              {
                code: "I",
                text: "Ice Rescue",
                recResponse: 67,
              },
              {
                code: "S",
                text: "SCUBA Accident (Not Underwater)",
                recResponse: 68,
              },
              {
                code: "W",
                text: "Swift Water Rescue",
                recResponse: 66,
              },
            ],
          },
          {
            code: "14C01",
            text: "Alert w/ Abnormal Breathing",
            recResponse: 68,
            subCodes: [
              {
                code: "D",
                text: "Diving Inj (Not Underwater)",
                recResponse: 68,
              },
              {
                code: "F",
                text: "Floodwater Rescue",
                recResponse: 66,
              },
              {
                code: "I",
                text: "Ice Rescue",
                recResponse: 67,
              },
              {
                code: "S",
                text: "SCUBA Accident (Not Underwater)",
                recResponse: 68,
              },
              {
                code: "W",
                text: "Swift Water Rescue",
                recResponse: 66,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "14D00",
            text: "ALS Override (Delta)",
            recResponse: 68,
            subCodes: [
              {
                code: "D",
                text: "Diving Inj (Not Underwater)",
                recResponse: 68,
              },
              {
                code: "F",
                text: "Floodwater Rescue",
                recResponse: 66,
              },
              {
                code: "I",
                text: "Ice Rescue",
                recResponse: 67,
              },
              {
                code: "S",
                text: "SCUBA Accident (Not Underwater)",
                recResponse: 68,
              },
              {
                code: "W",
                text: "Swift Water Rescue",
                recResponse: 66,
              },
            ],
          },
          {
            code: "14D01",
            text: "Unconscious",
            recResponse: 69,
            notConscious: true,
            subCodes: [
              {
                code: "D",
                text: "Diving Inj (Not Underwater)",
                recResponse: 69,
              },
              {
                code: "F",
                text: "Floodwater Rescue",
                recResponse: 66,
              },
              {
                code: "I",
                text: "Ice Rescue",
                recResponse: 67,
              },
              {
                code: "S",
                text: "SCUBA Accident (Not Underwater)",
                recResponse: 69,
              },
              {
                code: "W",
                text: "Swift Water Rescue",
                recResponse: 66,
              },
            ],
          },
          {
            code: "14D02",
            text: "Underwater (Specialized Rescue)",
            recResponse: 66,
          },
          {
            code: "14D03",
            text: "Standed (Specialized Rescue)",
            recResponse: 66,
            subCodes: [
              {
                code: "D",
                text: "Diving Inj (Not Underwater)",
                recResponse: 66,
              },
              {
                code: "F",
                text: "Floodwater Rescue",
                recResponse: 66,
              },
              {
                code: "I",
                text: "Ice Rescue",
                recResponse: 67,
              },
              {
                code: "S",
                text: "SCUBA Accident (Not Underwater)",
                recResponse: 66,
              },
              {
                code: "W",
                text: "Swift Water Rescue",
                recResponse: 66,
              },
            ],
          },
          {
            code: "14D04",
            text: "Just Resuscitated &/or Defibrillated (External)",
            recResponse: 69,
            subCodes: [
              {
                code: "D",
                text: "Diving Inj (Not Underwater)",
                recResponse: 69,
              },
              {
                code: "F",
                text: "Floodwater Rescue",
                recResponse: 66,
              },
              {
                code: "I",
                text: "Ice Rescue",
                recResponse: 67,
              },
              {
                code: "S",
                text: "SCUBA Accident (Not Underwater)",
                recResponse: 69,
              },
              {
                code: "W",
                text: "Swift Water Rescue",
                recResponse: 66,
              },
            ],
          },
          {
            code: "14D05",
            text: "Not Alert",
            recResponse: 68,
            subCodes: [
              {
                code: "D",
                text: "Diving Inj (Not Underwater)",
                recResponse: 68,
              },
              {
                code: "F",
                text: "Floodwater Rescue",
                recResponse: 66,
              },
              {
                code: "I",
                text: "Ice Rescue",
                recResponse: 67,
              },
              {
                code: "S",
                text: "SCUBA Accident (Not Underwater)",
                recResponse: 68,
              },
              {
                code: "W",
                text: "Swift Water Rescue",
                recResponse: 66,
              },
            ],
          },
          {
            code: "14D06",
            text: "Suspected Neck Inj",
            recResponse: 68,
            subCodes: [
              {
                code: "D",
                text: "Diving Inj (Not Underwater)",
                recResponse: 68,
              },
              {
                code: "F",
                text: "Floodwater Rescue",
                recResponse: 66,
              },
              {
                code: "I",
                text: "Ice Rescue",
                recResponse: 67,
              },
              {
                code: "S",
                text: "SCUBA Accident (Not Underwater)",
                recResponse: 68,
              },
              {
                code: "W",
                text: "Swift Water Rescue",
                recResponse: 66,
              },
            ],
          },
        ],
      },
      {
        priority: "E",
        determinants: [
          {
            code: "14E00",
            text: "ALS Override (Echo)",
            recResponse: 70,
            subCodes: [
              {
                code: "D",
                text: "Diving Inj (Not Underwater)",
                recResponse: 70,
              },
              {
                code: "F",
                text: "Floodwater Rescue",
                recResponse: 66,
              },
              {
                code: "I",
                text: "Ice Rescue",
                recResponse: 70,
              },
              {
                code: "S",
                text: "SCUBA Accident (Not Underwater)",
                recResponse: 70,
              },
              {
                code: "W",
                text: "Swift Water Rescue",
                recResponse: 66,
              },
            ],
          },
          {
            code: "14E01",
            text: "Arrest (Out of Water)",
            recResponse: 70,
            notBreathing: true,
            subCodes: [
              {
                code: "D",
                text: "Diving Inj (Not Underwater)",
                recResponse: 70,
              },
              {
                code: "F",
                text: "Floodwater Rescue",
                recResponse: 66,
              },
              {
                code: "I",
                text: "Ice Rescue",
                recResponse: 70,
              },
              {
                code: "S",
                text: "SCUBA Accident (Not Underwater)",
                recResponse: 70,
              },
              {
                code: "W",
                text: "Swift Water Rescue",
                recResponse: 66,
              },
            ],
          },
          {
            code: "14E02",
            text: "Underwater (Non-Specialized Rescue)",
            recResponse: 70,
          },
        ],
      },
    ],
  },
  {
    protocol: 15,
    name: "Electrocution/Lightning",
    shortName: "Electrocution/Lightning",
    description: (
      <>
        <p>
          Electrocution and lightning incidents carry significant risk of
          cardiac arrest, respiratory failure, and hidden traumatic injuries
          such as long falls or forceful ejection. Immediate assessment of scene
          safety is critical. Callers should never approach victims unless power
          has been confirmed off by qualified personnel.
        </p>
        <p className="mt-2">
          Patients not breathing, unresponsive, or still in contact with live
          power are prioritized for Echo or Delta responses. Power status,
          presence of hazards, and fall distances must be established quickly to
          prevent additional victims, including rescuers.
        </p>
        <p className="mt-2">
          Lightning strike cases can mimic cardiac arrest and often present with
          neurological deficits. Ensure Fire is dispatched for scene safety and
          Police if scene access is restricted or if industrial/electrical
          infrastructure is involved.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: 0 },
    ],
    defaultPriority: 2,
    defaultPlan: 71,
    questions: [
      {
        text: (
          <p>
            <b>Where</b> is **pronoun** now?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Location:",
            display: "Pt is located at {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk where pt is",
            continue: true,
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
            answer: "Electrocution",
            display: "Pt was electrocuted",
            continue: true,
            updateSubCode: "E",
          },
          {
            answer: "Lightning",
            display: "Pt was struck by lightning",
            continue: true,
            updateSubCode: "L",
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** <b>disconnected</b> from the <b>power</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const secondAnswer = answers?.[1]?.answer;
          return secondAnswer === "Pt was electrocuted";
        },
        answers: [
          {
            answer: "Yes",
            display: "Pt is disconnected from power",
            continue: true,
          },
          {
            answer: "No",
            display: "Pt is not disconnected from power",
            continue: true,
            updateCode: "15D03",
          },
          {
            answer: "Unknown",
            display: "Unk if pt is disconnected from power",
            continue: true,
            updateCode: "15D09",
          },
        ],
      },

      {
        text: (
          <p>
            Has the <b>power</b> been <b>turned off</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const secondAnswer = answers?.[1]?.answer;
          return secondAnswer === "Pt was electrocuted";
        },
        answers: [
          {
            answer: "No",
            display: "Power is not turned off",
            continue: true,
            updateCode: "15D04",
          },
          {
            answer: "Yes",
            display: "Power is turned off",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if power is turned off",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Did **pronoun** <b>fall</b> off something when this happened?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "PT did not fall",
            continue: true,
          },
          {
            answer: "Yes",
            display: "PT fell after incident",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if pt fell",
            continue: true,
          },
        ],
      },

      {
        text: <p>How far did **pronoun** fall?</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.answer;
          return lastAnswer === "PT fell after incident";
        },
        answers: [
          {
            answer: "Ground Level",
            display: "Ground level fall",
            continue: true,
          },
          {
            answer: "< 6ft",
            display: "Fall < 6ft",
            continue: true,
          },
          {
            answer: "Long Fall (>= 6ft)",
            display: "PT fell >= 6ft",
            continue: true,
            updateCode: "15D05",
          },
          {
            answer: "EXTREME FALL (>= 30ft/10m)",
            display: "PT fell >= 30ft/10m",
            continue: true,
            updateCode: "15D06",
          },
          {
            answer: "Unknown",
            display: "Unk how far pt fell",
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
        preRenderInstructions: (_patient?: IPatientData) => {
          if (!_patient) return false;
          const { isConscious } = _patient;
          return isConscious !== false;
        },
        answers: [
          {
            answer: "Yes",
            display: "Responding nlly",
            continue: true,
          },
          {
            answer: "No",
            display: "Not responding nlly",
            continue: true,
            updateCode: "15D07",
          },
          {
            answer: "Unknown",
            display: "Unk if responding nlly",
            continue: true,
          },
        ],
      },

      {
        text: <p>Is **pronoun** breathing normally?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Breathing nlly",
            continue: true,
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const lastAnswer = answers?.[answers.length - 1]?.answer;
              if (lastAnswer === "Responding nlly") {
                return { code: "15C01" };
              }
            },
          },
          {
            answer: "No",
            display: "Not breathing nlly",
            continue: true,
            updateCode: "15D08",
          },
          {
            answer: "Not Breathing at All",
            display: "Not breathing at all",
            end: true,
            updateCode: "15E01",
          },
          {
            answer: "AGONAL BREATHING",
            display: "Agonal breathing",
            end: true,
            updateCode: "15E01",
            override: true,
          },
          {
            answer: "Unknown",
            display: "Unk if breathing nlly",
            continue: true,
            updateCode: "15D09",
          },
        ],
      },

      {
        text: <p>Are there any hazards present?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No hazards present",
            continue: true,
          },
          {
            answer: "Yes:",
            display: "Hazards present: {input}",
            continue: true,
            input: true,
            updateCode: "15D04",
          },
          {
            answer: "Unknown",
            display: "Unk if hazards present",
            continue: true,
            updateCode: "15D09",
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "C",
        determinants: [
          {
            code: "15C01",
            text: "Alert & Breathing Normally",
            recResponse: 71,
            subCodes: [
              {
                code: "E",
                text: "Electrocution",
                recResponse: 71,
              },
              {
                code: "L",
                text: "Lightning",
                recResponse: 71,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "15D00",
            text: "ALS Override (Delta)",
            recResponse: 72,
            subCodes: [
              {
                code: "E",
                text: "Electrocution",
                recResponse: 72,
              },
              {
                code: "L",
                text: "Lightning",
                recResponse: 72,
              },
            ],
          },
          {
            code: "15D01",
            text: "Mult Victims",
            recResponse: 73,
            multVictim: true,
            subCodes: [
              {
                code: "E",
                text: "Electrocution",
                recResponse: 73,
              },
              {
                code: "L",
                text: "Lightning",
                recResponse: 73,
              },
            ],
          },
          {
            code: "15D02",
            text: "Unconscious",
            recResponse: 72,
            notConscious: true,
            subCodes: [
              {
                code: "E",
                text: "Electrocution",
                recResponse: 72,
              },
              {
                code: "L",
                text: "Lightning",
                recResponse: 72,
              },
            ],
          },
          {
            code: "15D03",
            text: "Not Disconnected from Power",
            recResponse: 71,
            subCodes: [
              {
                code: "E",
                text: "Electrocution",
                recResponse: 71,
              },
            ],
          },
          {
            code: "15D04",
            text: "Powert Not Off or Hazard Present",
            recResponse: 71,
            subCodes: [
              {
                code: "E",
                text: "Electrocution",
                recResponse: 71,
              },
              {
                code: "L",
                text: "Lightning",
                recResponse: 71,
              },
            ],
          },
          {
            code: "15D05",
            text: "Extreme Fall (>=30ft/10m)",
            recResponse: 74,
            subCodes: [
              {
                code: "E",
                text: "Electrocution",
                recResponse: 74,
              },
              {
                code: "L",
                text: "Lightning",
                recResponse: 74,
              },
            ],
          },
          {
            code: "15D06",
            text: "EXTREME FALL",
            recResponse: 74,
            subCodes: [
              {
                code: "E",
                text: "Electrocution",
                recResponse: 74,
              },
              {
                code: "L",
                text: "Lightning",
                recResponse: 74,
              },
            ],
          },
          {
            code: "15D07",
            text: "Not Alert",
            recResponse: 71,
            subCodes: [
              {
                code: "E",
                text: "Electrocution",
                recResponse: 71,
              },
              {
                code: "L",
                text: "Lightning",
                recResponse: 71,
              },
            ],
          },
          {
            code: "15D08",
            text: "Abnormal Breathing",
            recResponse: 71,
            subCodes: [
              {
                code: "E",
                text: "Electrocution",
                recResponse: 71,
              },
              {
                code: "L",
                text: "Lightning",
                recResponse: 71,
              },
            ],
          },
          {
            code: "15D09",
            text: "Unkn Status / Other Codes Not Applicable",
            recResponse: 71,
            defaultCode: true,
            subCodes: [
              {
                code: "E",
                text: "Electrocution",
                recResponse: 71,
              },
              {
                code: "L",
                text: "Lightning",
                recResponse: 71,
              },
            ],
          },
        ],
      },
      {
        priority: "E",
        determinants: [
          {
            code: "15E00",
            text: "ALS Override (Echo)",
            recResponse: 75,
            subCodes: [
              {
                code: "E",
                text: "Electrocution",
                recResponse: 75,
              },
              {
                code: "L",
                text: "Lightning",
                recResponse: 75,
              },
            ],
          },
          {
            code: "15E01",
            text: "Not Breathing/Ineffective Breathing",
            notBreathing: true,
            recResponse: 75,
            subCodes: [
              {
                code: "E",
                text: "Electrocution",
                recResponse: 75,
              },
              {
                code: "L",
                text: "Lightning",
                recResponse: 75,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 16,
    name: "Eye Problems / Injuries",
    shortName: "Eye Injs",
    description: (
      <>
        <p>
          Eye injuries range from minor irritants to penetrating trauma and
          chemical exposure, all requiring careful triage due to the sensitivity
          and potential for vision loss. This protocol helps distinguish between
          routine and sight-threatening conditions.
        </p>
        <p className="mt-2">
          Chemical exposures or signs of globe rupture (fluid leakage,
          structural deformity) should trigger higher acuity responses. Sudden
          visual loss, direct trauma, or involvement of penetrating objects may
          also elevate priority.
        </p>
        <p className="mt-2">
          While many injuries may appear minor (e.g., lens issues, small foreign
          bodies), any indication of altered consciousness or vision-threatening
          signs should be treated with ALS response. Fire may be dispatched for
          flushing or patient assistance, especially in workplace or industrial
          settings.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 76,
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
            display: "Not responding nlly",
            continue: true,
            updateCode: "16D01",
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
            How did the <b>injury</b> occur?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Chemical:",
            display: "Caused by {input}",
            continue: true,
            input: true,
            updateCode: "16A01",
          },
          {
            answer: "Contact Lens",
            display: "Contact lens problem",
            continue: true,
            updateCode: "16A03",
          },
          {
            answer: "Direct Blow",
            display: "Caused by direct blow",
            continue: true,
            updateCode: "16A01",
          },
          {
            answer: "Flying Object:",
            display: "Caused by flying object: {input}",
            continue: true,
            input: true,
            updateCode: "16A01",
          },
          {
            answer: "Medical Eye Problem",
            display: "Medical eye problem",
            continue: true,
            updateCode: "16A03",
          },
          {
            answer: "Penetrating Object:",
            display: "Caused by penetrating object: {input}",
            continue: true,
            input: true,
            updateCode: "16B01",
          },
          {
            answer: "Small Foreign Object",
            display: "Caused by small foreign object",
            continue: true,
            updateCode: "16A02",
          },
          {
            answer: "Other:",
            display: "Caused by {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk how injury occurred",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is the eyeball <b>cut open</b> or is <b>fluid leaking out</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.answer;
          return (
            lastAnswer.includes("Caused by penetrating object") ||
            lastAnswer.includes("Caused by flying object") ||
            lastAnswer.includes("Caused by direct blow")
          );
        },
        answers: [
          {
            answer: "No",
            display: "No cut or fluid leaking",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Eyeball cut or fluid leaking",
            continue: true,
            updateCode: "16B01",
          },
          {
            answer: "Unknown",
            display: "Unk if eyeball cut or fluid leaking",
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
            code: "16A01",
            text: "Moderate Eye Injs",
            recResponse: 76,
          },
          {
            code: "16A02",
            text: "Minor Eye Injs",
            recResponse: 76,
          },
          {
            code: "16A03",
            text: "Medical Eye Problems",
            recResponse: 77,
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "16B00",
            text: "BLS Override (Bravo)",
            recResponse: 76,
          },
          {
            code: "16B01",
            text: "Severe Eye Injs",
            recResponse: 76,
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "16D00",
            text: "ALS Override (Delta)",
            recResponse: 78,
          },
          {
            code: "16D01",
            text: "Not Alert",
            recResponse: 78,
          },
        ],
      },
    ],
  },
  {
    protocol: 17,
    name: "Falls",
    shortName: "Falls",
    description: (
      <>
        <p>
          Falls encompass a wide range of trauma scenarios, from minor slips to
          high-velocity impacts or intentional self-harm. Protocol 17
          distinguishes these cases based on fall height, location of impact,
          patient alertness, and complications like bleeding or respiratory
          distress.
        </p>
        <p className="mt-2">
          Long or extreme falls (≥ 6ft or ≥ 30ft), head/chest impacts, or
          altered mental status immediately trigger ALS consideration. Subcodes
          address environmental hazards, accessibility barriers, or intentional
          acts (e.g., jumpers) that may affect extrication or scene safety. For
          calls that are longer than 30 minutes from a major trauma center,
          consider utilizing air asset(s)
        </p>
        <p className="mt-2">
          Responders should be aware of delayed symptoms in elderly patients or
          those on blood thinners, and assess for secondary injuries, including
          spinal trauma. Fire units may assist with lift-assists, difficult
          access, or extrication support.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 79,
    questions: [
      {
        text: <p>When did **pronoun** fall?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Now (less than 6hrs ago)",
            display: "Fell now (< 6hrs)",
            continue: true,
          },
          {
            answer: "More than 6hrs ago",
            display: "Fell earlier (>= 6hrs)",
            continue: true,
            updateCode: "17A03",
          },
          {
            answer: "Unknown",
            display: "Unk when pt fell",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            How <b>far</b> did **pronoun** <b>fall</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Ground Level",
            display: "Fell at ground level",
            continue: true,
          },
          {
            answer: "< 10ft/3m (1 story)",
            display: "Fell < 10ft/3m (1 story)",
            continue: true,
          },
          {
            answer: "Fall down (not on) stairs",
            display: "Fell down stairs",
            continue: true,
            updateCode: "17B03",
          },
          {
            answer: "Fall on (not down) stairs",
            display: "Fell on stairs",
            continue: true,
          },
          {
            answer: "LONG FALL - 10-29ft (3-9m)",
            display: "LONG FALL - 10-29ft (3-9m)",
            continue: true,
            updateCode: "17D06",
          },
          {
            answer: "EXTREME FALL - >= 30ft (>= 10m)",
            display: "EXTREME FALL - >= 30ft (>= 10m)",
            continue: true,
            updateCode: "17D01",
          },
          {
            answer: "Unknown",
            display: "Unk how far pt fell",
            continue: true,
            updateCode: "17B04",
          },
        ],
      },

      {
        text: (
          <p>
            What <b>caused</b> the fall?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Accidental",
            display: "Accidental fall",
            continue: true,
          },
          {
            answer: "Electrocution",
            display: "Electrocution caused fall",
            goto: 15,
          },
          {
            answer: "Dizziness",
            display: "Dizziness caused fall",
            continue: true,
          },
          {
            answer: "Jumped/Intentional",
            display: "Jumped/Intentional fall",
            continue: true,
            updateSubCode: "J",
          },
          {
            answer: "Unknown",
            display: "Unk reason for fall",
            continue: true,
            updateCode: "17B04",
          },
        ],
      },

      {
        text: (
          <p>
            Is there any <b>SERIOUS</b> <span className="text-4">bleeding</span>
            ?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No SERIOUS bleeding",
            continue: true,
          },
          {
            answer: "Yes",
            display: "SERIOUS bleeding",
            continue: true,
            updateCode: "17B02",
          },
          {
            answer: "Unknown",
            display: "Unk if SERIOUS bleeding",
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
            display: "Not responding nlly",
            continue: true,
            updateCode: "17D04",
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
            What <b>part</b> of the body was <b>injured?</b>
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Chest",
            display: "Injured chest",
            continue: true,
          },
          {
            answer: "Head",
            display: "Injured head",
            continue: true,
          },
          {
            answer: "Neck",
            display: "Injured neck",
            continue: true,
          },
          {
            answer: "POSSIBLY DANGEROUS (not Chest/Neck/Head):",
            display: "Inj to {input}",
            continue: true,
            input: true,
            updateCode: "17B01",
          },
          {
            answer: "Not Dangerous:",
            display: "Inj to {input}",
            continue: true,
            input: true,
            updateCode: "17A02",
          },
          {
            answer: "Unknown area",
            display: "Unk area of inj",
            continue: true,
            updateCode: "17B04",
          },
          {
            answer: "No injuries",
            display: "No injuries rptd",
            continue: true,
            updateCode: "17A04",
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** having any <b>difficulty</b> breathing?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.answer;
          if (!lastAnswer) return false;
          return (
            lastAnswer === "Injured chest" ||
            lastAnswer === "Injured neck" ||
            lastAnswer === "Injured head"
          );
        },
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
            updateCode: "17D05",
          },
          {
            answer: "Unknown",
            display: "Unk if diff breathing",
            continue: true,
          },
        ],
      },

      {
        text: <p>What is the extent of the injury?</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const injuryAnswer = answers?.[answers.length - 1]?.answer;
          return injuryAnswer.includes("Inj to");
        },
        answers: [
          {
            answer: "Deformity",
            display: "Inj has deformity",
            continue: true,
            updateCode: "17A01",
          },
          {
            answer: "No Deformity",
            display: "Inj has no deformity",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk extent of injury",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            <b>Where</b> is **pronoun** now?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "On the ground or floor",
            display: "Still on grd or floor",
            continue: true,
            updateSubCode: "G",
          },
          {
            answer: "Public place",
            display: "In public place",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if still on floor/grd",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Are there any <b>special concerns</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Accessibility concerns:",
            display: "Accessibility concerns - {input}",
            continue: true,
            input: true,
            updateSubCode: "A",
          },
          {
            answer: "Environmental problems:",
            display: "Environmental concerns - {input}",
            continue: true,
            input: true,
            updateSubCode: "E",
          },
          {
            answer: "No special concerns",
            display: "No special concerns",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk special concerns",
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
            code: "17A01",
            text: "Not Dangerous Body Area w/ Deformity",
            recResponse: 79,
            subCodes: [
              {
                code: "A",
                text: "Accessibility Concerns/Difficulty",
                recResponse: 79,
              },
              {
                code: "E",
                text: "Environmental Problems (Rain, Heat, Cold)",
                recResponse: 79,
              },
              {
                code: "G",
                text: "On the Ground or Floor",
                recResponse: 79,
              },
              {
                code: "J",
                text: "Jumper (Suicide Attempt)",
                recResponse: 80,
              },
              {
                code: "P",
                text: "Public Place (Street, Parking Garage, Market)",
                recResponse: 79,
              },
            ],
          },
          {
            code: "17A02",
            text: "Not Dangerous Body Area",
            recResponse: 79,
            subCodes: [
              {
                code: "A",
                text: "Accessibility Concerns/Difficulty",
                recResponse: 79,
              },
              {
                code: "E",
                text: "Environmental Problems (Rain, Heat, Cold)",
                recResponse: 79,
              },
              {
                code: "G",
                text: "On the Ground or Floor",
                recResponse: 79,
              },
              {
                code: "J",
                text: "Jumper (Suicide Attempt)",
                recResponse: 80,
              },
              {
                code: "P",
                text: "Public Place (Street, Parking Garage, Market)",
                recResponse: 79,
              },
            ],
          },
          {
            code: "17A03",
            text: "Non-Recent (>= 6hrs) Injs (w/o priority symptoms)",
            recResponse: 81,
            subCodes: [
              {
                code: "A",
                text: "Accessibility Concerns/Difficulty",
                recResponse: 79,
              },
              {
                code: "E",
                text: "Environmental Problems (Rain, Heat, Cold)",
                recResponse: 79,
              },
              {
                code: "G",
                text: "On the Ground or Floor",
                recResponse: 79,
              },
              {
                code: "J",
                text: "Jumper (Suicide Attempt)",
                recResponse: 80,
              },
              {
                code: "P",
                text: "Public Place (Street, Parking Garage, Market)",
                recResponse: 79,
              },
            ],
          },
          {
            code: "17A04",
            text: "Public Assist (No Injs & No Priority Symptoms)",
            recResponse: 82,
            subCodes: [
              {
                code: "A",
                text: "Accessibility Concerns/Difficulty",
                recResponse: 82,
              },
              {
                code: "E",
                text: "Environmental Problems (Rain, Heat, Cold)",
                recResponse: 82,
              },
              {
                code: "G",
                text: "On the Ground or Floor",
                recResponse: 82,
              },
              {
                code: "J",
                text: "Jumper (Suicide Attempt)",
                recResponse: 82,
              },
              {
                code: "P",
                text: "Public Place (Street, Parking Garage, Market)",
                recResponse: 82,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "17B00",
            text: "BLS Override (Bravo)",
            recResponse: 79,
            subCodes: [
              {
                code: "A",
                text: "Accessibility Concerns/Difficulty",
                recResponse: 79,
              },
              {
                code: "E",
                text: "Environmental Problems (Rain, Heat, Cold)",
                recResponse: 79,
              },
              {
                code: "G",
                text: "On the Ground or Floor",
                recResponse: 79,
              },
              {
                code: "J",
                text: "Jumper (Suicide Attempt)",
                recResponse: 80,
              },
              {
                code: "P",
                text: "Public Place (Street, Parking Garage, Market)",
                recResponse: 79,
              },
            ],
          },
          {
            code: "17B01",
            text: "Possibly Dangerous Body Area",
            recResponse: 79,
            subCodes: [
              {
                code: "A",
                text: "Accessibility Concerns/Difficulty",
                recResponse: 79,
              },
              {
                code: "E",
                text: "Environmental Problems (Rain, Heat, Cold)",
                recResponse: 79,
              },
              {
                code: "G",
                text: "On the Ground or Floor",
                recResponse: 79,
              },
              {
                code: "J",
                text: "Jumper (Suicide Attempt)",
                recResponse: 80,
              },
              {
                code: "P",
                text: "Public Place (Street, Parking Garage, Market)",
                recResponse: 79,
              },
            ],
          },
          {
            code: "17B02",
            text: "Serious Hemorrhage",
            recResponse: 79,
            subCodes: [
              {
                code: "A",
                text: "Accessibility Concerns/Difficulty",
                recResponse: 79,
              },
              {
                code: "E",
                text: "Environmental Problems (Rain, Heat, Cold)",
                recResponse: 79,
              },
              {
                code: "G",
                text: "On the Ground or Floor",
                recResponse: 79,
              },
              {
                code: "J",
                text: "Jumper (Suicide Attempt)",
                recResponse: 80,
              },
              {
                code: "P",
                text: "Public Place (Street, Parking Garage, Market)",
                recResponse: 79,
              },
            ],
          },
          {
            code: "17B03",
            text: "Down Stairs",
            recResponse: 79,
            subCodes: [
              {
                code: "A",
                text: "Accessibility Concerns/Difficulty",
                recResponse: 79,
              },
              {
                code: "E",
                text: "Environmental Problems (Rain, Heat, Cold)",
                recResponse: 79,
              },
              {
                code: "G",
                text: "On the Ground or Floor",
                recResponse: 79,
              },
              {
                code: "J",
                text: "Jumper (Suicide Attempt)",
                recResponse: 80,
              },
              {
                code: "P",
                text: "Public Place (Street, Parking Garage, Market)",
                recResponse: 79,
              },
            ],
          },
          {
            code: "17B04",
            text: "Unkn Status / Other Codes Not Applicable",
            recResponse: 79,
            defaultCode: true,
            subCodes: [
              {
                code: "A",
                text: "Accessibility Concerns/Difficulty",
                recResponse: 79,
              },
              {
                code: "E",
                text: "Environmental Problems (Rain, Heat, Cold)",
                recResponse: 79,
              },
              {
                code: "G",
                text: "On the Ground or Floor",
                recResponse: 79,
              },
              {
                code: "J",
                text: "Jumper (Suicide Attempt)",
                recResponse: 80,
              },
              {
                code: "P",
                text: "Public Place (Street, Parking Garage, Market)",
                recResponse: 79,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "17D00",
            text: "ALS Override (Delta)",
            recResponse: 83,
            subCodes: [
              {
                code: "A",
                text: "Accessibility Concerns/Difficulty",
                recResponse: 83,
              },
              {
                code: "E",
                text: "Environmental Problems (Rain, Heat, Cold)",
                recResponse: 83,
              },
              {
                code: "G",
                text: "On the Ground or Floor",
                recResponse: 83,
              },
              {
                code: "J",
                text: "Jumper (Suicide Attempt)",
                recResponse: 84,
              },
              {
                code: "P",
                text: "Public Place (Street, Parking Garage, Market)",
                recResponse: 83,
              },
            ],
          },
          {
            code: "17D01",
            text: "Extreme Fall (>= 30ft/10m)",
            recResponse: 85,
            subCodes: [
              {
                code: "A",
                text: "Accessibility Concerns/Difficulty",
                recResponse: 85,
              },
              {
                code: "E",
                text: "Environmental Problems (Rain, Heat, Cold)",
                recResponse: 85,
              },
              {
                code: "G",
                text: "On the Ground or Floor",
                recResponse: 85,
              },
              {
                code: "J",
                text: "Jumper (Suicide Attempt)",
                recResponse: 86,
              },
              {
                code: "P",
                text: "Public Place (Street, Parking Garage, Market)",
                recResponse: 85,
              },
            ],
          },
          {
            code: "17D02",
            text: "Arrest",
            recResponse: 87,
            notBreathing: true,
            subCodes: [
              {
                code: "A",
                text: "Accessibility Concerns/Difficulty",
                recResponse: 87,
              },
              {
                code: "E",
                text: "Environmental Problems (Rain, Heat, Cold)",
                recResponse: 87,
              },
              {
                code: "G",
                text: "On the Ground or Floor",
                recResponse: 87,
              },
              {
                code: "J",
                text: "Jumper (Suicide Attempt)",
                recResponse: 87,
              },
              {
                code: "P",
                text: "Public Place (Street, Parking Garage, Market)",
                recResponse: 87,
              },
            ],
          },
          {
            code: "17D03",
            text: "Unconscious",
            recResponse: 85,
            notConscious: true,
            subCodes: [
              {
                code: "A",
                text: "Accessibility Concerns/Difficulty",
                recResponse: 85,
              },
              {
                code: "E",
                text: "Environmental Problems (Rain, Heat, Cold)",
                recResponse: 85,
              },
              {
                code: "G",
                text: "On the Ground or Floor",
                recResponse: 85,
              },
              {
                code: "J",
                text: "Jumper (Suicide Attempt)",
                recResponse: 86,
              },
              {
                code: "P",
                text: "Public Place (Street, Parking Garage, Market)",
                recResponse: 85,
              },
            ],
          },
          {
            code: "17D04",
            text: "Not Alert",
            recResponse: 83,
            subCodes: [
              {
                code: "A",
                text: "Accessibility Concerns/Difficulty",
                recResponse: 83,
              },
              {
                code: "E",
                text: "Environmental Problems (Rain, Heat, Cold)",
                recResponse: 83,
              },
              {
                code: "G",
                text: "On the Ground or Floor",
                recResponse: 83,
              },
              {
                code: "J",
                text: "Jumper (Suicide Attempt)",
                recResponse: 84,
              },
              {
                code: "P",
                text: "Public Place (Street, Parking Garage, Market)",
                recResponse: 83,
              },
            ],
          },
          {
            code: "17D05",
            text: "Chest/Neck/Head Inj (w/ Diff Breathing)",
            recResponse: 83,
            subCodes: [
              {
                code: "A",
                text: "Accessibility Concerns/Difficulty",
                recResponse: 83,
              },
              {
                code: "E",
                text: "Environmental Problems (Rain, Heat, Cold)",
                recResponse: 83,
              },
              {
                code: "G",
                text: "On the Ground or Floor",
                recResponse: 83,
              },
              {
                code: "J",
                text: "Jumper (Suicide Attempt)",
                recResponse: 84,
              },
              {
                code: "P",
                text: "Public Place (Street, Parking Garage, Market)",
                recResponse: 83,
              },
            ],
          },
          {
            code: "17D06",
            text: "Long Fall",
            recResponse: 83,
            subCodes: [
              {
                code: "A",
                text: "Accessibility Concerns/Difficulty",
                recResponse: 83,
              },
              {
                code: "E",
                text: "Environmental Problems (Rain, Heat, Cold)",
                recResponse: 83,
              },
              {
                code: "G",
                text: "On the Ground or Floor",
                recResponse: 83,
              },
              {
                code: "J",
                text: "Jumper (Suicide Attempt)",
                recResponse: 84,
              },
              {
                code: "P",
                text: "Public Place (Street, Parking Garage, Market)",
                recResponse: 83,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 18,
    name: "Headache",
    shortName: "Headache",
    description: (
      <>
        <p>
          Headache calls can range from benign to life-threatening. Protocol 18 captures critical signs of stroke,
          hemorrhage, or neurologic compromise by assessing alertness, breathing, speech, pain onset, and motor function.
        </p>
        <p className="mt-2">
          A structured stroke evaluation—based on smile symmetry, arm strength, and speech—generates a FAST score and time-based
          subcode. These differentiate between possible TIA, evolving stroke, or severe neurovascular events, and help
          prioritize ALS vs. BLS response.
        </p>
        <p className="mt-2">
          Fire or EMS may be dispatched ALS when stroke is suspected, airway is compromised, or there's behavioral change,
          paralysis, or abnormal vitals. Proximity-based assessments allow guided testing even via bystanders, improving pre-arrival
          stroke recognition.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 88,
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
            display: "Not responding nlly",
            continue: true,
            updateCode: "18C01",
          },
          {
            answer: "Unknown",
            display: "Unk if responding nlly",
            continue: true,
            updateCode: "18B01",
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** <b>breathing</b> normally?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Breathing nlly",
            continue: true,
            updateCode: "18A01",
          },
          {
            answer: "No",
            display: "Not breathing nlly",
            continue: true,
            updateCode: "18C02",
          },
          {
            answer: "Unknown",
            display: "Unk if breathing nlly",
            continue: true,
            updateCode: "18B01",
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** able to <b>speak</b> or <b>talk</b> normally?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Able to speak nlly",
            continue: true,
          },
          {
            answer: "No",
            display: "Not able to speak nlly",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if able to speak nlly",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Did the pain onset <b>suddenly</b> or gradually?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Suddenly",
            display: "Sudden onset of pn",
            continue: true,
            updateCode: "18C04",
          },
          {
            answer: "Gradually",
            display: "Gradual onset of pn",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk onset of pn",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>Does **pronoun** have any numbness on one side or paralysis</p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No numbness or paralysis",
            continue: true,
          },
          {
            answer: "Numbness (on one side)",
            display: "Numbness on one side",
            continue: true,
            updateCode: "18C05",
          },
          {
            answer: "Paralysis (on one side)",
            display: "Paralysis on one side",
            continue: true,
            updateCode: "18C06",
          },
          {
            answer: "Both Numbness and Paralysis",
            display: "Numbness and Paralysis",
            continue: true,
            updateCode: "18C06",
          },
          {
            answer: "Unknown",
            display: "Unk if pt has numbness or paralysis",
            continue: true,
          },
        ],
      },

      {
        text: <p>Has the patient's behavior changed in the last 3 hours?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No change in behavior",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Change in behavior (<= 3hrs)",
            continue: true,
            updateCode: "18C07",
          },
          {
            answer: "Unknown",
            display: "Unk if change in behavior",
            continue: true,
          },
        ],
      },

      // Symptom Start - 6
      {
        text: <p>When did these symptoms start?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Less than 4.5 hours ago (< 4.5hrs):",
            display: "Symptoms started {input}",
            continue: true,
            input: true,
            updateSubCode: "L",
          },
          {
            answer: "More than 4.5 hours ago (> 4.5hrs):",
            display: "Symptoms started {input}",
            continue: true,
            input: true,
            updateSubCode: "G",
          },
          {
            answer: "Unknown",
            display: "Unk when symptoms started",
            continue: true,
            updateSubCode: "U",
          },
        ],
      },

      {
        text: (
          <p>
            Say: 'I am going to have you complete a quick test before the medics
            show up ok?'
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const firstAnswer = answers?.[0]?.answer;
          const secondAnswer = answers?.[1]?.answer;
          const thirdAnswer = answers?.[2]?.answer;
          const fourthAnswer = answers?.[3]?.answer;
          const fifthAnswer = answers?.[4]?.answer;
          const sixthAnswer = answers?.[5]?.answer;
          if (
            !firstAnswer ||
            !secondAnswer ||
            !thirdAnswer ||
            !fourthAnswer ||
            !fifthAnswer ||
            !sixthAnswer
          )
            return false;
          if (
            firstAnswer !== "Responding nlly" ||
            secondAnswer !== "Breathing nlly" ||
            thirdAnswer !== "Able to speak nlly" ||
            fourthAnswer !== "Gradual onset of pn" ||
            fifthAnswer !== "No numbness or paralysis" ||
            sixthAnswer !== "No change in behavior"
          )
            return true;
          return false;
        },
        omitQuestion: true,
        answers: [
          {
            answer: "Ready",
            display: "Starting test...",
            continue: true,
          },
          {
            answer: "Refused to do test",
            display: "Refused to do test",
            end: true,
          },
          {
            answer: "Skip",
            display: "Skip test",
            end: true,
          },
        ],
      },

      {
        text: <p>Say "Can you have the patient smile"</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const answer = answers?.find(
            (a) => a.answer === "Starting test..."
          )?.answer;
          return answer === "Starting test...";
        },
        omitQuestion: true,
        answers: [
          {
            answer: "Instructions given",
            display: "Smile instructions given",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Say: "Was the smile equal on both sides of the patient's mouth?"
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const answer = answers?.find(
            (a) => a.answer === "Smile instructions given"
          )?.answer;
          return answer === "Smile instructions given";
        },
        omitQuestion: true,
        answers: [
          {
            answer: "Normal Smile",
            display: "1: 0",
            continue: true,
          },
          {
            answer: "Slight difference in smile (possible difference)",
            display: "1: 1",
            continue: true,
          },
          {
            answer:
              "Only one side of mouth or face shows a smile (obvious difference)",
            display: "1: 2",
            continue: true,
          },
          {
            answer: "Cannot complete request at all",
            display: "1: 2",
            continue: true,
          },
        ],
      },

      {
        text: <p>Say: "Have the patient raise both arms above their head"</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const answer = answers?.find(
            (a) => a.answer === "Starting test..."
          )?.answer;
          return answer === "Starting test...";
        },
        omitQuestion: true,
        answers: [
          {
            answer: "Instructions given",
            display: "Raise arms instructions given",
            continue: true,
          },
        ],
      },

      {
        text: <p>What was **pronoun** able to do?</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const answer = answers?.find(
            (a) => a.answer === "Raise arms instructions given"
          )?.answer;
          return answer === "Raise arms instructions given";
        },
        omitQuestion: true,
        answers: [
          {
            answer: "Both arms raised equally",
            display: "2: 0",
            continue: true,
          },
          {
            answer: "One arm raised higher than the other",
            display: "2: 1",
            continue: true,
          },
          {
            answer: "Only one arm raised",
            display: "2: 2",
            continue: true,
          },
          {
            answer: "Cannot complete request at all",
            display: "2: 2",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>Say: "Ask the patient to say 'The early bird catches the worm'"</p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const answer = answers?.find(
            (a) => a.answer === "Starting test..."
          )?.answer;
          return answer === "Starting test...";
        },
        omitQuestion: true,
        answers: [
          {
            answer: "Instructions given",
            display: "Speech instructions given",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>Was **pronoun** able to say it correctly and understandably</p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const answer = answers?.find(
            (a) => a.answer === "Speech instructions given"
          )?.answer;
          return answer === "Speech instructions given";
        },
        omitQuestion: true,
        answers: [
          {
            answer: "Said correctly",
            display: "3: 0",
            continue: true,
          },
          {
            answer: "Slurred speech",
            display: "3: 1",
            continue: true,
          },
          {
            answer: "Garbled or not understandable speech",
            display: "3: 2",
            continue: true,
          },
          {
            answer: "Cannot complete request at all",
            display: "3: 0",
            continue: true,
          },
        ],
      },

      {
        text: <p>Calculate Score</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const answer = answers?.find(
            (a) => a.answer === "Starting test..."
          )?.answer;
          return answer === "Starting test...";
        },
        omitQuestion: true,
        answers: [
          {
            answer: "Calculate Score",
            display: "Stroke test score calculated",
            end: true,
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const smileAnswer = answers?.find((a) =>
                a.answer.includes("1: ")
              )?.answer;
              const armsAnswer = answers?.find((a) =>
                a.answer.includes("2: ")
              )?.answer;
              const speechAnswer = answers?.find((a) =>
                a.answer.includes("3: ")
              )?.answer;
              const symptomStart = answers?.find(
                (a) => a.question === "When did these symptoms start?"
              )?.defultAnswer;
              const smileScore = parseInt(smileAnswer.split(": ")[1]);
              const armsScore = parseInt(armsAnswer.split(": ")[1]);
              const speechScore = parseInt(speechAnswer.split(": ")[1]);
              const totalScore = smileScore + armsScore + speechScore;
              if (totalScore === 0) {
                if (symptomStart === "Less than 4.5 hours ago (< 4.5hrs):") {
                  return { subCode: "X" };
                } else if (
                  symptomStart === "More than 4.5 hours ago (> 4.5hrs):"
                ) {
                  return { subCode: "Y" };
                } else if (symptomStart === "Unknown") {
                  return { subCode: "Z" };
                }
              } else if (totalScore > 0 && totalScore <= 2) {
                if (symptomStart === "Less than 4.5 hours ago (< 4.5hrs):") {
                  return { subCode: "C" };
                } else if (
                  symptomStart === "More than 4.5 hours ago (> 4.5hrs):"
                ) {
                  return { subCode: "D" };
                } else if (symptomStart === "Unknown") {
                  return { subCode: "E" };
                }
              } else if (totalScore > 2 && totalScore <= 4) {
                if (symptomStart === "Less than 4.5 hours ago (< 4.5hrs):") {
                  return { subCode: "F" };
                } else if (
                  symptomStart === "More than 4.5 hours ago (> 4.5hrs):"
                ) {
                  return { subCode: "H" };
                } else if (symptomStart === "Unknown") {
                  return { subCode: "I" };
                }
              } else if (totalScore > 4) {
                if (symptomStart === "Less than 4.5 hours ago (< 4.5hrs):") {
                  return { subCode: "J" };
                } else if (
                  symptomStart === "More than 4.5 hours ago (> 4.5hrs):"
                ) {
                  return { subCode: "K" };
                } else if (symptomStart === "Unknown") {
                  return { subCode: "M" };
                }
              }
              return undefined;
            },
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "A",
        determinants: [
          {
            code: "18A01",
            text: "Breathing Normally",
            recResponse: 88,
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "18B00",
            text: "BLS Override (Bravo)",
            recResponse: 89,
          },
          {
            code: "18B01",
            text: "Unkn Status / Other Codes Not Applicable",
            defaultCode: true,
            recResponse: 89,
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "18C00",
            text: "ALS Override (Charlie)",
            recResponse: 90,
            subCodes: [
              {
                code: "C",
                text: "Partial Evidence (< 4.5hrs)",
                recResponse: 90,
              },
              {
                code: "D",
                text: "Partial Evidence (> 4.5hrs)",
                recResponse: 90,
              },
              {
                code: "E",
                text: "Partial Evidence (Unk Time Frame)",
                recResponse: 90,
              },
              {
                code: "F",
                text: "Strong Evidence (< 4.5hrs)",
                recResponse: 90,
              },
              {
                code: "G",
                text: "> 4.5hrs since symptoms started",
                recResponse: 90,
              },
              {
                code: "H",
                text: "Strong Evidence (> 4.5hrs)",
                recResponse: 90,
              },
              {
                code: "I",
                text: "Strong Evidence (Unkn Time Frame)",
                recResponse: 90,
              },
              {
                code: "J",
                text: "Clear Evidence (< 4.5hrs)",
                recResponse: 91,
              },
              {
                code: "K",
                text: "Clear Evidence (> 4.5hrs)",
                recResponse: 91,
              },
              {
                code: "L",
                text: "< 4.5hrs since symptoms started",
                recResponse: 90,
              },
              {
                code: "M",
                text: "Clear Evidence (Unk Time Frame)",
                recResponse: 91,
              },
              {
                code: "U",
                text: "Unkn When Symptoms Started",
                recResponse: 90,
              },
              {
                code: "X",
                text: "No test evidence (< 4.5hrs)",
                recResponse: 90,
              },
              {
                code: "Y",
                text: "No test evidence (> 4.5hrs)",
                recResponse: 90,
              },
              {
                code: "Z",
                text: "No test evidence (Unk Time Frame)",
                recResponse: 90,
              },
            ],
          },
          {
            code: "18C01",
            text: "Not Alert",
            recResponse: 92,
            subCodes: [
              {
                code: "C",
                text: "Partial Evidence (< 4.5hrs)",
                recResponse: 92,
              },
              {
                code: "D",
                text: "Partial Evidence (> 4.5hrs)",
                recResponse: 92,
              },
              {
                code: "E",
                text: "Partial Evidence (Unk Time Frame)",
                recResponse: 92,
              },
              {
                code: "F",
                text: "Strong Evidence (< 4.5hrs)",
                recResponse: 92,
              },
              {
                code: "G",
                text: "> 4.5hrs since symptoms started",
                recResponse: 92,
              },
              {
                code: "H",
                text: "Strong Evidence (> 4.5hrs)",
                recResponse: 92,
              },
              {
                code: "I",
                text: "Strong Evidence (Unkn Time Frame)",
                recResponse: 92,
              },
              {
                code: "J",
                text: "Clear Evidence (< 4.5hrs)",
                recResponse: 91,
              },
              {
                code: "K",
                text: "Clear Evidence (> 4.5hrs)",
                recResponse: 91,
              },
              {
                code: "L",
                text: "< 4.5hrs since symptoms started",
                recResponse: 92,
              },
              {
                code: "M",
                text: "Clear Evidence (Unk Time Frame)",
                recResponse: 91,
              },
              {
                code: "U",
                text: "Unkn When Symptoms Started",
                recResponse: 92,
              },
              {
                code: "X",
                text: "No test evidence (< 4.5hrs)",
                recResponse: 92,
              },
              {
                code: "Y",
                text: "No test evidence (> 4.5hrs)",
                recResponse: 92,
              },
              {
                code: "Z",
                text: "No test evidence (Unk Time Frame)",
                recResponse: 92,
              },
            ],
          },
          {
            code: "18C02",
            text: "Abnormal Breathing",
            recResponse: 93,
            subCodes: [
              {
                code: "C",
                text: "Partial Evidence (< 4.5hrs)",
                recResponse: 93,
              },
              {
                code: "D",
                text: "Partial Evidence (> 4.5hrs)",
                recResponse: 93,
              },
              {
                code: "E",
                text: "Partial Evidence (Unk Time Frame)",
                recResponse: 93,
              },
              {
                code: "F",
                text: "Strong Evidence (< 4.5hrs)",
                recResponse: 93,
              },
              {
                code: "G",
                text: "> 4.5hrs since symptoms started",
                recResponse: 93,
              },
              {
                code: "H",
                text: "Strong Evidence (> 4.5hrs)",
                recResponse: 93,
              },
              {
                code: "I",
                text: "Strong Evidence (Unkn Time Frame)",
                recResponse: 93,
              },
              {
                code: "J",
                text: "Clear Evidence (< 4.5hrs)",
                recResponse: 91,
              },
              {
                code: "K",
                text: "Clear Evidence (> 4.5hrs)",
                recResponse: 91,
              },
              {
                code: "L",
                text: "< 4.5hrs since symptoms started",
                recResponse: 93,
              },
              {
                code: "M",
                text: "Clear Evidence (Unk Time Frame)",
                recResponse: 91,
              },
              {
                code: "U",
                text: "Unkn When Symptoms Started",
                recResponse: 93,
              },
              {
                code: "X",
                text: "No test evidence (< 4.5hrs)",
                recResponse: 93,
              },
              {
                code: "Y",
                text: "No test evidence (> 4.5hrs)",
                recResponse: 93,
              },
              {
                code: "Z",
                text: "No test evidence (Unk Time Frame)",
                recResponse: 93,
              },
            ],
          },
          {
            code: "18C03",
            text: "Speech Problems",
            recResponse: 89,
            subCodes: [
              {
                code: "C",
                text: "Partial Evidence (< 4.5hrs)",
                recResponse: 89,
              },
              {
                code: "D",
                text: "Partial Evidence (> 4.5hrs)",
                recResponse: 89,
              },
              {
                code: "E",
                text: "Partial Evidence (Unk Time Frame)",
                recResponse: 89,
              },
              {
                code: "F",
                text: "Strong Evidence (< 4.5hrs)",
                recResponse: 89,
              },
              {
                code: "G",
                text: "> 4.5hrs since symptoms started",
                recResponse: 89,
              },
              {
                code: "H",
                text: "Strong Evidence (> 4.5hrs)",
                recResponse: 89,
              },
              {
                code: "I",
                text: "Strong Evidence (Unkn Time Frame)",
                recResponse: 89,
              },
              {
                code: "J",
                text: "Clear Evidence (< 4.5hrs)",
                recResponse: 91,
              },
              {
                code: "K",
                text: "Clear Evidence (> 4.5hrs)",
                recResponse: 91,
              },
              {
                code: "L",
                text: "< 4.5hrs since symptoms started",
                recResponse: 89,
              },
              {
                code: "M",
                text: "Clear Evidence (Unk Time Frame)",
                recResponse: 91,
              },
              {
                code: "U",
                text: "Unkn When Symptoms Started",
                recResponse: 89,
              },
              {
                code: "X",
                text: "No test evidence (< 4.5hrs)",
                recResponse: 89,
              },
              {
                code: "Y",
                text: "No test evidence (> 4.5hrs)",
                recResponse: 89,
              },
              {
                code: "Z",
                text: "No test evidence (Unk Time Frame)",
                recResponse: 89,
              },
            ],
          },
          {
            code: "18C04",
            text: "Sudden Onset of Severe Pain",
            recResponse: 89,
            subCodes: [
              {
                code: "C",
                text: "Partial Evidence (< 4.5hrs)",
                recResponse: 89,
              },
              {
                code: "D",
                text: "Partial Evidence (> 4.5hrs)",
                recResponse: 89,
              },
              {
                code: "E",
                text: "Partial Evidence (Unk Time Frame)",
                recResponse: 89,
              },
              {
                code: "F",
                text: "Strong Evidence (< 4.5hrs)",
                recResponse: 89,
              },
              {
                code: "G",
                text: "> 4.5hrs since symptoms started",
                recResponse: 89,
              },
              {
                code: "H",
                text: "Strong Evidence (> 4.5hrs)",
                recResponse: 89,
              },
              {
                code: "I",
                text: "Strong Evidence (Unkn Time Frame)",
                recResponse: 89,
              },
              {
                code: "J",
                text: "Clear Evidence (< 4.5hrs)",
                recResponse: 91,
              },
              {
                code: "K",
                text: "Clear Evidence (> 4.5hrs)",
                recResponse: 91,
              },
              {
                code: "L",
                text: "< 4.5hrs since symptoms started",
                recResponse: 89,
              },
              {
                code: "M",
                text: "Clear Evidence (Unk Time Frame)",
                recResponse: 91,
              },
              {
                code: "U",
                text: "Unkn When Symptoms Started",
                recResponse: 89,
              },
              {
                code: "X",
                text: "No test evidence (< 4.5hrs)",
                recResponse: 89,
              },
              {
                code: "Y",
                text: "No test evidence (> 4.5hrs)",
                recResponse: 89,
              },
              {
                code: "Z",
                text: "No test evidence (Unk Time Frame)",
                recResponse: 89,
              },
            ],
          },
          {
            code: "18C05",
            text: "Numbness",
            recResponse: 89,
            subCodes: [
              {
                code: "C",
                text: "Partial Evidence (< 4.5hrs)",
                recResponse: 89,
              },
              {
                code: "D",
                text: "Partial Evidence (> 4.5hrs)",
                recResponse: 89,
              },
              {
                code: "E",
                text: "Partial Evidence (Unk Time Frame)",
                recResponse: 89,
              },
              {
                code: "F",
                text: "Strong Evidence (< 4.5hrs)",
                recResponse: 89,
              },
              {
                code: "G",
                text: "> 4.5hrs since symptoms started",
                recResponse: 89,
              },
              {
                code: "H",
                text: "Strong Evidence (> 4.5hrs)",
                recResponse: 89,
              },
              {
                code: "I",
                text: "Strong Evidence (Unkn Time Frame)",
                recResponse: 89,
              },
              {
                code: "J",
                text: "Clear Evidence (< 4.5hrs)",
                recResponse: 91,
              },
              {
                code: "K",
                text: "Clear Evidence (> 4.5hrs)",
                recResponse: 91,
              },
              {
                code: "L",
                text: "< 4.5hrs since symptoms started",
                recResponse: 89,
              },
              {
                code: "M",
                text: "Clear Evidence (Unk Time Frame)",
                recResponse: 91,
              },
              {
                code: "U",
                text: "Unkn When Symptoms Started",
                recResponse: 89,
              },
              {
                code: "X",
                text: "No test evidence (< 4.5hrs)",
                recResponse: 89,
              },
              {
                code: "Y",
                text: "No test evidence (> 4.5hrs)",
                recResponse: 89,
              },
              {
                code: "Z",
                text: "No test evidence (Unk Time Frame)",
                recResponse: 89,
              },
            ],
          },
          {
            code: "18C06",
            text: "Paralysis",
            recResponse: 90,
            subCodes: [
              {
                code: "C",
                text: "Partial Evidence (< 4.5hrs)",
                recResponse: 90,
              },
              {
                code: "D",
                text: "Partial Evidence (> 4.5hrs)",
                recResponse: 90,
              },
              {
                code: "E",
                text: "Partial Evidence (Unk Time Frame)",
                recResponse: 90,
              },
              {
                code: "F",
                text: "Strong Evidence (< 4.5hrs)",
                recResponse: 90,
              },
              {
                code: "G",
                text: "> 4.5hrs since symptoms started",
                recResponse: 90,
              },
              {
                code: "H",
                text: "Strong Evidence (> 4.5hrs)",
                recResponse: 90,
              },
              {
                code: "I",
                text: "Strong Evidence (Unkn Time Frame)",
                recResponse: 90,
              },
              {
                code: "J",
                text: "Clear Evidence (< 4.5hrs)",
                recResponse: 91,
              },
              {
                code: "K",
                text: "Clear Evidence (> 4.5hrs)",
                recResponse: 91,
              },
              {
                code: "L",
                text: "< 4.5hrs since symptoms started",
                recResponse: 90,
              },
              {
                code: "M",
                text: "Clear Evidence (Unk Time Frame)",
                recResponse: 91,
              },
              {
                code: "U",
                text: "Unkn When Symptoms Started",
                recResponse: 90,
              },
              {
                code: "X",
                text: "No test evidence (< 4.5hrs)",
                recResponse: 90,
              },
              {
                code: "Y",
                text: "No test evidence (> 4.5hrs)",
                recResponse: 90,
              },
              {
                code: "Z",
                text: "No test evidence (Unk Time Frame)",
                recResponse: 90,
              },
            ],
          },
          {
            code: "18C07",
            text: "Change in Behavior (<= 3hrs)",
            recResponse: 92,
            subCodes: [
              {
                code: "C",
                text: "Partial Evidence (< 4.5hrs)",
                recResponse: 92,
              },
              {
                code: "D",
                text: "Partial Evidence (> 4.5hrs)",
                recResponse: 92,
              },
              {
                code: "E",
                text: "Partial Evidence (Unk Time Frame)",
                recResponse: 92,
              },
              {
                code: "F",
                text: "Strong Evidence (< 4.5hrs)",
                recResponse: 92,
              },
              {
                code: "G",
                text: "> 4.5hrs since symptoms started",
                recResponse: 92,
              },
              {
                code: "H",
                text: "Strong Evidence (> 4.5hrs)",
                recResponse: 92,
              },
              {
                code: "I",
                text: "Strong Evidence (Unkn Time Frame)",
                recResponse: 92,
              },
              {
                code: "J",
                text: "Clear Evidence (< 4.5hrs)",
                recResponse: 91,
              },
              {
                code: "K",
                text: "Clear Evidence (> 4.5hrs)",
                recResponse: 91,
              },
              {
                code: "L",
                text: "< 4.5hrs since symptoms started",
                recResponse: 92,
              },
              {
                code: "M",
                text: "Clear Evidence (Unk Time Frame)",
                recResponse: 91,
              },
              {
                code: "U",
                text: "Unkn When Symptoms Started",
                recResponse: 92,
              },
              {
                code: "X",
                text: "No test evidence (< 4.5hrs)",
                recResponse: 92,
              },
              {
                code: "Y",
                text: "No test evidence (> 4.5hrs)",
                recResponse: 92,
              },
              {
                code: "Z",
                text: "No test evidence (Unk Time Frame)",
                recResponse: 92,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 19,
    name: "Heart Problems / A.I.C.D.",
    shortName: "Heart Problem/AICD",
    description: (
      <>
        <p>
          This protocol addresses a broad range of cardiac-related complaints, from chest discomfort to AICD (Automated Implantable
          Cardioverter Defibrillator) activity. It screens for unstable vitals, ischemic symptoms, and high-risk cardiac history.
        </p>
        <p className="mt-2">
          Determinants prioritize abnormal breathing, altered mental status, recent AICD firing, or stimulant use (e.g., cocaine)
          for ALS response. Chest pain is age-differentiated, recognizing younger vs. older cardiac risk profiles.
        </p>
        <p className="mt-2">
          ALS is typically dispatched for patients with AICDs, hemodynamic instability, or priority symptoms like color change,
          clammy skin, or dyspnea. BLS may suffice if symptoms are mild and vitals stable without concerning history.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 94,
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
            display: "Not responding nlly",
            continue: true,
            updateCode: "19D01",
          },
          {
            answer: "Unknown",
            display: "Unk if responding nlly",
            continue: true,
          },
        ],
      },

      {
        text: <p>Is **pronoun** breathing normally?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Breathing nlly",
            continue: true,
          },
          {
            answer: "No",
            display: "Not breathing nlly",
            continue: true,
            updateCode: "19C02",
          },
          {
            answer: "Unknown",
            display: "Unk if breathing nlly",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** having difficulty <b>speaking</b> between{" "}
            <b>breaths</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.answer;
          return lastAnswer === "Not breathing nlly";
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
            updateCode: "19D02",
          },
          {
            answer: "Unknown",
            display: "Unk if diff speaking btwn breaths",
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
            continue: true,
            updateCode: "19D03",
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
            continue: true,
            updateCode: "19D04",
          },
          {
            answer: "Unknown",
            display: "Unk if clammy",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Does **pronoun** have <b>history</b> of <b>heart problems</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Heart Attack",
            display: "Heart Attack hx",
            continue: true,
            updateCode: "19C04",
          },
          {
            answer: "AICD",
            display: "Pt has an AICD",
            continue: true,
            updateCode: "19C04",
          },
          {
            answer: "Heart Failure",
            display: "Heart Failure hx",
            continue: true,
            updateCode: "19C04",
          },
          {
            answer: "Yes (Other/Mult):",
            display: "Cardiac hx of {input}",
            continue: true,
            input: true,
            updateCode: "19C04",
          },
          {
            answer: "No",
            display: "No cardiac hx",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if cardiac hx",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Did the AICD fire (go off) in the last <b>30 minutes</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.answer;
          return (
            lastAnswer === "Pt has an AICD" ||
            lastAnswer.includes("AICD") ||
            lastAnswer.includes("aicd")
          );
        },
        answers: [
          {
            answer: "No",
            display: "AICD did not fire",
            continue: true,
          },
          {
            answer: "Yes",
            display: "AICD fired < 30 min ago",
            continue: true,
            updateCode: "19C01",
          },
          {
            answer: "Unknown",
            display: "Unk if AICD fired",
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
            display: "No chest pain",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Pt has chest pain",
            continue: true,
            dependency: (_patient?: IPatientData) => {
              if (!_patient) return undefined;
              const { age } = _patient;
              if (age < 35) {
                return { code: "19A02" };
              } else if (age >= 35) {
                return { code: "19C03" };
              } else {
                return { code: "19C07" };
              }
            },
          },
          {
            answer: "Unknown",
            display: "Unk if pt has chest pain",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Did **pronoun** take any <b>drugs</b> or <b>medications</b> in the{" "}
            <b>past 12 hours</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No drugs/meds taken (< 12hrs)",
            continue: true,
          },
          {
            answer: "Yes:",
            display: "Drugs/meds taken (< 12hrs): {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Yes - COCAINE",
            display: "Cocaine taken (< 12hrs)",
            continue: true,
            updateCode: "19C05",
          },
          {
            answer: "Unknown",
            display: "Unk if drugs/meds taken (< 12hrs)",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Are you able to <b>check</b> their <b>pulse</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "< 50 bpm",
            display: "Pulse < 50 bpm",
            continue: true,
            updateCode: "19C06",
          },
          {
            answer: "50 - 130 bpm",
            display: "Pulse 50 - 130 bpm",
            continue: true,
            updateCode: "19A01",
          },
          {
            answer: "> 130 bpm",
            display: "Pulse > 130 bpm",
            continue: true,
            updateCode: "19C06",
          },
          {
            answer: "Unable to complete",
            display: "Unable to check pulse",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk pulse rate",
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
            code: "19A01",
            text: "Heart Reate >= 50bpm & < 130bpm (w/o Priority Symptoms)",
            recResponse: 94,
          },
          {
            code: "19A02",
            text: "Chest Pain/Discomfort (< 35) (w/o Priority Symptoms)",
            recResponse: 95,
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "19C00",
            text: "ALS Override (Charlie)",
            recResponse: 96,
          },
          {
            code: "19C01",
            text: "Firing of A.I.C.D.",
            recResponse: 96,
          },
          {
            code: "19C02",
            text: "Abnormal Breathing",
            recResponse: 96,
          },
          {
            code: "19C03",
            text: "Chest Pain/Discomfort (>= 35)",
            recResponse: 97,
          },
          {
            code: "19C04",
            text: "Cardiac Hx",
            recResponse: 96,
          },
          {
            code: "19C05",
            text: "Cocaine",
            recResponse: 51,
          },
          {
            code: "19C06",
            text: "Heart Rate < 50bpm or >= 130bpm (w/o Priority Symptoms)",
            recResponse: 96,
          },
          {
            code: "19C07",
            text: "Unkn Status / Other Codes Not Applicable",
            recResponse: 96,
            defaultCode: true,
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "19D00",
            text: "ALS Override (Delta)",
            recResponse: 98,
          },
          {
            code: "19D01",
            text: "Not Alert",
            recResponse: 96,
          },
          {
            code: "19D02",
            text: "Diff Speaking Between Breaths",
            recResponse: 96,
          },
          {
            code: "19D03",
            text: "Changing Color",
            recResponse: 96,
          },
          {
            code: "19D04",
            text: "Clammy or Cold Sweats",
            recResponse: 96,
          },
          {
            code: "19D05",
            text: "Just Resuscitated &/or Defibrillated (External)",
            recResponse: 98,
          },
        ],
      },
    ],
  },
  {
    protocol: 20,
    name: "Heat/Cold Exposure",
    shortName: "Heat/Cold Exposure",
    description: (
      <>
        <p>
          This protocol addresses environmental emergencies related to both heat and cold exposure, including heat exhaustion,
          heat stroke, hypothermia, and frostbite. It evaluates alertness, skin temperature, and cardiac history to assess the risk.
        </p>
        <p className="mt-2">
          Patients who are not alert, have abnormal skin color, or a cardiac history are considered for ALS responses. Differentiation
          by skin temperature helps determine whether the condition is heat- or cold-related.
        </p>
        <p className="mt-2">
          Bravo-level responses are typically dispatched when symptoms are unclear or moderate. Multiple victims or severe symptoms
          escalate the response to Delta or specialized resources.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 99,
    questions: [
      {
        text: (
          <p>
            Does **pronoun** have <b>chest pain</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData) => {
          if (!_patient) return false;
          const { age } = _patient;
          return age >= 35;
        },
        answers: [
          {
            answer: "No",
            display: "No chest pain",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Pt has chest pain",
            goto: 10,
          },
          {
            answer: "Unknown",
            display: "Unk if pt has chest pain",
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
            updateCode: "20A01",
          },
          {
            answer: "No",
            display: "Not responding nlly",
            continue: true,
            updateCode: "20D01",
          },
          {
            answer: "Unknown",
            display: "Unk if responding nlly",
            continue: true,
            updateCode: "20B02",
          },
        ],
      },

      {
        text: <p>Does **pronoun** have a history of heart problems?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No cardiac hx",
            continue: true,
          },
          {
            answer: "Heart Attack",
            display: "Heart Attack hx",
            continue: true,
            updateCode: "20C01",
          },
          {
            answer: "Angina",
            display: "Angina hx",
            continue: true,
            updateCode: "20C01",
          },
          {
            answer: "Other:",
            display: "Cardiac hx of {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk cardiac hx",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Does **pronoun** had a <b>change</b> in <b>skin color</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No change in skin color",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Change in skin color",
            continue: true,
            updateCode: "20B01",
          },
          {
            answer: "Unknown",
            display: "Unk change in skin color",
            continue: true,
          },
        ],
      },

      {
        text: <p>What is their skin temperature?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Colder than normal",
            display: "Colder skin temp than nll",
            continue: true,
            updateSubCode: "C",
          },
          {
            answer: "Hotter than normal",
            display: "Hotter skin temp than nll",
            continue: true,
            updateSubCode: "H",
          },
          {
            answer: "Normal",
            display: "Normal skin temperature",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk skin temperature",
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
            code: "20A01",
            text: "Alert",
            recResponse: 99,
            subCodes: [
              {
                code: "C",
                text: "Cold Exposure",
                recResponse: 99,
              },
              {
                code: "H",
                text: "Heat Exposure",
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
            code: "20B00",
            text: "ALS Override (Bravo)",
            recResponse: 101,
            subCodes: [
              {
                code: "C",
                text: "Cold Exposure",
                recResponse: 101,
              },
              {
                code: "H",
                text: "Heat Exposure",
                recResponse: 102,
              },
            ],
          },
          {
            code: "20B01",
            text: "Change in Skin Color",
            recResponse: 101,
            subCodes: [
              {
                code: "C",
                text: "Cold Exposure",
                recResponse: 101,
              },
              {
                code: "H",
                text: "Heat Exposure",
                recResponse: 102,
              },
            ],
          },
          {
            code: "20B02",
            text: "Unkn Status / Other Codes Not Applicable",
            recResponse: 101,
            defaultCode: true,
            subCodes: [
              {
                code: "C",
                text: "Cold Exposure",
                recResponse: 101,
              },
              {
                code: "H",
                text: "Heat Exposure",
                recResponse: 102,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "20C00",
            text: "ALS Override (Charlie)",
            recResponse: 103,
            subCodes: [
              {
                code: "C",
                text: "Cold Exposure",
                recResponse: 103,
              },
              {
                code: "H",
                text: "Heat Exposure",
                recResponse: 104,
              },
            ],
          },
          {
            code: "20C01",
            text: "Heart Attack or Angina Hx",
            recResponse: 101,
            subCodes: [
              {
                code: "C",
                text: "Cold Exposure",
                recResponse: 101,
              },
              {
                code: "H",
                text: "Heat Exposure",
                recResponse: 102,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "20D00",
            text: "ALS Override (Delta)",
            recResponse: 103,
            subCodes: [
              {
                code: "C",
                text: "Cold Exposure",
                recResponse: 103,
              },
              {
                code: "H",
                text: "Heat Exposure",
                recResponse: 104,
              },
            ],
          },
          {
            code: "20D01",
            text: "Not Alert",
            recResponse: 103,
            subCodes: [
              {
                code: "C",
                text: "Cold Exposure",
                recResponse: 103,
              },
              {
                code: "H",
                text: "Heat Exposure",
                recResponse: 104,
              },
            ],
          },
          {
            code: "20D02",
            text: "Mult Victims (w/ Priority Symptoms)",
            recResponse: 105,
            multVictim: true,
            subCodes: [
              {
                code: "C",
                text: "Cold Exposure",
                recResponse: 105,
              },
              {
                code: "H",
                text: "Heat Exposure",
                recResponse: 106,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 21,
    name: "Hemorrhage/Lacerations",
    shortName: "Hemorrhage/Laceration",
    description: (
      <>
        <p>
          This protocol evaluates both traumatic and non-traumatic bleeding incidents, ranging from minor cuts to life-threatening hemorrhages.
          It also accounts for bleeding from medical devices or body openings, such as dialysis fistulas or internal bleeding.
        </p>
        <p className="mt-2">
          Key factors include bleeding severity, patient consciousness, and complicating factors like anticoagulant use or pregnancy.
          Subtypes distinguish between traumatic (T) and medical (M) causes, influencing response type and resource allocation.
        </p>
        <p className="mt-2">
          ALS responses are prioritized for patients with significant hemorrhage, altered mental status, or compromised breathing. Determinant codes escalate accordingly.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 107,
    questions: [
      {
        text: <p>What caused the bleeding?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Medical",
            display: "Medical cause",
            continue: true,
            updateSubCode: "M",
          },
          {
            answer: "Trauma (Non-Recent)",
            display: "Traumatic cause",
            continue: true,
            updateSubCode: "T",
          },
          {
            answer: "Recent Trauma",
            display: "Traumatic cause (recent)",
            goto: 30,
          },
          {
            answer: "Unknown",
            display: "Unk cause",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            <b>Where</b> is **pronoun** bleeding from?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Dangerous Body Area:",
            display: "Bleeding from {input}",
            continue: true,
            input: true,
            updateCode: "21B01",
          },
          {
            answer: "Possible Dangerous Body Area:",
            display: "Bleeding from {input}",
            continue: true,
            input: true,
            updateCode: "21B01",
          },
          {
            answer: "Non-Dangerous Body Area:",
            display: "Bleeding from {input}",
            continue: true,
            input: true,
            updateCode: "21A01",
          },
          {
            answer: "Tubes",
            display: "Bleeding from tubes",
            continue: true,
            updateCode: "21C01",
          },
          {
            answer: "Dialysis AV Fistula",
            display: "Bleeding from dialysis AV fistula",
            continue: true,
            updateCode: "21C02",
          },
          {
            answer: "Vericose Veins",
            display: "Bleeding from vericose veins",
            continue: true,
            updateCode: "21C03",
          },
          {
            answer: "Vaginal/Rectal/Urinary",
            display: "Bleeding from genitourinary area",
            continue: true,
            updateCode: "21A01",
          },
          {
            answer: "AMPUTATION",
            display: "Amputation",
            goto: 30,
          },
          {
            answer: "Unknown",
            display: "Unk where bleeding from",
            continue: true,
          },
        ],
      },

      {
        text: <p>Is she pregnant?</p>,
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const lastAnswer = answers?.[answers.length - 1]?.answer;
          return (
            lastAnswer === "Bleeding from genitourinary area" &&
            _patient?.gender === "Female" &&
            _patient?.age >= 12 &&
            _patient?.age <= 50
          );
        },
        answers: [
          {
            answer: "No",
            display: "Pt is not pregnant",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Pt is pregnant",
            goto: 24,
          },
          {
            answer: "Unknown",
            display: "Unk if pt is pregnant",
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
            display: "Not responding nlly",
            continue: true,
            updateCode: "21D03",
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
            Is **pronoun** <b>breathing normally</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Breathing nlly",
            continue: true,
          },
          {
            answer: "No",
            display: "Not breathing nlly",
            continue: true,
            updateCode: "21D05",
          },
          {
            answer: "Unknown",
            display: "Unk if breathing nlly",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is the blood <b className="text-red-400">squirting</b> out?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const firstAnswer = answers?.[0]?.answer;
          return firstAnswer === "Traumatic cause";
        },
        answers: [
          {
            answer: "No",
            display: "Blood not squirting out",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Blood is squirting out",
            continue: true,
            updateCode: "21D04",
          },
          {
            answer: "Unknown",
            display: "Unk if blood is squirting out",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is the bleeding <b className="text-red-400">SERIOUS</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const firstAnswer = answers?.[0]?.answer;
          return firstAnswer === "Medical cause";
        },
        answers: [
          {
            answer: "No",
            display: "Not SERIOUS bleeding",
            continue: true,
          },
          {
            answer: "Yes",
            display: "SERIOUS bleeding",
            continue: true,
            updateCode: "21B02",
          },
          {
            answer: "Unknown",
            display: "Unk if SERIOUS bleeding",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Does **pronoun** have a <b>bleeding disorder</b> or is **pronoun**
            on <b>blood thinners</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No bleeding disorder or blood thinners",
            continue: true,
          },
          {
            answer: "Bleeding Disorder",
            display: "Pt has bleeding disorder",
            continue: true,
            updateCode: "21B03",
          },
          {
            answer: "Blood Thinners",
            display: "Pt is on blood thinners",
            continue: true,
            updateCode: "21B04",
          },
          {
            answer: "Unknown",
            display: "Unk if bleeding disorder or blood thinners",
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
            code: "21A01",
            text: "Not Dangerous Hemorrhage",
            recResponse: 107,
            subCodes: [
              {
                code: "M",
                text: "Medical",
                recResponse: 108,
              },
              {
                code: "T",
                text: "Trauma",
                recResponse: 109,
              },
            ],
          },
          {
            code: "21A02",
            text: "Minor Hemorrhage",
            recResponse: 110,
            subCodes: [
              {
                code: "M",
                text: "Medical",
                recResponse: 111,
              },
              {
                code: "T",
                text: "Trauma",
                recResponse: 112,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "21B00",
            text: "ALS Override (Bravo)",
            recResponse: 107,
            subCodes: [
              {
                code: "M",
                text: "Medical",
                recResponse: 108,
              },
              {
                code: "T",
                text: "Trauma",
                recResponse: 109,
              },
            ],
          },
          {
            code: "21B01",
            text: "Possibly Dangerous Hemorrhage",
            recResponse: 107,
            subCodes: [
              {
                code: "M",
                text: "Medical",
                recResponse: 108,
              },
              {
                code: "T",
                text: "Trauma",
                recResponse: 109,
              },
            ],
          },
          {
            code: "21B02",
            text: "Serious Hemorrhage",
            recResponse: 107,
            subCodes: [
              {
                code: "M",
                text: "Medical",
                recResponse: 108,
              },
              {
                code: "T",
                text: "Trauma",
                recResponse: 109,
              },
            ],
          },
          {
            code: "21B03",
            text: "Bleeding Disorder",
            recResponse: 107,
            subCodes: [
              {
                code: "M",
                text: "Medical",
                recResponse: 108,
              },
              {
                code: "T",
                text: "Trauma",
                recResponse: 109,
              },
            ],
          },
          {
            code: "21B04",
            text: "Blood Thinners",
            recResponse: 107,
            subCodes: [
              {
                code: "M",
                text: "Medical",
                recResponse: 108,
              },
              {
                code: "T",
                text: "Trauma",
                recResponse: 109,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "21C00",
            text: "ALS Override (Charlie)",
            recResponse: 113,
            subCodes: [
              {
                code: "M",
                text: "Medical",
                recResponse: 114,
              },
              {
                code: "T",
                text: "Trauma",
                recResponse: 115,
              },
            ],
          },
          {
            code: "21C01",
            text: "Hemorrhage Through Tubes",
            recResponse: 107,
            subCodes: [
              {
                code: "M",
                text: "Medical",
                recResponse: 108,
              },
              {
                code: "T",
                text: "Trauma",
                recResponse: 109,
              },
            ],
          },
          {
            code: "21C02",
            text: "Hemorrhage of Dialysis AV Fistula",
            recResponse: 107,
            subCodes: [
              {
                code: "M",
                text: "Medical",
                recResponse: 108,
              },
              {
                code: "T",
                text: "Trauma",
                recResponse: 109,
              },
            ],
          },
          {
            code: "21C03",
            text: "Hemorrhage from Varicose Veins",
            recResponse: 107,
            subCodes: [
              {
                code: "M",
                text: "Medical",
                recResponse: 108,
              },
              {
                code: "T",
                text: "Trauma",
                recResponse: 109,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "21D00",
            text: "ALS Override (Delta)",
            recResponse: 113,
            subCodes: [
              {
                code: "M",
                text: "Medical",
                recResponse: 114,
              },
              {
                code: "T",
                text: "Trauma",
                recResponse: 115,
              },
            ],
          },
          {
            code: "21D01",
            text: "Arrest",
            recResponse: 116,
            notBreathing: true,
            subCodes: [
              {
                code: "M",
                text: "Medical",
                recResponse: 117,
              },
              {
                code: "T",
                text: "Trauma",
                recResponse: 118,
              },
            ],
          },
          {
            code: "21D02",
            text: "Unconscious",
            recResponse: 119,
            notConscious: true,
            subCodes: [
              {
                code: "M",
                text: "Medical",
                recResponse: 120,
              },
              {
                code: "T",
                text: "Trauma",
                recResponse: 121,
              },
            ],
          },
          {
            code: "21D03",
            text: "Not Alert",
            recResponse: 113,
            subCodes: [
              {
                code: "M",
                text: "Medical",
                recResponse: 114,
              },
              {
                code: "T",
                text: "Trauma",
                recResponse: 115,
              },
            ],
          },
          {
            code: "21D04",
            text: "Dangerous Hemorrhage",
            recResponse: 113,
            subCodes: [
              {
                code: "M",
                text: "Medical",
                recResponse: 114,
              },
              {
                code: "T",
                text: "Trauma",
                recResponse: 115,
              },
            ],
          },
          {
            code: "21D05",
            text: "Abnormal Breathing",
            recResponse: 113,
            subCodes: [
              {
                code: "M",
                text: "Medical",
                recResponse: 114,
              },
              {
                code: "T",
                text: "Trauma",
                recResponse: 115,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 22,
    name: "Inaccessible Incident / Other Entrapments (Non-Traffic)",
    shortName: "Inaccess/Entrapment",
    description: (
      <>
        <p>
          This protocol addresses incidents involving patients who are currently or were recently trapped in hazardous environments, such as machinery, collapsed structures, trenches, or confined spaces.
          It prioritizes scene safety, entrapment type, and rescue accessibility.
        </p>
        <p className="mt-2">
          Factors including entrapment severity (e.g., whole-body vs. peripheral), presence of injuries, and difficulty in reaching the patient guide determinant selection.
          SubCodes account for above/below-ground location and multiple victim scenarios.
        </p>
        <p className="mt-2">
          Higher-level Delta determinants are triggered for active extrications, structural failures, or complex rescue environments requiring specialized teams.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: 3 },
      { name: "Fire", priority: true },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 122,
    questions: [
      {
        text: (
          <p>
            Does this incident involve the any{" "}
            <b className="text-green-400">hazardous materials</b>?
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
            answer: "Yes",
            display: "Hazardous materials involved",
            goto: 8,
          },
          {
            answer: "Unknown",
            display: "Unk if hazmats are involved",
            continue: true,
            updateCode: "22B03",
          },
        ],
      },

      {
        text: <p>What is **pronoun** trapped in/by?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Mechanical Equipment",
            display: "Trapped in mechanical equipment",
            continue: true,
          },
          {
            answer: "Confined Space",
            display: "Trapped in confined space",
            continue: true,
          },
          {
            answer: "Building Collapse",
            display: "Trapped in building collapse",
            continue: true,
          },
          {
            answer: "Trench Collapse",
            display: "Trapped in trench collapse",
            continue: true,
          },
          {
            answer: "Mudslide/Avalanche",
            display: "Trapped in mudslide/avalanche",
            continue: true,
          },
          {
            answer: "Object:",
            display: "Trapped in/by {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Not trapped now",
            display: "Not trapped now",
            continue: true,
          },
          {
            answer: "Other:",
            display: "Trapped in/by {input}",
            continue: true,
            updateCode: "22B03",
          },
          {
            answer: "Unknown",
            display: "Unk what pt is trapped in/by",
            continue: true,
            updateCode: "22B03",
          },
        ],
      },

      {
        text: (
          <p>
            Are there any (obvious) <b>injuries</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const answer = answers?.find(
            (a) => a.defaultQuestion === "What is **pronoun** trapped in/by?"
          )?.defaultAnswer;
          return answer === "Not trapped now";
        },
        answers: [
          {
            answer: "No",
            display: "No obvious injs",
            continue: true,
            updateCode: "22A01",
          },
          {
            answer: "Yes",
            display: "Obvious injs",
            goto: 30,
          },
          {
            answer: "Unknown",
            display: "Unk if there are injs",
            continue: true,
            updateCode: "22B01",
          },
        ],
      },

      {
        text: (
          <p>
            What <b>part</b> of the body is <b>trapped</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData, answers?: any[]) => {
          const answer = answers?.find(
            (a) => a.defaultQuestion === "What is **pronoun** trapped in/by?"
          )?.defaultAnswer;
          return answer !== "Not trapped now";
        },
        answers: [
          {
            answer: "Peripheral (Extremities) Entrapment Only",
            display: "Peripheral entrapment only",
            continue: true,
            updateCode: "22B02",
          },
          {
            answer: "Whole Body Entrapment",
            display: "Whole body is trapped",
            continue: true,
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const answer = answers?.find(
                (a) =>
                  a.defaultQuestion === "What is **pronoun** trapped in/by?"
              )?.defaultAnswer;
              if (answer === "Mechanical Equipment" || answer === "Object:") {
                return { code: "22D01" };
              } else if (answer === "Trench Collapse") {
                return { code: "22D02" };
              } else if (answer === "Structure Collapse") {
                return { code: "22D03" };
              } else if (answer === "Confined Space") {
                return { code: "22D04" };
              } else if (answer === "Mudslide/Avalanche") {
                return { code: "22D06" };
              } else {
                return { code: "22B03" };
              }
            },
          },
          {
            answer: "Location:",
            display: "{input} is trapped",
            continue: true,
            input: true,
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const answer = answers?.find(
                (a) =>
                  a.defaultQuestion === "What is **pronoun** trapped in/by?"
              )?.defaultAnswer;
              if (answer === "Mechanical Equipment" || answer === "Object:") {
                return { code: "22D01" };
              } else if (answer === "Trench Collapse") {
                return { code: "22D02" };
              } else if (answer === "Structure Collapse") {
                return { code: "22D03" };
              } else if (answer === "Confined Space") {
                return { code: "22D04" };
              } else if (answer === "Mudslide/Avalanche") {
                return { code: "22D06" };
              } else {
                return { code: "22B03" };
              }
            },
          },
          {
            answer: "Unknown",
            display: "Unk what part of body is trapped",
            continue: true,
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const answer = answers?.find(
                (a) =>
                  a.defaultQuestion === "What is **pronoun** trapped in/by?"
              )?.defaultAnswer;
              if (answer === "Mechanical Equipment" || answer === "Object:") {
                return { code: "22D01" };
              } else if (answer === "Trench Collapse") {
                return { code: "22D02" };
              } else if (answer === "Structure Collapse") {
                return { code: "22D03" };
              } else if (answer === "Confined Space") {
                return { code: "22D04" };
              } else if (answer === "Mudslide/Avalanche") {
                return { code: "22D06" };
              } else {
                return { code: "22B03" };
              }
            },
          },
        ],
      },

      {
        text: (
          <p>
            Where <b>exactly</b> is **pronoun**
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "At Ground Level",
            display: "PT is at ground level",
            continue: true,
            dependency: (_patient?: IPatientData) => {
              if (!_patient) return undefined;
              const { count } = _patient;
              if (count > 1) return { subCode: "M" };
            },
          },
          {
            answer: "Above Ground:",
            display: "PT is above ground - {input}",
            continue: true,
            input: true,
            dependency: (_patient?: IPatientData) => {
              if (!_patient) return undefined;
              const { count } = _patient;
              if (count > 1) return { subCode: "X" };
              return { subCode: "A" };
            },
          },
          {
            answer: "Below Ground:",
            display: "PT is below ground - {input}",
            continue: true,
            input: true,
            dependency: (_patient?: IPatientData) => {
              if (!_patient) return undefined;
              const { count } = _patient;
              if (count > 1) return { subCode: "Y" };
              return { subCode: "B" };
            },
          },
          {
            answer: "Unknown",
            display: "Unk where pt is",
            continue: true,
            dependency: (_patient?: IPatientData) => {
              if (!_patient) return undefined;
              const { count } = _patient;
              if (count > 1) return { subCode: "M" };
            },
          },
        ],
      },

      {
        text: (
          <p>
            Will we have any <b>problems</b> easily reaching the patient?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No special concerns",
            continue: true,
          },
          {
            answer: "Yes:",
            display: "Special concerns - {input}",
            continue: true,
            input: true,
            updateCode: "22D05",
          },
          {
            answer: "Unknown",
            display: "Unk if there are special concerns",
            continue: true,
            updateCode: "22B03",
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "A",
        determinants: [
          {
            code: "22A01",
            text: "No Longer Trapped (No Injs)",
            recResponse: 122,
            subCodes: [
              {
                code: "A",
                text: "Above Ground (>=6ft/2m)",
                recResponse: 122,
              },
              {
                code: "B",
                text: "Below Ground (>=6ft/2m)",
                recResponse: 122,
              },
              {
                code: "M",
                text: "Mult Victims",
                recResponse: 122,
              },
              {
                code: "X",
                text: "Both Above Ground & Mult Victims",
                recResponse: 122,
              },
              {
                code: "Y",
                text: "Both Below Ground & Mult Victims",
                recResponse: 122,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "22B00",
            text: "BLS Override (Bravo)",
            recResponse: 123,
            subCodes: [
              {
                code: "A",
                text: "Above Ground (>=6ft/2m)",
                recResponse: 123,
              },
              {
                code: "B",
                text: "Below Ground (>=6ft/2m)",
                recResponse: 123,
              },
              {
                code: "M",
                text: "Mult Victims",
                recResponse: 123,
              },
              {
                code: "X",
                text: "Both Above Ground & Mult Victims",
                recResponse: 123,
              },
              {
                code: "Y",
                text: "Both Below Ground & Mult Victims",
                recResponse: 123,
              },
            ],
          },
          {
            code: "22B01",
            text: "No Longer Trapped (Unkn Injs)",
            recResponse: 124,
            subCodes: [
              {
                code: "A",
                text: "Above Ground (>=6ft/2m)",
                recResponse: 124,
              },
              {
                code: "B",
                text: "Below Ground (>=6ft/2m)",
                recResponse: 124,
              },
              {
                code: "M",
                text: "Mult Victims",
                recResponse: 124,
              },
              {
                code: "X",
                text: "Both Above Ground & Mult Victims",
                recResponse: 124,
              },
              {
                code: "Y",
                text: "Both Below Ground & Mult Victims",
                recResponse: 124,
              },
            ],
          },
          {
            code: "22B02",
            text: "Peripheral Entrapment Only",
            recResponse: 123,
            subCodes: [
              {
                code: "A",
                text: "Above Ground (>=6ft/2m)",
                recResponse: 123,
              },
              {
                code: "B",
                text: "Below Ground (>=6ft/2m)",
                recResponse: 123,
              },
              {
                code: "M",
                text: "Mult Victims",
                recResponse: 123,
              },
              {
                code: "X",
                text: "Both Above Ground & Mult Victims",
                recResponse: 123,
              },
              {
                code: "Y",
                text: "Both Below Ground & Mult Victims",
                recResponse: 123,
              },
            ],
          },
          {
            code: "22B03",
            text: "Unkn Status (Investigation) / Other Codes Not Applicable",
            recResponse: 123,
            defaultCode: true,
            subCodes: [
              {
                code: "A",
                text: "Above Ground (>=6ft/2m)",
                recResponse: 123,
              },
              {
                code: "B",
                text: "Below Ground (>=6ft/2m)",
                recResponse: 123,
              },
              {
                code: "M",
                text: "Mult Victims",
                recResponse: 123,
              },
              {
                code: "X",
                text: "Both Above Ground & Mult Victims",
                recResponse: 123,
              },
              {
                code: "Y",
                text: "Both Below Ground & Mult Victims",
                recResponse: 123,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "22D00",
            text: "ALS Override (Delta)",
            recResponse: 125,
            subCodes: [
              {
                code: "A",
                text: "Above Ground (>=6ft/2m)",
                recResponse: 125,
              },
              {
                code: "B",
                text: "Below Ground (>=6ft/2m)",
                recResponse: 125,
              },
              {
                code: "M",
                text: "Mult Victims",
                recResponse: 125,
              },
              {
                code: "X",
                text: "Both Above Ground & Mult Victims",
                recResponse: 125,
              },
              {
                code: "Y",
                text: "Both Below Ground & Mult Victims",
                recResponse: 125,
              },
            ],
          },
          {
            code: "22D01",
            text: "Mechanical/Machinery/Object Entrapment",
            recResponse: 123,
            subCodes: [
              {
                code: "A",
                text: "Above Ground (>=6ft/2m)",
                recResponse: 123,
              },
              {
                code: "B",
                text: "Below Ground (>=6ft/2m)",
                recResponse: 123,
              },
              {
                code: "M",
                text: "Mult Victims",
                recResponse: 123,
              },
              {
                code: "X",
                text: "Both Above Ground & Mult Victims",
                recResponse: 123,
              },
              {
                code: "Y",
                text: "Both Below Ground & Mult Victims",
                recResponse: 123,
              },
            ],
          },
          {
            code: "22D02",
            text: "Trench Collapse",
            recResponse: 126,
            subCodes: [
              {
                code: "A",
                text: "Above Ground (>=6ft/2m)",
                recResponse: 126,
              },
              {
                code: "B",
                text: "Below Ground (>=6ft/2m)",
                recResponse: 126,
              },
              {
                code: "M",
                text: "Mult Victims",
                recResponse: 126,
              },
              {
                code: "X",
                text: "Both Above Ground & Mult Victims",
                recResponse: 126,
              },
              {
                code: "Y",
                text: "Both Below Ground & Mult Victims",
                recResponse: 126,
              },
            ],
          },
          {
            code: "22D03",
            text: "Structure Collapse",
            recResponse: 127,
            subCodes: [
              {
                code: "A",
                text: "Above Ground (>=6ft/2m)",
                recResponse: 127,
              },
              {
                code: "B",
                text: "Below Ground (>=6ft/2m)",
                recResponse: 127,
              },
              {
                code: "M",
                text: "Mult Victims",
                recResponse: 127,
              },
              {
                code: "X",
                text: "Both Above Ground & Mult Victims",
                recResponse: 127,
              },
              {
                code: "Y",
                text: "Both Below Ground & Mult Victims",
                recResponse: 127,
              },
            ],
          },
          {
            code: "22D04",
            text: "Confined Space Entrapment",
            recResponse: 128,
            subCodes: [
              {
                code: "A",
                text: "Above Ground (>=6ft/2m)",
                recResponse: 128,
              },
              {
                code: "B",
                text: "Below Ground (>=6ft/2m)",
                recResponse: 128,
              },
              {
                code: "M",
                text: "Mult Victims",
                recResponse: 128,
              },
              {
                code: "X",
                text: "Both Above Ground & Mult Victims",
                recResponse: 128,
              },
              {
                code: "Y",
                text: "Both Below Ground & Mult Victims",
                recResponse: 128,
              },
            ],
          },
          {
            code: "22D05",
            text: "Inaccessible Terrain Situation",
            recResponse: 125,
            subCodes: [
              {
                code: "A",
                text: "Above Ground (>=6ft/2m)",
                recResponse: 125,
              },
              {
                code: "B",
                text: "Below Ground (>=6ft/2m)",
                recResponse: 125,
              },
              {
                code: "M",
                text: "Mult Victims",
                recResponse: 125,
              },
              {
                code: "X",
                text: "Both Above Ground & Mult Victims",
                recResponse: 125,
              },
              {
                code: "Y",
                text: "Both Below Ground & Mult Victims",
                recResponse: 125,
              },
            ],
          },
          {
            code: "22D06",
            text: "Mudslide/Avalanche",
            recResponse: 125,
            subCodes: [
              {
                code: "A",
                text: "Above Ground (>=6ft/2m)",
                recResponse: 125,
              },
              {
                code: "B",
                text: "Below Ground (>=6ft/2m)",
                recResponse: 125,
              },
              {
                code: "M",
                text: "Mult Victims",
                recResponse: 125,
              },
              {
                code: "X",
                text: "Both Above Ground & Mult Victims",
                recResponse: 125,
              },
              {
                code: "Y",
                text: "Both Below Ground & Mult Victims",
                recResponse: 125,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    protocol: 23,
    name: "Overdose/Poisoning (Ingestion)",
    shortName: "Overdose/Poisoning",
    description: (
      <>
        <p>
          This protocol handles cases involving actual or suspected overdoses and poisonings, including both accidental and intentional exposures.
          It supports rapid identification of priority symptoms such as altered consciousness, abnormal breathing, and cardiac arrest.
        </p>
        <p className="mt-2">
          Call-takers are prompted to identify specific substances, intent (e.g., accidental vs. intentional), and behavioral risks such as violence or presence of weapons.
          Special considerations are made for narcotics, especially fentanyl and carfentanil, due to responder safety concerns.
        </p>
        <p className="mt-2">
          Determinants escalate based on symptoms, known substances, and scene hazards, involving police where required for combative subjects or security risks.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: undefined },
    ],
    defaultPriority: 4,
    defaultPlan: 129,
    questions: [
      {
        text: (
          <p>
            <span className="text-blue-400">(Appropriate)</span> Was this{" "}
            <b>accidental</b> or <b>intentional</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Accidental",
            display: "Accidental overdose/poisoning",
            continue: true,
            updateSubCode: "A",
          },
          {
            answer: "Recreational",
            display: "Recreational overdose/poisoning",
            continue: true,
          },
          {
            answer: "Intentional",
            display: "Intentional overdose/poisoning",
            continue: true,
            updateSubCode: "I",
          },
          {
            answer: "Poison Control Referral",
            display: "Poison Control Referral",
            continue: true,
            updateCode: "23C08",
          },
          {
            answer: "Unknown",
            display: "Unk if accidental or intentional",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** <b>violent</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData) => {
          if (!_patient) return false;
          const { age, isConscious } = _patient;
          return age >= 8 && isConscious !== false;
        },
        answers: [
          {
            answer: "No",
            display: "Not violent",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Pt is violent",
            continue: true,
            updateSubCode: "V",
          },
          {
            answer: "Unknown",
            display: "Unk if pt is violent",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Does **pronoun** have or have access to <b>weapons</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient?: IPatientData) => {
          if (!_patient) return false;
          const { age, isConscious } = _patient;
          return age >= 8 && isConscious !== false;
        },
        answers: [
          {
            answer: "No",
            display: "No wpns",
            continue: true,
          },
          {
            answer: "Yes:",
            display: "Access to or has wpns - {input}",
            continue: true,
            updateSubCode: "W",
          },
          {
            answer: "Unknown",
            display: "Unk if pt has access to wpns",
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
        preRenderInstructions: (_patient?: IPatientData) => {
          if (!_patient) return false;
          const { isConscious } = _patient;
          return isConscious !== false;
        },
        answers: [
          {
            answer: "Yes",
            display: "Responding nlly",
            continue: true,
            updateCode: "23A01",
          },
          {
            answer: "No",
            display: "Not responding nlly",
            continue: true,
            updateCode: "23C01",
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
            Is **pronoun** <b>breathing normally</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Breathing nlly",
            continue: true,
          },
          {
            answer: "No",
            display: "Not breathing nlly",
            continue: true,
            updateCode: "23C02",
          },
          {
            answer: "Agonal/Innefective",
            display: "Agonal/ineffective breathing",
            end: true,
            updateCode: "23D01",
            override: true,
          },
          {
            answer: "NOT BREATHING AT ALL",
            display: "Not breathing at all",
            end: true,
            updateCode: "23E01",
          },
          {
            answer: "Unknown",
            display: "Unk if breathing nlly",
            continue: true,
          },
        ],
      },

      {
        text: <p>Is **pronoun** changing color at all?</p>,
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "Not changing color",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Pt is changing color",
            continue: true,
            updateCode: "23D03",
            override: true,
          },
          {
            answer: "Unknown",
            display: "Unk if pt is changing color",
            continue: true,
          },
        ],
      },

      {
        text: <p>What did **pronoun** take?</p>,
        questionType: "select",
        answers: [
          {
            answer: "Acid or Alkali",
            display: "Pt took acid or alkali",
            continue: true,
            updateCode: "23C06",
          },
          {
            answer: "Antidepressants",
            display: "Pt took antidepressants",
            continue: true,
            updateCode: "23C03",
          },
          {
            answer: "Cocaine/Methamphetamines",
            display: "Pt took cocaine/methamphetamines",
            continue: true,
            updateCode: "23C04",
          },
          {
            answer: "Fentanyl",
            display: "Pt took fentanyl",
            continue: true,
            updateCode: "23C05",
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const firstAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              const violentAnswer = answers?.find(
                (a) => a.defaultQuestion === "Is **pronoun** violent?"
              )?.defaultAnswer;
              const weaponsAnswer = answers?.find(
                (a) =>
                  a.defaultQuestion ===
                  "Does **pronoun** have or have access to weapons?"
              )?.defaultAnswer;
              if (violentAnswer === "Yes") {
                return { subCode: "Q" };
              } else if (weaponsAnswer === "Yes:") {
                return { subCode: "S" };
              } else if (firstAnswer === "Accidental") {
                return { subCode: "D" };
              } else if (firstAnswer === "Intentional") {
                return { subCode: "G" };
              } else {
                return { subCode: "F" };
              }
            },
          },
          {
            answer: "Carfentanil",
            display: "Pt took carfentanil",
            continue: true,
            dependency: (_patient?: IPatientData, answers?: any[]) => {
              const firstAnswer = answers?.[answers.length - 1]?.defaultAnswer;
              const violentAnswer = answers?.find(
                (a) => a.defaultQuestion === "Is **pronoun** violent?"
              )?.defaultAnswer;
              const weaponsAnswer = answers?.find(
                (a) =>
                  a.defaultQuestion ===
                  "Does **pronoun** have or have access to weapons?"
              )?.defaultAnswer;
              if (violentAnswer === "Yes") {
                return { subCode: "R" };
              } else if (weaponsAnswer === "Yes:") {
                return { subCode: "T" };
              } else if (firstAnswer === "Accidental") {
                return { subCode: "E" };
              } else if (firstAnswer === "Intentional") {
                return { subCode: "H" };
              } else {
                return { subCode: "C" };
              }
            },
            updateCode: "23C05",
          },
          {
            answer: "Narcotics",
            display: "Pt took narcotics",
            continue: true,
            updateCode: "23C05",
          },
          {
            answer: "Other:",
            display: "Pt took {input}",
            continue: true,
            input: true,
          },
          {
            answer: "Unknown",
            display: "Unk what pt took",
            continue: true,
            updateCode: "23C07",
          },
        ],
      },
    ],
    availableDeterminants: [
      {
        priority: "O",
        determinants: [
          {
            code: "23O01",
            text: "Poisoning (w/o Priority Symptoms)",
            recResponse: 138,
            subCodes: [
              {
                code: "A",
                text: "Accidental",
                recResponse: 138,
              },
              {
                code: "I",
                text: "Intentional",
                recResponse: 138,
              },
            ],
          },
        ],
      },
      {
        priority: "A",
        determinants: [
          {
            code: "23A01",
            text: "Alert",
            recResponse: 129,
            subCodes: [
              {
                code: "A",
                text: "Accidental",
                recResponse: 129,
              },
              {
                code: "C",
                text: "Carfentanil",
                recResponse: 129,
              },
              {
                code: "D",
                text: "Accidental (Fentanyl)",
                recResponse: 129,
              },
              {
                code: "E",
                text: "Accidental (Carfentanil)",
                recResponse: 129,
              },
              {
                code: "F",
                text: "Fentanyl",
                recResponse: 129,
              },
              {
                code: "G",
                text: "Intentional (Fentanyl)",
                recResponse: 130,
              },
              {
                code: "H",
                text: "Intentional (Carfentanil)",
                recResponse: 130,
              },
              {
                code: "I",
                text: "Intentional",
                recResponse: 130,
              },
              {
                code: "Q",
                text: "Violent or Combative (Fentanyl)",
                recResponse: 131,
              },
              {
                code: "R",
                text: "Violent or Combative (Carfentanil)",
                recResponse: 131,
              },
              {
                code: "S",
                text: "Weapons (Fentanyl)",
                recResponse: 131,
              },
              {
                code: "T",
                text: "Weapons (Carfentanil)",
                recResponse: 131,
              },
              {
                code: "V",
                text: "Violent or Combative",
                recResponse: 131,
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 131,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        determinants: [
          {
            code: "23B00",
            text: "BLS Override (Bravo)",
            recResponse: 129,
            subCodes: [
              {
                code: "A",
                text: "Accidental",
                recResponse: 129,
              },
              {
                code: "I",
                text: "Intentional",
                recResponse: 130,
              },
            ],
          },
          {
            code: "23B01",
            text: "Overdose (w/o Priority Symptoms)",
            recResponse: 129,
            subCodes: [
              {
                code: "A",
                text: "Accidental",
                recResponse: 129,
              },
              {
                code: "C",
                text: "Carfentanil",
                recResponse: 129,
              },
              {
                code: "D",
                text: "Accidental (Fentanyl)",
                recResponse: 129,
              },
              {
                code: "E",
                text: "Accidental (Carfentanil)",
                recResponse: 129,
              },
              {
                code: "F",
                text: "Fentanyl",
                recResponse: 129,
              },
              {
                code: "G",
                text: "Intentional (Fentanyl)",
                recResponse: 130,
              },
              {
                code: "H",
                text: "Intentional (Carfentanil)",
                recResponse: 130,
              },
              {
                code: "I",
                text: "Intentional",
                recResponse: 130,
              },
              {
                code: "Q",
                text: "Violent or Combative (Fentanyl)",
                recResponse: 131,
              },
              {
                code: "R",
                text: "Violent or Combative (Carfentanil)",
                recResponse: 131,
              },
              {
                code: "S",
                text: "Weapons (Fentanyl)",
                recResponse: 131,
              },
              {
                code: "T",
                text: "Weapons (Carfentanil)",
                recResponse: 131,
              },
              {
                code: "V",
                text: "Violent or Combative",
                recResponse: 131,
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 131,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        determinants: [
          {
            code: "23C00",
            text: "ALS Override (Charlie)",
            recResponse: 59,
            subCodes: [
              {
                code: "A",
                text: "Accidental",
                recResponse: 59,
              },
              {
                code: "C",
                text: "Carfentanil",
                recResponse: 59,
              },
              {
                code: "D",
                text: "Accidental (Fentanyl)",
                recResponse: 59,
              },
              {
                code: "E",
                text: "Accidental (Carfentanil)",
                recResponse: 59,
              },
              {
                code: "F",
                text: "Fentanyl",
                recResponse: 59,
              },
              {
                code: "G",
                text: "Intentional (Fentanyl)",
                recResponse: 51,
              },
              {
                code: "H",
                text: "Intentional (Carfentanil)",
                recResponse: 51,
              },
              {
                code: "I",
                text: "Intentional",
                recResponse: 51,
              },
              {
                code: "Q",
                text: "Violent or Combative (Fentanyl)",
                recResponse: 132,
              },
              {
                code: "R",
                text: "Violent or Combative (Carfentanil)",
                recResponse: 132,
              },
              {
                code: "S",
                text: "Weapons (Fentanyl)",
                recResponse: 132,
              },
              {
                code: "T",
                text: "Weapons (Carfentanil)",
                recResponse: 132,
              },
              {
                code: "V",
                text: "Violent or Combative",
                recResponse: 132,
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 132,
              },
            ],
          },
          {
            code: "23C01",
            text: "Not Alert",
            recResponse: 59,
            subCodes: [
              {
                code: "A",
                text: "Accidental",
                recResponse: 59,
              },
              {
                code: "C",
                text: "Carfentanil",
                recResponse: 59,
              },
              {
                code: "D",
                text: "Accidental (Fentanyl)",
                recResponse: 59,
              },
              {
                code: "E",
                text: "Accidental (Carfentanil)",
                recResponse: 59,
              },
              {
                code: "F",
                text: "Fentanyl",
                recResponse: 59,
              },
              {
                code: "G",
                text: "Intentional (Fentanyl)",
                recResponse: 51,
              },
              {
                code: "H",
                text: "Intentional (Carfentanil)",
                recResponse: 51,
              },
              {
                code: "I",
                text: "Intentional",
                recResponse: 51,
              },
              {
                code: "Q",
                text: "Violent or Combative (Fentanyl)",
                recResponse: 132,
              },
              {
                code: "R",
                text: "Violent or Combative (Carfentanil)",
                recResponse: 132,
              },
              {
                code: "S",
                text: "Weapons (Fentanyl)",
                recResponse: 132,
              },
              {
                code: "T",
                text: "Weapons (Carfentanil)",
                recResponse: 132,
              },
              {
                code: "V",
                text: "Violent or Combative",
                recResponse: 132,
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 132,
              },
            ],
          },
          {
            code: "23C02",
            text: "Abnormal Breathing",
            recResponse: 59,
            subCodes: [
              {
                code: "A",
                text: "Accidental",
                recResponse: 59,
              },
              {
                code: "C",
                text: "Carfentanil",
                recResponse: 59,
              },
              {
                code: "D",
                text: "Accidental (Fentanyl)",
                recResponse: 59,
              },
              {
                code: "E",
                text: "Accidental (Carfentanil)",
                recResponse: 59,
              },
              {
                code: "F",
                text: "Fentanyl",
                recResponse: 59,
              },
              {
                code: "G",
                text: "Intentional (Fentanyl)",
                recResponse: 51,
              },
              {
                code: "H",
                text: "Intentional (Carfentanil)",
                recResponse: 51,
              },
              {
                code: "I",
                text: "Intentional",
                recResponse: 51,
              },
              {
                code: "Q",
                text: "Violent or Combative (Fentanyl)",
                recResponse: 132,
              },
              {
                code: "R",
                text: "Violent or Combative (Carfentanil)",
                recResponse: 132,
              },
              {
                code: "S",
                text: "Weapons (Fentanyl)",
                recResponse: 132,
              },
              {
                code: "T",
                text: "Weapons (Carfentanil)",
                recResponse: 132,
              },
              {
                code: "V",
                text: "Violent or Combative",
                recResponse: 132,
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 132,
              },
            ],
          },
          {
            code: "23C03",
            text: "Antidepressants (Tricyclic)",
            recResponse: 59,
            subCodes: [
              {
                code: "A",
                text: "Accidental",
                recResponse: 59,
              },
              {
                code: "I",
                text: "Intentional",
                recResponse: 51,
              },
              {
                code: "V",
                text: "Violent or Combative",
                recResponse: 132,
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 132,
              },
            ],
          },
          {
            code: "23C04",
            text: "Cocaine, Methamphetamine (or Derivative)",
            recResponse: 59,
            subCodes: [
              {
                code: "A",
                text: "Accidental",
                recResponse: 59,
              },
              {
                code: "I",
                text: "Intentional",
                recResponse: 51,
              },
              {
                code: "V",
                text: "Violent or Combative",
                recResponse: 132,
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 132,
              },
            ],
          },
          {
            code: "23C05",
            text: "Narcotics (Heroin, Morphine, Methadone, Oxycontin)",
            recResponse: 59,
            subCodes: [
              {
                code: "A",
                text: "Accidental",
                recResponse: 59,
              },
              {
                code: "C",
                text: "Carfentanil",
                recResponse: 59,
              },
              {
                code: "D",
                text: "Accidental (Fentanyl)",
                recResponse: 59,
              },
              {
                code: "E",
                text: "Accidental (Carfentanil)",
                recResponse: 59,
              },
              {
                code: "F",
                text: "Fentanyl",
                recResponse: 59,
              },
              {
                code: "G",
                text: "Intentional (Fentanyl)",
                recResponse: 51,
              },
              {
                code: "H",
                text: "Intentional (Carfentanil)",
                recResponse: 51,
              },
              {
                code: "I",
                text: "Intentional",
                recResponse: 51,
              },
              {
                code: "Q",
                text: "Violent or Combative (Fentanyl)",
                recResponse: 132,
              },
              {
                code: "R",
                text: "Violent or Combative (Carfentanil)",
                recResponse: 132,
              },
              {
                code: "S",
                text: "Weapons (Fentanyl)",
                recResponse: 132,
              },
              {
                code: "T",
                text: "Weapons (Carfentanil)",
                recResponse: 132,
              },
              {
                code: "V",
                text: "Violent or Combative",
                recResponse: 132,
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 132,
              },
            ],
          },
          {
            code: "23C06",
            text: "Acid or Alkali (Lye)",
            recResponse: 59,
            subCodes: [
              {
                code: "A",
                text: "Accidental",
                recResponse: 59,
              },
              {
                code: "I",
                text: "Intentional",
                recResponse: 51,
              },
              {
                code: "V",
                text: "Violent or Combative",
                recResponse: 132,
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 132,
              },
            ],
          },
          {
            code: "23C07",
            text: "Unkn Status / Other Codes Not Applicable",
            recResponse: 129,
            defaultCode: true,
            subCodes: [
              {
                code: "A",
                text: "Accidental",
                recResponse: 129,
              },
              {
                code: "C",
                text: "Carfentanil",
                recResponse: 129,
              },
              {
                code: "D",
                text: "Accidental (Fentanyl)",
                recResponse: 129,
              },
              {
                code: "E",
                text: "Accidental (Carfentanil)",
                recResponse: 129,
              },
              {
                code: "F",
                text: "Fentanyl",
                recResponse: 129,
              },
              {
                code: "G",
                text: "Intentional (Fentanyl)",
                recResponse: 130,
              },
              {
                code: "H",
                text: "Intentional (Carfentanil)",
                recResponse: 130,
              },
              {
                code: "I",
                text: "Intentional",
                recResponse: 130,
              },
              {
                code: "Q",
                text: "Violent or Combative (Fentanyl)",
                recResponse: 131,
              },
              {
                code: "R",
                text: "Violent or Combative (Carfentanil)",
                recResponse: 131,
              },
              {
                code: "S",
                text: "Weapons (Fentanyl)",
                recResponse: 131,
              },
              {
                code: "T",
                text: "Weapons (Carfentanil)",
                recResponse: 131,
              },
              {
                code: "V",
                text: "Violent or Combative",
                recResponse: 131,
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 131,
              },
            ],
          },
          {
            code: "23C08",
            text: "Poison Control Request for Response",
            recResponse: 129,
            subCodes: [
              {
                code: "C",
                text: "Carfentanil",
                recResponse: 129,
              },
              {
                code: "F",
                text: "Fentanyl",
                recResponse: 129,
              },
              {
                code: "Q",
                text: "Violent or Combative (Fentanyl)",
                recResponse: 131,
              },
              {
                code: "R",
                text: "Violent or Combative (Carfentanil)",
                recResponse: 131,
              },
              {
                code: "V",
                text: "Violent or Combative",
                recResponse: 131,
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 131,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        determinants: [
          {
            code: "23D00",
            text: "ALS Override (Delta)",
            recResponse: 133,
            subCodes: [
              {
                code: "A",
                text: "Accidental",
                recResponse: 133,
              },
              {
                code: "C",
                text: "Carfentanil",
                recResponse: 133,
              },
              {
                code: "D",
                text: "Accidental (Fentanyl)",
                recResponse: 133,
              },
              {
                code: "E",
                text: "Accidental (Carfentanil)",
                recResponse: 133,
              },
              {
                code: "F",
                text: "Fentanyl",
                recResponse: 133,
              },
              {
                code: "G",
                text: "Intentional (Fentanyl)",
                recResponse: 134,
              },
              {
                code: "H",
                text: "Intentional (Carfentanil)",
                recResponse: 134,
              },
              {
                code: "I",
                text: "Intentional",
                recResponse: 134,
              },
              {
                code: "Q",
                text: "Violent or Combative (Fentanyl)",
                recResponse: 135,
              },
              {
                code: "R",
                text: "Violent or Combative (Carfentanil)",
                recResponse: 135,
              },
              {
                code: "S",
                text: "Weapons (Fentanyl)",
                recResponse: 135,
              },
              {
                code: "T",
                text: "Weapons (Carfentanil)",
                recResponse: 135,
              },
              {
                code: "V",
                text: "Violent or Combative",
                recResponse: 135,
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 135,
              },
            ],
          },
          {
            code: "23D01",
            text: "Arrest",
            recResponse: 136,
            subCodes: [
              {
                code: "A",
                text: "Accidental",
                recResponse: 136,
              },
              {
                code: "C",
                text: "Carfentanil",
                recResponse: 136,
              },
              {
                code: "D",
                text: "Accidental (Fentanyl)",
                recResponse: 136,
              },
              {
                code: "E",
                text: "Accidental (Carfentanil)",
                recResponse: 136,
              },
              {
                code: "F",
                text: "Fentanyl",
                recResponse: 136,
              },
              {
                code: "G",
                text: "Intentional (Fentanyl)",
                recResponse: 136,
              },
              {
                code: "H",
                text: "Intentional (Carfentanil)",
                recResponse: 136,
              },
              {
                code: "I",
                text: "Intentional",
                recResponse: 137,
              },
            ],
          },
          {
            code: "23D02",
            text: "Unconscious",
            recResponse: 59,
            notConscious: true,
            subCodes: [
              {
                code: "A",
                text: "Accidental",
                recResponse: 59,
              },
              {
                code: "C",
                text: "Carfentanil",
                recResponse: 59,
              },
              {
                code: "D",
                text: "Accidental (Fentanyl)",
                recResponse: 59,
              },
              {
                code: "E",
                text: "Accidental (Carfentanil)",
                recResponse: 59,
              },
              {
                code: "F",
                text: "Fentanyl",
                recResponse: 59,
              },
              {
                code: "G",
                text: "Intentional (Fentanyl)",
                recResponse: 51,
              },
              {
                code: "H",
                text: "Intentional (Carfentanil)",
                recResponse: 51,
              },
              {
                code: "I",
                text: "Intentional",
                recResponse: 51,
              },
            ],
          },
          {
            code: "23D03",
            text: "Changing Color",
            recResponse: 59,
            subCodes: [
              {
                code: "A",
                text: "Accidental",
                recResponse: 59,
              },
              {
                code: "C",
                text: "Carfentanil",
                recResponse: 59,
              },
              {
                code: "D",
                text: "Accidental (Fentanyl)",
                recResponse: 59,
              },
              {
                code: "E",
                text: "Accidental (Carfentanil)",
                recResponse: 59,
              },
              {
                code: "F",
                text: "Fentanyl",
                recResponse: 59,
              },
              {
                code: "G",
                text: "Intentional (Fentanyl)",
                recResponse: 51,
              },
              {
                code: "H",
                text: "Intentional (Carfentanil)",
                recResponse: 51,
              },
              {
                code: "I",
                text: "Intentional",
                recResponse: 51,
              },
              {
                code: "Q",
                text: "Violent or Combative (Fentanyl)",
                recResponse: 132,
              },
              {
                code: "R",
                text: "Violent or Combative (Carfentanil)",
                recResponse: 132,
              },
              {
                code: "S",
                text: "Weapons (Fentanyl)",
                recResponse: 132,
              },
              {
                code: "T",
                text: "Weapons (Carfentanil)",
                recResponse: 132,
              },
              {
                code: "V",
                text: "Violent or Combative",
                recResponse: 132,
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 132,
              },
            ],
          },
        ],
      },
      {
        priority: "E",
        determinants: [
          {
            code: "23E00",
            text: "ALS Override (Echo)",
            recResponse: 133,
            subCodes: [
              {
                code: "A",
                text: "Accidental",
                recResponse: 133,
              },
              {
                code: "C",
                text: "Carfentanil",
                recResponse: 133,
              },
              {
                code: "D",
                text: "Accidental (Fentanyl)",
                recResponse: 133,
              },
              {
                code: "E",
                text: "Accidental (Carfentanil)",
                recResponse: 133,
              },
              {
                code: "F",
                text: "Fentanyl",
                recResponse: 133,
              },
              {
                code: "G",
                text: "Intentional (Fentanyl)",
                recResponse: 134,
              },
              {
                code: "H",
                text: "Intentional (Carfentanil)",
                recResponse: 134,
              },
              {
                code: "I",
                text: "Intentional",
                recResponse: 134,
              },
              {
                code: "Q",
                text: "Violent or Combative (Fentanyl)",
                recResponse: 135,
              },
              {
                code: "R",
                text: "Violent or Combative (Carfentanil)",
                recResponse: 135,
              },
              {
                code: "S",
                text: "Weapons (Fentanyl)",
                recResponse: 135,
              },
              {
                code: "T",
                text: "Weapons (Carfentanil)",
                recResponse: 135,
              },
              {
                code: "V",
                text: "Violent or Combative",
                recResponse: 135,
              },
              {
                code: "W",
                text: "Weapons",
                recResponse: 135,
              },
            ],
          },
          {
            code: "23E01",
            text: "Obvious Arrest",
            recResponse: 136,
            notBreathing: true,
            subCodes: [
              {
                code: "A",
                text: "Accidental",
                recResponse: 136,
              },
              {
                code: "C",
                text: "Carfentanil",
                recResponse: 136,
              },
              {
                code: "D",
                text: "Accidental (Fentanyl)",
                recResponse: 136,
              },
              {
                code: "E",
                text: "Accidental (Carfentanil)",
                recResponse: 136,
              },
              {
                code: "F",
                text: "Fentanyl",
                recResponse: 136,
              },
              {
                code: "G",
                text: "Intentional (Fentanyl)",
                recResponse: 136,
              },
              {
                code: "H",
                text: "Intentional (Carfentanil)",
                recResponse: 136,
              },
              {
                code: "I",
                text: "Intentional",
                recResponse: 137,
              },
            ],
          },
        ],
      },
    ],
  },
];
