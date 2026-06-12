import Image from "next/image";
import Reveal from "@/components/Reveal";

const WHATSAPP_URL = "https://wa.me/254721287760";
const EMAIL = "agencybh01@gmail.com";

const services = [
  {
    image: "/images/service-agents.png",
    alt: "Schematic of a central hub connected to six specialized tool nodes",
    title: "AI Agents and MCP Integrations",
    body: "Custom agents that read your inbox, query your databases, draft your documents, and act inside the tools you already use. Built on the Model Context Protocol, so they extend rather than replace your stack.",
    tag: "agents",
  },
  {
    image: "/images/service-finetuning.png",
    alt: "A rough organic shape refining into a precise nested hexagon across five stages",
    title: "Fine Tuned Models",
    body: "Off the shelf models are generalists. We adapt open and proprietary models to your domain, your voice, and your data, so the output sounds like your team wrote it.",
    tag: "fine tuning",
  },
  {
    image: "/images/service-rag.png",
    alt: "Layered knowledge base flowing through a filter into a single focused output",
    title: "RAG Pipelines",
    body: "Retrieval augmented systems that ground model responses in your documents, your contracts, your institutional knowledge. Answers your team can verify, with sources attached.",
    tag: "retrieval",
  },
  {
    image: "/images/service-webdev.png",
    alt: "Wireframes of a desktop, tablet, and phone interface",
    title: "Web and App Development",
    body: "Full stack web platforms and mobile applications. From client facing marketing sites to internal tools and consumer apps, shipped end to end.",
    tag: "product",
  },
];

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "A short paid discovery sprint. We map your workflows, identify the highest leverage problem, and produce a scope you can take to any builder.",
  },
  {
    n: "02",
    title: "Build",
    body: "We ship working software in two to six week cycles, not multi quarter projects. You see progress weekly and own the code at every stage.",
  },
  {
    n: "03",
    title: "Deploy",
    body: "Production hardening, monitoring, and handover. We stay on for maintenance retainers or hand the keys to your team. Your choice.",
  },
];

