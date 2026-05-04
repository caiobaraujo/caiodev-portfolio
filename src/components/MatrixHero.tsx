"use client";

import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

type Cell = {
  alpha: number;
  offset: number;
};

export default function MatrixHero() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let animationId = 0;
    let lastTime = performance.now();

    const cellSize = 22;
    let cols = 0;
    let rows = 0;
    let cells: Cell[] = [];

    const mouse = {
      x: 0,
      y: 0,
      active: false,
      radius: 140,
    };

    const BUILD_TIME = 1.2;
    const FADE_TIME = 3.5;

    const codeLines = [
      "const fetchData = async () => await api.get('/users')",
      "useEffect(() => { loadProjects() }, [])",
      "SELECT * FROM users WHERE active = true",
      "if (!response.ok) throw new Error('Falha na requisição')",
      "router.push('/dashboard')",
      "const cache = new Map<string, Project>()",
      "export default function App() { return <Layout /> }",
      "docker compose up -d",
      "php artisan migrate --force",
      "python manage.py runserver",
    ];

    const clamp = (v: number) => Math.max(0, Math.min(1, v));
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const createGrid = () => {
      cols = Math.ceil(width / cellSize);
      rows = Math.ceil(height / cellSize);

      cells = Array.from({ length: cols * rows }, () => ({
        alpha: 0,
        offset: Math.random() * 500,
      }));
    };

    const resize = () => {
      width = wrapper.clientWidth;
      height = wrapper.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createGrid();
    };

    const draw = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);
      ctx.font = "12px monospace";

      for (let row = 0; row < rows; row++) {
        const line = codeLines[row % codeLines.length];

        for (let col = 0; col < cols; col++) {
          const i = row * cols + col;
          const cell = cells[i];

          const x = col * cellSize;
          const y = row * cellSize;

          const cx = x + cellSize / 2;
          const cy = y + cellSize / 2;

          let target = 0;

          if (mouse.active) {
            const dx = cx - mouse.x;
            const dy = cy - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius) {
              target = ease(1 - dist / mouse.radius);
            }
          }

          if (target > cell.alpha) {
            cell.alpha += (dt / BUILD_TIME) * target;
          } else {
            cell.alpha -= dt / FADE_TIME;
          }

          cell.alpha = clamp(cell.alpha);

          if (cell.alpha > 0.02) {
            const a = cell.alpha;
            const speed = 42;
            const offsetX = ((now / speed + cell.offset) % (width + 260)) - 260;

            ctx.fillStyle = `rgba(120,255,200,${0.11 * a})`;
            ctx.fillText(line, x + offsetX, y + 14);

            if (Math.random() < 0.035 * a) {
              ctx.fillStyle = `rgba(190,255,230,${0.18 * a})`;
              ctx.fillText(line, x + offsetX, y + 14);
            }
          }
        }
      }

      if (mouse.active) {
        const glow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius,
        );

        glow.addColorStop(0, "rgba(80,255,180,0.06)");
        glow.addColorStop(0.5, "rgba(80,255,180,0.03)");
        glow.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const onLeave = () => {
      mouse.active = false;
    };

    resize();
    animationId = requestAnimationFrame(draw);

    wrapper.addEventListener("mousemove", onMove);
    wrapper.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      wrapper.removeEventListener("mousemove", onMove);
      wrapper.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[460px] rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md shadow-[0_10px_50px_rgba(0,0,0,0.35)]">
      <div className="mb-4 flex justify-end">
        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-emerald-300">
          Online
        </span>
      </div>

      <div
        ref={wrapperRef}
        className="relative h-[520px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black"
      >
        <img
          src="/images/caio-original.png"
          alt="Retrato de Caio Araujo"
          className="absolute inset-0 h-full w-full object-contain"
        />

        <canvas ref={canvasRef} className="absolute inset-0" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.10)_82%,rgba(0,0,0,0.22)_100%)]" />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <a
          href="https://linkedin.com/in/caio-araujo-986801221"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-center gap-2 rounded-2xl border border-blue-400/20 bg-blue-400/10 px-4 py-3 text-sm font-semibold text-blue-200 transition hover:-translate-y-0.5 hover:border-blue-300/40 hover:bg-blue-400/15"
        >
          <FaLinkedinIn className="text-base transition group-hover:scale-110" />
          LinkedIn
        </a>

        <a
          href="https://github.com/caiobaraujo"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
        >
          <FaGithub className="text-base transition group-hover:scale-110" />
          GitHub
        </a>

        <a
          href="https://wa.me/5532984482369"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-center gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm font-semibold text-emerald-300 transition hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-emerald-400/15"
        >
          <FaWhatsapp className="text-base transition group-hover:scale-110" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
