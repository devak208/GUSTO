export interface CommitteeMember {
  name: string;
  role: string;
}

export interface Committee {
  id: string;
  name: string;
  description: string;
  staffCoordinator: CommitteeMember;
  studentCoordinators: CommitteeMember[];
}

export const committees: Committee[] = [
  {
    id: "technical",
    name: "Technical Committee",
    description:
      "Handles all technical aspects of the symposium including workshops, technical events, and competitions.",
    staffCoordinator: {
      name: "Dr. John Doe",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "Jane Smith",
        role: "Final Year",
      },
      {
        name: "Mike Johnson",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    id: "cultural",
    name: "Cultural Committee",
    description:
      "Manages cultural events, performances, and entertainment during the symposium.",
    staffCoordinator: {
      name: "Dr. Sarah Wilson",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "Alex Brown",
        role: "Final Year",
      },
      {
        name: "Emily Davis",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    id: "sponsorship",
    name: "Sponsorship Committee",
    description:
      "Responsible for securing sponsorships and managing industry partnerships.",
    staffCoordinator: {
      name: "Dr. Robert Chen",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "David Wilson",
        role: "Final Year",
      },
      {
        name: "Sarah Johnson",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    id: "logistics",
    name: "Logistics Committee",
    description:
      "Handles venue management, accommodation, and overall event coordination.",
    staffCoordinator: {
      name: "Dr. Michael Lee",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "James Wilson",
        role: "Final Year",
      },
      {
        name: "Emma Davis",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    id: "catering",
    name: "Catering Committee",
    description:
      "Handles venue management, accommodation, and overall event coordination.",
    staffCoordinator: {
      name: "Dr. Anna Smith",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "Gogul",
        role: "Final Year",
      },
      {
        name: "Santhosh",
        role: "Pre-Final Year",
      },
    ],
  },
];
