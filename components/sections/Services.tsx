"use client";

import { motion } from "framer-motion";
import { Zap, Search, Smartphone, Bot, Code2, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website Redesign",
    description:
      "I take your outdated website and rebuild it from scratch with a modern stack — Next.js, Tailwind CSS, and smooth animations. Fast, accessible, and beautiful.",
    color: "text-purple-DEFAULT",
    bg: "bg-purple-DEFAULT/10",
    border: "hover:border-purple-DEFAULT/40",
  },
  {
    icon: Zap,
    title: "Performance Optimisation",
    description:
      "Slow websites lose customers. I optimise Core Web Vitals, images, fonts, and code to get your site scoring 90+ on Google PageSpeed.",
    color: "text-orange",
    bg: "bg-orange/10",
    border: "hover:border-orange/40",
  },
  {
    icon: Search,
    title: "SEO & AI Search",
    description:
      "Full SEO setup: structured data (JSON-LD), sitemap, robots.txt, meta tags, and an llms.txt file so your site shows up in AI search engines like Perplexity and ChatGPT.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "hover:border-green-400/40",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Every site I build is fully responsive from day one — designed for phones first and scaled up to desktop. No compromises on any screen size.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "hover:border-cyan-400/40",
  },
  {
    icon: Bot,
    title: "AI-Powered Development",
    description:
      "I use Cursor and Claude AI in my workflow to ship faster without sacrificing quality. You get a modern site delivered quickly at an accessible price point.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "hover:border-pink-400/40",
  },
  {
    icon: TrendingUp,
    title: "Conversion Focused",
    description:
      "WhatsApp floating button, LGPD cookie consent, Google Maps embed, testimonials carousel — every element designed to turn visitors into paying customers.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "hover:border-yellow-400/40",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" aria-label="Services" className="py-24 relative bg-surface/30">
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
            What I offer
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            I specialise in rebuilding outdated websites into modern, high-performance
            experiences — at a price that works for small businesses.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className={`glass border border-border ${service.border} rounded-2xl p-6 transition-all duration-300 group`}
            >
              <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                <service.icon size={22} className={service.color} />
              </div>
              <h3 className="text-text-primary font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-text-secondary mb-5">
            Want to see what your site could look like?{" "}
            <span className="text-purple-DEFAULT font-semibold">It&apos;s free to see the preview.</span>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-purple-gradient text-white font-semibold hover:shadow-purple transition-all duration-300 hover:scale-105"
          >
            Get a free preview →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
