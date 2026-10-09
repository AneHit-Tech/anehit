import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function BottomCtaSection({
  title = "Ready to Build Your Next Digital Product?",
  description = "Tell us about your project requirements, timeline, and goals. We'll analyze your specifications and provide a realistic milestone breakdown.",
  primaryBtnText = "Start a Technical Conversation",
  primaryBtnLink = "/contact",
  secondaryBtnText = "Explore Case Studies",
  secondaryBtnLink = "/case-studies",
  Icon = Sparkles,
  className = "py-14 sm:py-20",
}) {
  return (
    <section className={className}>
      <div className="studio-container">
        <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl border border-slate-800 relative overflow-hidden">
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            {/* Top Icon Badge */}
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 text-sky-400 flex items-center justify-center mx-auto mb-2 shadow-inner">
              <Icon className="w-6 h-6" />
            </div>

            {/* Title */}
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              {title}
            </h2>

            {/* Description */}
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              {description}
            </p>

            {/* Dual Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              {primaryBtnText && (
                <Link
                  to={primaryBtnLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm transition-all shadow-lg active:scale-98"
                >
                  <span>{primaryBtnText}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-950" />
                </Link>
              )}

              {secondaryBtnText && (
                <Link
                  to={secondaryBtnLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm transition-all active:scale-98"
                >
                  <span>{secondaryBtnText}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
