"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/leandrobgaspar", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/leandro-gaspar-676b6a220/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/leandro_bgaspar/", label: "Instagram" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">LG</span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-text-primary text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-text-muted hover:text-purple-DEFAULT hover:bg-purple-DEFAULT/10 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2 text-text-muted text-sm">
            <p>
              Designed and Developed by{" "}
              <span className="text-purple-DEFAULT font-medium">Leandro Gaspar</span>
            </p>
            <p className="flex items-center gap-1.5">
              © {year} GASPAR · Made with{" "}
              <Heart size={12} className="text-red-500 inline fill-red-500" />
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
