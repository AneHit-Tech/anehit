import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 md:pt-24 md:pb-32 overflow-hidden bg-blueprint border-b border-slate-200">
      <div className="studio-container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">

          {/* Main Headline */}
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] text-slate-950 tracking-tight leading-[1.12]">
            We Build Digital Products That Move Businesses Forward.
          </h1>

          {/* Supporting Copy */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            AneHit IT Tech helps startups, businesses and founders turn ideas into modern websites, full-stack applications and AI-powered digital experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-md active:scale-98"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm transition-all active:scale-98 shadow-xs"
            >
              <span>Explore Case Studies</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* Key Trust Signals */}
          <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-mono text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Direct Engineer Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Modern React & APIs</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Clean Architecture</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
