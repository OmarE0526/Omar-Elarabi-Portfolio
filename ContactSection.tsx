import { motion } from "motion/react";
import { personalInfo } from "../data/portfolio-data";
import { CV_DOWNLOAD_URL, HEAR_TRANSCRIPT_URL } from "../utils/constants";
import { Mail, Linkedin, Download, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:omarelarabi05@outlook.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-32 border-t border-border bg-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl md:text-6xl mb-8 leading-tight"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
            >
              Ready to Build
            </h2>

            <p
              className="text-base opacity-70 mb-12 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {personalInfo.availability}
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 group transition-opacity hover:opacity-60"
              >
                <Mail className="w-5 h-5" />
                <span style={{ fontFamily: "var(--font-body)" }}>
                  {personalInfo.email}
                </span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group transition-opacity hover:opacity-60"
              >
                <Linkedin className="w-5 h-5" />
                <span style={{ fontFamily: "var(--font-body)" }}>
                  LinkedIn Profile
                </span>
              </a>

              <a
                href={CV_DOWNLOAD_URL}
                download="Omar_Elarabi_CV.pdf"
                className="flex items-center gap-4 group transition-opacity hover:opacity-60"
              >
                <Download className="w-5 h-5" />
                <span style={{ fontFamily: "var(--font-body)" }}>
                  Download Full CV
                </span>
              </a>

              <a
                href={HEAR_TRANSCRIPT_URL}
                download="Omar_Elarabi_HEAR_Transcript.pdf"
                className="flex items-center gap-4 group transition-opacity hover:opacity-60"
              >
                <Download className="w-5 h-5" />
                <span style={{ fontFamily: "var(--font-body)" }}>
                  Download HEAR Transcript
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm mb-2 opacity-70"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  style={{ fontFamily: "var(--font-body)" }}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 opacity-70"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  style={{ fontFamily: "var(--font-body)" }}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm mb-2 opacity-70"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  style={{ fontFamily: "var(--font-body)" }}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-sm transition-all hover:shadow-lg flex items-center justify-center gap-2"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-12 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 opacity-50">
          <p className="text-sm" style={{ fontFamily: "var(--font-body)" }}>
            © 2026 {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm" style={{ fontFamily: "var(--font-body)" }}>
            Engineered Portfolio System
          </p>
        </div>
      </div>
    </section>
  );
}