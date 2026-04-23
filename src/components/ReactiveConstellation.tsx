"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type NodeType = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  size: number;
};

const NODE_COUNT = 72;
const CONNECTION_DISTANCE = 120;
const MOUSE_RADIUS = 140;
const PULSE_RADIUS = 170;

export default function ReactiveConstellation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const pulseRef = useRef<{
    x: number;
    y: number;
    active: boolean;
    time: number;
  }>({
    x: 0,
    y: 0,
    active: false,
    time: 0,
  });

  const [isClient, setIsClient] = useState(false);

  const nodes = useMemo<NodeType[]>(
    () =>
      Array.from({ length: NODE_COUNT }).map(() => {
        const x = Math.random() * 1000;
        const y = Math.random() * 600;

        return {
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          size: Math.random() * 2 + 1.2,
        };
      }),
    [],
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!wrapper || !canvas) return;

      width = wrapper.clientWidth;
      height = wrapper.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes.forEach((node) => {
        node.x = (node.x / 1000) * width;
        node.y = (node.y / 600) * height;
        node.baseX = (node.baseX / 1000) * width;
        node.baseY = (node.baseY / 600) * height;
      });
    };

    resize();

    const drawBackgroundGlow = () => {
      const gradient1 = ctx.createRadialGradient(
        width * 0.25,
        height * 0.3,
        0,
        width * 0.25,
        height * 0.3,
        180,
      );
      gradient1.addColorStop(0, "rgba(34,211,238,0.10)");
      gradient1.addColorStop(1, "rgba(34,211,238,0)");

      const gradient2 = ctx.createRadialGradient(
        width * 0.75,
        height * 0.65,
        0,
        width * 0.75,
        height * 0.65,
        180,
      );
      gradient2.addColorStop(0, "rgba(139,92,246,0.10)");
      gradient2.addColorStop(1, "rgba(139,92,246,0)");

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);
    };

    const drawGrid = () => {
      ctx.save();
      ctx.strokeStyle = "rgba(255,255,255,0.035)";
      ctx.lineWidth = 1;

      const grid = 32;
      for (let x = 0; x < width; x += grid) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += grid) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      drawBackgroundGlow();
      drawGrid();

      const mouse = mouseRef.current;
      const pulse = pulseRef.current;

      for (const node of nodes) {
        const returnForceX = (node.baseX - node.x) * 0.0025;
        const returnForceY = (node.baseY - node.y) * 0.0025;

        node.vx += returnForceX;
        node.vy += returnForceY;

        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MOUSE_RADIUS && dist > 0.001) {
            const force = (1 - dist / MOUSE_RADIUS) * 0.028;
            node.vx += dx * force * 0.02;
            node.vy += dy * force * 0.02;
          }
        }

        if (pulse.active) {
          const dx = node.x - pulse.x;
          const dy = node.y - pulse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < PULSE_RADIUS && dist > 0.001) {
            const force = (1 - dist / PULSE_RADIUS) * 0.55 * pulse.time;
            node.vx += (dx / dist) * force;
            node.vy += (dy / dist) * force;
          }
        }

        node.vx *= 0.965;
        node.vy *= 0.965;

        node.x += node.vx;
        node.y += node.vy;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const alpha = 1 - dist / CONNECTION_DISTANCE;

            const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            gradient.addColorStop(0, `rgba(34,211,238,${alpha * 0.35})`);
            gradient.addColorStop(1, `rgba(168,85,247,${alpha * 0.22})`);

            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = alpha * 1.2;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(255,255,255,0.85)";
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "rgba(34,211,238,0.18)";
        ctx.arc(node.x, node.y, node.size * 3.4, 0, Math.PI * 2);
        ctx.fill();
      }

      if (mouse.active) {
        const glow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          120,
        );
        glow.addColorStop(0, "rgba(34,211,238,0.12)");
        glow.addColorStop(1, "rgba(34,211,238,0)");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 120, 0, Math.PI * 2);
        ctx.fill();
      }

      if (pulse.active) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255,255,255,${0.22 * pulse.time})`;
        ctx.lineWidth = 1.4;
        ctx.arc(pulse.x, pulse.y, (1 - pulse.time) * 120, 0, Math.PI * 2);
        ctx.stroke();

        pulse.time *= 0.94;
        if (pulse.time < 0.05) {
          pulse.active = false;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    const handleMove = (event: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      mouseRef.current.x = event.clientX - rect.left;
      mouseRef.current.y = event.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleLeave = () => {
      mouseRef.current.active = false;
    };

    const handleClick = (event: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      pulseRef.current.x = event.clientX - rect.left;
      pulseRef.current.y = event.clientY - rect.top;
      pulseRef.current.active = true;
      pulseRef.current.time = 1;
    };

    const handleResize = () => resize();

    wrapper.addEventListener("mousemove", handleMove);
    wrapper.addEventListener("mouseleave", handleLeave);
    wrapper.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      wrapper.removeEventListener("mousemove", handleMove);
      wrapper.removeEventListener("mouseleave", handleLeave);
      wrapper.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient, nodes]);

  return (
    <div
      ref={wrapperRef}
      className="relative h-[360px] w-full overflow-hidden rounded-[2rem] border border-white/8 bg-[#060914] md:h-[460px]"
    >
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/45">
          Reactive Field
        </span>
        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-cyan-300">
          Live
        </span>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 grid grid-cols-3 gap-3 p-4">
        <div className="rounded-2xl border border-white/8 bg-black/20 p-4 backdrop-blur-sm">
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
            Signal
          </p>
          <p className="mt-2 text-sm text-white/85">Adaptive</p>
        </div>
        <div className="rounded-2xl border border-white/8 bg-black/20 p-4 backdrop-blur-sm">
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
            Flow
          </p>
          <p className="mt-2 text-sm text-white/85">Reactive</p>
        </div>
        <div className="rounded-2xl border border-white/8 bg-black/20 p-4 backdrop-blur-sm">
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
            State
          </p>
          <p className="mt-2 text-sm text-white/85">Connected</p>
        </div>
      </div>
    </div>
  );
}
