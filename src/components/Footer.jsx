import { ArrowUp, Linkedin, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-card border-t border-border py-10 px-6 mt-12">
            <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Left: Copyright */}
                <p className="text-sm text-muted-foreground text-center md:text-left">
                    &copy; {new Date().getFullYear()} <strong>CHERIFI Yassine</strong>. All rights reserved.
                </p>

                {/* Center: Navigation Links */}
                <ul className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                    <li><a href="#about" className="hover:text-primary transition">About</a></li>
                    <li><a href="#skills" className="hover:text-primary transition">Skills</a></li>
                    <li><a href="#projects" className="hover:text-primary transition">Projects</a></li>
                    <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
                </ul>

                {/* Right: Socials + Scroll to top */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/yassine-cherifi-%E2%98%81%EF%B8%8F-531627247/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://x.com/yassine0088"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition"
                    >
                        <Twitter size={20} />
                    </a>
                    <a
                        href="https://www.instagram.com/ya_xine/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition"
                    >
                        <Instagram size={20} />
                    </a>
                    <a
                        href="#hero"
                        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};
