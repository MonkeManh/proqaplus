import { IFireUnitType } from "@/models/interfaces/fire/IFireUnitType";

export const fireUnitTypes: IFireUnitType[] = [
  {
    name: "Engine",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
  },
  {
    name: "Ambulance",
    care: {
      canTransport: true,
      defaultLevel: "BLS",
    },
  },
  {
    name: "Medic",
    care: {
      canTransport: true,
      defaultLevel: "ALS",
    },
  },
  {
    name: "Truck",
    care: {
      canTransport: false,
      defaultLevel: "ALS",
    },
  },
  {
    name: "Rescue",
    care: {
      canTransport: false,
      defaultLevel: "ALS",
    },
  },
  {
    name: "Type III Engine",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
  },
  {
    name: "Patrol",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
  },
  {
    name: "Tanker",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
  },
  {
    name: "Squad",
    care: {
      canTransport: false,
      defaultLevel: "ALS",
    },
  },
  {
    name: "Light Force",
    care: {
      canTransport: false,
      defaultLevel: "ALS",
    },
  },
  {
    name: "Crash",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
  },
  // DSO
  {
    name: "Air Rescue (1-3)",
    care: {
      canTransport: true,
      defaultLevel: "ACLS",
      airCare: true,
    },
    division: "DSO",
  },
  {
    name: "Air Rescue (4-6)",
    care: {
      canTransport: true,
      defaultLevel: "ACLS",
      airCare: true,
    },
    division: "DSO",
  },
  {
    name: "ATV",
    care: {
      canTransport: false,
      defaultLevel: "ALS",
    },
    division: "DSO",
  },
  {
    name: "Canine",
    care: {
      canTransport: false,
      defaultLevel: "ALS",
    },
    division: "DSO",
  },
  {
    name: "Swift Water",
    care: {
      canTransport: false,
      defaultLevel: "ALS",
    },
    division: "DSO",
  },
  {
    name: "Dive Rescue",
    care: {
      canTransport: false,
      defaultLevel: "ALS",
    },
    division: "DSO",
  },
  {
    name: "Marine",
    care: {
      canTransport: false,
      defaultLevel: "ALS",
    },
    division: "DSO",
  },
  {
    name: "Rescue Boat",
    care: {
      canTransport: false,
      defaultLevel: "ALS",
    },
    division: "DSO",
  },
  {
    name: "Guardian",
    care: {
      canTransport: false,
      defaultLevel: "ALS",
    },
    division: "DSO",
  },
  {
    name: "Hazmat",
    care: {
      canTransport: false,
      defaultLevel: "ALS",
    },
    division: "DSO",
  },
  // TSU
  {
    name: "Medic 900 Series",
    care: {
      canTransport: true,
      defaultLevel: "ACLS",
    },
    division: "TSU",
  },
  {
    name: "Medic 90 Series",
    care: {
      canTransport: false,
      defaultLevel: "ACLS",
    },
    division: "TSU",
  },
  {
    name: "EOD",
    care: {
      canTransport: false,
      defaultLevel: "ALS",
    },
    division: "TSU",
  },
  // OFI
  {
    name: "Probationary Investigator",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
    division: "OFI",
  },
  {
    name: "Investigator",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
    division: "OFI",
  },
  {
    name: "Senior Investigator",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
    division: "OFI",
  },
  {
    name: "Lead Investigator",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
    division: "OFI",
  },
  {
    name: "Senior Lead Investigator",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
    division: "OFI",
  },
  {
    name: "OFI Supervisor",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
    division: "OFI",
  },
  {
    name: "OFI Coordinator",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
    division: "OFI",
  },
  // SAFS
  {
    name: "Wildland",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
    division: "SAFS",
  },
  {
    name: "Patrol Truck",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
    division: "SAFS",
  },
  {
    name: "Tender",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
    division: "SAFS",
  },
  {
    name: "Knight Truck",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
    division: "SAFS",
  },
  {
    name: "ATV",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
    division: "SAFS",
  },
  {
    name: "Gator",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
    division: "SAFS",
  },
  {
    name: "Bicycle",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
    division: "SAFS",
  },
  {
    name: "Blade",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
    division: "SAFS",
  },
  {
    name: "Firehawk",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
    division: "SAFS",
  },
  {
    name: "Gryphon",
    care: {
      canTransport: false,
      defaultLevel: "BLS",
    },
    division: "SAFS",
  },
  // AMR
  {
    name: "AMR 400 Series (BLS)",
    care: {
      canTransport: true,
      defaultLevel: "BLS",
    },
    division: "AMR",
  },
  {
    name: "AMR 600 Series (ALS)",
    care: {
      canTransport: true,
      defaultLevel: "ALS",
    },
    division: "AMR",
  },
  {
    name: "AMR 800 Series (ACLS)",
    care: {
      canTransport: true,
      defaultLevel: "ACLS",
    },
    division: "AMR",
  },
  {
    name: "AMR Operations Supervisor",
    care: {
      canTransport: false,
      defaultLevel: "ACLS",
    },
    isEMSSupervisor: true,
    division: "AMR",
  },
  // Command Positions
  {
    name: "Chief",
    care: {
      canTransport: false,
      defaultLevel: "ACLS",
    },
    isSupervisor: true,
  },
  {
    name: "Deputy",
    care: {
      canTransport: false,
      defaultLevel: "ACLS",
    },
    isSupervisor: true,
  },
  {
    name: "Battalion",
    care: {
      canTransport: false,
      defaultLevel: "ACLS",
    },
    isSupervisor: true,
  },
  {
    name: "Command",
    care: {
      canTransport: false,
      defaultLevel: "ACLS",
    },
    isSupervisor: true,
  },
];
