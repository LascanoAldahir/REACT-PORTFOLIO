import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import Technologies from "../components/Technologies";

export const HERO_CONTENT = `I am a Front-End Developer with experience in building responsive and user-centric interfaces using Angular, PrimeNG, and PrimeFlex. Currently working at Tata Consultancy Services on a project for Produbanco, I focus on delivering clean, maintainable code and intuitive designs that enhance user experience.`;

export const ABOUT_TEXT = `I am a committed Front-End Developer with experience in creating responsive, user-focused web applications. Currently working at Tata Consultancy Services on a project for Produbanco, I specialize in building consultative screens using Angular, PrimeNG, and PrimeFlex. My background includes practical knowledge of Git for version control and task management through Azure DevOps, ensuring efficient collaboration and code integration. Driven by continuous learning, I aim to deliver clean, maintainable solutions that combine functionality and design. Outside of work, I enjoy exploring emerging technologies and refining my development skills.`;

export const EXPERIENCES = [
  {
    year: "March 2025 - present",
    role: "Front-End Developer",
    company: "TATA CONSULTANCY SERVICES",
    description: `Developing responsive and consultative screens for a banking project at Produbanco. Responsibilities include implementing UI components using Angular, PrimeNG, and PrimeFlex, ensuring usability and performance. Collaborating through Azure DevOps and managing version control with Git.`,
    tool: ["Angular", "PrimeNG", "PrimeFlex", "TypeScript", "Git", "Azure DevOps"],
  },
  {
    year: "2023 - 2023",
    role: "Technical Support in Hardware and Software Maintenance.",
    company: "AAMPETRA (Academia Aeronáutica Mayor Pedro Traversari)",
    description: `Provided hardware and software maintenance for institutional computers and managed virtual platforms to ensure smooth operations.`,
    tool: ["Windows OS", "Hardware Maintenance", "Software Troubleshooting"],
  },
];

export const PROJECTS = [
  {
    title: "BACKEND - Comprehensive Technical Support and Customer Service System for Electronics Workshop",
    image: project1,
    link: "https://github.com/LascanoAldahir/BackendTesis",
    description:
      "A robust backend system designed to manage repairs and customer interactions for an electronics workshop. Features include service registration, budget estimates, customer status tracking, and real-time notifications.",
    tool: ["Node.js", "Express.js", "MongoDB", "JWT", "Scrum Methodology", "Render Hosting"],
  },
  
];

export const CONTACT = {
  address: "Ecuador - Quito - Mena Dos.",
  phoneNo: "+593 998 341 271 ",
  email: "aldahirlascano@gmail.com",
};
