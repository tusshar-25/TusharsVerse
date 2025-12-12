import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div
        className="
        relative
        rounded-3xl
        px-8 py-12
        bg-white/5
        backdrop-blur-xl
        border border-slate-700/60
        shadow-[0_20px_60px_rgba(15,23,42,0.6)]
        overflow-hidden
      "
      >
        {/* Sapphire Light Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/15 to-transparent opacity-30 blur-2xl pointer-events-none" />

        {/* CONTENT */}
        <div className="relative z-10">
          <p className="text-slate-400 text-xs uppercase tracking-[0.3em] mb-3">
            React • Fullstack • UI Developer
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-50">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-sky-300 to-cyan-200 bg-clip-text text-transparent">
              Tushar Rathore
            </span>
          </h1>

          <p className="mt-5 text-lg text-slate-300 max-w-2xl leading-relaxed">
            I’m a self-driven React & full-stack JavaScript developer who loves
            turning ideas into real, production-style applications. From modern UI 
            design to secure backend systems, I build complete web experiences with 
            clean interfaces, smooth UX, and scalable architecture.
          </p>

          <p className="mt-3 text-lg text-slate-300 max-w-2xl leading-relaxed">
            I’ve built projects like 
            <span className="text-sky-300"> Workly Pro</span>, 
            <span className="text-sky-300"> WanderLust</span>, and 
            <span className="text-sky-300"> VentureWise</span> — each focused on 
            real features, authentication, dashboards, and polished design.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-sky-500 text-slate-900 font-semibold hover:bg-sky-400 transition-all shadow-[0_4px_20px_rgba(56,189,248,0.45)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-slate-200 hover:bg-white/20 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
