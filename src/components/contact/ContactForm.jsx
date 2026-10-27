import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Mail, 
  Copy, 
  Check,
  Loader2,
  Clock,
  ShieldCheck 
} from 'lucide-react';

// EmailJS credentials with environment variable support & default fallback
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_8lnzl5j';
const EMAILJS_TEAM_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEAM_TEMPLATE_ID || 'template_rdr2nzv';
const EMAILJS_CLIENT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID || 'template_suki9lj';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'uW1MrfGu1nMCf2qQU';

// Web3Forms configuration (reliable direct-to-inbox delivery)
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '001b02c8-18fb-472e-a85f-f7d6da736b77';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Application',
    message: '',
    hp: '' // anti-spam honeypot
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check (silently trap automated spam bots, never trigger on normal users)
    if (formData.hp && formData.hp.trim().length > 0) {
      console.warn('Spam trap triggered, simulating submission.');
      setSubmitted(true);
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitError(null);

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    // Comprehensive template parameters matching any EmailJS placeholder naming convention
    const templateParams = {
      name: trimmedName,
      from_name: trimmedName,
      user_name: trimmedName,
      sender_name: trimmedName,

      email: trimmedEmail,
      from_email: trimmedEmail,
      user_email: trimmedEmail,
      reply_to: trimmedEmail,
      to_email: trimmedEmail,

      project_type: formData.projectType,
      projectType: formData.projectType,
      subject: `New Inquiry [${formData.projectType}] from ${trimmedName}`,

      message: trimmedMessage,
      user_message: trimmedMessage,
      submitted_at: new Date().toLocaleString()
    };

    let deliveredSuccessfully = false;

    // 1. Primary Flow: Dispatch via EmailJS (1 Team Notification + 1 Client Confirmation)
    try {
      const emailjsHeaders = {
        'Content-Type': 'application/json'
      };

      // 1a. Team Notification Email (Only 1 email to company)
      const teamResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: emailjsHeaders,
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEAM_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: templateParams
        })
      });

      if (teamResponse.ok) {
        deliveredSuccessfully = true;
      } else {
        const errorText = await teamResponse.text().catch(() => '');
        console.warn('EmailJS team notification status:', teamResponse.status, errorText);
      }

      // 1b. Client Confirmation Auto-Reply Email
      try {
        await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: emailjsHeaders,
          body: JSON.stringify({
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_CLIENT_TEMPLATE_ID,
            user_id: EMAILJS_PUBLIC_KEY,
            template_params: templateParams
          })
        });
      } catch (clientErr) {
        console.warn('Client confirmation delivery notice:', clientErr);
      }
    } catch (emailjsErr) {
      console.warn('EmailJS dispatch notice:', emailjsErr);
    }

    // 2. Fallback Flow: ONLY if EmailJS failed, trigger Web3Forms as emergency backup
    if (!deliveredSuccessfully && WEB3FORMS_ACCESS_KEY) {
      try {
        console.info('EmailJS unavailable, invoking backup channel...');
        const web3Response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: trimmedName,
            email: trimmedEmail,
            subject: `New Lead: ${formData.projectType} from ${trimmedName}`,
            project_type: formData.projectType,
            message: trimmedMessage,
            from_name: `${trimmedName} (via AneHit Site)`
          })
        });

        const web3Data = await web3Response.json().catch(() => null);
        if (web3Response.ok && (!web3Data || web3Data.success !== false)) {
          deliveredSuccessfully = true;
        } else {
          console.warn('Web3Forms backup response:', web3Data);
        }
      } catch (web3Err) {
        console.warn('Web3Forms backup notice:', web3Err);
      }
    }

    if (deliveredSuccessfully) {
      setSubmitted(true);
      setSubmitError(null);
    } else {
      setSubmitError(
        'Unable to send your inquiry at this moment. Please check your internet connection or email us directly at anehittech@gmail.com.'
      );
    }

    setIsSubmitting(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
      
      {/* Left Column: Spacious Form */}
      <div className="lg:col-span-7">
        <div className="studio-card p-5 sm:p-8 md:p-10 lg:p-12 border-slate-200 bg-white shadow-sm">
          {submitted ? (
            <div className="py-12 px-4 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-2xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950">
                Inquiry Received
              </h3>
              <p className="text-slate-600 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. One of our engineers will review your message and reply at <strong className="text-slate-900">{formData.email}</strong> shortly. A confirmation has also been sent to your email.
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setSubmitError(null);
                    setFormData({
                      name: '',
                      email: '',
                      projectType: 'Web Application',
                      message: '',
                      hp: ''
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
              
              {/* Anti-spam honeypot (off-screen, never filled by normal users) */}
              <div 
                style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0, overflow: 'hidden' }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="_hp_verification"
                  tabIndex={-1}
                  autoComplete="new-password"
                  value={formData.hp}
                  onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                />
              </div>

              {/* Error Alert Banner */}
              {submitError && (
                <div 
                  role="alert"
                  className="p-4 sm:p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3.5"
                >
                  <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5 text-rose-600" />
                  <div className="space-y-1 text-sm sm:text-base">
                    <p className="font-mono font-bold text-xs uppercase tracking-wider text-rose-950">
                      Message Delivery Issue
                    </p>
                    <p className="text-rose-700 leading-relaxed">
                      {submitError}
                    </p>
                  </div>
                </div>
              )}

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-mono text-slate-700 mb-2.5 uppercase tracking-wider font-bold">
                    Your Name <span className="text-sky-600">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    placeholder="Alex Morgan"
                    className={`w-full px-5 py-4 sm:py-4.5 rounded-2xl bg-slate-50/70 border text-slate-900 text-base sm:text-lg focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all placeholder:text-slate-400 disabled:opacity-60 disabled:cursor-not-allowed ${
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
                    name="email"
                    type="email"
                    autoComplete="email"
                    disabled={isSubmitting}
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
                    className={`w-full px-5 py-4 sm:py-4.5 rounded-2xl bg-slate-50/70 border text-slate-900 text-base sm:text-lg focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all placeholder:text-slate-400 disabled:opacity-60 disabled:cursor-not-allowed ${
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
                        disabled={isSubmitting}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-5 sm:px-6 py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold transition-all cursor-pointer border disabled:opacity-60 disabled:cursor-not-allowed ${
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
                  name="message"
                  rows={5}
                  disabled={isSubmitting}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: null });
                  }}
                  placeholder="Describe your project, timeline, features you need, or questions you have..."
                  className={`w-full px-5 py-4 sm:py-4.5 rounded-2xl bg-slate-50/70 border text-slate-900 text-base sm:text-lg focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all placeholder:text-slate-400 resize-y disabled:opacity-60 disabled:cursor-not-allowed ${
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
              <div className="pt-1 sm:pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-9 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm hover:shadow-md ${
                    isSubmitting
                      ? 'bg-slate-700 text-slate-200 cursor-not-allowed'
                      : 'bg-slate-950 hover:bg-sky-600 text-white active:scale-[0.99] cursor-pointer'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin text-sky-400" />
                      <span>Sending inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>

      {/* Right Column: Direct Contact Info (Spacious & Clean) */}
      <div className="lg:col-span-5 space-y-6">
        <div className="studio-card p-5 sm:p-8 md:p-10 border-slate-200 bg-white space-y-5 sm:space-y-6 shadow-sm overflow-hidden">
          <div>
            <span className="text-xs sm:text-sm font-mono text-sky-700 uppercase tracking-wider font-bold block mb-1.5 sm:mb-2">
              Direct Contact
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-slate-950">
              Prefer to email or connect directly?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Reach out directly to our engineering team without waiting for a sales call.
            </p>
          </div>

          <div className="space-y-3.5 pt-1">
            {/* Email with 1-click copy - guaranteed inside boundary on all screens */}
            <div className="p-3.5 sm:p-4.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2.5 sm:gap-3 group overflow-hidden">
              <a 
                href="mailto:anehittech@gmail.com" 
                className="flex items-center gap-3 sm:gap-3.5 hover:text-sky-600 transition-colors min-w-0 flex-1"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-700 shadow-2xs shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase font-semibold tracking-wider">
                    Email Directly
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-mono text-slate-900 font-bold group-hover:text-sky-600 truncate">
                    anehittech@gmail.com
                  </div>
                </div>
              </a>
              <button 
                type="button"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                aria-label="Copy email address"
                className={`p-2 sm:p-2.5 rounded-lg sm:rounded-xl transition-all cursor-pointer shrink-0 border ${
                  copied 
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-600' 
                    : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-400 hover:text-slate-700 shadow-2xs'
                }`}
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Quick Guarantees & Direct Engineer Highlights */}
            <div className="pt-2 border-t border-slate-100 space-y-2.5">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-100 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900 block font-sans">Fast Response Guarantee</span>
                  <span>We review incoming project briefs and reply within 24 hours.</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-100 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900 block font-sans">Direct Engineer Access</span>
                  <span>Talk directly with architects and developers, no pushy sales pitches.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
