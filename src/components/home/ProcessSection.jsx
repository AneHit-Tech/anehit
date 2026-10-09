import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { processSteps } from '../../data/techStack';

export default function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 md:py-20 bg-[#f8fafc] border-b border-slate-200">
      <div className="studio-container">
        <SectionHeader
          label="Development Methodology"
          title="From Idea to Launch"
          subtitle="A structured, six-stage engineering process designed to eliminate surprises, align technical architecture, and ship reliable software."
        />

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="studio-card p-6 sm:p-7 border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between group bg-white"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center font-mono text-xs font-bold text-sky-700 group-hover:bg-sky-50 group-hover:border-sky-300 transition-colors">
                      {step.number}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-700">
                      {step.phase}
                    </span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Phase 0{idx + 1} of 06</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
