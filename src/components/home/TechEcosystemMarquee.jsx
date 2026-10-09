import React from 'react';

// Brand SVGs for crisp, colorful technology logos
const TechIcons = {
  bootstrap: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M2.5 5.5C2.5 3.84315 3.84315 2.5 5.5 2.5H18.5C20.1569 2.5 21.5 3.84315 21.5 5.5V18.5C21.5 20.1569 20.1569 21.5 18.5 21.5H5.5C3.84315 21.5 2.5 20.1569 2.5 18.5V5.5Z" fill="#7952B3" />
      <path d="M8 7.5H12.5C14.1569 7.5 15.5 8.39543 15.5 9.5C15.5 10.3284 14.7 11.0267 13.5 11.3C15 11.6 16 12.4 16 13.6C16 15 14.6569 16.5 12.8 16.5H8V7.5ZM10.5 9.5V11H12.2C12.8 11 13.3 10.6 13.3 10.25C13.3 9.9 12.8 9.5 12.2 9.5H10.5ZM10.5 13V14.5H12.5C13.2 14.5 13.8 14.1 13.8 13.75C13.8 13.4 13.2 13 12.5 13H10.5Z" fill="white" />
    </svg>
  ),
  html5: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M3 2L4.63636 20.5L12 22.5L19.3636 20.5L21 2H3Z" fill="#E34F26" />
      <path d="M12 3.8V20.7L17.7 19.1L19.1 3.8H12Z" fill="#EF652A" />
      <path d="M12 7.7H7.7L8 10.9H12V7.7ZM12 14.2L9.2 13.4L9 11.6H6.8L7.3 15.7L12 17V14.2Z" fill="#EBEBEB" />
      <path d="M12 7.7V10.9H15.9L15.6 14.2L12 15.2V18L16.7 16.7L17.2 11.6H12V7.7Z" fill="white" />
    </svg>
  ),
  javascript: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M7 17.5C7.5 18.2 8.3 18.7 9.5 18.7C10.8 18.7 11.7 18 11.7 16.5V11H9.8V16.4C9.8 17 9.4 17.2 8.9 17.2C8.4 17.2 8.1 16.9 7.8 16.4L7 17.5ZM13.8 17.2C14.5 18.2 15.6 18.8 17 18.8C18.8 18.8 19.9 17.8 19.9 16.3C19.9 14.9 19.1 14.3 17.6 13.7L16.9 13.4C16 13 15.4 12.6 15.4 11.9C15.4 11.2 16 10.7 16.9 10.7C17.7 10.7 18.2 11 18.7 11.8L19.7 10.9C19 9.8 18 9.3 16.8 9.3C15.2 9.3 14.1 10.3 14.1 11.8C14.1 13.1 14.9 13.8 16.2 14.3L16.9 14.6C17.9 15.1 18.6 15.5 18.6 16.4C18.6 17.2 17.9 17.8 16.9 17.8C15.8 17.8 15 17.2 14.6 16.3L13.8 17.2Z" fill="#1A1A1A" />
    </svg>
  ),
  typescript: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M5.5 9.5H13V11.5H10.5V18.5H8V11.5H5.5V9.5ZM13.8 17.2C14.5 18.2 15.6 18.8 17 18.8C18.8 18.8 19.9 17.8 19.9 16.3C19.9 14.9 19.1 14.3 17.6 13.7L16.9 13.4C16 13 15.4 12.6 15.4 11.9C15.4 11.2 16 10.7 16.9 10.7C17.7 10.7 18.2 11 18.7 11.8L19.7 10.9C19 9.8 18 9.3 16.8 9.3C15.2 9.3 14.1 10.3 14.1 11.8C14.1 13.1 14.9 13.8 16.2 14.3L16.9 14.6C17.9 15.1 18.6 15.5 18.6 16.4C18.6 17.2 17.9 17.8 16.9 17.8C15.8 17.8 15 17.2 14.6 16.3L13.8 17.2Z" fill="white" />
    </svg>
  ),
  tailwind: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M12 6C9.6 6 8.1 7.2 7.5 9.6C8.4 8.4 9.45 7.95 10.65 8.25C11.33 8.42 11.82 8.92 12.36 9.47C13.23 10.38 14.28 11.45 16.5 11.45C18.9 11.45 20.4 10.25 21 7.85C20.1 9.05 19.05 9.5 17.85 9.2C17.17 9.03 16.68 8.53 16.14 7.98C15.27 7.07 14.22 6 12 6ZM7.5 12.55C5.1 12.55 3.6 13.75 3 16.15C3.9 14.95 4.95 14.5 6.15 14.8C6.83 14.97 7.32 15.47 7.86 16.02C8.73 16.93 9.78 18 12 18C14.4 18 15.9 16.8 16.5 14.4C15.6 15.6 14.55 16.05 13.35 15.75C12.67 15.58 12.18 15.08 11.64 14.53C10.77 13.62 9.72 12.55 7.5 12.55Z" fill="#06B6D4" />
    </svg>
  ),
  react: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="3.2" ry="8.8" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="3.2" ry="8.8" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="3.2" ry="8.8" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  ),
  node: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M12 2.5L20 7.1V16.9L12 21.5L4 16.9V7.1L12 2.5Z" stroke="#339933" strokeWidth="1.8" fill="#339933" fillOpacity="0.1" />
      <path d="M12 7.5L16 9.8V14.4L12 16.7L8 14.4V9.8L12 7.5Z" fill="#339933" />
    </svg>
  ),
  shopify: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M18.8 4.7C18.7 4.5 18.5 4.4 18.3 4.4C18.2 4.4 17.5 4.5 17.5 4.5C17.3 4.1 17 3.6 16.6 3.1C15.3 1.8 13.5 1.5 12.4 2.2C12.1 2.4 11.9 2.7 11.7 3.1C11.2 3.1 10.7 3.2 10.3 3.3C9.3 3.6 9.2 4.6 9 5.3C8.4 5.5 7.8 5.7 7.2 5.9C6.4 6.2 6.4 7.1 6.5 7.6L8 19.5L17.2 21.3L20.8 19.1C20.8 19.1 18.8 4.9 18.8 4.7ZM14.1 4.2C13.8 4.8 13.3 5.7 12.2 6.2C12.3 5.4 12.6 4.4 13.2 3.8C13.6 3.3 14.1 3.5 14.1 4.2Z" fill="#96BF48" />
    </svg>
  ),
  angular: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 5.3L4.4 16.8L12 21.5L19.6 16.8L21 5.3L12 2Z" fill="#DD0031" />
      <path d="M12 4.2V19.3L17.9 15.6L19.1 5.9L12 4.2Z" fill="#C3002F" />
      <path d="M12 6.8L8.5 15.2H10.4L11.1 13.4H12.9L13.6 15.2H15.5L12 6.8ZM12.5 11.8H11.5L12 10.2L12.5 11.8Z" fill="white" />
    </svg>
  ),
  css3: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M3 2L4.63636 20.5L12 22.5L19.3636 20.5L21 2H3Z" fill="#1572B6" />
      <path d="M12 3.8V20.7L17.7 19.1L19.1 3.8H12Z" fill="#33A9DC" />
      <path d="M12 7.7H7.7L8 10.9H12V7.7ZM12 14.2L9.2 13.4L9 11.6H6.8L7.3 15.7L12 17V14.2Z" fill="#EBEBEB" />
      <path d="M12 7.7V10.9H15.9L15.6 14.2L12 15.2V18L16.7 16.7L17.2 11.6H12V7.7Z" fill="white" />
    </svg>
  ),
  nextjs: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#000000" />
      <path d="M16.5 16.5L9.5 7.5V16.5H8V6.5H9.5L16.5 15.5V6.5H18V16.5H16.5Z" fill="white" />
    </svg>
  ),
  postgresql: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M12 3C8.5 3 6 5.5 6 9C6 11.8 7.5 13.9 9.8 14.6V17.5C9.8 18.9 10.8 20 12 20C13.2 20 14.2 18.9 14.2 17.5V14.6C16.5 13.9 18 11.8 18 9C18 5.5 15.5 3 12 3Z" fill="#336791" />
    </svg>
  ),
  mongodb: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C11.5 3 7 9.5 7 14C7 17.5 9.2 20.5 12 21.5C14.8 20.5 17 17.5 17 14C17 9.5 12.5 3 12 2Z" fill="#47A248" />
      <path d="M12 2V21.5C12 21.5 12.1 21.5 12.2 21.4C14.8 20.4 16.8 17.4 16.8 14C16.8 9.5 12.5 3 12 2Z" fill="#499D4A" />
    </svg>
  ),
  python: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M11.8 2C8.7 2 8.9 3.3 8.9 3.3L8.9 4.8H12.2V5.3H6.8C5.2 5.3 4 6.4 4 8C4 9.6 4.9 10.3 6.3 10.3H7.5V9.1C7.5 7.8 8.7 6.8 10 6.8H13.4C14.5 6.8 15.4 5.9 15.4 4.8V3.4C15.4 2.2 14.3 2 11.8 2ZM10.2 3.1C10.6 3.1 11 3.5 11 3.9C11 4.3 10.6 4.7 10.2 4.7C9.8 4.7 9.4 4.3 9.4 3.9C9.4 3.5 9.8 3.1 10.2 3.1Z" fill="#3776AB" />
      <path d="M12.2 22C15.3 22 15.1 20.7 15.1 20.7L15.1 19.2H11.8V18.7H17.2C18.8 18.7 20 17.6 20 16C20 14.4 19.1 13.7 17.7 13.7H16.5V14.9C16.5 16.2 15.3 17.2 14 17.2H10.6C9.5 17.2 8.6 18.1 8.6 19.2V20.6C8.6 21.8 9.7 22 12.2 22ZM13.8 20.9C13.4 20.9 13 20.5 13 20.1C13 19.7 13.4 19.3 13.8 19.3C14.2 19.3 14.6 19.7 14.6 20.1C14.6 20.5 14.2 20.9 13.8 20.9Z" fill="#FFD43B" />
    </svg>
  ),
  stripe: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#635BFF" />
      <path d="M11.2 10.6C9.9 10.2 9.2 9.8 9.2 9.1C9.2 8.4 9.9 7.9 11 7.9C12.3 7.9 13.6 8.4 14.6 9L15.3 6.9C14.1 6.3 12.7 6 11 6C8.2 6 6.3 7.5 6.3 9.7C6.3 12.9 10.5 12.3 10.5 14.2C10.5 15.1 9.6 15.6 8.4 15.6C7 15.6 5.4 14.9 4.3 14.1L3.5 16.3C4.8 17.1 6.5 17.6 8.4 17.6C11.4 17.6 13.4 16.1 13.4 13.8C13.4 10.4 11.2 10.6 11.2 10.6Z" fill="white" />
    </svg>
  ),
};

