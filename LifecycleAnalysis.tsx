import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface LifecycleAnalysisProps {
  data: {
    energyData: Array<{
      phase: string;
      value: number;
      color: string;
    }>;
    climateData: Array<{
      phase: string;
      value: number;
      color: string;
    }>;
    annualBurden: {
      energy: number;
      co2: number;
    };
  };
}

export function LifecycleAnalysis({ data }: LifecycleAnalysisProps) {
  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="bg-card border border-border rounded-lg p-3 shadow-lg"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <p className="font-semibold mb-1" style={{ fontFamily: "var(--font-heading)" }}>
            {payload[0].payload.phase}
          </p>
          <p className="text-sm opacity-70">
            {payload[0].value} {payload[0].payload.phase.includes("Energy") ? "MJ" : "kg CO₂-eq"}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="bg-gradient-to-br from-card via-card to-accent/10 border border-border rounded-xl p-8 shadow-lg">
        <h4
          className="text-sm tracking-[0.2em] uppercase opacity-70 mb-6"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
        >
          Eco-Audit: Lifecycle Energy Analysis (MJ)
        </h4>
        
        <div className="bg-background/50 rounded-lg p-4">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data.energyData}
              margin={{ top: 20, right: 30, bottom: 60, left: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
              <XAxis
                dataKey="phase"
                angle={-15}
                textAnchor="end"
                height={80}
                tick={{ style: { fontFamily: "var(--font-body)", fontSize: 11, fill: "var(--foreground)", opacity: 0.7 } }}
                stroke="var(--border)"
              />
              <YAxis
                label={{
                  value: 'Energy (MJ)',
                  angle: -90,
                  position: 'insideLeft',
                  offset: -45,
                  style: { fontFamily: "var(--font-body)", fontSize: 13, fill: "var(--foreground)", opacity: 0.7 }
                }}
                tick={{ style: { fontFamily: "var(--font-body)", fontSize: 11, fill: "var(--foreground)", opacity: 0.6 } }}
                stroke="var(--border)"
                domain={[0, 600]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {data.energyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6 pt-4 border-t border-border/50">
          <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-4">
            <p className="text-sm font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Equivalent annual environmental burden (averaged over 25 year product life):
            </p>
            <p className="text-2xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
              {data.annualBurden.energy} MJ/year
            </p>
          </div>
        </div>
        
        <div className="mt-4 text-xs opacity-60" style={{ fontFamily: "var(--font-body)" }}>
          Note: The "Use" phase dominates lifecycle energy consumption due to the extended 25-year operational lifetime. 
          Material manufacturing accounts for the second-largest contribution, emphasizing the importance of material selection for both performance and sustainability.
        </div>
      </div>

      {/* Climate Change Analysis */}
      <div className="bg-gradient-to-br from-card via-card to-accent/10 border border-border rounded-xl p-8 shadow-lg">
        <h4
          className="text-sm tracking-[0.2em] uppercase opacity-70 mb-6"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
        >
          Eco-Audit: Climate Change Analysis (CO₂ kg/year)
        </h4>
        
        <div className="bg-background/50 rounded-lg p-4">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data.climateData}
              margin={{ top: 20, right: 30, bottom: 60, left: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
              <XAxis
                dataKey="phase"
                angle={-15}
                textAnchor="end"
                height={80}
                tick={{ style: { fontFamily: "var(--font-body)", fontSize: 11, fill: "var(--foreground)", opacity: 0.7 } }}
                stroke="var(--border)"
              />
              <YAxis
                label={{
                  value: 'CO₂ kg-eq/year',
                  angle: -90,
                  position: 'insideLeft',
                  offset: -45,
                  style: { fontFamily: "var(--font-body)", fontSize: 13, fill: "var(--foreground)", opacity: 0.7 }
                }}
                tick={{ style: { fontFamily: "var(--font-body)", fontSize: 11, fill: "var(--foreground)", opacity: 0.6 } }}
                stroke="var(--border)"
                domain={[0, 40]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {data.climateData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6 pt-4 border-t border-border/50">
          <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-4">
            <p className="text-sm font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Equivalent annual environmental burden (averaged over 25 year product life):
            </p>
            <p className="text-2xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
              {data.annualBurden.co2} kg CO₂-eq/year
            </p>
          </div>
        </div>
        
        <div className="mt-4 text-xs opacity-60" style={{ fontFamily: "var(--font-body)" }}>
          Note: Material manufacturing is the leading contributor to climate impact (35.9 kg CO₂-eq), followed by the use phase (33.8 kg CO₂-eq). 
          The transport phase contributes 6.7 kg CO₂-eq. Use and end-of-life phases have negligible contribution (~7.4% combined), 
          demonstrating the environmental efficiency of Epoxy S-glass fibre across its operational lifespan.
        </div>
      </div>

      {/* Sustainability insights */}
      <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
        <h5
          className="text-sm font-semibold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Sustainability Analysis — Epoxy S-glass Fibre
        </h5>
        <div className="space-y-3 text-sm opacity-80" style={{ fontFamily: "var(--font-body)" }}>
          <p>
            Material manufacturing accounts for 51% of total lifecycle energy and climate impact due to the energy-intensive 
            fiber production and resin processing. However, the 25-year service life distributes this impact, resulting in 
            an annual burden of just 278 MJ and 19.7 kg CO₂-eq per year.
          </p>
          <p>
            The selected material outperforms alternatives like aluminum (highly recyclable but energy-intensive), 
            CFRP (lightweight but difficult to recycle), and GFRP (heavier with lower efficiency). Epoxy S-glass offers 
            the optimal balance: recyclability through downcycling and GFRP thermal recovery, lower carbon emissions 
            compared to CFRP, and superior corrosion resistance for long-term durability.
          </p>
          <p>
            To further improve sustainability, precision cutting techniques reduce excess material wastage, and secure 
            vacuum bagging ensures effective solvent removal, minimizing emissions during manufacturing while maintaining 
            structural integrity and aerodynamic performance.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
