import React from 'react';
import { Globe, Layers, Cpu, Server, Smartphone } from 'lucide-react';

export default function CapabilityStrip() {
  const capabilities = [
    { label: "Web Development", icon: Globe },
    { label: "Full-Stack Applications", icon: Layers },
    { label: "AI Solutions", icon: Cpu },
    { label: "API Development", icon: Server },
    { label: "Responsive UI", icon: Smartphone },
  ];

  return (
    <section className="border-b border-slate-200 bg-white py-3.5 sm:py-4 relative z-20">
      <div className="studio-container">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          {/* Label */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-sky-600" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-900">
              CORE DISCIPLINES
            </span>
          </div>

          {/* Capabilities Badges: Clean Wrap on Mobile, No Glitchy Overflow */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 hover:border-sky-300 hover:bg-sky-50/50 hover:text-sky-800 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span className="font-medium whitespace-nowrap">{item.label}</span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
