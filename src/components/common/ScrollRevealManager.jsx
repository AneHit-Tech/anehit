import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollRevealManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wait for DOM to paint current route
    const timer = setTimeout(() => {
      // Find all target elements that should reveal on scroll
      const targets = document.querySelectorAll(
        '[data-reveal], .reveal-init, .text-fade-in, section:not(.no-reveal)'
      );

      if (!targets.length) return;

      // Automatically add .reveal-init if not present
      targets.forEach((el, index) => {
        if (!el.classList.contains('reveal-init') && !el.classList.contains('no-reveal')) {
          el.classList.add('reveal-init');
        }
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px -20px 0px',
        }
      );

      targets.forEach((el) => {
        // If element is already in the viewport upon mount (e.g. Hero section)
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
          // Immediately or micro-stagger reveal above-the-fold content
          setTimeout(() => {
            el.classList.add('reveal-visible');
          }, 60);
        } else {
          observer.observe(el);
        }
      });

      return () => {
        observer.disconnect();
      };
    }, 80);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
