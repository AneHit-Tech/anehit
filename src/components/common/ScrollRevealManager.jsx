import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollRevealManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    let observer = null;
    let failsafeTimer = null;

    // Small delay to let current route DOM paint
    const timer = setTimeout(() => {
      // Find all target elements that explicitly opt-in to reveal
      // NOTE: We do NOT blindly query generic sections to avoid accidental content invisibility on refresh
      const targets = document.querySelectorAll(
        '[data-reveal], .reveal-init'
      );

      if (!targets.length) return;

      // Automatically add .reveal-init if not present on explicitly marked elements
      targets.forEach((el) => {
        if (!el.classList.contains('reveal-init') && !el.classList.contains('no-reveal')) {
          el.classList.add('reveal-init');
        }
      });

      // Generous positive rootMargin so items start fading in slightly BEFORE entering the viewport
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.01,
          rootMargin: '0px 0px 80px 0px',
        }
      );

      // Check current viewport immediately
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already anywhere within or near the viewport, reveal immediately
        if (rect.top <= windowHeight + 60 && rect.bottom >= -50) {
          el.classList.add('reveal-visible');
        } else {
          observer.observe(el);
        }
      });

      // Robust Failsafe: Ensure no element stays invisible permanently if observer doesn't fire
      failsafeTimer = setTimeout(() => {
        targets.forEach((el) => {
          if (!el.classList.contains('reveal-visible')) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= (window.innerHeight || 800) * 1.25) {
              el.classList.add('reveal-visible');
            }
          }
        });
      }, 300);

    }, 40);

    return () => {
      clearTimeout(timer);
      if (failsafeTimer) clearTimeout(failsafeTimer);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return null;
}

