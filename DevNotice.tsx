import { AlertCircle } from "lucide-react";
import { personalInfo } from "../data/portfolio-data";

/**
 * Development Notice Component
 * This displays a banner when placeholder CV data is detected.
 * Remove this component or set SHOW_DEV_NOTICE to false when going live.
 */

const SHOW_DEV_NOTICE = personalInfo.name.includes("[CV:");

export function DevNotice() {
  if (!SHOW_DEV_NOTICE) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-yellow-500/90 backdrop-blur-sm text-black py-3 px-6">
      <div className="max-w-7xl mx-auto flex items-center gap-3 justify-center">
        <AlertCircle className="w-5 h-5 flex-shrink-0" />
        <p className="text-sm font-medium">
          <strong>Development Mode:</strong> Portfolio contains placeholder data. 
          Edit <code className="bg-black/20 px-2 py-0.5 rounded text-xs mx-1">/src/app/data/portfolio-data.ts</code> 
          to populate with your CV information.
        </p>
      </div>
    </div>
  );
}
