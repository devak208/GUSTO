export type ContactCategory = "final" | "prefinal";

export interface Contact {
  name: string;
  role: string;
  phone: string;
  category: ContactCategory;
}

export const contacts: Contact[] = [
  {
    name: "Sanjay Kumar",
    role: "Secretary",
    phone: "+91 9876543210",
    category: "final",
  },
  {
    name: "Priya Patel",
    role: "Joint Secretary",
    phone: "+91 9876543211",
    category: "final",
  },
  {
    name: "Rahul Sharma",
    role: "Treasurer",
    phone: "+91 9876543212",
    category: "final",
  },
  {
    name: "Santhakumaran C",
    role: "Secretary",
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
    role: "Treasurer",
    phone: "+91 7418024057",
    category: "prefinal",
  },
];