const row1Techs = [
  { name: 'Bootstrap', icon: TechIcons.bootstrap },
  { name: 'HTML5', icon: TechIcons.html5 },
  { name: 'JavaScript', icon: TechIcons.javascript },
  { name: 'TypeScript', icon: TechIcons.typescript },
  { name: 'Tailwind CSS', icon: TechIcons.tailwind },
  { name: 'React JS', icon: TechIcons.react },
  { name: 'Next.js', icon: TechIcons.nextjs },
  { name: 'Node JS', icon: TechIcons.node },
  { name: 'Python', icon: TechIcons.python },
  { name: 'Stripe API', icon: TechIcons.stripe },
];

const row2Techs = [
  { name: 'React JS', icon: TechIcons.react },
  { name: 'Node JS', icon: TechIcons.node },
  { name: 'Shopify', icon: TechIcons.shopify },
  { name: 'Angular JS', icon: TechIcons.angular },
  { name: 'CSS3', icon: TechIcons.css3 },
  { name: 'PostgreSQL', icon: TechIcons.postgresql },
  { name: 'MongoDB', icon: TechIcons.mongodb },
  { name: 'TypeScript', icon: TechIcons.typescript },
  { name: 'Tailwind CSS', icon: TechIcons.tailwind },
  { name: 'Bootstrap', icon: TechIcons.bootstrap },
];

