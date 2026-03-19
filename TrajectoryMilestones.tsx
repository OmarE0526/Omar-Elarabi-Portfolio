import { motion } from "motion/react";
import { education, experience } from "../data/portfolio-data";
import { GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

interface TimelineItem {
  type: "education" | "experience";
  title: string;
  organisation: string;
  dates: string;
  dateSort: number;
  bullets?: string[];
  id?: string;
  classification?: string;
  focusModules?: string[];
  startDate: string; // For hover display
}

// Helper function to parse date strings for sorting
function parseDateForSorting(dateString: string): number {
  if (dateString.toLowerCase().includes("present")) return 0;
  
  const yearMatch = dateString.match(/(\d{4})/);
  if (yearMatch) {
    const year = parseInt(yearMatch[1]);
    return 2026 - year;
  }
  return 999;
}

// Extract start date from date range
function extractStartDate(dateString: string): string {
  if (dateString.toLowerCase().includes("present")) return "Present";
  
  // Match patterns like "September 2024" or "2024"
  const match = dateString.match(/([A-Za-z]+\s+\d{4}|\d{4})/);
  return match ? match[0] : dateString;
}

export function TrajectoryMilestones() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const timelineItems: TimelineItem[] = [
    ...education.map(edu => ({
      type: "education" as const,
      title: edu.degree,
      organisation: edu.institution,
      dates: edu.dates,
      dateSort: parseDateForSorting(edu.dates),
      classification: edu.classification,
      focusModules: edu.focusModules,
      id: edu.id,
      startDate: extractStartDate(edu.dates),
    })),
    ...experience.map(exp => ({
      type: "experience" as const,
      title: exp.role,
      organisation: exp.organisation,
      dates: exp.dates,
      dateSort: parseDateForSorting(exp.dates),
      bullets: exp.impacts.slice(0, 2),
      id: exp.id,
      startDate: extractStartDate(exp.dates),
    })),
  ].sort((a, b) => a.dateSort - b.dateSort);

  const educationItems = timelineItems.filter(item => item.type === "education");
  const experienceItems = timelineItems.filter(item => item.type === "experience");

  return (
    <section id="experience" className="py-32 border-t border-border bg-background">
      <div className="max-w-[1600px] mx-auto px-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase opacity-60 mb-16"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Evolution Path
        </motion.h2>

        {/* Horizontal Timeline Container */}
        <div className="relative overflow-x-auto pb-8">
          <div className="min-w-max px-16">
            {/* Education Row (Above Timeline) */}
            <div className="mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-8"
              >
                <GraduationCap className="w-5 h-5 opacity-60" />
                <h3
                  className="text-lg"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  Education
                </h3>
              </motion.div>

              <div className="flex gap-6">
                {educationItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-[400px] p-6 border border-border bg-card transition-all ${
                      item.id ? "group hover:shadow-lg hover:border-primary/30 cursor-pointer" : "hover:shadow-md hover:border-primary/20"
                    }`}
                  >
                    {item.id ? (
                      <Link to={`/education/${item.id}`} className="block">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div
                            className="text-sm flex-1 group-hover:text-primary transition-colors"
                            style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                          >
                            {item.title}
                          </div>
                        </div>
                        <div className="text-sm opacity-70 mb-2" style={{ fontFamily: "var(--font-body)" }}>
                          {item.organisation}
                        </div>
                        <div className="text-xs opacity-50 mb-4" style={{ fontFamily: "var(--font-body)" }}>
                          {item.dates}
                        </div>
                        {item.classification && (
                          <div className="text-xs opacity-60 mb-3 text-primary" style={{ fontFamily: "var(--font-body)" }}>
                            {item.classification}
                          </div>
                        )}
                        {item.focusModules && item.focusModules.length > 0 && (
                          <div className="text-xs opacity-50 space-y-1 mb-3" style={{ fontFamily: "var(--font-body)" }}>
                            {item.focusModules.slice(0, 3).map((module, idx) => (
                              <div key={idx}>• {module}</div>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          <span style={{ fontFamily: "var(--font-body)" }}>View Academic Record</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </Link>
                    ) : (
                      <>
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div
                            className="text-sm flex-1"
                            style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                          >
                            {item.title}
                          </div>
                        </div>
                        <div className="text-sm opacity-70 mb-2" style={{ fontFamily: "var(--font-body)" }}>
                          {item.organisation}
                        </div>
                        <div className="text-xs opacity-50 mb-4" style={{ fontFamily: "var(--font-body)" }}>
                          {item.dates}
                        </div>
                        {item.classification && (
                          <div className="text-xs opacity-60 mb-3 text-primary" style={{ fontFamily: "var(--font-body)" }}>
                            {item.classification}
                          </div>
                        )}
                        {item.focusModules && item.focusModules.length > 0 && (
                          <div className="text-xs opacity-50 space-y-1" style={{ fontFamily: "var(--font-body)" }}>
                            {item.focusModules.slice(0, 3).map((module, idx) => (
                              <div key={idx}>• {module}</div>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Timeline Line with gradient and glow */}
            <div className="relative mb-12" style={{ minWidth: `${experienceItems.length * 420}px` }}>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative h-1 bg-gradient-to-r from-primary via-primary/80 to-primary origin-left shadow-lg shadow-primary/20"
                style={{ minWidth: `${experienceItems.length * 420}px` }}
              >
                {/* Glow effect on the line */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary blur-sm opacity-50" />

                {/* Timeline nodes with hover effect */}
                {experienceItems.map((item, index) => (
                  <div
                    key={index}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                    style={{ left: `${(index / (experienceItems.length - 1)) * 100}%` }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className={`w-5 h-5 bg-primary border-4 border-background rounded-full cursor-pointer transition-all duration-300 shadow-lg shadow-primary/30 ${
                        hoveredIndex === index ? "scale-150 shadow-2xl shadow-primary/50" : ""
                      }`}
                    />

                    {/* Date tooltip on hover */}
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-[-50px] left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-xs font-medium shadow-lg"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.startDate}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </motion.div>

              {/* Present marker */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute top-[-50px] left-0"
              >
                <div
                  className="text-xs tracking-wider uppercase opacity-60 whitespace-nowrap font-semibold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Present
                </div>
              </motion.div>

              {/* Earliest marker */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute top-[-50px] right-0"
              >
                <div
                  className="text-xs tracking-wider uppercase opacity-60 whitespace-nowrap font-semibold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {experienceItems[experienceItems.length - 1]?.dates.match(/\d{4}/)?.[0] || "2024"}
                </div>
              </motion.div>
            </div>

            {/* Professional Experience Row (Below Timeline) */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-8"
              >
                <Briefcase className="w-5 h-5 opacity-60" />
                <h3
                  className="text-lg"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  Professional Experience
                </h3>
              </motion.div>

              <div className="flex gap-6">
                {experienceItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-[400px] p-6 border border-border bg-card transition-all ${
                      item.id ? "group hover:shadow-lg hover:border-primary/30 cursor-pointer" : "hover:shadow-md hover:border-primary/20"
                    }`}
                  >
                    {item.id ? (
                      <Link to={`/experience/${item.id}`} className="block">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div
                            className="text-sm flex-1 group-hover:text-primary transition-colors"
                            style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                          >
                            {item.title}
                          </div>
                        </div>
                        <div className="text-sm opacity-70 mb-2" style={{ fontFamily: "var(--font-body)" }}>
                          {item.organisation}
                        </div>
                        <div className="text-xs opacity-50 mb-4" style={{ fontFamily: "var(--font-body)" }}>
                          {item.dates}
                        </div>
                        {item.bullets && item.bullets.length > 0 && (
                          <div className="text-xs opacity-60 space-y-2 mb-3" style={{ fontFamily: "var(--font-body)" }}>
                            {item.bullets.map((bullet, idx) => (
                              <div key={idx}>• {bullet}</div>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          <span style={{ fontFamily: "var(--font-body)" }}>View Details</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </Link>
                    ) : (
                      <>
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div
                            className="text-sm flex-1"
                            style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                          >
                            {item.title}
                          </div>
                        </div>
                        <div className="text-sm opacity-70 mb-2" style={{ fontFamily: "var(--font-body)" }}>
                          {item.organisation}
                        </div>
                        <div className="text-xs opacity-50 mb-4" style={{ fontFamily: "var(--font-body)" }}>
                          {item.dates}
                        </div>
                        {item.bullets && item.bullets.length > 0 && (
                          <div className="text-xs opacity-60 space-y-2" style={{ fontFamily: "var(--font-body)" }}>
                            {item.bullets.map((bullet, idx) => (
                              <div key={idx}>• {bullet}</div>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <div
            className="text-xs tracking-wider uppercase opacity-40 flex items-center justify-center gap-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span>Scroll horizontally to explore timeline</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}