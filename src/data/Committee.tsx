export interface CommitteeMember {
  name: string;
  role: string;
}

export interface Committee {
  name: string;
  description: string;
  staffCoordinator: CommitteeMember;
  studentCoordinators: CommitteeMember[];
}

export const committees: Committee[] = [
  {
    name: "Hall Decoration Committee",
    description: "Responsible for the decoration and ambiance of event venues.",
    staffCoordinator: {
      name: "Dr. K.G.Maheswari",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "R.Janani",
        role: "Final Year",
      },
      {
        name: "V.Sakthi Devi",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Rangoli Committee",
    description:
      "Manages the creation and display of rangoli art for the symposium.",
    staffCoordinator: {
      name: "Dr. K.G.Maheswari",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "S.V.Jayasrigayathri",
        role: "Final Year",
      },
      {
        name: "S.Pavithra",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Reception Committee",
    description:
      "Manages the welcome and reception of guests and participants.",
    staffCoordinator: {
      name: "Dr. S.Thilagavathi",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "R.Shanmathi",
        role: "Final Year",
      },
      {
        name: "S.Mathumida",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Registration Committee",
    description:
      "Handles participant registration and documentation processes.",
    staffCoordinator: {
      name: "Dr. M.N.Sudha",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "M.Sathya",
        role: "Final Year",
      },
      {
        name: "R.Muruganandham",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Purchasing Committee",
    description:
      "Responsible for procurement of all materials needed for the event.",
    staffCoordinator: {
      name: "Dr. B.V.Prakash",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "M.Manmadharaja",
        role: "Final Year",
      },
      {
        name: "M.Muthamilselvan",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Catering Committee",
    description: "Manages food and beverage services throughout the symposium.",
    staffCoordinator: {
      name: "Dr. K.Murugan & Dr. P.Thangavel",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "B.Elangovan",
        role: "Final Year",
      },
      {
        name: "A.Gogula kannan",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Multimedia Committee",
    description: "Handles all audio-visual aspects of the symposium.",
    staffCoordinator: {
      name: "Dr. M.Sathyakala",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "S.Vignesh",
        role: "Final Year",
      },
      {
        name: "J.Santhoshkumar",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Compering Committee",
    description:
      "Responsible for presenting and anchoring the symposium events.",
    staffCoordinator: {
      name: "Dr. R.Anurekha",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "M.Sifanaa Parveen",
        role: "Final Year",
      },
      {
        name: "M.Farzin",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Poster Design Committee",
    description: "Creates promotional materials and designs for the symposium.",
    staffCoordinator: {
      name: "Dr. P.Thangavel",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "M.Sanjay",
        role: "Final Year",
      },
      {
        name: "M.Nigilkumar",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Discipline Committee",
    description: "Maintains order and ensures smooth conduct of all events.",
    staffCoordinator: {
      name: "Dr. S.Mohanasundharam & Dr. T.Sumathi",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "K.Sunil",
        role: "Final Year",
      },
      {
        name: "R.Dhinesh",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "News Letter Committee",
    description:
      "Publishes and distributes news and updates about the symposium.",
    staffCoordinator: {
      name: "Dr. M.Poongothai",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "V.Shagina",
        role: "Final Year",
      },
      {
        name: "B.Mohamad Irfan",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Photography Committee",
    description: "Documents the symposium through photography and videography.",
    staffCoordinator: {
      name: "Mrs. R.Sathyavani",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "S.V.Aadhithya",
        role: "Final Year",
      },
      {
        name: "N.Prasad",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Prize Distribution Committee",
    description: "Manages awards and prize distribution ceremonies.",
    staffCoordinator: {
      name: "Dr. R.Anurekha",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "S.Saranya",
        role: "Final Year",
      },
      {
        name: "S.Lakshanya",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Souvenir Committee",
    description: "Creates and distributes memorabilia for the symposium.",
    staffCoordinator: {
      name: "Dr. B.V.Prakash",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "S.Dhanush",
        role: "Final Year",
      },
      {
        name: "R.S.Adhersh",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Culturals",
    description:
      "Plans and coordinates cultural events, providing a stage for artistic and creative performances.",
    staffCoordinator: {
      name: "Dr.K.G.Maheswari & Dr.M.N.Sudha",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "S.V.Aadhithya",
        role: "Final Year",
      },
      {
        name: "G.L.Jeevika",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Chief Guest Committee",
    description:
      "Manages invitations and arrangements for chief guests and VIPs.",
    staffCoordinator: {
      name: "Dr. B.V.Prakash",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "C.Sanjay Kanth",
        role: "Pre-Final Year",
      },
      {
        name: "C.Suvetharani",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Website Committee",
    description:
      "Develops and maintains the symposium website and online presence.",
    staffCoordinator: {
      name: "Dr. P.Thangavel",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "G.K.Sabeshragav",
        role: "Pre-Final Year",
      },
      {
        name: "C.K.Devak",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Paper Presentation Committee",
    description: "Manages the technical paper presentation event.",
    staffCoordinator: {
      name: "Dr. M.Poongothai",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "S.Kutraleeswaran",
        role: "Final Year",
      },
      {
        name: "S.Dhayanithi",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Project Committee",
    description: "Oversees project presentations and exhibitions.",
    staffCoordinator: {
      name: "Dr. M.Sathyakala",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "C.Sathasivam",
        role: "Final Year",
      },
      {
        name: "B.Kavikumar",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Code Debugging Committee",
    description: "Organizes and manages code debugging competitions.",
    staffCoordinator: {
      name: "Dr. S.Mohanasundharam",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "R.Rashika",
        role: "Final Year",
      },
      {
        name: "S.K.Sowmiya",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Blind Coding Committee",
    description: "Conducts blind coding challenges and competitions.",
    staffCoordinator: {
      name: "Dr. S.Mohanasundharam",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "S.Rethanya",
        role: "Final Year",
      },
      {
        name: "M.Rasiga",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Tech Quiz Committee",
    description: "Prepares and conducts technical quiz competitions.",
    staffCoordinator: {
      name: "Dr. K.G.Maheswari",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "R.Harish",
        role: "Final Year",
      },
      {
        name: "A.Sanuktha",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Hunt Mods Committee",
    description: "Organizes treasure hunt and similar innovative events.",
    staffCoordinator: {
      name: "Dr. K.G.Maheswari",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "M.Ramesh",
        role: "Final Year",
      },
      {
        name: "B.Ganga",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Meme Contest Committee",
    description: "Manages meme creation contests and fun activities.",
    staffCoordinator: {
      name: "Dr. M.N.Sudha",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "A.Dhinesh",
        role: "Final Year",
      },
      {
        name: "C.K.Devak",
        role: "Pre-Final Year",
      },
    ],
  },
  {
    name: "Photography Contest Committee",
    description: "Oversees photography contests and talent showcase.",
    staffCoordinator: {
      name: "Dr. M.N.Sudha",
      role: "Professor",
    },
    studentCoordinators: [
      {
        name: "M.Sanjay",
        role: "Final Year",
      },
      {
        name: "G.K.Sabeshragav",
        role: "Pre-Final Year",
      },
    ],
  },
];
