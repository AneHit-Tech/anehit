import React from 'react';
import { 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { projects } from '../../data/projects';
import { caseStudies } from '../../data/caseStudies';

export default function ProjectMockupRenderer({ projectId }) {
  // Support lookup from projects or case studies
  const project = projects.find((p) => p.id === projectId) || caseStudies.find((c) => c.id === projectId);

  if (!project) return null;

  return (
    <div className="w-full rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-7 md:p-8 space-y-4 sm:space-y-5 shadow-xs">
      
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700">
            Real-World Architecture & Outcomes
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/90 text-emerald-800 text-xs font-mono font-bold transition-colors"
            >
              <span>{project.adminUrl ? "Student App" : "Live Production URL"}</span>
              <ExternalLink className="w-3 h-3 text-emerald-700" />
            </a>
          )}
          {project.adminUrl && (
            <a
              href={project.adminUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 hover:bg-sky-100 border border-sky-200/90 text-sky-800 text-xs font-mono font-bold transition-colors"
            >
              <span>Admin App</span>
              <ExternalLink className="w-3 h-3 text-sky-700" />
            </a>
          )}
          {!project.liveUrl && !project.adminUrl && (
            <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-200/70 text-slate-700">
              Verified Production Delivery
            </span>
          )}
        </div>
      </div>

      {/* The Real Challenge */}
      {project.challenge && (
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>The Real Challenge</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {project.challenge}
          </p>
        </div>
      )}

      {/* Delivered Solution */}
      {project.solution && (
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-sky-800">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
            <span>Delivered Solution</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {project.solution}
          </p>
        </div>
      )}

      {/* Verified Real-World Outcome */}
      {project.outcome && (
        <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Verified Production Outcome</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            {project.outcome}
          </p>
        </div>
      )}

      {/* Key Architectural Highlights */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <div className="pt-2.5 border-t border-slate-200/80">
          <div className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-wider mb-2">
            Core Engineering Deliverables:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.keyFeatures.slice(0, 4).map((feature, i) => (
              <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
