"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: "🟨", color: "from-yellow-500/20 to-yellow-600/5" },
  { name: "TypeScript", icon: "🔷", color: "from-blue-500/20 to-blue-600/5" },
  { name: "React", icon: "⚛️", color: "from-cyan-500/20 to-cyan-600/5" },
  { name: "Node.js", icon: "🟩", color: "from-green-500/20 to-green-600/5" },
  { name: "Python", icon: "🐍", color: "from-yellow-400/20 to-blue-500/5" },
  { name: "HTML5", icon: "🌐", color: "from-orange-500/20 to-orange-600/5" },
  { name: "CSS3", icon: "🎨", color: "from-blue-400/20 to-blue-500/5" },
  { name: "PostgreSQL", icon: "🐘", color: "from-indigo-500/20 to-indigo-600/5" },
  { name: "MongoDB", icon: "🍃", color: "from-green-600/20 to-green-700/5" },
  { name: "Docker", icon: "🐳", color: "from-sky-500/20 to-sky-600/5" },
  { name: "Git", icon: "📦", color: "from-orange-600/20 to-orange-700/5" },
  { name: "REST APIs", icon: "🔌", color: "from-purple-500/20 to-purple-600/5" },
  { name: "Next.js", icon: "▲", color: "from-zinc-400/20 to-zinc-500/5" },
  { name: "Linux", icon: "🐧", color: "from-slate-500/20 to-slate-600/5" },
];

const tools = [
  { name: "VS Code", icon: "💙" },
  { name: "GitHub", icon: "🐙" },
  { name: "Postman", icon: "🟠" },
  { name: "Figma", icon: "🎯" },
  { name: "Vercel", icon: "▲" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-surface/30">
      <div className="absolute inset-0 bg-gradient-radial from-orange/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-orange font-mono text-sm tracking-widest uppercase mb-3">
            What I work with
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Professional{" "}
            <span className="gradient-text">Skillset</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 mb-16"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`relative flex flex-col items-center gap-3 p-4 rounded-2xl glass border border-border hover:border-purple-DEFAULT/30 transition-all cursor-default group bg-gradient-to-br ${skill.color}`}
            >
              <span className="text-3xl">{skill.icon}</span>
              <span className="text-xs text-text-secondary group-hover:text-text-primary transition-colors font-medium text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center text-2xl font-bold mb-8">
            <span className="text-orange">Tools</span> I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-3 rounded-full glass border border-border hover:border-orange/30 transition-all cursor-default"
              >
                <span className="text-xl">{tool.icon}</span>
                <span className="text-text-secondary font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
