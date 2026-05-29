"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Globe, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";
import { cn } from "@/lib/utils";

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

const CARDS_PER_VIEW = { mobile: 1, tablet: 2, desktop: 3 };

function useCardsPerView() {
  const [count, setCount] = useState(CARDS_PER_VIEW.desktop);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCount(CARDS_PER_VIEW.mobile);
      else if (window.innerWidth < 1024) setCount(CARDS_PER_VIEW.tablet);
      else setCount(CARDS_PER_VIEW.desktop);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -4 }}
      className="group glass border border-border hover:border-purple-DEFAULT/30 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-purple cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} live`}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className="relative h-48 overflow-hidden bg-surface-2">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-DEFAULT/90 backdrop-blur-sm text-white text-sm font-semibold shadow-purple">
              <Globe size={14} /> View live site
            </div>
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full bg-background/80 border border-border/60 text-text-secondary text-xs backdrop-blur-sm">
            {styleLabels[project.style] ?? project.style}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-text-primary mb-1.5 group-hover:text-purple-DEFAULT transition-colors">
          {project.title}
        </h3>
        <p className="text-text-muted text-xs font-mono mb-3 truncate">{project.url}</p>
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>
        <div className="flex items-center gap-1.5 text-text-muted text-xs">
          <Calendar size={11} />
          <span>{project.date}</span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cardsPerView = useCardsPerView();

  const total = projects.length;
  const maxIndex = Math.max(0, total - cardsPerView);

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prev) => Math.max(0, Math.min(prev + dir, maxIndex)));
    },
    [maxIndex]
  );

  useEffect(() => {
    if (total <= cardsPerView || isPaused) return;
    const t = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(t);
  }, [total, cardsPerView, isPaused, maxIndex]);

  useEffect(() => { setIndex(0); }, [cardsPerView]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

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
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Websites redesigned with modern aesthetics, performance and accessibility.
            Click on the image to preview the live site.
          </p>
        </motion.div>

        {total === 0 ? (
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
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden">
              <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={cn(
                    "grid gap-6",
                    cardsPerView === 1 && "grid-cols-1",
                    cardsPerView === 2 && "grid-cols-2",
                    cardsPerView === 3 && "grid-cols-3"
                  )}
                >
                  {projects.slice(index, index + cardsPerView).map((project) => (
                    <ProjectCard
                      key={project.hostname}
                      project={project}
                      onClick={() => setActiveProject(project)}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {total > cardsPerView && (
              <div className="flex items-center justify-center gap-6 mt-10">
                <button
                  onClick={() => go(-1)}
                  disabled={index === 0}
                  className="p-2.5 rounded-xl glass border border-border hover:border-purple-DEFAULT/40 text-text-secondary hover:text-purple-DEFAULT disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <div className="flex items-center gap-2">
                  {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                      className={cn(
                        "rounded-full transition-all duration-300",
                        i === index ? "w-6 h-2 bg-purple-DEFAULT" : "w-2 h-2 bg-border hover:bg-text-muted"
                      )}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => go(1)}
                  disabled={index >= maxIndex}
                  className="p-2.5 rounded-xl glass border border-border hover:border-purple-DEFAULT/40 text-text-secondary hover:text-purple-DEFAULT disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
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
