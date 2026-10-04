import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Skills from './sections/Skills';
import Journey from './sections/Journey';
import Achievements from './sections/Achievements';
import GitHubSection from './sections/GitHubSection';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2.5 bg-blue-600 text-white font-medium text-xs rounded-xl shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-background-light dark:bg-background-dark text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
        <Navbar />
        
        <main id="main-content">
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Journey />
          <Achievements />
          <GitHubSection />
          <Contact />
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}
