import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

export function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Omar Elarabi with engineering accent */}
        <div className="flex items-center gap-3">
          <div className="relative">
            {/* Hexagonal engineering icon */}
            <svg width="32" height="32" viewBox="0 0 32 32" className="text-foreground">
              <path
                d="M16 2 L28 9 L28 23 L16 30 L4 23 L4 9 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="opacity-60"
              />
              <text
                x="16"
                y="21"
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="currentColor"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                OE
              </text>
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="text-sm tracking-[0.15em] uppercase leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Omar Elarabi
            </div>
            <div className="text-[10px] tracking-[0.2em] uppercase opacity-40 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Aerospace Eng.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm tracking-wide transition-opacity hover:opacity-60"
            style={{ fontFamily: "var(--font-body)" }}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-sm tracking-wide transition-opacity hover:opacity-60"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("capabilities")}
            className="text-sm tracking-wide transition-opacity hover:opacity-60"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Technical Arsenal
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm tracking-wide transition-opacity hover:opacity-60"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm tracking-wide transition-opacity hover:opacity-60"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Contact
          </button>

          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}