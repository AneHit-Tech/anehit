import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  Clock, 
  Copy, 
  Check 
} from 'lucide-react';
import { WhatsAppIcon } from '../common/BrandIcons';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Application',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const projectTypes = [
    'Web Application',
    'Business Website',
    'AI & Automation',
    'Mobile App',
    'Other'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('anehittech@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateEmail = (email) => {
    const trimmed = (email || '').trim();
    if (!trimmed) {
      return 'Please enter your email address';
    }
    
    // Check @ structure
    if (!trimmed.includes('@')) {
      return "Email must include an '@' symbol";
    }
    
    const parts = trimmed.split('@');
    if (parts.length !== 2) {
      return "Email cannot have multiple '@' symbols";
    }
    
    const [local, domain] = parts;
    if (!local) {
      return "Please enter the part before '@'";
    }
    if (local.startsWith('.') || local.endsWith('.') || local.includes('..')) {
      return 'Email username cannot start, end, or have consecutive dots';
    }
    
    if (!domain) {
      return "Please include a domain after '@' (e.g. company.com)";
    }
    if (!domain.includes('.')) {
      return 'Domain must include an extension (e.g. .com, .io)';
    }
    if (domain.startsWith('.') || domain.endsWith('.') || domain.includes('..')) {
      return 'Domain cannot start, end, or contain consecutive dots';
    }
    
    const domainParts = domain.split('.');
    const tld = domainParts[domainParts.length - 1];
    if (tld.length < 2) {
      return 'Domain extension must be at least 2 letters (e.g. .com, .in)';
    }
    if (!/^[a-zA-Z]+$/.test(tld)) {
      return 'Domain extension can only contain letters';
    }
    
    // Standard RFC 5322 regex check
    const rfcRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!rfcRegex.test(trimmed)) {
      return 'Please enter a valid email address (e.g. alex@company.com)';
    }
    
    return null;
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    
    const emailError = validateEmail(formData.email);
    if (emailError) errs.email = emailError;

    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your project';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please write at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
      
      {/* Left Column: Form */}
      <div className="lg:col-span-7">
        <div className="studio-card p-6 sm:p-8 border border-slate-200/80 bg-white rounded-2xl shadow-xs">
          {submitted ? (
            <div className="py-8 sm:py-10 px-4 text-center space-y-3.5">
              <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-2xs">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-950">
                Inquiry Received
              </h3>
              <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. One of our engineers will review your message and reply at <strong className="text-slate-900">{formData.email}</strong> shortly.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      projectType: 'Web Application',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-mono font-semibold transition-colors cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-700 mb-1.5 uppercase tracking-wider font-semibold">
                    Your Name <span className="text-sky-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    placeholder="Alex Morgan"
                    className={`w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50/70 border text-slate-900 text-sm sm:text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400 ${
                      errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300 hover:border-slate-400'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-700 mb-1.5 uppercase tracking-wider font-semibold">
                    Email Address <span className="text-sky-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      const val = e.target.value;
                      setFormData({ ...formData, email: val });
                      if (errors.email) {
                        const err = validateEmail(val);
                        setErrors({ ...errors, email: err });
                      }
                    }}
                    onBlur={() => {
                      if (formData.email.trim()) {
                        const err = validateEmail(formData.email);
                        if (err) setErrors(prev => ({ ...prev, email: err }));
                      }
                    }}
                    placeholder="alex@company.com"
                    className={`w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50/70 border text-slate-900 text-sm sm:text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400 ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300 hover:border-slate-400'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Project Type Selectable Pills */}
              <div>
                <label className="block text-xs font-mono text-slate-700 mb-2 uppercase tracking-wider font-semibold">
                  What are you looking to build?
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => {
                    const isSelected = formData.projectType === type;
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-3.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-slate-950 text-white border-slate-950 shadow-2xs'
                            : 'bg-slate-50 hover:bg-slate-100 hover:border-slate-300 border-slate-200 text-slate-700'
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message Details */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-700 mb-1.5 uppercase tracking-wider font-semibold">
                  Project Details <span className="text-sky-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: null });
                  }}
                  placeholder="Describe your project, timeline, features you need, or questions you have..."
                  className={`w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50/70 border text-slate-900 text-sm sm:text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400 resize-y ${
                    errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300 hover:border-slate-400'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl bg-slate-950 hover:bg-sky-600 text-white font-semibold text-sm sm:text-base transition-all shadow-sm active:scale-98 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>
      </div>

      {/* Right Column: Direct Company Channels */}
      <div className="lg:col-span-5 space-y-5">
        <div className="studio-card p-6 sm:p-7 border border-slate-200/80 bg-white rounded-2xl space-y-5 shadow-xs">
          <div>
            <span className="text-xs font-mono text-sky-700 uppercase tracking-wider font-bold block mb-1.5">
              Direct Channels
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-950">
              Prefer to connect directly?
            </h3>
            <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
              Reach out directly to our engineering team for instant inquiries or project estimates.
            </p>
          </div>

          <div className="space-y-3 pt-1">
            {/* Email with 1-click copy */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between group hover:border-slate-300 transition-all">
              <a 
                href="mailto:anehittech@gmail.com" 
                className="flex items-center gap-3 hover:text-sky-600 transition-colors flex-grow min-w-0"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sky-700 shadow-2xs shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Official Email</div>
                  <div className="text-sm sm:text-base font-mono text-slate-900 font-bold group-hover:text-sky-600 truncate">
                    anehittech@gmail.com
                  </div>
                </div>
              </a>
              <button 
                type="button"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                className="p-2 text-slate-400 hover:text-slate-700 transition-colors rounded-lg hover:bg-slate-200/60 cursor-pointer shrink-0 ml-1.5"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* WhatsApp Business Chat */}
            <a
              href="https://wa.me/447810263673?text=Hello%20AneHit%20Tech,%20I%20would%20like%20to%20discuss%20a%20software%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 sm:p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/80 hover:border-emerald-300 hover:bg-emerald-50 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-2xs shrink-0">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-emerald-700 uppercase font-semibold">WhatsApp Business</div>
                  <div className="text-sm sm:text-base font-mono text-slate-900 font-bold group-hover:text-emerald-700 truncate">
                    +44 7810 263673
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>
          </div>

          {/* Quick Business Information / Availability Note */}
          <div className="pt-3 border-t border-slate-150 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
            <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
              <Clock className="w-3.5 h-3.5 text-sky-600 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-slate-800 block">Fast Response</span>
                <span>Replies within 24 hours</span>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
              <MapPin className="w-3.5 h-3.5 text-sky-600 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-slate-800 block">Location</span>
                <span>Gujarat, India • Remote Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
