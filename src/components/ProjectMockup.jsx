import React from 'react';
import { 
  ShoppingBag, 
  Cpu, 
  ShieldCheck, 
  FileText, 
  DollarSign, 
  PieChart, 
  Utensils, 
  Code,
  Layers,
  CheckCircle2,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

export default function ProjectMockup({ project }) {
  const { id } = project;

  // Custom high-fidelity mockups representing the real product features
  if (id === 'technova') {
    return (
      <div className="w-full h-full min-h-[280px] sm:min-h-[340px] bg-gradient-to-br from-zinc-900 to-zinc-950 p-5 rounded-2xl flex flex-col justify-between border border-zinc-800 text-zinc-100 font-sans shadow-inner">
        {/* Mock Top bar */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span className="font-bold tracking-tight text-xs text-white">TECHNOVA STORE</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
            <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">SQLite + REST API</span>
          </div>
        </div>

        {/* Mock Catalog Grid */}
        <div className="grid grid-cols-2 gap-3 my-4">
          <div className="p-3 rounded-xl bg-zinc-800/60 border border-zinc-700/40 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono text-blue-400">Audio Gear</span>
              <p className="text-xs font-semibold text-white mt-1">Noise Cancelling Pro</p>
              <p className="text-xs font-mono text-zinc-400 mt-1">$249.00</p>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">In Stock</span>
              <span className="text-[10px] text-zinc-300">Add to Cart</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-zinc-800/60 border border-zinc-700/40 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono text-blue-400">Displays</span>
              <p className="text-xs font-semibold text-white mt-1">4K Ultra Studio 27"</p>
              <p className="text-xs font-mono text-zinc-400 mt-1">$689.00</p>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">In Stock</span>
              <span className="text-[10px] text-zinc-300">Add to Cart</span>
            </div>
          </div>
        </div>

        {/* Mock Cart & Auth Status */}
        <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-blue-400" />
            <span className="text-zinc-300 font-medium">Cart Active (2 items)</span>
          </div>
          <span className="font-mono text-blue-400 font-semibold">$938.00</span>
        </div>
      </div>
    );
  }

  if (id === 'gem-verify') {
    return (
      <div className="w-full h-full min-h-[280px] sm:min-h-[340px] bg-gradient-to-br from-zinc-900 to-[#10141f] p-5 rounded-2xl flex flex-col justify-between border border-indigo-900/40 text-zinc-100 font-sans shadow-inner">
        {/* Mock Top bar */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
            <span className="font-bold tracking-tight text-xs text-white">GeM VERIFY ENGINE</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            SIH 2026 Selection
          </span>
        </div>

        {/* Verification Checklist */}
        <div className="space-y-2 my-3">
          <div className="p-2.5 rounded-lg bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-zinc-100">Annual Turnover Verification</p>
                <p className="text-[10px] font-mono text-zinc-400">Clause 4.2 • Requirement: &gt;₹50L</p>
              </div>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">PASSED</span>
          </div>

          <div className="p-2.5 rounded-lg bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-zinc-100">ISO 9001:2015 Certification</p>
                <p className="text-[10px] font-mono text-zinc-400">Authenticity verified via QR hash</p>
              </div>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">PASSED</span>
          </div>

          <div className="p-2.5 rounded-lg bg-zinc-800/80 border border-amber-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-zinc-100">OEM Authorization Form</p>
                <p className="text-[10px] font-mono text-zinc-400">Requires Officer Signature Review</p>
              </div>
            </div>
            <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">FLAGGED</span>
          </div>
        </div>

        {/* Confidence Score Bar */}
        <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-900/60 flex items-center justify-between text-xs">
          <span className="text-indigo-200">Compliance Match Index</span>
          <span className="font-mono text-indigo-400 font-bold">94.8% Match</span>
        </div>
      </div>
    );
  }

  if (id === 'bite-rush') {
    return (
      <div className="w-full h-full min-h-[280px] sm:min-h-[340px] bg-gradient-to-br from-zinc-900 to-[#19150e] p-5 rounded-2xl flex flex-col justify-between border border-amber-900/40 text-zinc-100 font-sans shadow-inner">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-2">
            <Utensils className="w-4 h-4 text-amber-500" />
            <span className="font-bold tracking-tight text-xs text-white">BITE RUSH • CAMPUS FOOD</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300">
            Hostel Express
          </span>
        </div>

        <div className="space-y-2.5 my-3">
          <div className="p-3 rounded-xl bg-zinc-800/60 border border-zinc-700/40 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-white">Veg Grilled Sandwich</p>
              <p className="text-[10px] text-zinc-400">Central Canteen • 10 mins prep</p>
            </div>
            <span className="font-mono text-xs text-amber-400 font-semibold">₹60</span>
          </div>

          <div className="p-3 rounded-xl bg-zinc-800/60 border border-zinc-700/40 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-white">Cold Coffee with Crush</p>
              <p className="text-[10px] text-zinc-400">Nescafe Hub • Quick Pick</p>
            </div>
            <span className="font-mono text-xs text-amber-400 font-semibold">₹45</span>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between text-xs">
          <span className="text-zinc-300">Delivery: PVPIT Hostel Block A</span>
          <span className="font-mono text-emerald-400 font-semibold">UPI Ready</span>
        </div>
      </div>
    );
  }

  if (id === 'expense-management') {
    return (
      <div className="w-full h-full min-h-[280px] sm:min-h-[340px] bg-gradient-to-br from-zinc-900 to-[#0e1913] p-5 rounded-2xl flex flex-col justify-between border border-emerald-900/40 text-zinc-100 font-sans shadow-inner">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-2">
            <PieChart className="w-4 h-4 text-emerald-500" />
            <span className="font-bold tracking-tight text-xs text-white">EXPENSE DASHBOARD</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300">
            LocalStorage Sync
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 my-3">
          <div className="p-3 rounded-xl bg-zinc-800/70 border border-zinc-700/50">
            <span className="text-[10px] uppercase font-mono text-zinc-400">Current Balance</span>
            <p className="text-base font-bold font-mono text-emerald-400 mt-1">₹8,450.00</p>
            <p className="text-[10px] text-zinc-400 mt-0.5">Month Allowance</p>
          </div>
          <div className="p-3 rounded-xl bg-zinc-800/70 border border-zinc-700/50">
            <span className="text-[10px] uppercase font-mono text-zinc-400">Total Spent</span>
            <p className="text-base font-bold font-mono text-rose-400 mt-1">₹3,550.00</p>
            <p className="text-[10px] text-zinc-400 mt-0.5">38 Transactions</p>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between text-xs">
          <span className="text-zinc-300">Statement Export</span>
          <span className="font-mono text-blue-400 font-semibold text-[11px] underline">Download PDF</span>
        </div>
      </div>
    );
  }

  // Default / Portfolio Website Mockup
  return (
    <div className="w-full h-full min-h-[280px] sm:min-h-[340px] bg-gradient-to-br from-zinc-900 to-zinc-950 p-5 rounded-2xl flex flex-col justify-between border border-zinc-800 text-zinc-100 font-sans shadow-inner">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4 text-blue-400" />
          <span className="font-bold tracking-tight text-xs text-white">PORTFOLIO ARCHITECTURE</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300">
          React + Vite + Tailwind
        </span>
      </div>

      <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/40 my-3 font-mono text-xs text-zinc-300 space-y-1.5">
        <p className="text-blue-400 font-semibold">// Modular Data Architecture</p>
        <p className="text-zinc-400">src/data/projects.js</p>
        <p className="text-zinc-400">src/data/skills.js</p>
        <p className="text-zinc-400">src/data/journey.js</p>
        <p className="text-emerald-400 mt-2 font-sans font-medium">✓ Lighthouse 95+ Core Web Vitals</p>
      </div>

      <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between text-xs font-mono">
        <span className="text-zinc-400">Bundle Status</span>
        <span className="text-emerald-400">Zero Bloat • Accessible</span>
      </div>
    </div>
  );
}
