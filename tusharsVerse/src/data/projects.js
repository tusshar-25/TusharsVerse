export const projects = [
  {
    id: "worklypro",
    name: "Workly Pro",
    tag: "Fullstack · Workforce Management",
    role: "Fullstack Developer",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Chakra UI",
      "Material UI",
      "Socket.IO",
      "JWT",
    ],
    description:
      "A modern full-stack workforce management platform for organizations to manage employees, tasks, meetings and performance from a single dashboard for both Admin and Employees.",
    highlight:
      "Role-based dashboards, real-time updates via Socket.IO, company-based login with codes, email notifications and a blend of Tailwind + Chakra + MUI UI for a polished experience.",
    liveUrl: "https://workly-pro.netlify.app", // Frontend
    repoUrl: "https://github.com/tusshar-25/Workly-Pro",
    demoCredentials: [
      {
        label: "TechCorp Solutions",
        email: "Company Code: COMP-8768",
        password: "Password: 123456 (Admin/Employee)",
      },
      {
        label: "InnovaSoft Systems",
        email: "Company Code: COMP-9451",
        password: "Password: 123456 (Admin/Employee)",
      },
    ],
    extraLinks: [
      {
        label: "Backend API (Render)",
        url: "https://workly-pro-xo10.onrender.com",
      },
    ],
  },

  {
    id: "wanderlust",
    name: "WanderLust",
    tag: "Node · Express · Travel Listings",
    role: "Fullstack Developer",
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Bootstrap 5",
      "Cloudinary",
      "Multer",
    ],
    description:
      "A full-stack travel listing web application where users can create, explore and manage vacation stays with images, maps, ratings and reviews.",
    highlight:
      "Supports CRUD for listings, Cloudinary-powered image uploads, Bootstrap UI, map coordinates and rating/review system, all backed by MongoDB & Express.",
    liveUrl: "https://wanderlust-project-ihk8.onrender.com",
    repoUrl: "https://github.com/tusshar-25/WanderLust", // if repo name different, yahan change kar dena
    demoCredentials: [], // No credentials needed – open app
  },

  {
    id: "venturewise",
    name: "VentureWise",
    tag: "React · Banking App",
    role: "Frontend Developer",
    stack: ["React", "Vite", "Tailwind CSS", "React Router"],
    description:
      "A sleek React-based digital banking experience with account creation, login, simulated balances and transaction history in a clean modern UI.",
    highlight:
      "Simulated account opening with generated account numbers & PINs, predefined demo users, smooth navigation and a fully responsive layout focused on usability.",
    liveUrl: "https://venturewise.onrender.com",
    repoUrl: "https://github.com/tusshar-25/VentureWise",
    demoCredentials: [
      {
        label: "Rahul Sharma",
        email: "Username: rahul95",
        password: "PIN: rahul95",
      },
      {
        label: "Sneha Verma",
        email: "Username: sneha98",
        password: "PIN: sneha98",
      },
      {
        label: "Amit Singh",
        email: "Username: amit88",
        password: "PIN: amit88",
      },
    ],
  },

  {
    id: "ketra",
    name: "KeTRA",
    tag: "Fullstack · Trading Simulation Platform",
    role: "Fullstack Developer",
    stack: [
      "React 19",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
      "JWT",
      "Yahoo Finance API",
    ],
    description:
      "A modern full-stack trading simulation platform designed to help users learn stock trading, IPO investments, and portfolio management using virtual money in a risk-free environment.",
    highlight:
      "Real-time market data from Yahoo Finance API, animated welcome experience, market hours logic, accelerated IPO system, and professional gradient-based UI with smooth animations.",
    liveUrl: "https://ketra-main.onrender.com",
    repoUrl: "https://github.com/tusshar-25/KeTRA",
    demoCredentials: [
      {
        label: "New User Registration",
        email: "Register with any email/password",
        password: "Virtual funds provided automatically",
      },
    ],
    extraLinks: [
      {
        label: "Backend API (Render)",
        url: "https://ketra.onrender.com",
      },
    ],
  },
];
