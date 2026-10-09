import React, { useRef } from 'react';
import gsap from 'gsap';

export default function InteractiveCard({
  children,
  className = '',
  maxTilt = 6,
  scale = 1.015,
  glowColor = 'rgba(2, 132, 199, 0.12)',
  ...props
}) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    // Smooth GSAP 3D gesture tilt
    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      scale,
      transformPerspective: 1200,
      transformOrigin: 'center center',
      ease: 'power2.out',
      duration: 0.35,
    });

    // Update specular radial glow
    if (glowRef.current) {
      glowRef.current.style.opacity = '1';
      glowRef.current.style.background = `radial-gradient(400px circle at ${x}px ${y}px, ${glowColor}, transparent 70%)`;
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    // Spring return
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      ease: 'elastic.out(1, 0.5)',
      duration: 0.75,
    });

    if (glowRef.current) {
      glowRef.current.style.opacity = '0';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl transition-shadow duration-300 will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      {...props}
    >
      {/* Specular Radial Spotlight Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-10 opacity-0"
      />
      {children}
    </div>
  );
}