const work = [
  {
    name: "Gmail MCP Server",
    body: "Production OAuth 2.0 server with encrypted token storage, in daily use across client integrations.",
    stack: "Python · FastAPI · Model Context Protocol",
  },
  {
    name: "AI Automation Audit Agent",
    body: "A live agent that ingests company SOPs and surfaces the highest ROI automation opportunities.",
    stack: "Python · FastAPI · LangChain · ChromaDB · Docker",
  },
  {
    name: "TAN Property",
    body: "Production hardened real estate marketing platform with full SEO and Search Console verification.",
    stack: "Six page build · Deployment · Indexing",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-[0.25em] uppercase text-graphite mb-6">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main>
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-hairline">
        <nav className="max-w-page mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/images/logo-mark.png"
              alt="BHR AI fingerprint mark"
              width={400}
              height={422}
              className="h-9 w-auto"
              priority
            />
            <span className="font-mono text-sm tracking-[0.3em]">BHR AI</span>
          </a>
          <div className="hidden sm:flex items-center gap-8 font-mono text-xs tracking-widest uppercase">
            <a href="#services" className="hover:opacity-60 transition-opacity">
              Services
            </a>
            <a href="#work" className="hover:opacity-60 transition-opacity">
              Work
            </a>
            <a href="#about" className="hover:opacity-60 transition-opacity">
              About
            </a>
            <a
              href="#contact"
              className="border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
            >
              Start a conversation
            </a>
          </div>
          <a
            href="#contact"
            className="sm:hidden font-mono text-xs tracking-widest uppercase border border-ink px-3 py-2"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="pt-16">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-16 py-16 lg:py-28">
            <Reveal>
              <Image
                src="/images/hero-topographic.png"
                alt="Topographic line drawing resembling an enlarged fingerprint"
                width={1408}
                height={768}
                priority
                className="w-full h-auto"
              />
            </Reveal>
            <Reveal delay={150}>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02]">
                AI systems,
                <br />
                <em>built to fit.</em>
              </h1>
              <p className="mt-7 text-lg text-graphite max-w-md leading-relaxed">
                Custom agents, fine tuned models, and RAG pipelines for teams
                that have outgrown off the shelf tools.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="#contact"
                  className="bg-ink text-paper px-7 py-3.5 font-mono text-sm tracking-wide hover:opacity-85 transition-opacity"
                >
                  Start a conversation
                </a>
                <a
                  href="#services"
                  className="font-mono text-sm tracking-wide underline underline-offset-4 hover:opacity-60 transition-opacity"
                >
                  See the work ↓
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="border-y border-hairline">
        <div className="max-w-page mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <Reveal className="max-w-3xl mx-auto text-center">
            <p className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] leading-snug">
              Most AI deployments fail because they were never built for the
              work. Generic chatbots, off the shelf automations, prompts duct
              taped to spreadsheets. BHR AI builds systems that match how your
              team actually operates, then maintains them as the work evolves.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-16">
        <div className="max-w-page mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <Reveal>
            <SectionLabel>What we build</SectionLabel>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 120}>
                <div className="border border-hairline bg-white/40 px-6 py-8">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    width={1408}
                    height={768}
                    className="w-full h-44 object-contain"
                  />
                </div>
                <p className="font-mono text-xs tracking-[0.25em] uppercase text-graphite mt-6">
                  {s.tag}
                </p>
                <h2 className="font-display text-2xl lg:text-3xl mt-2">
                  {s.title}
                </h2>
                <p className="mt-3 text-graphite leading-relaxed">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-hairline bg-white/40">
        <div className="max-w-page mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <Reveal>
            <SectionLabel>How we work</SectionLabel>
          </Reveal>
          <Reveal>
            <Image
              src="/images/process-diagram.png"
              alt="Three stage diagram: discover, build, deploy"
              width={1408}
              height={768}
              className="w-full max-w-3xl mx-auto h-auto mb-16"
            />
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 120}>
                <p className="font-mono text-sm text-graphite">{step.n}</p>
                <h3 className="font-display text-2xl mt-2">{step.title}</h3>
                <p className="mt-3 text-graphite leading-relaxed">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-16">
        <div className="max-w-page mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <Reveal>
            <SectionLabel>Selected work</SectionLabel>
          </Reveal>
          <div>
            {work.map((w, i) => (
              <Reveal key={w.name} delay={i * 100}>
                <div className="grid sm:grid-cols-[1fr_2fr] gap-3 sm:gap-10 py-8 border-t border-hairline">
                  <h3 className="font-display text-2xl">{w.name}</h3>
                  <div>
                    <p className="text-graphite leading-relaxed">{w.body}</p>
                    <p className="font-mono text-xs tracking-wide text-graphite mt-3">
                      {w.stack}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-hairline" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-16 border-y border-hairline bg-white/40">
        <div className="max-w-page mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid sm:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-center max-w-4xl mx-auto">
            <Reveal>
              <Image
                src="/images/founder.jpg"
                alt="Mark Kamami, founder of BHR AI"
                width={880}
                height={1174}
                className="w-full h-auto grayscale"
              />
            </Reveal>
            <Reveal delay={150}>
              <SectionLabel>Who we are</SectionLabel>
              <h2 className="font-display text-3xl lg:text-4xl">
                Built by Mark Kamami
              </h2>
              <p className="mt-5 text-graphite leading-relaxed">
                Founder of BHR AI. Background in Diplomacy and International
                Relations from the University of Nairobi. Builds production
                systems for clients in East Africa and remote teams abroad.
                Writes code, ships products, and treats every client engagement
                as a long collaboration rather than a transaction.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-16">
        <div className="max-w-page mx-auto px-6 lg:px-10 py-24 lg:py-36 text-center">
          <Reveal>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl">
              Let&rsquo;s <em>talk.</em>
            </h2>
            <p className="mt-6 text-graphite max-w-md mx-auto leading-relaxed">
              If you have a problem worth solving, send a note. Discovery calls
              are free, and the first reply usually comes within a day.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href={`mailto:${EMAIL}`}
                className="bg-ink text-paper px-8 py-4 font-mono text-sm tracking-wide hover:opacity-85 transition-opacity w-full sm:w-auto"
              >
                Email → {EMAIL}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ink px-8 py-4 font-mono text-sm tracking-wide hover:bg-ink hover:text-paper transition-colors w-full sm:w-auto"
              >
                WhatsApp → +254 721 287 760
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-hairline">
        <div className="max-w-page mx-auto px-6 lg:px-10 py-8 flex items-center justify-between">
          <Image
            src="/images/logo-mark.png"
            alt="BHR AI fingerprint mark"
            width={400}
            height={422}
            className="h-8 w-auto"
          />
          <p className="font-mono text-xs text-graphite">
            © 2026 BHR AI · Nairobi, Kenya
          </p>
        </div>
      </footer>
    </main>
  );
}
