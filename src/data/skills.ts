import {
  Code2,
  Layout,
  Database,
  GitBranch,
  Terminal,
  Cloud,
} from "lucide-react";

export const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React", "TypeScript", "Redux", "JavaScript", "Ionic"],
  },
  {
    icon: Layout,
    title: "UI/UX",
    skills: ["Responsive Design", "Material-UI", "Figma", "SCSS", "SASS"],
  },
  // {
  //   icon: Database,
  //   title: "Backend",
  //   skills: ["Node.js", "Express", "RESTful APIs", "GraphQL"]
  // },
  {
    icon: GitBranch,
    title: "Version Control",
    skills: ["Git", "GitHub", "GitLab", "Bitbucket"],
  },
  {
    icon: Terminal,
    title: "Tools",
    skills: ["VS Code", "Webpack", "Jest", "Vite"],
  },
  // {
  //   icon: Cloud,
  //   title: "Deployment",
  //   skills: ["AWS", "Vercel", "Netlify", "Docker"]
  // }
];
