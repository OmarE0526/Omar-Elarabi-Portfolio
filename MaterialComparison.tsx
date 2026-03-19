import { motion } from "motion/react";

interface MaterialComparisonProps {
  materials: Array<{
    name: string;
    density: number;
    youngsModulus: number;
    performanceIndex: number;
    yieldStrength: number;
    price: number;
    corrosion: string;
    recyclability: string;
    qualitative: string;
  }>;
}

export function MaterialComparison({ materials }: MaterialComparisonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-card via-card to-accent/10 border border-border rounded-xl p-8 shadow-lg overflow-x-auto"
    >
      <h4
        className="text-sm tracking-[0.2em] uppercase opacity-70 mb-6"
        style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
      >
        Material Investigation and Comparison
      </h4>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm" style={{ fontFamily: "var(--font-body)" }}>
          <thead>
            <tr className="border-b-2 border-border">
              <th className="text-left p-3 font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                Material
              </th>
              <th className="text-center p-3 font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                Density<br/>(Mg/m³)
              </th>
              <th className="text-center p-3 font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                Young's Modulus<br/>(GPa)
              </th>
              <th className="text-center p-3 font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                M = E²/³/ρ<br/>(GPa)²/³/(Mg/m³)
              </th>
              <th className="text-center p-3 font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                Yield Strength<br/>(MPa)
              </th>
              <th className="text-center p-3 font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                Price<br/>(GBP/kg)
              </th>
              <th className="text-center p-3 font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                Corrosion<br/>Durability
              </th>
              <th className="text-center p-3 font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                Recyclability<br/>(%)
              </th>
              <th className="text-center p-3 font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                Qualitative
              </th>
            </tr>
          </thead>
          <tbody>
            {materials.map((material, idx) => (
              <motion.tr
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`border-b border-border/50 hover:bg-accent/10 transition-colors ${
                  material.name.includes("Epoxy S-glass") ? "bg-primary/5" : ""
                }`}
              >
                <td className="p-3 font-medium" style={{ fontFamily: "var(--font-heading)" }}>
                  {material.name}
                  {material.name.includes("Epoxy S-glass") && (
                    <span className="ml-2 text-xs text-primary">← Selected</span>
                  )}
                </td>
                <td className="text-center p-3">{material.density}</td>
                <td className="text-center p-3">{material.youngsModulus}</td>
                <td className="text-center p-3 font-semibold text-primary">
                  {material.performanceIndex}
                </td>
                <td className="text-center p-3">{material.yieldStrength}</td>
                <td className="text-center p-3">{material.price}</td>
                <td className="text-center p-3 text-xs">{material.corrosion}</td>
                <td className="text-center p-3">{material.recyclability}</td>
                <td className="text-center p-3 text-xs">{material.qualitative}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 pt-4 border-t border-border/50 space-y-2">
        <p className="text-xs opacity-60" style={{ fontFamily: "var(--font-body)" }}>
          <strong>Performance Index (M):</strong> M = E²/³/ρ, where E = Young's modulus, ρ = density, gradient of slope = 2 (Maximise)
        </p>
        <p className="text-xs opacity-60" style={{ fontFamily: "var(--font-body)" }}>
          The selected material (Epoxy S-glass fibre) provides the optimal balance of stiffness, weight, corrosion resistance, and sustainability for the FTF application.
        </p>
      </div>
    </motion.div>
  );
}
