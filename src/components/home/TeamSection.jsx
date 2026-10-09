import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { studioInfo, teamMembers } from '../../data/team';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';

export default function TeamSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-20 bg-[#f8fafc] border-b border-slate-200">
      <div className="studio-container">
        <SectionHeader
          label="Founding Engineers"
          title="A Small Team. Serious About Building."
          subtitle={studioInfo.positioning}
        />

        {/* Studio Advantage Highlight Strip */}
        <div className="mb-12 p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-sm">
          <div className="max-w-2xl mb-6">
            <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-2">
              The Nimble Studio Model
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {studioInfo.philosophy} Working with a two-person development studio means zero bureaucracy, zero sales handoffs, and 100% focused technical execution on your product.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
            {studioInfo.advantages.map((adv, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="font-mono text-xs font-bold text-sky-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                  {adv.title}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Authentic 2-Person Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="studio-card p-6 sm:p-8 border-slate-200 hover:border-slate-300 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 font-mono font-bold text-xl shadow-xs">
                    {member.initials}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-sky-700 uppercase tracking-wider mb-0.5 font-semibold">
                      Co-Founder & Developer
                    </div>
                    <h4 className="font-display font-bold text-xl text-slate-950">
                      {member.name}
                    </h4>
                    <p className="text-xs font-mono text-slate-500">
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Core Focus Area Tags */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-medium">
                    Core Technical Focus:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.focus.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Profiles & Verified Dev Presence */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-950 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-950 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>

                <span className="text-[11px] font-mono text-emerald-700 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Direct Code Contributor
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section 19: Built Around Collaboration */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-sky-700 uppercase tracking-wider font-bold">
                  Working Style
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs text-slate-500 font-mono">Freelance & Direct Clients</span>
              </div>
              <h4 className="font-display font-bold text-xl text-slate-950">
                Built Around Direct Collaboration
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                You work directly with the people building your product. Every milestone is transparently shared via staging URLs, weekly syncs, and clear asynchronous communication.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 shrink-0">
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
                <div className="text-sky-700 font-bold mb-1">Direct Updates</div>
                <span>Weekly video & async demo</span>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
                <div className="text-sky-700 font-bold mb-1">Transparent Git</div>
                <span>Clean commits & branches</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
