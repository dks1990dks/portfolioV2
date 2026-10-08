import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaAws 
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiVite,
  SiNetlify
} from "react-icons/si";

export const techData = [
  {
    name: "React",
    icon: FaReact,
    color: "cyan"
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "emerald" // Mapped to emerald for a premium Node green
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "emerald" // Mapped to emerald for database branding
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "blue" // Mapped to clean slate-blue glow
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "cyan"
  },
  {
    name: "Vite",
    icon: SiVite,
    color: "violet" // Mapped to beautiful purple/violet glow
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "orange" // Mapped to signature orange glow
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "blue"
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "blue"
  },
  {
  name: "AWS S3",
  icon: FaAws,
  color: "orange",
},
  {
    name: "Netlify",
    icon: SiNetlify,
    color: "emerald"
  }
];