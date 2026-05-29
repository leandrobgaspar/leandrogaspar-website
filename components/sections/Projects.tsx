"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Lock, Globe } from "lucide-react";

const projects = [
  {
    title: "Karaokefy",
    description:
      "Personal project developed with my brother — a Karaoke app that creates your Karaoke in less than 5 minutes. Upload your song and lyrics; the app separates instrumental and vocal tracks using ffmpeg, synchronizes the lyrics with the vocal track, and combines everything automatically.",
    image: "/images/karaokefy.png",
    demoLink: "https://karaokefy.com/",
    isPrivate: true,
    tags: ["React", "Node.js", "ffmpeg", "AI"],
  },
  {
    title: "Glub — Ragnarok Online",
    description:
      "A personal game server project where I handle both website and server development from the ground up. Built entirely on my own — from the website to custom databases and emulator source code modifications. Future plans include AI integration.",
    image: "/images/glubro.png",
    demoLink: "https://www.glubro.neohost.tec.br/",
    isPrivate: true,
    tags: ["C++", "MySQL", "PHP", "Game Dev"],
  },
  {
    title: "Hospital Fluminense",
    description:
      "Website created during a freelance project for a hospital in Rio de Janeiro. My first freelance project — a beautiful addition to my portfolio even though it was ultimately discontinued before full responsiveness was implemented.",
    image: "/images/hfluminense.png",
    demoLink: "https://www.hospitalfluminense.com.br/",
    isPrivate: true,
    tags: ["HTML", "CSS", "JavaScript", "Freelance"],
  },
  {
    title: "Tatty Landing Page",
    description:
      "A landing page project I took on independently, convinced it would be more intuitive and effective than the existing solution. Built with a focus on conversion and modern design principles.",
    image: "/images/tatty.png",
    ghLink: "https://github.com/leandrobgaspar/tatty-web",
    isPublic: true,
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
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
            What I&apos;ve built
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            My Recent{" "}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Here are a few projects I&apos;ve worked on recently.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group glass border border-border hover:border-purple-DEFAULT/30 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-purple"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-surface-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                {/* Badge */}
                <div className="absolute top-3 right-3">
                  {project.isPrivate && (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-900/80 border border-red-700/50 text-red-300 text-xs font-medium backdrop-blur-sm">
                      <Lock size={10} /> Private
                    </span>
                  )}
                  {project.isPublic && (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-900/80 border border-green-700/50 text-green-300 text-xs font-medium backdrop-blur-sm">
                      <Globe size={10} /> Public
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-purple-DEFAULT transition-colors">
                  {project.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-purple-DEFAULT/10 border border-purple-DEFAULT/20 text-purple-light text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.ghLink && (
                    <a
                      href={project.ghLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-2 hover:bg-purple-DEFAULT/20 border border-border hover:border-purple-DEFAULT/40 text-text-secondary hover:text-purple-DEFAULT transition-all text-sm font-medium"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-DEFAULT/10 hover:bg-purple-DEFAULT/20 border border-purple-DEFAULT/20 hover:border-purple-DEFAULT/40 text-purple-light hover:text-purple-DEFAULT transition-all text-sm font-medium"
                    >
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
