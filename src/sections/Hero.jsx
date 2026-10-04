import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import HeroVideo from '../components/HeroVideo';
import { personalInfo } from '../data/personal';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero Overview"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-24 overflow-hidden"
    >
      {/* Background ambient lighting subtle glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-blue-500/5 dark:bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/60 mb-6 text-xs font-mono text-zinc-700 dark:text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="tracking-wider uppercase font-semibold text-[11px]">
                {personalInfo.eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.08] mb-6">
              I BUILD DIGITAL <br className="hidden sm:inline" />
              PRODUCTS THAT <br className="hidden sm:inline" />
              SOLVE <span className="underline decoration-blue-500/60 decoration-wavy decoration-2 underline-offset-8">REAL PROBLEMS.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mb-8">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-md group focus:ring-2 focus:ring-blue-500"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-medium text-sm hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-800 transition-all group focus:ring-2 focus:ring-blue-500"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Small Metadata Bar */}
            <div className="pt-6 border-t border-zinc-200/70 dark:border-zinc-800/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <div className="flex flex-col">
                <span className="text-zinc-400 dark:text-zinc-500 text-[10px] uppercase">Institution</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">PVPIT Pune</span>
              </div>
              <div className="flex flex-col">
                <span className="text-zinc-400 dark:text-zinc-500 text-[10px] uppercase">Discipline</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">Computer Engg.</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex flex-col">
                <span className="text-zinc-400 dark:text-zinc-500 text-[10px] uppercase">Status</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Open to Internships
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Video Showcase Container */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <HeroVideo />
          </div>

        </div>
      </div>
    </section>
  );
}
