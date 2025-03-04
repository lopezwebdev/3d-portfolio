import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Back-End Developer",
    company_name: "Melting Hack AI Agent 1-Day Hackathon",
    date: "02/2025 - 02/2025",
    details: [
      "Over the course of just 4 hours our team of three built and deployed an <span style='color: white;'>AI-powered chatbot</span>.",
      "<span style='color: white;'>Using Javascript, React, Tailwind and OpenAI</span>.",
      "<span style='color: white;'>I was one of the two backend developers</span> collaborating with an industry professional of 6 years of experience, from concept to deployment, ensuring a successful and timely project completion.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Inverly",
    date: "11/2024 - 12/2024",
    details: [
      "Developed and delivered a custom application for an <span style='color: white;'>Investment App named Inverly</span> as a front-end developer.",
      "<span style='color: white;'>Designed and developed engaging</span> front-end applications on website.",
      "<span style='color: white;'>Managed the front-end design</span> along with another team member, overseeing the full project lifecycle from concept to deployment, ensuring a successful and timely project completion.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "PawPals",
    date: "11/2024 - 11/2024",
    details: [
      "Developed a <span style='color: white;'>Pet Sitting App</span> as a front-end developer.",
      "Developed and maintained <span style='color: white;'>the front-end scalable services</span>, ensuring high availability for users.",
      "<span style='color: white;'>Collaborated with the team</span> to design and implement front-end interfaces.",
    ],
  },
];

const portfolio = [
  {
    name: "Open Source AI, blockchain and Full-Stack Development Technologies.",
    description:
      "A GitHub repo where I share a curated list of free resources for learning about AI, blockchain, and full-stack web development.",
    image: oscs,
  },
  {
    name: "Dev Notes",
    description:
      "A newsletter with over 6,000 readers made for software developers to keep up with this rapidly evolving industry, with a sister platform in progress.",
    image: devnotes,
  },
  {
    name: "Visually Understanding Algorithms",
    description:
      "A showcase of animated algorithms coded using TypeScript, with the video garnering over 400,000 views.",
    image: algorithms,
  },
];

export { experiences, portfolio };

