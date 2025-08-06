import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
const projects = [
  {
    id: 1,
    title: "Salesforce CRM – Inwi Telecom",
    description:
        "Developed advanced Salesforce features (Apex, LWC, OmniStudio) and managed deployment across multiple environments (Dev to Prod) for Inwi Telecom.",
    image: "/projects/Salesforce.png",
    tags: ["Salesforce", "Apex", "OmniStudio", "LWC"],
  },
  {
    id: 2,
    title: "Messaging App 'Unicom' (Email + Chat + Video)",
    description:
        "Built a real-time messaging platform with MERN stack including email, chat, and video call functionality. Led architecture and coordination.",
    image: "/projects/Unicom.png",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
    githubUrl: "https://github.com/SmartLogix520/uniCom",
  },
  {
    id: 3,
    title: "Restaurant POS & Self-Service Kiosk",
    description:
        "POS system and self-order kiosk with ticket printing, loyalty system, and full admin dashboard. Hosted locally via Docker.",
    image: "/projects/Restaurant.png",
    tags: ["Java", "Spring Boot", "React", "Docker"],
    githubUrl: "https://github.com/SmartLogix520/Restaurant-POS-Self-Service-Kiosk",
  },
  {
    id: 4,
    title: "Inventory Management Software",
    description:
        "Retail inventory system with real-time dashboards, supplier and sales tracking. Developed locally using lightweight stack.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "SQLite3", "Docker"],
  },
  {
    id: 5,
    title: "Real Estate Agency Website",
    description:
        "Real estate platform with advanced filtering and listing management for agencies. Includes full admin interface.",
    image: "/projects/uptown.png",
    tags: ["React", "Java", "Spring Boot", "PostgreSQL"],
    githubUrl: "https://github.com/SmartLogix520/Real-Estate-Agency-Website",
  },
  {
    id: 6,
    title: "Administrative Services Portal",
    description:
        "Client-facing portal for service requests, uploads, live chat and payments. Includes a secure back-office dashboard.",
    image: "/projects/OC-Travel.png",
    tags: ["React", "Java", "Spring Boot", "PostgreSQL"],
    githubUrl: "https://github.com/SmartLogix520/Administrative-Services-Portal",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const ProjectsSection = () => {
  return (
      <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover some of the most impactful projects I’ve worked on—ranging from enterprise-grade Salesforce CRM development to full stack platforms and administrative tools.
          </p>

          <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
          >
            {projects.map((project, key) => (
                <motion.div
                    key={key}
                    variants={cardVariants}
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                          <span
                              key={idx}
                              className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                          >
                      {tag}
                    </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                              <ExternalLink size={20} />
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                              <Github size={20} />
                            </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <a
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
                target="_blank"
                href="https://github.com/SmartLogix520"
            >
              Check My Github <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
  );
};