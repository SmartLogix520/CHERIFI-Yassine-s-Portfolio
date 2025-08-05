import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

// Animation configuration
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const AboutSection = () => {
  return (
      <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Full Stack & Salesforce Developer | Passionate Tech Builder
              </h3>

              <p className="text-muted-foreground">
                I am an experienced developer with a strong academic background and hands-on expertise in full stack web development,
                project management, and Salesforce CRM customization. I have led and collaborated with teams on a variety of projects,
                ranging from real-time messaging platforms and e-commerce websites to custom software solutions for SMEs,
                as well as Salesforce CRM integrations for clients in the telecommunications sector.
              </p>

              <p className="text-muted-foreground">
                With a deep understanding of modern technologies like React, Node.js, Spring Boot, and Salesforce OmniStudio, I take pride in building performant, scalable, and intuitive digital solutions. I enjoy leading teams, writing clean and testable code, and delivering robust products under Agile methodologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                  Get In Touch
                </a>
                <a
                    href="/CHERIFI_YASSINE_EN.pdf"
                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* Right column with animated cards */}
            <motion.div
                className="grid grid-cols-1 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
              <motion.div className="gradient-border p-6 card-hover" variants={cardVariants}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Full Stack Development</h4>
                    <p className="text-muted-foreground">
                      Building robust web applications using React, Node.js, Spring Boot, and Docker.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="gradient-border p-6 card-hover" variants={cardVariants}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Salesforce CRM</h4>
                    <p className="text-muted-foreground">
                      Developing and customizing Salesforce solutions using Apex, LWC, and OmniStudio.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="gradient-border p-6 card-hover" variants={cardVariants}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Project Leadership</h4>
                    <p className="text-muted-foreground">
                      Leading cross-functional teams, managing sprints, and delivering full software solutions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};
