import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Featured Work
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
          Projects I&apos;ve been building
        </h2>
        <p className="mt-2 text-sm text-slate-400 max-w-2xl">
          From banking dashboards to booking platforms and management systems,
          here&apos;s a look at some of the products I&apos;ve crafted.
        </p>
      </div>

      {/* Project Cards */}
      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-slate-700/60 shadow-[0_16px_50px_rgba(15,23,42,0.75)] overflow-hidden px-6 py-6 sm:px-8 sm:py-7 flex flex-col md:flex-row gap-6"
          >
            {/* Left: main info */}
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-50">
                  {project.name}
                </h3>
                <span className="text-[11px] px-3 py-1 rounded-full bg-slate-900/60 border border-slate-600 text-sky-300">
                  {project.tag}
                </span>
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                {project.role}
              </p>

              <p className="text-sm text-slate-200">{project.description}</p>

              <p className="text-xs text-slate-400">{project.highlight}</p>

              {/* Stack badges */}
              <div className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-slate-900/70 border border-slate-700 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Demo Credentials */}
              {project.demoCredentials && project.demoCredentials.length > 0 && (
                <div className="mt-4 rounded-2xl bg-slate-900/60 border border-slate-700 px-4 py-3 text-xs text-slate-200">
                  <p className="font-semibold text-slate-100 mb-1">
                    Demo Login
                  </p>
                  <div className="space-y-1.5">
                    {project.demoCredentials.map((cred) => (
                      <div key={cred.label} className="flex flex-wrap gap-2">
                        <span className="font-medium text-sky-300">
                          {cred.label}:
                        </span>
                        <span>{cred.email}</span>
                        <span>{cred.password}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-1 text-[10px] text-slate-500">
                    Use these demo accounts to explore the live app.
                  </p>
                </div>
              )}
            </div>

            {/* Right: buttons */}
            <div className="md:min-w-[170px] flex md:flex-col items-start md:items-end gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-sky-500 text-slate-950 text-xs font-semibold hover:bg-sky-400 transition-all shadow-[0_4px_18px_rgba(56,189,248,0.5)]"
                >
                  Live Demo
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900/70 border border-slate-600 text-xs text-slate-100 hover:bg-slate-800 transition-all"
                >
                  <Github className="w-3 h-3" />
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
