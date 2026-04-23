"use client";

import { useState } from "react";

type Mode = "original" | "cyber" | "glitch";

export default function InteractiveHero() {
  const [mode, setMode] = useState<Mode>("original");
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [hover, setHover] = useState(false);

  const nextMode = () => {
    if (mode === "original") return setMode("cyber");
    if (mode === "cyber") return setMode("glitch");
    return setMode("original");
  };

  const baseImage =
    mode === "original"
      ? "/images/caio-original.png"
      : mode === "cyber"
        ? "/images/caio-cyber.png"
        : "/images/caio-glitch.png";

  const revealImage =
    mode === "original"
      ? "/images/caio-cyber.png"
      : mode === "cyber"
        ? "/images/caio-glitch.png"
        : "/images/caio-original.png";

  return (
    <div
      className="group relative h-[460px] w-full cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-black"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouse({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={nextMode}
    >
      {/* IMAGEM BASE */}
      <img
        src={baseImage}
        alt="Caio portrait"
        className="absolute inset-0 h-full w-full object-cover scale-[1.02] transition duration-700"
      />

      {/* VINHETA CINEMATOGRÁFICA */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.22)_75%,rgba(0,0,0,0.50)_100%)]" />

      {/* CAMADA REVELADA APENAS NO CURSOR */}
      {hover && (
        <div
          className="absolute inset-0"
          style={{
            clipPath: `circle(95px at ${mouse.x}% ${mouse.y}%)`,
            WebkitClipPath: `circle(95px at ${mouse.x}% ${mouse.y}%)`,
          }}
        >
          <img
            src={revealImage}
            alt="Caio transformed portrait"
            className="absolute inset-0 h-full w-full object-cover scale-[1.02]"
          />

          {/* brilho interno da área revelada */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0%,rgba(34,211,238,0.10)_35%,transparent_72%)] mix-blend-screen" />
        </div>
      )}

      {/* HALO / LUZ DO CURSOR */}
      {hover && (
        <>
          <div
            className="pointer-events-none absolute z-10"
            style={{
              left: `${mouse.x}%`,
              top: `${mouse.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="h-40 w-40 rounded-full border border-cyan-300/25 bg-cyan-300/10 blur-2xl" />
          </div>

          <div
            className="pointer-events-none absolute z-10"
            style={{
              left: `${mouse.x}%`,
              top: `${mouse.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="h-[190px] w-[190px] rounded-full border border-white/10" />
          </div>
        </>
      )}

      {/* GRADIENTE INFERIOR PARA FICAR MAIS PREMIUM */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/45 to-transparent" />

      {/* LABELS DISCRETAS */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4">
        <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/50 backdrop-blur-sm">
          Identity Layer
        </span>

        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-sm">
          Interactive
        </span>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/45">
            Current mode
          </p>
          <p className="mt-2 text-sm text-white/85">
            {mode === "original"
              ? "Original"
              : mode === "cyber"
                ? "Cyber"
                : "Glitch"}
          </p>
        </div>

        <div className="text-right">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/45">
            Action
          </p>
          <p className="mt-2 text-sm text-white/85">
            Hover reveal • Click switch
          </p>
        </div>
      </div>
    </div>
  );
}
