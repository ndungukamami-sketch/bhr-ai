"use client";

export default function Marquee({
  items,
  reverse = false,
  speed = 40,
  className = "",
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
  className?: string;
}) {
  const track = [...items, ...items];

  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <div
        className="flex shrink-0 items-center gap-10 pr-10 whitespace-nowrap"
        style={{
          animation: `${reverse ? "marquee-rev" : "marquee"} ${speed}s linear infinite`,
        }}
      >
        {track.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span>{item}</span>
            <span className="text-violet2" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
