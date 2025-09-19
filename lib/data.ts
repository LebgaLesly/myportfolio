//import dependencies
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

//import images
import portfolio from "@/public/Images/portfolio.png";
import portfolio2 from "@/public/Images/portfolio2.png";
import quickandeasy from "@/public/Images/QuickAndEasy.png";
import quickmatch from "@/public/Images/QM.png";
import reina from "@/public/Images/Reina.png";
import technet from "@/public/Images/TechNet.png";
import livquiz from "@/public/Images/livquiz.png";
import association from "@/public/Images/association.png";
import carefirst from "@/public/Images/carefirst.png";
import edubridge from "@/public/Images/edubridge.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Codecademy",
    location: "E-learning",
    description:
      "I got certified after over 1 year of study. i got certifications in Frontend and Backend Development",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
  {
    title: "Frontend Developer",
    location: "Remote, Texas",
    description:
      "While pursiung my certifications, i worked as a frontend developer at ProfuseCC",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Current",
  },
  {
    title: "Software Engineer Intern",
    location: "Douala, Cameroon",
    description:
      "I worked as a software enginner in a company called Hebron Global. Here, I worked both on mobile and web apps",
    icon: React.createElement(FaReact),
    date: "Jan 2024 - July 2024",
  },
  
  {
    title: "Full Stack Developer",
    location: "Remote, Canada",
    description:
      "Created visually appealing user interfaces using NextJs, Redux and Tailwind CSS and ensured responsive design and compatibility across diﬀerent devices and browsers. ",
    icon: React.createElement(FaReact),
    date: "July 2024 - Jan 2025",
  },
] as const;

export const projectsData = [
  {
    title: "CareFirst",
    description:
      "Built a full-stack web app using Next.js, Tailwind CSS, and Appwrite for authentication, database, and server-side functions. Dashboard system embedded.",
    tags: ["ReactJs", "TailwindCss", "Appwrite"],
    imageUrl: carefirst,
    demo: 'https://care-first.vercel.app/',
    code: "",
    
  
  },
  {
    title: "LivQuiz",
    description:
      "Built a full-stack web app using Next.js, Tailwind CSS, and Appwrite for authentication, database, and server-side functions. Optimized for performance with SSR and SSG.",
    tags: ["ReactJs", "TailwindCss", "Aws"],
    imageUrl: livquiz,
    demo: 'https://livquiz.com/',
    code: "",
    
  
  },
  {
    title: "Edubridge",
    description:
      "Building  a full-stack web app using Next.js, Tailwind CSS, and Appwrite for authentication, database, and server-side functions. Dashboard system embedded.",
    tags: ["ReactJs", "TailwindCss", "Appwrite"],
    imageUrl: edubridge,
    demo: 'https://edu-bridge-one.vercel.app/',
    code: "",
    
  
  },
  {
    title: "BOBA USA",
    description:
      "Developed a responsive UI with Next.js and Tailwind CSS, focusing on clean design, accessibility, and mobile-first responsiveness.",
    tags: ["ReactJs", "TailwindCss", "Aws"],
    imageUrl: association,
    demo: 'https://association-peach.vercel.app/',
    code: "",
  
  },
  {
    title: "Portfolio",
    description:
      " A collection of standout work samples showcasing my skills and expertise in as a Full stack developer. Demonstrates creativity, problem-solving abilities, and quality results",
    tags: ["ReactJs", "TailwindCss", "Aws"],
    imageUrl: portfolio,
    code: "https://github.com/LebgaLesly/Portfolio",
    demo: 'https://portfolio-ten-red-74.vercel.app/'
  
  },
  
  {
    title: "Portfolio",
    description:
    " A collection of standout work samples showcasing my skills and expertise in as a Full stack developer. Demonstrates creativity, problem-solving abilities, and quality results",
    tags: ["NextJs", "TailwindCss", "Framer Motion", "Vercel", "Typescript"],
    imageUrl: portfolio2,
    code: "https://github.com/LebgaLesly/myportfolio",
    demo: 'https://leslyportfolio.vercel.app/'
  },
  {
    title: "Quick Match",
    description: 
    "Designed and developed a matching game  using plain Jvascript, HTML and CSS",
    tags: ["HTML", "CSS", "Javascript", "AWS"],
    imageUrl: quickmatch,
    code: "https://github.com/LebgaLesly/Quick_Match",
    demo: 'https://lebgalesly.github.io/Quick_Match/'
  },
  {
    title: "Reina",
    description:
    "Designed and developed a landing page using basic HTML, CSS, and JavaScript",
    tags: ["HTML", "CSS", "Javascript", "AWS"],
    imageUrl: reina,
    code: "https://github.com/LebgaLesly/Mi-Reina",
    demo: 'https://lebgalesly.github.io/Mi-Reina/'
  },
  {
    title: "Technet",
    description:
      "Designed and developed a fully functional Full Stack e-commerce website using the MERN stack",
    tags: ["React", "Redux", "ExpreeJs", "Tailwind", "MongoDB", "AWS"],
    imageUrl: technet,
    code: "https://github.com/LebgaLesly/TechNet",
    demo: ''
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Appwrite",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Firebase",
  "MongoDB",
  "Redux",
  "React Native",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "AWS",
  "Framer Motion",
] as const;
