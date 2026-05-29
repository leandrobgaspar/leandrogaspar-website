"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowDown } from "lucide-react";
import Image from "next/image";

const roles = ["Full-Stack Developer", "Website Improver", "AI-Powered Developer", "Freelancer"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === role) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 50 : 100;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting ? role.slice(0, displayText.length - 1) : role.slice(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background glow */}
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-DEFAULT/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-purple-DEFAULT font-mono text-sm mb-4 tracking-widest uppercase"
            >
              Hello, World! 👋🏻
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            >
              I&apos;m{" "}
              <span className="text-purple-DEFAULT glow-purple">Leandro</span>{" "}
              <span className="text-orange">Gaspar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl sm:text-3xl text-text-secondary mb-8 h-10 font-mono"
            >
              <span className="text-text-primary">{displayText}</span>
              <span className="animate-pulse text-purple-DEFAULT">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-text-secondary text-lg mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Fullstack freelance developer from{" "}
              <span className="text-orange font-semibold">Rio de Janeiro, Brazil</span>.
              I rebuild outdated websites into modern, fast experiences — powered by AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href="https://github.com/leandrobgaspar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:bg-purple-DEFAULT/20 hover:border-purple-DEFAULT/50 border border-border transition-all duration-200 hover:shadow-purple group"
                aria-label="GitHub"
              >
                <Github size={20} className="text-text-secondary group-hover:text-purple-DEFAULT transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/leandro-gaspar-676b6a220/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:bg-purple-DEFAULT/20 hover:border-purple-DEFAULT/50 border border-border transition-all duration-200 hover:shadow-purple group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-text-secondary group-hover:text-purple-DEFAULT transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/leandro_bgaspar/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:bg-orange/20 hover:border-orange/50 border border-border transition-all duration-200 hover:shadow-orange group"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-text-secondary group-hover:text-orange transition-colors" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#services"
                className="px-8 py-3 rounded-xl bg-purple-gradient text-white font-semibold hover:shadow-purple transition-all duration-300 hover:scale-105 text-center"
              >
                My Services
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-xl border border-border text-text-secondary hover:text-text-primary hover:border-purple-DEFAULT/50 hover:bg-surface-2 font-semibold transition-all duration-300 text-center"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full bg-purple-gradient opacity-20 blur-2xl animate-pulse-slow" />
              <div className="relative w-full h-full rounded-full border-2 border-purple-DEFAULT/30 overflow-hidden glass">
                <Image
                  src="/images/avatar.svg"
                  alt="Leandro Gaspar"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Orbiting elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-2xl animate-float">
                ⚡
              </div>
              <div className="absolute -bottom-2 -left-4 w-10 h-10 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-xl" style={{ animationDelay: "2s" }}>
                🚀
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
