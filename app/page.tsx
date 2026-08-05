import Image from "next/image";
import Reveal from "@/components/Reveal";
import KineticHeading from "@/components/KineticHeading";
import Marquee from "@/components/Marquee";
import Spotlight from "@/components/Spotlight";
import Counter from "@/components/Counter";
import Magnetic from "@/components/Magnetic";
import Decode from "@/components/Decode";
import FingerprintField from "@/components/FingerprintField";
import WorkGallery, { type Work } from "@/components/WorkGallery";

const WHATSAPP_URL = "https://wa.me/254721287760";
const EMAIL = "agencybh01@gmail.com";

const capabilities = [
  "AI Agents",
  "MCP Servers",
  "RAG Pipelines",
  "Fine Tuning",
  "Web Platforms",
  "Mobile Apps",
  "AI Video Ads",
  "Automation Audits",
];

const services = [
  {
    n: "01",
    image: "/images/service-agents.png",
    alt: "Schematic of a central hub connected to six specialized tool nodes",
    title: "AI Agents & MCP",
    body: "Custom agents that read your inbox, query your databases, draft your documents, and act inside the tools you already use. Built on the Model Context Protocol, so they extend rather than replace your stack.",
    tag: "agents",
    span: "lg:col-span-3",
  },
  {
    n: "02",
    image: "/images/service-finetuning.png",
    alt: "A rough organic shape refining into a precise nested hexagon across five stages",
    title: "Fine Tuned Models",
    body: "Off the shelf models are generalists. We adapt open and proprietary models to your domain, your voice, and your data, so the output sounds like your team wrote it.",
    tag: "fine tuning",
    span: "lg:col-span-2",
  },
  {
    n: "03",
    image: "/images/service-rag.png",
    alt: "Layered knowledge base flowing through a filter into a single focused output",
    title: "RAG Pipelines",
    body: "Retrieval augmented systems that ground model responses in your documents, your contracts, your institutional knowledge. Answers your team can verify, with sources attached.",
    tag: "retrieval",
    span: "lg:col-span-2",
  },
  {
    n: "04",
    image: "/images/service-webdev.png",
    alt: "Wireframes of a desktop, tablet, and phone interface",
    title: "Web & App Development",
    body: "Full stack web platforms and mobile applications. From client facing marketing sites to internal tools and consumer apps, shipped end to end.",
    tag: "product",
    span: "lg:col-span-3",
  },
];

const stats = [
  { value: 5, suffix: "", label: "Systems in production" },
  { value: 2, suffix: " wk", label: "To first working build" },
  { value: 100, suffix: "%", label: "Client owned code" },
  { value: 24, suffix: " h", label: "Typical first reply" },
];

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "A short paid discovery sprint. We map your workflows, identify the highest leverage problem, and produce a scope you can take to any builder.",
    meta: "1 – 2 weeks",
  },
  {
    n: "02",
    title: "Build",
    body: "We ship working software in two to six week cycles, not multi quarter projects. You see progress weekly and own the code at every stage.",
    meta: "2 – 6 weeks",
  },
  {
    n: "03",
    title: "Deploy",
    body: "Production hardening, monitoring, and handover. We stay on for maintenance retainers or hand the keys to your team. Your choice.",
    meta: "Ongoing",
  },
];

const work: Work[] = [
  {
    name: "Arctos",
    category: "Platform / Intelligence",
    body: "Foreign policy intelligence tracking defence, diplomacy, and strategic developments across Africa, built Kenya first rather than from the usual Western vantage point. Publishes structured briefs, with custom monitoring tooling and a newsletter layer built in from the start.",
    stack: ["Next.js", "MDX", "Buttondown", "Radar monitoring"],
    status: "Live",
    link: "https://arctos.africa",
  },
  {
    name: "Ironhold",
    category: "Mobile / Product",
    body: "A discipline tracking system built for one purpose and nothing else. No feature creep toward journaling or mood logging. Shipped from concept through closed testing on the Play Store, with streak logic and low friction daily check ins.",
    stack: ["React Native", "Streak logic", "Google Play"],
    status: "In Testing",
  },
  {
    name: "Gmail MCP Server",
    category: "Infrastructure",
    body: "Production OAuth 2.0 server with encrypted token storage, in daily use across client integrations.",
    stack: ["Python", "FastAPI", "Model Context Protocol"],
    status: "In Production",
  },
  {
    name: "AI Automation Audit Agent",
    category: "Agents",
    body: "A live agent that ingests company SOPs and surfaces the highest ROI automation opportunities.",
    stack: ["Python", "LangChain", "ChromaDB", "Docker"],
    status: "In Production",
  },
  {
    name: "TAN Property",
    category: "Web / SEO",
    body: "Production hardened real estate marketing platform with full SEO and Search Console verification.",
    stack: ["Six page build", "Deployment", "Indexing"],
    status: "Live",
  },
];

