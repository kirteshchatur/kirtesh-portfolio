import React from 'react';
import { Calendar, Award, Sparkles, Code2, GraduationCap } from 'lucide-react';
import { journey } from '../data/journey';

export default function Journey() {
  return (
    <section id="journey" aria-label="My Journey" className="py-24 border-t border-zinc-200/70 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-600 dark:text-blue-400 font-semibold mb-3">
            <span>TIMELINE & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            MY JOURNEY
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A transparent timeline of my academic trajectory, project milestones, and hackathon participation.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {journey.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-2 border-blue-500 group-hover:scale-125 transition-transform" />

              {/* Timeline Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#121217] border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                
                {/* Top Badge & Year */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                      {item.year}
                    </span>
                    <span className="text-zinc-300 dark:text-zinc-700">•</span>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      {item.category}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60 font-medium">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {item.description}
                </p>

                {item.project && (
                  <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <span>Project: <strong className="text-zinc-800 dark:text-zinc-200">{item.project}</strong></span>
                    {item.team && <span>Team: <strong className="text-zinc-800 dark:text-zinc-200">{item.team}</strong></span>}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
