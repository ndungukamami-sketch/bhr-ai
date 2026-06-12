import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BHR AI | AI systems, built to fit",
  description:
    "Custom AI agents, fine tuned models, RAG pipelines, and full stack web and app development. Built in Nairobi, serving teams everywhere.",
  openGraph: {
    title: "BHR AI | AI systems, built to fit",
    description:
      "Custom AI agents, fine tuned models, RAG pipelines, and full stack web and app development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&family=Schibsted+Grotesk:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
