"use client";

import { useEffect, useRef } from "react";

/**
 * Infinite ticker that reacts to scroll: flicking the page speeds the track up
 * and skews it, then it eases back to its resting drift.
 *
 * rAF-driven rather than a CSS animation, because the velocity coupling needs
 * per-frame control. `speed` is px/sec.
 */
export default function Marquee({
  items,
  reverse = false,
  speed = 70,
  className = "",
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const copy = copyRef.current;
    if (!track || !copy) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dir = reverse ? 1 : -1;
    let offset = reverse ? -copy.offsetWidth : 0;
    let copyW = copy.offsetWidth || 1;
    let vel = 0;
    let lastY = window.scrollY;
    let last = performance.now();
    let raf = 0;
    let running = true;

    const onScroll = () => {
      const y = window.scrollY;
      vel += y - lastY;
      lastY = y;
    };

    const onResize = () => {
      copyW = copy.offsetWidth || 1;
    };

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      vel *= 0.9; // decay toward resting drift
      const boost = Math.abs(vel) * 6;
      offset += dir * (speed + boost) * dt;

      // wrap within one copy so the loop is seamless
      if (offset <= -copyW) offset += copyW;
      if (offset >= 0) offset -= copyW;

      const skew = Math.max(-10, Math.min(10, vel * 0.35));
      track.style.transform = `translateX(${offset.toFixed(2)}px) skewX(${skew.toFixed(2)}deg)`;

      if (running) raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          last = performance.now();
          raf = requestAnimationFrame(frame);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );
    io.observe(track);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [reverse, speed]);

  const Group = ({ innerRef }: { innerRef?: React.Ref<HTMLDivElement> }) => (
    <div ref={innerRef} className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-10 whitespace-nowrap">
          <span>{item}</span>
          <span className="text-violet2" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <div ref={trackRef} className="flex will-change-transform">
        <Group innerRef={copyRef} />
        <Group />
        <Group />
      </div>
    </div>
  );
}
