import { IPostal } from "@/models/interfaces/IPostal";

export function getPostalBox(postal: string): string | undefined {
  const found = postalData.find((p) => p.postal === postal);
  return found?.fireBox;
}

export function getPostal(postal: string): IPostal | undefined {
  return postalData.find((p) => p.postal === postal);
}

export const postalData: IPostal[] = [
  {
    postal: "001",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0318",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "002",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0318",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "003",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0318",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "004",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0318",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "005",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0318",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true, 
      mainStreet: "Procopio Promenade",
      crossStreet1: "Bayview Bridge",
      crossStreet2: "Route 1",
    }
  },
  {
    postal: "006",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true, 
      mainStreet: "Procopio Promenade",
      crossStreet1: "Bayview Bridge",
      crossStreet2: "Route 1",
    }
  },
  {
    postal: "007",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true, 
      mainStreet: "Procopio Promenade",
      crossStreet1: "Bayview Bridge",
      crossStreet2: "Route 1",
    }
  },
  {
    postal: "008",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true, 
      mainStreet: "Procopio Promenade",
      crossStreet1: "Bayview Bridge",
      crossStreet2: "Route 1",
    }
  },
  {
    postal: "009",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Bayview Bridge",
      crossStreet1: "Procopio Promenade",
      crossStreet2: "Riverfront Ave.",
    },
  },
  {
    postal: "010",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Promenade": {
          crossStreet1: "Route 1",
          crossStreet2: "Bayview Bridge",
        },
        "Bayview Bridge": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Riverfront Ave."
        }
      }
    }
  },
  {
    postal: "011",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Procopio Promenade",
      crossStreet1: "Great Ocean Hwy",
      crossStreet2: "Riverfront Ave.",
    },
  },
  {
    postal: "012",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "013",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "014",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Procopio Promenade",
      crossStreet1: "Great Ocean Hwy",
      crossStreet2: "Riverfront Ave.",
    },
  },
  {
    postal: "015",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "016",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Dr.": {
          crossStreet1: "Duluoz Ave.",
          crossStreet2: "Paleto Blvd.",
        },
        "Paleto Blvd.": {
          crossStreet1: "Duluoz Ave.",
          crossStreet2: "Great Ocean Hwy",
        },
      },
    },
  },
  {
    postal: "017",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Dr.": {
          crossStreet1: "Paleto Blvd.",
          crossStreet2: "Cascabel Ave.",
        },
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Route 1"
        }
      }
    },
  },
  {
    postal: "018",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Dr.": {
          crossStreet1: "Duluoz Ave.",
          crossStreet2: "Paleto Blvd.",
        },
        "Paleto Blvd.": {
          crossStreet1: "Procopio Dr.",
          crossStreet2: "Duluoz Ave.",
        },
        "Duluoz Ave.": {
          crossStreet1: "Procopio Dr.",
          crossStreet2: "Paleto Blvd.",
        },
      },
    },
  },
  {
    postal: "019",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Duluoz Ave.": {
          crossStreet1: "Procopio Dr.",
          crossStreet2: "Paleto Blvd.",
        },
        "Procopio Dr.": {
          crossStreet1: "Cascabel Ave.",
          crossStreet2: "Duluoz Ave.",
        },
        "Paleto Blvd.": {
          crossStreet1: "Duluoz Ave.",
          crossStreet2: "Pyrite Ave.",
        },
      },
    },
  },
  {
    postal: "020",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Dr.": {
          crossStreet1: "Paleto Blvd.",
          crossStreet2: "Cascabel Ave.",
        },
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Route 1"
        }
      }
    },
  },
  {
    postal: "021",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Dr.": {
          crossStreet1: "Duluoz Ave.",
          crossStreet2: "Cascabel Ave.",
        },
        "Paleto Blvd.": {
          crossStreet1: "Duluoz Ave.",
          crossStreet2: "Pyrite Ave.",
        },
      },
    },
  },
  {
    postal: "022",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Dr.": {
          crossStreet1: "Paleto Blvd.",
          crossStreet2: "Cascabel Ave.",
        },
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Route 1"
        }
      }
    },
  },
  {
    postal: "023",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0302",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Paleto Blvd.": {
          crossStreet1: "Pyrite Ave.",
          crossStreet2: "Cascabel Ave.",
        },
        "Procopio Dr.": {
          crossStreet1: "Duluoz Ave.",
          crossStreet2: "Cascabel Ave.",
        },
        "Cascabel Ave.": {
          crossStreet1: "Procopio Dr.",
          crossStreet2: "Paleto Blvd.",
        },
      },
    },
  },
  {
    postal: "024",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0304",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cascabel Ave.": {
          crossStreet1: "Procopio Dr.",
          crossStreet2: "Paleto Blvd.",
        },
        "Procopio Dr.": {
          crossStreet1: "Cascabel Ave.",
          crossStreet2: "Paleto Blvd.",
        },
        "Paleto Blvd.": {
          crossStreet1: "Cascabel Ave.",
          crossStreet2: "Procopio Dr.",
        },
      },
    },
  },
  {
    postal: "025",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0306",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Dr.": {
          crossStreet1: "Cascabel Ave.",
          crossStreet2: "Paleto Blvd.",
        },
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Route 1"
        }
      }
    },
  },
  {
    postal: "026",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0304",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Dr.": {
          crossStreet1: "Cascabel Ave.",
          crossStreet2: "Paleto Blvd.",
        },
        "Paleto Blvd.": {
          crossStreet1: "Cascabel Ave.",
          crossStreet2: "Procopio Dr.",
        },
      },
    },
  },
  {
    postal: "027",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0306",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Dr.": {
          crossStreet1: "Cascabel Ave.",
          crossStreet2: "Paleto Blvd.",
        },
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Route 1"
        }
      }
    },
  },
  {
    postal: "028",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0304",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Paleto Blvd.": {
          crossStreet1: "Cascabel Ave.",
          crossStreet2: "Procopio Dr.",
        },
        "Procopio Dr.": {
          crossStreet1: "Cascabel Ave.",
          crossStreet2: "Paleto Blvd.",
        },
      },
    },
  },
  {
    postal: "029",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0304",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Procopio Dr.",
      crossStreet1: "Cascabel Ave.",
      crossStreet2: "Paleto Blvd.",
    },
  },
  {
    postal: "030",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0306",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Procopio Promenade",
      crossStreet1: "Great Ocean Hwy",
      crossStreet2: "Bayview Bridge",
    },
  },
  {
    postal: "031",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0318",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Procopio Promenade",
      crossStreet1: "Great Ocean Hwy",
      crossStreet2: "Bayview Bridge",
    },
  },
  {
    postal: "032",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0318",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "033",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0320",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "034",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0318",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Procopio Promenade",
      crossStreet1: "Great Ocean Hwy",
      crossStreet2: "Bayview Bridge",
    },
  },
  {
    postal: "035",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0320",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "036",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0320",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "037",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0316",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Great Ocean Hwy": {
          crossStreet1: "Procopio Dr.",
          crossStreet2: "Procopio Promenade",
        },
        "Procopio Promenade": {
          crossStreet1: "Great Ocean Hwy",
          crossStreet2: "Bayview Bridge",
        },
      },
    },
  },
  {
    postal: "038",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0306",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Procopio Dr.",
      crossStreet2: "Procopio Promenade",
    },
  },
  {
    postal: "039",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0304",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Great Ocean Hwy": {
          crossStreet1: "Procopio Dr.",
          crossStreet2: "Procopio Promenade",
        },
        "Procopio Dr.": {
          crossStreet1: "Paleto Blvd.",
          crossStreet2: "Great Ocean Hwy",
        },
      },
    },
  },
  {
    postal: "040",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "3132",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Great Ocean Hwy": {
          crossStreet1: "Procopio Dr.",
          crossStreet2: "Pyrite Ave.",
        },
        "Procopio Dr.": {
          crossStreet1: "Paleto Blvd.",
          crossStreet2: "Great Ocean Hwy",
        },
        "Paleto Blvd.": {
          crossStreet1: "Cascabel Ave.",
          crossStreet2: "Procopio Dr.",
        },
      },
    },
  },
  {
    postal: "041",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0304",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Paleto Blvd.": {
          crossStreet1: "Cascabel Ave.",
          crossStreet2: "Procopio Dr.",
        },
        "Great Ocean Hwy": {
          crossStreet1: "Pyrite Ave.",
          crossStreet2: "Procopio Dr.",
        },
      },
    },
  },
  {
    postal: "042",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0302",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Pyrite Ave.": {
          crossStreet1: "Paleto Blvd.",
          crossStreet2: "Great Ocean Hwy",
        },
        "Paleto Blvd.": {
          crossStreet1: "Pyrite Ave.",
          crossStreet2: "Cascabel Ave.",
        },
        "Great Ocean Hwy": {
          crossStreet1: "Pyrite Ave.",
          crossStreet2: "Procopio Dr.",
        },
      },
    },
  },
  {
    postal: "043",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0302",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Paleto Blvd.": {
          crossStreet1: "Duluoz Ave.",
          crossStreet2: "Pyrite Ave.",
        },
        "Pyrite Ave.": {
          crossStreet1: "Paleto Blvd.",
          crossStreet2: "Great Ocean Hwy",
        },
        "Great Ocean Hwy": {
          crossStreet1: "Pyrite Ave.",
          crossStreet2: "Duluoz Ave.",
        },
      },
    },
  },
  {
    postal: "044",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Duluoz Ave.": {
          crossStreet1: "Paleto Blvd.",
          crossStreet2: "Great Ocean Hwy",
        },
        "Paleto Blvd.": {
          crossStreet1: "Duluoz Ave.",
          crossStreet2: "Pyrite Ave.",
        },
        "Great Ocean Hwy": {
          crossStreet1: "Duluoz Ave.",
          crossStreet2: "Pyrite Ave.",
        },
      },
    },
  },
  {
    postal: "045",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Paleto Blvd.": {
          crossStreet1: "Great Ocean Hwy",
          crossStreet2: "Duluoz Ave.",
        },
        "Duluoz Ave.": {
          crossStreet1: "Paleto Blvd.",
          crossStreet2: "Great Ocean Hwy",
        },
        "Great Ocean Hwy": {
          crossStreet1: "Duluoz Ave.",
          crossStreet2: "Paleto Blvd.",
        },
      },
    },
  },
  {
    postal: "046",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Paleto Blvd.": {
          crossStreet1: "Great Ocean Hwy",
          crossStreet2: "Procopio Dr.",
        },
        "Great Ocean Hwy": {
          crossStreet1: "Paleto Blvd.",
          crossStreet2: "Duluoz Ave.",
        },
      },
    },
  },
  {
    postal: "047",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Paleto Blvd.": {
          crossStreet1: "Procopio Dr.",
          crossStreet2: "Great Ocean Hwy",
        },
        "Great Ocean Hwy": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Paleto Blvd.",
        },
      },
    },
  },
  {
    postal: "048",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Procopio Promenade",
      crossStreet2: "Paleto Blvd.",
    },
  },
  {
    postal: "049",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0303",
    fdRunOrder: ["3", "11", "4", "9", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Procopio Promenade",
      crossStreet1: "Great Ocean Hwy",
      crossStreet2: "Bayview Bridge",
    },
  },
  {
    postal: "050",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0303",
    fdRunOrder: ["3", "11", "4", "9", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "051",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0303",
    fdRunOrder: ["3", "11", "4", "9", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Great Ocean Hwy",
        },
        "Great Ocean Hwy": {
          crossStreet1: "Pine Tree Rd.",
          crossStreet2: "Paleto Blvd.",
        },
      },
    },
  },
  {
    postal: "052",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0350",
    fdRunOrder: ["3", "11", "4", "9", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Fallen Tree Rd.": {
          crossStreet1: "Pine Tree Rd.",
          crossStreet2: "Pine Tree Rd.",
        },
        "Pine Tree Rd.": {
          crossStreet1: "Fallen Tree Rd.",
          crossStreet2: "Great Ocean Hwy",
        },
      },
    },
  },
  {
    postal: "053",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0350",
    fdRunOrder: ["3", "11", "4", "9", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Fallen Tree Rd.",
      crossStreet1: "Pine Tree Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "054",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0350",
    fdRunOrder: ["3", "11", "4", "9", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Fallen Tree Rd.",
      crossStreet1: "Pine Tree Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "055",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0303",
    fdRunOrder: ["3", "11", "4", "9", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Procopio Promenade",
      crossStreet2: "Paleto Blvd.",
    },
  },
  {
    postal: "056",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0303",
    fdRunOrder: ["3", "11", "4", "9", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Procopio Promenade",
      crossStreet2: "Paleto Blvd.",
    },
  },
  {
    postal: "057",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0303",
    fdRunOrder: ["3", "11", "4", "9", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Procopio Promenade",
      crossStreet2: "Paleto Blvd.",
    },
  },
  {
    postal: "058",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Procopio Promenade",
      crossStreet2: "Paleto Blvd.",
    },
  },
  {
    postal: "059",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0305",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Paleto Blvd.",
      crossStreet2: "Duluoz Ave.",
    },
  },
  {
    postal: "060",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0305",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Duluoz Ave.",
      crossStreet2: "Pyrite Ave.",
    },
  },
  {
    postal: "061",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0308",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Duluoz Ave.",
      crossStreet2: "Procopio Dr.",
    },
  },
  {
    postal: "062",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0310",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Pyrite Ave.",
      crossStreet2: "Procopio Dr.",
    },
  },
  {
    postal: "063",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0310",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Pyrite Ave.",
      crossStreet2: "Procopio Dr.",
    },
  },
  {
    postal: "064",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0310",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Pyrite Ave.",
      crossStreet2: "Procopio Promenade",
    },
  },
  {
    postal: "065",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0312",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Procopio Dr.",
      crossStreet2: "Procopio Promenade",
    },
  },
  {
    postal: "066",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0314",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Procopio Promenade",
      crossStreet2: "Route 1 MM 07.00",
    },
  },
  {
    postal: "067",
    fdDistrict: "03",
    policeDistrict: "SAHP",
    fireBox: "0322",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SAHP",
      "BCSO",
      "PBPD",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Procopio Promenade",
      crossStreet2: "Route 1 MM 07.00",
    },
  },
  {
    postal: "068",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0322",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Route 1 MM 07.00",
      crossStreet2: "Procopio Promenade",
    },
  },
  {
    postal: "069",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0322",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Route 1 MM 07.00",
      crossStreet2: "Route 13 MM 01",
    },
  },
  {
    postal: "070",
    fdDistrict: "03",
    policeDistrict: "SAHP",
    fireBox: "0322",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SAHP",
      "BCSO",
      "PBPD",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Route 1 MM 07.00",
      crossStreet2: "Route 13 MM 01.00",
    },
  },
  {
    postal: "071",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0351",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Route 1 MM 07.00",
      crossStreet2: "Route 13 MM 01",
    },
  },
  {
    postal: "072",
    fdDistrict: "03",
    policeDistrict: "SAHP",
    fireBox: "3141",
    fdRunOrder: ["3", "9", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SAHP",
      "BCSO",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Great Ocean Hwy",
      crossStreet1: "Route 1 MM 07.00",
      crossStreet2: "Route 13 MM 01",
    },
  },
  {
    postal: "073",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0351",
    fdRunOrder: ["3", "9", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "074",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0351",
    fdRunOrder: ["3", "9", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "075",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0351",
    fdRunOrder: ["3", "9", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "076",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0351",
    fdRunOrder: ["3", "9", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "077",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0951",
    fdRunOrder: ["9", "3", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "078",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0351",
    fdRunOrder: ["3", "9", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "079",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0951",
    fdRunOrder: ["9", "3", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "080",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0951",
    fdRunOrder: ["9", "3", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Gordo Dr.",
      crossStreet1: "Catfish View",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "081",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0920",
    fdRunOrder: ["9", "3", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Gordo Dr.",
      crossStreet1: "Catfish View",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "082",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Catfish View": {
          crossStreet1: "Union Rd.",
          crossStreet2: "Dead End",
        },
        "Gordo Dr.": {
          crossStreet1: "Catfish View",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "083",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Catfish View",
      crossStreet1: "Gordo Dr.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "084",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Catfish View",
      crossStreet1: "Gordo Dr.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "085",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Catfish View",
      crossStreet1: "Gordo Dr.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "086",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Catfish View",
      crossStreet1: "Gordo Dr.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "087",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0912",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Chianski Passage": {
          crossStreet1: "Amtrack Access Rd.",
          crossStreet2: "Union Rd.",
        },
        "Amtrack Access Rd.": {
          crossStreet1: "Chianski Passage",
          crossStreet2: "Union Rd.",
        },
        "Union Rd.": {
          crossStreet1: "Chianski Passage",
          crossStreet2: "Amtrack Access Rd.",
        },
      },
    },
  },
  {
    postal: "088",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0912",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 13 NB": {
          crossStreet1: "E Joshua Rd.",
          crossStreet2: "Union Rd.",
        },
        "Route 13 SB": {
          crossStreet1: "Union Rd.",
          crossStreet2: "Route 13 MM02.00",
        },
        "Chianski Passage": {
          crossStreet1: "Hayseed Rd.",
          crossStreet2: "Union Rd.",
        },
        "Union Rd.": {
          crossStreet1: "Route 13",
          crossStreet2: "Chianski Passage",
        },
      },
    },
  },
  {
    postal: "089",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0906",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Dots Ln.": {
          crossStreet1: "Cattle Rd.",
          crossStreet2: "Pinto Ln.",
        },
        "Route 13 NB": {
          crossStreet1: "Union Rd.",
          crossStreet2: "E Joshua Rd.",
        },
        "Route 13 SB": {
          crossStreet1: "Union Rd.",
          crossStreet2: "Route 13 MM02.00",
        },
        "E Joshua Rd.": {
          crossStreet1: "Seaview Rd.",
          crossStreet2: "Route 13",
        },
      },
    },
  },
  {
    postal: "090",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0906",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Seaview Rd": {
          crossStreet1: "Dots Ln.",
          crossStreet2: "E Joshua Rd.",
        },
        "Dots Ln.": {
          crossStreet1: "Seaview Rd.",
          crossStreet2: "Pinto Ln.",
        },
        "E Joshua Rd.": {
          crossStreet1: "Seaview Rd.",
          crossStreet2: "Pinto Ln.",
        },
      },
    },
  },

  {
    postal: "091",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0906",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Seaview Rd.": {
          crossStreet1: "Farmer Rd.",
          crossStreet2: "Dots Ln.",
        },
        "Farmer Rd.": {
          crossStreet1: "Seaview Rd.",
          crossStreet2: "Maize Rd.",
        },
        "Pinto Ln.": {
          crossStreet1: "Farmer Rd.",
          crossStreet2: "Dots Ln.",
        },
        "Dots Ln.": {
          crossStreet1: "Seaview Rd.",
          crossStreet2: "Pinto Ln.",
        },
      },
    },
  },
  {
    postal: "092",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0906",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Pinto Ln.": {
          crossStreet1: "Farmer Rd.",
          crossStreet2: "Dots Ln.",
        },
        "Farmer Rd.": {
          crossStreet1: "Pinto Ln.",
          crossStreet2: "Maize Rd.",
        },
        "Maize Rd.": {
          crossStreet1: "Farmer Rd.",
          crossStreet2: "Dots Ln.",
        },
        "Dots Ln.": {
          crossStreet1: "Pinto Ln.",
          crossStreet2: "Maize Rd.",
        },
      },
    },
  },
  {
    postal: "093",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0906",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Seaview Rd.": {
          crossStreet1: "Grapeseed Way",
          crossStreet2: "Farmer Rd.",
        },
        "Grapeseed Way": {
          crossStreet1: "Maize Rd.",
          crossStreet2: "Seaview Rd.",
        },
        "Maize Rd.": {
          crossStreet1: "Grapeseed Way",
          crossStreet2: "Farmer Rd.",
        },
        "Farmer Rd.": {
          crossStreet1: "Seaview Rd.",
          crossStreet2: "Maize Rd.",
        },
      },
    },
  },
  {
    postal: "094",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0906",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Maize Rd.": {
          crossStreet1: "Grapeseed Way",
          crossStreet2: "Dots Ln.",
        },
        "Grapeseed Way": {
          crossStreet1: "Maize Rd.",
          crossStreet2: "Cattle Rd.",
        },
        "Cattle Rd.": {
          crossStreet1: "Grapeseed Way",
          crossStreet2: "Dots Ln.",
        },
        "Dots Ln.": {
          crossStreet1: "Maize Rd.",
          crossStreet2: "Cattle Rd.",
        },
      },
    },
  },
  {
    postal: "095",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0912",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Chianski Passage": {
          crossStreet1: "Hayseed Rd.",
          crossStreet2: "Amtrack Access Rd.",
        },
        "Hayseed Rd.": {
          crossStreet1: "Chainski Passage",
          crossStreet2: "Union Rd.",
        },
        "Union Rd.": {
          crossStreet1: "Hayseed Rd.",
          crossStreet2: "Amtrack Access Rd.",
        },
        "Amtrack Access Rd.": {
          crossStreet1: "Chianski Passage",
          crossStreet2: "Union Rd.",
        },
      },
    },
  },
  {
    postal: "096",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0906",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Union Rd.": {
          crossStreet1: "Grapeseed Ave.",
          crossStreet2: "Grapeseed Way",
        },
        "Grapeseed Ave.": {
          crossStreet1: "Seaview Rd.",
          crossStreet2: "Cattle Rd.",
        },
        "Grapeseed Way": {
          crossStreet1: "Seaview Rd.",
          crossStreet2: "Cattle Rd.",
        },
      },
    },
  },
  {
    postal: "097",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0906",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cattle Rd.": {
          crossStreet1: "Grapeseed Ave.",
          crossStreet2: "Dots Ln.",
        },
        "Grapeseed Ave.": {
          crossStreet1: "Cattle Rd.",
          crossStreet2: "Dots Ln.",
        },
        "Dots Ln.": {
          crossStreet1: "Grapeseed Ave.",
          crossStreet2: "Cattle Rd.",
        },
        "Route 13 SB": {
          crossStreet1: "Union Rd.",
          crossStreet2: "E Joshua Rd.",
        },
      },
    },
  },
  {
    postal: "098",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0912",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Chianski Passage": {
          crossStreet1: "Hayseed Way",
          crossStreet2: "Hayseed Rd.",
        },
        "Hayseed Way": {
          crossStreet1: "Chianski Passage",
          crossStreet2: "Union Rd.",
        },
        "Union Rd.": {
          crossStreet1: "Hayseed Way",
          crossStreet2: "Hayseed Rd.",
        },
        "Hayseed Rd.": {
          crossStreet1: "Chianski Passage",
          crossStreet2: "Union Rd.",
        },
        "Route 13 NB": {
          crossStreet1: "Union Rd.",
          crossStreet2: "E Joshua Rd.",
        },
      },
    },
  },
  {
    postal: "099",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0912",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Chianski Passage": {
          crossStreet1: "Grapeseed Ave.",
          crossStreet2: "Hayseed Way.",
        },
        "Grapeseed Ave.": {
          crossStreet1: "Chianski Passage",
          crossStreet2: "Union Rd.",
        },
        "Union Rd.": {
          crossStreet1: "Grapeseed Ave.",
          crossStreet2: "Hayseed Way.",
        },
        "Hayseed Way": {
          crossStreet1: "Chianski Passage",
          crossStreet2: "Union Rd.",
        },
        "Route 13 NB": {
          crossStreet1: "Union Rd.",
          crossStreet2: "E Joshua Rd.",
        },
      },
    },
  },
  {
    postal: "100",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0910",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 13 NB": {
          crossStreet1: "E Joshua Rd.",
          crossStreet2: "Route 13 MM01.00",
        },
        "Route 13 SB": {
          crossStreet1: "E Joshua Rd.",
          crossStreet2: "Union Rd.",
        },
        "Union Rd.": {
          crossStreet1: "Route 13 NB",
          crossStreet2: "Grapeseed Ave.",
        },
      },
    },
  },
  {
    postal: "101",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0904",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Dots Ln.": {
          crossStreet1: "Little Finger Way",
          crossStreet2: "Grapeseed Ave.",
        },
        "Little Finger Way": {
          crossStreet1: "Dots Ln.",
          crossStreet2: "Dead End",
        },
        "Route 13 SB": {
          crossStreet1: "Union Rd.",
          crossStreet2: "E Joshua Rd.",
        },
      },
    },
  },
  {
    postal: "102",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0904",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cattle Rd.": {
          crossStreet1: "Swine Rd.",
          crossStreet2: "Grapeseed Ave.",
        },
        "Swine Rd.": {
          crossStreet1: "Cattle Rd.",
          crossStreet2: "Dots Ln.",
        },
        "Dots Ln.": {
          crossStreet1: "Swine Rd.",
          crossStreet2: "Grapeseed Ave.",
        },
      },
    },
  },
  {
    postal: "103",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0904",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Cattle Rd.",
      crossStreet1: "Swine Rd.",
      crossStreet2: "Grapeseed Ave.",
    },
  },
  {
    postal: "104",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0904",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Seaview Rd.": {
          crossStreet1: "Joad Ln.",
          crossStreet2: "Grapeseed Ave.",
        },
        "Rancher Rd.": {
          crossStreet1: "Cattle Rd.",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "105",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0904",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Joad Ln.",
      crossStreet1: "Seaview Rd.",
      crossStreet2: "O'Neil Way",
    },
  },
  {
    postal: "106",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0904",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cattle Rd.": {
          crossStreet1: "O'Neil Ln.",
          crossStreet2: "Swine Rd.",
        },
        "Dots Ln.": {
          crossStreet1: "O'Neil Way",
          crossStreet2: "Dead End",
        },
        "O'Neil Way": {
          crossStreet1: "Cattle Rd.",
          crossStreet2: "Swine Rd.",
        },
        "Swine Rd.": {
          crossStreet1: "O'Neil Way",
          crossStreet2: "O'Neil Ln.",
        },
        "O'Neil Ln.": {
          crossStreet1: "Cattle Rd.",
          crossStreet2: "Swine Rd.",
        },
      },
    },
  },
  {
    postal: "107",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0904",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Swine Rd.": {
          crossStreet1: "Dots Ln.",
          crossStreet2: "O'Neil Way",
        },
        "Union Rd.": {
          crossStreet1: "O'Neil Way",
          crossStreet2: "Route 13 SB",
        },
        "Route 13 SB": {
          crossStreet1: "Union Rd.",
          crossStreet2: "E Joshua Rd.",
        },
      },
    },
  },
  {
    postal: "108",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0902",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Dots Ln.": {
          crossStreet1: "Phire Ln.",
          crossStreet2: "O'Neil Way",
        },
        "Phire Ln.": {
          crossStreet1: "Dots Ln.",
          crossStreet2: "Union Rd.",
        },
        "Union Rd.": {
          crossStreet1: "Phire Ln.",
          crossStreet2: "O'Neil Way",
        },
        "O'Neil Way": {
          crossStreet1: "Dots Ln.",
          crossStreet2: "Union Rd.",
        },
      },
    },
  },
  {
    postal: "109",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0902",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joad Ln.": {
          crossStreet1: "Phire Ln.",
          crossStreet2: "O'Neil Way",
        },
        "Phire Ln.": {
          crossStreet1: "Joad Ln.",
          crossStreet2: "Dots Ln.",
        },
        "Dots Ln.": {
          crossStreet1: "Phire Ln.",
          crossStreet2: "O'Neil Way",
        },
        "O'Neil Way": {
          crossStreet1: "Joad Ln.",
          crossStreet2: "Dots Ln.",
        },
      },
    },
  },
  {
    postal: "110",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9400",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Seaview Rd.": {
          crossStreet1: "Orchard Ln.",
          crossStreet2: "Joad Ln.",
        },
        "Joad Ln.": {
          crossStreet1: "O'Neil Way",
          crossStreet2: "Seaview Rd.",
        },
        "McKenzie Rd.": {
          crossStreet1: "Phire Way",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "111",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Seaview Rd.": {
          crossStreet1: "Orchard Ln.",
          crossStreet2: "Joad Ln.",
        },
        "Orchard Ln.": {
          crossStreet1: "Boar Ln.",
          crossStreet2: "Seaview Rd.",
        },
      },
    },
  },
  {
    postal: "112",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Grapeseed Main St.",
      crossStreet1: "N Calafia Way",
      crossStreet2: "Boar Ln.",
    },
  },
  {
    postal: "113",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Grapeseed Main St.": {
          crossStreet1: "Boar Ln.",
          crossStreet2: "N Calafia Way",
        },
        "N Calafia Way": {
          crossStreet1: "Fishery Ln.",
          crossStreet2: "Grapeseed Main St.",
        },
      },
    },
  },
  {
    postal: "114",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0909",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Grapeseed Main St.",
      crossStreet1: "N Calafia Way",
      crossStreet2: "Boar Ln.",
    },
  },
  {
    postal: "115",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Grapeseed Main St.",
      crossStreet1: "N Calafia Way",
      crossStreet2: "Boar Ln.",
    },
  },
  {
    postal: "116",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0909",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Grapeseed Main St.",
      crossStreet1: "N Calafia Way",
      crossStreet2: "Boar Ln.",
    },
  },
  {
    postal: "117",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Boar Ln": {
          crossStreet1: "Grapeseed Main St.",
          crossStreet2: "Union Way",
        },
        "Grapeseed Main St.": {
          crossStreet1: "Boar Ln.",
          crossStreet2: "McKenzie Rd.",
        },
        "McKenzie Rd.": {
          crossStreet1: "Grapeseed Main St.",
          crossStreet2: "Union Way",
        },
        "Union Way": {
          crossStreet1: "Boar Ln.",
          crossStreet2: "McKenzie Rd.",
        },
      },
    },
  },
  {
    postal: "118",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Boar Ln": {
          crossStreet1: "Union Way",
          crossStreet2: "Phire Way",
        },
        "McKenzie Rd.": {
          crossStreet1: "Union Way",
          crossStreet2: "Phire Way",
        },
        "Phire Way": {
          crossStreet1: "Boar Ln.",
          crossStreet2: "McKenzie Rd.",
        },
      },
    },
  },
  {
    postal: "119",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "McKenzie Way": {
          crossStreet1: "Phire Ln.",
          crossStreet2: "Phire Way",
        },
        "Phire Ln.": {
          crossStreet1: "McKenzie Rd.",
          crossStreet2: "Joad Ln.",
        },
        "Joad Ln.": {
          crossStreet1: "Phire Ln.",
          crossStreet2: "Phire Way",
        },
        "Phire Way": {
          crossStreet1: "McKenzie Rd.",
          crossStreet2: "Joad Ln.",
        },
      },
    },
  },
  {
    postal: "120",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "McKenzie Rd.": {
          crossStreet1: "Union Way",
          crossStreet2: "Phire Ln.",
        },
        "Union Way": {
          crossStreet1: "McKenzie Rd.",
          crossStreet2: "Joad Ln.",
        },
        "Joad Ln.": {
          crossStreet1: "Union Way",
          crossStreet2: "Phire Ln.",
        },
        "Phire Ln.": {
          crossStreet1: "McKenzie Rd.",
          crossStreet2: "Joad Ln.",
        },
      },
    },
  },
  {
    postal: "121",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0902",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "McKenzie Rd.": {
          crossStreet1: "Grapeseed Main St.",
          crossStreet2: "Union Way",
        },
        "Grapeseed Main St.": {
          crossStreet1: "McKenzie Rd.",
          crossStreet2: "Union Way",
        },
        "Union Way": {
          crossStreet1: "McKenzie Rd.",
          crossStreet2: "Grapeseed Main St.",
        },
      },
    },
  },
  {
    postal: "122",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0902",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joad Ln.": {
          crossStreet1: "Union Rd.",
          crossStreet2: "Phire Ln.",
        },
        "Union Rd.": {
          crossStreet1: "Joad Ln.",
          crossStreet2: "Cattle Rd.",
        },
        "Cattle Rd.": {
          crossStreet1: "Union Rd.",
          crossStreet2: "Phire Ln.",
        },
        "Phire Ln.": {
          crossStreet1: "Joad Ln.",
          crossStreet2: "Cattle Rd.",
        },
      },
    },
  },
  {
    postal: "123",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0902",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cattle Rd.": {
          crossStreet1: "Union Rd.",
          crossStreet2: "Phire Ln.",
        },
        "Union Rd.": {
          crossStreet1: "Cattle Rd.",
          crossStreet2: "Phire Ln.",
        },
        "Phire Ln.": {
          crossStreet1: "Cattle Rd.",
          crossStreet2: "Union Rd.",
        },
      },
    },
  },
  {
    postal: "124",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "125",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Braddock Ln.": {
          crossStreet1: "Union Rd.",
          crossStreet2: "Dead End",
        },
        "Route 13 SB": {
          crossStreet1: "Route 13 MM01.00",
          crossStreet2: "Union Rd.",
        },
        "Route 13 NB": {
          crossStreet1: "Union Rd.",
          crossStreet2: "Route 13 MM01.00",
        },
      },
    },
  },
  {
    postal: "126",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "9", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "127",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Braddock Ln.",
      crossStreet1: "Union Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "128",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "129",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "130",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "131",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "9", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Route 1 EB",
      crossStreet1: "Route 1 MM07.00",
      crossStreet2: "Route 13 MM01.00",
    },
  },
  {
    postal: "132",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "9", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "133",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "134",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "135",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "136",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "137",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0903",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "N Calfia Way",
      crossStreet1: "Carlo Ln.",
      crossStreet2: "Fishery Ln.",
    },
  },
  {
    postal: "138",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0903",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],

    streets: {
      autoFill: true,
      mainStreet: "Fishery Ln.",
      crossStreet1: "N Calfia Way",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "139",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0903",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],

    streets: {
      autoFill: true,
      mainStreet: "N Calfia Way",
      crossStreet1: "Carlo Ln.",
      crossStreet2: "Fishery Ln.",
    },
  },
  {
    postal: "140",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0933",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "141",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0233",
    fdRunOrder: ["2", "9", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "N Calafia Way": {
          crossStreet1: "Pine Tree Rd.",
          crossStreet2: "Carlo Ln.",
        },
        "Carlo Ln.": {
          crossStreet1: "N Calafia Way",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "142",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0233",
    fdRunOrder: ["2", "9", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "N Calafia Way",
      crossStreet1: "Pine Tree Rd.",
      crossStreet2: "Carlo Ln.",
    },
  },
  {
    postal: "143",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "144",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "145",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "146",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "147",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "2", "4", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "148",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "2", "4", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "149",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "2", "4", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Pine Tree Rd.",
      crossStreet1: "Cult Ln.",
      crossStreet2: "N Calafia Way",
    },
  },
  {
    postal: "150",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "11", "2", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Pine Tree Rd.",
      crossStreet1: "Fallen Tree Rd.",
      crossStreet2: "Cult Ln.",
    },
  },
  {
    postal: "151",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "11", "2", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Pine Tree Rd.",
      crossStreet1: "Fallen Tree Rd.",
      crossStreet2: "Cult Ln.",
    },
  },
  {
    postal: "152",
    fdDistrict: "03",
    policeDistrict: "SAHP",
    fireBox: "0307",
    fdRunOrder: ["3", "4", "11", "2", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SAHP",
      "BCSO",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Route 1",
      crossStreet1: "Route 1 MM05.00",
      crossStreet2: "Pine Tree Rd.",
    },
  },
  {
    postal: "153",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0307",
    fdRunOrder: ["3", "4", "11", "2", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "154",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0311",
    fdRunOrder: ["3", "4", "11", "2", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Submarine Ln.",
      crossStreet1: "Route 1 SB",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "155",
    fdDistrict: "03",
    policeDistrict: "SAHP",
    fireBox: "0309",
    fdRunOrder: ["3", "4", "11", "2", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SAHP",
      "BCSO",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Submarine Ln.": {
          crossStreet1: "Route 1 SB",
          crossStreet2: "Dead End",
        },
        "Route 1 SB": {
          crossStreet1: "Raton Pass",
          crossStreet2: "Route 1 MM05.00",
        },
        "Route 1 NB": {
          crossStreet1: "Submarine Ln.",
          crossStreet2: "Route 1 MM05.00",
        },
      },
    },
  },
  {
    postal: "156",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0313",
    fdRunOrder: ["3", "4", "11", "2", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Route 1",
      crossStreet1: "Raton Pass",
      crossStreet2: "Submarine Ln.",
    },
  },
  {
    postal: "157",
    fdDistrict: "03",
    policeDistrict: "SAHP",
    fireBox: "0313",
    fdRunOrder: ["3", "4", "11", "2", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SAHP",
      "BCSO",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Route 1",
      crossStreet1: "Raton Pass",
      crossStreet2: "Submarine Ln.",
    },
  },
  {
    postal: "158",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "11", "2", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Basin Dr.",
      crossStreet1: "Route 1 NB",
      crossStreet2: "Karin Dr.",
    },
  },
  {
    postal: "159",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "160",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Beaver Trail",
      crossStreet1: "Basin Dr.",
      crossStreet2: "Cassidy Trail",
    },
  },
  {
    postal: "161",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Karin Dr.": {
          crossStreet1: "Basin Dr.",
          crossStreet2: "Hanger Terrace",
        },
        "Basin Dr.": {
          crossStreet1: "Karin Dr.",
          crossStreet2: "N Calfia Way",
        },
      },
    },
  },
  {
    postal: "162",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Hanger Terrace",
      crossStreet1: "Karin Dr.",
      crossStreet2: "Pine Tree Rd.",
    },
  },
  {
    postal: "163",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Cult Ln.",
      crossStreet1: "Pine Tree Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "164",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Hanger Trail",
      crossStreet1: "Hanger Terrace",
      crossStreet2: "Ridgeline Loop Trail",
    },
  },
  {
    postal: "165",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Hanger Terrace",
      crossStreet1: "Karin Dr.",
      crossStreet2: "Hanger Trail",
    },
  },
  {
    postal: "166",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Hanger Terrace",
      crossStreet1: "Karin Dr.",
      crossStreet2: "Hanger Trail",
    },
  },
  {
    postal: "167",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Basin Dr.",
      crossStreet1: "Beaver Trail",
      crossStreet2: "N Calfia Way",
    },
  },
  {
    postal: "168",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Beaver Trail",
      crossStreet1: "Basin Dr.",
      crossStreet2: "Cassidy Trail",
    },
  },
  {
    postal: "169",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Hanger Trail",
      crossStreet1: "Hanger Terrace",
      crossStreet2: "Ridgeline Loop Trail",
    },
  },
  {
    postal: "170",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Basin Dr.",
      crossStreet1: "Beaver Trail",
      crossStreet2: "N Calfia Way",
    },
  },
  {
    postal: "171",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Hanger Trail",
      crossStreet1: "Hanger Terrace",
      crossStreet2: "Ridgeline Loop Trail",
    },
  },
  {
    postal: "172",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Ridgeline Loop Trail",
      crossStreet1: "Hanger Trail",
      crossStreet2: "Chilliad Trail",
    },
  },
  {
    postal: "173",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0250",
    fdRunOrder: ["2", "4", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Pine Tree Rd.",
      crossStreet1: "Cult Ln.",
      crossStreet2: "N Calfia Way",
    },
  },
  {
    postal: "174",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Basin Dr.",
      crossStreet1: "Beaver Trail",
      crossStreet2: "N Calfia Way",
    },
  },
  {
    postal: "175",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0250",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Pine Tree Rd.": {
          crossStreet1: "Cult Ln.",
          crossStreet2: "N Calfia Way",
        },
        "N Calfia Way": {
          crossStreet1: "Basin Dr.",
          crossStreet2: "Carlo Ln.",
        },
      },
    },
  },
  {
    postal: "176",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0250",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "N Calfia Way": {
          crossStreet1: "Cassidy Trail",
          crossStreet2: "Pine Tree Rd.",
        },
        "Basin Dr.": {
          crossStreet1: "Beaver Trail",
          crossStreet2: "N Calfia Way",
        },
      },
    },
  },
  {
    postal: "177",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0258",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Calafia Rd.",
      crossStreet1: "Cassidy Trail",
      crossStreet2: "Raton Pass",
    },
  },
  {
    postal: "178",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0258",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Calafia Rd.",
      crossStreet1: "Cassidy Trail",
      crossStreet2: "Joshua Rd.",
    },
  },
  {
    postal: "179",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0258",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Calafia Rd.",
      crossStreet1: "Raton Pass",
      crossStreet2: "Joshua Rd.",
    },
  },
  {
    postal: "180",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0205",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Stab City Loop",
      crossStreet1: "Calafia Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "181",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0258",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Calafia Rd.": {
          crossStreet1: "Raton Pass",
          crossStreet2: "Joshua Rd.",
        },
        "Rapids Edge Rd.": {
          crossStreet1: "Zancudo Relief Rd.",
          crossStreet2: "Calafia Rd.",
        },
      },
    },
  },
  {
    postal: "182",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "183",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Raton Pass",
      crossStreet1: "Raton Main",
      crossStreet2: "Calafia Rd.",
    },
  },
  {
    postal: "184",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "185",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Cassidy Trail",
      crossStreet1: "Raton Pass",
      crossStreet2: "Califia Rd.",
    },
  },
  {
    postal: "186",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "187",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Raton Pass",
      crossStreet1: "Cassidy Trail",
      crossStreet2: "Califia Rd.",
    },
  },
  {
    postal: "188",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Raton Pass",
      crossStreet1: "Cassidy Trail",
      crossStreet2: "Califia Rd.",
    },
  },
  {
    postal: "189",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cassidy Trail": {
          crossStreet1: "Raton Pass",
          crossStreet2: "Califia Rd.",
        },
        "Raton Pass": {
          crossStreet1: "Cassidy Trail",
          crossStreet2: "Califia Rd.",
        },
      },
    },
  },
  {
    postal: "190",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cassidy Trail": {
          crossStreet1: "Raton Pass",
          crossStreet2: "Califia Rd.",
        },
        "Raton Pass": {
          crossStreet1: "Cassidy Trail",
          crossStreet2: "Califia Rd.",
        },
      },
    },
  },
  {
    postal: "191",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Raton Pass",
      crossStreet1: "Cassidy Trail",
      crossStreet2: "Califia Rd.",
    },
  },
  {
    postal: "192",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Cassidy Trail",
      crossStreet1: "Raton Pass",
      crossStreet2: "Califia Rd.",
    },
  },
  {
    postal: "193",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "3", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cassidy Trail": {
          crossStreet1: "Raton Pass",
          crossStreet2: "Califia Rd.",
        },
        "Raton Pass": {
          crossStreet1: "Route 1 SB",
          crossStreet2: "Califia Rd.",
        },
      },
    },
  },
  {
    postal: "194",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0419",
    fdRunOrder: ["4", "3", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Raton Pass": {
          crossStreet1: "Route 1 SB",
          crossStreet2: "Cassidy Trail",
        },
        "Route 1 NB": {
          crossStreet1: "Route 1 MM04.00",
          crossStreet2: "Submarine Ln.",
        },
        "Route 1 SB": {
          crossStreet1: "Submarine Ln.",
          crossStreet2: "Route 1 MM04.00",
        },
      },
    },
  },
  {
    postal: "195",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0419",
    fdRunOrder: ["4", "3", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Route 1",
      crossStreet1: "Route 1 MM04.00",
      crossStreet2: "Raton Pass",
    },
  },
  {
    postal: "196",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0421",
    fdRunOrder: ["4", "3", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Route 1",
      crossStreet1: "Fort Zancudo Approach Rd.",
      crossStreet2: "Route 1 MM04.00",
    },
  },
  {
    postal: "197",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "3", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "198",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0414",
    fdRunOrder: ["4", "3", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 1": {
          crossStreet1: "Route 1 MM03.00",
          crossStreet2: "Route 1 MM04.00",
        },
        "Fort Zancudo Approach Rd.": {
          crossStreet1: "Route 1",
          crossStreet2: "Route 68",
        },
      },
    },
  },
  {
    postal: "199",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0413",
    fdRunOrder: ["4", "3", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Zancudo Relief Rd.",
      crossStreet1: "Route 1",
      crossStreet2: "Rapids Edge Rd.",
    },
  },
  {
    postal: "200",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4472",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "201",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4471",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "202",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4480",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "203",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4482",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "204",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4481",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "205",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4483",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "206",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4483",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "207",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4491",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "208",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4490",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "209",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4490",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "210",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4461",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "211",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4490",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "212",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4460",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "213",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4490",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "214",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4470",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "215",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0413",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 1": {
          crossStreet1: "Route 1 MM03.00",
          crossStreet2: "Zancudo Relief Rd.",
        },
        "Zancudo Relief Rd.": {
          crossStreet1: "Route 1",
          crossStreet2: "Rapids Edge Rd.",
        },
      },
    },
  },
  {
    postal: "216",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0491",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Route 1",
      crossStreet1: "Route 68",
      crossStreet2: "Route 1 MM03.00",
    },
  },
  {
    postal: "217",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0456",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "218",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0456",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Zancudo Relief Rd.": {
          crossStreet1: "Route 1",
          crossStreet2: "Rapids Edge Rd.",
        },
      },
    },
  },
  {
    postal: "219",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Zancudo Relief Rd.": {
          crossStreet1: "Route 1",
          crossStreet2: "Rapids Edge Rd.",
        },
        "Fort Zancudo Approach Rd.": {
          crossStreet1: "Fort Zancudo",
          crossStreet2: "Route 68",
        },
      },
    },
  },
  {
    postal: "220",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "221",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Zancudo Relief Rd.",
      crossStreet1: "Route 1",
      crossStreet2: "Rapids Edge Rd.",
    },
  },
  {
    postal: "222",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0258",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Zancudo Relief Rd.": {
          crossStreet1: "Route 1",
          crossStreet2: "Harmony Relief Rd.",
        },
        "Rapids Edge Rd.": {
          crossStreet1: "Zancudo Relief Rd.",
          crossStreet2: "Calafia Rd.",
        },
      },
    },
  },
  {
    postal: "223",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0258",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Rapids Edge Rd.",
      crossStreet1: "Zancudo Relief Rd.",
      crossStreet2: "Calafia Rd.",
    },
  },
  {
    postal: "224",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Harmony Relief Rd.",
      crossStreet1: "Zancudo Relief Rd.",
      crossStreet2: "Joshua Rd.",
    },
  },
  {
    postal: "225",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 68 Approach": {
          crossStreet1: "Route 68",
          crossStreet2: "Joshua Rd.",
        },
        "Route 68": {
          crossStreet1: "Mount Vinewood Dr.",
          crossStreet2: "Jobe Ln.",
        },
      },
    },
  },
  {
    postal: "226",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 68": {
          crossStreet1: "Route 68 Approach",
          crossStreet2: "Route 68 MM03.00",
        },
        "Route 68 Approach": {
          crossStreet1: "Route 68",
          crossStreet2: "Joshua Rd.",
        },
      },
    },
  },
  {
    postal: "227",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0202",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Harmony Ln.": {
          crossStreet1: "Cat-Tail Rd.",
          crossStreet2: "Route 68",
        },
        "Route 68": {
          crossStreet1: "Joshua Rd.",
          crossStreet2: "Route 68 Approach",
        },
        "Senora Rd": {
          crossStreet1: "Route 68",
          crossStreet2: "Harmony Ln.",
        },
      },
    },
  },
  {
    postal: "228",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Joshua Rd.",
      crossStreet1: "Route 68",
      crossStreet2: "Route 68 Approach",
    },
  },
  {
    postal: "229",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 68 Approach": {
          crossStreet1: "Route 68",
          crossStreet2: "Joshua Rd.",
        },
        "Joshua Rd.": {
          crossStreet1: "Route 68 Bypass",
          crossStreet2: "Route 68",
        },
      },
    },
  },
  {
    postal: "230",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Joshua Rd.",
      crossStreet1: "Route 68 Bypass",
      crossStreet2: "Route 68 Approach",
    },
  },
  {
    postal: "231",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joshua Rd.": {
          crossStreet1: "Route 68 Bypass",
          crossStreet2: "Harmony Relief Rd.",
        },
        "Route 68 Bypass": {
          crossStreet1: "Joshua Rd.",
          crossStreet2: "Harmony Loop Rd.",
        },
      },
    },
  },
  {
    postal: "232",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joshua Rd.": {
          crossStreet1: "Harmony Relief Rd.",
          crossStreet2: "Califia Rd.",
        },
        "Joshua Way": {
          crossStreet1: "Joshua Rd.",
          crossStreet2: "Joshua Pass",
        },
      },
    },
  },
  {
    postal: "233",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Joshua Rd.",
      crossStreet1: "Califia Rd.",
      crossStreet2: "Unk. Side St.",
    },
  },
  {
    postal: "234",
    fdDistrict: "02",
    policeDistrict: "SSPD",
    fireBox: "0204",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Marina Dr.",
      crossStreet1: "Unk. Side St.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "235",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0204",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Unk. Side St.": {
          crossStreet1: "Joshua Rd.",
          crossStreet2: "Marina Dr.",
        },
        "Marina Dr.": {
          crossStreet1: "Unk. Side St.",
          crossStreet2: "Unk. Side St.",
        },
        "Joshua Rd.": {
          crossStreet1: "Unk. Side St.",
          crossStreet2: "Unk. Side St.",
        },
      },
    },
  },
  {
    postal: "236",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Joshua Rd.",
      crossStreet1: "Unk. Side St.",
      crossStreet2: "Unk. Side St.",
    },
  },
  {
    postal: "237",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Joshua Way",
      crossStreet1: "Joshua Rd.",
      crossStreet2: "Joshua Pass",
    },
  },
  {
    postal: "238",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Route 68 Bypass",
      crossStreet1: "Joshua Rd.",
      crossStreet2: "Airfield Access Rd.",
    },
  },
  {
    postal: "239",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "240",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "241",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0202",
    fdRunOrder: ["2", "9", "4", "3", "1", "11", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Senora Rd.": {
          crossStreet1: "Route 68",
          crossStreet2: "Cat-Tail Rd.",
        },
        "Route 68": {
          crossStreet1: "Senora Rd.",
          crossStreet2: "Orbit's Folly Ln.",
        },
        "Harmony View": {
          crossStreet1: "Route 68",
          crossStreet2: "Harmony Ln.",
        },
        "Harmony Ln.": {
          crossStreet1: "Senora Rd.",
          crossStreet2: "Orbit's Folly Ln.",
        },
      },
    },
  },
  {
    postal: "242",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0208",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Orbit's Folly Ln.": {
          crossStreet1: "Route 68",
          crossStreet2: "Harmony Ln.",
        },
        "Route 68": {
          crossStreet1: "Orbit's Folly Ln.",
          crossStreet2: "Harmony Ln.",
        },
        "Harmony Ln.": {
          crossStreet1: "Orbit's Folly Ln.",
          crossStreet2: "Route 68",
        },
      },
    },
  },
  {
    postal: "243",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0216",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 68": {
          crossStreet1: "Harmony Ln.",
          crossStreet2: "Harmony Loop Rd.",
        },
        "Rebel Rd.": {
          crossStreet1: "Route 68",
          crossStreet2: "Cat-Tail Rd.",
        },
      },
    },
  },
  {
    postal: "244",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0208",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Route 68",
      crossStreet1: "Orbit's Folly Ln.",
      crossStreet2: "Rebel Rd.",
    },
  },
  {
    postal: "245",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "246",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "247",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0216",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Route 68",
      crossStreet1: "Rebel Rd.",
      crossStreet2: "Harmony Loop Rd.",
    },
  },
  {
    postal: "248",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Harmony Loop Rd.",
      crossStreet1: "Route 68 Bypass",
      crossStreet2: "Route 68",
    },
  },
  {
    postal: "249",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Harmony Loop Rd.",
      crossStreet1: "Route 68 Bypass",
      crossStreet2: "Route 68",
    },
  },
  {
    postal: "250",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 68 Bypass": {
          crossStreet1: "Harmony Loop Rd.",
          crossStreet2: "Route 68",
        },
        "Airfield Access Rd.": {
          crossStreet1: "Route 68 Bypass",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "251",
    fdDistrict: "02",
    policeDistrict: "SSPD",
    fireBox: "0203",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Joshua Rd.",
      crossStreet1: "Unk. Side St.",
      crossStreet2: "Unk. Side St.",
    },
  },
  {
    postal: "252",
    fdDistrict: "02",
    policeDistrict: "SSPD",
    fireBox: "0203",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Marina Dr.",
      crossStreet1: "Unk. Side St.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "253",
    fdDistrict: "02",
    policeDistrict: "SSPD",
    fireBox: "0203",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Marina Dr.",
      crossStreet1: "Unk. Side St.",
      crossStreet2: "Meringue Ln.",
    },
  },
  {
    postal: "254",
    fdDistrict: "02",
    policeDistrict: "SSPD",
    fireBox: "0203",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Joshua Rd.",
      crossStreet1: "Unk. Side St.",
      crossStreet2: "Algonquin Blvd.",
    },
  },
  {
    postal: "255",
    fdDistrict: "02",
    policeDistrict: "SSPD",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joshua Rd.": {
          crossStreet1: "Unk. Side St.",
          crossStreet2: "Joshua Pass",
        },
        "Joshua Pass": {
          crossStreet1: "Joshua Rd.",
          crossStreet2: "Joshua Way",
        },
      },
    },
  },
  {
    postal: "256",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joshua Pass": {
          crossStreet1: "Joshua Rd.",
          crossStreet2: "Joshua Way",
        },
        "Joshua Way": {
          crossStreet1: "Joshua Rd.",
          crossStreet2: "Panorama Dr.",
        },
      },
    },
  },
  {
    postal: "257",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2400",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "258",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 68 Bypass": {
          crossStreet1: "Airfield Access Rd.",
          crossStreet2: "Panorama Dr.",
        },
        "Harmony Loop Rd.": {
          crossStreet1: "Route 68 Bypass",
          crossStreet2: "Route 68",
        },
      },
    },
  },
  {
    postal: "259",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Harmony Loop Rd.",
      crossStreet1: "Route 68 Bypass",
      crossStreet2: "Route 68",
    },
  },
  {
    postal: "260",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Harmony Loop Rd.": {
          crossStreet1: "Route 68 Bypass",
          crossStreet2: "Route 68",
        },
        "Route 68": {
          crossStreet1: "Harmony Loop Rd.",
          crossStreet2: "Chancy Ln.",
        },
      },
    },
  },
  {
    postal: "261",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "262",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Route 68",
      crossStreet1: "Chancy Ln.",
      crossStreet2: "Route 68 MM04.00",
    },
  },
  {
    postal: "263",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Route 68",
      crossStreet1: "Chancy Ln.",
      crossStreet2: "Route 68 MM04.00",
    },
  },
  {
    postal: "264",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 68": {
          crossStreet1: "Chancy Ln.",
          crossStreet2: "Stinger Rd.",
        },
        "Route 68 Bypass": {
          crossStreet1: "Harmony Loop Rd.",
          crossStreet2: "Panorama Dr.",
        },
      },
    },
  },
  {
    postal: "265",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 68": {
          crossStreet1: "Chancy Ln.",
          crossStreet2: "Stinger Rd.",
        },
        "Route 68 Bypass": {
          crossStreet1: "Harmony Loop Rd.",
          crossStreet2: "Panorama Dr.",
        },
      },
    },
  },
  {
    postal: "266",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2400",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Airfield Access Rd.",
      crossStreet1: "Route 68 Bypass",
      crossStreet2: "Panorama Dr.",
    },
  },
  {
    postal: "267",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Airfield Access Rd.",
      crossStreet1: "Route 68 Bypass",
      crossStreet2: "Panorama Dr.",
    },
  },
  {
    postal: "268",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Joshua Way",
      crossStreet1: "Joshua Pass",
      crossStreet2: "Panorama Dr.",
    },
  },
  {
    postal: "269",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joshua Rd.": {
          crossStreet1: "Joshua Pass",
          crossStreet2: "Panorama Dr.",
        },
        "Algonquin Blvd.": {
          crossStreet1: "Joshua Rd.",
          crossStreet2: "Meringue Ln.",
        },
      },
    },
  },
  {
    postal: "270",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0202",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Marina Dr.",
      crossStreet1: "Meringue Ln.",
      crossStreet2: "Panorama Dr.",
    },
  },
  {
    postal: "271",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0202",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Meringue Ln.": {
          crossStreet1: "Marina Dr.",
          crossStreet2: "Algonquin Blvd.",
        },
        "Marina Dr.": {
          crossStreet1: "Meringue Ln.",
          crossStreet2: "Lesbos Ln.",
        },
        "Lesbos Ln.": {
          crossStreet1: "Marina Dr.",
          crossStreet2: "Algonquin Blvd.",
        },
        "Algonquin Blvd.": {
          crossStreet1: "Meringue Ln.",
          crossStreet2: "Lesbos Ln.",
        },
      },
    },
  },
  {
    postal: "272",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0202",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Lesbos Ln.": {
          crossStreet1: "Marina Dr.",
          crossStreet2: "Algonquin Blvd.",
        },
        "Marina Dr.": {
          crossStreet1: "Lesbos Ln.",
          crossStreet2: "Panorama Dr.",
        },
        "Panorama Dr.": {
          crossStreet1: "Marina Dr.",
          crossStreet2: "Algonquin Blvd.",
        },
        "Algonquin Blvd.": {
          crossStreet1: "Lesbos Ln.",
          crossStreet2: "Panorama Dr.",
        },
      },
    },
  },
  {
    postal: "273",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0202",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joshua Rd.": {
          crossStreet1: "Algonquin Blvd.",
          crossStreet2: "Panorama Dr.",
        },
        "Algonquin Blvd.": {
          crossStreet1: "Joshua Rd.",
          crossStreet2: "Lesbos Ln.",
        },
      },
    },
  },
  {
    postal: "274",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0202",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Algonquin Blvd.": {
          crossStreet1: "Lesbos Ln.",
          crossStreet2: "Panorama Dr.",
        },
        "Panorama Dr.": {
          crossStreet1: "Algonquin Blvd.",
          crossStreet2: "Zancudo Ave.",
        },
      },
    },
  },
  {
    postal: "275",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0202",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joshua Rd.": {
          crossStreet1: "Algonquin Blvd.",
          crossStreet2: "Panorama Dr.",
        },
        "Panorama Dr.": {
          crossStreet1: "Alhambra Dr.",
          crossStreet2: "Joshua Rd.",
        },
      },
    },
  },
  {
    postal: "276",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joshua Rd.": {
          crossStreet1: "Algonquin Blvd.",
          crossStreet2: "Panorama Dr.",
        },
        "Joshua Way": {
          crossStreet1: "Joshua Pass",
          crossStreet2: "Panorama Dr.",
        },
      },
    },
  },
  {
    postal: "277",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Panorama Dr.",
      crossStreet1: "Joshua Way",
      crossStreet2: "Cholla Rd.",
    },
  },
  {
    postal: "278",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Panorama Dr.": {
          crossStreet1: "Cholla Rd.",
          crossStreet2: "Stinger Rd.",
        },
        "Route 68 Bypass": {
          crossStreet1: "Harmony Loop Rd.",
          crossStreet2: "Panorama Dr.",
        },
      },
    },
  },
  {
    postal: "279",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Stinger Rd.": {
          crossStreet1: "Route 68",
          crossStreet2: "Panorama Dr.",
        },
        "Route 68": {
          crossStreet1: "Stinger Rd.",
          crossStreet2: "Panorama Dr.",
        },
        "Panorama Dr.": {
          crossStreet1: "Stinger Rd.",
          crossStreet2: "Route 68",
        },
      },
    },
  },
  {
    postal: "280",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0953",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Smoke Ln.",
      crossStreet1: "Panorama Dr.",
      crossStreet2: "Smoke Tree Rd.",
    },
  },
  {
    postal: "281",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0953",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
  },
  {
    postal: "282",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0953",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "E Joshua Way": {
          crossStreet1: "Panorama Dr.",
          crossStreet2: "Cat-Claw Ave.",
        },
        "E Joshua Rd.": {
          crossStreet1: "Panorama Dr.",
          crossStreet2: "Marina Dr.",
        },
      },
    },
  },
  {
    postal: "283",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Panorama Dr.": {
          crossStreet1: "Zancudo Ave.",
          crossStreet2: "Alhambra Dr.",
        },
        "Zancudo Ave.": {
          crossStreet1: "Panorama Dr.",
          crossStreet2: "Moutain View Dr.",
        },
        "Moutain View Dr.": {
          crossStreet1: "Zancudo Ave.",
          crossStreet2: "Alhambra Dr.",
        },
        "Alhambra Dr.": {
          crossStreet1: "Panorama Dr.",
          crossStreet2: "Moutain View Dr.",
        },
      },
    },
  },
  {
    postal: "284",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Lolita Ave.": {
          crossStreet1: "Algonquin Blvd.",
          crossStreet2: "Zancudo Ave.",
        },
        "Algonquin Blvd.": {
          crossStreet1: "Lolita Ave.",
          crossStreet2: "Mountain View Dr.",
        },
        "Moutain View Dr.": {
          crossStreet1: "Algonquin Blvd.",
          crossStreet2: "Zancudo Ave.",
        },
        "Zauncudo Ave.": {
          crossStreet1: "Lolita Ave.",
          crossStreet2: "Mountain View Dr.",
        },
      },
    },
  },
  {
    postal: "285",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Panorama Dr.": {
          crossStreet1: "Cholla Springs Ave.",
          crossStreet2: "Algonquin Blvd.",
        },
        "Cholla Springs Ave.": {
          crossStreet1: "Panorama Dr.",
          crossStreet2: "Mountain View Dr.",
        },
        "Mountain View Dr.": {
          crossStreet1: "Cholla Springs Ave.",
          crossStreet2: "Algonquin Blvd.",
        },
        "Algonquin Blvd.": {
          crossStreet1: "Panorama Dr.",
          crossStreet2: "Mountain View Dr.",
        },
      },
    },
  },
  {
    postal: "286",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Panorama Dr.": {
          crossStreet1: "Marina Dr.",
          crossStreet2: "Cholla Springs Ave.",
        },
        "Marina Dr.": {
          crossStreet1: "Panorama Dr.",
          crossStreet2: "Mountain View Dr.",
        },
        "Mountain View Dr.": {
          crossStreet1: "Marina Dr.",
          crossStreet2: "Cholla Springs Ave.",
        },
        "Cholla Springs Ave.": {
          crossStreet1: "Panorama Dr.",
          crossStreet2: "Mountain View Dr.",
        },
      },
    },
  },
  {
    postal: "287",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0912",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Marina Dr.",
      crossStreet1: "Lesbos Ln.",
      crossStreet2: "Mountain View Dr.",
    },
  },
  {
    postal: "288",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Marina Dr.",
      crossStreet1: "Panorama Dr.",
      crossStreet2: "Armadillo Ave.",
    },
  },
  {
    postal: "289",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Mountain View Dr.": {
          crossStreet1: "Marina Dr.",
          crossStreet2: "Cholla Springs Ave.",
        },
        "Marina Dr.": {
          crossStreet1: "Mountain View Dr.",
          crossStreet2: "Armadillo Ave.",
        },
        "Armadillo Ave.": {
          crossStreet1: "Marina Dr.",
          crossStreet2: "Cholla Springs Ave.",
        },
        "Cholla Springs Ave.": {
          crossStreet1: "Mountain View Dr.",
          crossStreet2: "Armadillo Ave.",
        },
      },
    },
  },
  {
    postal: "290",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Marina Dr.",
      crossStreet1: "Armadillo Ave.",
      crossStreet2: "Niland Ave.",
    },
  },
  {
    postal: "291",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Armadillo Ave.": {
          crossStreet1: "Marina Dr.",
          crossStreet2: "Cholla Springs Ave.",
        },
        "Marina Dr.": {
          crossStreet1: "Armadillo Ave.",
          crossStreet2: "Niland Ave.",
        },
        "Niland Ave.": {
          crossStreet1: "Marina Dr.",
          crossStreet2: "Cholla Springs Ave.",
        },
        "Cholla Springs Ave.": {
          crossStreet1: "Armadillo Ave.",
          crossStreet2: "Niland Ave.",
        },
      },
    },
  },
  {
    postal: "292",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Armadillo Ave.": {
          crossStreet1: "Cholla Springs Ave.",
          crossStreet2: "Algonquin Blvd.",
        },
        "Cholla Springs Ave.": {
          crossStreet1: "Armadillo Ave.",
          crossStreet2: "Niland Ave.",
        },
        "Niland Ave.": {
          crossStreet1: "Cholla Springs Ave.",
          crossStreet2: "Algonquin Blvd.",
        },
        "Algonquin Blvd.": {
          crossStreet1: "Armadillo Ave.",
          crossStreet2: "Niland Ave.",
        },
      },
    },
  },
  {
    postal: "293",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Armadillo Ave.": {
          crossStreet1: "Algonquin Blvd.",
          crossStreet2: "Zancudo Ave.",
        },
        "Algonquin Blvd.": {
          crossStreet1: "Armadillo Ave.",
          crossStreet2: "Niland Ave.",
        },
        "Niland Ave.": {
          crossStreet1: "Algonquin Blvd.",
          crossStreet2: "Zancudo Ave.",
        },
        "Zancudo Ave.": {
          crossStreet1: "Armadillo Ave.",
          crossStreet2: "Niland Ave.",
        },
      },
    },
  },
  {
    postal: "294",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Mountain View Dr.": {
          crossStreet1: "Zauncudo Ave.",
          crossStreet2: "Alhambra Dr.",
        },
        "Zauncudo Ave.": {
          crossStreet1: "Mountain View Dr.",
          crossStreet2: "Niland Ave.",
        },
        "Niland Ave.": {
          crossStreet1: "Zauncudo Ave.",
          crossStreet2: "Alhambra Dr.",
        },
        "Alhambra Dr.": {
          crossStreet1: "Mountain View Dr.",
          crossStreet2: "Niland Ave.",
        },
      },
    },
  },
  {
    postal: "295",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Niland Ave.": {
          crossStreet1: "Marina Dr.",
          crossStreet2: "Algonquin Blvd.",
        },
        "Marina Dr.": {
          crossStreet1: "Niland Ave.",
          crossStreet2: "Algonquin Blvd.",
        },
        "Algonquin Blvd.": {
          crossStreet1: "Niland Ave.",
          crossStreet2: "Marina Dr.",
        },
      },
    },
  },
  {
    postal: "296",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Niland Ave.": {
          crossStreet1: "Algonquin Blvd.",
          crossStreet2: "Zauncudo Ave.",
        },
        "Algonquin Blvd.": {
          crossStreet1: "Niland Ave.",
          crossStreet2: "Marina Dr.",
        },
        "Marina Dr.": {
          crossStreet1: "Algonquin Blvd.",
          crossStreet2: "Zauncudo Ave.",
        },
        "Zauncudo Ave.": {
          crossStreet1: "Niland Ave.",
          crossStreet2: "Marina Dr.",
        },
      },
    },
  },
  {
    postal: "297",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Niland Ave.": {
          crossStreet1: "Zancudo Ave.",
          crossStreet2: "Alhambra Dr.",
        },
        "Zancudo Ave.": {
          crossStreet1: "Niland Ave.",
          crossStreet2: "Marina Dr.",
        },
        "Marina Dr.": {
          crossStreet1: "Zancudo Ave.",
          crossStreet2: "Alhambra Dr.",
        },
        "Alhambra Dr.": {
          crossStreet1: "Niland Ave.",
          crossStreet2: "Marina Dr.",
        },
      },
    },
  },
  {
    postal: "298",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0911",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Marina Dr.",
      crossStreet1: "Algonquin Blvd.",
      crossStreet2: "Niland Ave.",
    },
  },
  {
    postal: "299",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0910",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Zancudo Ave.": {
          crossStreet1: "Marina Dr.",
          crossStreet2: "Dead End",
        },
        "E Joshua Rd.": {
          crossStreet1: "Marina Dr.",
          crossStreet2: "Seaview Rd.",
        },
      },
    },
  },
  {
    postal: "300",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "E Joshua Rd.": {
          crossStreet1: "Panorama Dr.",
          crossStreet2: "Marina Dr.",
        },
        "Marina Dr.": {
          crossStreet1: "E Joshua Rd.",
          crossStreet2: "E Joshua Way",
        },
        "E Joshua Way": {
          crossStreet1: "Panorama Dr.",
          crossStreet2: "Marina Dr.",
        },
      },
    },
  },
  {
    postal: "301",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Cat-Claw Ave.",
      crossStreet1: "Marina Dr.",
      crossStreet2: "Smoke Tree Rd.",
    },
  },
  {
    postal: "302",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Nowhere Rd.",
      crossStreet1: "Smoke Tree Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "303",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Nowhere Rd.",
      crossStreet1: "Smoke Tree Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "304",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cat-Claw Ave.": {
          crossStreet1: "Smoke Tree Rd.",
          crossStreet2: "Marina Dr.",
        },
        "Smoke Tree Rd.": {
          crossStreet1: "Cat-Claw Ave.",
          crossStreet2: "Smoke Ln.",
        },
      },
    },
  },
  {
    postal: "305",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cat-Claw Ave.": {
          crossStreet1: "Route 68",
          crossStreet2: "Smoke Tree Rd.",
        },
        "Yucca Rd.": {
          crossStreet1: "Smoke Tree Rd.",
          crossStreet2: "Yucca Trail Ln.",
        },
      },
    },
  },
  {
    postal: "306",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 68": {
          crossStreet1: "Cat-Claw Ave.",
          crossStreet2: "Route 13 Exit",
        },
        "Route 13 SB": {
          crossStreet1: "Route 13 MM03.00",
          crossStreet2: "Chancy Ln.",
        },
        "Route 13 NB": {
          crossStreet1: "Route 13 MM03.00",
          crossStreet2: "Route 13 MM02.00",
        },
      },
    },
  },
  {
    postal: "307",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Yucca Rd.": {
          crossStreet1: "Smoke Tree Rd.",
          crossStreet2: "Yucca Trail Ln.",
        },
        "Route 13": {
          crossStreet1: "Route 13 MM03.00",
          crossStreet2: "Route 13 MM02.00",
        },
      },
    },
  },
  {
    postal: "308",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Yucca Rd.": {
          crossStreet1: "Smoke Tree Rd.",
          crossStreet2: "Yucca Trail Ln.",
        },
        "Route 13": {
          crossStreet1: "Route 13 MM03.00",
          crossStreet2: "Route 13 MM02.00",
        },
      },
    },
  },
  {
    postal: "309",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Smoke Tree Rd.",
      crossStreet1: "Yucca Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "310",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Yucca Loop Trail",
      crossStreet1: "Cat-Claw Trail",
      crossStreet2: "Yucca Trail",
    },
  },
  {
    postal: "311",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "E Joshua Rd.": {
          crossStreet1: "Marina Dr.",
          crossStreet2: "Seaview Rd.",
        },
        "Cat-Claw Ave.": {
          crossStreet1: "Marina Dr.",
          crossStreet2: "Route 13",
        },
      },
    },
  },
  {
    postal: "312",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Yucca Loop Trail",
      crossStreet1: "Cat-Claw Trail",
      crossStreet2: "Yucca Trail",
    },
  },
  {
    postal: "313",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 13": {
          crossStreet1: "Route 13 MM03.00",
          crossStreet2: "Route 13 MM02.00",
        },
        "Yucca Rd.": {
          crossStreet1: "Yucca Trail Ln.",
          crossStreet2: "U-Tool Pking Lot",
        },
      },
    },
  },
  {
    postal: "314",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 13": {
          crossStreet1: "Route 13 MM03.00",
          crossStreet2: "Route 13 MM02.00",
        },
        "Cat-Claw Ave.": {
          crossStreet1: "Marina Dr.",
          crossStreet2: "Route 13",
        },
      },
    },
  },
  {
    postal: "315",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Cat-Claw Ave.",
      crossStreet1: "Marina Dr.",
      crossStreet2: "Route 13",
    },
  },
  {
    postal: "316",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Cat-Claw Ave.",
      crossStreet1: "Marina Dr.",
      crossStreet2: "Route 13",
    },
  },
  {
    postal: "317",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "E Joshua Rd.",
      crossStreet1: "Marina Dr.",
      crossStreet2: "Seaview Rd.",
    },
  },
  {
    postal: "318",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Pinto Ln.",
      crossStreet1: "E Joshua Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "319",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "E Joshua Rd.": {
          crossStreet1: "Seaview Rd.",
          crossStreet2: "Route 13 SB",
        },
        "Pinto Ln.": {
          crossStreet1: "E Joshua Rd.",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "320",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0935",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 13": {
          crossStreet1: "Union Rd.",
          crossStreet2: "Route 13 MM02.00",
        },
        "Chianski Passage": {
          crossStreet1: "Union Rd.",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "321",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chianski Passage",
      crossStreet1: "Union Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "322",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chianski Passage",
      crossStreet1: "Union Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "323",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 13": {
          crossStreet1: "Route 13 MM03.00",
          crossStreet2: "Route 13 MM02.00",
        },
        "Chianski Passage": {
          crossStreet1: "Union Rd.",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "324",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chianski Passage",
      crossStreet1: "Union Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "325",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chianski Passage",
      crossStreet1: "Union Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "326",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chianski Passage",
      crossStreet1: "Union Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "327",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chianski Passage",
      crossStreet1: "Union Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "328",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chianski Passage",
      crossStreet1: "Union Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "329",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chianski Passage",
      crossStreet1: "Union Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "330",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Quarry Access Rd.",
      crossStreet1: "Senora Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "331",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Quarry Access Rd.",
      crossStreet1: "Senora Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "332",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Senora Way",
      crossStreet1: "Windmill Access Rd.",
      crossStreet2: "Dynamite Approach Rd.",
    },
  },
  {
    postal: "333",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Quarry Access Rd.",
      crossStreet1: "Senora Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "334",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Quarry Access Rd.": {
          crossStreet1: "Senora Rd.",
          crossStreet2: "Dead End",
        },
        "Senora Way": {
          crossStreet1: "Route 13",
          crossStreet2: "Dynomite Approach Rd.",
        },
      },
    },
  },
  {
    postal: "335",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Dynomite Approach Rd.": {
          crossStreet1: "Senora View",
          crossStreet2: "Senora Way",
        },
        "Senora Way": {
          crossStreet1: "Windmill Access Rd.",
          crossStreet2: "Quarry Access Rd.",
        },
      },
    },
  },
  {
    postal: "336",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Senora Way",
      crossStreet1: "Windmill Access Rd.",
      crossStreet2: "Dynamite Approach Rd.",
    },
  },
  {
    postal: "337",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Windmill Access Rd.": {
          crossStreet1: "East View Rd.",
          crossStreet2: "Senora Way",
        },
        "Senora Way": {
          crossStreet1: "Dynamite Approach Rd.",
          crossStreet2: "Palmer Taylor Power Station",
        },
      },
    },
  },
  {
    postal: "338",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0932",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Senora Way",
      crossStreet1: "Windmill Access Rd.",
      crossStreet2: "Palmer Taylor Power Station",
    },
  },
  {
    postal: "339",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0940",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Senora Way": {
          crossStreet1: "Windmill Access Rd.",
          crossStreet2: "Dynamite Approach Rd.",
        },
        "Power Station Access Rd.": {
          crossStreet1: "Senora Way",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "340",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0940",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Power Station Access Rd.",
      crossStreet1: "Senora Way",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "341",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Power Station Access Rd.",
      crossStreet1: "Senora Way",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "342",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0940",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Power Station Access Rd.",
      crossStreet1: "Senora Way",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "343",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0940",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Power Station Access Rd.",
      crossStreet1: "Senora Way",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "344",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0940",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Power Station Access Rd.",
      crossStreet1: "Senora Way",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "345",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0932",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Senora Way": {
          crossStreet1: "Route 15",
          crossStreet2: "Windmill Access Rd.",
        },
        "Route 15": {
          crossStreet1: "Route 15 MM03.00",
          crossStreet2: "Route 15 MM02.00",
        },
      },
    },
  },
  {
    postal: "346",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0932",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Windmill Access Rd.",
      crossStreet1: "Windmill View",
      crossStreet2: "Senora Way",
    },
  },
  {
    postal: "347",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0932",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Windmill Access Rd.",
      crossStreet1: "Windmill View",
      crossStreet2: "Senora Way",
    },
  },
  {
    postal: "348",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0932",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Windmill Access Rd.",
      crossStreet1: "Windmill View",
      crossStreet2: "Senora Way",
    },
  },
  {
    postal: "349",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Windmill Access Rd.",
      crossStreet1: "Windmill View",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "350",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 15": {
          crossStreet1: "Route 13",
          crossStreet2: "Route 15 x Senora Way",
        },
      },
    },
  },
  {
    postal: "351",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Windmill Access Rd.",
      crossStreet1: "Windmill View",
      crossStreet2: "East View Rd.",
    },
  },
  {
    postal: "352",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 13 SB": {
          crossStreet1: "Chancy Ln.",
          crossStreet2: "Route 68 Exit",
        },
        "Route 13 NB": {
          crossStreet1: "Interstate 1 MM02.00",
          crossStreet2: "Route 68 Exit",
        },
        "Route 15 SB": {
          crossStreet1: "Route 13",
          crossStreet2: "Route 15 MM03.00",
        },
        "Route 15 NB": {
          crossStreet1: "Route 15 MM03.00",
          crossStreet2: "Route 68 Exit",
        },
      },
    },
  },
  {
    postal: "353",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Windmill View",
      crossStreet1: "Windmill Access Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "354",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "East View Rd.": {
          crossStreet1: "Windmill Access Rd.",
          crossStreet2: "Dead End",
        },
        "Windmill Access Rd.": {
          crossStreet1: "East View Rd.",
          crossStreet2: "Senora Way",
        },
      },
    },
  },
  {
    postal: "355",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0933",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Windmill Access Rd.",
      crossStreet1: "East View Rd.",
      crossStreet2: "Senora Way",
    },
  },
  {
    postal: "356",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0933",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Senora View",
      crossStreet1: "Dynanite Approach Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "357",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Windmill Access Rd.",
      crossStreet1: "East View Rd.",
      crossStreet2: "Senora Way",
    },
  },
  {
    postal: "358",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Windmill Access Rd.": {
          crossStreet1: "East View Rd.",
          crossStreet2: "Senora Way",
        },
        "Route 15 NB": {
          crossStreet1: "Route 15 MM03.00",
          crossStreet2: "Route 68 Exit",
        },
        "Route 13 NB": {
          crossStreet1: "Interstate 1 MM02.00",
          crossStreet2: "Route 68 Exit",
        },
      },
    },
  },
  {
    postal: "359",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 13 NB": {
          crossStreet1: "Interstate 1 MM02.00",
          crossStreet2: "Route 68 Exit",
        },
        "Route 15 NB": {
          crossStreet1: "Route 15 MM03.00",
          crossStreet2: "Route 68 Exit",
        },
        "Route 13 SB": {
          crossStreet1: "Route 13 MM03.00",
          crossStreet2: "Route 68 Exit",
        },
        "Route 15 SB": {
          crossStreet1: "Route 15 MM03.00",
          crossStreet2: "Route 68 Exit",
        },
      },
    },
  },
  {
    postal: "360",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0220",
    fdRunOrder: ["2", "9", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Boilingbroke Approach Rd.",
      crossStreet1: "Boilingbroke Loop",
      crossStreet2: "Route 68",
    },
  },
  {
    postal: "361",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2500",
    fdRunOrder: ["2", "9", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Route 68",
      crossStreet1: "Route 68 MM04.00",
      crossStreet2: "Panorama Dr.",
    },
  },
  {
    postal: "362",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0220",
    fdRunOrder: ["2", "9", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Boilingbroke Approach Rd.",
      crossStreet1: "Boilingbroke Loop",
      crossStreet2: "Route 68",
    },
  },
  {
    postal: "363",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0220",
    fdRunOrder: ["2", "9", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Route 68",
      crossStreet1: "Route 68 MM04.00",
      crossStreet2: "Panorama Dr.",
    },
  },
  {
    postal: "364",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2500",
    fdRunOrder: ["2", "9", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Boilingbroke Loop",
      crossStreet1: "Boilingbroke Approach Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "365",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2500",
    fdRunOrder: ["2", "9", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Boilingbroke Loop",
      crossStreet1: "Boilingbroke Approach Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "366",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2500",
    fdRunOrder: ["2", "9", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Boilingbroke Loop",
      crossStreet1: "Boilingbroke Approach Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "367",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2500",
    fdRunOrder: ["2", "9", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Star Ln.": {
          crossStreet1: "Chancy Ln.",
          crossStreet2: "Dead End",
        },
        "Chancy Ln.": {
          crossStreet1: "Redwood Approach",
          crossStreet2: "Roadrunner Rd.",
        },
      },
    },
  },
  {
    postal: "368",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2500",
    fdRunOrder: ["2", "9", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chancy Ln.",
      crossStreet1: "Star Ln.",
      crossStreet2: "Roadrunner Rd.",
    },
  },
  {
    postal: "369",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0214",
    fdRunOrder: ["2", "9", "4", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Roadrunner Rd.",
      crossStreet1: "Senora Rd.",
      crossStreet2: "Star Ln.",
    },
  },
  {
    postal: "370",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0214",
    fdRunOrder: ["2", "9", "4", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Redwood Access Rd.",
      crossStreet1: "Senora Rd.",
      crossStreet2: "Redwood Approach",
    },
  },
  {
    postal: "371",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0213",
    fdRunOrder: ["2", "9", "4", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Redwood Access Rd.",
      crossStreet1: "Senora Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "372",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0217",
    fdRunOrder: ["2", "9", "4", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Rebel Rd.",
      crossStreet1: "Cat-Tail Rd.",
      crossStreet2: "Route 68",
    },
  },
  {
    postal: "373",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0207",
    fdRunOrder: ["2", "9", "4", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Orbits Folly Ln.": {
          crossStreet1: "Cat-Tail Rd.",
          crossStreet2: "Harmony Ln.",
        },
        "Cat-Tail Rd.": {
          crossStreet1: "Orbits Folly Ln.",
          crossStreet2: "Senora Rd.",
        },
      },
    },
  },
  {
    postal: "374",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "9", "4", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Harmony Ln.",
      crossStreet1: "Baytree Canyon Rd.",
      crossStreet2: "Cat-Tail Rd.",
    },
  },
  {
    postal: "375",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "9", "4", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Harmony Ln.",
      crossStreet1: "Baytree Canyon Rd.",
      crossStreet2: "Cat-Tail Rd.",
    },
  },
  {
    postal: "376",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Jobe Ln.",
      crossStreet1: "Galileo Bybass",
      crossStreet2: "Route 68",
    },
  },
  {
    postal: "377",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 68": {
          crossStreet1: "Mt. Vinewood Dr.",
          crossStreet2: "Pedro Ln.",
        },
        "Pedro Ln.": {
          crossStreet1: "Route 68",
          crossStreet2: "Jobe Ln.",
        },
        "Jobe Ln.": {
          crossStreet1: "Mt. Vinewood Dr.",
          crossStreet2: "Pedro Ln.",
        },
      },
    },
  },
  {
    postal: "378",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Route 68": {
          crossStreet1: "Mt. Vinewood Dr.",
          crossStreet2: "Pedro Ln.",
        },
        "Harmony Relief Rd.": {
          crossStreet1: "Route 68",
          crossStreet2: "Joshua Rd.",
        },
      },
    },
  },
  {
    postal: "379",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Mt. Vinewood Dr.": {
          crossStreet1: "Lago Pass",
          crossStreet2: "Route 68",
        },
        "Route 68": {
          crossStreet1: "Route 68 MM02.00",
          crossStreet2: "Pedro Ln.",
        },
      },
    },
  },
  {
    postal: "380",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Pedro Ln.": {
          crossStreet1: "Jobe Ln.",
          crossStreet2: "Dead End",
        },
        "Jobe Ln.": {
          crossStreet1: "Jobe Ln.",
          crossStreet2: "Galileo Bybass",
        },
        "Galileo Bybass": {
          crossStreet1: "Baytree Canyon Rd.",
          crossStreet2: "Jobe Ln.",
        },
      },
    },
  },
  {
    postal: "381",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      mainStreet: "Galileo Bybass",
      crossStreet1: "Jobe Ln.",
      crossStreet2: "Baytree Canyon Rd.",
    },
  },
  {
    postal: "382",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Harmony Ln.": {
          crossStreet1: "Baytree Canyon Rd.",
          crossStreet2: "Cat-Tail Rd.",
        },
        "Baytree Canyon Rd.": {
          crossStreet1: "Galileo Bybass",
          crossStreet2: "Harmony Ln.",
        },
      },
    },
  },
  {
    postal: "383",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      mainStreet: "Galileo Bybass",
      crossStreet1: "Jobe Ln.",
      crossStreet2: "Baytree Canyon Rd.",
    },
  },
  {
    postal: "384",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      mainStreet: "Galileo Rd.",
      crossStreet1: "Mt. Vinewood Dr.",
      crossStreet2: "Baytree Canyon Rd.",
    },
  },
  {
    postal: "385",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "1", "9", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      mainStreet: "Galileo Trails",
      crossStreet1: "Observatory Approach",
      crossStreet2: "E. Galileo Ave.",
    },
  },
  {
    postal: "386",
    fdDistrict: "01",
    policeDistrict: "BCSO",
    fireBox: "0128",
    fdRunOrder: ["1", "2", "8", "9", "10", "4", "6", "7", "3", "5", "11"],
    policeRunOrder: [
      "LSPD",
      "LCSO",
      "SAHP",
      "BCSO",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
    ],
    streets: {
      availableRoads: {
        "Galileo Pass": {
          crossStreet1: "E. Galileo Ave.",
          crossStreet2: "Observatory Approach",
        },
        "Galileo Trails": {
          crossStreet1: "Observatory Approach",
          crossStreet2: "E. Galileo Ave.",
        },
      },
    },
  },
  {
    postal: "387",
    fdDistrict: "01",
    policeDistrict: "BCSO",
    fireBox: "0128",
    fdRunOrder: ["1", "2", "8", "9", "10", "4", "6", "7", "3", "5", "11"],
    policeRunOrder: [
      "LSPD",
      "LCSO",
      "SAHP",
      "BCSO",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Observatory Approach",
      crossStreet1: "Galileo Pass",
      crossStreet2: "E. Galileo Ave.",
    },
  },
  {
    postal: "388",
    fdDistrict: "01",
    policeDistrict: "BCSO",
    fireBox: "0128",
    fdRunOrder: ["1", "2", "8", "9", "10", "4", "6", "7", "3", "5", "11"],
    policeRunOrder: [
      "LSPD",
      "LCSO",
      "SAHP",
      "BCSO",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Observatory Approach",
      crossStreet1: "Galileo Pass",
      crossStreet2: "E. Galileo Ave.",
    },
  },
  {
    postal: "389",
    fdDistrict: "01",
    policeDistrict: "BCSO",
    fireBox: "0128",
    fdRunOrder: ["1", "2", "8", "9", "10", "4", "6", "7", "3", "5", "11"],
    policeRunOrder: [
      "LSPD",
      "LCSO",
      "SAHP",
      "BCSO",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Observatory Approach",
      crossStreet1: "Galileo Pass",
      crossStreet2: "E. Galileo Ave.",
    },
  },
  {
    postal: "390",
    fdDistrict: "01",
    policeDistrict: "LCSO",
    fireBox: "0128",
    fdRunOrder: ["1", "2", "4", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "E. Galileo Ave.": {
          crossStreet1: "Mt. Vinewood Dr.",
          crossStreet2: "Observatory Approach",
        },
        "Mt. Vinewood Dr.": {
          crossStreet1: "Marlowe Dr.",
          crossStreet2: "Galileo Rd.",
        },
      },
    },
  },
  {
    postal: "391",
    fdDistrict: "01",
    policeDistrict: "LCSO",
    fireBox: "1513",
    fdRunOrder: ["1", "2", "4", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Marlowe Dr.",
      crossStreet1: "N. Sheldon Ave.",
      crossStreet2: "Route 11",
    },
  },
  {
    postal: "392",
    fdDistrict: "01",
    policeDistrict: "LCSO",
    fireBox: "1513",
    fdRunOrder: ["1", "2", "4", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Marlowe Dr.",
      crossStreet1: "N. Sheldon Ave.",
      crossStreet2: "Route 11",
    },
  },
  {
    postal: "393",
    fdDistrict: "01",
    policeDistrict: "LCSO",
    fireBox: "1513",
    fdRunOrder: ["1", "2", "4", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marlowe Dr.": {
          crossStreet1: "Route 11",
          crossStreet2: "N. Sheldon Ave.",
        },
        "Route 11": {
          crossStreet1: "Banham Canyon Dr.",
          crossStreet2: "Route 11 MM01.00",
        },
      },
    },
  },
  {
    postal: "394",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0453",
    fdRunOrder: ["4", "2", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Mt. Vinewood Dr.",
      crossStreet1: "E. Galileo Ave.",
      crossStreet2: "Galileo Rd.",
    },
  },
  {
    postal: "395",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0453",
    fdRunOrder: ["4", "2", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "396",
    fdDistrict: "02",
    policeDistrict: "LCSO",
    fireBox: "0252",
    fdRunOrder: ["2", "4", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Mt. Vinewood Dr.": {
          crossStreet1: "Galileo Rd.",
          crossStreet2: "E. Galileo Ave.",
        },
        "Galileo Rd.": {
          crossStreet1: "Mt. Vinewood Dr.",
          crossStreet2: "Banham Canyon Dr.",
        },
      },
    },
  },
  {
    postal: "397",
    fdDistrict: "02",
    policeDistrict: "LCSO",
    fireBox: "0252",
    fdRunOrder: ["2", "4", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Mt. Vinewood Dr.": {
          crossStreet1: "Galileo Rd.",
          crossStreet2: "Zancudo Baranca",
        },
        "Galileo Rd.": {
          crossStreet1: "Mt. Vinewood Dr.",
          crossStreet2: "Banham Canyon Dr.",
        },
      },
    },
  },
  {
    postal: "398",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0457",
    fdRunOrder: ["4", "2", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Zancudo Baranca": {
          crossStreet1: "Tongva Dr.",
          crossStreet2: "Mt. Vinewood Dr.",
        },
        "Mt. Vinewood Dr.": {
          crossStreet1: "Zancudo Baranca",
          crossStreet2: "Lago Pass",
        },
      },
    },
  },
  {
    postal: "399",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0457",
    fdRunOrder: ["4", "2", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Zancudo Baranca",
      crossStreet1: "Tongva Dr.",
      crossStreet2: "Mt. Vinewood Dr.",
    },
  },
  {
    postal: "400",
    fdDistrict: "02",
    policeDistrict: "LCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Galileo Rd.": {
          crossStreet1: "Mt. Vinewood Dr.",
          crossStreet2: "Banham Canyon Dr.",
        },
        "Lago Pass": {
          crossStreet1: "Mt. Vinewood Dr.",
          crossStreet2: "Galileo Rd.",
        },
      },
    },
  },
  {
    postal: "401",
    fdDistrict: "02",
    policeDistrict: "LCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Mt. Vinewood Dr.": {
          crossStreet1: "Zancudo Baranca",
          crossStreet2: "Lago Pass",
        },
        "Lago Pass": {
          crossStreet1: "Mt. Vinewood Dr.",
          crossStreet2: "Galileo Rd.",
        },
      },
    },
  },
  {
    postal: "402",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0457",
    fdRunOrder: ["4", "2", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["BCSO", "SAHP", "LCSO", "LSPD", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Lago Pass": {
          crossStreet1: "Route 68",
          crossStreet2: "Mt. Vinewood Dr.",
        },
        "Mt. Vinewood Dr.": {
          crossStreet1: "Lago Pass",
          crossStreet2: "Jobe Ln.",
        },
      },
    },
  },
  {
    postal: "403",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0457",
    fdRunOrder: ["4", "2", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["BCSO", "SAHP", "LCSO", "LSPD", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Route 68": {
          crossStreet1: "Fort Zancudo Approach Rd.",
          crossStreet2: "Route 68 MM02.00",
        },
        "Lago Pass": {
          crossStreet1: "Route 68",
          crossStreet2: "Mt. Vinewood Dr.",
        },
      },
    },
  },
  {
    postal: "404",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0457",
    fdRunOrder: ["4", "2", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["BCSO", "SAHP", "LCSO", "LSPD", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Route 68": {
          crossStreet1: "Tongva Dr.",
          crossStreet2: "Lago Pass",
        },
        "Fort Zancudo Approach Rd.": {
          crossStreet1: "Route 68",
          crossStreet2: "Route 1 NB",
        },
      },
    },
  },
  {
    postal: "405",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0457",
    fdRunOrder: ["4", "2", "1", "9", "3", "11", "10", "8", "7", "6", "5"],
    policeRunOrder: ["BCSO", "SAHP", "LCSO", "LSPD", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Tongva Dr.": {
          crossStreet1: "Route 68",
          crossStreet2: "Zancudo Baranca",
        },
        "Zancudo Baranca": {
          crossStreet1: "Tongva Dr.",
          crossStreet2: "Mt. Vinewood Dr.",
        },
      },
    },
  },
  {
    postal: "406",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0410",
    fdRunOrder: ["4", "2", "1", "9", "3", "11", "10", "8", "7", "6", "5"],
    policeRunOrder: ["LCSO", "SAHP", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Zancudo Rd.": {
          crossStreet1: "Route 68",
          crossStreet2: "Zancudo Baranca",
        },
        "Zancudo Baranca": {
          crossStreet1: "Zancudo Rd.",
          crossStreet2: "Tongva Dr.",
        },
        "Route 11": {
          crossStreet1: "Zancudo Baranca",
          crossStreet2: "Route 11 MM01.00",
        },
      },
    },
  },
  {
    postal: "407",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0456",
    fdRunOrder: ["4", "2", "1", "9", "3", "11", "10", "8", "7", "6", "5"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "LCSO", "PBPD", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Route 68": {
          crossStreet1: "Route 68 MM01.00",
          crossStreet2: "Tongva Dr.",
        },
        "Zancudo Rd.": {
          crossStreet1: "Route 68",
          crossStreet2: "Zancudo Baranca",
        },
      },
    },
  },
  {
    postal: "408",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0410",
    fdRunOrder: ["4", "2", "1", "9", "3", "11", "10", "8", "7", "6", "5"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "LCSO", "PBPD", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Buen Vino Rd.": {
          crossStreet1: "Route 68",
          crossStreet2: "Banham Canyon Dr.",
        },
        "Zancudo Rd.": {
          crossStreet1: "Route 68",
          crossStreet2: "Zancudo Baranca",
        },
      },
    },
  },
  {
    postal: "409",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0410",
    fdRunOrder: ["4", "2", "1", "9", "3", "11", "10", "8", "7", "6", "5"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "LCSO", "PBPD", "LSPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buen Vino Rd.",
      crossStreet1: "Route 68",
      crossStreet2: "Banham Canyon Dr.",
    },
  },
  {
    postal: "410",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0410",
    fdRunOrder: ["4", "2", "1", "9", "3", "11", "10", "8", "7", "6", "5"],
    policeRunOrder: ["LCSO", "SAHP", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buen Vino Rd.",
      crossStreet1: "Route 68",
      crossStreet2: "Banham Canyon Dr.",
    },
  },
  {
    postal: "411",
    fdDistrict: "04",
    policeDistrict: "SAHP",
    fireBox: "0454",
    fdRunOrder: ["4", "2", "1", "8", "10", "9", "3", "11", "7", "6", "5"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Route 11",
      crossStreet1: "Zancudo Baranca",
      crossStreet2: "Route 11 MM01.00",
    },
  },
  {
    postal: "412",
    fdDistrict: "04",
    policeDistrict: "SAHP",
    fireBox: "0454",
    fdRunOrder: ["4", "1", "2", "8", "10", "9", "3", "11", "7", "6", "5"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Route 11",
      crossStreet1: "Route 11 MM01.00",
      crossStreet2: "Marlowe Dr.",
    },
  },
  {
    postal: "413",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0454",
    fdRunOrder: ["4", "2", "8", "1", "10", "9", "3", "11", "7", "6", "5"],
    policeRunOrder: ["LCSO", "SAHP", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "414",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0410",
    fdRunOrder: ["4", "2", "8", "1", "10", "9", "3", "11", "7", "6", "5"],
    policeRunOrder: ["LCSO", "SAHP", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buen Vino Rd.",
      crossStreet1: "Route 68",
      crossStreet2: "Banham Canyon Dr.",
    },
  },
  {
    postal: "415",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0454",
    fdRunOrder: ["4", "2", "8", "1", "10", "9", "3", "11", "7", "6", "5"],
    policeRunOrder: ["LCSO", "SAHP", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buen Vino Rd.",
      crossStreet1: "Route 68",
      crossStreet2: "Banham Canyon Dr.",
    },
  },
  {
    postal: "416",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0410",
    fdRunOrder: ["4", "2", "3", "1", "9", "8", "10", "11", "7", "6", "5"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Route 68": {
          crossStreet1: "Route 1",
          crossStreet2: "Route 68 MM01.00",
        },
        "Buen Vino Rd.": {
          crossStreet1: "Route 68",
          crossStreet2: "Banham Canyon Dr.",
        },
      },
    },
  },
  {
    postal: "417",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0454",
    fdRunOrder: ["4", "2", "8", "1", "10", "9", "3", "11", "7", "6", "5"],
    policeRunOrder: ["LCSO", "SAHP", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buen Vino Rd.",
      crossStreet1: "Route 68",
      crossStreet2: "Banham Canyon Dr.",
    },
  },
  {
    postal: "418",
    fdDistrict: "04",
    policeDistrict: "SAHP",
    fireBox: "0456",
    fdRunOrder: ["4", "2", "3", "1", "9", "8", "10", "11", "7", "6", "5"],
    policeRunOrder: ["SAHP", "BCSO", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Route 68",
      crossStreet1: "Route 1",
      crossStreet2: "Buen Vino Rd.",
    },
  },
  {
    postal: "419",
    fdDistrict: "04",
    policeDistrict: "SAHP",
    fireBox: "0455",
    fdRunOrder: ["4", "2", "3", "8", "9", "1", "10", "11", "7", "6", "5"],
    policeRunOrder: ["SAHP", "BCSO", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Route 1",
      crossStreet1: "Route 1 MM03.00",
      crossStreet2: "Route 1 MM02.00",
    },
  },
  {
    postal: "420",
    fdDistrict: "04",
    policeDistrict: "SAHP",
    fireBox: "0455",
    fdRunOrder: ["4", "2", "3", "8", "9", "1", "10", "11", "7", "6", "5"],
    policeRunOrder: ["SAHP", "BCSO", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Route 1",
      crossStreet1: "Route 68",
      crossStreet2: "Route 1 MM02.00",
    },
  },
  {
    postal: "421",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0455",
    fdRunOrder: ["4", "2", "3", "8", "9", "1", "10", "11", "7", "6", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buen Vino Rd.",
      crossStreet1: "Route 68",
      crossStreet2: "Banham Canyon Dr.",
    },
  },
  {
    postal: "422",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0455",
    fdRunOrder: ["4", "2", "3", "8", "9", "1", "10", "11", "7", "6", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Buen Vino Rd.": {
          crossStreet1: "Banham Canyon Dr.",
          crossStreet2: "Route 68",
        },
        "Banham Canyon Dr.": {
          crossStreet1: "Buen Vino Rd.",
          crossStreet2: "Route 11",
        },
      },
    },
  },
  {
    postal: "423",
    fdDistrict: "04",
    policeDistrict: "SAHP",
    fireBox: "0455",
    fdRunOrder: ["4", "2", "8", "3", "9", "1", "10", "11", "7", "6", "5"],
    policeRunOrder: ["SAHP", "BCSO", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Route 1",
      crossStreet1: "Route 68",
      crossStreet2: "Route 1 MM02.00",
    },
  },
  {
    postal: "424",
    fdDistrict: "04",
    policeDistrict: "SAHP",
    fireBox: "0455",
    fdRunOrder: ["4", "2", "8", "3", "9", "1", "10", "11", "7", "6", "5"],
    policeRunOrder: ["SAHP", "BCSO", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Route 1",
      crossStreet1: "Route 1 MM02.00",
      crossStreet2: "Barbareno Dr.",
    },
  },
  {
    postal: "425",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0420",
    fdRunOrder: ["4", "2", "8", "1", "3", "9", "10", "11", "7", "6", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Banham Canyon Dr.",
      crossStreet1: "Route 1",
      crossStreet2: "Buen Vino Rd.",
    },
  },
  {
    postal: "426",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0818",
    fdRunOrder: ["8", "4", "1", "2", "3", "10", "9", "6", "7", "11", "5"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Barbareno Dr.",
      crossStreet1: "Route 1",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "427",
    fdDistrict: "08",
    policeDistrict: "SAHP",
    fireBox: "0855",
    fdRunOrder: ["8", "4", "1", "2", "3", "10", "9", "6", "7", "11", "5"],
    policeRunOrder: ["SAHP", "LSPD", "LCSO", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Banham Canyon Dr.": {
          crossStreet1: "Route 1",
          crossStreet2: "Buen Vino Rd.",
        },
        "Route 1": {
          crossStreet1: "Barbareno Dr.",
          crossStreet2: "Barbareno Dr.",
        },
      },
    },
  },
  {
    postal: "428",
    fdDistrict: "08",
    policeDistrict: "LCSO",
    fireBox: "0850",
    fdRunOrder: ["8", "4", "1", "2", "3", "10", "9", "6", "7", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Banham Canyon Dr.",
      crossStreet1: "Buen Vino Rd.",
      crossStreet2: "N. Rockford Dr.",
    },
  },
  {
    postal: "429",
    fdDistrict: "08",
    policeDistrict: "LCSO",
    fireBox: "0854",
    fdRunOrder: ["8", "4", "1", "2", "3", "10", "9", "6", "7", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Banham Canyon Dr.",
      crossStreet1: "Buen Vino Rd.",
      crossStreet2: "N. Rockford Dr.",
    },
  },
  {
    postal: "430",
    fdDistrict: "01",
    policeDistrict: "SAHP",
    fireBox: "1513",
    fdRunOrder: ["1", "8", "4", "2", "10", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["SAHP", "LSPD", "LCSO", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Banham Canyon Dr.": {
          crossStreet1: "Buen Vino Rd.",
          crossStreet2: "N. Rockford Dr.",
        },
        "N. Rockford Dr.": {
          crossStreet1: "Marlowe Dr.",
          crossStreet2: "Ace Jones Dr.",
        },
      },
    },
  },
  {
    postal: "431",
    fdDistrict: "08",
    policeDistrict: "LCSO",
    fireBox: "0854",
    fdRunOrder: ["8", "4", "1", "2", "3", "10", "9", "6", "7", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Banham Canyon Dr.": {
          crossStreet1: "Buen Vino Rd.",
          crossStreet2: "N. Rockford Dr.",
        },
        "N. Rockford Dr.": {
          crossStreet1: "Banham Canyon Dr.",
          crossStreet2: "Ace Jones Dr.",
        },
      },
    },
  },
  {
    postal: "432",
    fdDistrict: "08",
    policeDistrict: "LCSO",
    fireBox: "0850",
    fdRunOrder: ["8", "1", "4", "10", "6", "2", "7", "5", "9", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "433",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0818",
    fdRunOrder: ["8", "4", "1", "10", "2", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Barbareno Dr.",
      crossStreet1: "Route 1",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "434",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0818",
    fdRunOrder: ["8", "4", "1", "10", "2", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Barbareno Dr.",
      crossStreet1: "Route 1",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "435",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0818",
    fdRunOrder: ["8", "4", "1", "10", "2", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Barbareno Dr.": {
          crossStreet1: "Route 1",
          crossStreet2: "Dead End",
        },
        "Route 1": {
          crossStreet1: "Barbareno Dr.",
          crossStreet2: "Inesno Rd.",
        },
      },
    },
  },
  {
    postal: "436",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0828",
    fdRunOrder: ["8", "4", "1", "10", "2", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Route 1": {
          crossStreet1: "Barbareno Dr.",
          crossStreet2: "Inesno Rd.",
        },
        "Inesno Rd.": {
          crossStreet1: "Route 1",
          crossStreet2: "Route 1 MM01.00",
        },
      },
    },
  },
  {
    postal: "437",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0828",
    fdRunOrder: ["8", "4", "1", "10", "2", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Route 1": {
          crossStreet1: "Inesno Rd.",
          crossStreet2: "Route 1 MM01.00",
        },
        "Inesno Rd.": {
          crossStreet1: "Route 1",
          crossStreet2: "Route 1 MM01.00",
        },
      },
    },
  },
  {
    postal: "438",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0828",
    fdRunOrder: ["8", "4", "1", "10", "2", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Route 1": {
          crossStreet1: "Inesno Rd.",
          crossStreet2: "Route 1 MM01.00",
        },
        "Inesno Rd.": {
          crossStreet1: "Route 1",
          crossStreet2: "Route 1 MM01.00",
        },
      },
    },
  },
  {
    postal: "439",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0826",
    fdRunOrder: ["8", "4", "1", "10", "2", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Route 1": {
          crossStreet1: "Inesno Rd.",
          crossStreet2: "W. Eclipse Blvd.",
        },
        "Inesno Rd.": {
          crossStreet1: "Route 1",
          crossStreet2: "Route 1",
        },
      },
    },
  },
  {
    postal: "440",
    fdDistrict: "08",
    policeDistrict: "SAHP",
    fireBox: "0824",
    fdRunOrder: ["8", "1", "10", "4", "2", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["SAHP", "LSPD", "LCSO", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Route 1",
      crossStreet1: "Inesno Rd.",
      crossStreet2: "W. Eclipse Blvd.",
    },
  },
  {
    postal: "441",
    fdDistrict: "08",
    policeDistrict: "SAHP",
    fireBox: "0824",
    fdRunOrder: ["8", "1", "10", "4", "2", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["SAHP", "LSPD", "LCSO", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Route 1",
      crossStreet1: "Inesno Rd.",
      crossStreet2: "W. Eclipse Blvd.",
    },
  },
  {
    postal: "442",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0849",
    fdRunOrder: ["8", "1", "10", "6", "4", "2", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Kortz Dr.",
      crossStreet1: "N. Rockford Dr.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "443",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0849",
    fdRunOrder: ["8", "1", "10", "6", "4", "2", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Kortz Dr.",
      crossStreet1: "N. Rockford Dr.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "444",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0848",
    fdRunOrder: ["8", "1", "10", "6", "4", "2", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "N. Rockford Dr.",
      crossStreet1: "Banham Canyon Dr.",
      crossStreet2: "Ace Jones Dr.",
    },
  },
  {
    postal: "445",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0847",
    fdRunOrder: ["8", "1", "10", "6", "4", "2", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "N. Rockford Dr.",
      crossStreet1: "Ace Jones Dr.",
      crossStreet2: "Richman St.",
    },
  },
  {
    postal: "446",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0850",
    fdRunOrder: ["8", "1", "10", "6", "4", "2", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Rockford Dr.": {
          crossStreet1: "Ace Jones Dr.",
          crossStreet2: "Richman St.",
        },
        "Kortz Dr.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "447",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0850",
    fdRunOrder: ["8", "1", "10", "6", "4", "2", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Rockford Dr.": {
          crossStreet1: "Ace Jones Dr.",
          crossStreet2: "Picture Perfect Dr.",
        },
        "Kortz Dr.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "448",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0850",
    fdRunOrder: ["8", "1", "10", "6", "4", "2", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Kortz Dr.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Dead End",
        },
        "N. Rockford Dr.": {
          crossStreet1: "Picture Perfect Dr.",
          crossStreet2: "W. Eclipse Blvd.",
        },
      },
    },
  },
  {
    postal: "449",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0144",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Rockford Dr.": {
          crossStreet1: "Picture Perfect Dr.",
          crossStreet2: "W. Eclipse Blvd.",
        },
        "Sam Austin Dr.": {
          crossStreet1: "W. Eclipse Blvd.",
          crossStreet2: "Dead End",
        },
        "W. Eclipse Blvd.": {
          crossStreet1: "Sam Austin Dr.",
          crossStreet2: "Dorset Dr.",
        },
        "Dorset Dr.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "W. Eclipse Blvd.",
        },
      },
    },
  },
  {
    postal: "450",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0107",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dorset Dr.": {
          crossStreet1: "W. Eclipse Blvd.",
          crossStreet2: "Blvd. Del Perro",
        },
        "W. Eclipse Blvd.": {
          crossStreet1: "Hardy Way",
          crossStreet2: "Dorset Dr.",
        },
      },
    },
  },
  {
    postal: "451",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0107",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "W. Eclipse Blvd.": {
          crossStreet1: "Hardy Way",
          crossStreet2: "Greenwhich Pl.",
        },
        "Mad Wayne Thunder Dr.": {
          crossStreet1: "W. Eclipse Blvd.",
          crossStreet2: "Blvd. Del Perro",
        },
      },
    },
  },
  {
    postal: "452",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0144",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Rockford Dr.": {
          crossStreet1: "Picture Perfect Dr.",
          crossStreet2: "Dorset Dr.",
        },
        "Picture Perfect Dr.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Americano Way",
        },
        "Americano Way": {
          crossStreet1: "Picture Perfect Dr.",
          crossStreet2: "W. Eclipse Blvd.",
        },
      },
    },
  },
  {
    postal: "453",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0144",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Americano Way": {
          crossStreet1: "Picture Perfect Dr.",
          crossStreet2: "W. Eclipse Blvd.",
        },
        "Picture Perfect Dr.": {
          crossStreet1: "Americano Way",
          crossStreet2: "Hardy Way",
        },
        "Hardy Way": {
          crossStreet1: "Picture Perfect Dr.",
          crossStreet2: "W. Eclipse Blvd.",
        },
        "W. Eclipse Blvd.": {
          crossStreet1: "Hardy Way",
          crossStreet2: "Americano Way",
        },
      },
    },
  },
  {
    postal: "454",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0103",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Rockford Dr.": {
          crossStreet1: "Richman St.",
          crossStreet2: "Picture Perfect Dr.",
        },
        "Richman St.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Picture Perfect Dr.",
        },
        "Picture Perfect Dr.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Richman St.",
        },
      },
    },
  },
  {
    postal: "455",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0103",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Richman St.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Picture Perfect Dr.",
        },
        "Picture Perfect Dr.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Richman St.",
        },
      },
    },
  },
  {
    postal: "456",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0103",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Rockford Dr.": {
          crossStreet1: "Unknown Rd.",
          crossStreet2: "Richman St.",
        },
        "Unknown Rd.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Dead End",
        },
        "Richman St.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Picture Perfect Dr.",
        },
      },
    },
  },
  {
    postal: "457",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0104",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Rockford Dr.": {
          crossStreet1: "Banham Canyon Dr.",
          crossStreet2: "Ace Jones Dr.",
        },
        "Ace Jones Dr.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Mad Wayne Thunder Dr.",
        },
      },
    },
  },
  {
    postal: "458",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "1513",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Ace Jones Dr.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Mad Wayne Thunder Dr.",
        },
        "Unknown Rd.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "459",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0104",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Unknown Rd.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Dead End",
        },
        "Richman St.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Picture Perfect Dr.",
        },
      },
    },
  },
  {
    postal: "460",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0105",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Ace Jones Dr.",
      crossStreet1: "N. Rockford Dr.",
      crossStreet2: "Mad Wayne Thunder Dr.",
    },
  },
  {
    postal: "461",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0153",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marlowe Dr.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "N. Sheldon Ave.",
        },
        "N. Sheldon Ave.": {
          crossStreet1: "Hangman Ave.",
          crossStreet2: "Ace Jones Dr.",
        },
      },
    },
  },
  {
    postal: "462",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0102",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hangman Ave.": {
          crossStreet1: "N. Sheldon Ave.",
          crossStreet2: "Mad Wayne Thunder Dr.",
        },
        "Mad Wayne Thunder Dr.": {
          crossStreet1: "Ace Jones Dr.",
          crossStreet2: "South Mo Milton Dr.",
        },
      },
    },
  },
  {
    postal: "463",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0102",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hardy Way": {
          crossStreet1: "Picture Perfect Dr.",
          crossStreet2: "W. Eclipse Blvd.",
        },
        "Picture Perfect Dr.": {
          crossStreet1: "Hardy Way",
          crossStreet2: "Greenwhich Pl.",
        },
        "Greenwhich Pl.": {
          crossStreet1: "Picture Perfect Dr.",
          crossStreet2: "W. Eclipse Blvd.",
        },
        "W. Eclipse Blvd.": {
          crossStreet1: "Hardy Way",
          crossStreet2: "Greenwhich Pl.",
        },
      },
    },
  },
  {
    postal: "464",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0102",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Greenwhich Pl.": {
          crossStreet1: "Picture Perfect Dr.",
          crossStreet2: "W. Eclipse Blvd.",
        },
        "Picture Perfect Dr.": {
          crossStreet1: "Greenwhich Pl.",
          crossStreet2: "Mad Wayne Thunder Dr.",
        },
        "Mad Wayne Thunder Dr.": {
          crossStreet1: "Picture Perfect Dr.",
          crossStreet2: "W. Eclipse Blvd.",
        },
        "W. Eclipse Blvd.": {
          crossStreet1: "Greenwhich Pl.",
          crossStreet2: "Mad Wayne Thunder Dr.",
        },
      },
    },
  },
  {
    postal: "465",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0102",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "South Mo Milton Dr.": {
          crossStreet1: "Mad Wayne Thunder Dr.",
          crossStreet2: "Picture Perfect Dr.",
        },
        "Mad Wayne Thunder Dr.": {
          crossStreet1: "South Mo Milton Dr.",
          crossStreet2: "Picture Perfect Dr.",
        },
      },
    },
  },
  {
    postal: "466",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0133",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Sheldon Ave.": {
          crossStreet1: "Hangman Ave.",
          crossStreet2: "Hillcrest Ave.",
        },
        "Hillcrest Ridge Access Rd.": {
          crossStreet1: "N. Sheldon Ave.",
          crossStreet2: "Picture Perfect Dr.",
        },
      },
    },
  },
  {
    postal: "467",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Sheldon Ave.": {
          crossStreet1: "Hillcrest Ridge Access Rd.",
          crossStreet2: "Normandy Dr.",
        },
        "Hillcrest Ave.": {
          crossStreet1: "N. Sheldon Ave.",
          crossStreet2: "Normandy Dr.",
        },
      },
    },
  },
  {
    postal: "468",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hillcrest Ridge Access Rd.": {
          crossStreet1: "N. Sheldon Ave.",
          crossStreet2: "Picture Perfect Dr.",
        },
        "South Mo Milton Dr.": {
          crossStreet1: "Mad Wayne Thunder Dr.",
          crossStreet2: "Picture Perfect Dr.",
        },
      },
    },
  },
  {
    postal: "469",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0102",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Mad Wayne Thunder Dr.": {
          crossStreet1: "South Mo Milton Dr.",
          crossStreet2: "Picture Perfect Dr.",
        },
        "Picture Perfect Dr.": {
          crossStreet1: "Mad Wayne Thunder Dr.",
          crossStreet2: "South Mo Milton Dr.",
        },
      },
    },
  },
  {
    postal: "470",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Greenwich Way": {
          crossStreet1: "Mad Wayne Thunder Dr.",
          crossStreet2: "Dunstable Dr.",
        },
        "Dunstable Dr.": {
          crossStreet1: "Picture Perfect Dr.",
          crossStreet2: "W. Eclipse Blvd.",
        },
        "Dunstable Ln.": {
          crossStreet1: "Dunstable Dr.",
          crossStreet2: "South Mo Milton Dr.",
        },
      },
    },
  },
  {
    postal: "471",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dunstable Dr.": {
          crossStreet1: "Greenwich Way",
          crossStreet2: "W. Eclipse Blvd.",
        },
        "Dunstable Ln.": {
          crossStreet1: "Dunstable Dr.",
          crossStreet2: "South Mo Milton Dr.",
        },
        "South Mo Milton Dr.": {
          crossStreet1: "Dunstable Ln.",
          crossStreet2: "Rockford Dr.",
        },
        "Rockford Dr.": {
          crossStreet1: "South Mo Milton Dr.",
          crossStreet2: "W. Eclipse Blvd.",
        },
        "W. Eclipse Blvd.": {
          crossStreet1: "Dunstable Dr.",
          crossStreet2: "Rockford Dr.",
        },
      },
    },
  },
  {
    postal: "472",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0123",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "South Mo Milton Dr.": {
          crossStreet1: "Picture Perfect Dr.",
          crossStreet2: "Rockford Dr.",
        },
        "Picture Perfect Dr.": {
          crossStreet1: "South Mo Milton Dr.",
          crossStreet2: "Milton Rd.",
        },
      },
    },
  },
  {
    postal: "473",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0123",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "South Mo Milton Dr.": {
          crossStreet1: "Rockford Dr.",
          crossStreet2: "W. Eclipse Blvd.",
        },
        "Milton Rd.": {
          crossStreet1: "Cox Way",
          crossStreet2: "W. Eclipse Blvd.",
        },
        "W. Eclipse Blvd.": {
          crossStreet1: "South Mo Milton Dr.",
          crossStreet2: "Milton Rd.",
        },
      },
    },
  },
  {
    postal: "474",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0123",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Picture Perfect Dr.": {
          crossStreet1: "Hillcrest Ridge Access Rd.",
          crossStreet2: "Milton Rd.",
        },
        "Milton Rd.": {
          crossStreet1: "Picture Perfect Dr.",
          crossStreet2: "Cox Way",
        },
      },
    },
  },
  {
    postal: "475",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0123",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Picture Perfect Dr.": {
          crossStreet1: "South Mo Milton Dr.",
          crossStreet2: "Hillcrest Ridge Access Rd.",
        },
        "Hillcrest Ridge Access Rd.": {
          crossStreet1: "N. Sheldon Ave.",
          crossStreet2: "Picture Perfect Dr.",
        },
      },
    },
  },
  {
    postal: "476",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0123",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "South Mo Milton Dr.": {
          crossStreet1: "Mad Wayne Thunder Dr.",
          crossStreet2: "Picture Perfect Dr.",
        },
        "Picture Perfect Dr.": {
          crossStreet1: "South Mo Milton Dr.",
          crossStreet2: "Milton Rd.",
        },
      },
    },
  },

  {
    postal: "477",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hillcrest Ave.": {
          crossStreet1: "N. Sheldon Ave.",
          crossStreet2: "Normandy Dr.",
        },
        "Hillcrest Ridge Access Rd.": {
          crossStreet1: "N. Sheldon Ave.",
          crossStreet2: "Picture Perfect Dr.",
        },
      },
    },
  },
  {
    postal: "478",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0123",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Milton Rd.",
      crossStreet1: "Didion Dr.",
      crossStreet2: "Picture Perfect Dr.",
    },
  },
  {
    postal: "479",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Hillcrest Ave.",
      crossStreet1: "N. Sheldon Ave.",
      crossStreet2: "Normandy Dr.",
    },
  },
  {
    postal: "480",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hillcrest Ave.": {
          crossStreet1: "N. Sheldon Ave.",
          crossStreet2: "Normandy Dr.",
        },
        "Hillcrest Ridge Access Rd.": {
          crossStreet1: "N. Sheldon Ave.",
          crossStreet2: "Picture Perfect Dr.",
        },
      },
    },
  },
  {
    postal: "481",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Sheldon Ave.": {
          crossStreet1: "Hillcrest Ave.",
          crossStreet2: "Normandy Dr.",
        },
        "Normandy Dr.": {
          crossStreet1: "N. Sheldon Ave.",
          crossStreet2: "Hillcrest Ave.",
        },
      },
    },
  },
  {
    postal: "482",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "1513",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marlowe Dr.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Lake Vinewood E.",
        },
        "Mt. Vinewood Dr.": {
          crossStreet1: "E. Galileo Ave.",
          crossStreet2: "Marlowe Dr.",
        },
        "Milton Rd.": {
          crossStreet1: "N. Sheldon Ave.",
          crossStreet2: "Normandy Dr.",
        },
      },
    },
  },
  {
    postal: "483",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Normandy Dr.",
      crossStreet1: "N. Sheldon Ave.",
      crossStreet2: "Milton Rd.",
    },
  },
  {
    postal: "484",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Milton Rd.": {
          crossStreet1: "N. Sheldon Ave.",
          crossStreet2: "Normandy Dr.",
        },
        "Normandy Dr.": {
          crossStreet1: "N. Sheldon Ave.",
          crossStreet2: "Hillcrest Ave.",
        },
      },
    },
  },
  {
    postal: "485",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0152",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Marlowe Dr.",
      crossStreet1: "Milton Rd.",
      crossStreet2: "Lake Vinewood E.",
    },
  },
  {
    postal: "486",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Milton Rd.": {
          crossStreet1: "N. Sheldon Ave.",
          crossStreet2: "Normandy Dr.",
        },
        "Kimble Hill Dr.": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "Lake Vinewood Dr.",
        },
      },
    },
  },
  {
    postal: "487",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Miton Rd.": {
          crossStreet1: "Kimble Hill Dr.",
          crossStreet2: "Didion Dr.",
        },
        "Kimble Hill Dr.": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "Lake Vinewood Dr.",
        },
        "Didion Dr.": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "Whispymound Dr.",
        },
      },
    },
  },
  {
    postal: "488",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0123",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Milton Rd.": {
          crossStreet1: "Didion Dr.",
          crossStreet2: "Cox Way",
        },
        "Didion Dr.": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "Cox Way",
        },
        "Cox Way": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "Didion Dr.",
        },
      },
    },
  },
  {
    postal: "489",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0123",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Milton Rd.": {
          crossStreet1: "Cox Way",
          crossStreet2: "Eclipse Blvd.",
        },
        "Cox Way": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "Didion Dr.",
        },
        "Didion Dr.": {
          crossStreet1: "Cox Way",
          crossStreet2: "Didion Dr.",
        },
      },
    },
  },
  {
    postal: "490",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0122",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Didion Dr.": {
          crossStreet1: "Cox Way",
          crossStreet2: "Las Lagunas Blvd.",
        },
        "Eclipse Blvd.": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "Sam Vitus Blvd.",
        },
      },
    },
  },
  {
    postal: "491",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0121",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Didion Dr.": {
          crossStreet1: "Cox Way",
          crossStreet2: "Las Lagunas Blvd.",
        },
        "Eclipse Blvd.": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "N. Archer Ave.",
        },
      },
    },
  },
  {
    postal: "492",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0122",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Cox Way": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "Didion Dr.",
        },
        "Didion Dr.": {
          crossStreet1: "Cox Way",
          crossStreet2: "Las Lagunas Blvd.",
        },
      },
    },
  },
  {
    postal: "493",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0119",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Didion Dr.": {
          crossStreet1: "Whispymound Dr.",
          crossStreet2: "Didion Dr.",
        },
        "Whispymound Dr.": {
          crossStreet1: "Didion Dr.",
          crossStreet2: "Wild Oats Dr.",
        },
      },
    },
  },
  {
    postal: "494",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Didion Dr.": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "Whispymound Dr.",
        },
        "Kimble Hill Dr.": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "Lake Vinewood Dr.",
        },
        "Whispymound Dr.": {
          crossStreet1: "Didion Dr.",
          crossStreet2: "Wild Oats Dr.",
        },
      },
    },
  },
  {
    postal: "495",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0152",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Marlowe Dr.",
      crossStreet1: "Milton Rd.",
      crossStreet2: "Lake Vinewood E.",
    },
  },
  {
    postal: "496",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0134",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marlowe Dr.": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "Lake Vinewood E.",
        },
        "Lake Vinewood E.": {
          crossStreet1: "Marlowe Dr.",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "497",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0152",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Marlowe Dr.",
      crossStreet1: "Lake Vinewood E.",
      crossStreet2: "Baytree Canyon Rd.",
    },
  },
  {
    postal: "498",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0134",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Lake Vinewood E.",
      crossStreet1: "Marlowe Dr.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "499",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0134",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Lake Vinewood E.",
      crossStreet1: "Marlowe Dr.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "500",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0134",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Lake Vinewood E.",
      crossStreet1: "Marlowe Dr.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "501",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0127",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Kimble Hill Dr.": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "Lake Vinewood Dr.",
        },
        "Lake Vinewood Dr.": {
          crossStreet1: "Marlowe Dr.",
          crossStreet2: "Baytree Canyon Rd.",
        },
      },
    },
  },
  {
    postal: "502",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0119",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Whispymound Dr.": {
          crossStreet1: "Wild Oats Dr.",
          crossStreet2: "Baytree Canyon Rd.",
        },
        "Wild Oats Dr.": {
          crossStreet1: "Whispymound Dr.",
          crossStreet2: "Baytree Canyon Rd.",
        },
      },
    },
  },
  {
    postal: "503",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0121",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Eclipse Blvd.": {
          crossStreet1: "San Vitus Blvd.",
          crossStreet2: "N. Archer Ave.",
        },
        "Didion Dr.": {
          crossStreet1: "Cox Way",
          crossStreet2: "Las Lagunas Blvd.",
        },
      },
    },
  },
  {
    postal: "504",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0119",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Didion Dr.": {
          crossStreet1: "Cox Way",
          crossStreet2: "Eclipse Blvd.",
        },
        "Las Lagunas Blvd.": {
          crossStreet1: "Didion Dr.",
          crossStreet2: "Eclipse Blvd.",
        },
      },
    },
  },
  {
    postal: "505",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0119",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Wild Oats Dr.": {
          crossStreet1: "Whispymound Dr.",
          crossStreet2: "Baytree Canyon Rd.",
        },
        "Didion Dr.": {
          crossStreet1: "Cox Way",
          crossStreet2: "Las Lagunas Blvd.",
        },
        "Las Lagunas Blvd.": {
          crossStreet1: "Didion Dr.",
          crossStreet2: "Baytree Canyon Rd.",
        },
      },
    },
  },
  {
    postal: "506",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0152",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Lake Vinewood Dr.",
      crossStreet1: "Kimble Hill Dr.",
      crossStreet2: "Baytree Canyon Rd.",
    },
  },
  {
    postal: "507",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0152",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marlowe Dr.": {
          crossStreet1: "Lake Vinewood E.",
          crossStreet2: "Baytree Canyon Rd.",
        },
        "Baytree Canyon Rd.": {
          crossStreet1: "Marlowe Dr.",
          crossStreet2: "Lake Vinewood Dr.",
        },
      },
    },
  },
  {
    postal: "508",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0152",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Lake Vinewood Dr.": {
          crossStreet1: "Kimble Hill Dr.",
          crossStreet2: "Baytree Canyon Rd.",
        },
        "Baytree Canyon Rd.": {
          crossStreet1: "Lake Vinewood Dr.",
          crossStreet2: "Whispymound Dr.",
        },
      },
    },
  },
  {
    postal: "509",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0119",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Whispymound Dr.": {
          crossStreet1: "Wild Oats Dr.",
          crossStreet2: "Baytree Canyon Rd.",
        },
        "Baytree Canyon Rd.": {
          crossStreet1: "Whispymound Dr.",
          crossStreet2: "Wild Oats Dr.",
        },
      },
    },
  },
  {
    postal: "510",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0119",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Whispymound Dr.": {
          crossStreet1: "Wild Oats Dr.",
          crossStreet2: "Baytree Canyon Rd.",
        },
        "Wild Oats Dr.": {
          crossStreet1: "Whispymound Dr.",
          crossStreet2: "Baytree Canyon Rd.",
        },
      },
    },
  },
  {
    postal: "511",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0119",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Wild Oats Dr.": {
          crossStreet1: "Whispymound Dr.",
          crossStreet2: "Baytree Canyon Rd.",
        },
        "Baytree Canyon Rd.": {
          crossStreet1: "Wild Oats Dr.",
          crossStreet2: "Las Lagunas Blvd.",
        },
        "Las Lagunas Blvd.": {
          crossStreet1: "Baytree Canyon Rd.",
          crossStreet2: "Didion Dr.",
        },
      },
    },
  },
  {
    postal: "512",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "N. Conker Ave.",
      crossStreet1: "Baytree Canyon Rd.",
      crossStreet2: "Fenwell Pl.",
    },
  },
  {
    postal: "513",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Lake Vinewood Dr.",
      crossStreet1: "Baytree Canyon Rd.",
      crossStreet2: "Marlowe Dr.",
    },
  },
  {
    postal: "514",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Mt. Haan Rd.": {
          crossStreet1: "Marlowe Dr.",
          crossStreet2: "Vinewood Access Rd.",
        },
        "Marlowe Dr.": {
          crossStreet1: "Baytree Canyon Rd.",
          crossStreet2: "Mt. Haan Rd.",
        },
      },
    },
  },
  {
    postal: "515",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0125",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Baytree Canyon Rd.",
      crossStreet1: "E. Galileo Ave.",
      crossStreet2: "Marlowe Dr.",
    },
  },
  {
    postal: "516",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0125",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "E. Galileo Ave.": {
          crossStreet1: "Observatory Approach",
          crossStreet2: "Baytree Canyon Rd.",
        },
        "Baytree Canyon Rd.": {
          crossStreet1: "E. Galileo Ave.",
          crossStreet2: "Marlowe Dr.",
        },
      },
    },
  },
  {
    postal: "517",
    fdDistrict: "02",
    policeDistrict: "LSPD",
    fireBox: "0252",
    fdRunOrder: ["2", "1", "4", "10", "7", "6", "8", "5", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Baytree Canyon Rd.": {
          crossStreet1: "Galileo Rd.",
          crossStreet2: "E. Galileo Ave.",
        },
        "Mt. Haan Rd.": {
          crossStreet1: "Baytree Canyon Rd.",
          crossStreet2: "Chaparral Dr.",
        },
      },
    },
  },
  {
    postal: "518",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0215",
    fdRunOrder: ["2", "1", "4", "10", "7", "6", "8", "5", "9", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Baytree Canyon Rd. [S]": {
          crossStreet1: "Galileo Rd.",
          crossStreet2: "Harmony Ln.",
        },
        "Baytree Canyon Rd. [N]": {
          crossStreet1: "Galileo Bypass",
          crossStreet2: "Harmony Ln.",
        },
      },
    },
  },
  {
    postal: "519",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "1", "4", "10", "7", "6", "8", "5", "9", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Baytree Canyon Rd.": {
          crossStreet1: "Galileo Bypass",
          crossStreet2: "Chaparral Dr.",
        },
        "Harmony Ln.": {
          crossStreet1: "Baytree Canyon Rd.",
          crossStreet2: "Baytree Canyon Rd.",
        },
        "Chaparral Dr.": {
          crossStreet1: "Baytree Canyon Rd.",
          crossStreet2: "Mt. Haan Rd.",
        },
      },
    },
  },
  {
    postal: "520",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0251",
    fdRunOrder: ["2", "1", "4", "10", "7", "6", "8", "5", "9", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Chaparral Dr.",
      crossStreet1: "Baytree Canyon Rd.",
      crossStreet2: "Mt. Haan Rd.",
    },
  },
  {
    postal: "521",
    fdDistrict: "02",
    policeDistrict: "LSPD",
    fireBox: "0251",
    fdRunOrder: ["2", "1", "10", "7", "6", "4", "8", "5", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Mt. Haan Rd.",
      crossStreet1: "Baytree Canyon Rd.",
      crossStreet2: "Chaparral Terrace",
    },
  },
  {
    postal: "522",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "1", "4", "10", "7", "6", "8", "5", "9", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Baytree Canyon Rd.": {
          crossStreet1: "Chaparral Dr.",
          crossStreet2: "Senora Rd.",
        },
        "Chaparral Dr.": {
          crossStreet1: "Mt. Haan Rd.",
          crossStreet2: "Senora Rd.",
        },
      },
    },
  },
  {
    postal: "523",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2511",
    fdRunOrder: ["2", "1", "4", "10", "7", "6", "8", "5", "9", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Baytree Canyon Rd.": {
          crossStreet1: "Chaparral Dr.",
          crossStreet2: "Senora Rd.",
        },
        "Chaparral Dr.": {
          crossStreet1: "Mt. Haan Rd.",
          crossStreet2: "Senora Rd.",
        },
      },
    },
  },
  {
    postal: "524",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0251",
    fdRunOrder: ["2", "1", "4", "10", "7", "6", "8", "5", "9", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Chaparral Terrace",
      crossStreet1: "Chaparral Dr.",
      crossStreet2: "Mt. Haan Rd.",
    },
  },
  {
    postal: "525",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0251",
    fdRunOrder: ["2", "1", "4", "10", "7", "6", "8", "5", "9", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Mt. Haan Rd.",
      crossStreet1: "Baytree Canyon Rd.",
      crossStreet2: "Marlowe Dr.",
    },
  },
  {
    postal: "526",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "2", "10", "7", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Mt. Haan Rd.",
      crossStreet1: "Marlowe Dr.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "527",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "2", "10", "7", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Mt. Haan Rd.",
      crossStreet1: "Vinewood Access Rd.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "528",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "2", "10", "7", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Mt. Haan Rd.",
      crossStreet1: "Marlowe Dr.",
      crossStreet2: "Vinewood Access Rd.",
    },
  },
  {
    postal: "529",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "2", "10", "7", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Vinewood Access Rd.",
      crossStreet1: "Mt. Haan Rd.",
      crossStreet2: "Marlowe Dr.",
    },
  },
  {
    postal: "530",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "10", "7", "6", "2", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Marlowe Dr.",
      crossStreet1: "Mt. Haan Rd. [W]",
      crossStreet2: "Mt. Haan Rd. [E]",
    },
  },
  {
    postal: "531",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "30",
    fdRunOrder: ["1", "10", "7", "6", "2", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Vinewood Park Dr.",
      crossStreet1: "Fenwell Pl.",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "532",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "10", "7", "6", "2", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Fenwell Pl.",
      crossStreet1: "N. Conker Ave.",
      crossStreet2: "Vinewood Park Dr.",
    },
  },
  {
    postal: "533",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1018",
    fdRunOrder: ["10", "1", "7", "6", "2", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Elgin Ave.": {
          crossStreet1: "Clinton Ave.",
          crossStreet2: "Marlowe Dr.",
        },
        "Vinewood Park Dr.": {
          crossStreet1: "Elgin Ave.",
          crossStreet2: "Mirror Park Blvd.",
        },
        "Interstate 1 SB": {
          crossStreet1: "Interstate 1 MM01.00",
          crossStreet2: "Interstate 1 MM02.00",
        },
        "Interstate 1 NB": {
          crossStreet1: "Interstate 1 MM01.00",
          crossStreet2: "Interstate 1 MM02.00",
        },
      },
    },
  },
  {
    postal: "534",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "10", "7", "2", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marlowe Dr. [W]": {
          crossStreet1: "Vinewood Access Rd.",
          crossStreet2: "Mt. Haan Rd.",
        },
        "Mt. Haan Rd.": {
          crossStreet1: "Marlowe Dr.",
          crossStreet2: "Baytree Canyon Rd.",
        },
        "Marlowe Dr. [E]": {
          crossStreet1: "Mt. Haan Rd.",
          crossStreet2: "Senora Rd.",
        },
      },
    },
  },
  {
    postal: "535",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "1500",
    fdRunOrder: ["1", "10", "7", "2", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Senora Rd.": {
          crossStreet1: "Marlowe Dr.",
          crossStreet2: "Star Ln.",
        },
        "Interstate 1": {
          crossStreet1: "Vinewood Park Dr. Exit",
          crossStreet2: "Interstate 1 MM02.00",
        },
      },
    },
  },
  {
    postal: "536",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "10", "7", "2", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marlowe Dr.": {
          crossStreet1: "Mt. Haan Rd. [W]",
          crossStreet2: "Mt. Haan Rd. [E]",
        },
        "Mt. Haan Rd.": {
          crossStreet1: "Marlowe Dr.",
          crossStreet2: "Baytree Canyon Rd.",
        },
      },
    },
  },
  {
    postal: "537",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "10", "7", "2", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Mt. Haan Rd.",
      crossStreet1: "Marlowe Dr.",
      crossStreet2: "Baytree Canyon Rd.",
    },
  },
  {
    postal: "538",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "1500",
    fdRunOrder: ["1", "10", "7", "2", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Senora Rd.",
      crossStreet1: "Vinewood Park Dr.",
      crossStreet2: "Star Ln.",
    },
  },
  {
    postal: "539",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "1500",
    fdRunOrder: ["1", "10", "7", "2", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Senora Rd.": {
                crossStreet1: "Vinewood Park Dr.",
                crossStreet2: "Star Ln.",
            },
            "Interstate 1": {
                crossStreet1: "Vinewood Park Dr. Exit",
                crossStreet2: "Chancy Ln."
            }
        }
    }
  },
  {
    postal: "540",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0251",
    fdRunOrder: ["2", "10", "1", "9", "4", "7", "6", "8", "5", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Senora Rd.",
        crossStreet1: "Vinewood Park Dr.",
        crossStreet2: "Star Ln.",
    }
  },
  {
    postal: "541",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2500",
    fdRunOrder: ["2", "10", "1", "9", "4", "7", "6", "8", "5", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
        availableRoads: {
            "Senora Rd.": {
                crossStreet1: "Chaparral Dr.",
                crossStreet2: "Star Ln.",
            },
            "Star Ln.": {
                crossStreet1: "Senora Rd.",
                crossStreet2: "Roadrunner Rd."
            },
            "Roadrunner Rd.": {
                crossStreet1: "Senora Rd.",
                crossStreet2: "Chancy Ln."
            }
        }
    }
  },
  {
    postal: "542",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2500",
    fdRunOrder: ["2", "10", "1", "9", "4", "7", "6", "8", "5", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
        availableRoads: {
            "Chancy Ln.": {
                crossStreet1: "Roadrunner Rd.",
                crossStreet2: "Interstate 1 SB"
            },
            "Route 13": {
                crossStreet1: "Chancy Ln.",
                crossStreet2: "Route 68 Exit"
            }
        }
    }
  },
  {
    postal: "543",
    fdDistrict: "09",
    policeDistrict: "SAHP",
    fireBox: "9500",
    fdRunOrder: ["9", "2", "10", "7", "1", "6", "4", "8", "5", "3", "11"],
    policeRunOrder: ["SAHP", "LSPD", "LCSO", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Chancy Ln.": {
                crossStreet1: "Interstate 1 SB",
                crossStreet2: "Roadrunner Rd."
            },
            "Interstate 1": {
                crossStreet1: "Chancy Ln.",
                crossStreet2: "Route 68 Exit"
            }
        }
    }
  },
  {
    postal: "544",
    fdDistrict: "10",
    policeDistrict: "SAHP",
    fireBox: "1039",
    fdRunOrder: ["10", "9", "7", "2", "1", "6", "4", "8", "5", "3", "11"],
    policeRunOrder: ["SAHP", "LSPD", "LCSO", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Palomino Fwy Exit": {
                crossStreet1: "Interstate 1 NB",
                crossStreet2: "Route 15 SB"
            },
            "Route 15": {
                crossStreet1: "Route 15 Senora Way Exit",
                crossStreet2: "Route 13 Route 68 Exit"
            }
        }
    }
  },
  {
    postal: "545",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "8", "9", "5", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LSPD", "LCSO", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Interstate 1": {
                crossStreet1: "Chancy Ln.",
                crossStreet2: "Route 68 Exit"
            },
            "Tataviam Dr.": {
                crossStreet1: "Interstate 1 NB",
                crossStreet2: "Reservoir Access Rd."
            }
        }
    }
  },
  {
    postal: "546",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "1", "6", "2", "8", "9", "5", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LSPD", "LCSO", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Interstate 1",
        crossStreet1: "Vinewood Park Dr.",
        crossStreet2: "Chancy Ln."
    }
  },
  {
    postal: "547",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "8", "9", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Tataviam Dr.",
        crossStreet1: "Interstate 1 NB",
        crossStreet2: "Reservoir Access Rd."
    }
  },
  {
    postal: "548",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "0750",
    fdRunOrder: ["7", "9", "10", "6", "1", "2", "8", "5", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Route 15": {
                crossStreet1: "Route 15 MM02.00",
                crossStreet2: "Route 13 Route 68 Exit"
            },
            "Tataviam Dr.": {
                crossStreet1: "Route 15 SB",
                crossStreet2: "Reservoir Access Rd."
            }
        }
    }
  },
  {
    postal: "549",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "7502",
    fdRunOrder: ["7", "9", "10", "6", "1", "2", "8", "5", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Route 15",
        crossStreet1: "Senora Way Exit",
        crossStreet2: "Route 15 MM02.00",
    }
  },
  {
    postal: "550",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "9", "8", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Tataviam Dr.",
        crossStreet1: "Reservoir Access Rd.",
        crossStreet2: "Route 15"
    }
  },
  {
    postal: "551",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "9", "8", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Tataviam Dr.",
        crossStreet1: "Reservoir Access Rd.",
        crossStreet2: "Interstate 1 NB"
    }
  },
  {
    postal: "552",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "9", "8", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Tataviam Dr.",
        crossStreet1: "Reservoir Access Rd.",
        crossStreet2: "Interstate 1 NB"
    }
  },
  {
    postal: "553",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "9", "8", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Tataviam Dr.",
        crossStreet1: "Reservoir Access Rd.",
        crossStreet2: "Interstate 1 NB"
    }
  },
  {
    postal: "554",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "9", "8", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Tataviam Dr.",
        crossStreet1: "Reservoir Access Rd.",
        crossStreet2: "Route 15"
    }
  },
  {
    postal: "555",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "7502",
    fdRunOrder: ["7", "9", "10", "6", "1", "2", "8", "5", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Route 15",
        crossStreet1: "Route 15 MM02.00",
        crossStreet2: "Senora Way Exit",
    }
  },
  {
    postal: "556",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "7502",
    fdRunOrder: ["7", "9", "10", "6", "1", "2", "8", "5", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Route 15",
        crossStreet1: "Route 15 MM02.00",
        crossStreet2: "Senora Way Exit",
    }
  },
  {
    postal: "557",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "7502",
    fdRunOrder: ["7", "9", "10", "6", "1", "2", "8", "5", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Route 15",
        crossStreet1: "Route 15 MM02.00",
        crossStreet2: "Senora Way Exit",
    }
  },
  {
    postal: "558",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "7205",
    fdRunOrder: ["7", "9", "10", "6", "1", "2", "8", "5", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Route 15",
        crossStreet1: "Sustancia Rd. Exit",
        crossStreet2: "Route 15 MM02.00",
    }
  },
  {
    postal: "559",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "9", "8", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Tataviam Dr.",
        crossStreet1: "Reservoir Access Rd.",
        crossStreet2: "Route 15"
    }
  },
  {
    postal: "560",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "9", "8", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Tataviam Dr.",
        crossStreet1: "Reservoir Access Rd.",
        crossStreet2: "Interstate 1 NB"
    }
  },
  {
    postal: "561",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "7300",
    fdRunOrder: ["7", "10", "6", "1", "2", "9", "8", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Tataviam Dr. [E]": {
                crossStreet1: "Reservoir Access Rd.",
                crossStreet2: "Route 15"
            },
            "Tataviam Dr. [W]": {
                crossStreet1: "Reservoir Access Rd.",
                crossStreet2: "Interstate 1 NB"
            },
            "Reservoir Access Rd.": {
                crossStreet1: "Mirror Park Blvd.",
                crossStreet2: "Tataviam Dr."
            }
        }
    }
  },
  {
    postal: "562",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "9", "8", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Tataviam Dr.",
        crossStreet1: "Reservoir Access Rd.",
        crossStreet2: "Route 15"
    }
  },
  {
    postal: "563",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "5", "2", "8", "9", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "564",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "7207",
    fdRunOrder: ["7", "10", "6", "1", "5", "2", "8", "9", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Route 15 [S]": {
                crossStreet1: "Route 15 MM01.00",
                crossStreet2: "Sustancia Rd. Exit"
            },
            "Route 15 [N]": {
                crossStreet1: "Sustancia Rd. Exit",
                crossStreet2: "Route 15 MM02.00"
            }
        }
    }
  },
  {
    postal: "565",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0730",
    fdRunOrder: ["7", "10", "6", "1", "5", "2", "8", "9", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Noose Approach",
        crossStreet1: "Sustancia Rd.",
        crossStreet2: "Dead End"
    }
  },
  {
    postal: "566",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "5", "2", "8", "9", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Sustancia View",
        crossStreet1: "Sustancia Rd.",
        crossStreet2: "Dead End"
    }
  },
  {
    postal: "567",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "5", "2", "8", "9", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Sustancia Rd.",
        crossStreet1: "El Burro Blvd.",
        crossStreet2: "Noose Approach"
    }
  },
  {
    postal: "568",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "5", "2", "8", "9", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Route 15",
        crossStreet1: "Interstate 2 Exit",
        crossStreet2: "Sustancia Rd. Exit"
    }
  },
  {
    postal: "569",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "7210",
    fdRunOrder: ["7", "10", "6", "1", "5", "2", "8", "9", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LSPD", "LCSO", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Route 15",
        crossStreet1: "Interstate 2 Exit",
        crossStreet2: "Route 15 MM01.00"
    }
  },
  {
    postal: "570",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0703",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Utopia Gardens": {
                crossStreet1: "E. Mirror Dr.",
                crossStreet2: "Dead End"
            },
            "E. Mirror Dr.": {
                crossStreet1: "Mirror Park Blvd.",
                crossStreet2: "Nikola Pl."
            }
        }
    }
  },
  {
    postal: "571",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0704",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Nikola Pl.": {
                crossStreet1: "E. Mirror Dr.",
                crossStreet2: "Dead End"
            },
            "E. Mirror Dr.": {
                crossStreet1: "Utopia Gardens",
                crossStreet2: "Mirror Park Blvd."
            }
        }
    }
  },
  {
    postal: "572",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0703",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Mirror Park Blvd.": {
                crossStreet1: "E. Mirror Dr.",
                crossStreet2: "Nikola Ave."
            },
            "Nikola Ave.": {
                crossStreet1: "Mirror Park Blvd.",
                crossStreet2: "E. Mirror Dr."
            },
            "E. Mirror Dr.": {
                crossStreet1: "Nikola Ave.",
                crossStreet2: "Mirror Park Blvd."
            }
        }
    }
  },
  {
    postal: "573",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0704",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Mirror Park Blvd.": {
                crossStreet1: "Nikola Ave.",
                crossStreet2: "E. Mirror Dr."
            },
            "E. Mirror Dr.": {
                crossStreet1: "Mirror Park Blvd.",
                crossStreet2: "Nikola Ave."
            },
            "Nikola Ave.": {
                crossStreet1: "Mirror Park Blvd.",
                crossStreet2: "E. Mirror Dr."
            }
        }
    }
  },
  {
    postal: "574",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0790",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "W. Mirror Dr.": {
                crossStreet1: "Mirror Pl.",
                crossStreet2: "Mirror Park Blvd."
            },
            "Mirror Pl.": {
                crossStreet1: "West Mirror Dr.",
                crossStreet2: "Nikola Ave."
            },
            "Nikola Ave.": {
                crossStreet1: "Mirror Pl.",
                crossStreet2: "Mirror Park Blvd."
            },
            "Mirror Park Blvd.": {
                crossStreet1: "W. Mirror Dr.",
                crossStreet2: "Nikola Ave."
            }
        }
    }
  },
  {
    postal: "575",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0705",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Nikola Ave.": {
                crossStreet1: "Bridge St.",
                crossStreet2: "Mirror Park Blvd."
            },
            "Bridge St.": {
                crossStreet1: "Nikola Ave.",
                crossStreet2: "W. Mirror Dr."
            },
            "W. Mirror Dr.": {
                crossStreet1: "Bridge St.",
                crossStreet2: "Mirror Park Blvd."
            },
            "Mirror Park Blvd.": {
                crossStreet1: "Nikola Ave.",
                crossStreet2: "W. Mirror Dr."
            }
        }
    }
  },
  {
    postal: "576",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0705",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "W. Mirror Dr.": {
                crossStreet1: "Nikola Ave.",
                crossStreet2: "Mirror Pl."
            },
            "Nikola Ave.": {
                crossStreet1: "W. Mirror Dr.",
                crossStreet2: "Mirror Pl."
            },
            "Mirror Pl.": {
                crossStreet1: "W. Mirror Dr.",
                crossStreet2: "Nikola Ave."
            }
        }
    }
  },
  {
    postal: "577",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0705",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Nikola Ave.": {
                crossStreet1: "W. Mirror Dr.",
                crossStreet2: "Bridge St."
            },
            "W. Mirror Dr.": {
                crossStreet1: "Nikola Ave.",
                crossStreet2: "Bridge St."
            },
            "Bridge St.": {
                crossStreet1: "Nikola Ave.",
                crossStreet2: "W. Mirror Dr."
            }
        }
    }
  },
  {
    postal: "578",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7886",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Popular St.": {
                crossStreet1: "Glory Way",
                crossStreet2: "Supply St."
            },
            "Interstate 2": {
                crossStreet1: "Interstate 2 MM03.00",
                crossStreet2: "Interstate 2 MM02.00"
            }
        }
    }
  },
  {
    postal: "579",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7887",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Glory Way",
        crossStreet1: "Popular St.",
        crossStreet2: "Bridge St."
    }
  },
  {
    postal: "580",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0705",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "W. Mirror Dr.": {
                crossStreet1: "Bridge St.",
                crossStreet2: "Mirror Park Blvd."
            },
            "Bridge St.": {
                crossStreet1: "W. Mirror Dr.",
                crossStreet2: "Glory Way"
            },
            "Mirror Park Blvd.": {
                crossStreet1: "W. Mirror Dr.",
                crossStreet2: "Glory Way"
            }
        }
    }
  },
  {
    postal: "581",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0705",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Mirror Park Blvd.": {
                crossStreet1: "W. Mirror Dr.",
                crossStreet2: "Glory Way"
            },
            "Reservoir Access Rd.": {
                crossStreet1: "Mirror Park Blvd.",
                crossStreet2: "Tataviam Dr."
            },
            "E. Mirror Dr.": {
                crossStreet1: "Mirror Park Blvd.",
                crossStreet2: "Nikola Ave."
            }
        }
    }
  },
  {
    postal: "582",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0708",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Casino Access Rd.",
        crossStreet1: "Vinewood Park Dr.",
        crossStreet2: "Dead End"
    }
  },
  {
    postal: "583",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0708",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Casino Access Rd.",
        crossStreet1: "Vinewood Park Dr.",
        crossStreet2: "Dead End"
    }
  },
  {
    postal: "584",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Interstate 1": {
                crossStreet1: "Vinewood Park Dr.",
                crossStreet2: "Tataviam Dr."
            },
            "Vinewood Park Dr.": {
                crossStreet1: "Interstate 1 NB",
                crossStreet2: "Casino Access Rd."
            }
        }
    }
  },
  {
    postal: "585",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0708",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Vinewood Park Dr.",
        crossStreet1: "Mirror Park Blvd.",
        crossStreet2: "Interstate 1 NB"
    }
  },
  {
    postal: "586",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0708",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        autoFill: true,
        mainStreet: "Vinewood Park Dr.",
        crossStreet1: "Mirror Park Blvd.",
        crossStreet2: "Interstate 1 NB"
    }
  },
  {
    postal: "587",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0707",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Mirror Park Blvd.": {
                crossStreet1: "Vinewood Park Dr.",
                crossStreet2: "Tangerine St."
            },
            "Vinewood Park Dr.": {
                crossStreet1: "Mirror Park Blvd.",
                crossStreet2: "Casino Access Rd."
            }
        }
    }
  },
  {
    postal: "588",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0707",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Bridge St.": {
                crossStreet1: "York St.",
                crossStreet2: "Tangerine St."
            },
            "York St.": {
                crossStreet1: "Bridge St.",
                crossStreet2: "Mirror Park Blvd."
            },
            "Mirror Park Blvd.": {
                crossStreet1: "York St.",
                crossStreet2: "Tangerine St."
            },
            "Tangerine St.": {
                crossStreet1: "Bridge St.",
                crossStreet2: "Mirror Park Blvd."
            }
        }
    }
  },
  {
    postal: "589",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0707",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Bridge St.": {
                crossStreet1: "Tangerine St.",
                crossStreet2: "Glory Way"
            },
            "Tangerine St.": {
                crossStreet1: "Bridge St.",
                crossStreet2: "Mirror Park Blvd."
            },
            "Mirror Park Blvd.": {
                crossStreet1: "Tangerine St.",
                crossStreet2: "Glory Way"
            },
            "Glory Way": {
                crossStreet1: "Bridge St.",
                crossStreet2: "Mirror Park Blvd."
            }
        }
    }
  },
  {
    postal: "590",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0707",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Glory Way": {
                crossStreet1: "Popular St.",
                crossStreet2: "Bridge St."
            },
            "Bridge St.": {
                crossStreet1: "Tangerine St.",
                crossStreet2: "Elgin Ave."
            },
            "Interstate 1 NB": {
                crossStreet1: "Popular St. Entrance",
                crossStreet2: "Interstate 1 MM01.00"
            }
        }
    }
  },
  {
    postal: "591",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0707",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Bridge St.": {
                crossStreet1: "Elgin Ave.",
                crossStreet2: "York St."
            },
            "Mirror Park Blvd.": {
                crossStreet1: "Elgin Ave.",
                crossStreet2: "York St."
            },
            "York St.": {
                crossStreet1: "Bridge St.",
                crossStreet2: "Mirror Park Blvd."
            },
            "Interstate 1": {
                crossStreet1: "Popular St.",
                crossStreet2: "Interstate 1 MM01.00"
            }
        }
    }
  },
  {
    postal: "592",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Vinewood Blvd.": {
                crossStreet1: "Meteor St.",
                crossStreet2: "Elgin Ave."
            },
            "Meteor St.": {
                crossStreet1: "Vinewood Blvd.",
                crossStreet2: "Clinton Ave."
            },
            "Clinton Ave.": {
                crossStreet1: "Meteor St.",
                crossStreet2: "Elgin Ave."
            },
            "Elgin Ave.": {
                crossStreet1: "Vinewood Blvd.",
                crossStreet2: "Clinton Ave."
            }
        }
    }
  },
  {
    postal: "593",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Vinewood Blvd.": {
                crossStreet1: "Power St.",
                crossStreet2: "Meteor St."
            },
            "Power St.": {
                crossStreet1: "Vinewood Blvd.",
                crossStreet2: "Clinton Ave."
            },
            "Clinton Ave.": {
                crossStreet1: "Power St.",
                crossStreet2: "Meteor St."
            },
            "Meteor St.": {
                crossStreet1: "Vinewood Blvd.",
                crossStreet2: "Clinton Ave."
            }
        }
    }
  },
  {
    postal: "594",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Clinton Ave.": {
                crossStreet1: "Alta St.",
                crossStreet2: "Power St."
            },
            "Alta St.": {
                crossStreet1: "Clinton Ave.",
                crossStreet2: "Power St."
            },
            "Power St.": {
                crossStreet1: "Clinton Ave.",
                crossStreet2: "Alta St."
            }
        }
    }
  },
  {
    postal: "595",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "019",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Clinton Ave.": {
                crossStreet1: "Las Lagunas Blvd.",
                crossStreet2: "Alta St."
            },
            "Las Lagunas Blvd.": {
                crossStreet1: "Clinton Ave.",
                crossStreet2: "Alta St."
            },
            "Alta St.": {
                crossStreet1: "Clinton Ave.",
                crossStreet2: "Las Lagunas Blvd."
            }
        }
    }
  },
  {
    postal: "596",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Vinewood Blvd.": {
                crossStreet1: "Alta St.",
                crossStreet2: "Power St."
            },
            "Alta St.": {
                crossStreet1: "Vinewood Blvd.",
                crossStreet2: "Clinton Ave."
            },
            "Clinton Ave.": {
                crossStreet1: "Alta St.",
                crossStreet2: "Power St."
            },
            "Power St.": {
                crossStreet1: "Vinewood Blvd.",
                crossStreet2: "Clinton Ave."
            }
        }
    }
  },
  {
    postal: "597",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Vinewood Blvd.": {
                crossStreet1: "Las Lagunas Blvd.",
                crossStreet2: "Alta St."
            },
            "Las Lagunas Blvd.": {
                crossStreet1: "Vinewood Blvd.",
                crossStreet2: "Clinton Ave."
            },
            "Clinton Ave.": {
                crossStreet1: "Las Lagunas Blvd.",
                crossStreet2: "Alta St."
            },
            "Alta St.": {
                crossStreet1: "Vinewood Blvd.",
                crossStreet2: "Clinton Ave."
            }
        }
    }
  },
  {
    postal: "598",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Las Lagunas Blvd.": {
                crossStreet1: "Spanish Ave.",
                crossStreet2: "Vinewood Blvd."
            },
            "Vinewood Blvd.": {
                crossStreet1: "Las Lagunas Blvd.",
                crossStreet2: "Alta St."
            },
            "Alta St.": {
                crossStreet1: "Spanish Ave.",
                crossStreet2: "Vinewood Blvd."
            }
        }
    }
  },
  {
    postal: "599",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Alta St.": {
                crossStreet1: "Spanish Ave.",
                crossStreet2: "Vinewood Blvd."
            },
            "Vinewood Blvd.": {
                crossStreet1: "Alta St.",
                crossStreet2: "Power St."
            },
            "Power St.": {
                crossStreet1: "Spanish Ave.",
                crossStreet2: "Vinewood Blvd."
            }
        }
    }
  },
  {
    postal: "600",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Power St.": {
                crossStreet1: "Spanish Ave.",
                crossStreet2: "Vinewood Blvd."
            },
            "Vinewood Blvd.": {
                crossStreet1: "Power St.",
                crossStreet2: "Meteor St."
            },
            "Meteor St.": {
                crossStreet1: "Spanish Ave.",
                crossStreet2: "Vinewood Blvd."
            }
        }
    }
  },
  {
    postal: "601",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Meteor St.": {
                crossStreet1: "Spanish Ave.",
                crossStreet2: "Vinewood Blvd."
            },
            "Vinewood Blvd.": {
                crossStreet1: "Meteor St.",
                crossStreet2: "Elgin Ave."
            },
            "Elgin Ave.": {
                crossStreet1: "Spanish Ave.",
                crossStreet2: "Vinewood Blvd."
            }
        }
    }
  },
  {
    postal: "602",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0118",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Interstate 1": {
                crossStreet1: "Power St.",
                crossStreet2: "Interstate 1 MM01.00"
            },
            "Elgin Ave. [S]": {
                crossStreet1: "Popular St.",
                crossStreet2: "Spanish Ave."
            },
            "Elgin Ave. [N]": {
                crossStreet1: "Spanish Ave.",
                crossStreet2: "Bridge St."
            },
            "Spanish Ave.": {
                crossStreet1: "Elgin Ave.",
                crossStreet2: "Meteor St."
            }
        }
    }
  },
  {
    postal: "603",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Spanish Ave.": {
                crossStreet1: "Meteor St.",
                crossStreet2: "Elgin Ave."
            },
            "Meteor St.": {
                crossStreet1: "Spanish Ave.",
                crossStreet2: "Vinewood Blvd."
            },
            "Elgin Ave.": {
                crossStreet1: "Spanish Ave.",
                crossStreet2: "Bridge St."
            }
        }
    }
  },
  {
    postal: "604",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Spanish Ave.": {
                crossStreet1: "Power St.",
                crossStreet2: "Meteor St."
            },
            "Power St.": {
                crossStreet1: "Spanish Ave.",
                crossStreet2: "Vinewood Blvd."
            },
            "Meteor St.": {
                crossStreet1: "Spanish Ave.",
                crossStreet2: "Vinewood Blvd."
            }
        }
    }
  },
  {
    postal: "605",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Spanish Ave.": {
                crossStreet1: "Alta St.",
                crossStreet2: "Power St."
            },
            "Alta St.": {
                crossStreet1: "Spanish Ave.",
                crossStreet2: "Vinewood Blvd."
            },
            "Power St.": {
                crossStreet1: "Spanish Ave.",
                crossStreet2: "Vinewood Blvd."
            }
        }
    }
  },
  {
    postal: "606",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Spanish Ave.": {
                crossStreet1: "Las Lagunas Blvd.",
                crossStreet2: "Alta St."
            },
            "Las Lagunas Blvd.": {
                crossStreet1: "Spanish Ave.",
                crossStreet2: "Vinewood Blvd."
            },
            "Alta St.": {
                crossStreet1: "Spanish Ave.",
                crossStreet2: "Vinewood Blvd."
            }
        }
    }
  },
  {
    postal: "607",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0114",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Hawick Ave.": {
                crossStreet1: "Unknown Rd.",
                crossStreet2: "Alta St."
            },
            "Unknown Rd.": {
                crossStreet1: "Hawick Ave.",
                crossStreet2: "Spanish Ave."
            },
            "Spanish Ave.": {
                crossStreet1: "Unknown Rd.",
                crossStreet2: "Alta St."
            },
            "Alta St.": {
                crossStreet1: "Hawick Ave.",
                crossStreet2: "Spanish Ave."
            }
        }
    }
  },
  {
    postal: "608",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0114",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Hawick Ave.": {
                crossStreet1: "Alta Pl.",
                crossStreet2: "Power St."
            },
            "Alta Pl.": {
                crossStreet1: "Hawick Ave.",
                crossStreet2: "Spanish Ave."
            },
            "Spanish Ave.": {
                crossStreet1: "Alta Pl.",
                crossStreet2: "Power St."
            },
            "Power St.": {
                crossStreet1: "Hawick Ave.",
                crossStreet2: "Spanish Ave."
            }
        }
    }
  },
  {
    postal: "609",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0114",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Hawick Ave.": {
                crossStreet1: "Power St.",
                crossStreet2: "Meteor St."
            },
            "Power St.": {
                crossStreet1: "Hawick Ave.",
                crossStreet2: "Spanish Ave."
            },
            "Spanish Ave.": {
                crossStreet1: "Power St.",
                crossStreet2: "Meteor St."
            },
            "Meteor St.": {
                crossStreet1: "Hawick Ave.",
                crossStreet2: "Spanish Ave."
            }
        }
    }
  },
  {
    postal: "610",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0114",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Hawick Ave.": {
                crossStreet1: "Meteor St.",
                crossStreet2: "Elgin Ave."
            },
            "Meteor St.": {
                crossStreet1: "Hawick Ave.",
                crossStreet2: "Spanish Ave."
            },
            "Spanish Ave.": {
                crossStreet1: "Meteor St.",
                crossStreet2: "Elgin Ave."
            },
            "Elgin Ave.": {
                crossStreet1: "Hawick Ave.",
                crossStreet2: "Spanish Ave."
            }
        }
    }
  },
  {
    postal: "611",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "1399",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Interstate 2": {
                crossStreet1: "Interstate 2 MM02.00",
                crossStreet2: "Interstate 2 MM01.00"
            },
            "Interstate 1": {
                crossStreet1: "Integrity Way",
                crossStreet2: "Interstate 1 MM01.00"
            },
        }
    }
  },
  {
    postal: "612",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0114",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Elgin Ave.": {
                crossStreet1: "Meteor St.",
                crossStreet2: "Hawick Ave."
            },
            "Meteor St.": {
                crossStreet1: "Elgin Ave.",
                crossStreet2: "Hawick Ave."
            },
            "Hawick Ave.": {
                crossStreet1: "Elgin Ave.",
                crossStreet2: "Meteor St."
            }
        }
    }
  },
  {
    postal: "613",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0114",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Interstate 2": {
                crossStreet1: "Interstate 2 MM02.00",
                crossStreet2: "Interstate 2 MM01.00"
            },
            "Power St.": {
                crossStreet1: "Occupation Ave.",
                crossStreet2: "Swiss St."
            },
            "Occupation Ave.": {
                crossStreet1: "Power St.",
                crossStreet2: "Elgin Ave."
            },
            "Elgin Ave.": {
                crossStreet1: "Swiss St.",
                crossStreet2: "Occupation Ave."
            }
        }
    }
  },
  {
    postal: "614",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0114",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Occupation Ave.": {
                crossStreet1: "Power St.",
                crossStreet2: "Meteor St."
            },
            "Power St.": {
                crossStreet1: "Occupation Ave.",
                crossStreet2: "Hawick Ave."
            },
            "Hawick Ave.": {
                crossStreet1: "Power St.",
                crossStreet2: "Meteor St."
            },
            "Meteor St.": {
                crossStreet1: "Occupation Ave.",
                crossStreet2: "Hawick Ave."
            }
        }
    }
  },
  {
    postal: "615",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0112",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Interstate 2": {
                crossStreet1: "Interstate 2 MM02.00",
                crossStreet2: "Interstate 2 MM01.00"
            },
            "Alta St.": {
                crossStreet1: "San Andreas Ave.",
                crossStreet2: "Occupation Ave."
            },
            "Occupation Ave.": {
                crossStreet1: "Alta St.",
                crossStreet2: "Power St."
            },
            "Power St.": {
                crossStreet1: "Swiss St.",
                crossStreet2: "Occupation Ave."
            }
        }
    }
  },
  {
    postal: "616",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0114",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Occupation Ave.": {
                crossStreet1: "Alta St.",
                crossStreet2: "Power St."
            },
            "Alta St.": {
                crossStreet1: "Occupation Ave.",
                crossStreet2: "Hawick Ave."
            },
            "Hawick Ave.": {
                crossStreet1: "Alta St.",
                crossStreet2: "Power St."
            },
            "Power St.": {
                crossStreet1: "Occupation Ave.",
                crossStreet2: "Hawick Ave."
            }
        }
    }
  },
  {
    postal: "617",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0112",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Occupation Ave.": {
                crossStreet1: "Las Lagunas Blvd.",
                crossStreet2: "Alta St."
            },
            "Las Lagunas Blvd.": {
                crossStreet1: "Occupation Ave.",
                crossStreet2: "Hawick Ave."
            },
            "Hawick Ave.": {
                crossStreet1: "Las Lagunas Blvd.",
                crossStreet2: "Alta St."
            },
            "Alta St.": {
                crossStreet1: "Occupation Ave.",
                crossStreet2: "Hawick Ave."
            }
        }
    }
  },
  {
    postal: "618",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0110",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Interstate 2": {
                crossStreet1: "Interstate 2 MM02.00",
                crossStreet2: "Interstate 2 MM01.00"
            },
            "Las Lagunas Blvd.": {
                crossStreet1: "Dorset Dr.",
                crossStreet2: "Occupation Ave."
            },
            "Occupation Ave.": {
                crossStreet1: "Las Lagunas Blvd.",
                crossStreet2: "Alta St."
            },
            "Alta St.": {
                crossStreet1: "Integrity Way",
                crossStreet2: "Occupation Ave."
            }
        }
    }
  },
  {
    postal: "619",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0117",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "San Vitus Blvd.": {
                crossStreet1: "Dorset Dr.",
                crossStreet2: "Carcer Way"
            },
            "Carcer Way": {
                crossStreet1: "San Vitus Blvd.",
                crossStreet2: "Las Lagunas Blvd."
            },
            "Las Lagunas Blvd.": {
                crossStreet1: "Dorset Dr.",
                crossStreet2: "Carcer Way"
            }
        }
    }
  },
  {
    postal: "620",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0117",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
        availableRoads: {
            "Carcer Way": {
                crossStreet1: "San Vitus Blvd.",
                crossStreet2: "Las Lagunas Blvd."
            },
            "San Vitus Blvd.": {
                crossStreet1: "Carcer Way",
                crossStreet2: "Hawick Ave."
            },
            "Hawick Ave.": {
                crossStreet1: "San Vitus Blvd.",
                crossStreet2: "Las Lagunas Blvd."
            },
            "Las Lagunas Blvd.": {
                crossStreet1: "Carcer Way",
                crossStreet2: "Hawick Ave."
            }
        }
    }
  },
  {
    postal: "621",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0115",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hawick Ave.": {
          crossStreet1: "San Vitus Blvd.",
          crossStreet2: "Las Lagunas Blvd."
        },
        "Spanish Ave.": {
          crossStreet1: "San Vitus Blvd.",
          crossStreet2: "Las Lagunas Blvd."
        },
        "Las Lagunas Blvd.": {
          crossStreet1: "Hawick Ave.",
          crossStreet2: "Spanish Ave."
        }
      }
    }
  },
  {
    postal: "622",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0113",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "San Vitus Blvd.": {
          crossStreet1: "Hawick Ave.",
          crossStreet2: "Spanish Ave."
        },
        "Spanish Ave.": {
          crossStreet1: "San Vitus Blvd.",
          crossStreet2: "N. Archer Ave."
        }
      }
    }
  },
  {
    postal: "623",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0115",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave.": {
          crossStreet1: "N. Archer Ave.",
          crossStreet2: "Las Lagunas Blvd."
        },
        "N. Archer Ave.": {
          crossStreet1: "Spanish Ave.",
          crossStreet2: "Eclipse Blvd."
        },
        "Eclipse Blvd.": {
          crossStreet1: "N. Archer Ave.",
          crossStreet2: "Las Lagunas Blvd."
        },
        "Las Lagunas Blvd.": {
          crossStreet1: "Spanish Ave.",
          crossStreet2: "Eclipse Blvd."
        }
      }
    }
  },
  {
    postal: "624",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0113",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave.": {
          crossStreet1: "San Vitus Blvd.",
          crossStreet2: "N. Archer Ave."
        },
        "San Vitus Blvd.": {
          crossStreet1: "Spanish Ave.",
          crossStreet2: "Eclipse Blvd."
        },
        "Eclipse Blvd.": {
          crossStreet1: "San Vitus Blvd.",
          crossStreet2: "N. Archer Ave."
        },
        "N. Archer Ave.": {
          crossStreet1: "Spanish Ave.",
          crossStreet2: "Eclipse Blvd."
        }
      }
    }
  },
  {
    postal: "625",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0122",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave.": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "San Vitus Blvd."
        },
        "Eclipse Blvd.": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "San Vitus Blvd."
        },
        "San Vitus Blvd.": {
          crossStreet1: "Spanish Ave.",
          crossStreet2: "Eclipse Blvd."
        }
      }
    }
  },
  {
    postal: "626",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0113",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hawick Ave.": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "San Vitus Blvd."
        },
        "Eastbourne Way": {
          crossStreet1: "Hawick Ave.",
          crossStreet2: "Spanish Ave."
        },
        "Spanish Ave.": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "San Vitus Blvd."
        },
        "San Vitus Blvd.": {
          crossStreet1: "Hawick Ave.",
          crossStreet2: "Spanish Ave."
        }
      }
    }
  },
  {
    postal: "627",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0111",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Carcer Way": {
          crossStreet1: "Abe Milton Pkwy.",
          crossStreet2: "San Vitus Blvd."
        },
        "Eastbourne Way": {
          crossStreet1: "Abe Milton Pkwy.",
          crossStreet2: "Hawick Ave."
        },
        "Hawick Ave.": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "San Vitus Blvd."
        },
        "San Vitus Blvd.": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Hawick Ave."
        }
      }
    }
  },
  {
    postal: "628",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0111",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Abe Milton Pkwy.": {
          crossStreet1: "Carcer Way",
          crossStreet2: "San Vitus Blvd."
        },
        "Carcer Way": {
          crossStreet1: "Abe Milton Pkwy.",
          crossStreet2: "San Vitus Blvd."
        },
        "San Vitus Blvd.": {
          crossStreet1: "Abe Milton Pkwy.",
          crossStreet2: "Carcer Way."
        }
      }
    }
  },
  {
    postal: "629",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dorset Dr.": {
          crossStreet1: "Dorset Pl.",
          crossStreet2: "Abe Milton Pkwy."
        },
        "Dorset Pl.": {
          crossStreet1: "Dorset Dr.",
          crossStreet2: "Abe Milton Pkwy."
        },
        "Abe Milton Pkwy.": {
          crossStreet1: "Dorset Pl.",
          crossStreet2: "Dorset Dr."
        }
      }
    }
  },
  {
    postal: "630",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0110",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 2": {
          crossStreet1: "Del Perro Exit",
          crossStreet2: "Vinewood Exit"
        },
        "Interstate 5": {
          crossStreet1: "Interstate 2",
          crossStreet2: "Interstate 4 Entrance"
        },
        "Dorset Dr.": {
          crossStreet1: "Dorset Pl.",
          crossStreet2: "Abe Milton Pkwy."
        }
      }
    }
  },
  {
    postal: "631",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 2": {
          crossStreet1: "Del Perro Exit",
          crossStreet2: "Interstate 2 MM02.."
        },
        "Palomino Ave.": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Dorset Dr."
        },
        "Dorset Dr.": {
          crossStreet1: "Palomino Ave.",
          crossStreet2: "Rockford Dr."
        }
      }
    }
  },
  {
    postal: "632",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dorset Dr.": {
          crossStreet1: "Rockford Dr.",
          crossStreet2: "Dorset Pl."
        },
        "Rockford Dr.": {
          crossStreet1: "Dorset Dr.",
          crossStreet2: "Carcer Way"
        },
        "Carcer Way": {
          crossStreet1: "Rockford Dr.",
          crossStreet2: "Abe Milton Pkwy."
        },
        "Abe Milton Pkwy.": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Dorset Pl."
        },
        "Dorset Pl.": {
          crossStreet1: "Dorset Dr.",
          crossStreet2: "Abe Milton Pkwy."
        },
      }
    }
  },
  {
    postal: "633",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0109",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Carcer Way": {
          crossStreet1: "Abe Milton Pkwy.",
          crossStreet2: "San Vitus Blvd."
        },
        "Abe Milton Pkwy.": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Eastbourne Way"
        },
        "Eastbourne Way": {
          crossStreet1: "Abe Milton Pkwy.",
          crossStreet2: "Hawick Ave."
        }
      }
    }
  },
  {
    postal: "634",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Abe Milton Pkwy.": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "Milton Rd."
        },
        "Milton Rd.": {
          crossStreet1: "Abe Milton Pkwy.",
          crossStreet2: "Hawick Ave."
        },
        "Hawick Ave.": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "Eastbourne Way"
        },
        "Eastbourne Way": {
          crossStreet1: "Abe Milton Pkwy.",
          crossStreet2: "Hawick Ave."
        }
      }
    }
  },
  {
    postal: "635",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hawick Ave.": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "Eastbourne Way"
        },
        "Milton Rd.": {
          crossStreet1: "Hawick Ave.",
          crossStreet2: "Spanish Ave."
        },
        "Spanish Ave.": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "Eastbourne Way"
        },
        "Eastbourne Way": {
          crossStreet1: "Hawick Ave.",
          crossStreet2: "Spanish Ave."
        }
      }
    }
  },
  {
    postal: "636",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0123",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave.": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "Eastbourne Way"
        },
        "Milton Rd.": {
          crossStreet1: "Spanish Ave.",
          crossStreet2: "Eclipse Blvd."
        },
        "Eclipse Blvd.": {
          crossStreet1: "Milton Rd.",
          crossStreet2: "San Vitus Blvd."
        }
      }
    }
  },
  {
    postal: "637",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave.": {
          crossStreet1: "Strangeways Dr.",
          crossStreet2: "Milton Rd."
        },
        "Strangeways Dr.": {
          crossStreet1: "Spanish Ave.",
          crossStreet2: "W. Eclipse Blvd."
        },
        "W. Eclipse Blvd.": {
          crossStreet1: "Strangeways Dr.",
          crossStreet2: "Milton Rd."
        },
        "Milton Rd.": {
          crossStreet1: "Spanish Ave.",
          crossStreet2: "W. Eclipse Blvd."
        }
      }
    }
  },
  {
    postal: "638",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Blvd. Del Perro": {
          crossStreet1: "Strangeways Dr.",
          crossStreet2: "Milton Rd."
        },
        "Strangeways Dr.": {
          crossStreet1: "Blvd. Del Perro",
          crossStreet2: "Spanish Ave."
        },
        "Spanish Ave.": {
          crossStreet1: "Strangeways Dr.",
          crossStreet2: "Milton Rd."
        },
        "Milton Rd.": {
          crossStreet1: "Blvd. Del Perro",
          crossStreet2: "Spanish Ave."
        }
      }
    }
  },
  {
    postal: "639",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Eastbourne Way": {
          crossStreet1: "Rockford Dr.",
          crossStreet2: "Abe Milton Pkwy."
        },
        "Rockford Dr.": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "Abe Milton Pkwy."
        },
        "Abe Milton Pkwy.": {
          crossStreet1: "Rockford Dr.",
          crossStreet2: "Eastbourne Way"
        }
      }
    }
  },
  {
    postal: "640",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Carcer Way": {
          crossStreet1: "Rockford Dr.",
          crossStreet2: "Abe Milton Pkwy."
        },
        "Rockford Dr.": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Eastbourne Way"
        },
        "Eastbourne Way": {
          crossStreet1: "Rockford Dr.",
          crossStreet2: "Abe Milton Pkwy."
        },
        "Abe Milton Pkwy.": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Eastbourne Way"
        }
      }
    }
  },
  {
    postal: "641",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dorset Dr.": {
          crossStreet1: "Portola Dr.",
          crossStreet2: "Rockford Dr."
        },
        "Portola Dr.": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Rockford Dr."
        },
        "Carcer Way": {
          crossStreet1: "Portola Dr.",
          crossStreet2: "Rockford Dr."
        },
        "Rockford Dr.": {
          crossStreet1: "Dorset Dr.",
          crossStreet2: "Carcer Way"
        }
      }
    }
  },
  {
    postal: "642",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Carcer Way": {
          crossStreet1: "Portola Dr.",
          crossStreet2: "Rockford Dr."
        },
        "Portola Dr.": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Eastbourne Way"
        },
        "Eastbourne Way": {
          crossStreet1: "Portola Dr.",
          crossStreet2: "Rockford Dr."
        },
        "Rockford Dr.": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Eastbourne Way"
        }
      }
    }
  },
  {
    postal: "643",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Eastbourne Way": {
          crossStreet1: "Portola Dr.",
          crossStreet2: "Rockford Dr."
        },
        "Portola Dr.": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "S. Blvd. Del Perro"
        },
        "S. Blvd. Del Perro": {
          crossStreet1: "Portola Dr.",
          crossStreet2: "Rockford Dr."
        },
        "Rockford Dr.": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "S. Blvd. Del Perro"
        }
      }
    }
  },
  {
    postal: "644",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Blvd. Del Perro": {
          crossStreet1: "Portola Dr.",
          crossStreet2: "Rockford Dr."
        },
        "Portola Dr.": {
          crossStreet1: "Caesars Pl.",
          crossStreet2: "Spanish Ave."
        },
        "Caesars Pl.": {
          crossStreet1: "Portola Dr.",
          crossStreet2: "Spanish Ave."
        },
        "Spanish Ave.": {
          crossStreet1: "Portola Dr.",
          crossStreet2: "Rockford Dr."
        },
        "Rockford Dr.": {
          crossStreet1: "Blvd. Del Perro",
          crossStreet2: "Spanish Ave."
        }
      }
    }
  },
  {
    postal: "645",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Blvd. Del Perro": {
          crossStreet1: "Rockford Dr.",
          crossStreet2: "Strangeways Dr."
        },
        "Rockford Dr.": {
          crossStreet1: "Blvd. Del Perro",
          crossStreet2: "Spanish Ave."
        },
        "Spanish Ave.": {
          crossStreet1: "Rockford Dr.",
          crossStreet2: "Strangeways Dr."
        },
        "Strangeways Dr.": {
          crossStreet1: "Blvd. Del Perro",
          crossStreet2: "Spanish Ave."
        }
      }
    }
  },
  {
    postal: "646",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave.": {
          crossStreet1: "Rockford Dr.",
          crossStreet2: "Strangeways Dr."
        },
        "Rockford Dr.": {
          crossStreet1: "Spanish Ave.",
          crossStreet2: "W. Eclipse Blvd."
        },
        "W. Eclipse Blvd.": {
          crossStreet1: "Rockford Dr.",
          crossStreet2: "Strangeways Dr."
        },
        "Strangeways Dr.": {
          crossStreet1: "Spanish Ave.",
          crossStreet2: "W. Eclipse Blvd."
        }
      }
    }
  },
  {
    postal: "647",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave.": {
          crossStreet1: "Portola Dr.",
          crossStreet2: "Rockford Dr."
        },
        "Portola Dr.": {
          crossStreet1: "Spanish Ave.",
          crossStreet2: "W. Eclipse Blvd."
        },
        "Edwood Way": {
          crossStreet1: "Portola Dr.",
          crossStreet2: "Rockford Dr."
        },
        "W. Eclipse Blvd.": {
          crossStreet1: "Portola Dr.",
          crossStreet2: "Rockford Dr."
        },
        "Rockford Dr.": {
          crossStreet1: "Spanish Ave.",
          crossStreet2: "W. Eclipse Blvd."
        }
      }
    }
  },
  {
    postal: "648",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave.": {
          crossStreet1: "Mad Wayne Thunder Dr.",
          crossStreet2: "Portola Dr."
        },
        "Mad Wayne Thunder Dr.": {
          crossStreet1: "Spanish Ave.",
          crossStreet2: "W. Eclipse Blvd."
        },
        "Steele Way": {
          crossStreet1: "Portola Dr.",
          crossStreet2: "W. Eclipse Blvd."
        },
        "W. Eclipse Blvd.": {
          crossStreet1: "Mad Wayne Thunder Dr.",
          crossStreet2: "Portola Dr."
        },
        "Portola Dr.": {
          crossStreet1: "Spanish Ave.",
          crossStreet2: "W. Eclipse Blvd."
        }
      }
    }
  },
  {
    postal: "649",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Blvd. Del Perro": {
          crossStreet1: "Mad Wayne Thunder Dr.",
          crossStreet2: "Portola Dr."
        },
        "Mad Wayne Thunder Dr.": {
          crossStreet1: "Blvd. Del Perro",
          crossStreet2: "Spanish Ave."
        },
        "Caesars Pl.": {
          crossStreet1: "Portola Dr.",
          crossStreet2: "Spanish Ave."
        },
        "Spanish Ave.": {
          crossStreet1: "Mad Wayne Thunder Dr.",
          crossStreet2: "Portola Dr."
        },
        "Portola Dr.": {
          crossStreet1: "Blvd. Del Perro",
          crossStreet2: "Spanish Ave."
        }
      }
    }
  },
  {
    postal: "650",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0140",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dorset Dr.": {
          crossStreet1: "S. Blvd. Del Perro",
          crossStreet2: "Mad Wayne Thunder Dr."
        },
        "S. Blvd. Del Perro": {
          crossStreet1: "Dorset Dr.",
          crossStreet2: "Mad Wayne Thunder Dr."
        },
        "Mad Wayne Thunder Dr.": {
          crossStreet1: "Dorset Dr.",
          crossStreet2: "S. Blvd. Del Perro"
        },
        "Blvd. Del Perro": {
          crossStreet1: "Dorset Dr.",
          crossStreet2: "Mad Wayne Thunder Dr."
        }
      }
    }
  },
  {
    postal: "651",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Eastbourne Way": {
          crossStreet1: "Mad Wayne Thunder Dr.",
          crossStreet2: "Portola Dr."
        },
        "Mad Wayne Thunder Dr.": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "S. Blvd. Del Perro"
        },
        "S. Blvd. Del Perro": {
          crossStreet1: "Mad Wayne Thunder Dr.",
          crossStreet2: "Portola Dr."
        },
        "Portola Dr.": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "S. Blvd. Del Perro"
        }
      }
    }
  },
  {
    postal: "652",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dorset Dr.": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "Carcer Way"
        },
        "Eastbourne Way": {
          crossStreet1: "Dorset Dr.",
          crossStreet2: "Portola Dr."
        },
        "Portola Dr.": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Eastbourne Way"
        },
        "Carcer Way": {
          crossStreet1: "Dorset Dr.",
          crossStreet2: "Rockford Dr."
        }
      }
    }
  },
  {
    postal: "653",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 2": {
          crossStreet1: "Del Perro Exit",
          crossStreet2: "Interstate 2 MM02.00"
        },
        "Dorset Dr.": {
          crossStreet1: "Heritage Way",
          crossStreet2: "Palomino Ave."
        },
        "Palomino Ave.": {
          crossStreet1: "Interstate 2 WB Exit",
          crossStreet2: "Dorset Dr."
        }
      }
    }
  },
  {
    postal: "654",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0140",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 2": {
          crossStreet1: "Del Perro Exit",
          crossStreet2: "Interstate 2 MM02.00"
        },
        "Movie Star Way": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Heritage Way"
        },
        "Heritage Way": {
          crossStreet1: "Movie Star Way",
          crossStreet2: "Dorset Dr."
        }
      }
    }
  },
  {
    postal: "655",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0140",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Heritage Way": {
          crossStreet1: "Movie Star Way",
          crossStreet2: "Dorset Dr."
        },
        "Movie Star Way": {
          crossStreet1: "Heritage Way",
          crossStreet2: "Marathon Ave."
        },
        "Marathon Ave.": {
          crossStreet1: "Movie Star Way",
          crossStreet2: "Dorset Dr."
        },
        "Dorset Dr.": {
          crossStreet1: "Heritage Way",
          crossStreet2: "Marathon Ave."
        }
      }
    }
  },
  {
    postal: "656",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0140",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marathon Ave.": {
          crossStreet1: "Movie Star Way",
          crossStreet2: "Dorset Dr."
        },
        "Movie Star Way": {
          crossStreet1: "Marathon Ave.",
          crossStreet2: "S. Blvd. Del Perro"
        },
        "S. Blvd. Del Perro": {
          crossStreet1: "Movie Star Way",
          crossStreet2: "Dorset Dr."
        },
        "Dorset Dr.": {
          crossStreet1: "Marathon Ave.",
          crossStreet2: "S. Blvd. Del Perro"
        },
        "Blvd. Del Perro": {
          crossStreet1: "S. Blvd. Del Perro",
          crossStreet2: "Dorset Dr."
        }
      }
    }
  },
  {
    postal: "657",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0107",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Dorset Dr.",
      crossStreet1: "Blvd. Del Perro",
      crossStreet2: "W. Eclipse Blvd.",
    }
  },
  {
    postal: "658",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0140",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Blvd. Del Perro": {
          crossStreet1: "Morningwood Blvd.",
          crossStreet2: "Dorset Dr."
        },
        "Dorset Dr.": {
          crossStreet1: "Blvd. Del Perro",
          crossStreet2: "W. Eclipse Blvd."
        }
      }
    }
  },

  {
    postal: "659",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marathon Ave.": {
          crossStreet1: "Heritage Way",
          crossStreet2: "Movie Star Way"
        },
        "S. Blvd. Del Perro": {
          crossStreet1: "Blvd. Del Perro",
          crossStreet2: "Movie Star Way"
        },
        "Movie Star Way": {
          crossStreet1: "Marathon Ave.",
          crossStreet2: "S. Blvd. Del Perro"
        }
      }
    }
  },
  {
    postal: "660",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Heritage Way": {
          crossStreet1: "Marathon Ave.",
          crossStreet2: "Movie Star Way"
        },
        "Marathon Ave.": {
          crossStreet1: "Heritage Way",
          crossStreet2: "Movie Star Way"
        },
        "Movie Star Way": {
          crossStreet1: "Heritage Way",
          crossStreet2: "Marathon Ave."
        }
      }
    }
  },
  {
    postal: "661",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 2": {
          crossStreet1: "Del Perro Exit",
          crossStreet2: "Interstate 2 MM02.00"
        },
        "Heritage Way": {
          crossStreet1: "Marathon Ave.",
          crossStreet2: "Movie Star Way"
        },
        "Movie Star Way": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Heritage Way",
        }
      }
    }
  },
  {
    postal: "662",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "8", "10", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 2": {
          crossStreet1: "Interstate 2 MM01.00",
          crossStreet2: "Interstate 2 MM02.00"
        },
        "N. Rockford Dr.": {
          crossStreet1: "Interstate 2 WB Exit",
          crossStreet2: "Marathon Ave."
        },
        "Industry Passage": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Heritage Way"
        }
      }
    }
  },
  {
    postal: "663",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "8", "10", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marathon Ave.": {
          crossStreet1: "Morningwood Blvd.",
          crossStreet2: "Heritage Way"
        },
        "Morningwood Blvd.": {
          crossStreet1: "Marathon Ave.",
          crossStreet2: "Blvd. Del Perro"
        },
        "Blvd. Del Perro": {
          crossStreet1: "Morningwood Blvd.",
          crossStreet2: "S. Blvd. Del Perro"
        }
      }
    }
  },
  {
    postal: "664",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "8", "10", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Morningwood Blvd.": {
          crossStreet1: "Cougar Ave.",
          crossStreet2: "Blvd. Del Perro"
        },
        "Blvd. Del Perro": {
          crossStreet1: "Morningwood Blvd.",
          crossStreet2: "Dorset Dr."
        }
      }
    }
  },
  {
    postal: "665",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "8", "10", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Morningwood Blvd.": {
          crossStreet1: "Perth St.",
          crossStreet2: "Dorset Dr."
        },
        "Cougar Ave.": {
          crossStreet1: "Morningwood Blvd.",
          crossStreet2: "Dorset Dr."
        },
        "Dorset Dr.": {
          crossStreet1: "Morningwood Blvd.",
          crossStreet2: "Blvd. Del Perro"
        }
      }
    }
  },
  {
    postal: "666",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "8", "10", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Cougar Ave.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Morningwood Blvd."
        },
        "N. Rockford Dr.": {
          crossStreet1: "Cougar Ave.",
          crossStreet2: "Dorset Dr."
        },
        "Dorset Dr.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Morningwood Blvd."
        },
        "Morningwood Blvd.": {
          crossStreet1: "Cougar Ave.",
          crossStreet2: "Dorset Dr."
        }
      }
    }
  },
  {
    postal: "667",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "8", "10", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Blvd. Del Perro": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Morningwood Blvd."
        },
        "N. Rockford Dr.": {
          crossStreet1: "Blvd. Del Perro",
          crossStreet2: "Cougar Ave."
        },
        "Perth St.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Morningwood Blvd."
        },
        "Morningwood Blvd.": {
          crossStreet1: "Blvd. Del Perro",
          crossStreet2: "Cougar Ave."
        }
      }
    }
  },
  {
    postal: "668",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "8", "10", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marathon Ave.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Morningwood Blvd."
        },
        "N. Rockford Dr.": {
          crossStreet1: "Marathon Ave.",
          crossStreet2: "Blvd. Del Perro"
        },
        "Blvd. Del Perro": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Morningwood Blvd."
        },
        "Morningwood Blvd.": {
          crossStreet1: "Marathon Ave.",
          crossStreet2: "Blvd. Del Perro"
        }
      }
    }
  },
  {
    postal: "669",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0832",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Red Desert Ave.": {
          crossStreet1: "Prosperity St. Promenade",
          crossStreet2: "N. Rockford Dr."
        },
        "Prosperity St. Promenade": {
          crossStreet1: "Red Desert Ave.",
          crossStreet2: "Marathon Ave."
        },
        "Marathon Ave.": {
          crossStreet1: "Prosperity St. Promenade",
          crossStreet2: "N. Rockford Dr."
        },
        "N. Rockford Dr.": {
          crossStreet1: "Red Desert Ave.",
          crossStreet2: "Marathon Ave." 
        }
      }
    }
  },
  {
    postal: "670",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0841",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marathon Ave.": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "N. Rockford Dr."
        },
        "Prosperity St.": {
          crossStreet1: "Marathon Ave.",
          crossStreet2: "Blvd. Del Perro"
        },
        "Blvd. Del Perro": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "N. Rockford Dr."
        },
        "N. Rockford Dr.": {
          crossStreet1: "Marathon Ave.",
          crossStreet2: "Blvd. Del Perro"
        }
      }
    }
  },
  {
    postal: "671",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0844",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Blvd. Del Perro": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "N. Rockford Dr."
        },
        "Prosperity St.": {
          crossStreet1: "Blvd. Del Perro",
          crossStreet2: "Cougar Ave."
        },
        "Cougar Ave.": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "N. Rockford Dr."
        },
        "N. Rockford Dr.": {
          crossStreet1: "Blvd. Del Perro",
          crossStreet2: "Cougar Ave."
        }
      }
    }
  },
  {
    postal: "672",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0845",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Cougar Ave.": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "N. Rockford Dr."
        },
        "Prosperity St.": {
          crossStreet1: "Cougar Ave.",
          crossStreet2: "W. Eclipse Blvd."
        },
        "N. Rockford Dr.": {
          crossStreet1: "Cougar Ave.",
          crossStreet2: "W. Eclipse Blvd."
        }
      }
    }
  },
  {
    postal: "673",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0845",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "W. Eclipse Blvd.",
      crossStreet1: "Playa Vista",
      crossStreet2: "Prosperity St."
    }
  },
  {
    postal: "674",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0845",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Cougar Ave.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Prosperity St."
        },
        "W. Eclipse Blvd.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Prosperity St."
        },
        "Prosperity St.": {
          crossStreet1: "Cougar Ave.",
          crossStreet2: "W. Eclipse Blvd."
        }
      }
    }
  },
  {
    postal: "675",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0845",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Blvd. Del Perro": {
          crossStreet1: "Unknown Rd.",
          crossStreet2: "Prosperity St."
        },
        "Unknown Rd.": {
          crossStreet1: "Blvd. Del Perro",
          crossStreet2: "Cougar Ave."
        },
        "Cougar Ave.": {
          crossStreet1: "Unknown Rd.",
          crossStreet2: "Prosperity St."
        },
        "Prosperity St.": {
          crossStreet1: "Blvd. Del Perro",
          crossStreet2: "Cougar Ave."
        }
      }
    }
  },
  {
    postal: "676",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0830",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marathon Ave.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Prosperity St."
        },
        "Bay City Ave.": {
          crossStreet1: "Marathon Ave.",
          crossStreet2: "Blvd. Del Perro"
        },
        "Blvd. Del Perro": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Prosperity St."
        },
        "Prosperity St.": {
          crossStreet1: "Marathon Ave.",
          crossStreet2: "Blvd. Del Perro"
        }
      }
    }
  },
  {
    postal: "677",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0831",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Red Desert Ave.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Prosperity St. Promenade"
        },
        "Bay City Ave.": {
          crossStreet1: "Red Desert Ave.",
          crossStreet2: "Marathon Ave."
        },
        "Marathon Ave.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Prosperity St. Promenade"
        },
        "Prosperity St. Promenade": {
          crossStreet1: "Red Desert Ave.",
          crossStreet2: "Marathon Ave." 
        }
      }
    }
  },
  {
    postal: "678",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0830",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Blvd. Del Perro": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Prosperity St."
        },
        "Bay City Ave.": {
          crossStreet1: "Blvd. Del Perro",
          crossStreet2: "Playa Vista"
        },
        "Cougar Ave.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Unknown Rd."
        },
        "Unknown Rd.": {
          crossStreet1: "Blvd. Del Perro",
          crossStreet2: "Cougar Ave."
        }
      }
    }
  },
  {
    postal: "679",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0830",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Cougar Ave.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Unknown Rd."
        },
        "Bay City Ave.": {
          crossStreet1: "Cougar Ave.",
          crossStreet2: "W. Eclipse Blvd."
        },
      }
    }
  },
  {
    postal: "680",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0829",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 2": {
          crossStreet1: "W. Eclipse Blvd.",
          crossStreet2: "Equality Way Exit"
        },
        "Bay City Incline": {
          crossStreet1: "Interstate 2",
          crossStreet2: "Bay City Ave."
        },
        "Bay City Ave.": {
          crossStreet1: "W. Eclipse Blvd.",
          crossStreet2: "Blvd. Del Perro"
        },
        "Playa Vista": {
          crossStreet1: "W. Eclipse Blvd.",
          crossStreet2: "Bay City Ave."
        }
      }
    }
  },
  {
    postal: "681",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0830",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Playa Vista": {
          crossStreet1: "W. Eclipse Blvd.",
          crossStreet2: "Bay City Ave."
        },
        "W. Eclipse Blvd.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Interstate 2"
        },
        "Bay City Ave.": {
          crossStreet1: "Playa Vista",
          crossStreet2: "W. Eclipse Blvd."
        }
      }
    }
  },
  {
    postal: "682",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0827",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 2": {
          crossStreet1: "W. Eclipse Blvd.",
          crossStreet2: "Equality Way Exit"
        },
        "Playa Vista": {
          crossStreet1: "W. Eclipse Blvd.",
          crossStreet2: "Bay City Ave."
        },
        "W. Eclipse Blvd.": {
          crossStreet1: "Interstate 2",
          crossStreet2: "Playa Vista"
        }
      }
    }
  },
  {
    postal: "683",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0850",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "W. Eclipse Blvd.",
      crossStreet1: "Interstate 2",
      crossStreet2: "Bay City Ave."
    }
  },
  {
    postal: "684",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0850",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "W. Eclipse Blvd.": {
          crossStreet1: "Interstate 2",
          crossStreet2: "Playa Vista"
        },
        "Route 1": {
          crossStreet1: "Inesno Rd.",
          crossStreet2: "W. Eclipse Blvd."
        },
        "Interstate 2": {
          crossStreet1: "W. Eclipse Blvd.",
          crossStreet2: "Equality Way Exit"
        }
      }
    }
  },
  {
    postal: "685",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0813",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Del Perro N. Beach",
      crossStreet1: "Not Found",
      crossStreet2: "Not Found"
    }
  },
  {
    postal: "686",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0811",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Del Perro N. Beach",
      crossStreet1: "Not Found",
      crossStreet2: "Not Found"
    }
  },
  {
    postal: "687",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0808",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Red Desert Ave.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Dead End"
        },
        "Del Perro Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found"
        },
        "Magellan Ave.": {
          crossStreet1: "Interstate 2",
          crossStreet2: "Sand Castle Way"
        }
      }
    }
  },
  {
    postal: "688",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0808",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Red Desert Ave.",
      crossStreet1: "Bay City Ave.",
      crossStreet2: "Dead End"
    }
  },
  {
    postal: "689",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0809",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Del Perro S. Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found"
        },
        "Conquistador St.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Magellan Ave."
        },
        "Cortes St.": {
          crossStreet1: "Dead End",
          crossStreet2: "Magellan Ave."
        },
        "Magellan Ave.": {
          crossStreet1: "Vitus St.",
          crossStreet2: "Sand Castle Way"
        }
      }
    }
  },
  {
    postal: "690",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Del Perro S. Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found"
        },
        "Vitus St.": {
          crossStreet1: "Dead End",
          crossStreet2: "Magellan Ave."
        },
        "Palomino Ave.": {
          crossStreet1: "Dead End",
          crossStreet2: "Magellan Ave."
        },
        "Magellan Ave.": {
          crossStreet1: "Vitus St.",
          crossStreet2: "Palomino Ave."
        }
      }
    }
  },
  {
    postal: "691",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Del Perro S. Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found" 
        },
        "Palomino Ave.": {
          crossStreet1: "Dead End",
          crossStreet2: "Magellan Ave."
        },
        "Aguja St.": {
          crossStreet1: "Dead End",
          crossStreet2: "Magellan Ave."
        },
        "Goma St.": {
          crossStreet1: "Dead End",
          crossStreet2: "Magellan Ave."
        },
        "Magellan Ave.": {
          crossStreet1: "Palomino Ave.",
          crossStreet2: "Aguja St."
        }
      }
    }
  },
  {
    postal: "692",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Del Perro S. Beach",
      crossStreet1: "Not Found",
      crossStreet2: "Not Found"
    }
  },
  {
    postal: "693",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Melanoma St.": {
          crossStreet1: "Magellan Ave.",
          crossStreet2: "Dead End"
        },
        "Magellan Ave.": {
          crossStreet1: "Goma St.",
          crossStreet2: "Bay City Ave."
        },
        "Bay City Ave.": {
          crossStreet1: "Magellan Ave.",
          crossStreet2: "Dead End"
        }
      }
    }
  },
  {
    postal: "694",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0807",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Del Perro S. Beach",
      crossStreet1: "Not Found",
      crossStreet2: "Not Found"
    }
  },
  {
    postal: "695",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Bay City Ave.": {
          crossStreet1: "Magellan Ave.",
          crossStreet2: "Goma St."
        },
        "Magellan Ave.": {
          crossStreet1: "Goma St.",
          crossStreet2: "Bay City Ave."
        },
        "Melanoma St.": {
          crossStreet1: "Magellan Ave.",
          crossStreet2: "Bay City Ave."
        },
        "Tug St.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Dead End"
        },
        "Goma St.": {
          crossStreet1: "Magellan Ave.",
          crossStreet2: "Bay City Ave."
        },
      }
    }
  },
  {
    postal: "696",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Goma St.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Palomino Ave."
        },
        "Aguja St.": {
          crossStreet1: "Magellan Ave.",
          crossStreet2: "Goma St."
        },
        "Bay City Ave.": {
          crossStreet1: "Tug St.",
          crossStreet2: "Palomino Ave."
        },
        "Palomino Ave.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Prosperity St."
        }
      }
    }
  },
  {
    postal: "697",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0803",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Bay City Ave.": {
          crossStreet1: "Palomino Ave.",
          crossStreet2: "Invention Ct."
        },
        "Invention Ct.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Prosperity St."
        },
        "Prosperity St.": {
          crossStreet1: "Invention Ct.",
          crossStreet2: "Palomino Ave."
        },
        "Palomino Ave.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Prosperity St."
        }
      }
    }
  },
  {
    postal: "698",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0803",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Bay City Ave.": {
          crossStreet1: "Invention Ct.",
          crossStreet2: "Imagination Ct."
        },
        "Imagination Ct.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Prosperity St."
        },
        "Prosperity St.": {
          crossStreet1: "Imagination Ct.",
          crossStreet2: "Invention Ct."
        },
        "Invention Ct.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Prosperity St."
        }
      }
    }
  },
  {
    postal: "699",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0803",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Bay City Ave.": {
          crossStreet1: "Imagination Ct.",
          crossStreet2: "San Andreas Ave."
        },
        "Vespucci Blvd.": {
          crossStreet1: "Magellan Ave.",
          crossStreet2: "Prosperity St."
        },
        "Prosperity St.": {
          crossStreet1: "Imagination Ct.",
          crossStreet2: "Vespucci Blvd."
        },
        "Imagination Ct.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Prosperity St."
        }
      }
    }
  },
  {
    postal: "700",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0805",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Bay City Ave.": {
          crossStreet1: "Conquistador St.",
          crossStreet2: "San Andreas Ave."
        },
        "San Andreas Ave.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Prosperity St."
        },
        "Prosperity St.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave."
        },
        "Vespucci Blvd.": {
          crossStreet1: "Magellan Ave.",
          crossStreet2: "Prosperity St."
        }
      }
    }
  },
  {
    postal: "701",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0805",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Bay City Ave.": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Sandcastle Way"
        },
        "Prosperity St. Promenade": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Red Desert Ave."
        },
        "San Andreas Ave.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Prosperity St. Promenade"
        }
      }
    }
  },
  {
    postal: "702",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0820",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Bay City Ave.": {
          crossStreet1: "Sandcastle Way",
          crossStreet2: "Red Desert Ave."
        },
        "Red Desert Ave.": {
          crossStreet1: "Bay City Ave.",
          crossStreet2: "Prosperity St. Promenade"
        },
        "Prosperity St. Promenade": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Red Desert Ave."
        }
      }
    }
  },
  {
    postal: "703",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0820",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Prosperity St. Promenade": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Red Desert Ave."
        },
        "N. Rockford Dr.": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Red Desert Ave."
        },
        "San Andreas Ave.": {
          crossStreet1: "Prosperity St. Promenade",
          crossStreet2: "N. Rockford Dr." 
        }
      }
    }
  },
  {
    postal: "704",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0805",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Prosperity St.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave."
        },
        "San Andreas Ave.": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "S. Rockford Dr."
        },
        "S. Rockford Dr.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave."
        },
        "Vespucci Blvd.": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "S. Rockford Dr."
        }
      }
    }
  },
  {
    postal: "705",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0803",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Prosperity St.": {
          crossStreet1: "Imagination Ct.",
          crossStreet2: "Vespucci Blvd."
        },
        "Vespucci Blvd.": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "S. Rockford Dr."
        },
        "Imagination Ct.": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "Dead End"
        }
      }
    }
  },
  {
    postal: "706",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0803",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Prosperity St.": {
          crossStreet1: "Invention Ct.",
          crossStreet2: "Imagination Ct."
        },
        "Imagination Ct.": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "Dead End"
        },
        "Invention Ct.": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "S. Rockford Dr."
        }
      }
    }
  },
  {
    postal: "707",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0803",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Prosperity St.": {
          crossStreet1: "Palomino Ave.",
          crossStreet2: "Invention Ct."
        },
        "Invention Ct.": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "S. Rockford Dr."
        },
        "Palomino Ave.": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "S. Rockford Dr."
        }
      }
    }
  },
  {
    postal: "708",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Palomino Ave.",
      crossStreet1: "Goma St.",
      crossStreet2: "S. Rockford Dr."
    }
  },
  {
    postal: "709",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "6", "5", "10", "1", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Tackle St.",
      crossStreet1: "S. Rockford Dr.",
      crossStreet2: "Dead End"
    }
  },
  {
    postal: "710",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0617",
    fdRunOrder: ["6", "8", "5", "10", "1", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dutch Lundon St.": {
          crossStreet1: "Davis Ave.",
          crossStreet2: "Greenwich Pkwy."
        },
        "Greenwich Pkwy.": {
          crossStreet1: "Autopia Pkwy.",
          crossStreet2: "Dutch Lundon St."
        },
        "Interstate 5": {
          crossStreet1: "I5 MM02.00",
          crossStreet2: "Innocence Blvd. Exit"
        }
      }
    }
  },
  {
    postal: "711",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0617",
    fdRunOrder: ["6", "8", "5", "10", "1", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dutch Lundon St.": {
          crossStreet1: "S. Arsenal St.",
          crossStreet2: "Greenwich Pkwy."
        },
        "S. Arsenal St.": {
          crossStreet1: "Dutch Lundon St.",
          crossStreet2: "Muttiny Rd."
        },
        "Interstate 5": {
          crossStreet1: "I5 MM02.00",
          crossStreet2: "Innocence Blvd. Exit"
        }
      }
    }
  },
  {
    postal: "712",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0815",
    fdRunOrder: ["8", "6", "5", "10", "1", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Shank St.": {
          crossStreet1: "Dutch Lundon St.",
          crossStreet2: "Dead End"
        },
        "Dutch Lundon St.": {
          crossStreet1: "S. Rockford Dr.",
          crossStreet2: "S. Arsenal St."
        },
        "Greenwich Pkwy.": {
          crossStreet1: "Autopia Pkwy.",
          crossStreet2: "Dutch Lundon St."
        }
      }
    }
  },
  {
    postal: "713",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Tackle St.": {
          crossStreet1: "S. Rockford Dr.",
          crossStreet2: "Dead End"
        },
        "Palomino Ave.": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "S. Rockford Dr."
        },
        "S. Rockford Dr.": {
          crossStreet1: "Tackle St.",
          crossStreet2: "Palomino Ave."
        }
      }
    }
  },
  {
    postal: "714",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Invention Ct.": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "S. Rockford Dr."
        },
        "S. Rockford Dr.": {
          crossStreet1: "Palomino Ave.",
          crossStreet2: "Invention Ct."
        },
        "Palomino Ave.": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "S. Rockford Dr."
        }
      }
    }
  },
  {
    postal: "715",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0803",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Imagination Ct.": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "Dead End"
        },
        "S. Rockford Dr.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "Invention Ct."
        },
        "Invention Ct.": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "S. Rockford Dr."
        }
      }
    }
  },
  {
    postal: "716",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0803",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Imagination Ct.": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "Dead End"
        },
        "Vespucci Blvd.": {
          crossStreet1: "Prosperity St.",
          crossStreet2: "S. Rockford Dr."
        },
        "S. Rockford Dr.": {
          crossStreet1: "Decker St.",
          crossStreet2: "Vespucci Blvd."
        }
      }
    }
  },
  {
    postal: "717",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0819",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 2": {
          crossStreet1: "Del Perro Exit",
          crossStreet2: "I2 MM02.00"
        },
        "San Andreas Ave.": {
          crossStreet1: "N. Rockford Dr.",
          crossStreet2: "Movie Star Way"
        },
        "Movie Star Way": {
          crossStreet1: "Heritage Way",
          crossStreet2: "San Andreas Ave."
        }
      }
    }
  },
  {
    postal: "718",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0819",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "San Andreas Ave.": {
          crossStreet1: "S. Rockford Dr.",
          crossStreet2: "Decker St."
        },
        "Decker St.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave."
        },
        "Vespucci Blvd.": {
          crossStreet1: "S. Rockford Dr.",
          crossStreet2: "Decker St."
        }
      }
    }
  },
  {
    postal: "719",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0819",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Vespucci Blvd.": {
          crossStreet1: "S. Rockford Dr.",
          crossStreet2: "Decker St."
        },
        "Decker St.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "S. Rockford Dr."
        },
        "S. Rockford Dr.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "Decker St."
        }
      }
    }
  },
  {
    postal: "720",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0806",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Decker St.": {
          crossStreet1: "S. Rockford Dr.",
          crossStreet2: "Vespucci Blvd."
        },
        "Vespucci Blvd.": {
          crossStreet1: "Decker St.",
          crossStreet2: "Ginger St."
        },
        "Ginger St.": {
          crossStreet1: "S. Rockford Dr.",
          crossStreet2: "Vespucci Blvd."
        },
        "S. Rockford Dr.": {
          crossStreet1: "Decker St.",
          crossStreet2: "Ginger St."
        }
      }
    }
  },
  {
    postal: "721",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0806",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "S. Rockford Dr.": {
          crossStreet1: "Palomino Ave.",
          crossStreet2: "Ginger St."
        },
        "Ginger St.": {
          crossStreet1: "S. Rockford Dr.",
          crossStreet2: "Lindsay Circus"
        },
        "Lindsay Circus": {
          crossStreet1: "Ginger St.",
          crossStreet2: "Palomino Ave."
        },
        "Palomino Ave.": {
          crossStreet1: "S. Rockford Dr.",
          crossStreet2: "Lindsay Circus"
        }
      }
    }
  },
  {
    postal: "722",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0816",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "S. Rockford Dr.": {
          crossStreet1: "Tackle St.",
          crossStreet2: "Palomino Ave."
        },
        "Palomino Ave.": {
          crossStreet1: "S. Rockford Dr.",
          crossStreet2: "Lindsay Circus"
        }
      }
    }
  },
  {
    postal: "723",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0816",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "S. Rockford Dr.": {
          crossStreet1: "Dutch Lundon St.",
          crossStreet2: "Palomino Ave."
        },
        "Calais Ave.": {
          crossStreet1: "S. Rockford Dr.",
          crossStreet2: "Adam's Apple Blvd."
        }
      }
    }
  },
  {
    postal: "724",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0816",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Calais Ave.": {
          crossStreet1: "S. Rockford Dr.",
          crossStreet2: "Innocence Blvd."
        },
        "Innocence Blvd.": {
          crossStreet1: "Calais Ave.",
          crossStreet2: "Interstate 5"
        }
      }
    }
  },
  {
    postal: "725",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0818",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Palomino Ave.": {
          crossStreet1: "S. Rockford Dr.",
          crossStreet2: "Lindsay Circus"
        },
        "Lindsay Circus": {
          crossStreet1: "Palomino Ave.",
          crossStreet2: "Calais Ave."
        },
        "Calais Ave.": {
          crossStreet1: "Innocence Blvd.",
          crossStreet2: "Lindsay Circus"
        }
      }
    }
  },
  {
    postal: "726",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0818",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Ginger St.": {
          crossStreet1: "Lindsay Circus",
          crossStreet2: "Vespucci Blvd."
        },
        "Vespucci Blvd.": {
          crossStreet1: "Ginger St.",
          crossStreet2: "Palomino Ave."
        },
        "Palomino Ave.": {
          crossStreet1: "Lindsay Circus",
          crossStreet2: "Vespucci Blvd."
        },
        "Lindsay Circus": {
          crossStreet1: "Ginger St.",
          crossStreet2: "Palomino Ave."
        }
      }
    }
  },
  {
    postal: "727",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0819",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Decker St.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave."
        },
        "San Andreas Ave.": {
          crossStreet1: "Decker St.",
          crossStreet2: "Ginger St."
        },
        "Ginger St.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave."
        },
        "Vespucci Blvd.": {
          crossStreet1: "Decker St.",
          crossStreet2: "Ginger St."
        }
      }
    }
  },
  {
    postal: "728",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0819",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 2": {
          crossStreet1: "Del Perro Exit",
          crossStreet2: "I2 MM02.00"
        },
        "Movie Star Way": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Heritage Way"
        },
        "San Andreas Ave.": {
          crossStreet1: "Movie Star Way",
          crossStreet2: "Ginger St."
        }
      }
    }
  },
  {
    postal: "729",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0819",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 2": {
          crossStreet1: "Del Perro Exit",
          crossStreet2: "I2 MM02.00"
        },
        "Palomino Ave.": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Dorset Dr."
        },
        "San Andreas Ave.": {
          crossStreet1: "Ginger St.",
          crossStreet2: "Palomino Ave."
        }
      }
    }
  },
  {
    postal: "730",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0818",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Ginger St.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave."
        },
        "San Andreas Ave.": {
          crossStreet1: "Ginger St.",
          crossStreet2: "Palomino Ave."
        },
        "Palomino Ave.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave."
        },
        "Vespucci Blvd.": {
          crossStreet1: "Ginger St.",
          crossStreet2: "Palomino Ave."
        }
      }
    }
  },
  {
    postal: "731",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0818",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Palomino Ave.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave."
        },
        "San Andreas Ave.": {
          crossStreet1: "Palomino Ave.",
          crossStreet2: "Calais Ave."
        },
        "Calais Ave.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave."
        },
        "Vespucci Blvd.": {
          crossStreet1: "Palomino Ave.",
          crossStreet2: "Calais Ave."
        }
      }
    }
  },
  {
    postal: "732",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0818",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Palomino Ave.": {
          crossStreet1: "Lindsay Circus",
          crossStreet2: "Vespucci Blvd."
        },
        "Vespucci Blvd.": {
          crossStreet1: "Palomino Ave.",
          crossStreet2: "Calais Ave."
        },
        "Calais Ave.": {
          crossStreet1: "Lindsay Circus",
          crossStreet2: "Vespucci Blvd."
        },
        "Lindsay Circus": {
          crossStreet1: "Palomino Ave.",
          crossStreet2: "Calais Ave."
        }
      }
    }
  },
  {
    postal: "733",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0815",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Calais Ave.": {
          crossStreet1: "Adam's Apple Blvd.",
          crossStreet2: "Vespucci Blvd."
        },
        "Interstate 5 [L]": {
          crossStreet1: "I2 Interchange",
          crossStreet2: "Innocence Blvd."
        },
        "Interstate 5 [U]": {
          crossStreet1: "Interstate 5 MM01.00",
          crossStreet2: "I2 Interchange"
        }
      }
    }
  },
  {
    postal: "734",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0831",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I2 Interchange",
          crossStreet2: "Interstate 5 MM01.00"
        },
        "Calais Ave.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave."
        },
        "San Andreas Ave.": {
          crossStreet1: "Calais Ave.",
          crossStreet2: "Ginger St."
        },
        "Vespucci Blvd.": {
          crossStreet1: "Calais Ave.",
          crossStreet2: "Peaceful St."
        },
      }
    }
  },
  {
    postal: "735",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0831",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 2": {
          crossStreet1: "Del Perro Exit",
          crossStreet2: "I2 MM02.00"
        },
        "Interstate 5": {
          crossStreet1: "I2 Interchange",
          crossStreet2: "I5 MM01.00"
        },
        "Palomino Ave.": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Dorset Dr."
        },
        "Ginger St.": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Dead End"
        },
        "San Andreas Ave.": {
          crossStreet1: "Palomino Ave.",
          crossStreet2: "Ginger St."
        }
      }
    }
  },
  {
    postal: "736",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1035",
    fdRunOrder: ["10", "1", "8", "6", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I2 Interchange",
          crossStreet2: "I5 MM01.00"
        },
        "Interstate 2": {
          crossStreet1: "I2 MM02.00",
          crossStreet2: "Elgin Ave. Exit"
        },
        "San Andreas Ave.": {
          crossStreet1: "Ginger St.",
          crossStreet2: "Las Lagunas Blvd."
        },
        "Las Lagunas Blvd.": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Dorset Dr."
        }
      }
    }
  },
  {
    postal: "737",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1036",
    fdRunOrder: ["10", "1", "8", "6", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I2 Interchange",
          crossStreet2: "I5 MM01.00"
        },
        "San Andreas Ave.": {
          crossStreet1: "Ginger St.",
          crossStreet2: "Peaceful St."
        },
        "Peaceful St.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave."
        },
        "Vespucci Blvd.": {
          crossStreet1: "Calais Ave.",
          crossStreet2: "Peaceful St."
        }
      }
    }
  },
  {
    postal: "738",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1024",
    fdRunOrder: ["10", "6", "1", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I2 Interchange",
          crossStreet2: "I5 MM01.00"
        },
        "Vespucci Blvd.": {
          crossStreet1: "Calais Ave.",
          crossStreet2: "Alta St."
        },
        "Alta St.": {
          crossStreet1: "Adam's Apple Blvd.",
          crossStreet2: "Vespucci Blvd."
        }
      }
    }
  },
  {
    postal: "739",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1023",
    fdRunOrder: ["10", "6", "1", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I2 Interchange",
          crossStreet2: "I5 MM01.00"
        },
        "Interstate 4": {
          crossStreet1: "I5 Interchange",
          crossStreet2: "Strawberry Exit"
        },
        "Alta St.": {
          crossStreet1: "Adam's Apple Blvd.",
          crossStreet2: "Vespucci Blvd."
        },
        "Adam's Apple Blvd.": {
          crossStreet1: "Calais Ave.",
          crossStreet2: "Alta St."
        }
      }
    }
  },
  {
    postal: "740",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1029",
    fdRunOrder: ["10", "1", "6", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Peaceful St.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave."
        },
        "San Andreas Ave. [L]": {
          crossStreet1: "Peaceful St.",
          crossStreet2: "Alta St."
        },
        "San Andreas Ave. [U]": {
          crossStreet1: "Peaceful St.",
          crossStreet2: "Power St."
        },
        "Alta St.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave."
        },
        "Vespucci Blvd.": {
          crossStreet1: "Peaceful St.",
          crossStreet2: "Alta St."
        }
      }
    }
  },
  {
    postal: "741",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1037",
    fdRunOrder: ["10", "1", "6", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 2": {
          crossStreet1: "I5 Interchange",
          crossStreet2: "Elgin Ave. Exit"
        },
        "Las Lagunas Blvd.": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Dorset Dr."
        },
        "Alta St.": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Integrity Way"
        },
        "San Andreas Ave. [L]": {
          crossStreet1: "Peaceful St.",
          crossStreet2: "Alta St."
        },
        "San Andreas Ave. [U]": {
          crossStreet1: "Peaceful St.",
          crossStreet2: "Power St."
        },
      }
    }
  },
  {
    postal: "742",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1039",
    fdRunOrder: ["10", "1", "6", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 2": {
          crossStreet1: "I5 Interchange",
          crossStreet2: "Elgin Ave. Exit"
        },
        "Alta St.": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Integrity Way"
        },
        "Integrity Way": {
          crossStreet1: "Alta St.",
          crossStreet2: "Low Power St."
        },
        "Low Power St.": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Integrity Way"
        },
        "Power St. (Upper)": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Swiss St."
        },
        "San Andreas Ave. [L]": {
          crossStreet1: "Peaceful St.",
          crossStreet2: "Alta St."
        },
        "San Andreas Ave. [U]": {
          crossStreet1: "Peaceful St.",
          crossStreet2: "Power St."
        },
      }
    }
  },
  {
    postal: "743",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1029",
    fdRunOrder: ["10", "1", "6", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Alta St.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave."
        },
        "San Andreas Ave. [L]": {
          crossStreet1: "Peaceful St.",
          crossStreet2: "Alta St."
        },
        "San Andreas Ave. [U]": {
          crossStreet1: "Peaceful St.",
          crossStreet2: "Power St."
        },
        "Low Power St.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave. [L]"
        },
        "Power St. (Upper)": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave. [U]"
        },
        "Vespucci Blvd.": {
          crossStreet1: "Alta St.",
          crossStreet2: "Power St."
        }
      }
    }
  },
  {
    postal: "744",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1020",
    fdRunOrder: ["10", "6", "1", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 4": {
          crossStreet1: "I5 Interchange",
          crossStreet2: "Strawberry Exit"
        },
        "Alta St.": {
          crossStreet1: "Adam's Apple Blvd.",
          crossStreet2: "Vespucci Blvd."
        },
        "Vespucci Blvd.": {
          crossStreet1: "Alta St.",
          crossStreet2: "Power St."
        },
        "Power St.": {
          crossStreet1: "Adam's Apple Blvd.",
          crossStreet2: "Vespucci Blvd."
        },
        "Adam's Apple Blvd.": {
          crossStreet1: "Alta St.",
          crossStreet2: "Power St."
        }
      }
    }
  },
  {
    postal: "745",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "1", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 4": {
          crossStreet1: "I5 Interchange",
          crossStreet2: "Strawberry Exit"
        },
        "Power St.": {
          crossStreet1: "Adam's Apple Blvd.",
          crossStreet2: "Vespucci Blvd."
        },
        "Vespucci Blvd.": {
          crossStreet1: "Power St.",
          crossStreet2: "Elgin Ave."
        },
        "Elgin Ave.": {
          crossStreet1: "Adam's Apple Blvd.",
          crossStreet2: "Vespucci Blvd."
        },
        "Adam's Apple Blvd.": {
          crossStreet1: "Power St.",
          crossStreet2: "Elgin Ave."
        }
      }
    }
  },
  {
    postal: "746",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1021",
    fdRunOrder: ["10", "1", "6", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Power St. (Upper)": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave. [U]"
        },
        "Lower Power St.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave. [L]"
        },
        "San Andreas Ave. [L]": {
          crossStreet1: "Lower Power St.",
          crossStreet2: "Elgin Ave."
        },
        "San Andreas Ave. [U]": {
          crossStreet1: "Power St. (Upper)",
          crossStreet2: "Dead End"
        },
        "Elgin Ave.": {
          crossStreet1: "Vespucci Blvd.",
          crossStreet2: "San Andreas Ave."
        },
        "Vespucci Blvd.": {
          crossStreet1: "Power St.",
          crossStreet2: "Elgin Ave."
        }
      }
    }
  },
  {
    postal: "747",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1021",
    fdRunOrder: ["10", "1", "6", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Lower Power St.": {
          crossStreet1: "San Andreas Ave. [L]",
          crossStreet2: "Integrity Way"
        },
        "Power St. (Upper)": {
          crossStreet1: "San Andreas Ave. [U]",
          crossStreet2: "Swiss St."
        },
        "Integrity Way": {
          crossStreet1: "Lower Power St.",
          crossStreet2: "Strawberry Ave."
        },
        "Swiss St.": {
          crossStreet1: "Power St. (Upper)",
          crossStreet2: "Elgin Ave."
        },
        "Elgin Ave.": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Swiss St."
        },
        "San Andreas Ave. [L]": {
          crossStreet1: "Lower Power St.",
          crossStreet2: "Elgin Ave."
        },
        "San Andreas Ave. [U]": {
          crossStreet1: "Peaceful St.",
          crossStreet2: "Power St. (Upper)"
        }
      }
    }
  },
  {
    postal: "748",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1039",
    fdRunOrder: ["10", "1", "6", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 2": {
          crossStreet1: "I5 Interchange",
          crossStreet2: "Elgin Ave. Exit"
        },
        "Power St.": {
          crossStreet1: "Swiss St.",
          crossStreet2: "Occupation Ave."
        },
        "Elgin Ave.": {
          crossStreet1: "Swiss St.",
          crossStreet2: "Occupation Ave."
        },
        "Swiss St.": {
          crossStreet1: "Power St.",
          crossStreet2: "Elgin Ave."
        },
        "Integrity Way": {
          crossStreet1: "Lower Power St.",
          crossStreet2: "Strawberry Ave."
        }
      }
    }
  },
  {
    postal: "749",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1028",
    fdRunOrder: ["10", "1", "6", "7", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 2": {
          crossStreet1: "Elgin Ave. Exit",
          crossStreet2: "I2 MM03.00"
        },
        "Elgin Ave.": {
          crossStreet1: "Swiss St.",
          crossStreet2: "Occupation Ave."
        },
        "Integrity Way": {
          crossStreet1: "Lower Power St.",
          crossStreet2: "Strawberry Ave."
        },
        "Interstate 1": {
          crossStreet1: "Integrity Way",
          crossStreet2: "Popular St. Exit"
        },
        "Strawberry Ave.": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Integrity Way"
        }
      }
    }
  },
  {
    postal: "750",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1021",
    fdRunOrder: ["10", "6", "1", "7", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Elgin Ave.": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Swiss St."
        },
        "Integrity Way": {
          crossStreet1: "Lower Power St.",
          crossStreet2: "Strawberry Ave."
        },
        "Strawberry Ave.": {
          crossStreet1: "San Andreas Ave.",
          crossStreet2: "Integrity Way"
        },
        "San Andreas Ave.": {
          crossStreet1: "Elgin Ave.",
          crossStreet2: "Strawberry Ave."
        }
      }
    }
  },
  {
    postal: "751",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "1", "7", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "752",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "1", "7", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "753",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "754",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "755",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "756",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "757",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "758",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1027",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "759",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "760",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "761",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "762",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "763",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1088",
    fdRunOrder: ["10", "7", "6", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "764",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1019",
    fdRunOrder: ["10", "7", "6", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "765",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1020",
    fdRunOrder: ["10", "7", "6", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "766",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1013",
    fdRunOrder: ["10", "7", "6", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "767",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1020",
    fdRunOrder: ["10", "7", "6", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "768",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1019",
    fdRunOrder: ["10", "7", "6", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "769",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1018",
    fdRunOrder: ["10", "7", "6", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "770",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1019",
    fdRunOrder: ["10", "7", "6", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "771",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0702",
    fdRunOrder: ["7", "10", "6", "1", "8", "5", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "772",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0702",
    fdRunOrder: ["7", "10", "6", "1", "8", "5", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "773",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7209",
    fdRunOrder: ["7", "10", "6", "1", "8", "5", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "774",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0751",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "775",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0712",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "776",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0712",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "777",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0751",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "778",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0711",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "779",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0711",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "780",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0751",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "781",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0711",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "782",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0711",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "783",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0751",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "784",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0710",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "785",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0710",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "786",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0751",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "787",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0710",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "788",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0713",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "789",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0713",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "790",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0711",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "791",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0701",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "792",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0701",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "793",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0701",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "794",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0701",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "795",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0716",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "796",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "797",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "798",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "799",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "800",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "801",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0713",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "802",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0713",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "803",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0713",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "804",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0713",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "805",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0713",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "806",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0714",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "807",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0714",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "808",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0714",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "809",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "810",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0717",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "811",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0717",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "812",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0716",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "813",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7870",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "814",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "815",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "816",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "817",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "818",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "819",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "820",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0612",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "821",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0612",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "822",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "823",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0604",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "824",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "825",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "826",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "827",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "828",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "829",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0604",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "830",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "831",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0604",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "832",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "833",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "834",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "835",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "836",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "837",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "838",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0601",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "839",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0601",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "840",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "841",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "842",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "843",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0610",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "844",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0610",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "845",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "846",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "847",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "848",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0601",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "849",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "850",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0606",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "851",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0609",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "852",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0601",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "853",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0601",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "854",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0601",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "855",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0601",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "856",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "857",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "858",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "5", "10", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "860",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "0531",
    fdRunOrder: ["5", "6", "10", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "861",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "0531",
    fdRunOrder: ["5", "6", "10", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "862",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "0531",
    fdRunOrder: ["5", "6", "10", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "863",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "0531",
    fdRunOrder: ["5", "6", "10", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "864",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0631",
    fdRunOrder: ["6", "5", "10", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "865",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0607",
    fdRunOrder: ["6", "10", "5", "8", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "866",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0605",
    fdRunOrder: ["6", "10", "5", "8", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "867",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0615",
    fdRunOrder: ["6", "5", "10", "8", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "868",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0615",
    fdRunOrder: ["6", "5", "10", "8", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "869",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0611",
    fdRunOrder: ["6", "5", "10", "8", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "870",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "0510",
    fdRunOrder: ["5", "6", "10", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "871",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "0510",
    fdRunOrder: ["5", "6", "10", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "872",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "0514",
    fdRunOrder: ["5", "6", "10", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "873",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "0526",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "874",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "0526",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "875",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5402",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "876",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "877",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5401",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "878",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5401",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "879",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5401",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "880",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5401",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "881",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5403",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "882",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5403",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "883",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5403",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "884",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "885",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "886",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "887",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "888",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "889",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "890",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "891",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "892",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "893",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5403",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "894",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5403",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "895",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5403",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "896",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5403",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "897",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5403",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "898",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5403",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "899",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "900",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "901",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "902",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "903",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "904",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5404",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "905",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "906",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "907",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "908",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "909",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "910",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "911",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "912",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "913",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "914",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "915",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "916",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "917",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6900",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "918",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "919",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "920",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6900",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "921",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "922",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6900",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "923",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6900",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "924",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6900",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "925",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6900",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "926",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6900",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "927",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6900",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "928",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6900",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "929",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7904",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "930",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7903",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "931",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7903",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "932",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7903",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "933",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7902",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "934",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7902",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "935",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7902",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "936",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7904",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "937",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "938",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "939",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "940",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "941",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "942",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "943",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "944",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "945",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "946",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
  },
  {
    postal: "947",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "948",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "949",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "950",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "951",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "952",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "953",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "954",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "955",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "956",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "957",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "958",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "959",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "960",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "961",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "962",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "963",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "964",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "965",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "966",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "967",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "968",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "969",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "970",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "971",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "972",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "973",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "974",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1102",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "975",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
  {
    postal: "977",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
  },
];
