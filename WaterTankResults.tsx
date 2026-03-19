import { motion } from "motion/react";
import { useState } from "react";

interface WaterTankResultsProps {
  results: {
    sections: Array<{
      title: string;
      description: string;
      data: any;
    }>;
  };
}

export function WaterTankResults({ results }: WaterTankResultsProps) {
  const [selectedConfig, setSelectedConfig] = useState("original");

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55 }}
      className="mb-16 border-t border-border pt-16 relative"
    >
      <div className="absolute top-0 left-0 w-32 h-[2px] bg-gradient-to-r from-primary to-transparent"></div>
      <h2
        className="text-xs tracking-[0.3em] uppercase opacity-60 mb-12 flex items-center gap-3"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <span className="w-2 h-2 bg-primary rounded-full"></span>
        Results & Analysis
      </h2>

      <div className="space-y-20">
        {/* Section 1: Open Loop System Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="max-w-4xl">
            <h3
              className="text-3xl mb-4"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
            >
              {results.sections[0].title}
            </h3>
            <p
              className="text-base leading-relaxed opacity-80"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {results.sections[0].description}
            </p>
          </div>

          {/* Data Summary Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-gradient-to-br from-accent/30 to-transparent border border-border/50 rounded-lg p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
                <div className="text-xs tracking-widest uppercase opacity-60" style={{ fontFamily: "var(--font-heading)" }}>
                  Experimental Data
                </div>
              </div>
              <div className="space-y-3 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                <div className="flex justify-between items-center">
                  <span className="opacity-70">Time Constant (τ)</span>
                  <span className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{results.sections[0].data.experimental.timeConstant}s</span>
                </div>
                <div className="h-px bg-border/50"></div>
                <div className="flex justify-between items-center">
                  <span className="opacity-70">Settled Level</span>
                  <span className="font-semibold">{results.sections[0].data.experimental.settledLevel}V</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-70">Level A</span>
                  <span className="font-semibold">{results.sections[0].data.experimental.levelA}m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-70">Level B</span>
                  <span className="font-semibold">{results.sections[0].data.experimental.levelB}m</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-accent/30 to-transparent border border-border/50 rounded-lg p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#3b82f6]"></div>
                <div className="text-xs tracking-widest uppercase opacity-60" style={{ fontFamily: "var(--font-heading)" }}>
                  Theoretical Model
                </div>
              </div>
              <div className="space-y-3 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                <div className="flex justify-between items-center">
                  <span className="opacity-70">Time Constant (τ)</span>
                  <span className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{results.sections[0].data.theoretical.timeConstant}s</span>
                </div>
                <div className="h-px bg-border/50"></div>
                <div className="flex justify-between items-center">
                  <span className="opacity-70">Tank Area</span>
                  <span className="font-semibold">{results.sections[0].data.theoretical.area} m²</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-70">Pump Constant</span>
                  <span className="font-semibold">{results.sections[0].data.theoretical.pumpConstant}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-70">Model Deviation</span>
                  <span className="font-semibold text-[#f59e0b]">+12.2%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Section 2: Closed Loop PID Controller Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="max-w-4xl">
            <h3
              className="text-3xl mb-4"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
            >
              {results.sections[1].title}
            </h3>
            <p
              className="text-base leading-relaxed opacity-80"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {results.sections[1].description}
            </p>
          </div>

          {/* PID Configuration Selector */}
          <div className="flex flex-wrap gap-3">
            {[
              { id: "original", label: "Original PID", sublabel: "Kp=10, Ki=0.5, Kd=0" },
              { id: "kp15", label: "High Proportional", sublabel: "Kp=15" },
              { id: "kd3", label: "Optimized Derivative", sublabel: "Kd=3" },
              { id: "ki2", label: "High Integral", sublabel: "Ki=2 (Unstable)" },
            ].map((config) => (
              <motion.button
                key={config.id}
                onClick={() => setSelectedConfig(config.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 rounded-lg border-2 text-sm transition-all relative overflow-hidden ${
                  selectedConfig === config.id
                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                    : "bg-card border-border hover:border-primary/50 hover:shadow-md"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                <div className="relative z-10">
                  <div className="font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{config.label}</div>
                  <div className={`text-xs ${selectedConfig === config.id ? "opacity-90" : "opacity-60"}`}>
                    {config.sublabel}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* PID Performance Data */}
          <div className="bg-gradient-to-br from-card via-card to-accent/10 border border-border rounded-xl p-8 shadow-lg">
            <h4
              className="text-sm tracking-[0.2em] uppercase opacity-70 mb-6"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              PID Configuration — {selectedConfig === "original" ? "Original Configuration" : 
                selectedConfig === "kp15" ? "High Proportional Gain" :
                selectedConfig === "kd3" ? "Optimized Derivative Gain" : "High Integral Gain"}
            </h4>
            
            <div className="grid md:grid-cols-4 gap-4">
              {selectedConfig === "original" && (
                <>
                  <div className="bg-accent/20 rounded-lg p-4 border border-border/50">
                    <div className="text-xs opacity-60 mb-2" style={{ fontFamily: "var(--font-body)" }}>Rise Time</div>
                    <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{results.sections[1].data.originalPID.riseTime}s</div>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-4 border border-border/50">
                    <div className="text-xs opacity-60 mb-2" style={{ fontFamily: "var(--font-body)" }}>Settling Time</div>
                    <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{results.sections[1].data.originalPID.settleTime}s</div>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-4 border border-border/50">
                    <div className="text-xs opacity-60 mb-2" style={{ fontFamily: "var(--font-body)" }}>Peak Value</div>
                    <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{results.sections[1].data.originalPID.peakValue}V</div>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-4 border border-border/50">
                    <div className="text-xs opacity-60 mb-2" style={{ fontFamily: "var(--font-body)" }}>Overshoot</div>
                    <div className="text-2xl font-bold text-[#f59e0b]" style={{ fontFamily: "var(--font-heading)" }}>{results.sections[1].data.originalPID.overshoot}%</div>
                  </div>
                </>
              )}
              {selectedConfig === "kp15" && (
                <>
                  <div className="bg-accent/20 rounded-lg p-4 border border-border/50">
                    <div className="text-xs opacity-60 mb-2" style={{ fontFamily: "var(--font-body)" }}>Rise Time</div>
                    <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{results.sections[1].data.modifiedPID_Kp.riseTime}s</div>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-4 border border-border/50">
                    <div className="text-xs opacity-60 mb-2" style={{ fontFamily: "var(--font-body)" }}>Settling Time</div>
                    <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{results.sections[1].data.modifiedPID_Kp.settleTime}s</div>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-4 border border-border/50">
                    <div className="text-xs opacity-60 mb-2" style={{ fontFamily: "var(--font-body)" }}>Peak Value</div>
                    <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{results.sections[1].data.modifiedPID_Kp.peakValue}V</div>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-4 border border-border/50">
                    <div className="text-xs opacity-60 mb-2" style={{ fontFamily: "var(--font-body)" }}>Overshoot</div>
                    <div className="text-2xl font-bold text-[#22c55e]" style={{ fontFamily: "var(--font-heading)" }}>{results.sections[1].data.modifiedPID_Kp.overshoot}%</div>
                  </div>
                </>
              )}
              {selectedConfig === "kd3" && (
                <>
                  <div className="bg-accent/20 rounded-lg p-4 border border-border/50">
                    <div className="text-xs opacity-60 mb-2" style={{ fontFamily: "var(--font-body)" }}>Rise Time</div>
                    <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{results.sections[1].data.modifiedPID_Kd.riseTime}s</div>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-4 border border-border/50">
                    <div className="text-xs opacity-60 mb-2" style={{ fontFamily: "var(--font-body)" }}>Settling Time</div>
                    <div className="text-2xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>{results.sections[1].data.modifiedPID_Kd.settleTime}s</div>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-4 border border-border/50">
                    <div className="text-xs opacity-60 mb-2" style={{ fontFamily: "var(--font-body)" }}>Peak Value</div>
                    <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{results.sections[1].data.modifiedPID_Kd.peakValue}V</div>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-4 border border-border/50">
                    <div className="text-xs opacity-60 mb-2" style={{ fontFamily: "var(--font-body)" }}>Overshoot</div>
                    <div className="text-2xl font-bold text-[#22c55e]" style={{ fontFamily: "var(--font-heading)" }}>{results.sections[1].data.modifiedPID_Kd.overshoot}%</div>
                  </div>
                </>
              )}
              {selectedConfig === "ki2" && (
                <div className="col-span-4 bg-[#7c2d12]/10 border-2 border-[#ea580c] rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">⚠️</div>
                    <div style={{ fontFamily: "var(--font-body)" }}>
                      <p className="text-sm font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>System Instability Warning</p>
                      <p className="text-sm opacity-80">
                        This configuration demonstrates system instability with excessive integral gain (Ki=2). 
                        While it provides stronger response to accumulated error, the system exhibits sustained oscillations 
                        and poor settling characteristics, making it unsuitable for practical control applications.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Section 3: Comparative Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="max-w-4xl">
            <h3
              className="text-3xl mb-4"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
            >
              {results.sections[2].title}
            </h3>
            <p
              className="text-base leading-relaxed opacity-80"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {results.sections[2].description}
            </p>
          </div>

          {/* Performance Ranking */}
          <div className="grid md:grid-cols-2 gap-6">
            {results.sections[2].data.performanceRanking.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-accent/30 to-transparent border border-border/50 rounded-xl p-6 relative overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div 
                    className="text-5xl font-bold opacity-10 absolute -top-2 -right-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {index + 1}
                  </div>
                  <div 
                    className="text-3xl font-bold flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div 
                      className="text-base font-semibold mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.config}
                    </div>
                    <div 
                      className="text-xs opacity-70 mb-4"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.metric}
                    </div>
                    <div className="w-full bg-border/30 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.score}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                      />
                    </div>
                    <div 
                      className="text-xs opacity-50 mt-2 flex justify-between items-center"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <span>Performance Score</span>
                      <span className="font-semibold">{item.score}/100</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Error Margins Analysis */}
          <div className="bg-gradient-to-br from-card via-card to-accent/10 border border-border rounded-xl p-8 shadow-lg">
            <h4
              className="text-sm tracking-[0.2em] uppercase opacity-70 mb-8 text-center"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              Simulation-to-Experimental Error Analysis
            </h4>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { label: "Open Loop", value: results.sections[2].data.errorMargins.openLoop, color: "#3b82f6" },
                { label: "Closed Loop (Original)", value: results.sections[2].data.errorMargins.closedLoopOriginal, color: "#f59e0b" },
                { label: "Closed Loop (Modified)", value: results.sections[2].data.errorMargins.closedLoopModified, color: "#22c55e" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="text-center bg-accent/20 rounded-xl p-6 border border-border/50"
                >
                  <div 
                    className="text-5xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-heading)", color: item.color }}
                  >
                    ±{item.value}%
                  </div>
                  <div 
                    className="text-sm opacity-70"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                  </div>
                  <div className="mt-4 w-full h-2 bg-border/30 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.value / 20) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, duration: 0.8 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Governing Equations */}
          <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-8">
            <h4
              className="text-sm tracking-[0.2em] uppercase opacity-70 mb-6"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              Theoretical Foundation & Governing Equations
            </h4>
            <div className="space-y-6 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              <div>
                <div className="opacity-70 mb-3 text-xs tracking-wider uppercase">PID Controller Output</div>
                <div className="bg-background/50 border border-border rounded-lg p-4 font-mono text-base">
                  u(t) = K<sub>p</sub> × e(t) + K<sub>i</sub> × ∫e(t)dt + K<sub>d</sub> × de/dt
                </div>
              </div>
              <div>
                <div className="opacity-70 mb-3 text-xs tracking-wider uppercase">Water Level Rate of Change</div>
                <div className="bg-background/50 border border-border rounded-lg p-4 font-mono text-base">
                  dV(t)/dt = F<sub>in</sub>(t) - F<sub>out</sub>(t) = F<sub>pump</sub>(t) - K√(V(t))
                </div>
              </div>
              <div>
                <div className="opacity-70 mb-3 text-xs tracking-wider uppercase">System Time Constant</div>
                <div className="bg-background/50 border border-border rounded-lg p-4 font-mono text-base">
                  τ = SR = (Area × Height) / Flow Rate
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
