import React, { useEffect, useRef, useState, useCallback } from 'react';
import Lenis from 'lenis';

export const ScrollStackItem = ({ children, itemClassName = '', style = {} }) => {
  return (
    <div
      className={`scroll-stack-inner-card w-full rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 shadow-[0_14px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-shadow duration-300 origin-top will-change-transform ${itemClassName}`.trim()}
      style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export const ScrollStack = ({
  children,
  className = '',
  itemDistance = 48,
  itemStackDistance = 24,
  baseTop = 90,
  baseScale = 0.92,
  scaleStep = 0.035,
  useWindowScroll = true,
}) => {
  const containerRef = useRef(null);
  const cardWrappersRef = useRef([]);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);

  const items = React.Children.toArray(children);

  const updateCardScales = useCallback(() => {
    const wrappers = cardWrappersRef.current;
    if (!wrappers.length) return;

    const viewportHeight = window.innerHeight;

    wrappers.forEach((wrapper, i) => {
      if (!wrapper) return;
      const innerCard = wrapper.querySelector('.scroll-stack-inner-card');
      if (!innerCard) return;

      const currentStickyTop = baseTop + i * itemStackDistance;

      // Calculate how much cards that come AFTER this card have stacked
      let scaleDeduction = 0;

      for (let j = i + 1; j < wrappers.length; j++) {
        const nextWrapper = wrappers[j];
        if (!nextWrapper) continue;

        const nextStickyTop = baseTop + j * itemStackDistance;
        const nextRect = nextWrapper.getBoundingClientRect();

        // When the next card is within 350px of its sticky position, start scaling down card i
        const transitionDistance = 350;
        const distanceToSticky = nextRect.top - nextStickyTop;

        if (distanceToSticky <= 0) {
          // Next card is fully pinned on top
          scaleDeduction += scaleStep;
        } else if (distanceToSticky < transitionDistance) {
          // Next card is approaching sticky point
          const progress = 1 - (distanceToSticky / transitionDistance);
          scaleDeduction += progress * scaleStep;
        }
      }

      const finalScale = Math.max(0.84, 1 - scaleDeduction);
      const roundedScale = Math.round(finalScale * 1000) / 1000;

      // Slight brightness reduction for depth on cards deep in stack
      const depthRatio = scaleDeduction / (scaleStep * 2 || 1);
      const brightness = Math.max(0.94, 1 - depthRatio * 0.04);

      innerCard.style.transform = `scale(${roundedScale}) translateZ(0)`;
      innerCard.style.filter = brightness < 1 ? `brightness(${brightness})` : 'none';
    });
  }, [baseTop, itemStackDistance, scaleStep]);

  useEffect(() => {
    const handleScroll = () => {
      updateCardScales();
    };

    let localLenis = null;
    if (window.__lenis) {
      window.__lenis.on('scroll', handleScroll);
    } else {
      try {
        localLenis = new Lenis({
          duration: 1.1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 1.3,
          infinite: false,
        });

        localLenis.on('scroll', handleScroll);

        const raf = (time) => {
          localLenis.raf(time);
          animationFrameRef.current = requestAnimationFrame(raf);
        };
        animationFrameRef.current = requestAnimationFrame(raf);

        lenisRef.current = localLenis;
      } catch (err) {
        console.warn('Lenis smooth scroll initialization skipped:', err);
      }
    }

    // 2. Native scroll & resize listeners for rock-solid 60/120fps updates
    const onScroll = () => {
      updateCardScales();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial pass
    updateCardScales();

    return () => {
      if (window.__lenis) {
        window.__lenis.off('scroll', handleScroll);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (localLenis) {
        localLenis.destroy();
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [updateCardScales]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`.trim()}>
      <div className="scroll-stack-track w-full">
        {items.map((child, index) => {
          const stickyTop = baseTop + index * itemStackDistance;
          const isLast = index === items.length - 1;

          return (
            <div
              key={index}
              ref={(el) => (cardWrappersRef.current[index] = el)}
              className="scroll-stack-wrapper sticky"
              style={{
                top: `${stickyTop}px`,
                zIndex: index + 10,
                marginBottom: isLast ? '0px' : `${itemDistance}px`,
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
      {/* Spacer to give the final pinned stack room before continuing */}
      <div className="w-full h-24 sm:h-20 pointer-events-none" />
    </div>
  );
};

export default ScrollStack;
