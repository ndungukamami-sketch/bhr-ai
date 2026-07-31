"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    const duration = 1150;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 180);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[9999] bg-void flex items-end justify-between px-6 sm:px-10 pb-10 transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
      style={{
        transform: done ? "translateY(-100%)" : "translateY(0)",
        pointerEvents: done ? "none" : "auto",
      }}
    >
      <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-mist">
        BHR AI — Nairobi
      </span>
      <span className="font-display text-[18vw] sm:text-[12vw] leading-[0.8] plasma-text">
        {count}
      </span>
    </div>
  );
}
