import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/personal';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll if hash link
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-white/85 dark:bg-[#0a0a0d]/85 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-sm'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="group flex items-center gap-2 focus:outline-none"
            aria-label="Kirtesh Chatur Homepage"
          >
            <span className="font-extrabold tracking-tight text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors">
              KIRTESH
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors focus:ring-2 focus:ring-blue-500"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Kirtesh-Chatur-Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all border border-transparent shadow-sm focus:ring-2 focus:ring-blue-500"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              className="p-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Navigation Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[57px] bg-white dark:bg-[#0a0a0d] z-40 md:hidden flex flex-col justify-between p-6 overflow-y-auto border-t border-zinc-200 dark:border-zinc-800 animate-fadeIn"
          style={{ minHeight: 'calc(100vh - 57px)' }}
        >
          <div className="flex flex-col gap-5 pt-4">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Navigation</span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-500 transition-colors py-1 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-zinc-400 text-sm font-mono">↗</span>
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-4">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Kirtesh-Chatur-Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="text-xs text-zinc-500 text-center font-mono">
              PVPIT Pune • Computer Engineering
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
