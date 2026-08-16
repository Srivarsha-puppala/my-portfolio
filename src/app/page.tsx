"use client";

import React, { useState, useEffect } from "react";
import { 
  FileText, 
  Mail, 
  Layers, 
  Sun, 
  Moon,
  GraduationCap,
  Calendar,
  MapPin,
  Send
} from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [activeTab, setActiveTab] = useState("ABOUT");
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fullName = "Srivarsha Puppala";
  const navItems = ["ABOUT", "EDUCATION", "PROJECTS", "CONTACT"];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullName.slice(0, index + 1));
      index++;
      if (index === fullName.length) {
        clearInterval(interval);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const mailtoUrl = `mailto:srivarshapuppala02@gmail.com?subject=${encodeURIComponent(formData.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    setIsSubmitting(false);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#030712] text-white" : "bg-slate-50 text-slate-900"} selection:bg-cyan-500 selection:text-black overflow-x-hidden font-sans transition-colors duration-300`}>
      
      {/* Background Neon Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[650px] h-[450px] bg-blue-600/15 rounded-full blur-[160px]" />
      </div>

      {/* Floating Pill Header */}
      <header className="fixed top-6 left-0 right-0 z-50 flex items-center justify-center px-4">
        <div className="flex items-center gap-3">
          <nav className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 rounded-full border border-slate-700/60 bg-[#0f172a]/70 backdrop-blur-xl shadow-2xl shadow-black/50">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveTab(item)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                  activeTab === item
                    ? "bg-slate-700/80 text-white shadow-md"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-full border border-slate-700/60 bg-[#0f172a]/70 backdrop-blur-xl text-amber-400 hover:border-amber-400/50 hover:shadow-[0_0_12px_rgba(251,191,36,0.3)] transition-all"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 md:pt-36 pb-20">
        
        {/* About / Hero Section */}
        <section id="about" className="relative pl-8 md:pl-16 border-l border-cyan-500/40 ml-4 md:ml-10">
          
          {/* Glowing Top Node */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_18px_#22d3ee]" />

          {/* Title & Subtitle */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight flex flex-wrap items-center gap-3">
              <span>Hi, I&apos;m</span>
              <span className="text-[#38bdf8] drop-shadow-[0_0_25px_rgba(56,189,248,0.45)]">
                {typedText}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-normal pt-2">
              I am a Full Stack web Developer
            </p>
          </div>

          {/* Metric Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 max-w-xl">
            <div className="p-4 rounded-2xl bg-[#0f172a]/70 border border-slate-800/80 backdrop-blur-md text-center shadow-lg hover:border-cyan-500/40 transition-colors">
              <h3 className="text-2xl font-extrabold text-white">2</h3>
              <p className="text-[11px] uppercase tracking-widest text-slate-400 font-medium mt-1">Projects Built</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0f172a]/70 border border-slate-800/80 backdrop-blur-md text-center shadow-lg hover:border-cyan-500/40 transition-colors">
              <h3 className="text-2xl font-extrabold text-white">Now</h3>
              <p className="text-[11px] uppercase tracking-widest text-slate-400 font-medium mt-1">Available</p>
            </div>

            
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-8">
            <a 
              href="https://www.linkedin.com/in/srivarsha-puppala-365a3a33b/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full flex items-center justify-center bg-[#0e1626] border border-cyan-900/60 text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_12px_#22d3ee] transition-all cursor-pointer"
            >
              <LinkedinIcon size={19} />
            </a>

            <a 
              href="https://github.com/Srivarsha-puppala" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-full flex items-center justify-center bg-[#0e1626] border border-slate-800 text-slate-200 hover:border-slate-400 hover:shadow-[0_0_12px_rgba(255,255,255,0.2)] transition-all cursor-pointer"
            >
              <GithubIcon size={19} />
            </a>

            <a 
              href="mailto:srivarshapuppala02@gmail.com" 
              aria-label="Email"
              className="w-11 h-11 rounded-full flex items-center justify-center bg-[#0e1626] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-400 hover:shadow-[0_0_12px_rgba(255,255,255,0.2)] transition-all cursor-pointer"
            >
              <Mail size={19} />
            </a>
          </div>

          {/* Resume CTA */}
          <div className="pt-8">
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-cyan-400/80 bg-[#061828]/60 text-white font-medium text-sm tracking-wide shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:border-cyan-300 transition-all hover:scale-[1.02]"
            >
              <FileText size={17} className="text-cyan-400" />
              Download my Resume
            </a>
          </div>

        </section>

        {/* Education Section */}
        <section id="education" className="mt-28 pt-12 border-t border-slate-800/80">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-white">
            <GraduationCap className="text-cyan-400" size={24} />
            Education
          </h2>

          <div className="relative p-6 sm:p-8 rounded-2xl bg-[#090d16] border border-slate-800/80 hover:border-cyan-500/50 transition-all shadow-lg group">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Bachelor of Technology in Computer Science & Engineering
                </h3>
                <p className="text-cyan-400 font-medium text-sm mt-0.5">
                  B V Raju Institute of Technology (BVRIT)
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-semibold self-start sm:self-center">
                <Calendar size={13} />
                2024 – 2028
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <div className="px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/50 text-xs text-slate-300">
                <span className="text-slate-400">Current CGPA: </span>
                <span className="font-bold text-emerald-400">8.14 / 10.0</span>
              </div>
              <div className="px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/50 text-xs text-slate-300">
                <span className="text-slate-400">Location: </span>
                <span className="font-medium text-slate-200">Narsapur, Telangana</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="mt-28 pt-12 border-t border-slate-800/80">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-white">
            <Layers className="text-cyan-400" size={22} />
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* HackBridge */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-slate-800/80 hover:border-cyan-500/50 transition-all group shadow-md">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  HackBridge
                </h3>
                <a 
                  href="https://github.com/Srivarsha-puppala/HackBridge_" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="HackBridge GitHub Repository"
                  className="p-1.5 text-slate-400 hover:text-white transition-colors"
                >
                  <GithubIcon size={18} />
                </a>
              </div>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
               HackBridge is a real-time, AI-powered matchmaking platform designed to streamline team formation during hackathons. By calculating skill-based compatibility, it ensures that project ideas find the right technical talent instantly.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-cyan-950/40 text-cyan-300 border border-cyan-800/40">React</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50">Firebase</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50">Docker</span>
              </div>
            </div>

            {/* QuickForge */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-slate-800/80 hover:border-cyan-500/50 transition-all group shadow-md">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  QuickForge
                </h3>
                <a 
                  href="https://github.com/Srivarsha-puppala/quickforge" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="QuickForge GitHub Repository"
                  className="p-1.5 text-slate-400 hover:text-white transition-colors"
                >
                  <GithubIcon size={18} />
                </a>
              </div>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                QuickForge is a full-stack developer utility web application designed to instantly transform unorganized, raw project ideas and developer notes into clean, production-ready markdown documentation (such as README.md files).
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-cyan-950/40 text-cyan-300 border border-cyan-800/40">TypeScript</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50">Tailwind</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50">AI API</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-32 pt-16 border-t border-slate-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to Opportunities
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Let&apos;s Build Something Together
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Looking for Internships • Available to start immediately
              </p>

              <p className="text-slate-400 text-sm flex items-center gap-2">
                <span>📍</span> India • Open to Remote &amp; On-site
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-950/40 border border-purple-800/40 flex items-center justify-center text-purple-400 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Email Me</p>
                    <a 
                      href="mailto:srivarshapuppala02@gmail.com" 
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      srivarshapuppala02@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-pink-950/40 border border-pink-800/40 flex items-center justify-center text-pink-400 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Based In</p>
                    <p className="text-sm font-semibold text-white">
                      Hyderabad, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/Srivarsha-puppala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#0e1626] border border-slate-800 text-slate-300 hover:text-white hover:border-slate-500 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/srivarsha-puppala-365a3a33b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#0e1626] border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0f172a]/90 to-[#090d16]/90 border border-slate-800/80 shadow-2xl backdrop-blur-xl">
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#030712]/80 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#030712]/80 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Project Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#030712]/80 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#030712]/80 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-900 hover:bg-black border border-slate-700 hover:border-cyan-400/80 text-white font-medium text-sm tracking-wide shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send size={16} className="text-cyan-400" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-32 border-t border-slate-800/60 bg-[#02050e]/80 backdrop-blur-md py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
          
          <nav className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">
              Education
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-5 text-slate-400">
            <a
              href="https://www.linkedin.com/in/srivarsha-puppala-365a3a33b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-cyan-400 transition-colors"
            >
              <LinkedinIcon size={19} />
            </a>

            <a
              href="https://github.com/Srivarsha-puppala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition-colors"
            >
              <GithubIcon size={19} />
            </a>

            <a
              href="mailto:srivarshapuppala02@gmail.com"
              aria-label="Email"
              className="hover:text-cyan-400 transition-colors"
            >
              <Mail size={19} />
            </a>
          </div>

          <p className="text-xs text-slate-500 font-light tracking-wide">
            © {new Date().getFullYear()} Srivarsha Puppala. All Rights Reserved.
          </p>

        </div>
      </footer>

    </div>
  );
}