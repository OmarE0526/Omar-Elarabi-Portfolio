import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { education } from "../data/portfolio-data";
import { HEAR_TRANSCRIPT_URL } from "../utils/constants";
import { ArrowLeft, Download, GraduationCap } from "lucide-react";

export function EducationDetail() {
  const { educationId } = useParams();
  const edu = education.find((e) => e.id === educationId);

  if (!edu || !edu.id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
            Education Record Not Found
          </h1>
          <Link
            to="/"
            className="text-sm underline opacity-60 hover:opacity-100"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen py-12" style={{ fontFamily: "var(--font-body)" }}>
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Education Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div
            className="text-xs tracking-[0.3em] uppercase opacity-60 mb-6 flex items-center gap-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <GraduationCap className="w-5 h-5" />
            Academic Record
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
          >
            {edu.degree}
          </h1>
          <p
            className="text-xl opacity-70 mb-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {edu.institution}
          </p>
          <p
            className="text-sm opacity-50 mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {edu.dates}
          </p>
          {edu.classification && (
            <div
              className="inline-block px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-md text-sm font-medium"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {edu.classification}
            </div>
          )}
        </motion.div>

        {/* Focus Areas */}
        {edu.focusModules && edu.focusModules.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16 border-t border-border pt-16"
          >
            <h2
              className="text-xs tracking-[0.3em] uppercase opacity-60 mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Areas of Specialisation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {edu.focusModules.map((module, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-border bg-card"
                >
                  <p
                    className="text-sm opacity-80"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {module}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Module Details by Year */}
        {edu.modules && edu.modules.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16 border-t border-border pt-16"
          >
            <h2
              className="text-xs tracking-[0.3em] uppercase opacity-60 mb-12"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Academic Performance by Year
            </h2>

            {edu.modules.map((yearData, yearIdx) => (
              <div key={yearIdx} className="mb-16 last:mb-0">
                {/* Year Header */}
                <div className="mb-8">
                  <h3
                    className="text-2xl mb-2"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                  >
                    Year {yearData.year}
                  </h3>
                  <div className="flex gap-6 text-sm opacity-60">
                    <span style={{ fontFamily: "var(--font-body)" }}>
                      Total Credits: <span className="font-medium">{yearData.totalCredits}</span>
                    </span>
                    <span style={{ fontFamily: "var(--font-body)" }}>
                      ECTS Credits: <span className="font-medium">{yearData.totalECTS}</span>
                    </span>
                  </div>
                </div>

                {/* Module Table */}
                <div className="overflow-x-auto border border-border">
                  <table className="w-full">
                    <thead className="bg-card border-b border-border">
                      <tr>
                        <th
                          className="text-left px-4 py-3 text-xs tracking-wider uppercase opacity-60"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          Module Code
                        </th>
                        <th
                          className="text-left px-4 py-3 text-xs tracking-wider uppercase opacity-60"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          Title
                        </th>
                        <th
                          className="text-center px-4 py-3 text-xs tracking-wider uppercase opacity-60"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          Level
                        </th>
                        <th
                          className="text-center px-4 py-3 text-xs tracking-wider uppercase opacity-60"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          Mark
                        </th>
                        <th
                          className="text-center px-4 py-3 text-xs tracking-wider uppercase opacity-60"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          Grade
                        </th>
                        <th
                          className="text-center px-4 py-3 text-xs tracking-wider uppercase opacity-60"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          Credits
                        </th>
                        <th
                          className="text-center px-4 py-3 text-xs tracking-wider uppercase opacity-60"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          ECTS Credits
                        </th>
                        <th
                          className="text-center px-4 py-3 text-xs tracking-wider uppercase opacity-60"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          Result
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {yearData.courses.map((course, courseIdx) => (
                        <tr
                          key={courseIdx}
                          className="border-b border-border last:border-b-0 hover:bg-card/50 transition-colors"
                        >
                          <td
                            className="px-4 py-3 text-sm font-medium"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {course.code}
                          </td>
                          <td
                            className="px-4 py-3 text-sm"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {course.title}
                            {course.set && (
                              <span className="ml-2 text-xs opacity-50">({course.set})</span>
                            )}
                          </td>
                          <td
                            className="px-4 py-3 text-sm text-center"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {course.level}
                          </td>
                          <td
                            className="px-4 py-3 text-sm text-center font-medium"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {course.mark.toFixed(1)}
                          </td>
                          <td
                            className="px-4 py-3 text-sm text-center"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            <span
                              className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                                course.grade === "A"
                                  ? "bg-primary/20 text-primary"
                                  : course.grade === "B"
                                  ? "bg-blue-500/20 text-blue-600"
                                  : "bg-gray-500/20 text-gray-600"
                              }`}
                            >
                              {course.grade}
                            </span>
                          </td>
                          <td
                            className="px-4 py-3 text-sm text-center"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {course.credits}
                          </td>
                          <td
                            className="px-4 py-3 text-sm text-center"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {course.ectsCredits.toFixed(1)}
                          </td>
                          <td
                            className="px-4 py-3 text-sm text-center text-green-600"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {course.result}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </motion.section>
        )}

        {/* HEAR Transcript Download */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16 border-t border-border pt-16"
        >
          <h2
            className="text-xs tracking-[0.3em] uppercase opacity-60 mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Official Documentation
          </h2>
          <div className="p-8 border border-border bg-card">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3
                  className="text-lg mb-2"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  Higher Education Achievement Report (HEAR)
                </h3>
                <p
                  className="text-sm opacity-70 mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Complete academic transcript including all modules, grades, and achievements throughout the degree programme.
                </p>
                <a
                  href={HEAR_TRANSCRIPT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-md text-sm font-medium"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <Download className="w-4 h-4" />
                  Download HEAR Transcript
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Performance Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16 border-t border-border pt-16"
        >
          <h2
            className="text-xs tracking-[0.3em] uppercase opacity-60 mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Performance Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {edu.modules && (
              <>
                <div className="p-6 border border-border bg-card">
                  <div
                    className="text-3xl font-bold mb-2 text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {edu.modules.reduce((acc, year) => acc + year.totalCredits, 0)}
                  </div>
                  <div
                    className="text-sm opacity-60"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Total Credits Earned
                  </div>
                </div>
                <div className="p-6 border border-border bg-card">
                  <div
                    className="text-3xl font-bold mb-2 text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {(
                      edu.modules.reduce((acc, year) => {
                        const yearAvg = year.courses
                          .filter(c => c.credits > 0)
                          .reduce((sum, c) => sum + c.mark, 0) / year.courses.filter(c => c.credits > 0).length;
                        return acc + yearAvg;
                      }, 0) / edu.modules.length
                    ).toFixed(1)}%
                  </div>
                  <div
                    className="text-sm opacity-60"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Average Mark
                  </div>
                </div>
                <div className="p-6 border border-border bg-card">
                  <div
                    className="text-3xl font-bold mb-2 text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {edu.modules.reduce((acc, year) => {
                      return acc + year.courses.filter(c => c.grade === "A").length;
                    }, 0)}
                  </div>
                  <div
                    className="text-sm opacity-60"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Grade A Modules
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.section>
      </div>
    </div>
  );
}