export const projects = [
  {
    id: "technova",
    number: "01",
    title: "TECHNOVA",
    category: "Full-Stack E-Commerce Platform",
    tagline: "Production-oriented electronics e-commerce platform with modular REST API and reactive frontend.",
    description: "A production-oriented electronics e-commerce platform designed to provide a modern product discovery and shopping experience. Features complete product browsing, shopping cart workflows, authentication, and structured backend API endpoints.",
    year: "2026",
    technologies: ["React", "Node.js", "Express", "SQLite", "REST APIs", "Tailwind CSS"],
    features: [
      "Product catalog with dynamic category filters and search",
      "Persistent cart state and checkout transaction flow",
      "JWT-based user authentication and password hashing",
      "Structured REST API backend with SQLite database",
      "Responsive, clean UI with sales metrics and order summaries"
    ],
    github: "https://github.com/kirteshchatur",
    liveDemo: null, // Configurable demo URL
    featured: true,
    accentColor: "blue",
    caseStudy: {
      overview: "TECHNOVA was built to bridge the gap between simple static web stores and production-architected full-stack e-commerce systems. It implements a complete end-to-end shopping cycle from item discovery to transaction recording.",
      problem: "Many student e-commerce projects rely strictly on mock frontend data or monolithic scripts that fail to demonstrate real-world API decoupling, session handling, or relational data structures.",
      solution: "Engineered an Express.js REST API coupled with a SQLite persistent database and a Vite-powered React single page application. Implemented secured authentication endpoints, structured database queries, and clean client-side state management.",
      challenges: [
        "Synchronizing optimistic cart actions with backend validation rules",
        "Handling database concurrency and schema migrations cleanly in SQLite",
        "Structuring responsive UI tables and checkout screens across mobile and desktop"
      ],
      whatILearned: [
        "Clean separation between frontend presentation and backend business logic",
        "JWT token lifecycle management and protected API route middlewares",
        "Designing scalable REST endpoint conventions for catalog and order operations"
      ]
    }
  },
  {
    id: "gem-verify",
    number: "02",
    title: "GeM Verify",
    category: "AI-Powered Procurement Compliance Platform",
    tagline: "Automated tender document extraction and bid compliance verification for GeM procurement.",
    description: "An AI-powered platform designed to automate tender document extraction and bid compliance verification for GeM procurement. Built and selected in the college internal round of Smart India Hackathon 2026.",
    context: "Smart India Hackathon 2026 (College Internal Selection)",
    team: "Jugad.exe",
    year: "2026",
    technologies: ["AI / LLM", "Document Processing", "Compliance Engine", "Web Application", "Human-in-the-Loop"],
    features: [
      "Automated tender document upload and parsing",
      "AI-driven key attribute extraction from unstructured technical bids",
      "Rule-based compliance cross-referencing against GeM procurement clauses",
      "Confidence scoring and automated clause anomaly flags",
      "Reviewer dashboard with interactive human-in-the-loop audit verification",
      "Structured verification report generation for procurement officers"
    ],
    pipeline: [
      { step: "01", title: "Tender Ingestion", desc: "Upload and parse raw tender PDF and bidder submission documents." },
      { step: "02", title: "AI Extraction", desc: "Extract technical parameters, financial eligibility, and certifications." },
      { step: "03", title: "Compliance Engine", desc: "Cross-check extracted clauses against mandatory procurement criteria." },
      { step: "04", title: "Audit & Result", desc: "Generate structured compliance score with flagged items for officer review." }
    ],
    github: "https://github.com/kirteshchatur",
    liveDemo: null,
    featured: true,
    accentColor: "indigo",
    caseStudy: {
      overview: "Developed as a hackathon project submission for Smart India Hackathon 2026, GeM Verify addresses the bottleneck faced by public procurement officers when verifying hundreds of pages of technical bids against GeM tender stipulations.",
      problem: "Government procurement evaluation involves meticulous manual cross-checking of commercial certificates, technical specs, and turnover criteria across unstructured multi-page bid documents, causing delays and human error.",
      solution: "Conceptualized and prototyped a hybrid AI extraction and rule verification engine. Document contents are parsed into structured schemas, evaluated against strict GeM rule parameters, and presented in a transparent human-in-the-loop dashboard.",
      challenges: [
        "Handling unstructured tabular and text variations across diverse bidder documents",
        "Balancing AI probabilistic extraction with deterministic compliance rules",
        "Designing an explainable audit interface where every flag points to the exact source clause"
      ],
      whatILearned: [
        "How to design AI workflows where human reviewers retain final verification authority",
        "Structuring multi-stage processing pipelines for document extraction",
        "Translating complex institutional compliance rules into algorithmic checks"
      ]
    }
  },
  {
    id: "bite-rush",
    number: "03",
    title: "Bite Rush",
    category: "Campus Food Ordering Platform",
    tagline: "A streamlined, mobile-responsive campus food ordering and delivery workflow.",
    description: "A modern food-ordering web experience designed around the needs of college students. Features restaurant browsing, dynamic cart operations, and campus delivery location management.",
    year: "2025",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Local Storage"],
    features: [
      "Dynamic campus food and restaurant menu exploration",
      "Interactive cart with real-time tax and subtotal computation",
      "Hostel and campus delivery location selection",
      "Simulated checkout and UPI payment confirmation flow",
      "Mobile-first responsive design tailored for student smartphones"
    ],
    github: "https://github.com/kirteshchatur",
    liveDemo: null,
    featured: true,
    accentColor: "amber",
    caseStudy: {
      overview: "Bite Rush was created to solve the rush-hour bottleneck at campus cafeterias by providing a fast, lightweight mobile web interface for students to browse menus and schedule orders.",
      problem: "During peak breaks, campus canteens suffer from long queues and disorganized order management, while existing commercial delivery apps impose high delivery fees on nearby hostel rooms.",
      solution: "Designed a clean, lightweight web application focused on speed, zero unnecessary dependencies, intuitive menu navigation, and quick checkout flow with campus-specific delivery locations.",
      challenges: [
        "Crafting a smooth shopping cart and state workflow with pure vanilla JavaScript",
        "Ensuring instant touch responsiveness across lower-end student mobile devices"
      ],
      whatILearned: [
        "Strong fundamentals in DOM manipulation and custom event handling",
        "Building accessible and fast user interfaces without heavy framework bloat"
      ]
    }
  },
  {
    id: "expense-management",
    number: "04",
    title: "Expense Management System",
    category: "Personal Finance Web Application",
    tagline: "Practical expense tracking and balance analytics for students living away from home.",
    description: "A practical expense management application designed for students living away from home to track spending and manage their available balance with persistent storage and report export.",
    year: "2025",
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "PDF Export"],
    features: [
      "Real-time balance, income, and expense summary counters",
      "Categorized transaction logging (Food, Books, Travel, Bills, Misc)",
      "Instant transaction search and category filtering",
      "Dark mode and light mode interface toggle",
      "Client-side transaction statement export to PDF",
      "Local storage data persistence with zero backend setup required"
    ],
    github: "https://github.com/kirteshchatur",
    liveDemo: null,
    featured: true,
    accentColor: "emerald",
    caseStudy: {
      overview: "Built specifically to address the budgeting realities of college students managing limited monthly allowances. Provides clear visibility into spending velocity without complicated banking logins.",
      problem: "Standard personal finance apps are often bloated with ads, require bank account linking, or lack quick offline note-taking for daily cash and UPI student expenses.",
      solution: "Engineered a zero-friction, private, browser-based tracker that stores all financial data safely in browser LocalStorage while offering instant visual balance calculations and exportable summaries.",
      challenges: [
        "Structuring reliable LocalStorage schema for transaction state mutations",
        "Formatting dynamic PDF outputs cleanly with proper date and currency symbols"
      ],
      whatILearned: [
        "Data persistence patterns using browser storage APIs",
        "Designing financial micro-dashboards that highlight actionable insights"
      ]
    }
  },
  {
    id: "portfolio-website",
    number: "05",
    title: "Portfolio Website",
    category: "Personal Developer Platform",
    tagline: "High-performance editorial portfolio built with React, Tailwind CSS, and Vite.",
    description: "A modern personal portfolio designed to showcase projects, skills, achievements, and professional interests with clean typography, responsive layout, and theme customization.",
    year: "2026",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    features: [
      "Deep dark and warm light mode with persistent system preference detection",
      "Embedded video product showcase hero with accessible playback controls",
      "Interactive skills catalog linking competencies to realized projects",
      "In-depth project case study breakdowns with problem-solution workflows",
      "Strict semantic HTML, ARIA standards, and responsive breakpoint optimizations"
    ],
    github: "https://github.com/kirteshchatur/kirtesh-portfolio",
    liveDemo: "https://kirteshchatur.github.io",
    featured: false,
    accentColor: "sky",
    caseStudy: {
      overview: "Engineered from scratch to present technical projects and engineering capabilities with startup-grade polish, eliminating generic templates in favor of bespoke typography and micro-interactions.",
      problem: "Many student portfolios rely on overused templates with neon effects, distracting 3D models, or exaggerated experience claims that fail to convey serious engineering competence.",
      solution: "Created an editorial, minimal, and high-performance developer showcase adhering to strict web performance, accessibility, and content honesty standards.",
      challenges: [
        "Balancing rich visual motion with strict prefers-reduced-motion accessibility",
        "Optimizing video and asset delivery for high Core Web Vitals scores"
      ],
      whatILearned: [
        "Advanced design token architecture in Tailwind CSS",
        "Accessible modal dialogs and keyboard navigation patterns in React"
      ]
    }
  }
];
