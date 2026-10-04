import React, { useState } from 'react';
import { Layers, Terminal, Sparkles, FolderGit2 } from 'lucide-react';
import { skillCategories } from '../data/skills';

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section id="skills" aria-label="Technical Skills" className="py-24 border-t border-zinc-200/70 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-600 dark:text-blue-400 font-semibold mb-3">
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            SKILLS & TOOLING
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Categorized technical proficiencies grounded in coursework and verified project implementations. Hover over any technology to view where it has been applied.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-2xl bg-white/70 dark:bg-[#121217]/70 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100 tracking-wider">
                    {category.category}
                  </h3>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    category.level === 'Comfortable with'
                      ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                      : category.level === 'Exploring'
                      ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                  }`}>
                    {category.level}
                  </span>
                </div>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Interactive List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isSelected = activeSkill?.name === skill.name;

                    return (
                      <div key={skill.name} className="relative">
                        <button
                          type="button"
                          onMouseEnter={() => setActiveSkill(skill)}
                          onMouseLeave={() => setActiveSkill(null)}
                          onClick={() => setActiveSkill(isSelected ? null : skill)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all text-left border ${
                            isSelected
                              ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 border-transparent shadow-sm'
                              : 'bg-zinc-100/70 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border-zinc-200/60 dark:border-zinc-700/40 hover:border-zinc-400 dark:hover:border-zinc-600'
                          }`}
                        >
                          {skill.name}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Subtle Status */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                <span>{category.skills.length} competencies</span>
                <span className="text-zinc-500">Applied</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Project Mapping Card when a skill is active */}
        <div className="mt-8 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs transition-all">
          <div className="flex items-center gap-3">
            <FolderGit2 className="w-4 h-4 text-blue-500 shrink-0" />
            <div>
              {activeSkill ? (
                <p className="text-zinc-800 dark:text-zinc-200 font-medium">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{activeSkill.name}</span>
                  {' '}— applied in:{' '}
                  <span className="text-zinc-600 dark:text-zinc-300 font-mono">
                    {activeSkill.projects.join(', ')}
                  </span>
                </p>
              ) : (
                <p className="text-zinc-500 dark:text-zinc-400">
                  Tip: Hover or tap any skill tag above to view associated projects and applications.
                </p>
              )}
            </div>
          </div>
          {activeSkill && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hidden sm:inline">
              {activeSkill.level}
            </span>
          )}
        </div>

      </div>
    </section>
  );
}
