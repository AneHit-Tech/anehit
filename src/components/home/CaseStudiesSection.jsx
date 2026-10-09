import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { caseStudies } from '../../data/caseStudies';

export default function CaseStudiesSection() {
  // Show only top 2 case studies on homepage; remaining are on /case-studies
  const displayedCaseStudies = caseStudies.slice(0, 2);

  return (
    <section id="case-studies" className="py-16 sm:py-20 md:py-20 bg-[#f8fafc] border-b border-slate-200">
      <div className="studio-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <SectionHeader
            label="Architectural Deep Dives"
            title="Engineering Challenges & Solutions"
            subtitle="We don't just show screenshots. We break down the technical constraints, architectural tradeoffs, and measurable solutions behind every product."
            className="mb-0"
          />

          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-sky-700 hover:text-sky-900 hover:border-sky-300 shadow-2xs transition-all self-start md:self-auto shrink-0"
          >
            <span>All Case Studies ({caseStudies.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Case Studies Cards - Top 2 Featured */}
        <div className="space-y-6">
          {displayedCaseStudies.map((study) => (
            <div
              key={study.id}
              className="studio-card p-6 sm:p-8 border-slate-200 hover:border-slate-300 group transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                {/* Left meta & title */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-md font-semibold uppercase tracking-wider">
                      {study.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    {study.summary}
                  </p>

                  <div className="pt-2">
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-sky-600 text-white text-sm font-semibold transition-all shadow-sm group-hover:shadow-md"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Right Flow: Challenge -> Approach -> Solution -> Outcome */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 lg:pt-0 lg:border-l lg:border-slate-100 lg:pl-8">

                  {/* Challenge */}
                  <div className="p-5 rounded-xl bg-slate-50/90 border border-slate-200/90 hover:border-slate-300 transition-colors shadow-2xs">
                    <div className="font-mono text-xs uppercase tracking-wider text-rose-700 mb-2 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      <span>THE CHALLENGE</span>
                    </div>
                    <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="p-5 rounded-xl bg-slate-50/90 border border-slate-200/90 hover:border-slate-300 transition-colors shadow-2xs">
                    <div className="font-mono text-xs uppercase tracking-wider text-sky-700 mb-2 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span>OUR APPROACH</span>
                    </div>
                    <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                      {study.approach}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-5 rounded-xl bg-slate-50/90 border border-slate-200/90 hover:border-slate-300 transition-colors shadow-2xs">
                    <div className="font-mono text-xs uppercase tracking-wider text-purple-700 mb-2 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      <span>THE SOLUTION</span>
                    </div>
                    <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                      {study.solution}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 hover:border-emerald-300 transition-colors shadow-2xs">
                    <div className="font-mono text-xs uppercase tracking-wider text-emerald-800 mb-2 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>FACTUAL OUTCOME</span>
                    </div>
                    <p className="text-sm sm:text-[15px] text-slate-800 leading-relaxed font-normal">
                      {study.outcome}
                    </p>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action to View All Case Studies on Their Own Screen */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-slate-950 hover:bg-sky-600 text-white font-semibold text-sm sm:text-base transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>Explore All {caseStudies.length} Technical Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
