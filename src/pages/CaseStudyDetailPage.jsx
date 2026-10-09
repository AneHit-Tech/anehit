import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Terminal } from 'lucide-react';
import ProjectMockupRenderer from '../components/ui/ProjectMockupRenderer';
import BottomCtaSection from '../components/common/BottomCtaSection';

export default function CaseStudyDetailPage() {
  const { studyId } = useParams();
  const normalizedId = 
    studyId === 'multitranslate-ai' ? 'bolo-translator' :
    studyId === 'agenstory' ? 'gen-story' :
    studyId === 'officialcoders' ? 'official-coders' :
    studyId === 'online-examination-systems' ? 'online-examination-system' :
    studyId;

  const studyIndex = caseStudies.findIndex((s) => s.id === normalizedId);

  if (studyIndex === -1) {
    return <Navigate to="/case-studies" replace />;
  }

  const study = caseStudies[studyIndex];
  const nextStudy = caseStudies[(studyIndex + 1) % caseStudies.length];

  return (
    <div className="py-12 sm:py-16 md:py-24 bg-blueprint">
      <div className="studio-container">
        
        {/* Back Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-sky-700 transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Case Studies</span>
          </Link>
        </div>

        {/* Header Hero */}
        <div className="studio-card p-6 sm:p-10 md:p-12 border-slate-200 bg-white mb-10 sm:mb-12 shadow-sm">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                {study.category}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight leading-tight">
              {study.title}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {study.tagline}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {study.liveUrl && (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-sky-600 text-white font-semibold text-xs transition-colors shadow-xs"
                >
                  <span>{study.adminUrl ? "View Student App" : "View Live Project"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {study.adminUrl && (
                <a
                  href={study.adminUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-50 hover:bg-sky-100 border border-sky-300 text-xs font-mono text-sky-800 font-semibold transition-colors shadow-xs"
                >
                  <span>View Admin Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-mono text-slate-800 transition-colors font-medium"
              >
                <span>Inquire About Similar Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
              </Link>
            </div>
          </div>
        </div>

        {/* 07 — Interactive Screenshots / UI Visuals */}
        <div className="mb-12 sm:mb-14">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2 font-semibold">
            <Terminal className="w-3.5 h-3.5 text-sky-600" />
            <span>07 — Production Architecture & Deliverables Summary</span>
          </div>
          <div className="w-full overflow-hidden">
            <ProjectMockupRenderer projectId={study.id} />
          </div>
        </div>

        {/* 9-Part Case Study Content */}
        <div className="space-y-6 sm:space-y-8 max-w-4xl">
          
          {/* 01 — Project Overview */}
          <section className="studio-card p-6 sm:p-8 border-slate-200 bg-white shadow-sm">
            <div className="font-mono text-xs text-sky-700 uppercase font-bold mb-2">
              01 — Project Overview
            </div>
            <h2 className="font-display font-bold text-xl text-slate-950 mb-3">
              Context and Scope
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {study.summary}
            </p>
          </section>

          {/* 02 — The Challenge */}
          <section className="studio-card p-6 sm:p-8 border-slate-200 bg-white shadow-sm">
            <div className="font-mono text-xs text-rose-700 uppercase font-bold mb-2">
              02 — The Challenge
            </div>
            <h2 className="font-display font-bold text-xl text-slate-950 mb-3">
              Technical Friction & Hurdles
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {study.challenge}
            </p>
          </section>

          {/* 03 — Our Approach */}
          <section className="studio-card p-6 sm:p-8 border-slate-200 bg-white shadow-sm">
            <div className="font-mono text-xs text-sky-700 uppercase font-bold mb-2">
              03 — Our Approach
            </div>
            <h2 className="font-display font-bold text-xl text-slate-950 mb-3">
              Engineering Strategy
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {study.approach}
            </p>
          </section>

          {/* 04 — The Solution */}
          <section className="studio-card p-6 sm:p-8 border-slate-200 bg-white shadow-sm">
            <div className="font-mono text-xs text-purple-700 uppercase font-bold mb-2">
              04 — The Solution
            </div>
            <h2 className="font-display font-bold text-xl text-slate-950 mb-3">
              What Was Engineered
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {study.solution}
            </p>
          </section>

          {/* 05 — Key Features */}
          <section className="studio-card p-6 sm:p-8 border-slate-200 bg-white shadow-sm">
            <div className="font-mono text-xs text-sky-700 uppercase font-bold mb-2">
              05 — Key Features
            </div>
            <h2 className="font-display font-bold text-xl text-slate-950 mb-4">
              Implemented Product Capabilities
            </h2>
            <ul className="space-y-2.5">
              {study.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 06 — Technology Architecture */}
          <section className="studio-card p-6 sm:p-8 border-slate-200 bg-white shadow-sm">
            <div className="font-mono text-xs text-sky-700 uppercase font-bold mb-2">
              06 — Technology Architecture
            </div>
            <h2 className="font-display font-bold text-xl text-slate-950 mb-4">
              Stack & Component Roles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {study.technology.map((tech, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-mono text-xs font-bold text-slate-900 mb-1">{tech.name}</div>
                  <div className="text-xs text-slate-600">{tech.role}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 08 — Development Process */}
          <section className="studio-card p-6 sm:p-8 border-slate-200 bg-white shadow-sm">
            <div className="font-mono text-xs text-sky-700 uppercase font-bold mb-2">
              08 — Development Process
            </div>
            <h2 className="font-display font-bold text-xl text-slate-950 mb-4">
              Discovery → Planning → Development → Testing → Deployment
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {study.process.map((step) => (
                <div key={step.step} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center justify-between mb-1.5 font-mono text-xs text-sky-700">
                    <span className="font-bold">STEP {step.step}</span>
                    <span className="text-slate-500 font-medium">{step.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 09 — Factual Outcome */}
          <section className="studio-card p-6 sm:p-8 border-emerald-200 bg-emerald-50/60 shadow-sm">
            <div className="font-mono text-xs text-emerald-800 uppercase font-bold mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>09 — Factual Delivered Outcome</span>
            </div>
            <h2 className="font-display font-bold text-xl text-slate-950 mb-2">
              Delivered Product
            </h2>
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
              {study.outcome}
            </p>
          </section>

        </div>

        {/* Bottom Next Case Study */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-slate-400 font-medium">
            NEXT CASE STUDY
          </span>
          <Link
            to={`/case-studies/${nextStudy.id}`}
            className="flex items-center gap-2 text-slate-950 hover:text-sky-700 font-display font-bold text-lg group transition-colors"
          >
            <span>{nextStudy.title}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bottom CTA Consultation Section */}
        <BottomCtaSection 
          title="Ready to Engineer a Similar Production System?"
          description="Tell us about your system requirements, target architecture, or timeline. We'll provide a transparent scoping roadmap."
          primaryBtnText="Discuss Architecture With Us"
          primaryBtnLink="/contact"
          secondaryBtnText="View All Case Studies"
          secondaryBtnLink="/case-studies"
          className="pb-4"
        />

      </div>
    </div>
  );
}
