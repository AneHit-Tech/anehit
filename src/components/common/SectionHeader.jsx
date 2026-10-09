import React from 'react';

export default function SectionHeader({
  label = "Discipline",
  title,
  subtitle,
  centered = false,
  className = ""
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className} reveal-init`} data-reveal>
      {/* Section Label Tag */}
      {label && (
        <div className={`flex items-center gap-2.5 mb-3.5 ${centered ? 'justify-center' : ''}`}>
          <span className="font-mono text-xs text-sky-800 border border-sky-300/80 bg-sky-50/90 px-2.5 py-1 rounded-md font-bold tracking-wider uppercase">
            {label}
          </span>
          {!centered && <div className="h-px bg-slate-200 flex-1 max-w-[100px]" />}
        </div>
      )}

      {/* Main Title with text fade */}
      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight leading-[1.15] text-fade-in">
        {title}
      </h2>

      {/* Subtitle with text fade */}
      {subtitle && (
        <p className="mt-3.5 text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed text-fade-in stagger-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
