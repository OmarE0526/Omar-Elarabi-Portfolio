import { motion } from "motion/react";
import { designPriorities, workingEnvironment } from "../data/portfolio-data";

export function DesignPriorities() {
  return (
    <section className="py-32 border-t border-border bg-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Engineering Principles */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.3em] uppercase opacity-60 mb-12"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Engineering Principles
            </motion.h3>

            <div className="space-y-8">
              {designPriorities.map((priority, index) => (
                <motion.div
                  key={priority.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-2 border-primary pl-6"
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span
                      className="text-sm opacity-40"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                    >
                      {priority.number}
                    </span>
                    <h4
                      className="text-lg"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                    >
                      {priority.title}
                    </h4>
                  </div>
                  <p
                    className="text-sm opacity-70 leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {priority.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Collaboration Model */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.3em] uppercase opacity-60 mb-12"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Team Dynamics
            </motion.h3>

            <div className="space-y-8">
              {workingEnvironment.map((env, index) => (
                <motion.div
                  key={env.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-2 border-primary pl-6"
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span
                      className="text-sm opacity-40"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                    >
                      {env.number}
                    </span>
                    <h4
                      className="text-lg"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                    >
                      {env.title}
                    </h4>
                  </div>
                  <p
                    className="text-sm opacity-70 leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {env.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}