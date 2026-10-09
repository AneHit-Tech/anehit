import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function FloatingScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / totalHeight) * 100));
        setScrollProgress(progress);
        setIsVisible(scrollY > 120);
      }
    };

    // Listen on window and Lenis smooth scroll
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    if (window.__lenis) {
      window.__lenis.on('scroll', updateScrollProgress);
    }

    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      if (window.__lenis) {
        window.__lenis.off('scroll', updateScrollProgress);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // SVG circular calculations
  const size = 48;
  const strokeWidth = 3;
  const center = size / 2;
  const radius = center - strokeWidth - 1;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip with percentage */}
      <div
        className={`absolute bottom-full right-0 mb-2 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-mono font-semibold whitespace-nowrap shadow-md pointer-events-none transition-all duration-200 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
        }`}
      >
        <span>{Math.round(scrollProgress)}% Scrolled</span>
        <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-slate-900" />
      </div>

      {/* Floating Circular Scroll Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className="relative w-12 h-12 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md hover:shadow-xl hover:shadow-sky-500/15 hover:border-sky-300 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer group"
      >
        {/* SVG Progress Ring in Site Theme Colors (Sky / Cyan) */}
        <svg
          className="absolute inset-0 -rotate-90 pointer-events-none"
          width={size}
          height={size}
        >
          {/* Subtle Background Track */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#e2e8f0"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Animated Accent Progress Ring */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke="url(#siteScrollGradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-100 ease-out"
          />
          <defs>
            <linearGradient id="siteScrollGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Arrow Icon */}
        <ArrowUp className="w-4 h-4 text-slate-700 group-hover:text-sky-600 group-hover:-translate-y-0.5 transition-all duration-200" />
      </button>
    </div>
  );
}
