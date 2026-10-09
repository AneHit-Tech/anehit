import React from 'react';
import {
  Cpu,
  Server,
  Database,
  Bot,
  Cloud,
  ShieldCheck,
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

// Custom Crisp Brand & Technology SVG Icons
function TechLogo({ name, className = "w-5 h-5" }) {
  switch (name) {
    case 'React 19':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'Next.js':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.87 13.5l-4.73-6.66v6.66H9.5V7.5h1.76l4.63 6.55V7.5h1.48v8h-1.5z" />
        </svg>
      );
    case 'TypeScript':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
          <path d="M11.5 11h-3v7H7v-7H4V9.5h7.5V11zm7.2 4.2c-.4.5-1.1.8-2 .8-1.2 0-2.1-.6-2.1-1.8 0-1.3 1-1.7 2.2-2 .8-.2 1.3-.4 1.3-.8 0-.4-.4-.6-1-.6-.6 0-1 .3-1.2.8l-1.3-.7c.4-.9 1.4-1.4 2.6-1.4 1.4 0 2.4.7 2.4 1.9 0 1.2-.9 1.7-2.1 2-.9.2-1.4.4-1.4.8 0 .4.4.6 1.1.6.6 0 1.2-.3 1.4-.7l1.1.9z" fill="#fff" />
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case 'Node.js':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.31L4.84 8.5v7l7.16 4.19 7.16-4.19v-7L12 4.31zM11 8h2v5.5h2.5V15H11V8z" />
        </svg>
      );
    case 'Express.js':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'WebSockets':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8l4-4m0 0l4 4M8 4v16m12-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      );
    case 'Python / Flask':
    case 'Python / LangChain':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3v2.8h5.9v.8H6.5S4 6.7 4 10.5c0 3.8 2.2 3.7 2.2 3.7h1.3v-1.8s-.1-2.2 2.2-2.2h5.7s2.1.1 2.1-2.1V4.2S17.7 2 11.9 2zm-1.6 1.7c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM12.1 22c3.1 0 2.9-1.3 2.9-1.3v-2.8H9.1v-.8h8.4s2.5.2 2.5-3.6c0-3.8-2.2-3.7-2.2-3.7h-1.3v1.8s.1 2.2-2.2 2.2H8.6s-2.1-.1-2.1 2.1v3.9s-.2 2.2 5.6 2.2zm1.6-1.7c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
        </svg>
      );
    case 'PostgreSQL':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93V15h-2v3.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 11v2h2V9.5l4 3.5V11l3.79-1.79c.13.58.21 1.17.21 1.79 0 4.08-3.05 7.44-7 7.93z" />
        </svg>
      );
    case 'MongoDB':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 2C11.5 2 7 8 7 13.5c0 3.6 2.2 6.5 5 7.5v-19zm0 0c.5 0 5 6 5 11.5 0 3.6-2.2 6.5-5 7.5v-19z" />
        </svg>
      );
    case 'MySQL':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case 'OpenAI & Claude':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case 'OpenRouter Gateway':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v6m0 6v6m9-9h-6m-6 0H3" />
        </svg>
      );
    case 'Streaming UI':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l3 8 4-16 3 8h4" />
        </svg>
      );
    case 'Vercel Edge':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 2L2 19.5h20L12 2z" />
        </svg>
      );
    case 'AWS Cloud':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M18.5 10.5c0-.83-.67-1.5-1.5-1.5-.15 0-.29.02-.43.06C15.91 7.24 14.12 6 12 6c-2.76 0-5 2.24-5 5 0 .28.02.55.07.82C5.3 12.44 4 13.82 4 15.5 4 17.43 5.57 19 7.5 19h10c2.21 0 4-1.79 4-4 0-1.86-1.28-3.41-3-3.86v-.64z" />
        </svg>
      );
    case 'Docker & Containers':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="6" width="20" height="12" rx="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 10h2v4H7zm4 0h2v4h-2zm4 0h2v4h-2z" />
        </svg>
      );
    case 'GitHub Actions':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9v6m6-3h6m-3-3l3 3-3 3" />
        </svg>
      );
    case 'JWT Auth & RBAC':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0v4m-4 4v2" />
        </svg>
      );
    case 'OAuth 2.0':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="8" cy="15" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.85 12.15L19 4m0 0h3m-3 0v3m-3 1l2 2" />
        </svg>
      );
    case 'Data Encryption & TLS':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case 'End-to-End QA':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
  }
}

