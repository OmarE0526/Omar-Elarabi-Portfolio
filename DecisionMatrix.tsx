import { motion } from "motion/react";

interface DecisionMatrixProps {
  data: {
    criteria: string[];
    matrix: { [key: string]: number[] };
  };
}

export function DecisionMatrix({ data }: DecisionMatrixProps) {
  const criteria = data.criteria;
  const properties = Object.keys(data.matrix).filter(key => key !== "Weight");
  const weights = data.matrix["Weight"];
  
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
        Decision Matrix — Material Property Prioritisation
      </h4>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm" style={{ fontFamily: "var(--font-body)" }}>
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-3 font-semibold opacity-70" style={{ fontFamily: "var(--font-heading)" }}>
                Property
              </th>
              {criteria.map((criterion, idx) => (
                <th
                  key={idx}
                  className="text-center p-3 font-semibold opacity-70"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {criterion}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {properties.map((property, rowIdx) => (
              <motion.tr
                key={rowIdx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: rowIdx * 0.05 }}
                className="border-b border-border/50 hover:bg-accent/10 transition-colors"
              >
                <td className="p-3 font-medium" style={{ fontFamily: "var(--font-heading)" }}>
                  {property}
                </td>
                {data.matrix[property].map((value, colIdx) => (
                  <td key={colIdx} className="text-center p-3">
                    {value === 1 ? (
                      <div className="flex justify-center">
                        <div className="w-6 h-6 rounded bg-primary/20 border-2 border-primary flex items-center justify-center">
                          <span className="text-primary font-bold text-xs">✓</span>
                        </div>
                      </div>
                    ) : value === 0 ? (
                      <div className="flex justify-center">
                        <div className="w-6 h-6 rounded bg-muted/20 border border-border"></div>
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <div className="w-6 h-6 rounded bg-accent/30 flex items-center justify-center">
                          <span className="opacity-50 text-xs">{value}</span>
                        </div>
                      </div>
                    )}
                  </td>
                ))}
              </motion.tr>
            ))}
            {/* Weight row */}
            <motion.tr
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: properties.length * 0.05 }}
              className="border-t-2 border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <td className="p-3 font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                Weight
              </td>
              {weights.map((weight, idx) => (
                <td key={idx} className="text-center p-3">
                  <span className="font-bold text-primary text-base" style={{ fontFamily: "var(--font-heading)" }}>
                    {weight}
                  </span>
                </td>
              ))}
            </motion.tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 pt-4 border-t border-border/50">
        <p className="text-xs opacity-60" style={{ fontFamily: "var(--font-body)" }}>
          <strong>Note:</strong> Shaded cells (✓) indicate priority relationships where row property influences column property in the material selection process. The Weight row shows the cumulative importance score for each criterion.
        </p>
      </div>
    </motion.div>
  );
}
