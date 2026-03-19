import { motion } from "motion/react";

export function MaterialComposition() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-card via-card to-accent/10 border border-border rounded-xl p-8 shadow-lg"
    >
      <h4
        className="text-sm tracking-[0.2em] uppercase opacity-70 mb-8"
        style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
      >
        Visual of Material Composition for the Design
      </h4>
      
      <div className="max-w-2xl mx-auto">
        {/* Main composite structure visual */}
        <div className="relative bg-background/50 border-2 border-border rounded-lg p-8 mb-8">
          {/* PTFE Coating layer */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative bg-gradient-to-b from-primary/20 to-primary/10 border-2 border-primary rounded-t-lg p-4 mb-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                PTFE Coating
              </span>
              <span className="text-xs opacity-60" style={{ fontFamily: "var(--font-body)" }}>
                1.2m × 1.2m × thin layer
              </span>
            </div>
            <div className="mt-2 text-xs opacity-70" style={{ fontFamily: "var(--font-body)" }}>
              Density: 2.1g/cm³ | Non-flammable, chemically resistant, water absorption &lt;0.01%
            </div>
          </motion.div>
          
          {/* Epoxy S-glass Fibre main structure */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative bg-gradient-to-b from-accent/40 to-accent/20 border-2 border-accent rounded-b-lg p-8"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                Epoxy S-glass Fibre
              </span>
              <span className="text-xs opacity-60" style={{ fontFamily: "var(--font-body)" }}>
                Main structural component
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs" style={{ fontFamily: "var(--font-body)" }}>
              <div>
                <div className="opacity-70 mb-1">Mechanical Properties</div>
                <ul className="space-y-1 text-xs opacity-80">
                  <li>• Density: 1.91 Mg/m³</li>
                  <li>• Young's Modulus: 47.7 GPa</li>
                  <li>• Yield Strength: 17,363 MPa</li>
                </ul>
              </div>
              <div>
                <div className="opacity-70 mb-1">Manufacturing</div>
                <ul className="space-y-1 text-xs opacity-80">
                  <li>• UD Prepreg, UD lay-up</li>
                  <li>• Fibre orientation: [0, ±45, 90]°</li>
                  <li>• Autoclave curing cycle</li>
                </ul>
              </div>
            </div>
            
            {/* Fibre direction indicators */}
            <div className="mt-6 flex items-center gap-4 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-12 h-1 bg-foreground/60 rounded"></div>
                <span className="text-xs opacity-60">0° fibres</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-1 bg-foreground/40 rounded rotate-45 origin-left"></div>
                <span className="text-xs opacity-60">±45° fibres</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-12 bg-foreground/60 rounded"></div>
                <span className="text-xs opacity-60">90° fibres</span>
              </div>
            </div>
          </motion.div>
          
          {/* Dimension arrow and label */}
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="h-32 w-px bg-border"></div>
            <div className="transform rotate-90 text-xs opacity-60 whitespace-nowrap mt-8" style={{ fontFamily: "var(--font-body)" }}>
              ~0.71kg total mass
            </div>
          </div>
        </div>
        
        {/* Key specifications grid */}
        <div className="grid md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-accent/20 border border-border/50 rounded-lg p-4"
          >
            <div className="text-xs opacity-60 mb-2" style={{ fontFamily: "var(--font-body)" }}>
              Total Mass
            </div>
            <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              0.71kg
            </div>
            <div className="text-xs opacity-60 mt-1" style={{ fontFamily: "var(--font-body)" }}>
              PTFE: 1.53kg + S-glass: 0.07kg
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="bg-accent/20 border border-border/50 rounded-lg p-4"
          >
            <div className="text-xs opacity-60 mb-2" style={{ fontFamily: "var(--font-body)" }}>
              Load Capacity
            </div>
            <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              47.7GPa
            </div>
            <div className="text-xs opacity-60 mt-1" style={{ fontFamily: "var(--font-body)" }}>
              Young's Modulus (Stiffness)
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="bg-accent/20 border border-border/50 rounded-lg p-4"
          >
            <div className="text-xs opacity-60 mb-2" style={{ fontFamily: "var(--font-body)" }}>
              Service Temp
            </div>
            <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              -70°C
            </div>
            <div className="text-xs opacity-60 mt-1" style={{ fontFamily: "var(--font-body)" }}>
              Minimum operating temperature
            </div>
          </motion.div>
        </div>
        
        {/* Additional notes */}
        <div className="mt-6 bg-primary/5 border-l-4 border-primary rounded-lg p-4">
          <p className="text-xs leading-relaxed opacity-70" style={{ fontFamily: "var(--font-body)" }}>
            <strong>Manufacturing Process:</strong> The composite is manufactured using UD Prepreg with epoxy resin, 
            applying S-glass fibres with the prepreg directions [0, ±45, 90]°. Fibres are aligned in one direction 
            to ensure maximum strength. The layup is cured through a resin bath and then dried to remove excess solvent, 
            followed by autoclave curing at controlled temperatures to prevent premature curing and ensure proper fibre-to-fibre distribution.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
