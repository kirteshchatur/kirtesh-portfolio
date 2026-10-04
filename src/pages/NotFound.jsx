import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background-light dark:bg-background-dark text-zinc-900 dark:text-zinc-100">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold">
          ERROR 404
        </div>

        <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
          Page Not Found
        </h1>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Looks like this page took a wrong turn or doesn't exist.
        </p>

        <div>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold text-xs hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </a>
        </div>
      </div>
    </div>
  );
}
