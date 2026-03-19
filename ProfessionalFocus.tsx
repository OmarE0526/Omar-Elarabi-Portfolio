import { motion } from "motion/react";
import { professionalFocus } from "../data/portfolio-data";

export function ProfessionalFocus() {
  return (
    <section id="about" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl leading-tight"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
            >
              {professionalFocus.headline}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {professionalFocus.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed opacity-80"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