export default function TechStackSection({
  title = "The Technologies We Build With",
  subtitle = "Every tool we use is chosen for stability, speed, and long-term reliability — so your application runs smoothly, scales easily, and remains 100% yours."
}) {
  const tiers = [
    {
      id: "frontend",
      tierNum: "01",
      systemTag: "CLIENT RUNTIME",
      name: "Frontend & UI Engineering",
      headline: "Sub-second paint times, accessible interfaces, and smooth client workflows.",
      accentBg: "bg-sky-50 text-sky-600 border-sky-200",
      accentBorder: "border-sky-300",
      icon: Cpu,
      stats: [
        { label: "Lighthouse", val: "99 / 100" },
        { label: "First Paint", val: "< 0.8s" },
        { label: "Type Safety", val: "100% Strict" },
      ],
      technologies: [
        { name: "React 19", category: "UI Runtime", benefit: "Concurrent rendering, Suspense & seamless state reactivity" },
        { name: "Next.js", category: "Framework", benefit: "Server-side rendering, ISR & instant global edge caching" },
        { name: "TypeScript", category: "Type Contract", benefit: "Compile-time strict typing and zero runtime undefined crashes" },
        { name: "Tailwind CSS", category: "Design System", benefit: "Utility tokens, zero runtime CSS payload & high accessibility" },
      ]
    },
    {
      id: "backend",
      tierNum: "02",
      systemTag: "DISTRIBUTED API CORE",
      name: "Backend & Microservices",
      headline: "High-throughput asynchronous services, modular controllers, and resilient schemas.",
      accentBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
      accentBorder: "border-emerald-300",
      icon: Server,
      stats: [
        { label: "Response", val: "< 25ms" },
        { label: "Concurrency", val: "10,000+" },
        { label: "Contracts", val: "JSON Schema" },
      ],
      technologies: [
        { name: "Node.js", category: "Runtime Engine", benefit: "Non-blocking event loop optimized for high I/O workloads" },
        { name: "Express.js", category: "REST Backbone", benefit: "Predictable middleware pipelines, rate-limiting & router isolation" },
        { name: "WebSockets", category: "Real-time Sync", benefit: "Bi-directional persistent channels with sub-18ms message delivery" },
        { name: "Python / Flask", category: "Data Engine", benefit: "Dedicated microservice scripts, parsing pipelines & machine tasks" },
      ]
    },
    {
      id: "database",
      tierNum: "03",
      systemTag: "PERSISTENCE & STORAGE",
      name: "Databases & Data Integrity",
      headline: "ACID-compliant transactions, optimized indexing, and robust relational storage.",
      accentBg: "bg-indigo-50 text-indigo-600 border-indigo-200",
      accentBorder: "border-indigo-300",
      icon: Database,
      stats: [
        { label: "Query Speed", val: "4ms Avg" },
        { label: "Transactions", val: "ACID Strict" },
        { label: "Data Integrity", val: "100%" },
      ],
      technologies: [
        { name: "PostgreSQL", category: "Relational SQL", benefit: "Relational constraints, B-Tree indexes, JSONB & rock-solid backups" },
        { name: "MySQL", category: "Relational SQL", benefit: "High-performance transactional engine, strict ACID compliance & widespread compatibility" },
        { name: "MongoDB", category: "Document Store", benefit: "Flexible unstructured catalogs, nested objects & agile schemas" },
      ]
    },
    {
      id: "ai",
      tierNum: "04",
      systemTag: "COGNITIVE AI LAYER",
      name: "Generative AI & LLMs",
      headline: "Frontier language model integrations, streaming token UI, and structured schema guardrails.",
      accentBg: "bg-purple-50 text-purple-600 border-purple-200",
      accentBorder: "border-purple-300",
      icon: Bot,
      stats: [
        { label: "Streaming", val: "SSE Chunks" },
        { label: "Fallbacks", val: "Multi-Route" },
        { label: "Guardrails", val: "Zod Strict" },
      ],
      technologies: [
        { name: "OpenAI & Claude", category: "Frontier Models", benefit: "Context-engineered prompts, function calling & assistant threads" },
        { name: "OpenRouter Gateway", category: "Failover Engine", benefit: "Multi-provider resilience with automatic retry fallback routing" },
        { name: "Streaming UI", category: "Frontend Protocol", benefit: "Zero perceived latency token-by-token real-time streaming" },
        { name: "Python / LangChain", category: "Agent Orchestration", benefit: "Retrieval-augmented generation (RAG) & vector embeddings" },
      ]
    },
    {
      id: "devops",
      tierNum: "05",
      systemTag: "GLOBAL EDGE CLUSTER",
      name: "Cloud, DevOps & CI/CD",
      headline: "Edge-routed global CDN, automated build test suites, and 99.99% uptime SLA.",
      accentBg: "bg-cyan-50 text-cyan-600 border-cyan-200",
      accentBorder: "border-cyan-300",
      icon: Cloud,
      stats: [
        { label: "Edge SLA", val: "99.99%" },
        { label: "Cold Start", val: "0ms Edge" },
        { label: "Regression", val: "100% Pass" },
      ],
      technologies: [
        { name: "Vercel Edge", category: "Edge Hosting", benefit: "Global Anycast edge deployment with instant rollback points" },
        { name: "AWS Cloud", category: "Infrastructure", benefit: "Encrypted S3 object storage, virtual compute & scalable VPCs" },
        { name: "Docker & Containers", category: "Containerization", benefit: "Consistent reproducible environments from local dev to production" },
        { name: "GitHub Actions", category: "CI/CD Pipeline", benefit: "Automated linting, automated test runs & production deploys" },
      ]
    },
    {
      id: "security",
      tierNum: "06",
      systemTag: "DEFENSE & VERIFICATION",
      name: "Security, Auth & QA",
      headline: "Token rotation, automated regression suites, and hardened cryptographic transport.",
      accentBg: "bg-amber-50 text-amber-600 border-amber-200",
      accentBorder: "border-amber-300",
      icon: ShieldCheck,
      stats: [
        { label: "SSL Grade", val: "A+ Rating" },
        { label: "Shielding", val: "Hardened" },
        { label: "QA Pass Rate", val: "100% Pass" },
      ],
      technologies: [
        { name: "JWT Auth & RBAC", category: "Session Layer", benefit: "HttpOnly encrypted cookie rotation with fine-grained permissions" },
        { name: "OAuth 2.0", category: "Social SSO", benefit: "Frictionless authentication via Google, GitHub & Apple credentials" },
        { name: "Data Encryption & TLS", category: "Transport Layer", benefit: "End-to-end HTTPS cryptographic data transit & encrypted secrets" },
        { name: "End-to-End QA", category: "Verification", benefit: "Real-device responsive testing & full checkout journey validation" },
      ]
    }
  ];

  return (
    <section className="py-14 sm:py-18 md:py-20 bg-[#f8fafc] border-b border-slate-200/90">
      <div className="studio-container">

        {/* Section Header */}
        <SectionHeader
          label="Proven Technology Stack"
          title={title}
          subtitle={subtitle}
          centered={true}
        />

        {/* Full Matrix Grid of all 6 Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.id}
                className="p-6 sm:p-7 rounded-[28px] bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center pb-4 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center shrink-0 group-hover:bg-sky-600 transition-colors shadow-2xs">
                        <Icon className="w-5 h-5 text-sky-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold text-slate-900 block leading-tight">
                          TIER {tier.tierNum}
                        </span>
                        <span className="font-mono text-[10px] text-sky-700 font-semibold uppercase tracking-wider block">
                          {tier.systemTag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tier Title & Description */}
                  <h3 className="font-display font-bold text-xl text-slate-950 mb-2 group-hover:text-sky-700 transition-colors">
                    {tier.name}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {tier.headline}
                  </p>

                  {/* Clean Tech Pills Matrix */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Key Technologies:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tier.technologies.map((t, i) => (
                        <div
                          key={i}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-950 hover:text-white hover:border-slate-900 transition-all duration-200 group/pill cursor-default"
                        >
                          <TechLogo name={t.name} className="w-4 h-4 shrink-0" />
                          <span className="text-xs font-semibold text-slate-800 group-hover/pill:text-white transition-colors">
                            {t.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>



      </div>
    </section>
  );
}
