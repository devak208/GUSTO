export type ContactCategory = "final" | "prefinal" | "event";

export interface Contact {
  name: string;
  role: string;
  phone: string;
  category: ContactCategory;
}

export const contacts: Contact[] = [
  {
    name: "Dilliraj G",
    role: "Secretary",
    phone: "+91 9345816238",
    category: "final",
  },
  {
    name: "Subha Sri S",
    role: "Secretary",
    phone: "+91 9994270889",
    category: "final",
  },
  // {
  //   name: "Sathasivam C",
  //   role: "Treasurer",
  //   phone: "+91 9080687054",
  //   category: "final",
  // },
  //{
  //  name: "Santhakumaran C",
  //  role: "Joint Secretary",
  //  phone: "+91 9626202811",
   /// category: "final",
  //},
  {
    name: "Sorna Mallika M",
    role: "Joint Secretary",
    phone: "+91 8015754245",
    category: "prefinal",
  },
  {
    name: "Muruganantham R",
    role: "Joint Treasurer",
    phone: "+91 7418024057",
    category: "prefinal",
  },
  {
    name: "Ayyanar S",
    role: "Technical Coordinator",
    phone: "+91 9363446454",
    category: "event",
  },
  {
    name: "Santhakumaran C",
    role: "Non-Technical Coordinator",
    phone: "+91 9626202811",
    category: "event",
  },
];
