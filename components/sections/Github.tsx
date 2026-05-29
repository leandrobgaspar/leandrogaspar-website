"use client";

import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

export default function Github() {
  return (
    <section id="github" aria-label="GitHub Activity" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-purple-DEFAULT/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-purple-DEFAULT font-mono text-sm tracking-widest uppercase mb-3">
            Open source activity
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Days I{" "}
            <span className="gradient-text">Code</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-md mx-auto">
            My GitHub contribution graph — each square is a day I pushed code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="glass border border-border rounded-2xl p-6 sm:p-8 w-full overflow-x-auto">
            <GitHubCalendar
              username="leandrobgaspar"
              colorScheme="dark"
              theme={{
                dark: [
                  "#1a1a1a",
                  "#3b0764",
                  "#6b21a8",
                  "#a855f7",
                  "#c084fc",
                ],
              }}
              style={{ margin: "0 auto" }}
              blockSize={13}
              blockMargin={4}
              fontSize={12}
              labels={{
                totalCount: "{{count}} contributions in the last year",
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-6"
        >
          <a
            href="https://github.com/leandrobgaspar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl glass border border-border hover:border-purple-DEFAULT/40 text-text-secondary hover:text-purple-DEFAULT transition-all text-sm font-medium"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View GitHub profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
