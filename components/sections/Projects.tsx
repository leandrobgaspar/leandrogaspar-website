"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, Calendar } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";

const styleLabels: Record<string, string> = {
  advocacia: "⚖️ Advocacia",
  restaurante: "🍽️ Restaurante",
  saude: "🏥 Saúde",
  ecommerce: "🛒 E-commerce",
  tecnologia: "💻 Tecnologia",
  educacao: "🎓 Educação",
  imobiliaria: "🏠 Imobiliária",
  portfolio: "🎨 Portfolio",
  geral: "🌐 Geral",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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
            Improved websites
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            My{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Websites redesigned with modern aesthetics, performance and accessibility.
            Click on the image to preview the live site.
          </p>
        </motion.div>

        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-24 gap-6 text-center"
          >
            <div className="text-6xl">🚧</div>
            <div>
              <p className="text-text-primary font-semibold text-xl mb-2">Coming soon</p>
              <p className="text-text-secondary max-w-md">
                Projects will appear here automatically as they are published.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.article
                key={project.hostname}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group glass border border-border hover:border-purple-DEFAULT/30 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-purple cursor-pointer"
                onClick={() => setActiveProject(project)}
                role="button"
                tabIndex={0}
                aria-label={`Ver ${project.title} ao vivo`}
                onKeyDown={(e) => e.key === "Enter" && setActiveProject(project)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-surface-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-purple-DEFAULT/0 group-hover:bg-purple-DEFAULT/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                      <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-DEFAULT/90 backdrop-blur-sm text-white text-sm font-semibold shadow-purple">
                        <Globe size={14} /> View live site
                      </div>
                    </div>
                  </div>

                  {/* Style badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-background/80 border border-border/60 text-text-secondary text-xs backdrop-blur-sm">
                      {styleLabels[project.style] ?? project.style}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-text-primary mb-1.5 group-hover:text-purple-DEFAULT transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-xs font-mono mb-3 truncate">
                    {project.url}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-text-muted text-xs">
                    <Calendar size={11} />
                    <span>{project.date}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>

      {activeProject && (
        <ProjectModal
          url={activeProject.url}
          title={activeProject.title}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
