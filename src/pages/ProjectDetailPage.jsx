import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { ExternalLink, ArrowRight, ArrowLeft, CheckCircle2, Terminal } from 'lucide-react';
import ProjectMockupRenderer from '../components/ui/ProjectMockupRenderer';
import BottomCtaSection from '../components/common/BottomCtaSection';

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const normalizedId = 
    projectId === 'multitranslate-ai' ? 'bolo-translator' :
    projectId === 'agenstory' ? 'gen-story' :
    projectId === 'officialcoders' ? 'official-coders' :
    projectId === 'online-examination-systems' ? 'online-examination-system' :
    projectId;

  const projectIndex = projects.findIndex((p) => p.id === normalizedId);

  if (projectIndex === -1) {
    return <Navigate to="/case-studies" replace />;
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

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

        {/* 1. Project Hero */}
        <div className="studio-card p-6 sm:p-10 md:p-12 border-slate-200 bg-white mb-10 sm:mb-12 shadow-sm">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="studio-badge bg-sky-50 text-sky-700 border-sky-200">
                {project.category}
              </span>
              {project.liveUrl && (
                <span className="font-mono text-xs text-emerald-600 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Production Deployment
                </span>
              )}
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {project.tagline || project.shortDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-sky-600 text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  <span>{project.adminUrl ? "View Student App" : "View Live Application"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.adminUrl && (
                <a
                  href={project.adminUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-50 hover:bg-sky-100 border border-sky-300 text-sky-800 font-semibold text-xs transition-colors shadow-sm"
                >
                  <span>View Admin Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-mono transition-colors font-medium"
              >
                <span>Hire Us for a Similar Build</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive UI Showcase */}
        <div className="mb-12 sm:mb-16">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2 font-semibold">
            <Terminal className="w-3.5 h-3.5 text-sky-600" />
            <span>Production Architecture & Engineering Outcomes</span>
          </div>
          <div className="w-full overflow-hidden">
            <ProjectMockupRenderer projectId={project.id} />
          </div>
        </div>

        {/* 2. Overview, Challenge, Approach, Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 mb-16">
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            
            {/* Overview */}
            <section className="studio-card p-6 sm:p-8 border-slate-200 bg-white shadow-sm">
              <h2 className="font-mono text-xs uppercase tracking-wider text-sky-700 mb-2 font-bold">
                01 — Project Overview
              </h2>
              <h3 className="font-display font-bold text-xl text-slate-950 mb-3">
                What the project is
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* Challenge */}
            <section className="studio-card p-6 sm:p-8 border-slate-200 bg-white shadow-sm">
              <h2 className="font-mono text-xs uppercase tracking-wider text-rose-700 mb-2 font-bold">
                02 — The Challenge
              </h2>
              <h3 className="font-display font-bold text-xl text-slate-950 mb-3">
                Problem needed to be solved
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {project.challenge}
              </p>
            </section>

            {/* Approach & Solution */}
            <section className="studio-card p-6 sm:p-8 border-slate-200 bg-white shadow-sm space-y-6">
              <div>
                <h2 className="font-mono text-xs uppercase tracking-wider text-sky-700 mb-2 font-bold">
                  03 — Our Approach
                </h2>
                <h3 className="font-display font-bold text-xl text-slate-950 mb-3">
                  How we engineered it
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {project.approach}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <h2 className="font-mono text-xs uppercase tracking-wider text-purple-700 mb-2 font-bold">
                  04 — The Solution Delivered
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </section>

            {/* Key Features */}
            <section className="studio-card p-6 sm:p-8 border-slate-200 bg-white shadow-sm">
              <h2 className="font-mono text-xs uppercase tracking-wider text-sky-700 mb-2 font-bold">
                05 — Verified Implemented Features
              </h2>
              <h3 className="font-display font-bold text-xl text-slate-950 mb-4">
                Core Functionality
              </h3>
              <ul className="space-y-3">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Factual Outcome */}
            <section className="studio-card p-6 sm:p-8 border-emerald-200 bg-emerald-50/50 shadow-sm">
              <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-800 mb-2 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>06 — Factual Delivered Outcome</span>
              </h2>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                {project.outcome}
              </p>
            </section>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="studio-card p-6 border-slate-200 bg-white sticky top-24 space-y-6 shadow-sm">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-3 font-semibold">
                  Verified Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-3 font-semibold">
                  Delivered Artifacts
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {project.deliverables?.map((del, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-900 hover:bg-sky-600 text-white font-semibold text-xs transition-colors shadow-xs"
                >
                  <span>Build Something Similar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Next Project Footer Bar */}
        <div className="pt-8 sm:pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-slate-400 font-medium">
            NEXT CASE STUDY
          </span>
          <Link
            to={`/case-studies/${nextProject.id}`}
            className="flex items-center gap-2 text-slate-950 hover:text-sky-700 font-display font-bold text-lg group transition-colors"
          >
            <span>{nextProject.title}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bottom CTA Consultation Section */}
        <BottomCtaSection 
          title="Want to Build a Similar Digital Product?"
          description="From custom web architectures to complex API integrations, our engineering team is ready to build your product."
          primaryBtnText="Start a Technical Conversation"
          primaryBtnLink="/contact"
          secondaryBtnText="View All Case Studies"
          secondaryBtnLink="/case-studies"
          className="pb-4"
        />

      </div>
    </div>
  );
}
