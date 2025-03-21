export type ContactCategory = "final" | "prefinal";

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
  {
    name: "Sathasivam C",
    role: "Treasurer",
    phone: "+91 9080687054",
    category: "final",
  },
  {
    name: "Santhakumaran C",
    role: "Joint Secretary",
    phone: "+91 9626202811",
    category: "prefinal",
  },
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
];
