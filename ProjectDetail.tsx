import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { projects } from "../data/portfolio-data";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { WaterTankResults } from "../components/WaterTankResults";
import { DecisionMatrix } from "../components/DecisionMatrix";
import { MaterialComparison } from "../components/MaterialComparison";
import { AshbyPlot } from "../components/AshbyPlot";
import { MaterialComposition } from "../components/MaterialComposition";
import { LifecycleAnalysis } from "../components/LifecycleAnalysis";
import { PredictiveModelChart } from "../components/PredictiveModelChart";

export function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
            Project Not Found
          </h1>
          <Link
            to="/"
            className="text-sm underline opacity-60 hover:opacity-100"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen py-12" style={{ fontFamily: "var(--font-body)" }}>
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 relative overflow-hidden rounded-lg"
        >
          {/* Background Image with Gradient Overlay */}
          {project.thumbnail && (
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${project.thumbnail})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  opacity: 0.15,
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(var(--primary-rgb), 0.05) 0%, transparent 50%, rgba(var(--primary-rgb), 0.08) 100%)",
                }}
              />
            </div>
          )}
          
          {/* Content */}
          <div className="relative z-10 p-12 border border-border bg-gradient-to-br from-card/80 via-card/60 to-transparent backdrop-blur-sm">
            <div
              className="text-xs tracking-[0.3em] uppercase opacity-60 mb-6 flex items-center gap-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="w-8 h-[2px] bg-primary"></span>
              {project.category}
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
            >
              {project.title}
            </h1>
            <p
              className="text-lg opacity-70 max-w-3xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {project.descriptor}
            </p>
          </div>
        </motion.div>

        {/* Context Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 border-t border-border pt-16 relative"
        >
          <div className="absolute top-0 left-0 w-32 h-[2px] bg-gradient-to-r from-primary to-transparent"></div>
          <h2
            className="text-xs tracking-[0.3em] uppercase opacity-60 mb-8 flex items-center gap-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Context
          </h2>
          <p
            className="text-base leading-relaxed max-w-4xl opacity-90"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {project.context}
          </p>
        </motion.section>

        {/* Constraints, Operating Conditions, and Project Data */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {/* Constraints */}
          <motion.div 
            className="bg-gradient-to-br from-accent/40 to-accent/20 border border-border p-6 rounded-lg relative overflow-hidden group hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            whileHover={{ y: -4 }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
            <h3
              className="text-xs tracking-[0.3em] uppercase opacity-60 mb-6 flex items-center gap-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              Constraints
            </h3>
            <ul className="space-y-3 relative z-10">
              {project.constraints.map((constraint, index) => (
                <li
                  key={index}
                  className="text-sm opacity-80 flex items-start gap-3 group/item"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 group-hover/item:w-2 group-hover/item:h-2 transition-all" />
                  {constraint}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Operating Conditions */}
          <motion.div 
            className="bg-gradient-to-br from-accent/40 to-accent/20 border border-border p-6 rounded-lg relative overflow-hidden group hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            whileHover={{ y: -4 }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
            <h3
              className="text-xs tracking-[0.3em] uppercase opacity-60 mb-6 flex items-center gap-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              Operating Conditions
            </h3>
            <ul className="space-y-3 relative z-10">
              {project.operatingConditions.map((condition, index) => (
                <li
                  key={index}
                  className="text-sm opacity-80 flex items-start gap-3 group/item"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 group-hover/item:w-2 group-hover/item:h-2 transition-all" />
                  {condition}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Project Data */}
          <motion.div 
            className="bg-gradient-to-br from-accent/40 to-accent/20 border border-border p-6 rounded-lg relative overflow-hidden group hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            whileHover={{ y: -4 }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
            <h3
              className="text-xs tracking-[0.3em] uppercase opacity-60 mb-6 flex items-center gap-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              Project Data
            </h3>
            <div className="space-y-4 relative z-10">
              <div className="group/data">
                <div
                  className="text-xs opacity-50 mb-1 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span className="w-3 h-[1px] bg-primary/40"></span>
                  Category
                </div>
                <div
                  className="text-sm pl-5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {project.projectData.category}
                </div>
              </div>
              <div className="group/data">
                <div
                  className="text-xs opacity-50 mb-1 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span className="w-3 h-[1px] bg-primary/40"></span>
                  Methodology
                </div>
                <div
                  className="text-sm pl-5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {project.projectData.methodology}
                </div>
              </div>
              <div className="group/data">
                <div
                  className="text-xs opacity-50 mb-1 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span className="w-3 h-[1px] bg-primary/40"></span>
                  Key Tools
                </div>
                <div
                  className="text-sm pl-5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {project.projectData.keyTools}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Engineering Strategy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16 border-t border-border pt-16 relative"
        >
          <div className="absolute top-0 left-0 w-32 h-[2px] bg-gradient-to-r from-primary to-transparent"></div>
          <h2
            className="text-xs tracking-[0.3em] uppercase opacity-60 mb-8 flex items-center gap-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Engineering Strategy
          </h2>
          
          {/* For NCC project, insert components between steps */}
          {project.id === "a320-flap-track-fairing" ? (
            <div className="space-y-8">
              {project.engineeringStrategy.map((paragraph, index) => (
                <div key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 group mb-6"
                  >
                    <div className="flex-shrink-0 mt-2">
                      <div className="w-6 h-6 rounded-full border-2 border-primary/30 flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors">
                        <span 
                          className="text-xs opacity-60"
                          style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                        >
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <p
                      className="text-base leading-relaxed opacity-90 flex-1 max-w-4xl"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {paragraph}
                    </p>
                  </motion.div>
                  
                  {/* Insert Decision Matrix after step 3 */}
                  {index === 2 && project.decisionMatrix && (
                    <div className="my-12">
                      <DecisionMatrix data={project.decisionMatrix} />
                    </div>
                  )}
                  
                  {/* Insert Material Comparison after step 4 */}
                  {index === 3 && project.materialComparison && (
                    <div className="my-12">
                      <MaterialComparison materials={project.materialComparison} />
                    </div>
                  )}
                  
                  {/* Insert Ashby Plot after step 5 */}
                  {index === 4 && project.ashbyPlot && (
                    <div className="my-12">
                      <AshbyPlot data={project.ashbyPlot} />
                    </div>
                  )}
                  
                  {/* Insert Material Composition after step 7 */}
                  {index === 6 && project.materialComposition && (
                    <div className="my-12">
                      <MaterialComposition />
                    </div>
                  )}
                  
                  {/* Insert Lifecycle Analysis after step 9 */}
                  {index === 8 && project.lifecycleAnalysis && (
                    <div className="my-12">
                      <LifecycleAnalysis data={project.lifecycleAnalysis} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6 max-w-4xl">
              {project.engineeringStrategy.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 mt-2">
                    <div className="w-6 h-6 rounded-full border-2 border-primary/30 flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <span 
                        className="text-xs opacity-60"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                      >
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <p
                    className="text-base leading-relaxed opacity-90 flex-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {paragraph}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>

        {/* Performance Metrics */}
        {project.performanceMetrics && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-16 border-t border-border pt-16 relative"
          >
            <div className="absolute top-0 left-0 w-32 h-[2px] bg-gradient-to-r from-primary to-transparent"></div>
            <h2
              className="text-xs tracking-[0.3em] uppercase opacity-60 mb-8 flex items-center gap-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Performance Metrics
            </h2>
            
            {/* Special handling for AI ATM project - add chart and RMSE boxes */}
            {project.id === "ai-atm-taxi-time" ? (
              <>
                {/* Key RMSE Metrics in Boxes */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-accent/40 to-accent/20 border-2 border-primary/30 p-8 rounded-lg relative overflow-hidden group hover:shadow-xl hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div
                        className="text-xs tracking-[0.2em] uppercase opacity-50 mb-3"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Training RMSE
                      </div>
                      <div
                        className="text-4xl mb-2"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
                      >
                        2.4081
                      </div>
                      <div
                        className="text-xs opacity-60"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Root Mean Square Error
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-accent/40 to-accent/20 border-2 border-primary/30 p-8 rounded-lg relative overflow-hidden group hover:shadow-xl hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div
                        className="text-xs tracking-[0.2em] uppercase opacity-50 mb-3"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Validation RMSE
                      </div>
                      <div
                        className="text-4xl mb-2"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
                      >
                        2.4087
                      </div>
                      <div
                        className="text-xs opacity-60"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Root Mean Square Error
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-green-500/20 to-green-500/10 border-2 border-green-500/40 p-8 rounded-lg relative overflow-hidden group hover:shadow-xl hover:border-green-500/60 transition-all duration-300"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div
                        className="text-xs tracking-[0.2em] uppercase opacity-50 mb-3"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        RMSE Difference
                      </div>
                      <div
                        className="text-4xl mb-2 text-green-500"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
                      >
                        0.0006
                      </div>
                      <div
                        className="text-xs opacity-60"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Minimal Overfitting
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Predictive Model Chart */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mb-12"
                >
                  <PredictiveModelChart />
                </motion.div>

                {/* Other metrics */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                  {project.performanceMetrics.data.map((metric: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-accent/40 to-accent/20 border border-border p-6 rounded-lg relative overflow-hidden group hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors"></div>
                      <p
                        className="text-base relative z-10 flex items-start gap-3"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <span className="text-primary opacity-40 text-xl" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                          {index + 1}
                        </span>
                        <span className="flex-1">{metric}</span>
                      </p>
                    </motion.div>
                  ))}
                </div>
              </>
            ) : project.performanceMetrics.type === "list" ? (
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                {project.performanceMetrics.data.map((metric: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-accent/40 to-accent/20 border border-border p-6 rounded-lg relative overflow-hidden group hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors"></div>
                    <p
                      className="text-base relative z-10 flex items-start gap-3"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <span className="text-primary opacity-40 text-xl" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                        {index + 1}
                      </span>
                      <span className="flex-1">{metric}</span>
                    </p>
                  </motion.div>
                ))}
              </div>
            ) : null}
          </motion.section>
        )}

        {/* Water Tank Results - Special section for water tank control project */}
        {project.id === "water-tank-control" && project.results && (
          <WaterTankResults results={project.results} />
        )}

        {/* Engineering Insight */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-sm max-w-4xl">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1 opacity-60" />
              <div>
                <h3
                  className="text-sm tracking-wider uppercase opacity-60 mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Engineering Insight
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {project.engineeringInsight}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Back to Projects */}
        <div className="border-t border-border pt-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}