export default function TechEcosystemMarquee() {
  return (
    <section className="py-14 sm:py-18 md:py-20 bg-white border-b border-slate-200 overflow-hidden relative">
      <div className="studio-container text-center mb-10 sm:mb-12">
        {/* Pill Badge matching reference */}
        <div className="inline-flex items-center justify-center mb-4">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-amber-50 text-amber-800 border border-amber-200/80 shadow-xs">
            Tools & Technologies
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight mb-4">
          Our Tech Ecosystem
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
          We build high-performance products using modern frameworks, payment platforms, and languages.
        </p>
      </div>

      {/* Marquee Wrapper with soft gradient masks on edges */}
      <div className="relative w-full overflow-hidden space-y-4 sm:space-y-5">
        {/* Left / Right Vignette Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 md:w-44 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 md:w-44 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Marquee Row 1 - Leftward */}
        <div className="flex select-none">
          <div className="animate-marquee-left flex items-center gap-3 sm:gap-4 shrink-0">
            {[...row1Techs, ...row1Techs].map((tech, idx) => (
              <div
                key={`r1-${idx}`}
                className="flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 shrink-0"
              >
                <span className="shrink-0 flex items-center justify-center">
                  {tech.icon}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 - Rightward */}
        <div className="flex select-none">
          <div className="animate-marquee-right flex items-center gap-3 sm:gap-4 shrink-0">
            {[...row2Techs, ...row2Techs].map((tech, idx) => (
              <div
                key={`r2-${idx}`}
                className="flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 shrink-0"
              >
                <span className="shrink-0 flex items-center justify-center">
                  {tech.icon}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
