import React from 'react';
import { GraduationCap, Trophy, Code2, CheckCircle2 } from 'lucide-react';
import { achievements } from '../data/achievements';

const iconMap = {
  GraduationCap: GraduationCap,
  Trophy: Trophy,
  Code: Code2,
};

export default function Achievements() {
  return (
    <section id="achievements" aria-label="Achievements and Milestones" className="py-24 border-t border-zinc-200/70 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-600 dark:text-blue-400 font-semibold mb-3">
            <span>VERIFIED MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            ACADEMIC & PROJECT ACHIEVEMENTS
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Tangible benchmarks of academic consistency, competitive hackathon problem solving, and software development.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Code2;

            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white dark:bg-[#121217] border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="font-mono text-3xl sm:text-4xl font-black text-zinc-950 dark:text-white tracking-tight mb-2">
                    {item.metric}
                  </div>

                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    {item.label}
                  </h3>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {item.subtext}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Benchmark</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
