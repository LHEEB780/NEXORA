/**
 * NEXORA — System Footer
 * Quiet, executive design adhering to design constitution guidelines.
 */

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#070A11] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-sm font-semibold tracking-wide text-white">NEXORA</span>
            <span className="text-xs text-slate-400">AI Business Operating System</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400">
            <span>Modular Monolith</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>PostgreSQL & Supabase Blueprint</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Phase 0 Foundation</span>
          </div>

          <div className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} NEXORA. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
