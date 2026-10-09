import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BottomCtaSection from '../components/common/BottomCtaSection';
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layers,
  Cpu,
  Globe2,
  ShieldCheck,
  KeyRound,
  Headphones,
  Clock,
  FileCheck,
  Lock,
  Terminal,
  Zap,
  Sparkles
} from 'lucide-react';

function CounterNumber({ target, duration = 1500, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let frameId = null;

    // Quartic ease-out curve for smooth deceleration
    const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = easeOutQuart(progress);

      setCount(Math.round(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [target, duration]);

  return (
    <span className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function AboutPage() {
  const stats = [
    { label: "Direct Engineer Access", target: 100, suffix: "%", duration: 1400 },
    { label: "Code & IP Ownership", target: 100, suffix: "%", duration: 1500 },
    { label: "Working Preview Cadence", target: 7, suffix: " Days", duration: 1200 },
    { label: "Client Retain & Referral Rate", target: 96, suffix: "%", duration: 1600 },
  ];

  const operatingPrinciples = [
    {
      title: "We estimate honestly, even when it costs us the project",
      description: "If a timeline is unrealistic or a budget won't cover the scope properly, we say so before starting — not three sprints in."
    },
    {
      title: "Clean, proven architecture beats clever hacks",
      description: "The system that is still running flawlessly in five years is built on well-understood, documented patterns — not fragile shortcuts."
    },
    {
      title: "You own everything we build from day one",
      description: "Source code, Git repositories, database schemas, and cloud accounts are 100% yours. No dependency on us to keep your business running."
    }
  ];

  const capabilities = [
    {
      tag: "Web Apps",
      title: "Full-Stack Web Applications",
      desc: "Custom SaaS platforms, dashboards, and client portals built with React, Next.js, Node.js, and modern databases."
    },
    {
      tag: "Websites",
      title: "High-Performance Websites",
      desc: "Fast, responsive showcase and marketing websites engineered for high conversion, search visibility, and instant load speeds."
    },
    {
      tag: "AI & Tools",
      title: "AI & Workflow Automation",
      desc: "Intelligent chatbots, LLM agent integrations, and automated pipelines that save hours of repetitive manual operations."
    },
    {
      tag: "Backend & Cloud",
      title: "API & Cloud Engineering",
      desc: "Secure RESTful/GraphQL APIs, third-party payment gateways, authentication layers, and reliable cloud deployments."
    }
  ];

  const clientTerms = [
    {
      icon: KeyRound,
      title: "100% IP & Asset Ownership",
      detail: "Full ownership of source code, design files, and infrastructure accounts. Zero vendor lock-in."
    },
    {
      icon: FileCheck,
      title: "Transparent Milestone Billing",
      detail: "Clear milestones with agreed deliverables. You review and approve each stage before release."
    },
    {
      icon: Headphones,
      title: "Direct Engineer Communication",
      detail: "Direct access via Slack, WhatsApp, or Email. You talk directly with the developers writing your code."
    },
    {
      icon: Lock,
      title: "Confidentiality & Mutual NDA",
      detail: "Your proprietary logic, product blueprints, and user data are strictly confidential and protected."
    },
    {
      icon: Clock,
      title: "Included Post-Launch Warranty",
      detail: "Every launch includes dedicated bug-fixing and monitoring to guarantee operational stability."
    },
    {
      icon: ShieldCheck,
      title: "Zero Outsourcing Guarantee",
      detail: "Every line of code and architectural decision is crafted hands-on by our senior engineering team."
    }
  ];

  return (
    <div className="py-12 sm:py-16 md:py-24 bg-blueprint">
      <div className="studio-container">

        {/* Page Header (Centered) */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-sky-700 mb-4 shadow-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>ABOUT · ANEHIT TECH</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight mb-4 sm:mb-5 leading-tight">
            Production software engineered to last. Zero agency bloat.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            AneHit Tech was started with a simple belief: modern software should be judged by how reliably it works in production, not just by how flashy it looks in a sales pitch.
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We operate as a focused engineering duo partnering directly with founders, startups, and growing businesses. No middle account managers, no communication lag, and no outsourced junior developers. Just direct technical craft, clear terms, and fast execution.
          </p>
        </div>

        {/* Stat Metric Strip - Full Width & Spacious */}
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="studio-card p-6 sm:p-7">
              <dt className="font-mono text-[11px] sm:text-xs uppercase tracking-wide text-slate-500 mb-2 font-semibold">
                {stat.label}
              </dt>
              <dd className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950">
                <CounterNumber
                  target={stat.target}
                  suffix={stat.suffix}
                  duration={stat.duration}
                />
              </dd>
            </div>
          ))}
        </dl>

        {/* FIG. 01: How We Work / Core Principles */}
        <section className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="font-mono text-xs text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded font-bold">
              FIG. 01
            </span>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-slate-500 font-semibold">
              How We Work
            </span>
            <span className="flex-1 h-px bg-slate-200" aria-hidden="true" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {operatingPrinciples.map((principle, idx) => (
              <div
                key={idx}
                className="studio-card p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all"
              >
                <div>
                  <h2 className="font-display font-bold text-slate-950 text-lg sm:text-xl mb-3">
                    {principle.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FIG. 02: Specialized Capabilities */}
        <section className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="font-mono text-xs text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded font-bold">
              FIG. 02
            </span>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-slate-500 font-semibold">
              Specialized Capabilities
            </span>
            <span className="flex-1 h-px bg-slate-200" aria-hidden="true" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="studio-card p-6 sm:p-7 hover:border-sky-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg mb-2.5 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FIG. 03: Transparent Working Terms */}
        <section className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="font-mono text-xs text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded font-bold">
              FIG. 03
            </span>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-slate-500 font-semibold">
              Client Terms & Guarantees
            </span>
            <span className="flex-1 h-px bg-slate-200" aria-hidden="true" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientTerms.map((term, idx) => {
              const Icon = term.icon;
              return (
                <div key={idx} className="studio-card p-6 sm:p-7 space-y-3 hover:border-sky-200 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-base sm:text-lg">
                    {term.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {term.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA Consultation Section */}
        <BottomCtaSection
          title="Ready to Build Your Next Digital Product?"
          description="Tell us about your project requirements, timeline, and goals. We'll analyze your specifications and provide a realistic milestone breakdown."
          primaryBtnText="Start a Technical Conversation"
          primaryBtnLink="/contact"
          secondaryBtnText="Explore Case Studies"
          secondaryBtnLink="/case-studies"
          className="pt-4 pb-4"
        />

      </div>
    </div>
  );
}
