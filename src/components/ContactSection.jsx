import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import * as emailjs from "emailjs-com";
import { motion } from "framer-motion";


// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
        .sendForm(
            "service_0momuqe",      // Remplace par ton Service ID
            "template_61usxmz",     // Remplace par ton Template ID
            e.target,              // Le formulaire HTML
            "d4KAIzTYneh4NWSHe"      // Clé publique EmailJS
        )
        .then(() => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          e.target.reset();

          setIsSubmitting(false);
        })
        .catch((error) => {
          toast({
            title: "Error",
            description: "Something went wrong. Try again later.",
          });
          setIsSubmitting(false);
          console.error("EmailJS error:", error);
        });
  };


  return (
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary"> Touch</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>

          <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
          >
            {/* Left side (contact info + social links) */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6 justify-center">
                <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                        href="mailto:cherifiyassine17@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      cherifiyassine17@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a
                        href="tel:+213542102840"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +213 542-10-28-40
                    </a>
                  </div>
                </motion.div>

                <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground hover:text-primary transition-colors">
                      Algeria, Tizi-ouzou
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div className="pt-8" variants={itemVariants}>
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4 justify-center">
                  <a href="https://www.linkedin.com/in/yassine-cherifi-%E2%98%81%EF%B8%8F-531627247/" target="_blank">
                    <Linkedin />
                  </a>
                  <a href="https://x.com/yassine0088" target="_blank">
                    <Twitter />
                  </a>
                  <a href="https://www.instagram.com/ya_xine/" target="_blank">
                    <Instagram />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side (form) */}
            <motion.div
                className="bg-card p-8 rounded-lg shadow-xs"
                onSubmit={handleSubmit}
                variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                      placeholder="Name FirstName"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                      placeholder="email@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                      id="message"
                      name="message"
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                        "cosmic-button w-full flex items-center justify-center gap-2"
                    )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};