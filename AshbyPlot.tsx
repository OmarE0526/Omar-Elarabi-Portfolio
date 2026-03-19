import { motion } from "motion/react";
import ashbyImage from "figma:asset/ceee38806425c898983731d89a4b9e1e0e151ceb.png";

interface AshbyPlotProps {
  data: {
    materials: Array<{
      name: string;
      density: number;
      youngsModulus: number;
      category: string;
      selected?: boolean;
    }>;
  };
}

export function AshbyPlot({ data }: AshbyPlotProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-card via-card to-accent/10 border border-border rounded-xl p-8 shadow-lg"
    >
      <h4
        className="text-sm tracking-[0.2em] uppercase opacity-70 mb-6"
        style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
      >
        Ashby Method for Material Selection — Young's Modulus vs Density
      </h4>
      
      <div className="bg-background/50 rounded-lg p-4 border border-border">
        <img 
          src={ashbyImage} 
          alt="Ashby plot showing Young's modulus vs Density with material selection criteria"
          className="w-full h-auto"
        />
      </div>
      
      {/* Legend for selected materials */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center" style={{ fontFamily: "var(--font-body)" }}>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: "#8B0000" }}></div>
          <span className="opacity-70">Selected Materials (Epoxy Composites)</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-4 h-4 rounded bg-gray-400"></div>
          <span className="opacity-70">Other Material Categories</span>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-border/50">
        <p className="text-xs opacity-60 mb-3" style={{ fontFamily: "var(--font-body)" }}>
          <strong>Selection Criteria:</strong> Materials closer to the upper-left region (high Young's modulus, low density) provide superior stiffness-to-weight performance. 
          The black diagonal line represents the performance index gradient (M = E²/³/ρ) with slope = 2.
        </p>
        <p className="text-xs opacity-60" style={{ fontFamily: "var(--font-body)" }}>
          The orange curved line indicates the selection boundary guiding toward optimal materials. Highlighted in dark red are the epoxy composite candidates: 
          HS carbon fibre, aramid fibre, E-glass fibre, and S-glass fibre. After comprehensive analysis including cost, durability, and sustainability factors, 
          <strong className="text-primary"> Epoxy S-glass fibre</strong> was selected as the optimal material for the A320 FTF application.
        </p>
      </div>
    </motion.div>
  );
}
