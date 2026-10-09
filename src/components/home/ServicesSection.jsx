import React from 'react';
import { Link } from 'react-router-dom';
import {
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
  ArrowUpRight
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { services } from '../../data/services';
import InteractiveCard from '../ui/InteractiveCard';

export default function ServicesSection() {


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

  // Show 6 featured services on homepage
  const displayedServices = services.slice(0, 6);

  return (
    <section id="services" className="py-14 sm:py-18 md:py-20 bg-[#f8fafc] border-b border-slate-200">
      <div className="studio-container">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <SectionHeader
            label="Services & Engineering"
            title="What We Build"
            subtitle="Specialized software development services engineered for business growth, performance, and scalability."
            className="mb-0"
          />

          <Link
            to="/services"
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-sky-300 hover:bg-sky-50/50 text-xs font-mono font-semibold text-slate-700 hover:text-sky-700 transition-all shadow-2xs"
          >
            <span>View All Services ({services.length})</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Dynamic Services Grid (3 cards collapsed, 11 expanded) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
          {displayedServices.map((service, index) => {
            const Icon = iconMap[service.number] || Code2;
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="block h-full cursor-pointer no-underline text-inherit group reveal-init"
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
              >
                <InteractiveCard
                  className="studio-card h-full p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-white via-slate-50/40 to-white border-slate-200/90 group-hover:border-sky-300 shadow-sm group-hover:shadow-xl transition-all duration-300"
                >
                  {/* Top Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-sky-600 transition-all duration-300 shadow-2xs group-hover:bg-slate-950 group-hover:border-slate-950 group-hover:text-sky-400 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_8px_20px_rgba(2,132,199,0.22)] active:scale-90 active:rotate-0">
                        <Icon className="w-5 h-5 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3 group-active:scale-95" />
                      </div>
                      <span className="font-mono text-xs text-slate-400 group-hover:text-sky-700 transition-colors font-medium">
                        SERVICE {service.number}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-2.5 group-hover:text-sky-700 transition-colors text-fade-in">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6 text-fade-in stagger-1">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Bottom Deliverables & CTA */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {service.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-700 group-hover:text-sky-900 font-semibold transition-colors">
                      <span>Explore Scope & Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </InteractiveCard>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

