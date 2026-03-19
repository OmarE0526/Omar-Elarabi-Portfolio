import { motion } from "motion/react";
import { personalInfo } from "../data/portfolio-data";
import { CV_DOWNLOAD_URL } from "../utils/constants";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Technical background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Blueprint-style corner details */}
      <div className="absolute top-8 left-8 opacity-10">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <line x1="0" y1="60" x2="60" y2="60" stroke="currentColor" strokeWidth="1" />
          <line x1="60" y1="0" x2="60" y2="60" stroke="currentColor" strokeWidth="1" />
          <circle cx="60" cy="60" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-8 right-8 opacity-10">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <line x1="60" y1="60" x2="120" y2="60" stroke="currentColor" strokeWidth="1" />
          <line x1="60" y1="60" x2="60" y2="120" stroke="currentColor" strokeWidth="1" />
          <circle cx="60" cy="60" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs tracking-[0.3em] uppercase opacity-60 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            {personalInfo.title}
          </div>

          <h1
            className="text-7xl md:text-8xl lg:text-9xl mb-8 leading-none tracking-tight"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 900 }}
          >
            {personalInfo.name}
          </h1>

          <p
            className="text-lg md:text-xl max-w-3xl mb-12 opacity-80 leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Final Year Aerospace Engineering student specialising in sustainability, powertrain and aircraft propulsion systems, computational fluid dynamics, and structural analysis through physics-grounded simulation and optimisation.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-sm transition-all hover:shadow-lg"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              View Projects
            </button>
            <button
              onClick={() => window.open(CV_DOWNLOAD_URL, "_blank")}
              className="px-8 py-4 border-2 border-primary text-primary rounded-sm transition-all hover:bg-primary hover:text-primary-foreground"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              Download CV
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}