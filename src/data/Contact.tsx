export type ContactCategory = "overall" | "registration" | "tech" | "nonTech";

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
    category: "overall",
  },
  {
    name: "Subha Sri S",
    role: "Secretary",
    phone: "+91 9994270889",
    category: "overall",
  },
  // {
  //   name: "Sathasivam C",
  //   role: "Treasurer",
  //   phone: "+91 9080687054",
  //   category: "final",
  // },
  {
    name: "Ayyanar S",
    role: "Technical Coordinator",
    phone: "+91 9363446454",
    category: "tech",
  },
  {
    name: "Sanjay Kanth C",
    role: "Technical Coordinator",
    phone: "+91 7904546645",
    category: "tech",
  },
  {
    name: "Santhakumaran C",
    role: "Joint Secretary",
    phone: "+91 9626202811",
    category: "nonTech",
  },
  {
    name: "Sorna Mallika M",
    role: "Joint Secretary",
    phone: "+91 8015754245",
    category: "nonTech",
  },
  {
    name: "Sathya M",
    role: "Registration Coordinator",
    phone: "+91 73051 90935",
    category: "registration",
  },
  {
    name: "Muruganantham R",
    role: "Registration Coordinator",
    phone: "+91 7418024057",
    category: "registration",
  },
];
