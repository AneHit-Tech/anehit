export const caseStudies = [
  {
    id: "official-coders",
    title: "Official Coders",
    category: "Full Stack / E-Learning",
    clientType: "Education & EdTech Platform",
    summary: "Building an interactive coding platform with 17 courses, an online multi-language compiler, and an admin management suite.",
    liveUrl: "https://official-coders.vercel.app",
    adminUrl: "https://official-coders-admin.vercel.app/login",
    hasLiveUrl: true,
    figNumber: "FIG. 01",
    tagline: "Learn to code step-by-step with 17 courses, in-browser compiler, and verified certificates.",
    challenge: "Most coding platforms force students to set up complex local compilers before they can write their first line of code, leading to high drop-off rates.",
    approach: "Built two connected web apps: a frictionless student hub with a 14+ language in-browser compiler, and an instructor admin portal for course management.",
    solution: "A complete learning platform featuring interactive course tracks, live code compilation, instant quiz evaluations, and verifiable certificates.",
    keyFeatures: [
      "17 structured programming courses covering frontend, backend, and languages",
      "In-browser cloud compiler supporting 14+ languages (JavaScript, Python, C++, Java)",
      "Dedicated Admin Portal (official-coders-admin.vercel.app) for managing curricula",
      "Interactive quizzes with automated scoring and instant review",
      "Verifiable completion certificates with unique verification IDs"
    ],
    technology: [
      { name: "React.js", role: "Student learning dashboard and admin portal UI" },
      { name: "Node.js & Express", role: "REST API backend, user auth, and quiz validation" },
      { name: "MongoDB", role: "Course curricula and student progress database" },
      { name: "Compiler API", role: "Secure sandboxed multi-language code runner" },
      { name: "Vercel", role: "High-performance edge deployment" }
    ],
    process: [
      { step: "01", title: "Curriculum Modeling", desc: "Structured 17 courses into sequential topics and practical lessons." },
      { step: "02", title: "Compiler Integration", desc: "Connected a secure cloud sandbox running 14+ languages." },
      { step: "03", title: "Admin Portal", desc: "Built a dedicated admin interface for managing courses and students." },
      { step: "04", title: "Quizzes & Certs", desc: "Added automated quiz scoring and verifiable PDF certificates." },
      { step: "05", title: "Edge Deployment", desc: "Shipped both student and admin applications live on Vercel." }
    ],
    outcome: "Successfully launched Official Coders live on Vercel, providing students with an accessible, hands-on environment to master programming."
  },
  {
    id: "bolo-translator",
    title: "Bolo Translator",
    category: "AI / Multimodal Translation",
    clientType: "Public AI Utility",
    summary: "Creating a fast multi-modal translator for text, speech, photos, and live conversations across 22 languages with tone control.",
    liveUrl: "https://bolo-translator-ai.vercel.app/",
    hasLiveUrl: true,
    figNumber: "FIG. 02",
    tagline: "Translate text, voice, photos, and live conversations with Indic tone control.",
    challenge: "Standard translation tools neglect spoken voice, can't translate text from camera photos, and ignore formality differences in Indic languages.",
    approach: "Engineered a lightweight PWA using React, Web Speech API for voice playback, and OCR for photo text extraction, with prompt-based tone adaptation.",
    solution: "A clean single-page app with 5 translation modes, instant language swapping, speech playback, and private offline history.",
    keyFeatures: [
      "5 translation modes: Text, Voice, Photo OCR, Document, and Conversation",
      "Tone control: Switch between Natural, Formal, and Casual styles",
      "Supports 22 languages with native Indic font rendering",
      "Two-way Conversation mode ('Talk') for bilingual spoken dialogue",
      "Client-side search history and clean light/dark theme"
    ],
    technology: [
      { name: "React.js", role: "Modular UI and reactive translation state" },
      { name: "Web Speech API", role: "Speech recognition and natural voice playback" },
      { name: "OCR Engine", role: "Text extraction from photo and image uploads" },
      { name: "RESTful LLM API", role: "Multi-language neural translation and tone adaptation" },
      { name: "Vercel", role: "Edge deployment with sub-second response times" }
    ],
    process: [
      { step: "01", title: "Mode Architecture", desc: "Designed separate modules for Text, Voice, Photo, Document, and Talk." },
      { step: "02", title: "Tone System", desc: "Engineered prompt mappings for Natural, Formal, and Casual styles." },
      { step: "03", title: "Speech & OCR", desc: "Integrated browser Web Speech APIs and camera OCR parsing." },
      { step: "04", title: "PWA Polish", desc: "Added offline history storage, theme toggle, and mobile layouts." },
      { step: "05", title: "Vercel Deploy", desc: "Shipped production build live on Vercel at bolo-translator-ai.vercel.app." }
    ],
    outcome: "Live on Vercel, delivering fast, culturally accurate translations for everyday text, speech, documents, and live dialogue."
  },
  {
    id: "gen-story",
    title: "Gen Story",
    category: "AI / Creative Storytelling",
    clientType: "Generative Media Web App",
    summary: "Developing an AI creative writing suite that transforms single-sentence prompts into structured short stories with 12 genres.",
    liveUrl: "https://gen-story-generate.vercel.app/",
    hasLiveUrl: true,
    figNumber: "FIG. 03",
    tagline: "Short stories, written with you — one sentence in, a complete story out.",
    challenge: "Most AI writing tools output unstructured text walls without chapter flow, genre styling, or comfortable reading layouts.",
    approach: "Designed a distraction-free reader interface with elegant book typography, genre and tone selectors, and one-tap revision options.",
    solution: "An interactive storytelling app with 12 genres, 9 languages, one-tap revisions, a personal bookshelf, and instant text export.",
    keyFeatures: [
      "Generate complete short stories from a single prompt",
      "12 creative genres (Sci-Fi, Fantasy, Mystery, Romance, Thriller)",
      "Multi-language storytelling across 9 global languages",
      "One-tap revisions to rewrite, lengthen, or adjust plot twists",
      "Personal story bookshelf to save and organize your creations"
    ],
    technology: [
      { name: "React.js", role: "Story builder and reading interface" },
      { name: "Generative AI API", role: "Contextual narrative and chapter generation" },
      { name: "CSS Modules", role: "Editorial typography (Newsreader & Geist)" },
      { name: "Vercel", role: "Continuous deployment and hosting" }
    ],
    process: [
      { step: "01", title: "Story UX", desc: "Designed tactile prompt inputs and a comfortable book-like reading layout." },
      { step: "02", title: "Genre Tuning", desc: "Configured distinct prompt parameters across 12 creative genres." },
      { step: "03", title: "Revisions", desc: "Built one-tap actions to lengthen, polish, or alter narrative direction." },
      { step: "04", title: "Bookshelf", desc: "Added local story shelf and download tools." },
      { step: "05", title: "Production", desc: "Shipped public web app live on Vercel at gen-story-generate.vercel.app." }
    ],
    outcome: "Live on Vercel, helping writers, students, and creators turn sparks of inspiration into rich stories on demand."
  },
  {
    id: "online-examination-system",
    title: "Online Examination System",
    category: "Full Stack / EdTech",
    clientType: "Educational Assessment Platform",
    summary: "Engineering a privacy-conscious online testing system with browser-native anti-cheating, automated timers, and violation logs.",
    liveUrl: "https://online-examination-systems.vercel.app/",
    hasLiveUrl: true,
    figNumber: "FIG. 04",
    tagline: "Honest online exams using native browser security — no webcams, no paid software.",
    challenge: "Online exam proctoring usually relies on invasive camera spyware that compromises privacy, requires paid licenses, and crashes on student devices.",
    approach: "Built a privacy-first proctoring engine utilizing native browser APIs to detect tab switches, window blur, and fullscreen exits without any cameras.",
    solution: "A reliable exam portal featuring timed test runs, auto-submission when the timer expires, live violation logs, and an admin test creator.",
    keyFeatures: [
      "Privacy-first proctoring: Zero webcams, zero spyware, 100% browser-native",
      "Live anti-cheating detection: Tab switches, window blur, fullscreen exits",
      "Blocks text selection, copy-pasting, and right-click during tests",
      "Timed exams with automatic submission when timer hits zero",
      "Admin dashboard with question banks, student scores, and violation logs"
    ],
    technology: [
      { name: "React.js", role: "Student examination interface and admin dashboard" },
      { name: "Node.js & Express", role: "REST API backend, violation recording, and test evaluation" },
      { name: "MongoDB", role: "Question banks, exam configurations, and student score records" },
      { name: "Render & Vercel", role: "Cloud backend API and edge frontend deployment" }
    ],
    process: [
      { step: "01", title: "Security Scope", desc: "Defined native browser security rules without intrusive video monitoring." },
      { step: "02", title: "Event Detection", desc: "Engineered listeners for visibility changes, window blurs, and key combinations." },
      { step: "03", title: "Timer & Autosave", desc: "Implemented reliable countdown timers with auto-submission upon expiry." },
      { step: "04", title: "Admin Portal", desc: "Created test builder, question repository, and real-time violation logs." },
      { step: "05", title: "Full Deployment", desc: "Deployed frontend on Vercel and API backend on Render." }
    ],
    outcome: "Live on Vercel at online-examination-systems.vercel.app, delivering a secure, lightweight exam environment for schools and academies."
  },
  {
    id: "medexplain-ai",
    title: "MedExplain AI",
    category: "AI / Health Literacy",
    clientType: "Health Literacy Web App",
    summary: "Translating complex medical terminology and lab sheets into plain, accessible language with strict safety guardrails.",
    liveUrl: null,
    hasLiveUrl: false,
    figNumber: "FIG. 05",
    tagline: "Clarifying complex health documentation into accessible, structured breakdowns.",
    challenge: "Medical lab results are filled with confusing clinical jargon, but AI systems must strictly avoid making medical diagnoses or replacing doctors.",
    approach: "Designed an informational pipeline with strict safety filters that explains terms simply and generates questions for doctor visits.",
    solution: "A clean web app featuring file/text input, plain-language glossaries, doctor question checklists, and prominent safety disclaimers.",
    keyFeatures: [
      "Plain-language explanations of medical terms and test metrics",
      "Generates helpful questions to ask your healthcare provider",
      "Strict non-diagnostic safety guardrails and clear disclaimers",
      "Structured summary cards for quick readability",
      "Accessible, high-contrast interface designed for all users"
    ],
    technology: [
      { name: "React.js", role: "Patient-friendly accessible frontend" },
      { name: "Node.js & Express", role: "Backend validation and API coordination" },
      { name: "Tailwind CSS", role: "High-contrast, accessible UI design system" },
      { name: "LLM API", role: "Informational terminology analysis pipeline" }
    ],
    process: [
      { step: "01", title: "Safety Scope", desc: "Established non-diagnostic boundaries and informational guardrails." },
      { step: "02", title: "Card Architecture", desc: "Designed clear card tiers for definitions, metrics, and doctor questions." },
      { step: "03", title: "Prompt Pipeline", desc: "Engineered strict system prompts forbidding medical diagnosis." },
      { step: "04", title: "Accessibility Polish", desc: "Audited readability and high-contrast color standards." },
      { step: "05", title: "Delivery", desc: "Delivered production-ready health literacy prototype." }
    ],
    outcome: "Functional health literacy tool helping patients understand lab documentation and prepare informed questions for their doctors."
  },
  {
    id: "lumora-cafe",
    title: "Lumora Cafe",
    category: "Business Website",
    clientType: "Hospitality & Food Brand",
    summary: "Designing a modern, mobile-first brand website for an artisan coffee roastery with interactive menus and table reservations.",
    liveUrl: null,
    hasLiveUrl: false,
    figNumber: "FIG. 06",
    tagline: "Connecting artisan coffee craftsmanship with seamless digital customer engagement.",
    challenge: "Hospitality websites often suffer from unreadable PDF menus and slow load times on mobile connections, losing walk-in customers.",
    approach: "Designed a bespoke aesthetic with warm neutral tones, fast menu filtering, and a mobile-friendly table reservation flow.",
    solution: "A sleek website featuring interactive menu category tabs (coffee, brunch, bakery), roastery story, and reservation modal.",
    keyFeatures: [
      "Interactive digital menu with category filtering (espresso, food, bakery)",
      "Mobile-friendly table reservation and event inquiry form",
      "Integrated hours, location map, and social links",
      "Warm boutique visual identity with fast mobile loading"
    ],
    technology: [
      { name: "React.js", role: "Interactive menu state and reservation components" },
      { name: "JavaScript", role: "Smooth scroll and form validation logic" },
      { name: "Tailwind CSS", role: "Warm boutique styling and mobile-first layout" },
      { name: "Responsive Design", role: "Cross-breakpoint touch optimization" }
    ],
    process: [
      { step: "01", title: "Brand Identity", desc: "Defined visual style matching artisan roastery aesthetics." },
      { step: "02", title: "Menu Tabs", desc: "Structured food and drink offerings into intuitive interactive tabs." },
      { step: "03", title: "Reservation Form", desc: "Built validated booking modal with party size and date selection." },
      { step: "04", title: "Performance", desc: "Optimized image loading and mobile viewport ergonomics." },
      { step: "05", title: "Launch", desc: "Packaged for instant hosting on modern CDN platforms." }
    ],
    outcome: "Delivered a visually stunning, responsive brand website that effectively communicates cafe quality and drives customer visits."
  }
];
