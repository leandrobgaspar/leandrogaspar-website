"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Gamepad2, Dumbbell, BookOpen, Quote } from "lucide-react";

const activities = [
  { icon: Gamepad2, label: "Playing Games" },
  { icon: Dumbbell, label: "Physical Sports" },
  { icon: BookOpen, label: "Studying" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-purple-DEFAULT/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-DEFAULT font-mono text-sm tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Know Who <span className="gradient-text">I&apos;M</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-4 rounded-2xl bg-purple-gradient opacity-20 blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-border glass">
                <Image
                  src="/images/about.png"
                  alt="About Leandro Gaspar"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              {/* Stats badge */}
              <div className="absolute -bottom-4 -right-4 glass border border-border rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-DEFAULT">3+</div>
                <div className="text-xs text-text-secondary">Years coding</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-lg leading-relaxed mb-6"
            >
              Hi Everyone, I am{" "}
              <span className="text-purple-DEFAULT font-semibold">Leandro Gaspar</span> from{" "}
              <span className="text-orange font-semibold">Rio de Janeiro, Brazil.</span>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-lg leading-relaxed mb-4"
            >
              I currently work as a{" "}
              <span className="text-text-primary font-semibold">fullstack freelance developer</span> —
              rebuilding outdated websites into modern, fast, SEO-optimised experiences using{" "}
              <span className="text-purple-DEFAULT font-semibold">Cursor</span> and{" "}
              <span className="text-purple-DEFAULT font-semibold">Claude AI</span>.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-lg leading-relaxed mb-8"
            >
              I also build my own personal projects — from web platforms to game servers — and I love
              automating the boring parts with AI so I can focus on what actually matters.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-widest font-mono">
                When I&apos;m not coding
              </h3>
              <div className="flex flex-wrap gap-3">
                {activities.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-border hover:border-purple-DEFAULT/30 transition-all"
                  >
                    <Icon size={16} className="text-purple-DEFAULT" />
                    <span className="text-text-secondary text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.blockquote
              variants={itemVariants}
              className="relative glass border border-purple-DEFAULT/20 rounded-xl p-6"
            >
              <Quote size={20} className="text-purple-DEFAULT/50 mb-2" />
              <p className="text-text-primary italic text-lg font-medium">
                &ldquo;Giving up has never been an option!&rdquo;
              </p>
              <footer className="text-text-muted text-sm mt-2 font-mono">— Leandro Gaspar</footer>
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-gradient rounded-l-xl" />
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
