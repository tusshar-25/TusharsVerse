import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Contact
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
          Let&apos;s build something together
        </h2>
        <p className="mt-2 text-sm text-slate-400 max-w-2xl">
          Whether it&apos;s a full-stack app, a clean dashboard or a unique UI
          idea, I&apos;s always open to collaborations, internships and
          freelance opportunities.
        </p>
      </div>

      {/* Contact Card */}
      <div
        className="
        rounded-3xl
        bg-white/5
        backdrop-blur-xl
        border border-slate-700/60
        shadow-[0_16px_40px_rgba(15,23,42,0.7)]
        px-6 py-7
        flex flex-col md:flex-row gap-6 md:items-center
      "
      >
        {/* Left Info */}
        <div className="flex-1 space-y-4">
          <p className="text-sm text-slate-300">
            You can reach out to me directly anytime.  
            I usually respond within a day 😊
          </p>
          
          {/* LinkedIn */}
          <div className="space-y-1 text-sm">
            <p className="text-slate-400">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/tusharrathore25"
              target="_blank"
              rel="noreferrer"
              className="text-sky-300 hover:text-sky-400 transition-colors"
            >
              linkedin.com/in/tusharrathore25
            </a>
          </div>
        </div>

          {/* Email */}
          <div className="space-y-1 text-sm">
            <p className="text-slate-400">Email</p>
            <a
              href="mailto:tusharrathore853@gmail.com"
              className="text-sky-300 hover:text-sky-400 transition-colors"
            >
              tusharrathore853@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="space-y-1 text-sm">
            <p className="text-slate-400">Phone</p>
            <a
              href="tel:+919993802243"
              className="text-sky-300 hover:text-sky-400 transition-colors"
            >
              +91 99938 02243
            </a>
          </div>

          {/* Instagram */}
          <div className="space-y-1 text-sm">
            <p className="text-slate-400">Instagram</p>
            <a
              href="https://instagram.com/tushar._.rathod"
              target="_blank"
              rel="noreferrer"
              className="text-sky-300 hover:text-sky-400 transition-colors"
            >
              @tushar._.rathod
            </a>
          </div>

          

        {/* Summary Card */}
        <div className="md:w-64">
          <div className="rounded-2xl bg-slate-900/70 border border-slate-700 px-4 py-4 text-sm space-y-2">
            <p className="text-slate-300 font-semibold">
              Quick summary
            </p>
            <ul className="text-slate-400 text-xs space-y-1.5">
              <li>• React & full-stack JavaScript developer</li>
              <li>• Built Workly Pro, WanderLust & VentureWise</li>
              <li>• Focus on clean UI, UX & real products</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
