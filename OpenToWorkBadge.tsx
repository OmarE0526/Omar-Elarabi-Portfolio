import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

export function OpenToWorkBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <div className="border-2 border-primary text-primary px-4 py-2.5 rounded-lg flex items-center gap-3 group hover:shadow-lg transition-all bg-transparent">
        {/* Enhanced ping effect */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animation-delay-150"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
        </span>
        
        <span
          className="text-sm font-medium tracking-wide"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Open to Work 2026
        </span>
      </div>
    </motion.div>
  );
}