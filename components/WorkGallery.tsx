"use client";

import { useEffect, useRef, useState } from "react";
import Spotlight from "./Spotlight";

export type Work = {
  name: string;
  body: string;
  stack: string[];
  status?: "Live" | "In Testing" | "In Production";
  link?: string;
  category: string;
};

export function StatusPill({ status }: { status: NonNullable<Work["status"]> }) {
  const tone =
    status === "Live"
      ? "text-lime2 border-lime2/30 bg-lime2/5"
      : status === "In Testing"
        ? "text-ember border-ember/30 bg-ember/5"
        : "text-cyan2 border-cyan2/30 bg-cyan2/5";
  const dot =
    status === "Live" ? "bg-lime2" : status === "In Testing" ? "bg-ember" : "bg-cyan2";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.18em] uppercase whitespace-nowrap ${tone}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className={`absolute inline-flex h-full w-full rounded-full ${dot} animate-pulse-ring`} />
        <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dot}`} />
      </span>
      {status}
    </span>
  );
}

function Card({ w, i }: { w: Work; i: number }) {
  const inner = (
    <Spotlight className="panel edge-glow group relative h-full w-full p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
      {/* index watermark */}
      <span
        className="pointer-events-none absolute -right-4 -top-10 font-display text-[11rem] leading-none text-chalk/[0.04] select-none"
        aria-hidden
      >
        {String(i + 1).padStart(2, "0")}
      </span>

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-mist/70">
            {w.category}
          </span>
          {w.status && <StatusPill status={w.status} />}
        </div>

        <h3 className="mt-8 h-display text-5xl lg:text-6xl group-hover:plasma-text transition-colors duration-500">
          {w.name}
        </h3>
        <p className="mt-5 text-mist leading-relaxed">{w.body}</p>
      </div>

      <div className="relative mt-8">
        <div className="flex flex-wrap gap-2">
          {w.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-hairline px-3 py-1 font-mono text-[10px] tracking-[0.1em] uppercase text-mist group-hover:border-chalk/25 transition-colors duration-500"
            >
              {t}
            </span>
          ))}
        </div>
        {w.link && (
          <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-chalk">
            {w.link.replace("https://", "")}
            <span
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden
            >
              ↗
            </span>
          </span>
        )}
      </div>
    </Spotlight>
  );

  return w.link ? (
    <a href={w.link} target="_blank" rel="noopener noreferrer" className="block h-full">
      {inner}
    </a>
  ) : (
    <div className="h-full">{inner}</div>
  );
}

export default function WorkGallery({ items }: { items: Work[] }) {
  const [pinned, setPinned] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  // Pin only where there's room for it and motion is welcome.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPinned(mq.matches && !reduce.matches);
    sync();
    mq.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    // Also re-derive on resize: `change` alone is enough in a normal browser,
    // but resize is the signal that always fires, so this can't get stuck
    // pinned on a viewport too narrow for it.
    window.addEventListener("resize", sync);
    return () => {
      mq.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  useEffect(() => {
    if (!pinned) {
      if (wrapRef.current) wrapRef.current.style.height = "";
      if (trackRef.current) trackRef.current.style.transform = "";
      return;
    }

    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    let distance = 0;
    let raf = 0;

    const measure = () => {
      // How far the track must travel to bring its right edge into view.
      distance = Math.max(0, track.scrollWidth - window.innerWidth + 80);
      wrap.style.height = `${distance + window.innerHeight}px`;
      update();
    };

    const update = () => {
      const total = wrap.offsetHeight - window.innerHeight;
      const p =
        total > 0
          ? Math.min(Math.max(-wrap.getBoundingClientRect().top / total, 0), 1)
          : 0;

      track.style.transform = `translate3d(${-(p * distance).toFixed(2)}px,0,0)`;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p || 0.001})`;
      if (countRef.current) {
        const idx = Math.min(items.length, Math.floor(p * items.length) + 1);
        countRef.current.textContent = String(idx).padStart(2, "0");
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      wrap.style.height = "";
      track.style.transform = "";
    };
  }, [pinned, items.length]);

  // ---- Non-pinned fallback (narrow screens, reduced motion, pre-hydration) ----
  if (!pinned) {
    return (
      <div className="max-w-page mx-auto px-6 lg:px-10 grid sm:grid-cols-2 gap-5">
        {items.map((w, i) => (
          <div key={w.name} className="min-h-[26rem]">
            <Card w={w} i={i} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={wrapRef} className="relative">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* pinned header */}
        <div className="absolute top-24 inset-x-0 px-6 lg:px-10">
          <div className="max-w-page mx-auto flex items-end justify-between gap-8">
            <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-mist">
              Selected work
            </p>
            <div className="flex items-center gap-5 w-full max-w-md">
              <div className="relative h-px flex-1 bg-hairline overflow-hidden">
                <div
                  ref={barRef}
                  className="absolute inset-0 origin-left"
                  style={{
                    background: "linear-gradient(90deg,#7A5CFF,#2DD4EF,#C8FF4D)",
                    transform: "scaleX(0.001)",
                  }}
                />
              </div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-mist tabular-nums">
                <span ref={countRef}>01</span>
                <span className="text-mist/40"> / {String(items.length).padStart(2, "0")}</span>
              </p>
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 px-6 lg:px-10 will-change-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {items.map((w, i) => (
            <div
              key={w.name}
              className="shrink-0 w-[min(78vw,30rem)] h-[min(64vh,32rem)]"
            >
              <Card w={w} i={i} />
            </div>
          ))}

          {/* end cap */}
          <div className="shrink-0 w-[min(60vw,22rem)] h-[min(64vh,32rem)] flex items-center">
            <div>
              <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-mist">
                Next
              </p>
              <p className="mt-5 h-display text-5xl">
                Yours <span className="italic plasma-text">here.</span>
              </p>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-chalk text-void px-7 py-3.5 font-mono text-xs tracking-[0.14em] uppercase hover:bg-lime2 transition-colors duration-300"
              >
                Start a build
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
