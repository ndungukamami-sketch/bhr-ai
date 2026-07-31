"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#ads", label: "Video ads" },
  { href: "#about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[9990] px-4 sm:px-6 pt-4">
        <nav
          className={`max-w-page mx-auto flex items-center justify-between rounded-full px-4 sm:px-6 h-14 transition-all duration-500 ${
            scrolled ? "glass shadow-[0_8px_40px_rgba(0,0,0,0.5)]" : "border border-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-3 group">
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={400}
              height={422}
              className="h-7 w-auto invert-art transition-transform duration-500 group-hover:rotate-[18deg]"
              priority
            />
            <span className="font-mono text-[13px] tracking-[0.32em]">BHR AI</span>
          </a>

          <div className="hidden md:flex items-center gap-1 font-mono text-[11px] tracking-[0.18em] uppercase">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-mist hover:text-chalk transition-colors duration-300 group"
              >
                {l.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-violet2 to-cyan2 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              </a>
            ))}
            <Magnetic strength={0.25}>
              <a
                href="#contact"
                className="ml-3 inline-flex items-center gap-2 rounded-full bg-chalk text-void px-5 py-2.5 font-mono text-[11px] tracking-[0.18em] uppercase hover:bg-lime2 transition-colors duration-300"
              >
                Start a build
                <span aria-hidden>→</span>
              </a>
            </Magnetic>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden flex flex-col gap-[5px] p-2"
          >
            <span
              className={`block h-px w-6 bg-chalk transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-chalk transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-chalk transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[9989] bg-void/95 backdrop-blur-xl md:hidden transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-center h-full px-8 gap-2">
          {[...LINKS, { href: "#contact", label: "Contact" }].map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-5xl py-3 border-b border-hairline hover:text-lime2 transition-colors duration-300"
              style={{
                transitionDelay: open ? `${i * 60}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateY(20px)",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
