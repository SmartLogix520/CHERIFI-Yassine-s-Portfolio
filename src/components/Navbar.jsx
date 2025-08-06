import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      setIsVisible(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
      <nav
          className={cn(
              "fixed w-full z-50 transition-all duration-300",
              isScrolled ? "bg-background/80 backdrop-blur-md shadow-xs" : "bg-transparent",
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          )}
      >
        <div className="container flex items-center justify-between py-4 md:py-5">
          <a className="text-xl font-bold text-primary flex items-center" href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground"> CHERIFI Yassine </span> Portfolio
          </span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
                <a
                    key={key}
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
            ))}
          </div>

          {/* mobile nav toggle */}
          <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden p-2 text-foreground z-50"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* mobile menu */}
          <div
              className={cn(
                  "fixed top-0 right-0 w-full h-screen bg-background/95 backdrop-blur-md z-40 transition-transform duration-500 ease-in-out md:hidden",
                  isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              )}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
              {navItems.map((item, key) => (
                  <a
                      key={key}
                      href={item.href}
                      className="text-foreground hover:text-primary font-medium transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
  );
};
