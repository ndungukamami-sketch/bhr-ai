import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#050507",
        carbon: "#0B0B11",
        slate2: "#14141D",
        mist: "#9E9EB0",
        chalk: "#F4F4F0",
        violet2: "#7A5CFF",
        cyan2: "#2DD4EF",
        lime2: "#C8FF4D",
        ember: "#FF6A3D",
        hairline: "rgba(244,244,240,0.10)",
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        body: ['"Schibsted Grotesk"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: { page: "84rem" },
      letterSpacing: { tightest: "-0.045em" },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-rev": "marquee-rev 40s linear infinite",
        float: "float 9s ease-in-out infinite",
        drift: "drift 26s ease-in-out infinite alternate",
        "spin-slow": "spin 34s linear infinite",
        "pulse-ring": "pulse-ring 2.6s ease-out infinite",
        blink: "blink 2s steps(1) infinite",
        shimmer: "shimmer 3.5s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
