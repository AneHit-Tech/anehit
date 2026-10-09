import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  Cpu, 
  Globe, 
  Layout, 
  CheckCircle2,
  FolderSearch
} from 'lucide-react';
import ProjectMockupRenderer from '../components/ui/ProjectMockupRenderer';
import ScrollStack, { ScrollStackItem } from '../components/ui/ScrollStack';
import { projects, matchesProjectCategory } from '../data/projects';
import BottomCtaSection from '../components/common/BottomCtaSection';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { id: 'All', label: 'All Case Studies', count: projects.length, icon: Sparkles },
    { id: 'AI', label: 'AI Applications', count: projects.filter((p) => matchesProjectCategory(p, 'AI')).length, icon: Cpu },
    { id: 'Web Apps', label: 'Web Apps', count: projects.filter((p) => matchesProjectCategory(p, 'Web Apps')).length, icon: Globe },
    { id: 'Full Stack', label: 'Full Stack', count: projects.filter((p) => matchesProjectCategory(p, 'Full Stack')).length, icon: Layers },
    { id: 'Business Websites', label: 'Brand Sites', count: projects.filter((p) => matchesProjectCategory(p, 'Business Websites')).length, icon: Layout },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => matchesProjectCategory(p, activeFilter));

  return (
    <div className="py-12 sm:py-16 md:py-24 bg-blueprint">
      <div className="studio-container">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-sky-700 mb-4 shadow-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>VERIFIED CASE STUDIES & PRODUCTION BUILDS</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight mb-4 leading-tight">
            Selected Case Studies & Live Deployments
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Explore real software products we have designed, architected, and shipped. Review the real-world engineering challenges, our technical solutions, and verified production outcomes.
          </p>
        </div>

        {/* Modern Attractive Segmented Filter Bar - Centered */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm overflow-x-auto no-scrollbar max-w-full">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-slate-950 text-white shadow-md shadow-slate-950/20'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
                  <span>{cat.label}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-md font-mono ${
                    isActive ? 'bg-slate-800 text-sky-300' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="py-14 sm:py-18 px-6 sm:px-10 rounded-2xl bg-white border border-slate-200/90 shadow-sm max-w-xl mx-auto text-center space-y-4 my-8 reveal-init" data-reveal>
            <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 mx-auto flex items-center justify-center shadow-2xs">
              <FolderSearch className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200 text-xs font-mono font-bold uppercase tracking-wider">
                <span>0 Case Studies Found</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 tracking-tight">
                No Case Studies Found in this Category
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
                No case studies were found matching the <strong className="text-slate-950 font-semibold font-mono">"{categories.find(c => c.id === activeFilter)?.label || activeFilter}"</strong> filter.
              </p>
            </div>

            <div className="pt-2 flex justify-center">
              <button
                onClick={() => setActiveFilter('All')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-sky-600 text-white text-xs font-semibold transition-all shadow-xs cursor-pointer active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>Show All Case Studies ({projects.length})</span>
              </button>
            </div>
          </div>
        ) : (
          <ScrollStack
            key={activeFilter}
            itemDistance={40}
            itemScale={0.025}
            itemStackDistance={24}
            stackPosition="12%"
            scaleEndPosition="6%"
            baseScale={0.92}
            useWindowScroll={true}
          >
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 1;
            const projectNumber = String(index + 1).padStart(2, '0');

            return (
              <ScrollStackItem
                key={project.id}
                itemClassName="bg-white border border-slate-200/90 hover:border-slate-300 transition-colors p-6 sm:p-8 lg:p-10 shadow-[0_14px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left or Right Info Column */}
                  <div className={`space-y-5 lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
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

                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 group-hover:text-sky-700 transition-colors">
                      {project.title}
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="space-y-2 py-1">
                      <div className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">
                        Key Deliverables:
                      </div>
                      <ul className="space-y-2 text-sm text-slate-700">
                        {project.keyFeatures && project.keyFeatures.slice(0, 2).map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
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
                      <Link
                        to={`/case-studies/${project.id}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-700 hover:text-sky-900 transition-colors py-2"
                      >
                        <span>Full Case Study Architecture →</span>
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-sm font-semibold transition-all shadow-sm"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Visual Showcase (col-span-7) */}
                  <div className={`lg:col-span-7 w-full overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <ProjectMockupRenderer projectId={project.id} />
                  </div>

                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
        )}

        {/* Bottom CTA Consultation Section */}
        <BottomCtaSection 
          title="Have a Project with Similar Technical Demands?"
          description="Whether you need a full-stack SaaS platform, high-converting showcase website, or custom AI integrations, our engineering team is ready to build it."
          primaryBtnText="Start a Technical Conversation"
          primaryBtnLink="/contact"
          secondaryBtnText="Explore Our Services"
          secondaryBtnLink="/services"
          className="pt-16 sm:pt-24 pb-8"
        />

      </div>
    </div>
  );
}
