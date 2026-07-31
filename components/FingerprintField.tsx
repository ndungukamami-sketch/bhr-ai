"use client";

import { useEffect, useRef } from "react";

/**
 * Generative fingerprint ridge field on canvas — the brand mark, alive.
 *
 * Concentric whorled rings perturbed by layered sines, displaced away from the
 * cursor. Canvas 2D only (the site CSP blocks external scripts, and this needs
 * no library). Pauses when offscreen or when the tab is hidden.
 */
export default function FingerprintField({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const RINGS = 40;
    const SEG = 140;
    const REPEL = 160;

    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;
    let running = true;

    // Smoothed pointer, parked far offscreen until the cursor arrives.
    const ptr = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const maxR = Math.min(w, h) * 0.66;

      ptr.x += (ptr.tx - ptr.x) * 0.09;
      ptr.y += (ptr.ty - ptr.y) * 0.09;

      for (let i = 0; i < RINGS; i++) {
        const p = i / RINGS;
        const baseR = 12 + p * maxR;

        // Drifting ring centres produce the whorl/loop of a real print.
        const ox = cx + Math.cos(p * 3.1 + t * 0.15) * p * w * 0.07;
        const oy = cy + Math.sin(p * 2.3 + t * 0.11) * p * h * 0.06;

        ctx.beginPath();
        for (let s = 0; s <= SEG; s++) {
          const a = (s / SEG) * Math.PI * 2;

          const wobble =
            Math.sin(a * 3 + t * 0.5 + i * 0.3) * 6 +
            Math.sin(a * 5 - t * 0.35 + i * 0.15) * 3.5 +
            Math.sin(a * 2 + t * 0.22 + i * 0.08) * 4;

          const r = baseR + wobble * (0.4 + p);
          let x = ox + Math.cos(a) * r;
          let y = oy + Math.sin(a) * r * 0.82;

          const dx = x - ptr.x;
          const dy = y - ptr.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < REPEL * REPEL) {
            const d = Math.sqrt(d2) || 1;
            const f = 1 - d / REPEL;
            const push = f * f * 52;
            x += (dx / d) * push;
            y += (dy / d) * push;
          }

          if (s === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();

        // violet -> cyan across the radius, fading outward
        const cr = Math.round(122 + (45 - 122) * p);
        const cg = Math.round(92 + (212 - 92) * p);
        const cb = Math.round(255 + (239 - 255) * p);
        ctx.strokeStyle = `rgba(${cr},${cg},${cb},${(0.1 + (1 - p) * 0.3).toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      t += 0.016;
      if (running) raf = requestAnimationFrame(frame);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      ptr.tx = e.clientX - rect.left;
      ptr.ty = e.clientY - rect.top;
    };
    const onLeave = () => {
      ptr.tx = -9999;
      ptr.ty = -9999;
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();

    if (reduced) {
      // One static frame — still the brand mark, just not moving.
      running = false;
      frame();
    } else {
      raf = requestAnimationFrame(frame);
      window.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("mouseleave", onLeave);
    }

    const onResize = () => {
      resize();
      if (!running) frame();
    };
    window.addEventListener("resize", onResize);

    const onVis = () => (document.hidden ? stop() : !reduced && start());
    document.addEventListener("visibilitychange", onVis);

    // Don't burn frames once the hero is scrolled past.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (reduced) return;
        entry.isIntersecting ? start() : stop();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} style={style} />;
}
