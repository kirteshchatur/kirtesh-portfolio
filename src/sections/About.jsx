import React from 'react';
import { User, MapPin, GraduationCap, Award, Compass, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function About() {
  return (
    <section id="about" aria-label="About Me" className="py-24 border-t border-zinc-200/70 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-600 dark:text-blue-400 font-semibold mb-3">
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            ABOUT ME
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Editorial Bio & Interests */}
          <div className="lg:col-span-7 space-y-6 text-zinc-600 dark:text-zinc-300">
            <p className="text-lg sm:text-xl font-medium text-zinc-900 dark:text-zinc-100 leading-relaxed">
              {personalInfo.about.intro}
            </p>

            <p className="text-base leading-relaxed">
              {personalInfo.about.description}
            </p>

            <p className="text-base leading-relaxed">
              {personalInfo.about.objective}
            </p>

            {/* Current Interests Grid */}
            <div className="pt-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-semibold mb-4 flex items-center gap-2">
                <Compass className="w-4 h-4 text-blue-500" />
                <span>Primary Areas of Focus</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalInfo.interests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-[#121217] border border-zinc-200/80 dark:border-zinc-800/80 text-xs font-medium text-zinc-800 dark:text-zinc-200 shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Compact Verified Information Panel */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121217] border border-zinc-200/90 dark:border-zinc-800/90 shadow-sm">
              
              {/* Minimal Monogram Profile Element */}
              <div className="flex items-center gap-4 pb-6 border-b border-zinc-200/80 dark:border-zinc-800/80">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 dark:bg-zinc-800 text-white flex items-center justify-center font-extrabold text-xl tracking-tight border border-zinc-700/50 shadow-inner">
                  KC
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white text-base">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                    Computer Engineering Student
                  </p>
                </div>
              </div>

              {/* Verified Details List */}
              <dl className="mt-6 space-y-4 text-xs font-mono">
                {personalInfo.details.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-1.5 border-b border-zinc-100 dark:border-zinc-900 last:border-0">
                    <dt className="text-zinc-400 dark:text-zinc-500 font-semibold tracking-wider">
                      {item.label}
                    </dt>
                    <dd className="text-zinc-800 dark:text-zinc-200 font-medium sm:text-right font-sans">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Status Badge */}
              <div className="mt-6 pt-5 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center gap-2.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Actively considering internship and freelance opportunities</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
