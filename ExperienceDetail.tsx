import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { experience } from "../data/portfolio-data";
import { ArrowLeft } from "lucide-react";
import stageImage from "figma:asset/0c400ebdd892150b0b333958956fb685090fb57c.png";
import awardImage from "figma:asset/3520791f6b2b2a7def3a63c3f4ae3127f8409a0f.png";
import welcomeWeekBanner from "figma:asset/ed0b68361575466a0c6265a8d9d5ac3be9af5f20.png";
import passSessionImage from "figma:asset/7e4a3bfa178bddc887f2d5ef45de5b8b14810950.png";
import opportunitiesFairImage from "figma:asset/7d3eea8227bb04d4b28e37126e212bad1fe78b2b.png";
import socialMediaPromo from "figma:asset/ab7dc61850f5be9c3ead1cedbc2c96b0aa52a815.png";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from "recharts";
import { useState } from "react";

export function ExperienceDetail() {
  const { experienceId } = useParams();
  const exp = experience.find((e) => e.id === experienceId);
  const [activeTab, setActiveTab] = useState("overview");

  if (!exp || !exp.id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
            Experience Not Found
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

  // Check if this is the PASS Mentor page or PASS Student Organiser page
  const isPassMentor = exp.id === "pass-mentor";
  const isPassOrganiser = exp.id === "pass-student-organiser";

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

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Experience Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div
            className="text-xs tracking-[0.3em] uppercase opacity-60 mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {exp.category || "Professional Experience"}
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
          >
            {exp.role}
          </h1>
          <p
            className="text-xl opacity-70 mb-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {exp.organisation}
          </p>
          <p
            className="text-sm opacity-50"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {exp.dates}
          </p>
        </motion.div>

        {/* Context Section */}
        {exp.context && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative mb-16 border-t border-border pt-16"
          >
            <h2
              className="text-xs tracking-[0.3em] uppercase opacity-60 mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Role Overview
            </h2>
            <p
              className="text-base leading-relaxed max-w-4xl opacity-80"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {exp.context}
            </p>
          </motion.section>
        )}

        {/* Key Responsibilities */}
        {exp.keyResponsibilities && exp.keyResponsibilities.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative mb-16 border-t border-border pt-16"
          >
            <h2
              className="text-xs tracking-[0.3em] uppercase opacity-60 mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Key Responsibilities
            </h2>
            <ul className="space-y-4 max-w-4xl">
              {exp.keyResponsibilities.map((responsibility, index) => (
                <li
                  key={index}
                  className="flex gap-4 text-base leading-relaxed opacity-80"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Achievements */}
        {exp.achievementsDetails && exp.achievementsDetails.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative mb-16 border-t border-border pt-16"
          >
            <h2
              className="text-xs tracking-[0.3em] uppercase opacity-60 mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Key Achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
              {exp.achievementsDetails.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-accent/10 border border-border p-6"
                >
                  <p
                    className="text-sm leading-relaxed opacity-80"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Skills Developed */}
        {exp.skillsDeveloped && exp.skillsDeveloped.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative mb-16 border-t border-border pt-16"
          >
            <h2
              className="text-xs tracking-[0.3em] uppercase opacity-60 mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Skills Developed
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
              {exp.skillsDeveloped.map((skill, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary pl-4 py-2"
                >
                  <p
                    className="text-sm leading-relaxed opacity-80"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Impact Summary */}
        {exp.impacts && exp.impacts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative mb-16 border-t border-border pt-16"
          >
            <h2
              className="text-xs tracking-[0.3em] uppercase opacity-60 mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Impact Summary
            </h2>
            <div className="space-y-4 max-w-4xl">
              {exp.impacts.map((impact, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start bg-accent/5 border border-border p-4"
                >
                  <div
                    className="text-xs font-bold text-primary mt-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p
                    className="text-sm leading-relaxed opacity-80 flex-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {impact}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Visual Showcase - Only for PASS Mentor */}
        {isPassMentor && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="relative mb-16 border-t border-border pt-16"
          >
            <h2
              className="text-xs tracking-[0.3em] uppercase opacity-60 mb-12"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Visual Documentation
            </h2>
            
            <div className="relative space-y-16 max-w-6xl">
              {/* Lecture Stage Presentation - Full Width Hero */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative overflow-hidden bg-accent/5">
                  <img
                    src={stageImage}
                    alt="Stage presentation during lecture theatre outreach"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60"></div>
                </div>
                
                <div className="mt-8 grid md:grid-cols-3 gap-8">
                  <div className="border-l-2 border-primary pl-6">
                    <div
                      className="text-xs tracking-[0.2em] uppercase opacity-50 mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Context
                    </div>
                    <p
                      className="text-sm opacity-80 leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      First-year engineering lecture theatre, delivering direct promotional outreach to 300+ students across all disciplines
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary pl-6">
                    <div
                      className="text-xs tracking-[0.2em] uppercase opacity-50 mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Objective
                    </div>
                    <p
                      className="text-sm opacity-80 leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Building awareness of PASS support resources through high-visibility presentations and establishing personal connection with cohort
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary pl-6">
                    <div
                      className="text-xs tracking-[0.2em] uppercase opacity-50 mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Impact
                    </div>
                    <p
                      className="text-sm opacity-80 leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Contributed to 40% increase in session attendance through targeted, visible engagement strategy
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Award Recognition - Split Layout */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="order-2 md:order-1 space-y-6">
                  <div>
                    <div
                      className="text-xs tracking-[0.3em] uppercase opacity-50 mb-3"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      2024-2025 Recognition
                    </div>
                    <h3
                      className="text-2xl md:text-3xl mb-4 leading-tight"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                    >
                      PASS Mentor of the Year
                    </h3>
                    <p
                      className="text-base opacity-70 leading-relaxed mb-4"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Awarded by the School of Engineering and Materials Science in recognition of sustained excellence in peer mentorship and measurable impact on first-year student success.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-accent/10 border border-border p-4">
                      <div
                        className="text-2xl font-bold text-primary mb-1"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        300+
                      </div>
                      <div
                        className="text-xs opacity-60"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Students Supported
                      </div>
                    </div>
                    
                    <div className="bg-accent/10 border border-border p-4">
                      <div
                        className="text-2xl font-bold text-primary mb-1"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        40%
                      </div>
                      <div
                        className="text-xs opacity-60"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Attendance Increase
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 md:order-2 relative overflow-hidden bg-accent/5 border border-border">
                  <img
                    src={awardImage}
                    alt="PASS Mentor of the Year certificate 2024-2025"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* Programme Launch Initiative - Only for PASS Student Organiser */}
        {isPassOrganiser && (
          <>
            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-8 border-b border-border"
            >
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-6 py-3 text-sm tracking-wider uppercase transition-all ${
                    activeTab === "overview"
                      ? "border-b-2 border-primary text-primary font-bold"
                      : "opacity-50 hover:opacity-80"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("welcome-week")}
                  className={`px-6 py-3 text-sm tracking-wider uppercase transition-all ${
                    activeTab === "welcome-week"
                      ? "border-b-2 border-primary text-primary font-bold"
                      : "opacity-50 hover:opacity-80"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Welcome Week
                </button>
                <button
                  onClick={() => setActiveTab("semester-results")}
                  className={`px-6 py-3 text-sm tracking-wider uppercase transition-all ${
                    activeTab === "semester-results"
                      ? "border-b-2 border-primary text-primary font-bold"
                      : "opacity-50 hover:opacity-80"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Semester A Results
                </button>
              </div>
            </motion.div>

            {/* Tab Content: Overview */}
            {activeTab === "overview" && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative mb-16"
              >
                <h2
                  className="text-xs tracking-[0.3em] uppercase opacity-60 mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Role Summary
                </h2>
                <h3
                  className="text-3xl md:text-4xl mb-8"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  Programme Overview
                </h3>
                
                <div className="relative space-y-8 max-w-6xl">
                  <p
                    className="text-base leading-relaxed opacity-80"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Leading the strategic coordination and operational management of SEMS PASS programme, 
                    overseeing mentor teams, session planning, and stakeholder engagement to deliver 
                    comprehensive peer-assisted academic support across all engineering disciplines.
                  </p>

                  {/* Quick Stats */}
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="bg-accent/10 border border-primary/30 p-6 text-center">
                      <div
                        className="text-4xl font-bold text-primary mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        470+
                      </div>
                      <div
                        className="text-xs opacity-70 uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Students Reached (Welcome Week)
                      </div>
                    </div>
                    
                    <div className="bg-accent/10 border border-primary/30 p-6 text-center">
                      <div
                        className="text-4xl font-bold text-primary mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        101
                      </div>
                      <div
                        className="text-xs opacity-70 uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Total Attendees (Semester A)
                      </div>
                    </div>
                    
                    <div className="bg-accent/10 border border-primary/30 p-6 text-center">
                      <div
                        className="text-4xl font-bold text-primary mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        100%
                      </div>
                      <div
                        className="text-xs opacity-70 uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Student Satisfaction
                      </div>
                    </div>
                    
                    <div className="bg-accent/10 border border-primary/30 p-6 text-center">
                      <div
                        className="text-4xl font-bold text-primary mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        4.83
                      </div>
                      <div
                        className="text-xs opacity-70 uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Avg. Mentor Rating (out of 5)
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            )}

            {/* Tab Content: Welcome Week */}
            {activeTab === "welcome-week" && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative mb-16"
              >
            <h2
              className="text-xs tracking-[0.3em] uppercase opacity-60 mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Programme Launch Initiative
            </h2>
            <h3
              className="text-3xl md:text-4xl mb-12"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
            >
              Welcome Week 2024: Strategic Launch & Coordinated Outreach
            </h3>
            
            <div className="relative space-y-16 max-w-6xl">
              {/* Planning Stats Grid - Enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 border-2 border-primary/30"
              >
                <div className="text-center">
                  <div
                    className="text-5xl font-bold text-primary mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    5+
                  </div>
                  <div
                    className="text-xs opacity-70 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Weeks of Planning
                  </div>
                </div>
                
                <div className="text-center">
                  <div
                    className="text-5xl font-bold text-primary mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    470+
                  </div>
                  <div
                    className="text-xs opacity-70 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Students Reached
                  </div>
                </div>
                
                <div className="text-center">
                  <div
                    className="text-5xl font-bold text-primary mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    24
                  </div>
                  <div
                    className="text-xs opacity-70 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Course Categories
                  </div>
                </div>
                
                <div className="text-center">
                  <div
                    className="text-5xl font-bold text-primary mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    25
                  </div>
                  <div
                    className="text-xs opacity-70 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Module Timetables
                  </div>
                </div>
              </motion.div>

              {/* Strategic Planning Highlights - Enhanced and Moved Up */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-card via-accent/5 to-primary/5 border-2 border-primary/20 p-10 shadow-lg"
              >
                <h4
                  className="text-sm tracking-[0.3em] uppercase opacity-60 mb-8 text-primary"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  Strategic Planning & Execution
                </h4>
                <div className="grid md:grid-cols-3 gap-10">
                  <div>
                    <div
                      className="text-xl font-bold mb-3 text-primary"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Coordination
                    </div>
                    <p
                      className="text-sm opacity-80 leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Excel-based scheduling across 24 course-year categories, securing accessible rooms with visualisers and natural lighting
                    </p>
                  </div>
                  
                  <div>
                    <div
                      className="text-xl font-bold mb-3 text-primary"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Promotion
                    </div>
                    <p
                      className="text-sm opacity-80 leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Collaborative campaign with poster design, social media strategy, and 101 of 150 flyers distributed in 5 hours
                    </p>
                  </div>
                  
                  <div>
                    <div
                      className="text-xl font-bold mb-3 text-primary"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Outreach
                    </div>
                    <p
                      className="text-sm opacity-80 leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Back-to-back presentations to 470 foundation and first-year students introducing programme vision
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Welcome Week Launch Visuals */}
              <div className="relative grid md:grid-cols-2 gap-8">
                {/* Introductory Session */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative group"
                >
                  <div className="relative overflow-hidden border-2 border-border bg-accent/5">
                    <img
                      src={passSessionImage}
                      alt="Full-room introductory PASS session"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="mt-4">
                    <div
                      className="text-xs tracking-[0.2em] uppercase opacity-50 mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Introductory Session
                    </div>
                    <p
                      className="text-sm opacity-80 leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Full-room interactive session with bingo activity for student connection and community building
                    </p>
                  </div>
                </motion.div>

                {/* Opportunities Fair */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative group"
                >
                  <div className="relative overflow-hidden border-2 border-border bg-accent/5">
                    <img
                      src={opportunitiesFairImage}
                      alt="SEMS Opportunities Fair presence"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="mt-4">
                    <div
                      className="text-xs tracking-[0.2em] uppercase opacity-50 mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Opportunities Fair
                    </div>
                    <p
                      className="text-sm opacity-80 leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Direct engagement at SEMS fair, answering questions and connecting with students one-on-one
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Multi-Channel Engagement - Compact Row Layout */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4
                  className="text-xs tracking-[0.3em] uppercase opacity-60 mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Multi-Channel Engagement
                </h4>
                <div className="relative grid grid-cols-2 gap-6">
                  {/* Social Media Integration */}
                  <div className="space-y-3">
                    <div className="relative overflow-hidden border border-border bg-accent/5 aspect-[4/3] flex items-center justify-center p-4">
                      <img
                        src={socialMediaPromo}
                        alt="Instagram QR code for PASS social media"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div
                        className="text-xs tracking-[0.2em] uppercase opacity-50 mb-1"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Digital Presence
                      </div>
                      <p
                        className="text-xs opacity-70 leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Multi-channel strategy including social media integration and QR-code accessibility
                      </p>
                    </div>
                  </div>

                  {/* Platform Development */}
                  <div className="space-y-3">
                    <div className="relative overflow-hidden border border-border bg-accent/5 aspect-[4/3] flex items-center justify-center p-6">
                      <img
                        src={welcomeWeekBanner}
                        alt="PASS branding and module page development"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div
                        className="text-xs tracking-[0.2em] uppercase opacity-50 mb-1"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Platform Development
                      </div>
                      <p
                        className="text-xs opacity-70 leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Rebuilt dedicated module page with presentation slides and flexible weekly focus plan targeting student challenges
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Week 0 Detailed Breakdown */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="border-t-2 border-primary/20 pt-12"
              >
                <h4
                  className="text-sm tracking-[0.3em] uppercase opacity-60 mb-8 text-primary"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  Week 0: In-Person Active Promotion Timeline
                </h4>
                
                <div className="relative space-y-8">
                  {/* Monday 15th */}
                  <div className="grid md:grid-cols-4 gap-6 bg-accent/5 border border-border p-6">
                    <div className="md:col-span-1">
                      <div
                        className="text-xs tracking-[0.2em] uppercase opacity-50 mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Monday 15th Sept
                      </div>
                      <div
                        className="text-lg font-bold text-primary"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Foundation Induction Talks 1 & 2
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <p
                        className="text-sm opacity-80 leading-relaxed mb-3"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Targeted students in STEM Foundation Year including Biological & Chemical Sciences, Maths, Physics, and Electrical Engineering through Drapers Lecture Theatre presentations.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-primary/10 border border-primary/30 p-3">
                          <div
                            className="text-2xl font-bold text-primary"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            414+
                          </div>
                          <div
                            className="text-xs opacity-60"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            Students informed (207 per talk, 8-12 standing)
                          </div>
                        </div>
                        <div className="bg-primary/10 border border-primary/30 p-3">
                          <div
                            className="text-2xl font-bold text-primary"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            ~100%
                          </div>
                          <div
                            className="text-xs opacity-60"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            QMPlus page visits via QR code
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tuesday 16th */}
                  <div className="grid md:grid-cols-4 gap-6 bg-accent/5 border border-border p-6">
                    <div className="md:col-span-1">
                      <div
                        className="text-xs tracking-[0.2em] uppercase opacity-50 mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Tuesday 16th Sept
                      </div>
                      <div
                        className="text-lg font-bold text-primary"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        UG Additional Programmes Talk
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <p
                        className="text-sm opacity-80 leading-relaxed mb-3"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Drapers Lecture Theatre presentation reaching combination of first years and higher years in SEMS across all disciplines.
                      </p>
                      <div className="bg-primary/10 border border-primary/30 p-3 inline-block">
                        <div
                          className="text-2xl font-bold text-primary"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          52-69
                        </div>
                        <div
                          className="text-xs opacity-60"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          Students informed of PASS
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Wednesday 17th */}
                  <div className="grid md:grid-cols-4 gap-6 bg-accent/5 border border-border p-6">
                    <div className="md:col-span-1">
                      <div
                        className="text-xs tracking-[0.2em] uppercase opacity-50 mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Wednesday 17th Sept
                      </div>
                      <div
                        className="text-lg font-bold text-primary"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Students Opportunities Fair Stall
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <p
                        className="text-sm opacity-80 leading-relaxed mb-3"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        High-visibility stall engagement with flyers, posters, banners, and promotional materials creating crowded interest. Team positioned outside for additional promotion and informal conversations.
                      </p>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-primary/10 border border-primary/30 p-3">
                          <div
                            className="text-xl font-bold text-primary"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            150
                          </div>
                          <div
                            className="text-xs opacity-60"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            Flyers printed
                          </div>
                        </div>
                        <div className="bg-primary/10 border border-primary/30 p-3">
                          <div
                            className="text-xl font-bold text-primary"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            83
                          </div>
                          <div
                            className="text-xs opacity-60"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            Flyers taken
                          </div>
                        </div>
                        <div className="bg-primary/10 border border-primary/30 p-3">
                          <div
                            className="text-xl font-bold text-primary"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            67
                          </div>
                          <div
                            className="text-xs opacity-60"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            Flyers remaining
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Thursday 18th */}
                  <div className="grid md:grid-cols-4 gap-6 bg-accent/5 border border-border p-6">
                    <div className="md:col-span-1">
                      <div
                        className="text-xs tracking-[0.2em] uppercase opacity-50 mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Thursday 18th Sept
                      </div>
                      <div
                        className="text-lg font-bold text-primary"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Individual Stall with Library Services
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <p
                        className="text-sm opacity-80 leading-relaxed mb-3"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Cross-school promotion in Library Square, coordinating with student organisers across SEMS. Included WhatsApp group chat distribution and direct student engagement.
                      </p>
                      <div className="bg-primary/10 border border-primary/30 p-3 inline-block">
                        <div
                          className="text-2xl font-bold text-primary"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          92
                        </div>
                        <div
                          className="text-xs opacity-60"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          Members in WhatsApp group chat by Friday
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Friday 19th */}
                  <div className="grid md:grid-cols-4 gap-6 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border-2 border-primary/30 p-6">
                    <div className="md:col-span-1">
                      <div
                        className="text-xs tracking-[0.2em] uppercase opacity-50 mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Friday 19th Sept
                      </div>
                      <div
                        className="text-lg font-bold text-primary"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Introductory Session (Grand Finale)
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <p
                        className="text-sm opacity-80 leading-relaxed mb-3"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Full-room interactive session with "Uni Bingo" icebreaker activity boosting peer and mentor connections. Students engaged closely with Q&A sessions, activities, and comprehensive information about academics, societies, careers, and opportunities.
                      </p>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-primary/10 border border-primary/30 p-3">
                          <div
                            className="text-xl font-bold text-primary"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            49
                          </div>
                          <div
                            className="text-xs opacity-60"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            Flyers remained (101 taken total)
                          </div>
                        </div>
                        <div className="bg-primary/10 border border-primary/30 p-3">
                          <div
                            className="text-xl font-bold text-primary"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            38
                          </div>
                          <div
                            className="text-xs opacity-60"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            Students signed up for Microsoft Forms
                          </div>
                        </div>
                        <div className="bg-primary/10 border border-primary/30 p-3">
                          <div
                            className="text-xl font-bold text-primary"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            29
                          </div>
                          <div
                            className="text-xs opacity-60"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            Students attended in person
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* Tab Content: Semester A Results */}
        {activeTab === "semester-results" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative mb-16"
          >
            <h2
              className="text-xs tracking-[0.3em] uppercase opacity-60 mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Formal Report to Education Department
            </h2>
            <h3
              className="text-3xl md:text-4xl mb-12"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
            >
              Semester A Results: 2025-26 Academic Year
            </h3>

            <div className="relative space-y-16 max-w-6xl">
              {/* Key Metrics Summary */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-3 gap-6 p-8 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border-2 border-primary/30"
              >
                <div className="text-center">
                  <div
                    className="text-5xl font-bold text-primary mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    101
                  </div>
                  <div
                    className="text-xs opacity-70 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Total Attendees
                  </div>
                  <div
                    className="text-xs opacity-50 mt-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Across 11 weeks (22 sessions)
                  </div>
                </div>
                
                <div className="text-center">
                  <div
                    className="text-5xl font-bold text-primary mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    56
                  </div>
                  <div
                    className="text-xs opacity-70 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Individual Students
                  </div>
                  <div
                    className="text-xs opacity-50 mt-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Year 1 students
                  </div>
                </div>
                
                <div className="text-center">
                  <div
                    className="text-5xl font-bold text-primary mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    45
                  </div>
                  <div
                    className="text-xs opacity-70 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Repeat Attendees
                  </div>
                  <div
                    className="text-xs opacity-50 mt-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Multiple sessions
                  </div>
                </div>
              </motion.div>

              {/* Attendance Graph */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card border border-border p-8"
              >
                <h4
                  className="text-sm tracking-[0.3em] uppercase opacity-60 mb-8 text-primary"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  Weekly Attendance Trends
                </h4>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart
                    data={[
                      { week: "Week 1", attendees: 14, session1: 7, session2: 7 },
                      { week: "Week 2", attendees: 14, session1: 10, session2: 4 },
                      { week: "Week 3", attendees: 9, session1: 2, session2: 7 },
                      { week: "Week 4", attendees: 9, session1: 4, session2: 5 },
                      { week: "Week 5", attendees: 8, session1: 2, session2: 6 },
                      { week: "Week 6", attendees: 10, session1: 1, session2: 9 },
                      { week: "Week 7", attendees: 5, session1: 5, session2: 0 },
                      { week: "Week 8", attendees: 17, session1: 8, session2: 9 },
                      { week: "Week 9", attendees: 3, session1: 0, session2: 3 },
                      { week: "Week 10", attendees: 4, session1: 0, session2: 4 },
                      { week: "Week 11", attendees: 8, session1: 3, session2: 5 },
                    ]}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                    <XAxis 
                      dataKey="week" 
                      stroke="hsl(var(--foreground))"
                      opacity={0.7}
                      style={{ fontFamily: "var(--font-body)", fontSize: "12px" }}
                    />
                    <YAxis 
                      stroke="hsl(var(--foreground))"
                      opacity={0.7}
                      style={{ fontFamily: "var(--font-body)", fontSize: "12px" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "4px",
                        fontFamily: "var(--font-body)",
                        fontSize: "12px",
                      }}
                    />
                    <Legend 
                      wrapperStyle={{ 
                        fontFamily: "var(--font-body)", 
                        fontSize: "12px" 
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="attendees" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      name="Total Attendees"
                      dot={{ fill: "hsl(var(--primary))", r: 5 }}
                      activeDot={{ r: 7 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="session1" 
                      stroke="hsl(var(--accent))" 
                      strokeWidth={2}
                      name="Session 1"
                      strokeDasharray="5 5"
                      dot={{ fill: "hsl(var(--accent))", r: 3 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="session2" 
                      stroke="hsl(var(--muted-foreground))" 
                      strokeWidth={2}
                      name="Session 2"
                      strokeDasharray="5 5"
                      dot={{ fill: "hsl(var(--muted-foreground))", r: 3 }}
                    />
                    <ReferenceLine 
                      y={9.18} 
                      stroke="hsl(var(--primary))" 
                      strokeDasharray="3 3"
                      strokeWidth={2}
                      opacity={0.5}
                      label={{ 
                        value: "Average (9.18)", 
                        position: "right",
                        fill: "hsl(var(--primary))",
                        fontSize: 12,
                        fontFamily: "var(--font-body)"
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <p
                  className="text-xs opacity-60 mt-6 text-center"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Week 7 represents dedicated SKEMP week session. Average attendance: 9.18 students per week across 11-week period.
                </p>
              </motion.div>

              {/* Feedback Bubbles - Students */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4
                  className="text-sm tracking-[0.3em] uppercase opacity-60 mb-8 text-primary"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  Student Feedback Responses
                </h4>
                <div className="relative grid md:grid-cols-2 gap-6">
                  {[
                    "I had an excellent experience, the mentors really know how to help and they make sure you understand.",
                    "I appreciate that communication and stuff that is explained is very clear.",
                    "Nothing to change at all.",
                    "Everything was great and the mentors at PASS are so helpful with all the subjects. They explain all in more clear and engaging way.",
                    "I would say make it two 1-hour sessions to cover one topic for the first hour and the second hour used to answer the confusing problems. I appreciate your efforts to help students.",
                    "This session was very helpful. I am definitely coming more often.",
                  ].map((feedback, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-accent/10 to-primary/5 border border-primary/20 p-6 rounded-lg relative"
                    >
                      <div
                        className="absolute -top-2 -left-2 w-8 h-8 bg-primary/20 rounded-full border-2 border-primary/40"
                      ></div>
                      <p
                        className="text-sm leading-relaxed opacity-80 italic"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        "{feedback}"
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Satisfaction Metrics */}
                <div className="grid md:grid-cols-4 gap-6 mt-12">
                  <div className="bg-accent/5 border border-border p-6 text-center">
                    <div
                      className="text-4xl font-bold text-primary mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      100%
                    </div>
                    <div
                      className="text-xs opacity-70 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Very Happy
                    </div>
                    <div
                      className="text-xs opacity-50 mt-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Session satisfaction
                    </div>
                  </div>

                  <div className="bg-accent/5 border border-border p-6 text-center">
                    <div
                      className="text-4xl font-bold text-primary mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      100%
                    </div>
                    <div
                      className="text-xs opacity-70 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Extremely Well
                    </div>
                    <div
                      className="text-xs opacity-50 mt-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Tailored to needs
                    </div>
                  </div>

                  <div className="bg-accent/5 border border-border p-6 text-center">
                    <div
                      className="text-4xl font-bold text-primary mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      100%
                    </div>
                    <div
                      className="text-xs opacity-70 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Very Likely
                    </div>
                    <div
                      className="text-xs opacity-50 mt-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      To recommend
                    </div>
                  </div>

                  <div className="bg-accent/5 border border-border p-6 text-center">
                    <div
                      className="text-4xl font-bold text-primary mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      60%
                    </div>
                    <div
                      className="text-xs opacity-70 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Very Comfortable
                    </div>
                    <div
                      className="text-xs opacity-50 mt-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      40% Somewhat Comfortable
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mentor Feedback Bubbles */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="border-t border-border pt-12"
              >
                <h4
                  className="text-sm tracking-[0.3em] uppercase opacity-60 mb-8 text-primary"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  Mentor Feedback Responses
                </h4>
                <div className="relative space-y-6">
                  {[
                    "PASS has been an excellent opportunity to link my passion for helping others with improving my leadership and communication skills to boost my chances of employment down my career path.",
                    "PASS has been a really great experience as a mentor. It's turned into an opportunity that I mainly applied for to put on my CV into an experience where I get to connect with and guide so many 1st and Foundation Year students. I'm really enjoying my weekly sessions and I feel like the collaborative effort of my fellow mentors and I are making an impact. We have regular attendees weekly who we have built strong rapports with and feel comfortable with asking for help which is such an important hurdle to overcome. I have a really great Student Organiser who always goes above and beyond to accommodate the needs of mentors and mentees.",
                  ].map((feedback, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className={`bg-gradient-to-br ${
                        index % 2 === 0 
                          ? "from-primary/10 to-accent/5" 
                          : "from-accent/10 to-primary/5"
                      } border border-primary/20 p-8 rounded-lg relative`}
                    >
                      <div
                        className={`absolute ${
                          index % 2 === 0 ? "-top-3 -left-3" : "-top-3 -right-3"
                        } w-10 h-10 bg-primary/20 rounded-full border-2 border-primary/40`}
                      ></div>
                      <p
                        className="text-sm leading-relaxed opacity-80 italic"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        "{feedback}"
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Mentor Rating */}
                <div className="mt-12 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 border-2 border-primary/30 p-8 text-center">
                  <div
                    className="text-6xl font-bold text-primary mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    4.83
                  </div>
                  <div
                    className="text-sm opacity-70 uppercase tracking-wider mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Average Mentor Rating
                  </div>
                  <div
                    className="text-xs opacity-50"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Overall experience as a PASS Mentor (Scale: 1-5)
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}
        </>
        )}

        {/* Back to top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-16 border-t border-border"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </motion.div>
      </div>
    </div>
  );
}