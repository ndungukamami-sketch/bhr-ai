"use client";

import { useInView } from "./useInView";

type Variant = "up" | "clip" | "scale" | "left";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
}) {
  const ref = useInView<HTMLDivElement>(() => {
    ref.current?.classList.add("is-visible");
  });

  return (
    <div
      ref={ref}
      data-variant={variant}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
