import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, ArrowUpRight, Code, ExternalLink } from 'lucide-react';

const fallbackRepos = [
  {
    name: "technova",
    description: "Production-oriented electronics e-commerce platform with Node.js/Express REST API and React client.",
    language: "JavaScript",
    html_url: "https://github.com/kirteshchatur",
    topics: ["react", "express", "sqlite", "ecommerce"]
  },
  {
    name: "gem-verify",
    description: "AI-Powered Integrated Bid Compliance Verification Platform for GeM Procurement (SIH 2026 Internal Selection).",
    language: "Python / JS",
    html_url: "https://github.com/kirteshchatur",
    topics: ["ai", "document-processing", "compliance"]
  },
  {
    name: "bite-rush",
    description: "Campus food ordering and cafeteria menu workflow tailored for hostel delivery needs.",
    language: "JavaScript",
    html_url: "https://github.com/kirteshchatur",
    topics: ["javascript", "web", "campus-app"]
  },
  {
    name: "expense-management-system",
    description: "Practical personal finance tracker with local storage balance persistence and PDF export.",
    language: "JavaScript",
    html_url: "https://github.com/kirteshchatur",
    topics: ["finance", "localstorage", "pdf-export"]
  }
];

export default function GitHubSection() {
  const [repos, setRepos] = useState(fallbackRepos);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    // Attempt live fetch from public GitHub API with short timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    fetch('https://api.github.com/users/kirteshchatur/repos?sort=updated&per_page=6', {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error('Network response not ok');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          // Format repos
          const formatted = data.map((item) => ({
            name: item.name,
            description: item.description || "Open source development project",
            language: item.language || "JavaScript",
            html_url: item.html_url,
            stargazers_count: item.stargazers_count,
            forks_count: item.forks_count,
            topics: item.topics || []
          }));
          setRepos(formatted.slice(0, 4));
          setIsLive(true);
        }
      })
      .catch(() => {
        // Graceful fallback to verified repositories
        setRepos(fallbackRepos);
        setIsLive(false);
      })
      .finally(() => {
        clearTimeout(timeoutId);
        setLoading(false);
      });
  }, []);

  return (
    <section id="github" aria-label="Open Source and GitHub" className="py-24 border-t border-zinc-200/70 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Profile Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-600 dark:text-blue-400 font-semibold mb-3">
              <span>OPEN SOURCE & CODE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
              I BUILD IN PUBLIC.
            </h2>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Explore my projects, experiments, and learning journey on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/kirteshchatur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold text-xs hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm self-start md:self-auto focus:ring-2 focus:ring-blue-500"
          >
            <Github className="w-4 h-4" />
            <span>@kirteshchatur on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo, idx) => (
            <a
              key={repo.name || idx}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white dark:bg-[#121217] border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-blue-500" />
                    <h3 className="font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  {repo.language}
                </span>

                <span className="text-[11px] text-zinc-400 group-hover:text-blue-500 transition-colors">
                  View Repository ↗
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Status notice */}
        <div className="mt-8 text-center text-xs font-mono text-zinc-400">
          {isLive ? '✓ Synced with GitHub Public API' : '• Verified Repository Archive'}
        </div>

      </div>
    </section>
  );
}
