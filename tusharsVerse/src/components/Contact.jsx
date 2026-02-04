import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [ref, inView] = useState(false);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="contact"
      className="pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-black via-slate-950 to-black"
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
        className="relative z-10 border border-slate-800/60 rounded-3xl p-6 sm:p-8 bg-black/40 backdrop-blur-xl"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Heading */}
        <motion.div 
          className="mb-6"
          variants={itemVariants}
        >
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
        </motion.div>

        {/* Contact Card */}
        <motion.div
          className="
          rounded-3xl
          bg-white/5
          backdrop-blur-xl
          border border-slate-700/60
          shadow-[0_16px_40px_rgba(15,23,42,0.7)]
          px-6 py-7
          flex flex-col md:flex-row gap-6 md:items-center
        "
          variants={itemVariants}
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
          </div>

          {/* Summary Card */}
          <motion.div 
            className="md:w-64"
            variants={itemVariants}
          >
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
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
