import { motion } from "motion/react";
import { personalInfo } from "../data/portfolio-data";
import headshotImage from "figma:asset/70bb46962f102c0edf8487725ebda5dd495a1c89.png";
import { OpenToWorkBadge } from "./OpenToWorkBadge";

export function AboutProfessionalFocus() {
  return (
    <section id="about" className="relative py-32 bg-background">
      {/* Technical grid background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left side - Image placeholder and metadata */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[3/4] bg-accent/10 border border-border overflow-hidden mb-6"
            >
              {/* Technical corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-foreground/20 z-10" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-foreground/20 z-10" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-foreground/20 z-10" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-foreground/20 z-10" />
              
              {/* Professional headshot */}
              <img
                src={headshotImage}
                alt="Professional headshot"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>

            {/* Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2 text-sm"
            >
              <div className="flex items-center gap-2">
                <span className="opacity-40" style={{ fontFamily: "var(--font-body)" }}>Location</span>
                <span className="flex-1 border-t border-dotted border-border/40" />
                <span style={{ fontFamily: "var(--font-body)" }}>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="opacity-40" style={{ fontFamily: "var(--font-body)" }}>Graduation</span>
                <span className="flex-1 border-t border-dotted border-border/40" />
                <span style={{ fontFamily: "var(--font-body)" }}>{personalInfo.graduationDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="opacity-40" style={{ fontFamily: "var(--font-body)" }}>Status</span>
                <span className="flex-1 border-t border-dotted border-border/40" />
                <span className="text-primary" style={{ fontFamily: "var(--font-body)" }}>Available</span>
              </div>
            </motion.div>

            {/* Career Focus tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-8 mt-8 border-t border-border"
            >
              <div className="text-xs tracking-wider uppercase opacity-40 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Career Focus
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Aerospace",
                  "Motorsport",
                  "Energy Systems",
                  "CFD & FEA",
                  "Sustainability",
                  "Consulting",
                  "Manufacturing"
                ].map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-xs border border-border bg-accent/5 tracking-wide"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right side - About & Professional Focus Content */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-sm tracking-[0.3em] uppercase opacity-40" style={{ fontFamily: "var(--font-heading)" }}>
                  00
                </div>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h2 className="text-4xl lg:text-5xl mb-4 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                About
              </h2>
              <p className="text-lg opacity-60 mb-8" style={{ fontFamily: "var(--font-body)" }}>
                Driven by a commitment to engineering excellence through rigorous analysis, iterative validation, and cross-disciplinary collaboration. Experienced in translating complex theoretical principles into practical solutions across aerospace, motorsport, and energy sectors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <p className="opacity-80">
                With hands-on experience across Formula Student exhaust system design, commercial aircraft composite optimisation, and control systems modelling, I combine parametric CAD, multiphysics simulation, and experimental validation to solve complex engineering challenges. My academic foundation in thermodynamics, fluid mechanics, and materials science is complemented by practical leadership roles in student societies, safety compliance, and peer mentoring.
              </p>

              <p className="opacity-80">
                I am passionate about <span className="text-primary">sustainable design</span>, <span className="text-primary">research</span>, and <span className="text-primary">innovation</span> - working on projects that contribute to meaningful engineering solutions. My experience spans technical projects including exhaust system design for Formula Student vehicles, composite material optimisation for commercial aircraft, and control systems modelling, combining parametric design, multiphysics simulation, and experimental validation.
              </p>

              <p className="opacity-80">
                I enjoy roles that combine technical and practical hands-on expertise with strong communication, working in positions where I can engage with stakeholders, collaborate closely with teams, and contribute in a mix of consulting and engineering. Looking ahead, I am seeking roles in <span className="text-primary">aerospace</span>, <span className="text-primary">motorsport</span>, <span className="text-primary">energy</span>, and <span className="text-primary">advanced engineering</span>, especially those with a focus on sustainability, emerging technologies, and meaningful real-world applications.
              </p>

              <div className="pt-6 border-t border-border">
                <p className="opacity-80">
                  I am currently seeking <span className="text-primary font-medium">internships and graduate schemes</span> where I can grow my skills, contribute to innovative solutions, and work with teams that challenge conventional thinking to make a real difference.
                </p>
                
                {/* Open to Work badge - positioned below the seeking paragraph */}
                <div className="mt-6">
                  <OpenToWorkBadge />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}