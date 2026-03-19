import { motion } from "motion/react";
import { technicalMatrix } from "../data/portfolio-data";

export function TechnicalMatrix() {
  const getLevelWidth = (level: "Introduced" | "Proficient" | "Advanced" | "Highly Advanced" | "Expert" | "Native" | "Intermediate") => {
    switch (level) {
      case "Introduced":
        return "33%";
      case "Proficient":
        return "66%";
      case "Advanced":
        return "83%"; // Halfway between Proficient (66%) and Expert (100%)
      case "Highly Advanced":
        return "91.5%"; // 3/4 between Proficient (66%) and Expert (100%)
      case "Expert":
        return "100%";
      case "Native":
        return "100%";
      case "Intermediate":
        return "66%";
    }
  };

  // Check if category is Languages to use different labels
  const getCategoryLabels = (categoryName: string) => {
    if (categoryName === "Languages") {
      return ["Beginner", "Intermediate", "Native"];
    }
    return ["Introduced", "Proficient", "Expert"];
  };

  return (
    <section id="capabilities" className="py-32 border-t border-border bg-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase opacity-60 mb-16"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Skill Spectrum
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {technicalMatrix.map((category, catIndex) => {
            const labels = getCategoryLabels(category.category);
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h3
                  className="text-lg mb-8"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-baseline mb-2">
                        <span
                          className="text-sm"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {skill.name}
                        </span>
                        <span
                          className="text-xs opacity-50"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {skill.level}
                        </span>
                      </div>
                      
                      <div className="relative h-1.5 bg-border rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: getLevelWidth(skill.level) }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                          className="absolute left-0 top-0 h-full bg-primary rounded-full"
                        />
                      </div>
                      
                      {/* Level markers */}
                      <div className="flex justify-between mt-1">
                        <span
                          className="text-[10px] opacity-40"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {labels[0]}
                        </span>
                        <span
                          className="text-[10px] opacity-40"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {labels[1]}
                        </span>
                        <span
                          className="text-[10px] opacity-40"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {labels[2]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}