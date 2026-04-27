"use client";

import { motion } from "framer-motion";

export default function TechBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_80%_35%,rgba(139,92,246,0.10),transparent_24%),radial-gradient(circle_at_50%_90%,rgba(34,211,238,0.08),transparent_28%)]" />

      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <motion.div
        className="absolute left-[12%] top-[40%] h-40 w-40 rounded-full border border-cyan-400/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -right-1 top-1/2 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
      </motion.div>

      <motion.div
        className="absolute right-[10%] top-[62%] h-32 w-32 rounded-full border border-violet-400/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_20px_rgba(196,181,253,0.9)]" />
      </motion.div>

      <motion.div
        className="absolute left-[35%] top-[82%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.9)]"
        animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.3, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[28%] top-[30%] h-2.5 w-2.5 rounded-full bg-violet-300 shadow-[0_0_20px_rgba(196,181,253,0.9)]"
        animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.8, 1.25, 0.8] }}
        transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
