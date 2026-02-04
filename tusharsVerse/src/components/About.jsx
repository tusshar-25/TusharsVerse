import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -30 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      ref={ref}
      id="about"
      className="pt-16 sm:pt-20 lg:pt-24 pb-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-black via-slate-950 to-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs - Enhanced Purple */}
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl animate-pulse"
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
      <motion.div
        className="
        relative z-10
        rounded-3xl
        bg-white/5
        backdrop-blur-xl
        border border-slate-700/60
        shadow-[0_18px_50px_rgba(15,23,42,0.7)]
        px-6 py-7 sm:px-8 sm:py-8
        grid gap-6 md:grid-cols-[2fr,1.3fr]
      "
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Left: Summary */}
        <motion.div 
          className="space-y-3"
          variants={itemVariants}
        >
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
            <span className="text-sky-300">KeTRA</span>,{" "}
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
        </motion.div>

        {/* Right: Quick facts */}
        <motion.div 
          className="space-y-4"
          variants={itemVariants}
        >
          <div className="rounded-2xl bg-slate-900/70 border border-slate-700 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              At a glance
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-200">
              <li>• React & full-stack JavaScript focused</li>
              <li>• Comfortable with MERN, UI libraries & auth flows</li>
              <li>• Built 4 major apps from scratch</li>
              <li>• Enjoy dashboards, trading platforms & admin panels</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-900/70 border border-slate-700 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Currently
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-200">
              <li>• Developing KeTRA trading platform</li>
              <li>• Refining Workly Pro and WanderLust</li>
              <li>• Exploring better UI patterns & animations</li>
              <li>• Preparing for future internships & roles</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
