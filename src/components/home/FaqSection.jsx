import React, { useState } from 'react';
import { ChevronDown, MessageSquare, ArrowUpRight, HelpCircle } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { faqs } from '../../data/faqs';
import { Link } from 'react-router-dom';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-20 bg-[#f8fafc] border-b border-slate-200">
      <div className="studio-container">
        <SectionHeader
          label="Transparency & Clarity"
          title="Frequently Asked Questions"
          subtitle="Direct answers to common questions about timelines, workflows, code ownership, and how we collaborate."
        />

        <div className="w-full">
          {/* FAQ Accordion List */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? 'bg-white border-sky-200 shadow-sm'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300'
                    }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${isOpen
                        ? 'bg-sky-50 border-sky-200 text-sky-600 rotate-180'
                        : 'bg-slate-50 border-slate-200 text-slate-400'
                        }`}
                    >
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </button>

                  {/* Smooth CSS Grid Accordion Collapse/Expand */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100">
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
