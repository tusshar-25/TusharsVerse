import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CogIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

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

const TechStack = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      title: "Frontend",
      icon: CodeBracketIcon,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      description: "Modern UI frameworks & libraries",
      technologies: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "Tailwind CSS", level: 95, icon: "🎨" },
        { name: "Framer Motion", level: 80, icon: "🎭" },
        { name: "Next.js", level: 75, icon: "▲" },
        { name: "Redux", level: 70, icon: "🔄" }
      ],
      highlights: ["Component Architecture", "Responsive Design", "Performance Optimization"]
    },
    {
      title: "Backend",
      icon: ServerIcon,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      description: "Server-side technologies & APIs",
      technologies: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 90, icon: "🚂" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
        { name: "REST APIs", level: 95, icon: "🔌" },
        { name: "GraphQL", level: 70, icon: "◈" }
      ],
      highlights: ["API Design", "Database Architecture", "Authentication"]
    },
    {
      title: "Tools & DevOps",
      icon: CogIcon,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      description: "Development tools & deployment",
      technologies: [
        { name: "Git & GitHub", level: 90, icon: "📦" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "CI/CD", level: 75, icon: "🔄" },
        { name: "AWS", level: 65, icon: "☁️" },
        { name: "Vercel", level: 85, icon: "▲" },
        { name: "ESLint", level: 80, icon: "📏" }
      ],
      highlights: ["Version Control", "Deployment", "Code Quality"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = (categoryIndex) => ({
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
      x: categoryIndex % 2 === 0 ? -100 : 100
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  });

  const TechBar = ({ tech, index }) => {
    const [barRef, barInView] = useInView({
      threshold: 0.1,
      triggerOnce: true
    });

    return (
      <motion.div
        ref={barRef}
        className="space-y-2"
        initial={{ opacity: 0, x: -20 }}
        animate={barInView ? { 
          opacity: 1, 
          x: 0,
          transition: { delay: index * 0.1 }
        } : { opacity: 0, x: -20 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">{tech.icon}</span>
            <span className="text-sm text-gray-300">{tech.name}</span>
          </div>
          <span className="text-xs text-gray-400">{tech.level}%</span>
        </div>
        <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
            initial={{ width: 0 }}
            animate={barInView ? { width: `${tech.level}%` } : { width: 0 }}
            transition={{ 
              duration: 1, 
              delay: index * 0.1 + 0.5,
              ease: "easeOut"
            }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="tech"
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
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.2 }}
        >
          <RocketLaunchIcon className="w-4 h-4" />
          Technical Expertise
        </motion.div>
        
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ delay: 0.3 }}
        >
          Technologies I{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Master
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ delay: 0.4 }}
        >
          A comprehensive skill set spanning frontend, backend, and development tools, 
          enabling me to build complete, scalable applications from concept to deployment.
        </motion.p>
      </motion.div>

      {/* Categories Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className={`relative bg-gradient-to-br from-slate-900/20 to-black/20 backdrop-blur-xl rounded-2xl border border-slate-700/40 overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20`}
            variants={cardVariants(categoryIndex)}
            onMouseEnter={() => setHoveredCategory(category.title)}
            onMouseLeave={() => setHoveredCategory(null)}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            {/* Animated Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            
            {/* Floating Particles */}
            {hoveredCategory === category.title && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 bg-gradient-to-r ${category.color} rounded-full opacity-30`}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + i * 15}%`,
                    }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      y: [0, -20, -30],
                      x: [0, (Math.random() - 0.5) * 10],
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Content */}
            <div className="relative z-10 p-4 sm:p-6">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">{category.description}</p>
                </div>
              </div>

              {/* Technologies with Skill Bars */}
              <div className="space-y-3 mb-4">
                {category.technologies.slice(0, 4).map((tech, index) => (
                  <TechBar key={tech.name} tech={tech} index={index} />
                ))}
              </div>

              {/* Highlights */}
              <div className={`p-3 ${category.bgColor} rounded-lg border ${category.borderColor}`}>
                <p className="text-xs font-medium text-gray-300 mb-2">Key Strengths</p>
                <div className="space-y-1">
                  {category.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircleIcon className="w-3 h-3 text-green-400" />
                      <span className="text-xs text-gray-400">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Technologies */}
              {category.technologies.length > 4 && (
                <div className="mt-4 flex flex-wrap gap-1">
                  {category.technologies.slice(4).map((tech) => (
                    <span
                      key={tech.name}
                      className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300"
                    >
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Decorative Corner */}
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.color} opacity-10 rounded-bl-full`} />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Stats */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.8 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">15+</div>
            <div className="text-xs sm:text-sm text-gray-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Fresher</div>
            <div className="text-xs sm:text-sm text-gray-400">Open to Opportunities</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">4+</div>
            <div className="text-xs sm:text-sm text-gray-400">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-xs sm:text-sm text-gray-400">Dedication</div>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
