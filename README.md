# Kirtesh Chatur — Developer Portfolio

A production-quality personal developer portfolio website engineered with **React**, **Vite**, and **Tailwind CSS**. Designed with an editorial, minimalist aesthetic and startup-grade polish to showcase full-stack web applications, AI systems, and engineering capabilities.

---

## ⚡ Tech Stack

* **Core Framework**: React 18, Vite 6
* **Styling & Design System**: Tailwind CSS, PostCSS, Autoprefixer
* **Typography**: Inter & JetBrains Mono
* **Icons**: Lucide React
* **Theme System**: Custom dark/light mode with localStorage persistence & system preference auto-detection
* **Showcase**: High-performance HTML5 video container with `IntersectionObserver` battery/CPU optimization and `prefers-reduced-motion` compliance

---

## 🚀 Key Features

* **High-End Hero Video Integration**: Displays `portfolio-video.mp4` within a sleek, responsive product preview container with subtle framing, muted autoplay loop, play/pause controls, and error fallbacks.
* **Editorial Alternating Work Showcase**: Highlighting **TECHNOVA** (Full-Stack E-Commerce), **GeM Verify** (AI-Powered Procurement Compliance — SIH 2026), **Bite Rush**, and **Expense Management System**.
* **Interactive Case Studies**: In-depth modals detailing the problem, solution, architecture, challenges, what was learned, and the multi-step verification pipeline for GeM Verify.
* **Interactive Skills Catalog**: Categorized competencies mapped with accurate proficiency levels (`Comfortable with`, `Working knowledge`, `Exploring`) and dynamic project highlighting.
* **Verified Journey & Achievements**: Factual timeline highlighting academic foundation at PVPIT Pune (9.0 CGPA) and Smart India Hackathon 2026 internal selection.
* **GitHub In Public Integration**: Live repository syncing via GitHub public API with seamless offline fallback.
* **Accessible Contact Form**: Accessible inputs with client-side validation, loading/success states, `Formspree` / `EmailJS` environment variable configuration, and direct `mailto` fallback.
* **Production SEO & Accessibility**: Semantic HTML5, ARIA labels, skip-to-content link, JSON-LD Schema (`Person`), `robots.txt`, and `sitemap.xml`.

---

## 📁 Project Structure

```text
kirtesh-portfolio/
├── public/
│   ├── resume/
│   │   └── Kirtesh-Chatur-Resume.pdf   # Direct resume download
│   ├── portfolio-video.mp4             # Static video fallback
│   ├── robots.txt                      # Search engine crawlers
│   └── sitemap.xml                     # Search engine index
├── src/
│   ├── assets/
│   │   └── portfolio-video.mp4         # Hero showcase video
│   ├── components/
│   │   ├── ErrorBoundary.jsx           # Blank-screen crash prevention
│   │   ├── Footer.jsx                  # Editorial footer
│   │   ├── HeroVideo.jsx               # High-performance hero video showcase
│   │   ├── Navbar.jsx                  # Sticky header with mobile overlay
│   │   ├── ProjectDetailModal.jsx      # Reusable case study modal
│   │   └── ProjectMockup.jsx           # Bespoke product UI mockups
│   ├── context/
│   │   └── ThemeContext.jsx            # Dark / Light theme provider
│   ├── data/
│   │   ├── achievements.js             # Academic & hackathon benchmarks
│   │   ├── journey.js                  # Milestones & timeline data
│   │   ├── personal.js                 # Bio, contact, education metadata
│   │   ├── projects.js                 # Centralized project catalog
│   │   ├── skills.js                   # Categorized skills & project mapping
│   │   └── socials.js                  # Social profiles & links
│   ├── hooks/
│   │   ├── useReducedMotion.js         # Accessibility motion preference
│   │   └── useTheme.js
│   ├── sections/
│   │   ├── About.jsx                   # Bio, focus areas & verified info panel
│   │   ├── Achievements.jsx            # Academic and project highlights
│   │   ├── Contact.jsx                 # Validated contact form & direct channels
│   │   ├── GitHubSection.jsx           # Open source repositories
│   │   ├── Hero.jsx                    # Editorial hero with video
│   │   ├── Journey.jsx                 # Academic & engineering timeline
│   │   └── Skills.jsx                  # Interactive technical competencies
│   ├── App.jsx                         # Main app component
│   ├── index.css                       # Tailwind layers & utilities
│   └── main.jsx                        # React entry point
├── .env.example                        # Template for optional form endpoints
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 💻 Getting Started

### Prerequisites
* Node.js 18.x or 20.x
* npm (or yarn / pnpm)

### Installation
```bash
git clone https://github.com/kirteshchatur/kirtesh-portfolio.git
cd kirtesh-portfolio
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
This generates an optimized production bundle inside the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🛠 Centralized Content Management

### How to Add a New Project
Open `src/data/projects.js` and append an object to the `projects` array:

```javascript
{
  id: "my-new-project",
  number: "06",
  title: "PROJECT TITLE",
  category: "Full-Stack Web App",
  description: "A brief description of the project...",
  year: "2026",
  technologies: ["React", "Node.js", "PostgreSQL"],
  features: [
    "Feature 1",
    "Feature 2"
  ],
  github: "https://github.com/kirteshchatur/my-repo",
  liveDemo: null, // or "https://my-demo.com"
  caseStudy: {
    overview: "...",
    problem: "...",
    solution: "...",
    challenges: ["Challenge 1"],
    whatILearned: ["Lesson 1"]
  }
}
```
The page automatically renders the new project with responsive alternating layouts!

### How to Update Resume
Replace the PDF file located at:
`public/resume/Kirtesh-Chatur-Resume.pdf`

### How to Change Social Links & Email
Update `src/data/socials.js` and `src/data/personal.js`:
* `email`: Modify `personalInfo.email`
* `socials`: Update LinkedIn, GitHub, or add new platforms.

---

## 🌐 Deployment

### Deploying on Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import `kirtesh-portfolio`.
4. Framework preset: **Vite** (auto-detected).
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**.

### Deploying on GitHub Pages
1. In `vite.config.js`, set `base: '/kirtesh-portfolio/'` (or `'/'` if using custom domain or username repo).
2. Run `npm run build`.
3. Deploy the `dist` folder to your `gh-pages` branch.

---

## 📄 License
MIT © 2026 Kirtesh Ravindra Chatur. Built with curiosity and code.
