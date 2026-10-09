import React from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ProjectMockupRenderer from '../components/ui/ProjectMockupRenderer';

export default function CaseStudiesPage() {
  return (
    <div className="py-12 sm:py-16 md:py-24 bg-blueprint">
      <div className="studio-container">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-sky-700 mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
            <span>CASE STUDIES // BEHIND THE BUILD</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight mb-4 leading-tight">
            Architectural Thinking, Challenges & Delivered Outcomes.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We don't just show screenshots. We break down the exact problem, our technical approach, the system architecture, and the delivered software.
          </p>
        </div>

        {/* Case Studies Catalog */}
        {caseStudies.length === 0 ? (
          <div className="py-14 sm:py-18 px-6 sm:px-10 rounded-2xl bg-white border border-slate-200/90 shadow-sm max-w-xl mx-auto text-center space-y-4 my-8">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 tracking-tight">
              No Case Studies Published Yet
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
              Our engineering case studies are being documented. Please check back soon or explore our live project portfolio.
            </p>
          </div>
        ) : (
          <div className="space-y-10 sm:space-y-12">
            {caseStudies.map((study) => (
            <div
              key={study.id}
              className="studio-card p-6 sm:p-8 md:p-10 border-slate-200 bg-white hover:border-slate-300 transition-all shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left meta & summary */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded font-semibold uppercase tracking-wider">
                      {study.category}
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-950">
                    {study.title}
                  </h2>

                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    {study.summary}
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                      <div className="text-xs font-mono text-sky-700 font-bold mb-1.5 uppercase tracking-wider">
                        THE CORE CHALLENGE
                      </div>
                      <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 shadow-2xs">
                      <div className="text-xs font-mono text-emerald-800 font-bold mb-1.5 flex items-center gap-1.5 uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>FACTUAL OUTCOME</span>
                      </div>
                      <p className="text-sm sm:text-[15px] text-slate-800 leading-relaxed font-normal">
                        {study.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-sm"
                    >
                      <span>Read Complete Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right UI Preview */}
                <div className="lg:col-span-6 w-full overflow-hidden">
                  <ProjectMockupRenderer projectId={study.id} />
                </div>

              </div>
            </div>
          ))}
        </div>
        )}

      </div>
    </div>
  );
}
