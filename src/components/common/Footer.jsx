import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('anehittech@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-[#070b15] border-t border-slate-850 text-slate-300 pt-16 pb-12">
      <div className="studio-container">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80">

          {/* Brand & Direct Contact Column */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-5">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 flex items-center justify-center shrink-0 shadow-md group-hover:border-sky-500 transition-colors">
                <img
                  src="/anehit-logo.png"
                  alt="AneHit Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-xl text-white">AneHit</span>
                  <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-950/80 border border-sky-800 px-1.5 py-0.5 rounded leading-none">
                    TECH
                  </span>
                </div>
                <span className="text-xs text-slate-400 tracking-wider uppercase font-semibold block mt-0.5">
                  Ideas to Impact
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm sm:text-base max-w-md leading-relaxed">
              Building modern digital products for businesses, startups, and ideas. A focused two-person software studio specializing in web applications, scalable backends, and AI solutions.
            </p>

            {/* Direct Email Card with 1-click Copy */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 transition-all flex items-center justify-between gap-3 max-w-md group">
              <a
                href="mailto:anehittech@gmail.com"
                className="flex items-center gap-3 min-w-0 flex-1 hover:text-sky-400 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-950/70 border border-sky-800/70 text-sky-400 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-sky-900/70">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Direct Email
                  </span>
                  <span className="text-sm sm:text-base font-mono font-bold text-white group-hover:text-sky-400 truncate block">
                    anehittech@gmail.com
                  </span>
                </div>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                className="p-2.5 rounded-xl bg-slate-800/70 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-4">
            <h4 className="text-xs sm:text-sm uppercase tracking-wider text-slate-400 font-bold font-mono">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors block py-0.5">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-slate-400 hover:text-white transition-colors block py-0.5">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-slate-400 hover:text-white transition-colors block py-0.5">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors block py-0.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors block py-0.5">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-xs sm:text-sm uppercase tracking-wider text-slate-400 font-bold font-mono">
              Capabilities
            </h4>
            <ul className="space-y-3 text-sm sm:text-base text-slate-400">
              <li>
                <Link to="/services" className="hover:text-white transition-colors block py-0.5">
                  Full-Stack Apps
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors block py-0.5">
                  AI Integrations
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors block py-0.5">
                  API Engineering
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors block py-0.5">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors block py-0.5">
                  Cloud Deployment
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} AneHit Tech. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
