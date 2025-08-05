import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  FileCode,
  Code,
  Braces,
  Database,
  GitBranch,
  Settings,
  Server,
  Cpu,
  PenTool,
  Boxes,
  Terminal,
  Activity,
} from "lucide-react";

// Dictionnaire d'icônes associé à chaque skill
const skillIcons = {
  "HTML/CSS": <FileCode className="w-6 h-6 text-orange-500 animate-pulse" />,
  JavaScript: <FileCode className="w-6 h-6 text-yellow-400 animate-pulse" />,
  React: <Code className="w-6 h-6 text-sky-500 animate-spin" />,
  "TypeScript": <Code className="w-6 h-6 text-blue-500 animate-pulse" />,
  "Tailwind CSS": <Braces className="w-6 h-6 text-cyan-400 animate-pulse" />,
  Bootstrap: <Braces className="w-6 h-6 text-purple-500 animate-pulse" />,

  "Node.js": <Server className="w-6 h-6 text-green-600 animate-pulse" />,
  Express: <Server className="w-6 h-6 text-gray-600 animate-pulse" />,
  Java: <Cpu className="w-6 h-6 text-red-500 animate-pulse" />,
  "Spring Boot": <Activity className="w-6 h-6 text-green-500 animate-pulse" />,
  JEE: <Cpu className="w-6 h-6 text-indigo-500 animate-pulse" />,
  Python: <Cpu className="w-6 h-6 text-yellow-500 animate-pulse" />,
  Django: <Server className="w-6 h-6 text-gray-400 animate-pulse" />,
  WebSockets: <Settings className="w-6 h-6 text-blue-400 animate-spin" />,
  "REST APIs": <Settings className="w-6 h-6 text-slate-500 animate-pulse" />,
  GraphQL: <Braces className="w-6 h-6 text-pink-500 animate-pulse" />,

  Apex: <Code className="w-6 h-6 text-blue-600 animate-spin" />,
  "Lightning Web Components (LWC)": <Code className="w-6 h-6 text-indigo-600 animate-spin" />,
  OmniStudio: <Code className="w-6 h-6 text-violet-600 animate-spin" />,
  SOQL: <Database className="w-6 h-6 text-blue-500 animate-pulse" />,
  "Salesforce Workflow": <Settings className="w-6 h-6 text-blue-400 animate-pulse" />,
  "Salesforce Vlocity": <Braces className="w-6 h-6 text-blue-300 animate-pulse" />,

  MongoDB: <Database className="w-6 h-6 text-green-600 animate-pulse" />,
  PostgreSQL: <Database className="w-6 h-6 text-blue-600 animate-pulse" />,
  MySQL: <Database className="w-6 h-6 text-orange-600 animate-pulse" />,
  SQLite3: <Database className="w-6 h-6 text-gray-600 animate-pulse" />,

  "Git/GitHub": <GitBranch className="w-6 h-6 text-black animate-wiggle" />,
  Docker: <Boxes className="w-6 h-6 text-blue-500 animate-bounce" />,
  Figma: <PenTool className="w-6 h-6 text-pink-500 animate-pulse" />,
  "VS Code": <Terminal className="w-6 h-6 text-indigo-500 animate-pulse" />,
  Unity: <Cpu className="w-6 h-6 text-gray-700 animate-pulse" />,
  "Packet Tracer": <Server className="w-6 h-6 text-emerald-500 animate-pulse" />,
  Workbench: <Settings className="w-6 h-6 text-yellow-500 animate-pulse" />,

  C: <Braces className="w-6 h-6 text-gray-500 animate-pulse" />,
  "C#": <Braces className="w-6 h-6 text-purple-500 animate-pulse" />,
};

const skills = [
  // (reprends ton tableau skills sans modification ici...)
  // Ajout automatique des icônes géré via le mapping ci-dessus
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 80, category: "frontend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 85, category: "backend" },
  { name: "Java", level: 90, category: "backend" },
  { name: "Spring Boot", level: 90, category: "backend" },
  { name: "JEE", level: 70, category: "backend" },
  { name: "Python", level: 70, category: "backend" },
  { name: "Django", level: 65, category: "backend" },
  { name: "WebSockets", level: 80, category: "backend" },
  { name: "REST APIs", level: 85, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },
  { name: "Apex", level: 95, category: "salesforce" },
  { name: "Lightning Web Components (LWC)", level: 95, category: "salesforce" },
  { name: "OmniStudio", level: 95, category: "salesforce" },
  { name: "SOQL", level: 90, category: "salesforce" },
  { name: "Salesforce Workflow", level: 90, category: "salesforce" },
  { name: "Salesforce Vlocity", level: 95, category: "salesforce" },
  { name: "MongoDB", level: 90, category: "database" },
  { name: "PostgreSQL", level: 85, category: "database" },
  { name: "MySQL", level: 65, category: "database" },
  { name: "SQLite3", level: 80, category: "database" },
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Unity", level: 60, category: "tools" },
  { name: "Packet Tracer", level: 60, category: "tools" },
  { name: "Workbench", level: 90, category: "tools" },
  { name: "C", level: 95, category: "other" },
  { name: "C#", level: 60, category: "other" },
];

const categories = [
  "all",
  "frontend",
  "backend",
  "salesforce",
  "database",
  "tools",
  "other",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
      (skill) => activeCategory === "all" || skill.category === activeCategory
  );




  return (
      <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary">Skills</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
                <button
                    key={key}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary/70 text-foreground hover:bg-secondary"
                    )}
                >
                  {category}
                </button>
            ))}
          </div>

          <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
          >
            {filteredSkills.map((skill, key) => (
                <motion.div
                    key={key}
                    variants={cardVariants}
                    className="bg-card p-6 rounded-lg shadow-xs card-hover"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {skillIcons[skill.name] && skillIcons[skill.name]}
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div
                        className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                        style={{ width: skill.level + "%" }}
                    />
                  </div>
                  <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
                  </div>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};
