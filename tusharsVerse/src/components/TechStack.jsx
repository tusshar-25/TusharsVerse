import React from "react";

const TechStack = () => {
  const groups = [
    {
      title: "Frontend",
      focus: "Clean, responsive and interactive interfaces.",
      highlight: "Modern React + Tailwind based UI with smooth animations.",
      items: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Chakra UI",
        "Material UI",
        "Framer Motion",
        "Recharts",
      ],
    },
    {
      title: "Backend & Auth",
      focus: "APIs, data, security and real-time features.",
      highlight: "REST APIs with Node/Express, secured via JWT & bcrypt.",
      items: [
        "Node.js",
        "Express",
        "MongoDB + Mongoose",
        "JWT Authentication",
        "bcryptjs",
        "Socket.IO",
        "Nodemailer",
      ],
    },
    {
      title: "Tools & Workflow",
      focus: "Building, testing and deploying real projects.",
      highlight: "End-to-end flow from local dev to live deployments.",
      items: [
        "Git & GitHub",
        "Render / Netlify",
        "Postman",
        "ESLint",
        "npm",
      ],
    },
  ];

  return (
    <section
      id="tech"
      className="pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Tech Stack
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
            Tools I work with
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            A full JavaScript-focused stack — from React interfaces to Node &
            MongoDB APIs — used to build projects like Workly Pro, WanderLust
            and VentureWise.
          </p>
        </div>

        <div className="text-xs text-slate-400">
          <p className="font-semibold text-slate-300">
            Primary Focus
          </p>
          <p>React · Node.js · MongoDB · Tailwind CSS</p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 lg:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.title}
            className="
              rounded-3xl
              bg-white/5
              backdrop-blur-xl
              border border-slate-700/60
              shadow-[0_16px_40px_rgba(15,23,42,0.7)]
              px-5 py-6
              flex flex-col gap-4
            "
          >
            {/* Title + focus */}
            <div>
              <h3 className="text-lg font-semibold text-slate-50">
                {group.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {group.focus}
              </p>
            </div>

            {/* Highlight line */}
            <div className="rounded-2xl bg-slate-900/70 border border-slate-700 px-3 py-2">
              <p className="text-[11px] text-sky-300 font-medium">
                Highlight
              </p>
              <p className="text-[11px] text-slate-300 mt-0.5">
                {group.highlight}
              </p>
            </div>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 mt-1">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-[11px] px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700 text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
