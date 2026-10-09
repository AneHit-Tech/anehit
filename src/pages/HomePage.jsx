import React from 'react';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import TechEcosystemMarquee from '../components/home/TechEcosystemMarquee';
import FeaturedWorkSection from '../components/home/FeaturedWorkSection';
import WhyUsSection from '../components/home/WhyUsSection';
import ProcessSection from '../components/home/ProcessSection';
import FaqSection from '../components/home/FaqSection';
import BottomCtaSection from '../components/common/BottomCtaSection';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 2. Hero */}
      <Hero />

      {/* 4. Services (All 11 Disciplines) */}
      <ServicesSection />

      {/* 5. Animated Tech Ecosystem Marquee */}
      <TechEcosystemMarquee />

      {/* 6. Case Studies & Deployments */}
      <FeaturedWorkSection />

      {/* 7. Why Anehit Tech */}
      <WhyUsSection />

      {/* 9. Development Process */}
      <ProcessSection />

      {/* 10. Frequently Asked Questions */}
      <FaqSection />

      {/* 11. Bottom CTA Consultation Section */}
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
