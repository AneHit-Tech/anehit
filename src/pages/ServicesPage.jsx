import React, { useState, useMemo } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { services } from '../data/services';
import BottomCtaSection from '../components/common/BottomCtaSection';
import {
  CheckCircle2,
  ArrowUpRight,
  ArrowLeft,
  Code2,
  Smartphone,
  ShoppingBag,
  CreditCard,
  Sparkles,
  Bot,
  ShieldCheck,
  Radio,
  GraduationCap,
  LayoutDashboard,
  Wrench,
  Globe,
  Search,
  Zap,
  Check,
  Mail,
  ShieldAlert,
  Clock,
  Layers,
  Calendar,
  X
} from 'lucide-react';

export default function ServicesPage() {
  const { serviceId } = useParams();
  const [searchParams] = useSearchParams();
  const targetServiceId = serviceId || searchParams.get('service');

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const iconMap = {
    '01': Code2,
    '02': Smartphone,
    '03': ShoppingBag,
    '04': CreditCard,
    '05': Sparkles,
    '06': Bot,
    '07': ShieldCheck,
    '08': Radio,
    '09': GraduationCap,
    '10': LayoutDashboard,
    '11': Wrench,
  };

  const categoryMap = {
    '01': 'Core Software',
    '02': 'Core Software',
    '03': 'Platforms & Commerce',
    '04': 'Platforms & Commerce',
    '05': 'Platforms & Commerce',
    '06': 'AI & Security',
    '07': 'AI & Security',
    '08': 'AI & Security',
    '09': 'Platforms & Commerce',
    '10': 'Core Software',
    '11': 'Core Software',
  };

  const categories = [
    { id: 'All', label: 'All Services', count: 11 },
    { id: 'Core Software', label: 'Core Software', count: 4 },
    { id: 'AI & Security', label: 'AI & Security', count: 3 },
    { id: 'Platforms & Commerce', label: 'Platforms & Commerce', count: 4 },
  ];

  // Check if a specific service is selected
  const selectedService = useMemo(() => {
    if (!targetServiceId) return null;
    return services.find(s => s.id === targetServiceId);
  }, [targetServiceId]);

  // Filtered by category and search for directory view
  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory = activeCategory === 'All' || categoryMap[service.number] === activeCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // =========================================================================
  // VIEW A: DEDICATED BALANCED SPLIT VIEW (Clean, Left & Right Covered, No Switch Section)
  // =========================================================================
  if (selectedService) {
    const Icon = iconMap[selectedService.number] || Globe;
    const categoryName = categoryMap[selectedService.number];

    return (
      <div className="min-h-screen bg-blueprint">

        {/* Balanced Two-Column Studio Layout */}
        <div className="studio-container py-8 sm:py-10 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* =================================================== */}
            {/* LEFT COLUMN: Main Overview, Trust & Actions         */}
            {/* =================================================== */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">

              {/* Primary Service Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6 reveal-init" data-reveal>

                {/* Header Tag Bar with Back Arrow */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <Link
                      to="/services"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-slate-950 border border-slate-200 transition-all group shrink-0"
                      title="Back to All Services"
                      aria-label="Back to All Services"
                    >
                      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 text-slate-700" />
                    </Link>

                    <span className="font-mono text-xs font-bold text-slate-900 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">
                      SERVICE {selectedService.number}
                    </span>
                    <span className="font-mono text-xs font-medium text-sky-700 bg-sky-50 border border-sky-200/80 px-2.5 py-1 rounded-md">
                      {categoryName}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-slate-950 text-sky-400 flex items-center justify-center shrink-0 shadow-sm border border-slate-800 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-[0_8px_20px_rgba(56,189,248,0.25)] hover:border-sky-500/50 active:scale-95 cursor-pointer">
                    <Icon className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
                  </div>
                </div>

                {/* Title & Human Description */}
                <div>
                  <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950 tracking-tight leading-snug">
                    {selectedService.title}
                  </h1>
                  <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {selectedService.fullDescription}
                  </p>
                </div>

                {/* Who This Is Best For Box */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 reveal-init stagger-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                    <Zap className="w-3.5 h-3.5 text-sky-600" />
                    <span>Who This Is Best For</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    {selectedService.idealFor}
                  </p>
                </div>

                {/* Clear Guarantees */}
                <div className="space-y-2 pt-1 border-t border-slate-100 text-xs font-mono text-slate-600 reveal-init stagger-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% Full Source Code Ownership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Direct Access to Senior Developer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Fixed-Price Milestones with Zero Surprises</span>
                  </div>
                </div>

                {/* Direct Action CTAs */}
                <div className="pt-2 space-y-2.5 reveal-init stagger-4">
                  <Link
                    to={`/contact?service=${encodeURIComponent(selectedService.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-md active:scale-98"
                  >
                    <span>Get a Free Quote for This Service</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-xs transition-all active:scale-98"
                  >
                    <span>Talk Directly with a Developer</span>
                  </Link>
                </div>

              </div>

              {/* Direct Help / Contact Note */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3.5 reveal-init stagger-5">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5 border border-sky-100">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Have a custom question?</div>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    We respond to inquiries with practical technical recommendations within 24 hours.
                  </p>
                </div>
              </div>

            </div>

            {/* =================================================== */}
            {/* RIGHT COLUMN: Deliverables, Stack & Simple Process  */}
            {/* =================================================== */}
            <div className="lg:col-span-7 space-y-6">

              {/* Deliverables Card (All 5 Items) */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5 reveal-init" data-reveal>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      Everything Included
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-950 mt-0.5 text-fade-in">
                      What You Get
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70">
                    5 Key Deliverables
                  </span>
                </div>

                <div className="space-y-3">
                  {selectedService.deliverables.map((del, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-start gap-3.5 reveal-init"
                      style={{ transitionDelay: `${idx * 75}ms` }}
                      data-reveal
                    >
                      <div className="w-5 h-5 rounded-md bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                          Deliverable 0{idx + 1}
                        </div>
                        <div className="text-sm font-semibold text-slate-900 mt-0.5">
                          {del}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies We Use Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 reveal-init" data-reveal>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      Technologies
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-950 mt-0.5 text-fade-in">
                      Tools & Frameworks We Use
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    Modern Stack
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs font-semibold hover:border-sky-300 hover:bg-sky-50/50 hover:text-sky-800 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Simple 3-Step Process Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 reveal-init" data-reveal>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      Simple 3-Step Process
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-950 mt-0.5 text-fade-in">
                      How We Work With You
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 reveal-init stagger-1">
                    <div className="text-[10px] font-mono font-bold text-sky-700 uppercase">Step 01</div>
                    <div className="text-xs font-bold text-slate-900 mt-1">Planning & Requirements</div>
                    <div className="text-[11px] text-slate-500 mt-1">We discuss what you need and agree on clear milestones.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 reveal-init stagger-2">
                    <div className="text-[10px] font-mono font-bold text-sky-700 uppercase">Step 02</div>
                    <div className="text-xs font-bold text-slate-900 mt-1">Design & Development</div>
                    <div className="text-[11px] text-slate-500 mt-1">We build your product with regular progress demos.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 reveal-init stagger-3">
                    <div className="text-[10px] font-mono font-bold text-emerald-700 uppercase">Step 03</div>
                    <div className="text-xs font-bold text-slate-900 mt-1">Testing & Final Launch</div>
                    <div className="text-[11px] text-slate-500 mt-1">We test thoroughly and hand over complete code ownership.</div>
                  </div>
                </div>
              </div>

              {/* Fast & Free Quote Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 text-white border border-slate-800 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 reveal-init" data-reveal>
                <div>
                  <div className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
                    Fast & Free Quote
                  </div>
                  <h4 className="font-display font-bold text-xl text-white mt-1 text-fade-in">
                    Ready to discuss your project?
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-md text-fade-in stagger-1">
                    Get a clear estimate and timeline from a developer within 24 hours.
                  </p>
                </div>
                <Link
                  to={`/contact?service=${encodeURIComponent(selectedService.title)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs transition-all shrink-0 active:scale-98"
                >
                  <span>Request a Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    );
  }

  // =========================================================================
  // VIEW B: FULL SERVICES DIRECTORY (When viewing /services with no serviceId)
  // =========================================================================
  return (
    <div className="min-h-screen bg-slate-50/50">

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 overflow-hidden bg-blueprint border-b border-slate-200">
        <div className="studio-container relative z-10 text-center max-w-3xl mx-auto reveal-init" data-reveal>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-mono text-sky-700 font-semibold mb-4 reveal-init">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>PROFESSIONAL WEB & SOFTWARE SERVICES</span>
          </div>

          {/* Main Title with text fade */}
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight leading-tight mb-4 text-fade-in">
            Clear, Reliable Software Services for Your Business
          </h1>

          {/* Subtitle with text fade */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto text-fade-in stagger-1">
            Whether you need a new website, a mobile app, an online store, or custom software, we build it cleanly and handle all the technical details so you can focus on running your business.
          </p>

          {/* Value Highlights */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-mono text-slate-600 reveal-init stagger-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600" />
              <span>11 Core Capabilities</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Production-Grade Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span>Direct Senior Engineer Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH CONTROLS */}
      <section className="sticky top-16 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-xs">
        <div className="studio-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 md:pb-0">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${isActive
                      ? 'bg-slate-950 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-600 hover:text-slate-950'
                      }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-[11px] px-2 py-0.5 rounded-md font-mono ${isActive ? 'bg-slate-800 text-sky-300' : 'bg-white text-slate-500'
                      }`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80 lg:w-96 group">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors">
                <Search className={`w-4 h-4 transition-colors duration-200 ${searchQuery ? 'text-sky-600' : 'text-slate-400 group-focus-within:text-sky-600'}`} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services or tech..."
                className="w-full pl-10 pr-9 py-2.5 bg-white hover:bg-slate-50/80 focus:bg-white border border-slate-200 hover:border-slate-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all outline-none shadow-2xs font-medium"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="py-12 sm:py-16">
        <div className="studio-container">

          {filteredServices.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 max-w-lg mx-auto">
              <Search className="w-8 h-8 text-slate-400 mx-auto mb-3" />
              <h3 className="font-display font-bold text-lg text-slate-900">No matching services found</h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">Try adjusting your search terms or select "All Services".</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-sky-600 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {filteredServices.map((service, index) => {
                const Icon = iconMap[service.number] || Globe;
                const categoryName = categoryMap[service.number];

                return (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="block h-full cursor-pointer no-underline text-inherit group reveal-init"
                    style={{ transitionDelay: `${(index % 6) * 75}ms` }}
                    data-reveal
                  >
                    <div className="studio-card h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs group-hover:shadow-xl group-hover:border-sky-300 transition-all duration-300">
                      <div>
                        {/* Card Top: Number + Category Tag + Animated Icon */}
                        <div className="flex items-center justify-between gap-3 mb-5">
                          <div className="flex items-center gap-2.5">
                            <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">
                              {service.number}
                            </span>
                            <span className="text-[11px] font-mono font-medium text-sky-700 bg-sky-50 border border-sky-200/70 px-2.5 py-1 rounded-md">
                              {categoryName}
                            </span>
                          </div>

                          <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-700 flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:bg-slate-950 group-hover:border-slate-950 group-hover:text-sky-400 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_8px_20px_rgba(2,132,199,0.22)] active:scale-90 active:rotate-0">
                            <Icon className="w-5 h-5 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3 group-active:scale-95" />
                          </div>
                        </div>

                        {/* Title with text fade */}
                        <h3 className="font-display font-bold text-xl text-slate-950 mb-2.5 leading-snug group-hover:text-sky-700 transition-colors text-fade-in">
                          {service.title}
                        </h3>

                        {/* Short Description with text fade */}
                        <p className="text-slate-600 text-sm leading-relaxed mb-5 text-fade-in stagger-1">
                          {service.shortDescription}
                        </p>

                        {/* Who This Is Best For Box */}
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 mb-5">
                          <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 mb-1">
                            <Zap className="w-3.5 h-3.5 text-sky-600" />
                            <span>Who This Is Best For</span>
                          </div>
                          <p className="text-xs text-slate-700 leading-normal font-medium">
                            {service.idealFor}
                          </p>
                        </div>

                        {/* Key Deliverables (Clean 3 bullets) */}
                        <div className="space-y-2 mb-5">
                          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                            Included Deliverables:
                          </div>
                          <ul className="space-y-1.5">
                            {service.deliverables.slice(0, 3).map((del, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="leading-snug">{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {service.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Actions Footer */}
                      <div className="pt-4 border-t border-slate-100">
                        <div className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 group-hover:bg-sky-600 text-white text-xs font-semibold transition-all shadow-xs">
                          <span>View Full Service & Deliverables</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>

                    </div>
                  </Link>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* 4. HOW WE PARTNER / ENGAGEMENT MODELS */}
      <section className="py-14 sm:py-18 bg-white border-y border-slate-200">
        <div className="studio-container">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-mono text-slate-700 font-semibold mb-3">
              <span>FLEXIBLE ENGAGEMENT</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-slate-950">
              Ways We Can Work Together
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Clear expectations, honest timelines, and zero surprises. Pick the way you want to work with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Model 1 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-200 text-sky-700 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-sky-700 font-bold">Model 01</div>
                <h3 className="font-display font-bold text-lg text-slate-950 mt-1 mb-2">
                  Fixed-Scope Project
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Best for websites, redesigns, and MVPs. We agree on a fixed price and timeline, share a live link to test every week, and you only approve and pay as milestones are completed.
                </p>
              </div>

            </div>

            {/* Model 2 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900 text-white shadow-lg border border-slate-800 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-sky-300 flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">Model 02 • Most Popular</div>
                <h3 className="font-display font-bold text-lg text-white mt-1 mb-2">
                  Full Product Build
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  From initial idea to live launch. We handle UI design, database setup, frontend, backend, payments, and deployment — with direct WhatsApp/Slack access to your developer.
                </p>
              </div>

            </div>

            {/* Model 3 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Model 03</div>
                <h3 className="font-display font-bold text-lg text-slate-950 mt-1 mb-2">
                  Monthly Retainer & Support
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  For live websites and web apps that need a reliable developer on call. We build new features, run speed and security updates, and fix issues quickly without the cost of hiring full-time.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <BottomCtaSection
        title="Ready to Build Your Next Digital Product?"
        description="Tell us about your project requirements, timeline, and goals. We'll analyze your specifications and provide a realistic milestone breakdown."
        primaryBtnText="Start a Technical Conversation"
        primaryBtnLink="/contact"
        secondaryBtnText="Explore Case Studies"
        secondaryBtnLink="/case-studies"
      />

    </div>
  );
}
