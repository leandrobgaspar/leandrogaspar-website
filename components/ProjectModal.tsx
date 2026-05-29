"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, RefreshCw } from "lucide-react";

interface ProjectModalProps {
  url: string;
  title: string;
  onClose: () => void;
}

export default function ProjectModal({ url, title, onClose }: ProjectModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeState, setIframeState] = useState<"loading" | "ready" | "blocked">("loading");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleLoad = () => {
    try {
      // If we can access contentWindow.location it's not blocked
      const _ = iframeRef.current?.contentWindow?.location?.href;
      setIframeState("ready");
    } catch {
      setIframeState("blocked");
    }
  };

  const handleError = () => setIframeState("blocked");

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-5xl bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl"
          style={{ height: "85vh" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface-2">
            <div className="flex items-center gap-3">
              {/* Browser dots */}
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-text-secondary text-sm font-mono truncate max-w-sm">
                {url}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface transition-all"
                title="Abrir em nova aba"
              >
                <ExternalLink size={14} />
              </a>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface transition-all"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="relative w-full h-full">
            {iframeState === "loading" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background">
                <div className="w-8 h-8 border-2 border-purple-DEFAULT/30 border-t-purple-DEFAULT rounded-full animate-spin" />
                <p className="text-text-secondary text-sm">Loading {title}...</p>
              </div>
            )}

            {iframeState === "blocked" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-background px-8 text-center">
                <div className="text-5xl">🔒</div>
                <div>
                  <p className="text-text-primary font-semibold mb-2">{title}</p>
                  <p className="text-text-secondary text-sm">
                    This site does not allow iframe embedding.
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-gradient text-white text-sm font-medium hover:shadow-purple transition-all"
                  >
                    <ExternalLink size={14} /> Open in new tab
                  </a>
                  <button
                    onClick={() => {
                      setIframeState("loading");
                      if (iframeRef.current) iframeRef.current.src = url;
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-text-secondary text-sm hover:text-text-primary hover:border-purple-DEFAULT/30 transition-all"
                  >
                    <RefreshCw size={14} /> Try again
                  </button>
                </div>
              </div>
            )}

            <iframe
              ref={iframeRef}
              src={url}
              title={title}
              onLoad={handleLoad}
              onError={handleError}
              className="w-full border-0"
              style={{ height: "calc(85vh - 49px)" }}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
