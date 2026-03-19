import { useState } from "react";
import { Settings } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ThemeToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("default");

  const themes = [
    { id: "default", name: "Clean Professional", description: "Neutral monochrome precision" },
    { id: "sustainable", name: "Sustainable Engineering", description: "Green systems & renewable focus" },
    { id: "simulation", name: "High-Energy Simulation", description: "Thermal dynamics & dark mode" },
  ];

  const handleThemeChange = (themeId: string) => {
    setCurrentTheme(themeId);
    if (themeId === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", themeId);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-16 right-0 bg-card border border-border rounded-lg shadow-lg p-4 w-72 mb-2"
          >
            <h3 className="text-sm tracking-wider uppercase opacity-60 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              System Aesthetics
            </h3>
            <div className="space-y-2">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => handleThemeChange(theme.id)}
                  className={`w-full text-left p-3 rounded-md transition-all ${
                    currentTheme === theme.id
                      ? "bg-accent border border-border"
                      : "hover:bg-accent/50"
                  }`}
                >
                  <div className="text-sm" style={{ fontFamily: "var(--font-body)" }}>
                    {theme.name}
                  </div>
                  <div className="text-xs opacity-60 mt-1" style={{ fontFamily: "var(--font-body)" }}>
                    {theme.description}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
        aria-label="Toggle theme panel"
      >
        <Settings className="w-5 h-5" />
      </button>
    </div>
  );
}