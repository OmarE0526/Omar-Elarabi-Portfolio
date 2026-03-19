import chartImage from "figma:asset/4b72077357a00bb2a748855a47b4c6b44cb5d95c.png";

export function PredictiveModelChart() {
  return (
    <div className="w-full bg-card border border-border rounded-sm p-6">
      <div className="mb-4">
        <h3
          className="text-sm opacity-80 mb-1"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
        >
          Predictive Model Performance
        </h3>
        <p
          className="text-xs opacity-60"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Actual Taxi Time vs. Predicted Taxi Time
        </p>
      </div>
      
      {/* Display the uploaded screenshot */}
      <div className="w-full">
        <img
          src={chartImage}
          alt="Scatter plot showing predicted vs actual taxi time with linear correlation"
          className="w-full h-auto rounded-sm"
        />
      </div>
    </div>
  );
}