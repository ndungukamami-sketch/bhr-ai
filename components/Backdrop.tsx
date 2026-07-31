"use client";

/** Slow-drifting plasma blobs that sit behind everything. */
export default function Backdrop() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="blob animate-drift"
        style={{
          width: "46vw",
          height: "46vw",
          top: "-12vw",
          left: "-8vw",
          background: "radial-gradient(circle, rgba(122,92,255,0.42), transparent 68%)",
        }}
      />
      <div
        className="blob animate-drift"
        style={{
          width: "40vw",
          height: "40vw",
          top: "34vh",
          right: "-10vw",
          background: "radial-gradient(circle, rgba(45,212,239,0.30), transparent 68%)",
          animationDelay: "-9s",
        }}
      />
      <div
        className="blob animate-drift"
        style={{
          width: "34vw",
          height: "34vw",
          bottom: "-8vw",
          left: "24vw",
          background: "radial-gradient(circle, rgba(200,255,77,0.16), transparent 68%)",
          animationDelay: "-17s",
        }}
      />
    </div>
  );
}
