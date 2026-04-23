"use client";

import { motion } from "framer-motion";

const nodes = [
  { top: "18%", left: "14%", delay: 0 },
  { top: "28%", left: "72%", delay: 0.8 },
  { top: "52%", left: "20%", delay: 1.2 },
  { top: "60%", left: "82%", delay: 0.4 },
  { top: "78%", left: "35%", delay: 1.6 },
  { top: "84%", left: "68%", delay: 0.9 },
];

const connections = [
  { top: "22%", left: "18%", width: "24%", rotate: "12deg" },
  { top: "35%", left: "49%", width: "20%", rotate: "-18deg" },
  { top: "58%", left: "24%", width: "28%", rotate: "10deg" },
  { top: "73%", left: "40%", width: "18%", rotate: "-12deg" },
];

export default function TechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.10),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.08),transparent_30%)]" />

      <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <motion.div
        className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[10%] top-[18%] h-56 w-56 rounded-full bg-violet-500/10 blur-3xl"
        animate={{
          y: [0, 18, 0],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {connections.map((line, index) => (
        <motion.div
          key={index}
          className="absolute h-px bg-gradient-to-r from-cyan-400/0 via-cyan-300/60 to-violet-400/0"
          style={{
            top: line.top,
            left: line.left,
            width: line.width,
            transform: `rotate(${line.rotate})`,
            transformOrigin: "left center",
          }}
          animate={{
            opacity: [0.15, 0.6, 0.15],
          }}
          transition={{
            duration: 3.5 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ top: node.top, left: node.left }}
          initial={{ opacity: 0.4, scale: 0.8 }}
          animate={{
            opacity: [0.35, 1, 0.35],
            scale: [0.9, 1.2, 0.9],
          }}
          transition={{
            duration: 2.8,
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
            <div className="absolute inset-0 animate-ping rounded-full bg-cyan-300/40" />
          </div>
        </motion.div>
      ))}

      <motion.div
        className="absolute left-[12%] top-[30%] h-40 w-40 rounded-full border border-cyan-400/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -right-1 top-1/2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />
      </motion.div>

      <motion.div
        className="absolute right-[14%] top-[58%] h-28 w-28 rounded-full border border-violet-400/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,0.8)]" />
      </motion.div>
    </div>
  );
}
