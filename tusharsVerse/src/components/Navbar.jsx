import React from "react";
import profilePic from "../assets/profile.jpg";
import { Github, Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div
          className="
          relative
          backdrop-blur-xl 
          bg-white/5 
          border border-slate-700/60 
          rounded-2xl 
          px-5 py-3 
          flex items-center justify-between
          shadow-[0_12px_45px_rgba(15,23,42,0.9)]
          overflow-hidden
        "
        >
          {/* Glowing stars layer - a few subtle stars only */}
          <div className="stars">
            <span className="star-dot" />
            <span className="star-dot" />
             <span className="star-dot" />
            <span className="star-dot" />
          </div>

          {/* Left: Logo / Name */}
          <a href="#top" className="relative flex items-center gap-2">
            <div className="h-10 w-10 rounded-full overflow-hidden border border-slate-600 shadow-lg">
              <img src={profilePic} alt="Tushar Profile" className="w-full h-full object-cover"/>
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                Portfolio
              </span>
              <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-slate-50 via-slate-200 to-sky-300 bg-clip-text text-transparent">
                Tushar&apos;s Verse
              </span>
            </div>
          </a>

          {/* Middle: Links */}
          <div className="relative hidden sm:flex items-center gap-6 text-sm font-medium">
            <a
              href="#projects"
              className="text-slate-200 hover:text-sky-300 transition-colors"
            >
              Projects
            </a>
            <a
              href="#tech"
              className="text-slate-200 hover:text-sky-300 transition-colors"
            >
              Tech Stack
            </a>
            <a
              href="#contact"
              className="text-slate-200 hover:text-sky-300 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right: Icons */}
          <div className="relative flex items-center gap-3">
            <a
              href="https://github.com/tusshar-25"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-900/60 hover:bg-slate-800 text-slate-100 hover:text-sky-300 transition-colors border border-slate-700"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/tusharrathore25"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-900/60 hover:bg-slate-800 text-slate-100 hover:text-sky-300 transition-colors border border-slate-700"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;