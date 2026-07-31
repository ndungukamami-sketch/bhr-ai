import type { Metadata } from "next";
import "./globals.css";
import Backdrop from "@/components/Backdrop";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://bhr-ai.vercel.app"),
  title: "BHR AI — AI systems, built to fit",
  description:
    "Custom AI agents, fine tuned models, RAG pipelines, and full stack web and app development. Built in Nairobi, serving teams everywhere.",
  keywords: [
    "AI agency Nairobi",
    "MCP integrations",
    "RAG pipelines",
    "fine tuned models",
    "AI agents Kenya",
  ],
  openGraph: {
    title: "BHR AI — AI systems, built to fit",
    description:
      "Custom AI agents, fine tuned models, RAG pipelines, and full stack product work. Built in Nairobi.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BHR AI — AI systems, built to fit",
    description:
      "Custom AI agents, fine tuned models, RAG pipelines, and full stack product work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <meta name="theme-color" content="#050507" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Instrument+Serif:ital@0;1&family=Schibsted+Grotesk:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body grain antialiased">
        <Preloader />
        <Backdrop />
        <Cursor />
        <ScrollProgress />
        <Nav />
        {children}
      </body>
    </html>
  );
}
