import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight, Layers, AlertCircle, Sparkles } from 'lucide-react';
import ProjectMockup from './ProjectMockup';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const { title, category, description, technologies, features, caseStudy, pipeline, github, liveDemo, context, team } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#111116] rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-[#111116]/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-semibold">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider hidden sm:inline">
              {category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:ring-2 focus:ring-blue-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Header Title & Summary */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
                {category}
              </span>
              {context && (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  {context}
                </span>
              )}
            </div>

            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              {title}
            </h2>

            {team && (
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                Team: <span className="text-zinc-700 dark:text-zinc-300 font-semibold">{team}</span>
              </p>
            )}

            <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed mt-4">
              {caseStudy?.overview || description}
            </p>
          </div>

          {/* Interactive Mockup Container */}
          <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
            <ProjectMockup project={project} />
          </div>

          {/* Special Visual Pipeline for GeM Verify */}
          {pipeline && (
            <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Verification Pipeline Flow</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {pipeline.map((item, idx) => (
                  <div key={item.step} className="p-3.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400">
                        STEP {item.step}
                      </span>
                      <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mt-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Problem & Solution Grid */}
          {caseStudy && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80">
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-2">
                  The Problem
                </h3>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80">
                <h3 className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  The Solution
                </h3>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            </div>
          )}

          {/* Key Features List */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-3">
              Implemented Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-3">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & What I Learned */}
          {caseStudy && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-2">
                  Engineering Challenges
                </h3>
                <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300 list-disc list-inside">
                  {caseStudy.challenges.map((challenge, idx) => (
                    <li key={idx} className="leading-relaxed">{challenge}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-2">
                  What I Learned
                </h3>
                <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300 list-disc list-inside">
                  {caseStudy.whatILearned.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Footer CTAs */}
          <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View on GitHub</span>
                </a>
              )}

              {liveDemo ? (
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <span className="text-xs font-mono text-zinc-400">
                  Demo available locally / on-demand
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
            >
              Close case study [Esc]
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
