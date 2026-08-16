"use client";

import React, { useState } from "react";
import { 
  FileText, 
  ExternalLink, 
  Mail, 
  Sparkles, 
  Moon, 
  Sun, 
  Layers, 
  ArrowUpRight 
} from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#0a0d14] text-slate-100" : "bg-slate-50 text-slate-900"} transition-colors duration-300 font-sans`}>
      
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-opacity-80 border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20">
              SP
            </div>
            <div>
              <h1 className="font-semibold text-sm leading-tight">Srivarsha Puppala</h1>
              <p className="text-xs text-slate-400">CSE Undergrad & AI Dev</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300 font-medium">
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-slate-800 hover:bg-slate-800/60 text-amber-400 transition-all"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a 
              href="/resume.pdf" 
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition-all"
            >
              <FileText size={16} />
              Resume PDF
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-20 max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-8 shadow-inner">
          <Sparkles size={14} className="text-purple-400" />
          Computer Science Undergrad & AI Builder
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Hi, I&apos;m <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400 bg-clip-text text-transparent">Srivarsha</span>
        </h1>

        <p className="max-w-2xl text-slate-300 md:text-lg leading-relaxed mb-10">
          Building intelligent web platforms, hackathon ecosystems, and high-performance AI integrations. Currently pursuing B.Tech in CSE at BVRIT with an 8.14 CGPA. Passionate about Full-Stack Systems, Semantic Vector Indexing, and Open Source.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02]"
          >
            Explore Projects
            <ArrowUpRight size={18} />
          </a>
          <a 
            href="#contact"
            className="px-6 py-3 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-medium transition-all"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800/60">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2">
          <Layers className="text-purple-400" size={24} />
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* HackBridge Card */}
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-purple-500/40 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">HackBridge</h3>
              <div className="flex gap-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white">
                  <GithubIcon size={18} />
                </a>
                <a href="https://vercel.com" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Full-stack real-time AI hackathon matchmaking platform. Implements semantic vector evaluation of teammate profiles with containerized microservices.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-purple-950/60 text-purple-300 border border-purple-800/40">Next.js</span>
              <span className="px-2.5 py-1 rounded-md bg-indigo-950/60 text-indigo-300 border border-indigo-800/40">Firebase</span>
              <span className="px-2.5 py-1 rounded-md bg-blue-950/60 text-blue-300 border border-blue-800/40">Docker</span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-300 border border-emerald-800/40">Gemini API</span>
            </div>
          </div>

          {/* QuickForge Card */}
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-purple-500/40 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">QuickForge</h3>
              <div className="flex gap-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white">
                  <GithubIcon size={18} />
                </a>
                <a href="https://vercel.com" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              AI text transformation app leveraging Gemini API to structure raw textual input into production-grade markdown formats in real time.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-purple-950/60 text-purple-300 border border-purple-800/40">Next.js</span>
              <span className="px-2.5 py-1 rounded-md bg-sky-950/60 text-sky-300 border border-sky-800/40">TypeScript</span>
              <span className="px-2.5 py-1 rounded-md bg-pink-950/60 text-pink-300 border border-pink-800/40">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-800/80 py-10 px-6 text-center text-slate-500 text-sm">
        <p className="mb-4">Designed & Built by Srivarsha Puppala</p>
        <div className="flex justify-center gap-4 text-slate-400">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href="mailto:example@gmail.com" className="hover:text-white transition-colors">
            <Mail size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <LinkedinIcon size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
}