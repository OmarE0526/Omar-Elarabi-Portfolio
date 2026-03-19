import { motion } from "motion/react";
import { ArrowLeft, Database, Brain, TrendingUp, Target, Lightbulb, BarChart3 } from "lucide-react";
import { Link } from "react-router";
import pcaScreePlot from "figma:asset/1ed198c646a971774e21d9000b66c15dedd98e8d.png";
import pcaVariance from "figma:asset/8a8c1598a7c5755345e478ee7af6ffea308db384.png";
import featureExtraction from "figma:asset/266609aeba8b4001df35dd085f9407e9b3afeb18.png";
import datasetSplit from "figma:asset/d8aa07379fa731bdbbe01746f82cd8f3ac14e47a.png";
import predictiveModel from "figma:asset/7581d8d5cbc61e3bcc64699bc9c80884032e72c1.png";
import { PredictiveModelChart } from "../PredictiveModelChart";

export function AIATMProject() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="border-b border-border bg-gradient-to-br from-primary/5 via-accent/10 to-background relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity mb-12">
            <ArrowLeft className="w-4 h-4" />
            <span style={{ fontFamily: "var(--font-body)" }}>Back to Portfolio</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <div>
                <div
                  className="text-xs tracking-[0.3em] uppercase opacity-60 mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Data Science & AI
                </div>
                <div
                  className="text-xs opacity-50"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Academic Research | Python & MATLAB
                </div>
              </div>
            </div>
            
            <h1
              className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
            >
              AI in Air Traffic Management
            </h1>
            <p
              className="text-2xl opacity-70 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Predictive Taxi Time Modelling for Airport Airside Operations
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        
        {/* Overview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="p-6 border border-border rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 relative overflow-hidden group hover:border-primary/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <Database className="w-8 h-8 mb-4 text-primary opacity-80" />
            <h3
              className="text-sm mb-2"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              Dataset
            </h3>
            <p
              className="text-2xl mb-1"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
            >
              37 → 4
            </p>
            <p
              className="text-xs opacity-60"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Features reduced via PCA
            </p>
          </div>

          <div className="p-6 border border-border rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 relative overflow-hidden group hover:border-primary/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <TrendingUp className="w-8 h-8 mb-4 text-primary opacity-80" />
            <h3
              className="text-sm mb-2"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              Model Accuracy
            </h3>
            <p
              className="text-2xl mb-1"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
            >
              2.4081
            </p>
            <p
              className="text-xs opacity-60"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Training RMSE
            </p>
          </div>

          <div className="p-6 border border-border rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 relative overflow-hidden group hover:border-primary/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <Target className="w-8 h-8 mb-4 text-green-500 opacity-80" />
            <h3
              className="text-sm mb-2"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              Overfitting Prevention
            </h3>
            <p
              className="text-2xl mb-1 text-green-500"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
            >
              0.0006
            </p>
            <p
              className="text-xs opacity-60"
              style={{ fontFamily: "var(--font-body)" }}
            >
              RMSE difference
            </p>
          </div>
        </motion.div>

        {/* Context */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-8 bg-primary" />
            <h2
              className="text-xs tracking-[0.3em] uppercase opacity-60"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Project Overview
            </h2>
          </div>
          <p
            className="text-lg leading-relaxed opacity-80 max-w-4xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Research project investigating the application of artificial intelligence and machine learning techniques in Air Traffic Management (ATM) to develop predictive models for aircraft taxi time in airport airside operations. Using Zurich Airport operational data, the project focused on data-centric engineering approaches to optimise airport efficiency and reduce delays.
          </p>
        </motion.section>

        {/* Key Challenges */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-8 bg-primary" />
            <h2
              className="text-xs tracking-[0.3em] uppercase opacity-60"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Key Challenges
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                "Processing 37 features from Zurich Airport dataset (24M annual passengers)",
                "Dimensionality reduction via PCA to identify critical predictors",
                "Balancing model complexity with computational efficiency",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  <p
                    className="text-sm opacity-80"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              {[
                "Achieving low RMSE for both training and validation datasets",
                "Preventing model overfitting through parameter calibration",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  <p
                    className="text-sm opacity-80"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Methodology Highlight */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-8 border border-border rounded-lg bg-gradient-to-br from-accent/10 to-transparent"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3
                className="text-xs tracking-[0.2em] uppercase opacity-60 mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Methodology
              </h3>
              <p
                className="text-sm opacity-80 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Principal Component Analysis, Subtractive Clustering, Fuzzy Inference Systems
              </p>
            </div>
            <div>
              <h3
                className="text-xs tracking-[0.2em] uppercase opacity-60 mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Tools
              </h3>
              <p
                className="text-sm opacity-80 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Python, MATLAB, Statistical Analysis
              </p>
            </div>
            <div>
              <h3
                className="text-xs tracking-[0.2em] uppercase opacity-60 mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Data Source
              </h3>
              <p
                className="text-sm opacity-80 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Zurich Airport operational data with 37 features
              </p>
            </div>
          </div>
        </motion.section>

        {/* Predictive Model Interactive Chart */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-8 bg-primary" />
            <div>
              <h2
                className="text-xs tracking-[0.3em] uppercase opacity-60"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Interactive Results
              </h2>
              <p
                className="text-xs opacity-50 mt-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Actual vs. Predicted Taxi Time Visualization
              </p>
            </div>
          </div>
          
          <PredictiveModelChart />
        </motion.section>

        {/* Approach Steps - Condensed */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-8 bg-primary" />
            <h2
              className="text-xs tracking-[0.3em] uppercase opacity-60"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Technical Approach
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Data Preprocessing",
                desc: "Acquired and processed Zurich Airport dataset with 37 features across aircraft factors, operational parameters, congestion metrics, and weather conditions.",
              },
              {
                num: "02",
                title: "Dimensionality Reduction",
                desc: "Applied PCA to reduce from 37 features to 4 principal components, explaining 41.8% variance while minimizing computational complexity.",
              },
              {
                num: "03",
                title: "Feature Extraction",
                desc: "Used threshold-based analysis (0.03) to identify 17 critical features from component loading factors.",
              },
              {
                num: "04",
                title: "Model Development",
                desc: "Implemented fuzzy inference system with subtractive clustering, using 78%-22% train-test split for validation.",
              },
              {
                num: "05",
                title: "Parameter Optimization",
                desc: "Adjusted cluster influence range from 0.315 to 0.3, achieving RMSE difference of only 0.0006.",
              },
              {
                num: "06",
                title: "Validation",
                desc: "Confirmed model accuracy through statistical analysis showing linear structure in predicted vs. actual taxi time plots.",
              },
            ].map((step, i) => (
              <div key={i} className="p-6 border border-border rounded-lg bg-accent/5 hover:bg-accent/10 transition-all group">
                <div className="flex items-start gap-4">
                  <span
                    className="text-3xl opacity-20 group-hover:opacity-30 transition-opacity"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
                  >
                    {step.num}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="text-base mb-2"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm opacity-70 leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Technical Visualizations - Grid Layout */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-8 bg-primary" />
            <div>
              <h2
                className="text-xs tracking-[0.3em] uppercase opacity-60"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Technical Visualizations
              </h2>
              <p
                className="text-xs opacity-50 mt-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Key results from PCA and predictive modeling analysis
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* PCA Scree Plot */}
            <div className="border border-border rounded-lg overflow-hidden bg-accent/5 hover:border-primary/30 transition-all group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={pcaScreePlot} alt="PCA Scree Plot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <p
                  className="text-xs opacity-70"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <strong>Fig 1:</strong> Explained Variance Ratio - elbow at 4 components
                </p>
              </div>
            </div>

            {/* PCA Variance Analysis */}
            <div className="border border-border rounded-lg overflow-hidden bg-accent/5 hover:border-primary/30 transition-all group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={pcaVariance} alt="PCA Variance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <p
                  className="text-xs opacity-70"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <strong>Fig 2:</strong> 2D PCA visualization showing clustering patterns
                </p>
              </div>
            </div>

            {/* Feature Extraction */}
            <div className="border border-border rounded-lg overflow-hidden bg-accent/5 hover:border-primary/30 transition-all group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={featureExtraction} alt="Feature Extraction" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <p
                  className="text-xs opacity-70"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <strong>Fig 3:</strong> Threshold-based feature extraction (37 → 17 features)
                </p>
              </div>
            </div>

            {/* Dataset Split */}
            <div className="border border-border rounded-lg overflow-hidden bg-accent/5 hover:border-primary/30 transition-all group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={datasetSplit} alt="Dataset Split" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <p
                  className="text-xs opacity-70"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <strong>Fig 4:</strong> Train-test split (78%-22%) for robust validation
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Performance Metrics - Compact Cards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-8 bg-primary" />
            <h2
              className="text-xs tracking-[0.3em] uppercase opacity-60"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Key Metrics
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Compression", value: "89%", sub: "37 → 4 features" },
              { label: "Training RMSE", value: "2.4081", sub: "Low error" },
              { label: "Validation RMSE", value: "2.4087", sub: "Consistent" },
              { label: "Difference", value: "0.0006", sub: "No overfitting" },
            ].map((metric, i) => (
              <div key={i} className="p-4 border-l-2 border-primary bg-accent/5 rounded-sm">
                <div
                  className="text-xs opacity-60 mb-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {metric.label}
                </div>
                <div
                  className="text-2xl mb-1"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  {metric.value}
                </div>
                <div
                  className="text-xs opacity-50"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {metric.sub}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Engineering Insight - Highlight Box */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="p-8 border-2 border-primary/20 rounded-lg bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-primary" />
              <h2
                className="text-xs tracking-[0.3em] uppercase opacity-60"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Key Insight
              </h2>
            </div>
            <p
              className="text-lg leading-relaxed opacity-90"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The critical insight lies in the trade-off between model complexity and prediction accuracy. While higher cluster influence ranges achieve lower training errors, they risk overfitting and poor generalization. By carefully calibrating the cluster influence parameter (0.315 → 0.3) and validating against unseen data, the model achieved nearly identical training and validation RMSE values (difference of 0.0006), confirming robust predictive capability—a crucial advancement for optimizing airport capacity and reducing delays in congested airspace.
            </p>
          </div>
        </motion.section>

        {/* Back to Portfolio */}
        <div className="text-center pt-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-border rounded-lg hover:border-primary/30 hover:bg-accent/10 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>Back to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