function Label({
  children,
  center = false,
}: {
  children: string;
  center?: boolean;
}) {
  return (
    <p
      className={`font-mono text-[11px] tracking-[0.3em] uppercase text-mist flex items-center gap-3 ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="inline-block h-px w-8 bg-gradient-to-r from-violet2 to-cyan2" />
      <Decode text={children} />
      {center && (
        <span className="inline-block h-px w-8 bg-gradient-to-l from-violet2 to-cyan2" />
      )}
    </p>
  );
}

export default function Home() {
  return (
    <main className="relative">
      {/* ============================ HERO ============================ */}
      <section id="top" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 grid-floor" aria-hidden />

        {/* Live fingerprint ridge field — reacts to the cursor */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <FingerprintField
            className="w-full h-full opacity-70"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 65% 65% at 50% 50%, #000 25%, transparent 78%)",
              maskImage:
                "radial-gradient(ellipse 65% 65% at 50% 50%, #000 25%, transparent 78%)",
            }}
          />
        </div>

        <div className="relative max-w-page mx-auto w-full px-6 lg:px-10 pt-28 pb-20">
          <Reveal>
            <span className="inline-flex items-center gap-3 rounded-full border border-hairline glass px-4 py-2 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-mist">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-lime2 animate-pulse-ring" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime2" />
              </span>
              Nairobi, Kenya — available for new builds
            </span>
          </Reveal>

          <h1 className="mt-8 h-display text-[clamp(3rem,11.5vw,10.5rem)]">
            <Reveal variant="clip">
              <span className="block">AI systems,</span>
            </Reveal>
            <Reveal variant="clip" delay={130}>
              <span className="block italic plasma-text pb-[0.08em]">built to fit.</span>
            </Reveal>
          </h1>

          <div className="mt-10 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-20 items-end">
            <Reveal delay={220}>
              <p className="text-lg sm:text-xl text-mist leading-relaxed max-w-xl">
                Custom agents, fine tuned models, and RAG pipelines for teams that
                have outgrown off the shelf tools. We build the system around the
                work, then maintain it as the work evolves.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-chalk text-void px-8 py-4 font-mono text-xs tracking-[0.16em] uppercase hover:bg-lime2 transition-colors duration-300"
                  >
                    Start a conversation
                    <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                      →
                    </span>
                  </a>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <a
                    href="#work"
                    className="inline-flex items-center gap-3 rounded-full border border-hairline px-8 py-4 font-mono text-xs tracking-[0.16em] uppercase text-mist hover:text-chalk hover:border-chalk/40 transition-colors duration-300"
                  >
                    See the work
                    <span aria-hidden>↓</span>
                  </a>
                </Magnetic>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="grid grid-cols-2 gap-px bg-hairline border border-hairline">
                {stats.slice(0, 4).map((s) => (
                  <div key={s.label} className="bg-void/60 backdrop-blur-sm p-5">
                    <p className="font-display text-4xl sm:text-5xl plasma-text">
                      <Counter to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-1 font-mono text-[10px] tracking-[0.16em] uppercase text-mist">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-6 inset-x-0 px-6 lg:px-10 hidden sm:flex items-center justify-between font-mono text-[10px] tracking-[0.24em] uppercase text-mist/60">
          <span>Est. 2025</span>
          <span className="animate-blink">Scroll ↓</span>
          <span>01°17&apos;S 36°49&apos;E</span>
        </div>
      </section>

      {/* ========================== TICKER =========================== */}
      <section className="border-y border-hairline bg-carbon/60 py-5 font-mono text-xs tracking-[0.24em] uppercase text-mist">
        <Marquee items={capabilities} speed={80} />
      </section>

      {/* ========================= MANIFESTO ========================= */}
      <section className="relative">
        <div className="max-w-page mx-auto px-6 lg:px-10 py-28 lg:py-44">
          <Reveal>
            <Label>The problem</Label>
          </Reveal>
          <KineticHeading
            className="mt-10 h-display text-[clamp(2rem,5.4vw,4.6rem)] max-w-6xl"
            text="Most AI deployments fail because they were never built for the work. Generic chatbots, off the shelf automations, prompts duct taped to spreadsheets. We build systems that match how your team actually operates."
            emphasis={[0, 1, 2, 3]}
            stagger={26}
          />
        </div>
      </section>

      {/* ========================== SERVICES ========================= */}
      <section id="services" className="scroll-mt-24 relative border-t border-hairline">
        <div className="max-w-page mx-auto px-6 lg:px-10 py-24 lg:py-36">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <Reveal>
              <Label>What we build</Label>
              <h2 className="mt-6 h-display text-[clamp(2.6rem,7vw,6rem)]">
                Four <span className="italic plasma-text">disciplines.</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-mist max-w-sm leading-relaxed">
                Every engagement draws on one or more of these. Most of the
                interesting work happens where they overlap.
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-5 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} className={s.span}>
                <Spotlight className="panel edge-glow h-full p-7 lg:p-9 group transition-transform duration-500 hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-mist">
                      {s.tag}
                    </span>
                    <span className="font-mono text-[11px] text-mist/40">{s.n}</span>
                  </div>

                  <div className="my-8 h-36 flex items-center justify-center">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      width={1408}
                      height={768}
                      className="h-full w-auto max-w-full object-contain invert-art opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>

                  <h3 className="h-display text-3xl lg:text-4xl">{s.title}</h3>
                  <p className="mt-4 text-mist leading-relaxed">{s.body}</p>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================== PROCESS ========================= */}
      <section className="relative border-t border-hairline bg-carbon/40">
        <div className="max-w-page mx-auto px-6 lg:px-10 py-24 lg:py-36">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-24">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <Label>How we work</Label>
                <h2 className="mt-6 h-display text-[clamp(2.6rem,6.4vw,5.2rem)]">
                  Ship in <span className="italic plasma-text">weeks,</span> not
                  quarters.
                </h2>
                <p className="mt-6 text-mist leading-relaxed max-w-md">
                  No discovery theatre, no six month roadmaps that expire before
                  they land. Three phases, visible progress every week.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <ul className="mt-12 space-y-4">
                  {steps.map((s) => (
                    <li key={s.n} className="flex items-center gap-4">
                      <span className="font-mono text-[10px] text-mist/40 w-6">{s.n}</span>
                      <span className="h-px flex-1 bg-gradient-to-r from-violet2/60 via-cyan2/40 to-transparent" />
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-mist">
                        {s.meta}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div>
              {steps.map((step, i) => (
                <Reveal key={step.n} delay={i * 110}>
                  <Spotlight className="panel group relative p-8 lg:p-10 mb-5 transition-colors duration-500">
                    <div className="flex items-baseline justify-between gap-6">
                      <span className="font-display text-6xl lg:text-7xl outline-text group-hover:text-chalk transition-colors duration-500">
                        {step.n}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-mist">
                        {step.meta}
                      </span>
                    </div>
                    <h3 className="mt-6 h-display text-3xl lg:text-4xl">{step.title}</h3>
                    <p className="mt-3 text-mist leading-relaxed">{step.body}</p>
                  </Spotlight>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================ WORK =========================== */}
      <section id="work" className="scroll-mt-24 relative border-t border-hairline">
        {/* Intro sits above the pinned track so the pin starts clean */}
        <div className="max-w-page mx-auto px-6 lg:px-10 pt-24 lg:pt-36 pb-12 lg:pb-20">
          <Reveal>
            <Label>Selected work</Label>
            <h2 className="mt-6 h-display text-[clamp(2.6rem,7vw,6rem)] max-w-4xl">
              Things that are <span className="italic plasma-text">running.</span>
            </h2>
          </Reveal>
        </div>

        <div className="pb-24">
          <WorkGallery items={work} />
        </div>
      </section>

      {/* ========================= VIDEO ADS ========================= */}
      <section id="ads" className="scroll-mt-24 relative border-t border-hairline overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 20% 30%, rgba(122,92,255,0.16), transparent 65%), radial-gradient(ellipse 60% 50% at 85% 70%, rgba(255,106,61,0.12), transparent 65%)",
          }}
          aria-hidden
        />
        <div className="max-w-page mx-auto px-6 lg:px-10 py-24 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <Label>Video ads</Label>
              <h2 className="mt-6 h-display text-[clamp(2.6rem,6.6vw,5.4rem)]">
                AI video ads,{" "}
                <span className="italic plasma-text">scripted and shipped.</span>
              </h2>
              <p className="mt-7 text-mist leading-relaxed max-w-lg">
                Short form video ads for social and digital, fifteen to thirty
                seconds, generated end to end. Scripting is included in every
                package, with revision rounds built in. No film crew, no agency
                retainer, no month long timeline.
              </p>
              <div className="mt-10 flex flex-wrap gap-2">
                {["15 – 30s", "Scripting included", "Revision rounds", "Social ready"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-hairline px-4 py-2 font-mono text-[10px] tracking-[0.14em] uppercase text-mist"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </Reveal>

            <Reveal delay={160} variant="scale">
              <Spotlight className="panel edge-glow p-9 lg:p-12">
                <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-mist">
                  From
                </p>
                <p className="mt-4 h-display text-[clamp(3rem,8vw,5.5rem)] plasma-text">
                  KES 12,000
                </p>
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-mist/70">
                  per spot
                </p>
                <p className="mt-7 text-mist leading-relaxed">
                  Single spots, campaign packs for a coordinated push, and brand
                  bundles when you need volume. The more ads in a pack, the less
                  you pay per ad.
                </p>
                <Magnetic strength={0.2}>
                  <a
                    href="#contact"
                    className="group mt-10 inline-flex items-center gap-3 rounded-full bg-chalk text-void px-7 py-3.5 font-mono text-xs tracking-[0.16em] uppercase hover:bg-lime2 transition-colors duration-300"
                  >
                    Request the rate card
                    <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                      →
                    </span>
                  </a>
                </Magnetic>
              </Spotlight>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================ ABOUT ========================== */}
      <section id="about" className="scroll-mt-24 relative border-t border-hairline bg-carbon/40">
        <div className="max-w-page mx-auto px-6 lg:px-10 py-24 lg:py-36">
          <Reveal>
            <Label>Who we are</Label>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-8 h-display text-[clamp(2.8rem,8.5vw,7rem)] max-w-5xl">
              Built by <span className="italic plasma-text">Mark Kamami.</span>
            </h2>
          </Reveal>

          <div className="mt-14 lg:mt-20 grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-24 items-start">
            <Reveal delay={140}>
              <p className="text-lg lg:text-xl text-mist leading-relaxed max-w-2xl">
                Founder of BHR AI. Background in Diplomacy and International
                Relations from the University of Nairobi. Builds production
                systems for clients in East Africa and remote teams abroad.
                Writes code, ships products, and treats every client engagement
                as a long collaboration rather than a transaction.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <dl className="grid grid-cols-2 lg:grid-cols-1 gap-px bg-hairline border border-hairline">
                {[
                  ["Based", "Nairobi, KE"],
                  ["Works with", "EA + remote"],
                  ["Founded", "2025"],
                  ["Discipline", "Build + maintain"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="bg-void/60 p-5 flex items-baseline justify-between gap-4"
                  >
                    <dt className="font-mono text-[10px] tracking-[0.2em] uppercase text-mist/60">
                      {k}
                    </dt>
                    <dd className="font-mono text-sm text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================== CONTACT ========================= */}
      <section id="contact" className="scroll-mt-24 relative border-t border-hairline overflow-hidden">
        <div className="absolute inset-0 grid-floor rotate-180" aria-hidden />
        <div className="relative max-w-page mx-auto px-6 lg:px-10 py-28 lg:py-44 text-center">
          <Reveal>
            <Label center>Next step</Label>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-8 h-display text-[clamp(3.4rem,14vw,12rem)]">
              Let&rsquo;s <span className="italic plasma-text">talk.</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 text-lg text-mist max-w-lg mx-auto leading-relaxed">
              If you have a problem worth solving, send a note. Discovery calls
              are free, and the first reply usually comes within a day.
            </p>
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Magnetic>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex items-center gap-3 rounded-full bg-chalk text-void px-8 py-4 font-mono text-xs tracking-[0.14em] hover:bg-lime2 transition-colors duration-300"
                >
                  {EMAIL}
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-hairline px-8 py-4 font-mono text-xs tracking-[0.14em] text-mist hover:text-chalk hover:border-chalk/40 transition-colors duration-300"
                >
                  WhatsApp +254 721 287 760
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ FOOTER ========================= */}
      <footer className="relative border-t border-hairline overflow-hidden">
        <div className="py-6 border-b border-hairline font-display text-[clamp(3rem,12vw,10rem)] text-mist/10 select-none">
          <Marquee items={["BHR AI", "BUILT TO FIT", "NAIROBI"]} reverse speed={55} />
        </div>

        <div className="max-w-page mx-auto px-6 lg:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-mark.png"
              alt="BHR AI fingerprint mark"
              width={400}
              height={422}
              className="h-8 w-auto invert-art"
            />
            <span className="font-mono text-[11px] tracking-[0.3em]">BHR AI</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 font-mono text-[11px] tracking-[0.16em] uppercase text-mist">
            <a href="#services" className="hover:text-chalk transition-colors">Services</a>
            <a href="#work" className="hover:text-chalk transition-colors">Work</a>
            <a href="#about" className="hover:text-chalk transition-colors">About</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-chalk transition-colors">Email</a>
          </nav>

          <p className="font-mono text-[11px] text-mist/60">
            © 2026 BHR AI · Nairobi, Kenya
          </p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "BHR AI",
            description:
              "Custom AI agents, fine tuned models, RAG pipelines, and full stack web and app development.",
            areaServed: "Worldwide",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nairobi",
              addressCountry: "KE",
            },
            email: EMAIL,
            founder: { "@type": "Person", name: "Mark Kamami" },
            url: "https://bhr-ai.vercel.app",
          }),
        }}
      />
    </main>
  );
}
