"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Send, Mail, MapPin } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/leandrobgaspar",
    handle: "@leandrobgaspar",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/leandro-gaspar-676b6a220/",
    handle: "Leandro Gaspar",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/leandro_bgaspar/",
    handle: "@leandro_bgaspar",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  const [form, setForm] = useState({ email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.subject || !form.message) return;

    setStatus("sending");

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_oc3l9ih",
          template_id: "template_2ui86du",
          user_id: "eomYKcRvS8MlqN5Js",
          template_params: {
            from_Subject: form.subject,
            send_email: form.email,
            send_message: form.message,
          },
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("sent");
      setForm({ email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-surface/30">
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
            Let&apos;s talk
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto">
            Want to get in touch about projects or something specific? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="flex items-start gap-4 glass border border-border rounded-2xl p-5">
              <div className="p-3 rounded-xl bg-purple-DEFAULT/10 border border-purple-DEFAULT/20">
                <Mail size={20} className="text-purple-DEFAULT" />
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Email</p>
                <p className="text-text-secondary text-sm">leo.cavalcanti91@gmail.com</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-4 glass border border-border rounded-2xl p-5">
              <div className="p-3 rounded-xl bg-orange/10 border border-orange/20">
                <MapPin size={20} className="text-orange" />
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Location</p>
                <p className="text-text-secondary text-sm">Rio de Janeiro, Brazil</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-mono uppercase tracking-widest text-text-muted mb-4">
                Find me on
              </h3>
              <div className="space-y-3">
                {socialLinks.map(({ icon: Icon, label, href, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 glass border border-border hover:border-purple-DEFAULT/30 rounded-xl p-4 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-surface-2 group-hover:bg-purple-DEFAULT/10 transition-colors">
                      <Icon size={16} className="text-text-secondary group-hover:text-purple-DEFAULT transition-colors" />
                    </div>
                    <div>
                      <p className="text-text-primary text-sm font-medium">{label}</p>
                      <p className="text-text-muted text-xs font-mono">{handle}</p>
                    </div>
                    <div className="ml-auto text-text-muted group-hover:text-purple-DEFAULT transition-colors">
                      →
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass border border-border rounded-2xl p-8 space-y-5"
            >
              <div>
                <label className="block text-text-secondary text-sm font-medium mb-2" htmlFor="email">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@example.com"
                  required
                  className="w-full bg-surface-2 border border-border hover:border-border focus:border-purple-DEFAULT/50 rounded-xl px-4 py-3 text-text-primary placeholder-text-muted outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-orange text-sm font-medium mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Let me know how I can help you"
                  required
                  className="w-full bg-surface-2 border border-border hover:border-border focus:border-orange/50 rounded-xl px-4 py-3 text-text-primary placeholder-text-muted outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-text-secondary text-sm font-medium mb-2" htmlFor="message">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full bg-surface-2 border border-border hover:border-border focus:border-purple-DEFAULT/50 rounded-xl px-4 py-3 text-text-primary placeholder-text-muted outline-none transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-gradient text-white font-semibold hover:shadow-purple transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>

              {status === "sent" && (
                <p className="text-green-400 text-sm text-center font-medium">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center font-medium">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
