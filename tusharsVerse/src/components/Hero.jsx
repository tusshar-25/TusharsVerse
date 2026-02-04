import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  ArrowDownIcon, 
  CodeBracketIcon, 
  SparklesIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon
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

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const mouseX = useSpring(mousePosition.x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(mousePosition.y, { stiffness: 300, damping: 30 });
  
  const roles = [
    "React Developer", 
    "Fullstack Engineer", 
    "UI/UX Designer", 
    "Problem Solver"
  ];
  const currentRole = roles[currentWordIndex];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      setMousePosition({ x, y });
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      return () => heroElement.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  useEffect(() => {
    if (displayText.length < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentWordIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentRole, roles]);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingIcons = [
    { Icon: CodeBracketIcon, delay: 0, x: -100, y: -50 },
    { Icon: SparklesIcon, delay: 0.5, x: 100, y: -30 },
    { Icon: CursorArrowRaysIcon, delay: 1, x: -80, y: 50 },
    { Icon: DevicePhoneMobileIcon, delay: 1.5, x: 120, y: 30 },
    { Icon: GlobeAltIcon, delay: 2, x: 0, y: -80 }
  ];

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative min-h-[100vh] pt-24 lg:pt-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-slate-950 to-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs - Enhanced Purple */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl"
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
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full filter blur-3xl"
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
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(139,92,246,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-purple-400/30"
          initial={{ 
            x: item.x, 
            y: item.y,
            opacity: 0 
          }}
          animate={{ 
            x: item.x + mouseX.get() * 0.1,
            y: item.y + mouseY.get() * 0.1,
            opacity: 0.6,
            rotate: [0, 360]
          }}
          transition={{
            opacity: { delay: 1 + index * 0.2 },
            rotate: { duration: 20 + index * 2, repeat: Infinity, ease: "linear" }
          }}
        >
          <item.Icon className="w-8 h-8" />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div 
        ref={ref}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-16 sm:pb-20 md:pb-24"
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-200 text-sm font-medium mb-6"
          variants={itemVariants}
        >
          <SparklesIcon className="w-4 h-4" />
          Available for freelance & full-time opportunities
        </motion.div>

        {/* Name */}
        <motion.h1 
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
          variants={itemVariants}
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Tushar Rathore
          </span>
        </motion.h1>

        {/* Animated Role */}
        <motion.div 
          className="h-8 mb-6"
          variants={itemVariants}
        >
          <p className="text-xl sm:text-2xl text-slate-200">
            <span className="text-cyan-400 font-medium">{displayText}</span>
            <span className="animate-pulse text-cyan-400">|</span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p 
          className="text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          variants={itemVariants}
        >
          Passionate full-stack developer crafting exceptional digital experiences with 
          React, Node.js, and modern web technologies. I transform ideas into powerful, 
          scalable applications that delight users.
        </motion.p>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12"
          variants={itemVariants}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">Fresher</div>
            <div className="text-xs sm:text-sm text-gray-400">Open to Opportunities</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">4+</div>
            <div className="text-xs sm:text-sm text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center md:col-span-1 col-span-2">
            <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
            <div className="text-xs sm:text-sm text-gray-400">Dedication</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-purple-500/25 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <ArrowDownIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
          
          <motion.a
            href="#contact"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-1 sm:gap-2 text-gray-400"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs sm:text-sm">Scroll to explore</span>
          <ArrowDownIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
