"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    color: "text-cyan-400",
    activeBg: "bg-cyan-400/10 border-cyan-400/40",
    skills: [
      { name: "JavaScript", icon: "🟨" },
      { name: "TypeScript", icon: "🔷" },
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind CSS", icon: "🌊" },
      { name: "Framer Motion", icon: "🎭" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    color: "text-green-400",
    activeBg: "bg-green-400/10 border-green-400/40",
    skills: [
      { name: "Node.js", icon: "🟩" },
      { name: "Python", icon: "🐍" },
      { name: "REST APIs", icon: "🔌" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Docker", icon: "🐳" },
      { name: "Linux", icon: "🐧" },
      { name: "Git", icon: "📦" },
    ],
  },
  {
    id: "tools",
    label: "Tools & AI",
    color: "text-purple-DEFAULT",
    activeBg: "bg-purple-DEFAULT/10 border-purple-DEFAULT/40",
    skills: [
      { name: "Cursor", icon: "🖱️", highlight: true },
      { name: "Claude AI", icon: "🤖", highlight: true },
      { name: "GitHub", icon: "🐙" },
      { name: "Vercel", icon: "▲" },
      { name: "Postman", icon: "🟠" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 15 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Skills() {
  const [active, setActive] = useState("frontend");
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="skills" aria-label="Skills" className="py-24 relative bg-surface/30">
      <div className="absolute inset-0 bg-gradient-radial from-orange/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-orange font-mono text-sm tracking-widest uppercase mb-3">
            What I work with
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Professional{" "}
            <span className="gradient-text">Skillset</span>
          </h2>
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200",
                active === cat.id
                  ? `${cat.activeBg} ${cat.color}`
                  : "glass border-border text-text-muted hover:text-text-secondary hover:border-border"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          key={active}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-4"
        >
          {current.skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.04, y: -3 }}
              className={cn(
                "flex items-center gap-3 p-4 rounded-2xl glass border transition-all cursor-default group",
                "highlight" in skill && skill.highlight
                  ? "border-purple-DEFAULT/30 bg-purple-DEFAULT/5 hover:border-purple-DEFAULT/50"
                  : "border-border hover:border-purple-DEFAULT/25"
              )}
            >
              <span className="text-2xl flex-shrink-0">{skill.icon}</span>
              <span className={cn(
                "text-sm font-medium transition-colors",
                "highlight" in skill && skill.highlight
                  ? "text-purple-light"
                  : "text-text-secondary group-hover:text-text-primary"
              )}>
                {skill.name}
              </span>
              {"highlight" in skill && skill.highlight && (
                <span className="ml-auto text-[9px] font-mono text-purple-DEFAULT/60 bg-purple-DEFAULT/10 px-1.5 py-0.5 rounded-full flex-shrink-0">
                  AI
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Category description */}
        <motion.p
          key={active + "-desc"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center text-text-muted text-sm font-mono"
        >
          {active === "frontend" && "Building pixel-perfect, animated UIs that work on every device"}
          {active === "backend" && "APIs, databases, containers — the engine behind the interface"}
          {active === "tools" && "AI-first workflow: Cursor + Claude AI for 10× faster development"}
        </motion.p>
      </div>
    </section>
  );
}
