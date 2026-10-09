export const projects = [
  {
    id: "official-coders",
    title: "Official Coders",
    category: "Full Stack / E-Learning",
    filterCategory: "Full Stack",
    filterCategories: ["Full Stack", "Web Apps"],
    shortDescription: "Interactive coding school with 17 structured courses, cloud compiler for 14+ languages, and verified certificates.",
    liveUrl: "https://official-coders.vercel.app",
    adminUrl: "https://official-coders-admin.vercel.app/login",
    hasLiveUrl: true,
    hasCaseStudy: true,
    isFeaturedHero: true,
    accentColor: "#08a88a",
    tagline: "Learn programming step-by-step with 17 courses, in-browser compiler, and admin portal.",
    overview: "Official Coders is a full-stack learning platform built to help students learn to code. It features 17 structured courses, an online code compiler supporting 14+ languages, quizzes, and digital certificates, along with a dedicated admin management portal.",
    challenge: "Traditional coding tutorials are passive and disjointed, lacking an integrated compiler and verifiable progress tracking.",
    approach: "Built two synchronized applications: a student learning hub with in-browser code execution and a protected admin portal for curriculum and user management.",
    solution: "A complete platform with course modules, multi-language code runner, automated quiz scoring, certificate issuing, and instructor admin controls.",
    keyFeatures: [
      "17 structured programming courses from basics to advanced stacks",
      "In-browser cloud compiler supporting 14+ languages (JS, Python, C++, Java)",
      "Dedicated Admin Portal (official-coders-admin.vercel.app) for managing courses",
      "Interactive quizzes with instant score tracking and answer review",
      "Verifiable student completion certificates with unique verification IDs"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloud Compiler API", "Vercel"],
    deliverables: [
      "Student Learning Portal",
      "Instructor Admin Dashboard",
      "Cloud Code Execution Engine",
      "Automated Certificate Generator"
    ],
    outcome: "Live in production on Vercel with active student learning and dedicated admin portal."
  },
  {
    id: "bolo-translator",
    title: "Bolo Translator",
    category: "AI / Multimodal Translation App",
    filterCategory: "AI",
    filterCategories: ["AI", "Web Apps"],
    shortDescription: "Translate text, speech, photos, and live conversations across 22 languages with tone control.",
    liveUrl: "https://bolo-translator-ai.vercel.app/",
    hasLiveUrl: true,
    hasCaseStudy: true,
    isFeaturedHero: false,
    accentColor: "#0ea5e9",
    tagline: "Translate anything in 22 languages with conversation mode and tone control.",
    overview: "Bolo is a modern translation app that handles text, spoken voice, photos, and documents across 22 languages (including Hindi, Gujarati, Tamil, and Urdu). It includes tone adjustments (Natural, Formal, Casual) and a 2-way Conversation mode.",
    challenge: "Standard translation tools miss cultural nuances, lack image scanning, and don't support back-and-forth spoken dialogues.",
    approach: "Built a fast PWA using React, Web Speech API for voice playback, and OCR for photo text extraction, with prompt-based tone adaptation.",
    solution: "A clean single-page app with 5 translation modes, instant language swapping, speech playback, and private offline history.",
    keyFeatures: [
      "5 translation modes: Text, Voice, Photo OCR, Document, and Conversation",
      "Tone control: Switch between Natural, Formal, and Casual styles",
      "Supports 22 languages with native Indic font rendering",
      "Two-way Conversation mode ('Talk') for bilingual spoken dialogue",
      "Client-side search history and clean light/dark theme"
    ],
    techStack: ["React.js", "JavaScript", "Web Speech API", "OCR Engine", "Tailwind CSS", "Vercel"],
    deliverables: [
      "Multimodal Translation PWA",
      "Speech Synthesis & Recognition Integration",
      "Photo OCR Text Scanner",
      "Edge Deployment on Vercel"
    ],
    outcome: "Live on Vercel at bolo-translator-ai.vercel.app, delivering instant, culturally accurate translations."
  },
  {
    id: "gen-story",
    title: "Gen Story",
    category: "AI / Creative Storytelling",
    filterCategory: "AI",
    filterCategories: ["AI", "Web Apps"],
    shortDescription: "Turn a single idea into a finished short story with 12 genres, 9 languages, and one-tap revisions.",
    liveUrl: "https://gen-story-generate.vercel.app/",
    hasLiveUrl: true,
    hasCaseStudy: true,
    isFeaturedHero: false,
    accentColor: "#8b5cf6",
    tagline: "Short stories, written with you — one sentence in, a complete story out.",
    overview: "Gen Story turns a single prompt into a structured, engaging short story. Writers can customize the genre from 12 options, select from 9 languages, adjust narrative tones, and polish stories with one-tap revisions.",
    challenge: "Raw AI generation often produces disjointed text without coherent chapter flow, reader-friendly typography, or revision tools.",
    approach: "Created a book-inspired interface pairing Newsreader and Geist typography with guided prompt builders and revision chips.",
    solution: "An interactive storytelling app with multi-language generation, one-tap rewrites, personal story bookshelf, and instant text export.",
    keyFeatures: [
      "Generate complete short stories from a single prompt",
      "12 creative genres (Sci-Fi, Fantasy, Mystery, Romance, Thriller)",
      "Multi-language storytelling in 9 languages",
      "One-tap revisions to rewrite, lengthen, or adjust plot twists",
      "Personal story bookshelf to save and organize your creations"
    ],
    techStack: ["React.js", "JavaScript", "Generative AI API", "CSS Modules", "Vercel"],
    deliverables: [
      "Interactive Story Generator",
      "Custom Reader Experience",
      "Saved Story Bookshelf",
      "Production Deployment on Vercel"
    ],
    outcome: "Live on Vercel at gen-story-generate.vercel.app, helping users turn brief thoughts into compelling stories."
  },
  {
    id: "online-examination-system",
    title: "Online Examination System",
    category: "Full Stack / EdTech",
    filterCategory: "Full Stack",
    filterCategories: ["Full Stack", "Web Apps"],
    shortDescription: "Privacy-first online testing platform with browser-native anti-cheating, automated timers, and violation tracking.",
    liveUrl: "https://online-examination-systems.vercel.app/",
    hasLiveUrl: true,
    hasCaseStudy: true,
    isFeaturedHero: false,
    accentColor: "#f43f5e",
    tagline: "Honest online exams using native browser security — no webcams, no paid surveillance software.",
    overview: "ExamGuard is a privacy-conscious online examination system. It protects test integrity using native browser events to detect tab switching, fullscreen exit, and copy-paste attempts without invasive webcams or third-party spyware.",
    challenge: "Online exam proctoring usually requires invasive camera surveillance software that invades student privacy and slows down devices.",
    approach: "Engineered browser-native event listeners (visibility change, window blur, fullscreen locks) with automated logging to an admin dashboard.",
    solution: "A lightweight testing platform featuring timed student tests, automatic submission on expiry, live anti-cheating logs, and an admin test creator.",
    keyFeatures: [
      "Privacy-first proctoring: Zero webcams, zero spyware, 100% browser-native",
      "Live anti-cheating detection: Tab switches, window blur, fullscreen exits",
      "Blocks text selection, copy-pasting, and right-click during tests",
      "Timed exams with automatic submission when timer hits zero",
      "Admin dashboard with question banks, student scores, and violation logs"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Render", "Vercel"],
    deliverables: [
      "Student Examination Interface",
      "Anti-Cheating Security Engine",
      "Admin Exam & Question Manager",
      "Real-Time Violation Logger"
    ],
    outcome: "Live on Vercel at online-examination-systems.vercel.app, offering a secure, privacy-friendly exam solution."
  },
  {
    id: "medexplain-ai",
    title: "MedExplain AI",
    category: "AI / Health Literacy",
    filterCategory: "Full Stack",
    filterCategories: ["Full Stack", "AI"],
    shortDescription: "Simplifies complex medical terminology and lab reports into clear, readable breakdowns for patients.",
    liveUrl: null,
    hasLiveUrl: false,
    hasCaseStudy: true,
    isFeaturedHero: false,
    accentColor: "#10b981",
    tagline: "Translating complex health documentation into clear, structured summaries.",
    overview: "MedExplain AI is a health literacy tool that translates complex clinical terminology and lab sheets into plain, understandable English, helping patients prepare informed questions for their doctors.",
    challenge: "Medical reports are full of abbreviations and numbers that confuse patients, but AI tools must strictly avoid offering medical diagnoses.",
    approach: "Designed a secure pipeline with strict non-diagnostic guardrails that clarifies technical terms and generates doctor questions.",
    solution: "An intuitive web app featuring text parsing, plain-language glossaries, and exportable patient-doctor discussion checklists.",
    keyFeatures: [
      "Plain-language explanations of medical terms and test metrics",
      "Generates helpful questions to ask your healthcare provider",
      "Strict non-diagnostic safety guardrails and clear disclaimers",
      "Structured summary cards for quick readability",
      "Accessible, high-contrast interface designed for all users"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "LLM APIs"],
    deliverables: [
      "Health Literacy Parser",
      "Terminology Breakdown Tool",
      "Doctor Question Generator"
    ],
    outcome: "Functional health literacy prototype that empowers patients to have clearer conversations with their doctors."
  },
  {
    id: "lumora-cafe",
    title: "Lumora Cafe",
    category: "Business Website",
    filterCategory: "Business Websites",
    filterCategories: ["Business Websites"],
    shortDescription: "Modern boutique website for an artisan coffee roastery with interactive menus and table reservations.",
    liveUrl: null,
    hasLiveUrl: false,
    hasCaseStudy: true,
    isFeaturedHero: false,
    accentColor: "#f59e0b",
    tagline: "Artisan cafe branding, interactive digital menu, and seamless table reservations.",
    overview: "Lumora Cafe is a responsive business website for a specialty coffee shop. It features an interactive food and drink menu, roastery story, location details, and a streamlined reservation booking form.",
    challenge: "Traditional cafe sites often rely on clunky PDF menus and slow mobile pages that deter potential customers.",
    approach: "Created a mobile-first digital experience with warm artisan styling, category-filtered menu tabs, and smooth booking forms.",
    solution: "A fast, stylish website with interactive menu categories (coffee, brunch, bakery), roastery values showcase, and reservation flow.",
    keyFeatures: [
      "Interactive digital menu with category filtering (espresso, food, bakery)",
      "Mobile-friendly table reservation and event inquiry form",
      "Integrated hours, location map, and social links",
      "Warm boutique visual identity with fast mobile loading"
    ],
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "Responsive Design"],
    deliverables: [
      "Boutique Brand Website",
      "Interactive Digital Menu",
      "Mobile Reservation Flow"
    ],
    outcome: "Delivered a visually engaging brand website that elevates cafe presence and drives customer visits."
  }
];

export const filterCategories = ["All", "AI", "Web Apps", "Business Websites", "Full Stack"];

export const matchesProjectCategory = (project, filterId) => {
  if (!filterId || filterId === 'All') return true;
  if (project.filterCategory === filterId) return true;
  if (Array.isArray(project.filterCategories) && project.filterCategories.includes(filterId)) return true;
  return false;
};
