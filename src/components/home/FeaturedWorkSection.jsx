import React from 'react';
import { Link } from 'react-router-dom';
import {
  ExternalLink,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { projects } from '../../data/projects';
import ProjectMockupRenderer from '../ui/ProjectMockupRenderer';
import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack';

export default function FeaturedWorkSection() {
  const displayedProjects = projects.slice(0, 2);

  return (
    <section id="case-studies" className="py-16 sm:py-20 md:py-20 bg-[#f8fafc] border-b border-slate-200">
      <div className="studio-container">

        {/* Header with Opposite CTA - Centered vertically across the header title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-12 gap-5">
          <SectionHeader
            label="Behind the Build"
            title="Case Studies & Deployments"
            subtitle="Explore the engineering decisions, technical architecture, and verified production outcomes behind our delivered systems."
            className="mb-0"
          />

          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-sm font-semibold transition-all shadow-sm active:scale-98 shrink-0 self-start sm:self-center"
          >
            <span>Explore All Case Studies ({projects.length})</span>
            <ArrowUpRight className="w-4 h-4 text-sky-400" />
          </Link>
        </div>

        {/* Case Studies Cards Stack */}
        <ScrollStack
          key="featured-case-studies"
          itemDistance={40}
          itemScale={0.025}
          itemStackDistance={24}
          stackPosition="12%"
          scaleEndPosition="6%"
          baseScale={0.92}
          useWindowScroll={true}
        >
          {displayedProjects.map((project, index) => {
            const isEven = index % 2 === 1; // Alternating layout flag
            const projectNumber = String(index + 1).padStart(2, '0');

            return (
              <ScrollStackItem
                key={project.id}
                itemClassName="bg-white border border-slate-200/90 hover:border-slate-300 transition-colors p-6 sm:p-8 lg:p-10 shadow-[0_14px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                  {/* Info Column */}
                  <div className={`space-y-5 lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Index & Category Badges with Readable Fonts */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-sky-800 bg-sky-50 border border-sky-200 px-3 py-1 rounded-lg">
                        CASE STUDY {projectNumber}
                      </span>
                      <span className="studio-badge bg-slate-100 text-slate-800 border-slate-200 text-xs font-semibold py-1">
                        {project.category}
                      </span>
                      {project.liveUrl ? (
                        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg flex items-center gap-1.5 ml-auto sm:ml-0">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          Live Production
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-lg flex items-center gap-1.5 ml-auto sm:ml-0">
                          <span className="w-2 h-2 rounded-full bg-sky-500" />
                          Architecture Verified
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 tracking-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="space-y-2 py-1">
                      <div className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">
                        Key Architectural Deliverables:
                      </div>
                      <ul className="space-y-2 text-sm text-slate-700">
                        {project.keyFeatures ? (
                          project.keyFeatures.slice(0, 2).map((feat, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                              <span className="leading-snug">{feat}</span>
                            </li>
                          ))
                        ) : (
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                            <span>Scalable modular architecture with high-performance responsive UI</span>
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Tech Stack Pills with Readable Font */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-4 pt-5 border-t border-slate-100">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-sm font-semibold transition-all shadow-sm"
                        >
                          <span>View Live Application</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <Link
                        to={`/case-studies/${project.id}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-700 hover:text-sky-900 transition-colors py-2"
                      >
                        <span>Full Case Study Architecture →</span>
                      </Link>
                    </div>
                  </div>

                  {/* Visual Showcase Column (Spacious col-span-7) */}
                  <div className={`lg:col-span-7 w-full overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <ProjectMockupRenderer projectId={project.id} />
                  </div>

                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </div>
    </section>
  );
}
