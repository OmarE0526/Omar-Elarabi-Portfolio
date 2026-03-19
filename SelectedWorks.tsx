import { motion } from "motion/react";
import { Link } from "react-router";
import { projects } from "../data/portfolio-data";
import { ArrowUpRight } from "lucide-react";

export function SelectedWorks() {
  return (
    <section id="projects" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase opacity-60 mb-16"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Featured Projects
        </motion.h2>

        {/* Horizontal scrolling container */}
        <div className="relative -mx-6 px-6">
          <div className="overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40">
            <div className="flex gap-8" style={{ minWidth: 'max-content' }}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ width: '400px', flexShrink: 0 }}
                >
                  <Link to={`/project/${project.id}`}>
                    <div className="group cursor-pointer">
                      {/* Project thumbnail */}
                      <div className="relative aspect-[4/3] bg-accent/40 rounded-sm mb-4 overflow-hidden border border-border">
                        {project.thumbnail ? (
                          <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center opacity-20">
                              <div
                                className="text-6xl mb-2"
                                style={{ fontFamily: "var(--font-heading)", fontWeight: 900 }}
                              >
                                {project.category.substring(0, 2).toUpperCase()}
                              </div>
                              <div
                                className="text-xs tracking-wider"
                                style={{ fontFamily: "var(--font-body)" }}
                              >
                                {project.category}
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center">
                          <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>

                      {/* Project info */}
                      <div className="space-y-2">
                        <div
                          className="text-xs tracking-wider uppercase opacity-60"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {project.category}
                        </div>
                        <h3
                          className="text-xl leading-tight group-hover:opacity-70 transition-opacity"
                          style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                        >
                          {project.title}
                        </h3>
                        <p
                          className="text-sm opacity-60"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {project.descriptor}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Scroll hint */}
          <div className="text-center mt-4">
            <p
              className="text-xs opacity-40"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Scroll horizontally to view all projects →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}