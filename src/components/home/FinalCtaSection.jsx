import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  MessageSquare,
  ShieldCheck,
  Clock,
  ExternalLink,
  CheckCircle2,
  Mail,
  Copy,
  Check,
  Sparkles,
  Zap
} from 'lucide-react';

export default function FinalCtaSection() {
  const [copied, setCopied] = useState(false);
  const email = "anehit.tech@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 sm:py-20 md:py-20 relative overflow-hidden bg-[#0a0f1d] border-b border-slate-800 text-white">
      {/* Background architectural grid and ambient glow */}
      <div className="absolute inset-0 bg-engineering-dark opacity-75 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="studio-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Studio Manifesto & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-sky-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold tracking-wide">STUDIO AVAILABILITY: ACCEPTING 1 NEW CLIENT</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              Ready to Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-indigo-300">Exceptional?</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-light">
              Skip agency account executives and junior developer handoffs. Work directly with the two senior engineers who architect your systems, write your code, and deploy to production.
            </p>

            {/* Reassurance Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Code & IP Ownership</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fixed Milestone Quotes — No Surprises</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Live Staging Previews Every Week</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Upwork Escrow or Direct Contract</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Direct Booking & Action Console */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-700/80 bg-slate-900/90 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl space-y-5 relative overflow-hidden">
              {/* Header inside console */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="ml-1 font-mono text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                    Technical Scoping
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-2 py-0.5 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>

              {/* Primary Action Button */}
              <div>
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-400 hover:to-sky-300 text-slate-950 font-display font-bold text-base transition-all duration-200 shadow-lg shadow-sky-500/20 active:scale-[0.98] group"
                >
                  <div className="flex items-center gap-2.5">
                    <Zap className="w-5 h-5 fill-slate-950 stroke-none" />
                    <span>Start Project Scope</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mt-2 px-1">
                  <span>Detailed milestone estimate</span>
                  <span>Avg response: 2 hours</span>
                </div>
              </div>

              {/* Instant Channels Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919429219667?text=Hello%20AneHit%20Tech,%20I%20would%20like%20to%20discuss%20a%20software%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-white transition-all text-xs font-medium group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/80 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-slate-400">Instant Chat</div>
                    <div className="font-semibold truncate group-hover:text-emerald-300 transition-colors">WhatsApp</div>
                  </div>
                </a>

                {/* Upwork */}
                <a
                  href="https://www.upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-white transition-all text-xs font-medium group"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800/80 flex items-center justify-center text-sky-400 shrink-0">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-slate-400">Verified Freelance</div>
                    <div className="font-semibold truncate group-hover:text-sky-300 transition-colors">Upwork Escrow</div>
                  </div>
                </a>
              </div>

              {/* Email Direct Copy Box */}
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0 pr-2">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="font-mono text-xs text-slate-300 truncate">{email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Timezone Note */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>Timezone: IST (UTC+5:30)</span>
                </div>
                <span className="text-emerald-400">Available Globally</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
