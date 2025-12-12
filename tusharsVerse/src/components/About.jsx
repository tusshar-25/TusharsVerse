import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="pt-6 pb-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div
        className="
        rounded-3xl
        bg-white/5
        backdrop-blur-xl
        border border-slate-700/60
        shadow-[0_18px_50px_rgba(15,23,42,0.7)]
        px-6 py-7 sm:px-8 sm:py-8
        grid gap-6 md:grid-cols-[2fr,1.3fr]
      "
      >
        {/* Left: Summary */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            About me
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
            Who I am as a developer
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            I&apos;m a React & full-stack JavaScript developer who enjoys
            turning ideas into real, production-style web applications. I care
            about the full experience — from polished UI and smooth flows to
            reliable APIs and database design.
          </p>

          <p className="text-sm text-slate-300 leading-relaxed">
            Alongside my BSc studies, I&apos;ve built complete apps like{" "}
            <span className="text-sky-300">Workly Pro</span>,{" "}
            <span className="text-sky-300">WanderLust</span> and{" "}
            <span className="text-sky-300">VentureWise</span>, focusing on real
            features like authentication, dashboards, role-based access and
            clean UI systems.
          </p>

          <p className="text-sm text-slate-300 leading-relaxed">
            My goal is to keep improving as a JavaScript engineer by building
            more real-world projects, learning better patterns and writing code
            that&apos;s both readable and scalable.
          </p>
        </div>

        {/* Right: Quick facts */}
        <div className="space-y-4">
          <div className="rounded-2xl bg-slate-900/70 border border-slate-700 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              At a glance
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-200">
              <li>• React & full-stack JavaScript focused</li>
              <li>• Comfortable with MERN, UI libraries & auth flows</li>
              <li>• Built 3 major apps from scratch</li>
              <li>• Enjoy dashboards, booking flows & admin panels</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-900/70 border border-slate-700 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Currently
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-200">
              <li>• Refining Workly Pro and WanderLust</li>
              <li>• Exploring better UI patterns & animations</li>
              <li>• Preparing for future internships & roles</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
