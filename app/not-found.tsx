import Link from "next/link";
import FingerprintField from "@/components/FingerprintField";

export default function NotFound() {
  return (
    <main className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-floor" aria-hidden />
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <FingerprintField
          className="w-full h-full opacity-50"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 75%)",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative text-center px-6">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-mist">
          Error 404
        </p>
        <h1 className="mt-6 h-display text-[clamp(4rem,18vw,14rem)]">
          No <span className="italic plasma-text">match.</span>
        </h1>
        <p className="mt-6 text-mist max-w-md mx-auto leading-relaxed">
          That page doesn&rsquo;t exist. The print didn&rsquo;t scan.
        </p>
        <Link
          href="/"
          className="group mt-12 inline-flex items-center gap-3 rounded-full bg-chalk text-void px-8 py-4 font-mono text-xs tracking-[0.16em] uppercase hover:bg-lime2 transition-colors duration-300"
        >
          <span
            className="transition-transform duration-300 group-hover:-translate-x-1"
            aria-hidden
          >
            ←
          </span>
          Back to BHR AI
        </Link>
      </div>
    </main>
  );
}
