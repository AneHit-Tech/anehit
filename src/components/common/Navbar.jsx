import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  ChevronRight, 
  Home, 
  Layers, 
  Briefcase, 
  FileText, 
  Users, 
  Mail, 
  MessageSquare, 
  ExternalLink,
  ShieldCheck,
  Zap,
  Cpu
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: Home, num: '01' },
    { name: 'Services', path: '/services', icon: Layers, num: '02' },
    { name: 'Case Studies', path: '/case-studies', icon: Briefcase, num: '03' },
    { name: 'Technology', path: '/technology', icon: Cpu, num: '04' },
    { name: 'About', path: '/about', icon: Users, num: '05' },
    { name: 'Contact', path: '/contact', icon: Mail, num: '06' },
  ];


  // Close menu on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isLinkActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/case-studies') return location.pathname.startsWith('/case-studies') || location.pathname.startsWith('/case-study') || location.pathname.startsWith('/work');
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 transition-all shadow-xs">
        <div className="studio-container flex items-center justify-between h-18 sm:h-20">
          
          {/* Brand Logo with Official AneHit Image */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="AneHit Homepage"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-slate-200 bg-slate-950 flex items-center justify-center shrink-0 shadow-sm group-hover:border-sky-500 transition-colors">
              <img 
                src="/anehit-logo.png" 
                alt="AneHit Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-xl sm:text-2xl text-slate-950 tracking-tight leading-none group-hover:text-sky-600 transition-colors">
                  AneHit
                </span>
                <span className="text-[10px] font-mono font-bold text-sky-700 bg-sky-50 border border-sky-200 px-1.5 py-0.5 rounded leading-none">
                  TECH
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-500 tracking-wider uppercase font-semibold mt-0.5">
                Ideas to Impact
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-xl text-sm sm:text-[15px] font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-sky-700 bg-sky-50/90 border border-sky-200/80 font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-sky-600 text-white font-semibold text-sm sm:text-[15px] tracking-wide transition-all shadow-sm active:scale-95"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <Link
              to="/contact"
              className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-sky-600 text-white text-sm font-semibold sm:inline-flex hidden items-center gap-1.5 transition-colors"
            >
              <span>Hire Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            
            {/* Smooth Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-sky-600 hover:bg-slate-200/70 transition-all duration-200 focus:outline-none cursor-pointer"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Silky-Smooth Animated Mobile Drawer & Backdrop */}
      <div 
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* 1. Backdrop Overlay with smooth opacity and blur transition */}
        <div 
          className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ease-out ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* 2. Solid White Sidebar Drawer with Smooth Spring Deceleration Curve */}
        <aside 
          className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-[101] flex flex-col justify-between transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] transform will-change-transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Top Header */}
          <div className="p-5 border-b border-slate-200/90 flex items-center justify-between bg-gradient-to-r from-slate-50 to-white shrink-0">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-slate-200 bg-slate-950 shrink-0 shadow-xs group-hover:border-sky-500 transition-colors">
                <img 
                  src="/anehit-logo.png" 
                  alt="AneHit Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-lg text-slate-950 group-hover:text-sky-600 transition-colors block">
                    AneHit
                  </span>
                  <span className="text-[10px] font-mono font-bold text-sky-700 bg-sky-50 border border-sky-200 px-1.5 py-0.5 rounded leading-none">
                    TECH
                  </span>
                </div>
                <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold mt-0.5">
                  Ideas to Impact
                </span>
              </div>
            </Link>

            {/* Smooth Rotating Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-200/80 transition-all duration-200 group focus:outline-none cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90" />
            </button>
          </div>

          {/* Drawer Middle: Interactive Navigation Links */}
          <div className="p-5 space-y-2 flex-grow overflow-y-auto bg-white">
            <div className="flex items-center justify-between px-3 py-1.5 mb-2">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                Menu Navigation
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Senior Duo Ready
              </span>
            </div>

            {navLinks.map((link, idx) => {
              const isActive = isLinkActive(link.path);
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ transitionDelay: mobileMenuOpen ? `${idx * 35}ms` : '0ms' }}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 group border ${
                    isActive
                      ? 'bg-sky-50 text-sky-900 border-sky-200 shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-950 border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-sky-600 text-white shadow-2xs' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-800'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-display font-bold text-base tracking-tight">{link.name}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-slate-400 group-hover:text-sky-700 transition-colors font-medium">
                      {link.num}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 ${
                      isActive ? 'text-sky-600' : 'text-slate-300 group-hover:text-slate-500'
                    }`} />
                  </div>
                </Link>
              );
            })}

            {/* Quick Contact Line */}
            <div className="pt-4 mt-4 border-t border-slate-100 space-y-2">
              <div className="px-3 font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                Direct Communication
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/919429219667?text=Hello%20AneHit%20Tech,%20I%20would%20like%20to%20discuss%20a%20software%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-emerald-900 text-xs font-semibold hover:bg-emerald-100 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">WhatsApp</span>
                </a>

                <a
                  href="https://www.upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-sky-50/70 border border-sky-200/80 text-sky-900 text-xs font-semibold hover:bg-sky-100 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span className="truncate">Upwork</span>
                </a>
              </div>
            </div>
          </div>

          {/* Drawer Bottom Action Footer */}
          <div className="p-5 border-t border-slate-200 bg-slate-50/90 shrink-0 space-y-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-950 hover:bg-sky-600 text-white font-display font-bold text-sm transition-all shadow-md active:scale-98"
            >
              <Zap className="w-4 h-4 fill-white stroke-none" />
              <span>Start Project Scope</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 px-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                100% IP Ownership
              </span>
              <span className="text-emerald-700 font-semibold">24h Response SLA</span>
            </div>
          </div>

        </aside>
      </div>
    </>
  );
}
