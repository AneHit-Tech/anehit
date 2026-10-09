import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  ChevronRight, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Smartphone,
  Star,
  Search,
  SlidersHorizontal,
  Flame
} from 'lucide-react';

export default function HeroPerspectiveTunnel() {
  const containerRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Subtle interactive 3D mouse parallax
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8; // max 4 deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] overflow-hidden bg-slate-950 flex items-center justify-center select-none"
      style={{ perspective: '1100px' }}
    >
      {/* 3D PERSPECTIVE SCENE WRAPPER */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-300 ease-out flex items-center justify-center"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${mouseOffset.x}deg) rotateX(${mouseOffset.y}deg)`
        }}
      >
        {/* ======================================================== */}
        {/* LEFT 3D PERSPECTIVE WALL (Angled rotateY(44deg))          */}
        {/* ======================================================== */}
        <div 
          className="absolute left-[-10%] sm:left-[-6%] lg:left-[-3%] top-[-15%] bottom-[-15%] w-[42%] sm:w-[38%] lg:w-[32%] grid grid-cols-2 gap-3 sm:gap-4 p-2 sm:p-4 opacity-80 sm:opacity-90 transition-all duration-700"
          style={{
            transform: 'rotateY(46deg) rotateZ(-1deg) translateZ(30px)',
            transformOrigin: 'left center',
          }}
        >
          {/* Card L1: Food & Artisan Restaurant App */}
          <div className="col-span-2 rounded-2xl overflow-hidden bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 p-3 sm:p-4 text-white shadow-2xl shadow-red-500/20 border border-white/20 transform hover:scale-102 transition-transform">
            <div className="flex items-center justify-between text-[10px] font-mono tracking-wider uppercase opacity-90 pb-2 border-b border-white/20">
              <span className="flex items-center gap-1">
                <Flame className="w-3 h-3 fill-amber-300 text-amber-300" />
                Fast & Fresh
              </span>
              <span>Happy Bites • 4.9 ★</span>
            </div>
            <div className="mt-2.5 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm sm:text-base leading-tight font-display">
                  Artisan Soul, Homemade Heart
                </h4>
                <p className="text-[10px] sm:text-xs text-white/80 mt-1">
                  Online delivery & gourmet menu experience
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-lg text-white shrink-0 shadow-inner">
                🍔
              </div>
            </div>
          </div>

          {/* Card L2: Vibrant Electric Purple Block */}
          <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 p-3 sm:p-4 text-white shadow-xl shadow-purple-600/30 border border-purple-400/30 flex flex-col justify-between min-h-[140px]">
            <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-purple-200" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-purple-200">Creative Suite</div>
              <div className="text-xs sm:text-sm font-bold mt-0.5">Gen Story AI</div>
              <div className="text-[10px] text-purple-100/70 mt-1">Generative narrative platform</div>
            </div>
          </div>

          {/* Card L3: Vibrant Electric Orange Block */}
          <div className="rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 p-3 sm:p-4 text-white shadow-xl shadow-orange-500/30 border border-orange-400/30 flex flex-col justify-between min-h-[140px]">
            <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Activity className="w-4 h-4 text-amber-100" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-amber-100">Performance</div>
              <div className="text-xs sm:text-sm font-bold mt-0.5">Sub-20ms Engine</div>
              <div className="text-[10px] text-amber-100/70 mt-1">High-concurrency streaming</div>
            </div>
          </div>

          {/* Card L4: Modern Mobile App Interface */}
          <div className="col-span-2 rounded-2xl bg-slate-900/90 border border-slate-700/70 p-3 sm:p-4 text-slate-100 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between text-[11px] pb-2 border-b border-slate-800">
              <div className="flex items-center gap-1.5 font-mono text-sky-400">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile Commerce Pro</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-mono">
                Active v3.2
              </span>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <div className="w-12 h-14 rounded-lg bg-slate-800 border border-slate-700 flex flex-col items-center justify-center text-xs text-slate-300 shrink-0">
                📱
                <span className="text-[8px] text-slate-400 mt-1">iOS / Android</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold truncate text-slate-200">Universal Responsive Stack</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Optimized 60fps micro-interactions</div>
                <div className="mt-1 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[9px] text-slate-400 ml-1">100% Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* RIGHT 3D PERSPECTIVE WALL (Angled rotateY(-44deg))         */}
        {/* ======================================================== */}
        <div 
          className="absolute right-[-10%] sm:right-[-6%] lg:right-[-3%] top-[-15%] bottom-[-15%] w-[42%] sm:w-[38%] lg:w-[32%] grid grid-cols-2 gap-3 sm:gap-4 p-2 sm:p-4 opacity-80 sm:opacity-90 transition-all duration-700"
          style={{
            transform: 'rotateY(-46deg) rotateZ(1deg) translateZ(30px)',
            transformOrigin: 'right center',
          }}
        >
          {/* Card R1: FleetPulse Logistics SaaS (Matches Reference Blue Banner) */}
          <div className="col-span-2 rounded-2xl bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 p-3 sm:p-4 text-white shadow-2xl shadow-sky-500/30 border border-sky-400/40">
            <div className="flex items-center justify-between text-[10px] font-mono tracking-wider uppercase text-sky-200 pb-1.5 border-b border-white/20">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Modern Logistics Suite
              </span>
              <span>Cloud Enterprise</span>
            </div>
            
            <div className="mt-2">
              <h4 className="font-bold text-xs sm:text-sm leading-tight">
                Control Every Fleet Operations From One Dashboard
              </h4>
            </div>

            {/* Inset Mockup Dashboard Strip */}
            <div className="mt-2.5 bg-white/95 text-slate-900 rounded-xl p-2 sm:p-2.5 shadow-md flex items-center justify-between text-[10px] sm:text-[11px] font-mono">
              <div>
                <span className="text-[9px] text-slate-500 block uppercase">Total Revenue</span>
                <span className="font-bold text-slate-900 text-xs sm:text-sm">$128,490.40</span>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-slate-500 block uppercase">Utilization</span>
                <span className="font-bold text-emerald-600 text-xs sm:text-sm">87.80%</span>
              </div>
              <div className="hidden sm:block text-right">
                <span className="text-[9px] text-slate-500 block uppercase">Fleet Mileage</span>
                <span className="font-bold text-sky-600">120,450 mi</span>
              </div>
            </div>
          </div>

          {/* Card R2: Minimalist Wealth & FinTech Dashboard */}
          <div className="rounded-2xl bg-slate-900/95 border border-slate-700/80 p-3 sm:p-4 text-white shadow-2xl flex flex-col justify-between min-h-[140px]">
            <div>
              <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                <span>WEALTH OS</span>
                <TrendingUp className="w-3 h-3 text-emerald-400" />
              </div>
              <div className="text-xs sm:text-sm font-bold mt-1 text-slate-100">$2.45M Assets</div>
              <div className="text-[9px] text-emerald-400 font-mono mt-0.5">+24.6% YTD</div>
            </div>
            <div className="h-6 flex items-end gap-1 pt-1">
              {[20, 45, 30, 60, 40, 75, 90, 85].map((val, idx) => (
                <div 
                  key={idx} 
                  style={{ height: `${val}%` }} 
                  className="flex-1 bg-sky-500/80 rounded-t-sm" 
                />
              ))}
            </div>
          </div>

          {/* Card R3: Warm Vibrant Orange Brand Tile */}
          <div className="rounded-2xl bg-gradient-to-br from-amber-500 via-orange-600 to-rose-600 p-3 sm:p-4 text-white shadow-xl shadow-orange-500/20 border border-white/20 flex flex-col justify-between min-h-[140px]">
            <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-xs">
              ⚡
            </div>
            <div>
              <div className="text-[9px] font-mono uppercase text-orange-100">Edge Network</div>
              <div className="text-xs sm:text-sm font-bold mt-0.5">Cloud Native</div>
              <div className="text-[9px] text-white/80 mt-0.5">Multi-region active</div>
            </div>
          </div>

          {/* Card R4: E-Commerce / Storefront Device Grid */}
          <div className="col-span-2 rounded-2xl bg-slate-900/90 border border-slate-700/70 p-3 sm:p-4 text-slate-200 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-2 border-b border-slate-800">
              <span className="flex items-center gap-1 text-sky-400">
                <Search className="w-3 h-3" />
                Curated Storefront
              </span>
              <span className="text-slate-500">iPhone 15 Pro Max • 4.95 ★</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-sm">
                  🎧
                </div>
                <div>
                  <div className="font-semibold text-white leading-tight">Next-Gen Audio</div>
                  <div className="text-[10px] text-slate-400">$349 • In Stock</div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-1 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                Add to Cart
              </span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TOP CEILING 3D STRIP (Angled rotateX(-45deg))             */}
        {/* ======================================================== */}
        <div 
          className="absolute -top-12 inset-x-[15%] h-28 hidden md:grid grid-cols-4 gap-3 opacity-40 pointer-events-none"
          style={{
            transform: 'rotateX(-52deg)',
            transformOrigin: 'center top'
          }}
        >
          <div className="rounded-xl bg-gradient-to-r from-red-500 to-amber-500 border border-white/20 p-2 shadow-lg" />
          <div className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 border border-white/20 p-2 shadow-lg" />
          <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 border border-white/20 p-2 shadow-lg" />
          <div className="rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 border border-white/20 p-2 shadow-lg" />
        </div>

        {/* ======================================================== */}
        {/* BOTTOM FLOOR 3D STRIP (Angled rotateX(45deg))             */}
        {/* ======================================================== */}
        <div 
          className="absolute -bottom-12 inset-x-[15%] h-28 hidden md:grid grid-cols-4 gap-3 opacity-40 pointer-events-none"
          style={{
            transform: 'rotateX(52deg)',
            transformOrigin: 'center bottom'
          }}
        >
          <div className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 border border-white/20 p-2 shadow-lg" />
          <div className="rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 border border-white/20 p-2 shadow-lg" />
          <div className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 border border-white/20 p-2 shadow-lg" />
          <div className="rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 border border-white/20 p-2 shadow-lg" />
        </div>
      </div>

      {/* ======================================================== */}
      {/* LUMINOUS FOCAL APERTURE & CENTER HERO CONTENT           */}
      {/* ======================================================== */}
      
      {/* Radiant Golden/White Light Mask In Center */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.92) 26%, rgba(255,255,255,0.72) 42%, rgba(255,255,255,0) 68%)'
        }}
      />

      {/* Hero Central Card & Content */}
      <div className="relative z-30 max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        
        {/* Mini Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-md text-xs font-mono text-slate-200 mb-5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-semibold text-white">Full-Stack & AI Engineering Studio</span>
        </div>

        {/* Main Headline (Exact style from user reference) */}
        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-[1.12] drop-shadow-sm">
          Transform Your Vision into Scalable Digital Reality
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          We partner with startups, businesses and ambitious firms to design, deploy, and scale high-performance cloud platforms, custom software, and AI solutions.
        </p>

        {/* Action Buttons Matching Reference Visual */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            to="/case-studies"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-xl shadow-slate-950/20 active:scale-98"
          >
            <span>Explore Tech Gallery</span>
            <ArrowUpRight className="w-4 h-4 text-slate-300" />
          </Link>
          
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/90 hover:bg-white border border-slate-300/80 text-slate-900 font-semibold text-sm transition-all shadow-md shadow-slate-900/5 active:scale-98 backdrop-blur-sm"
          >
            <span>Book Consultation</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>

        {/* Trust Signals Strip */}
        <div className="mt-8 pt-6 border-t border-slate-300/60 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-700">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direct Engineer Access</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
            <span>Modern React & APIs</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
            <span>Clean Architecture</span>
          </div>
        </div>

      </div>
    </section>
  );
}
