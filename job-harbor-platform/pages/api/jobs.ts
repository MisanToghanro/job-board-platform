import { NextApiRequest,NextApiResponse } from "next";

const handler = (req:NextApiRequest, res:NextApiResponse) => {

const jobs = [
  {
    id: 1,
    category: "Frontend Developer",
    location: "Remote",
    experience: "Entry-Level",
    company: "TechNova",
    description: "Work on building responsive UIs with React and TypeScript.",
  },
  {
    id: 2,
    category: "Backend Developer",
    location: "In-Office",
    experience: "Junior-Level",
    company: "DataForge",
    description: "Develop scalable APIs and microservices.",
  },
  {
    id: 3,
    category: "Fullstack Developer",
    location: "Hybrid",
    experience: "Senior-Level",
    company: "CodeWorks",
    description: "Handle both frontend and backend tasks.",
  },
  {
    id: 4,
    category: "Frontend Developer",
    location: "In-Office",
    experience: "Junior-Level",
    company: "Designify",
    description: "Create pixel-perfect UI with Tailwind CSS.",
  },
  {
    id: 5,
    category: "Backend Developer",
    location: "Remote",
    experience: "Senior-Level",
    company: "CloudBase",
    description: "Maintain server-side logic and databases.",
  },
  {
    id: 6,
    category: "Mobile Developer",
    location: "Remote",
    experience: "Mid-Level",
    company: "AppSphere",
    description: "Build cross-platform apps with React Native.",
  },
  {
    id: 7,
    category: "DevOps Engineer",
    location: "Hybrid",
    experience: "Senior-Level",
    company: "InfraCore",
    description: "Automate CI/CD pipelines and manage cloud infrastructure.",
  },
  {
    id: 8,
    category: "UI/UX Designer",
    location: "Remote",
    experience: "Junior-Level",
    company: "PixelPush",
    description: "Design user-friendly interfaces and wireframes.",
  },
  {
    id: 9,
    category: "Data Scientist",
    location: "In-Office",
    experience: "Junior-Level",
    company: "AlgoLabs",
    description: "Analyze datasets and build predictive models.",
  },
  {
    id: 10,
    category: "Security Engineer",
    location: "Remote",
    experience: "Senior-Level",
    company: "CyberShield",
    description: "Protect applications and networks from vulnerabilities.",
  },
  {
    id: 11,
    category: "Product Manager",
    location: "Hybrid",
    experience: "Junior-Level",
    company: "VisionFlow",
    description: "Coordinate development and align features with business goals.",
  },
  {
    id: 12,
    category: "QA Engineer",
    location: "In-Office",
    experience: "Entry-Level",
    company: "Testify",
    description: "Write test cases and ensure software quality.",
  },
];


  res.status(200).json({jobs})
}



export default handler
