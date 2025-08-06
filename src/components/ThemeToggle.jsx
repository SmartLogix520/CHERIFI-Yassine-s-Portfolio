import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
      <button
          aria-label="Toggle theme"
          title="Toggle dark/light mode"
          onClick={toggleTheme}
          className={cn(
              "fixed z-50 p-2 rounded-full transition-colors duration-300 bg-background dark:bg-muted border border-border shadow-md",
              "right-4 sm:right-5",      // Right spacing mobile/desktop
              "top-auto bottom-4 sm:top-5 sm:bottom-auto" // Bottom on mobile, top on desktop
          )}
      >
        {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
            <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>
  );
};
