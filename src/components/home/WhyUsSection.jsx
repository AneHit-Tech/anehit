import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  MessageSquareCode,
  Code2,
  Target,
  ShieldCheck,
  Award,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

export default function WhyUsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  const pillars = [
    {
      id: '01',
      title: 'You Talk Directly to the Developers',
      subtitle: 'No middlemen, no sales reps, and no confusing telephone games.',
      description: 'When you share an idea, request a change, or ask a question, you talk directly with the developers actually writing your code. We listen carefully, answer in plain English, and keep you in the loop every single week.',
      highlight: 'Real People, Direct Communication',
      icon: MessageSquareCode,
      tagColor: 'text-sky-700 bg-sky-50 border-sky-200',
      iconBg: 'bg-sky-500/10 text-sky-600 border-sky-200',
      activeBorder: 'border-sky-300 ring-2 ring-sky-100',
      glow: 'rgba(14, 165, 233, 0.12)',
      deliverables: [
        'Quick replies on WhatsApp, Slack, or email whenever you need us',
        'Regular demos and walkthroughs so you see your product come to life',
        'Honest advice on what will work best for your project and budget'
      ]
    },
    {
      id: '02',
      title: 'Websites & Apps That Just Work',
      subtitle: 'Fast loading, easy to use, and built to last.',
      description: 'We build clean, reliable websites and software that your customers will love using. Everything we create is fast, looks great on both phones and computers, and is built properly so you never have to worry about sudden crashes.',
      highlight: 'Reliable & Easy to Use',
      icon: Code2,
      tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
      activeBorder: 'border-emerald-300 ring-2 ring-emerald-100',
      glow: 'rgba(16, 185, 129, 0.12)',
      deliverables: [
        'Pages that open instantly on mobile and desktop without delays',
        'Clean, organized code that is easy to update whenever you grow',
        'Carefully tested on real screens and devices before we launch'
      ]
    },
    {
      id: '03',
      title: 'Focused on What Actually Helps Your Business',
      subtitle: 'We build features that bring you real visitors, leads, and sales.',
      description: 'We don’t overcomplicate things with unnecessary tech buzzwords or features you won’t use. Instead, we look at your goals and create clean user journeys that make it effortless for your visitors to become paying customers.',
      highlight: 'Practical & Goal-Driven',
      icon: Target,
      tagColor: 'text-amber-800 bg-amber-50 border-amber-200',
      iconBg: 'bg-amber-500/10 text-amber-600 border-amber-200',
      activeBorder: 'border-amber-300 ring-2 ring-amber-100',
      glow: 'rgba(245, 158, 11, 0.12)',
      deliverables: [
        'Simple, welcoming design that guides visitors to take action',
        'A practical plan to get your project launched without delays',
        'Built-in analytics so you can easily see how your site is performing'
      ]
    },
    {
      id: '04',
      title: 'We Handle Everything From Start to Finish',
      subtitle: 'Design, development, testing, and full launch support.',
      description: 'You won’t have to worry about confusing technical setups, domain pointing, or server settings. We take care of the entire process from the first sketch to the live website, and we stay available to help even after launch.',
      highlight: 'Complete Hands-on Care',
      icon: ShieldCheck,
      tagColor: 'text-purple-700 bg-purple-50 border-purple-200',
      iconBg: 'bg-purple-500/10 text-purple-600 border-purple-200',
      activeBorder: 'border-purple-300 ring-2 ring-purple-100',
      glow: 'rgba(168, 85, 247, 0.12)',
      deliverables: [
        'Full setup including domain, hosting, email, and security certificates',
        'A private preview link where you can test everything before launch',
        'Ongoing support so you always have someone to call if you need help'
      ]
    },
    {
      id: '05',
      title: 'Honest Pricing & You Own 100% of the Work',
      subtitle: 'Fixed rates, no hidden fees, and everything belongs to you.',
      description: 'We believe in fairness and trust. You get clear, upfront pricing with zero surprise charges. Once a milestone is completed, all code, designs, and credentials belong entirely to you—with no lock-in and no strings attached.',
      highlight: '100% Yours. No Hidden Fees.',
      icon: Award,
      tagColor: 'text-rose-700 bg-rose-50 border-rose-200',
      iconBg: 'bg-rose-500/10 text-rose-600 border-rose-200',
      activeBorder: 'border-rose-300 ring-2 ring-rose-100',
      glow: 'rgba(244, 63, 94, 0.12)',
      deliverables: [
        'Clear, fixed project quotes agreed upon before any work begins',
        'Full ownership of all files, code repositories, and accounts',
        'Milestone-based progress so you only pay as work is approved'
      ]
    }
  ];

  const total = pillars.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay functionality with pause on hover
  useEffect(() => {
    if (isPaused || isDragging) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, isDragging, nextSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - dragStartX;
    // Dampen drag effect
    setDragOffset(diff * 0.7);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -50) {
      nextSlide();
    } else if (dragOffset > 50) {
      prevSlide();
    }
    setDragOffset(0);
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX;
    setDragOffset(diff * 0.6);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -60) {
      nextSlide();
    } else if (dragOffset > 60) {
      prevSlide();
    }
    setDragOffset(0);
  };

  const currentPillar = pillars[currentIndex];
  const Icon = currentPillar.icon;

  return (
    <section
      id="why-us"
      className="py-16 sm:py-20 md:py-20 bg-white border-b border-slate-200 relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        if (isDragging) handleMouseUp();
      }}
    >
      <div className="studio-container">

        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <SectionHeader
            label="Why Work With Us"
            title="A Better, Simpler Way to Build Software"
            subtitle="We are a friendly, experienced development team that cares about your product as much as you do. Clear communication, honest pricing, and reliable results."
            className="mb-0"
          />

          {/* Swipe Card Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <span className="font-mono text-xs sm:text-sm text-slate-500 font-bold px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
              <span className="text-slate-900">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="text-slate-400 mx-1">/</span>
              <span>{String(total).padStart(2, '0')}</span>
            </span>

            <button
              onClick={prevSlide}
              aria-label="Previous Advantage Card"
              className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Advantage Card"
              className="p-3 rounded-xl bg-slate-900 border border-slate-900 text-white hover:bg-sky-600 hover:border-sky-600 transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swipe Card Stage with Overflow Hidden - with vertical padding to prevent border/shadow clipping */}
        <div
          ref={trackRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y py-4 px-1.5 -my-4 -mx-1.5"
        >
          {/* Multi-Card Sliding Track */}
          <div
            className="flex items-stretch will-change-transform"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
              transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              const isActive = idx === currentIndex;

              return (
                <div
                  key={pillar.id}
                  className="w-full shrink-0 flex-none px-1.5 sm:px-2 box-border transition-all duration-300"
                  style={{
                    opacity: isActive ? 1 : 0.4,
                    transform: isActive ? 'scale(1)' : 'scale(0.985)',
                    transition: 'opacity 0.4s ease, transform 0.4s ease'
                  }}
                >
                  <div className="p-6 sm:p-10 md:p-12 bg-white border border-slate-200 hover:border-slate-300 rounded-2xl sm:rounded-3xl relative overflow-hidden h-full flex flex-col justify-between">

                    {/* Subtle Ambient Background Radial Tint */}
                    <div
                      className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-700 opacity-60"
                      style={{ background: pillar.glow }}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 flex-grow">

                      {/* Left Narrative Column */}
                      <div className="lg:col-span-7 space-y-5">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-mono text-xs sm:text-sm font-bold px-3 py-1 rounded-lg border bg-slate-900 text-white shadow-xs">
                            BENEFIT {pillar.id}
                          </span>
                          <span className={`text-xs sm:text-sm font-bold px-3 py-1 rounded-lg border ${pillar.tagColor}`}>
                            {pillar.highlight}
                          </span>
                        </div>

                        <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-slate-950 tracking-tight leading-tight">
                          {pillar.title}
                        </h3>

                        <p className="text-sky-800 text-base sm:text-lg font-semibold">
                          {pillar.subtitle}
                        </p>

                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                          {pillar.description}
                        </p>

                        <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-500">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Swipe or click arrows to explore all 5 benefits</span>
                        </div>
                      </div>

                      {/* Right Concrete Deliverables Card */}
                      <div className="lg:col-span-5 bg-white backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
                        <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${pillar.iconBg}`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="font-display font-bold text-base text-slate-950">
                              What You Get
                            </div>
                            <div className="text-xs text-slate-500 font-mono">
                              OUR PROMISE
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3 pt-1">
                          {pillar.deliverables.map((item, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                              <span className="text-sm sm:text-[15px] text-slate-700 leading-snug font-medium">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                          <span>PARTNERSHIP</span>
                          <span className="text-sky-700 font-bold">DIRECT DEVELOPER ACCESS</span>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Minimalist Slide Indicators */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2">
          {pillars.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex
                  ? 'w-8 bg-slate-950 shadow-xs'
                  : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
