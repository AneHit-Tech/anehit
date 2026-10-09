import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ArrowUpRight, 
  Mail, 
  Copy, 
  Check 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';

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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
      
      {/* Left Column: Spacious Form */}
      <div className="lg:col-span-7">
        <div className="studio-card p-8 sm:p-10 md:p-12 border-slate-200 bg-white shadow-sm">
          {submitted ? (
            <div className="py-12 px-4 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-2xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950">
                Inquiry Received
              </h3>
              <p className="text-slate-600 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. One of our engineers will review your message and reply at <strong className="text-slate-900">{formData.email}</strong> shortly.
              </p>
              <div className="pt-3">
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
                  className="px-7 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-mono font-bold transition-colors cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7 sm:space-y-8" noValidate>
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-mono text-slate-700 mb-2.5 uppercase tracking-wider font-bold">
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
                    className={`w-full px-5 py-4 sm:py-4.5 rounded-2xl bg-slate-50/70 border text-slate-900 text-base sm:text-lg focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all placeholder:text-slate-400 ${
                      errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300 hover:border-slate-400'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-2 text-xs sm:text-sm text-red-600 flex items-center gap-1.5 font-mono">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-mono text-slate-700 mb-2.5 uppercase tracking-wider font-bold">
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
                    className={`w-full px-5 py-4 sm:py-4.5 rounded-2xl bg-slate-50/70 border text-slate-900 text-base sm:text-lg focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all placeholder:text-slate-400 ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300 hover:border-slate-400'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-xs sm:text-sm text-red-600 flex items-center gap-1.5 font-mono">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Project Type Selectable Pills */}
              <div>
                <label className="block text-xs sm:text-sm font-mono text-slate-700 mb-3 uppercase tracking-wider font-bold">
                  What are you looking to build?
                </label>
                <div className="flex flex-wrap gap-3">
                  {projectTypes.map((type) => {
                    const isSelected = formData.projectType === type;
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-5 sm:px-6 py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
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
                <label htmlFor="message" className="block text-xs sm:text-sm font-mono text-slate-700 mb-2.5 uppercase tracking-wider font-bold">
                  Project Details <span className="text-sky-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: null });
                  }}
                  placeholder="Describe your project, timeline, features you need, or questions you have..."
                  className={`w-full px-5 py-4 sm:py-4.5 rounded-2xl bg-slate-50/70 border text-slate-900 text-base sm:text-lg focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all placeholder:text-slate-400 resize-y ${
                    errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300 hover:border-slate-400'
                  }`}
                />
                {errors.message && (
                  <p className="mt-2 text-xs sm:text-sm text-red-600 flex items-center gap-1.5 font-mono">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 sm:px-11 py-4.5 sm:py-5 rounded-2xl bg-slate-950 hover:bg-sky-600 text-white font-bold text-base sm:text-lg transition-all shadow-md active:scale-98 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>

            </form>
          )}
        </div>
      </div>

      {/* Right Column: Direct Contact Info (Spacious & Clean) */}
      <div className="lg:col-span-5 space-y-6">
        <div className="studio-card p-8 sm:p-10 border-slate-200 bg-white space-y-6 shadow-sm">
          <div>
            <span className="text-xs sm:text-sm font-mono text-sky-700 uppercase tracking-wider font-bold block mb-2">
              Direct Contact
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950">
              Prefer to email or connect directly?
            </h3>
            <p className="text-base text-slate-600 mt-2.5 leading-relaxed">
              Reach out directly to our engineering team without waiting for a sales call.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {/* Email with 1-click copy */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between group">
              <a 
                href="mailto:anehittech@gmail.com" 
                className="flex items-center gap-4 hover:text-sky-600 transition-colors flex-grow"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-700 shadow-2xs shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase font-semibold">Email Directly</div>
                  <div className="text-base sm:text-lg font-mono text-slate-900 font-bold group-hover:text-sky-600">
                    anehittech@gmail.com
                  </div>
                </div>
              </a>
              <button 
                type="button"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                className="p-3 text-slate-400 hover:text-slate-700 transition-colors rounded-xl hover:bg-slate-200/60 cursor-pointer shrink-0 ml-2"
              >
                {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-white flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-700 shadow-2xs shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase font-semibold">LinkedIn</div>
                  <div className="text-base sm:text-lg font-mono text-slate-900 font-semibold group-hover:text-sky-600">
                    Connect on LinkedIn
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-sky-600" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-white flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-700 shadow-2xs shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase font-semibold">GitHub</div>
                  <div className="text-base sm:text-lg font-mono text-slate-900 font-semibold group-hover:text-sky-600">
                    View Open Source Code
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-sky-600" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
