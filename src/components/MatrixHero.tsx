"use client";

import { useEffect, useRef } from "react";

type Cell = {
  progress: number; // 0 = original, 1 = matrix
};

export default function MatrixHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const originalImg = new Image();
    const matrixImg = new Image();

    originalImg.src = "/images/caio-original.png";
    matrixImg.src = "/images/caio-matrix.png";

    let animationId = 0;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let lastTime = performance.now();

    const cellSize = 16;
    let cols = 0;
    let rows = 0;
    let cells: Cell[] = [];

    const mouse = {
      x: 0,
      y: 0,
      active: false,
      radius: 120,
    };

    const BUILD_TIME = 1.0; // segundos para virar matrix
    const REBUILD_TIME = 3.0; // segundos para voltar ao original

    const createGrid = () => {
      cols = Math.ceil(width / cellSize);
      rows = Math.ceil(height / cellSize);
      cells = Array.from({ length: cols * rows }, () => ({
        progress: 0,
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

    const loadImage = (img: HTMLImageElement) =>
      new Promise<void>((resolve) => {
        if (img.complete) {
          resolve();
        } else {
          img.onload = () => resolve();
        }
      });

    const getCoverRect = (img: HTMLImageElement) => {
      const imgRatio = img.width / img.height;
      const canvasRatio = width / height;

      let drawWidth = width;
      let drawHeight = height;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > canvasRatio) {
        drawHeight = height;
        drawWidth = height * imgRatio;
        offsetX = (width - drawWidth) / 2;
      } else {
        drawWidth = width;
        drawHeight = width / imgRatio;
        offsetY = (height - drawHeight) / 2;
      }

      return { drawWidth, drawHeight, offsetX, offsetY };
    };

    const drawCoverImage = (img: HTMLImageElement) => {
      const { drawWidth, drawHeight, offsetX, offsetY } = getCoverRect(img);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const draw = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);
      drawCoverImage(originalImg);

      const matrixRect = getCoverRect(matrixImg);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const index = row * cols + col;
          const cell = cells[index];

          const x = col * cellSize;
          const y = row * cellSize;
          const centerX = x + cellSize / 2;
          const centerY = y + cellSize / 2;

          let target = 0;

          if (mouse.active) {
            const dx = centerX - mouse.x;
            const dy = centerY - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius) {
              const influence = 1 - dist / mouse.radius;
              target = easeOutCubic(influence);
            }
          }

          if (target > cell.progress) {
            const speed = dt / BUILD_TIME;
            cell.progress = Math.min(
              cell.progress + speed * Math.max(0.35, target),
              target,
            );
          } else if (target < cell.progress) {
            const speed = dt / REBUILD_TIME;
            cell.progress = Math.max(cell.progress - speed, target);
          }

          if (cell.progress > 0.001) {
            const eased = easeInOutQuad(cell.progress);

            const sx =
              ((x - matrixRect.offsetX) / matrixRect.drawWidth) *
              matrixImg.width;
            const sy =
              ((y - matrixRect.offsetY) / matrixRect.drawHeight) *
              matrixImg.height;
            const sw = (cellSize / matrixRect.drawWidth) * matrixImg.width;
            const sh = (cellSize / matrixRect.drawHeight) * matrixImg.height;

            ctx.save();
            ctx.globalAlpha = eased;

            ctx.drawImage(matrixImg, sx, sy, sw, sh, x, y, cellSize, cellSize);

            // efeito sutil de "bloco digital"
            if (cell.progress > 0.08) {
              ctx.strokeStyle = `rgba(80,255,180,${0.08 * eased})`;
              ctx.lineWidth = 0.6;
              ctx.strokeRect(x + 0.5, y + 0.5, cellSize - 1, cellSize - 1);
            }

            ctx.restore();
          }
        }
      }

      // glow sutil no cursor
      if (mouse.active) {
        const glow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius * 1.2,
        );
        glow.addColorStop(0, "rgba(60,255,180,0.10)");
        glow.addColorStop(0.45, "rgba(20,220,160,0.05)");
        glow.addColorStop(1, "rgba(20,220,160,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // vinheta premium
      const vignette = ctx.createLinearGradient(0, 0, 0, height);
      vignette.addColorStop(0, "rgba(0,0,0,0.08)");
      vignette.addColorStop(0.65, "rgba(0,0,0,0)");
      vignette.addColorStop(1, "rgba(0,0,0,0.20)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(draw);
    };

    const handleMove = (event: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.active = true;
    };

    const handleLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      resize();
    };

    Promise.all([loadImage(originalImg), loadImage(matrixImg)]).then(() => {
      resize();
      lastTime = performance.now();
      animationId = requestAnimationFrame(draw);
    });

    wrapper.addEventListener("mousemove", handleMove);
    wrapper.addEventListener("mouseleave", handleLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      wrapper.removeEventListener("mousemove", handleMove);
      wrapper.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative h-[460px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black"
    >
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4">
        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/50 backdrop-blur-sm">
          Identity Render
        </span>

        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-sm">
          Matrix Build
        </span>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            Hover
          </p>
          <p className="mt-2 text-sm text-white/85">1s deconstruction</p>
        </div>

        <div className="text-right">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            Rebuild
          </p>
          <p className="mt-2 text-sm text-white/85">3s reconstruction</p>
        </div>
      </div>
    </div>
  );
}
