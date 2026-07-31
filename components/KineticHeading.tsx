"use client";

import { useInView } from "./useInView";

/**
 * Splits text into words that rise into place one after another
 * once the heading scrolls into view.
 */
export default function KineticHeading({
  text,
  className = "",
  emphasis = [],
  stagger = 55,
}: {
  text: string;
  className?: string;
  /** Words (by index) rendered in the plasma gradient. */
  emphasis?: number[];
  stagger?: number;
}) {
  const ref = useInView<HTMLHeadingElement>(
    () => {
      ref.current?.classList.add("is-visible");
    },
    { threshold: 0.2 }
  );

  const words = text.split(" ");

  return (
    <h2 ref={ref} className={className}>
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="word"
          style={{ transitionDelay: `${i * stagger}ms` }}
        >
          <span className={emphasis.includes(i) ? "plasma-text italic" : undefined}>
            {w}
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </h2>
  );
}
