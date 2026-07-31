"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPct(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[9997] h-[2px] bg-transparent">
      <div
        className="h-full origin-left"
        style={{
          width: `${pct}%`,
          background: "linear-gradient(90deg, #7A5CFF, #2DD4EF 60%, #C8FF4D)",
          boxShadow: "0 0 14px rgba(122,92,255,0.7)",
        }}
      />
    </div>
  );
}
