import React from 'react';
import ContactForm from '../components/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16 md:py-24 bg-blueprint min-h-screen">
      <div className="studio-container">

        {/* Page Header (Centered) */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-sky-700 mb-4 shadow-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>CONTACT · ANEHIT TECH</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight mb-4 leading-tight">
            Let's discuss your project.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Have an idea or need custom software development? Send a short inquiry below or reach out directly. You'll speak directly with our team.
          </p>
        </div>

        {/* Contact Form & Direct Channels */}
        <ContactForm />

      </div>
    </div>
  );
}
