import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  EyeIcon, 
  CodeBracketIcon, 
  ArrowTopRightOnSquareIcon,
  StarIcon,
  UserGroupIcon,
  CogIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import { projects } from "../data/projects";

// Simple useInView implementation
const useInView = (options = {}) => {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: options.threshold || 0,
        triggerOnce: options.triggerOnce || false,
        rootMargin: options.rootMargin || '0px',
      }
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options.threshold, options.triggerOnce, options.rootMargin]);

  return [setRef, inView];
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
      x: index % 2 === 0 ? -100 : 100
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: index * 0.05
      }
    }
  };

  const getProjectIcon = (tag) => {
    if (tag.toLowerCase().includes('fullstack')) return <UserGroupIcon className="w-5 h-5" />;
    if (tag.toLowerCase().includes('react')) return <SparklesIcon className="w-5 h-5" />;
    if (tag.toLowerCase().includes('banking')) return <StarIcon className="w-5 h-5" />;
    return <CogIcon className="w-5 h-5" />;
  };

  const getProjectColor = (tag) => {
    if (tag.toLowerCase().includes('fullstack')) return 'from-blue-500 to-purple-600';
    if (tag.toLowerCase().includes('react')) return 'from-cyan-500 to-blue-600';
    if (tag.toLowerCase().includes('banking')) return 'from-green-500 to-emerald-600';
    return 'from-purple-500 to-pink-600';
  };

  return (
    <motion.div
      ref={ref}
      className="group"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-gradient-to-br from-slate-900/40 to-black/40 backdrop-blur-2xl rounded-3xl border border-slate-700/30 overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 h-[600px] md:h-[650px] flex flex-col">
        
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Header Section with Project Info */}
        <div className="relative p-6 pb-4 border-b border-slate-700/30">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  className={`p-3 rounded-2xl bg-gradient-to-r ${getProjectColor(project.tag)} text-white shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {getProjectIcon(project.tag)}
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                  <p className="text-sm text-slate-300">{project.role}</p>
                </div>
              </div>
              <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r ${getProjectColor(project.tag)} text-white shadow-md`}>
                {project.tag}
              </span>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="relative p-6 pt-4 flex-1 overflow-y-auto">
          <p className="text-slate-300 leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>
          
          {/* Key Features Grid */}
          <div className="grid grid-cols-1 gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl">
              <p className="text-xs font-medium text-purple-300 mb-1 flex items-center gap-2">
                <SparklesIcon className="w-4 h-4" />
                Key Feature
              </p>
              <p className="text-sm text-slate-200 line-clamp-2">{project.highlight}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-4">
            <p className="text-xs font-medium text-slate-400 mb-2">Technologies Used</p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.slice(0, 6).map((tech) => (
                <span key={tech} className="px-2 py-1 bg-slate-700/50 backdrop-blur-sm rounded-xl text-xs text-slate-200 border border-slate-600/30 hover:bg-slate-700/70 transition-colors">
                  {tech}
                </span>
              ))}
              {project.stack.length > 6 && (
                <span className="px-2 py-1 bg-slate-700/30 backdrop-blur-sm rounded-xl text-xs text-slate-400 border border-slate-600/20">
                  +{project.stack.length - 6} more
                </span>
              )}
            </div>
          </div>

          {/* Demo Credentials */}
          {project.demoCredentials && project.demoCredentials.length > 0 && (
            <div className="mb-4 p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl">
              <p className="text-xs font-medium text-green-300 mb-1 flex items-center gap-2">
                <EyeIcon className="w-4 h-4" />
                Demo Available
              </p>
              <div className="space-y-1">
                {project.demoCredentials.slice(0, 1).map((cred) => (
                  <div key={cred.label} className="text-xs text-slate-200">
                    <span className="font-medium">{cred.label}:</span> {cred.email}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="relative p-6 pt-0">
          <div className="flex gap-3">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${getProjectColor(project.tag)} text-white text-sm font-medium rounded-2xl hover:shadow-xl transition-all duration-200 border border-white/10`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <EyeIcon className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
            
            {project.repoUrl && (
              <motion.a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-700/60 backdrop-blur-sm hover:bg-slate-600/60 text-white text-sm font-medium rounded-2xl transition-all duration-300 border border-slate-600/30"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <CodeBracketIcon className="w-4 h-4" />
                Code
              </motion.a>
            )}
          </div>
        </div>

        {/* Floating Particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-purple-400' : 'bg-blue-400'}`}
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${10 + i * 12}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, -30, -60],
                  x: [0, (Math.random() - 0.5) * 30],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5 + i * 0.2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative bg-gradient-to-br from-black via-slate-950 to-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs - Enhanced Purple */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(139,92,246,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 border border-slate-800/60 rounded-3xl p-6 sm:p-8 bg-black/40 backdrop-blur-xl">
      {/* Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ delay: 0.2 }}
        >
          <SparklesIcon className="w-4 h-4" />
          Featured Projects
        </motion.div>
        
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ delay: 0.3 }}
        >
          Recent Work &{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Case Studies
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ delay: 0.4 }}
        >
          Explore my latest projects showcasing full-stack development, modern UI/UX design, 
          and innovative solutions to real-world challenges.
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-gray-400 mb-4">Interested in collaborating?</p>
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Work Together
          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
        </motion.a>
      </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
