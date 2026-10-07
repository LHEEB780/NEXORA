'use client';

/**
 * NEXORA — Top Navigation Bar
 * Follows the strict one-row, three-zone Top Bar Contract.
 */

import React from 'react';
import { Layers } from 'lucide-react';

interface NavbarProps {
  onOpenArchitecture: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenArchitecture, onNavigateSection }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#090D16]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Zone 1: Single text element Brand Wordmark */}
        <button
          onClick={() => onNavigateSection('hero')}
          className="text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-85 text-left"
        >
          NEXORA
        </button>

        {/* Zone 2: 4 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <button
            onClick={() => onNavigateSection('principles')}
            className="hover:text-white transition-colors duration-150 cursor-pointer"
          >
            Operating Model
          </button>
          <button
            onClick={() => onNavigateSection('modules')}
            className="hover:text-white transition-colors duration-150 cursor-pointer"
          >
            Modular Architecture
          </button>
          <button
            onClick={() => onNavigateSection('database')}
            className="hover:text-white transition-colors duration-150 cursor-pointer"
          >
            Data Engine
          </button>
          <button
            onClick={() => onNavigateSection('roadmap')}
            className="hover:text-white transition-colors duration-150 cursor-pointer"
          >
            Roadmap
          </button>
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenArchitecture}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-slate-200 transition-all hover:bg-white/[0.08] hover:text-white hover:border-white/20 active:scale-[0.98] cursor-pointer whitespace-nowrap"
          >
            <Layers className="h-3.5 w-3.5 text-indigo-400" />
            <span>Architecture Inspector</span>
          </button>
        </div>
      </div>
    </header>
  );
};
