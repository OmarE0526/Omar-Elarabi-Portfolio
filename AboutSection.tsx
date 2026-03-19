import { motion } from "motion/react";
import { personalInfo } from "../data/portfolio-data";

export function AboutSection() {
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
          {/* Left side - Image placeholder */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[3/4] bg-accent/10 border border-border overflow-hidden"
            >
              {/* Technical corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-foreground/20" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-foreground/20" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-foreground/20" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-foreground/20" />
              
              {/* Placeholder text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-sm tracking-wider uppercase opacity-40 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    Professional
                  </div>
                  <div className="text-sm tracking-wider uppercase opacity-40" style={{ fontFamily: "var(--font-heading)" }}>
                    Portrait
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 space-y-2 text-sm"
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
          </div>

          {/* Right side - Content */}
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
              <h2 className="text-4xl lg:text-5xl mb-8 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                About
              </h2>
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
                I am an Aerospace Engineering student with a strong interest in <span className="text-primary">sustainable design</span>, <span className="text-primary">research</span>, and <span className="text-primary">innovation</span>. I enjoy working on projects that contribute to the greater good, where engineering can have a meaningful and lasting impact. My experience spans technical projects, leadership roles, and cross-disciplinary teamwork, from creating sustainable aerospace and powertrain components to developing AI models for real-world applications.
              </p>

              <p className="opacity-80">
                I am passionate about research, innovation, design and simulation, and I enjoy roles that combine technical and practical hands-on expertise with strong communication. I like being in positions where I can engage with clients, collaborate closely with a team, and work in a mix of consulting and engineering. I have a genuine enthusiasm for exploring new ideas, solving complex problems, and applying innovative and analytical skills with testing and refinements to deliver practical solutions. This balance allows me to contribute both creatively and analytically while ensuring solutions are practical, effective, and impactful.
              </p>

              <p className="opacity-80">
                Looking ahead, I am seeking roles in <span className="text-primary">aerospace</span>, <span className="text-primary">motorsport</span>, <span className="text-primary">energy</span>, and <span className="text-primary">advanced engineering</span>, especially those with a focus on sustainability, emerging technologies, and meaningful real-world applications. I am particularly interested in opportunities that blend engineering with client communication, allowing me to contribute both technically and strategically. For me, the most rewarding work comes from pushing boundaries, challenging conventional thinking, and delivering solutions that make a tangible difference to people and the planet.
              </p>

              <div className="pt-6 border-t border-border">
                <p className="opacity-80">
                  I am currently seeking <span className="text-primary font-medium">internships and graduate schemes</span> where I can grow my skills, contribute to innovative solutions, and work with teams that challenge conventional thinking to make a real difference.
                </p>
              </div>
            </motion.div>

            {/* Career interests tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-8"
            >
              <div className="text-xs tracking-wider uppercase opacity-40 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Career Interests
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Aerospace Engineering",
                  "Motorsport",
                  "Energy Systems",
                  "Sustainable Design",
                  "Research & Innovation",
                  "CFD & FEA",
                  "Client Engagement",
                  "Technical Consulting"
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
        </motion.div>
      </div>
    </section>
  );
}
