import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#0a0a0d] py-16 text-zinc-600 dark:text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-200/60 dark:border-zinc-800/60">
          
          {/* Identity & Location */}
          <div className="md:col-span-6 space-y-3">
            <a href="#" className="font-extrabold text-lg text-zinc-950 dark:text-white tracking-tight">
              KIRTESH CHATUR
            </a>
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              Computer Engineering Student • Developer • Problem Solver
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              Padmabhushan Vasantdada Patil Institute of Technology (PVPIT), Pune, India
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Navigation
            </p>
            <ul className="space-y-2 text-xs">
              <li><a href="#work" className="hover:text-blue-500 transition-colors">Selected Work</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About & Focus</a></li>
              <li><a href="#skills" className="hover:text-blue-500 transition-colors">Technical Skills</a></li>
              <li><a href="#journey" className="hover:text-blue-500 transition-colors">Journey & Timeline</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Get in Touch</a></li>
            </ul>
          </div>

          {/* Social Profiles & Direct Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Connect
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/kirteshchatur"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-blue-500 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/kirtesh-chatur-6b08332a6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-blue-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs font-mono text-zinc-400 pt-2">
              Status: Open to internships
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© 2026 Kirtesh Chatur. Built with curiosity and code.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-blue-500 transition-colors focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
