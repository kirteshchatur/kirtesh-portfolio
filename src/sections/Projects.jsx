import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, CheckCircle2, BookOpen } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectMockup from '../components/ProjectMockup';
import ProjectDetailModal from '../components/ProjectDetailModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" aria-label="Selected Work" className="py-24 border-t border-zinc-200/70 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-600 dark:text-blue-400 font-semibold mb-3">
            <span>PORTFOLIO SELECTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            SELECTED WORK
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A selection of projects I've designed and built while exploring full-stack development, AI, and real-world problem solving.
          </p>
        </div>

        {/* Alternating Project Cards List */}
        <div className="space-y-20 lg:space-y-28">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={project.id}
                className="group relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-white/60 dark:bg-[#121217]/70 border border-zinc-200/80 dark:border-zinc-800/80 transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-700 shadow-sm hover:shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Visual Preview Side (Alternates) */}
                  <div className={`lg:col-span-6 w-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedProject(project);
                        }
                      }}
                      aria-label={`Open case study for ${project.title}`}
                    >
                      <ProjectMockup project={project} />
                    </div>
                  </div>

                  {/* Editorial Content Side */}
                  <div className={`lg:col-span-6 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Top Metadata */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-zinc-400 dark:text-zinc-500">
                          PROJECT {project.number}
                        </span>
                        <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-700/60">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Key Features Bullet Points */}
                      <div className="space-y-2 mb-6">
                        {project.features.slice(0, 3).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm focus:ring-2 focus:ring-blue-500"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>View Details / Case Study</span>
                      </button>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-zinc-200 dark:border-zinc-700/60"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                          <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                        </a>
                      )}

                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors border border-blue-500/20"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Reusable Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
