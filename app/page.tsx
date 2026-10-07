'use client';

/**
 * NEXORA — Primary Landing View
 * Phase 0A: Next.js App Router Page
 */

import { useState } from 'react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { CommandCenter } from '@/src/components/command/CommandCenter';
import { FoundationalPrinciples } from '@/src/components/foundation/FoundationalPrinciples';
import { ArchitectureDrawer } from '@/src/components/foundation/ArchitectureDrawer';

export default function HomePage() {
  const [isArchitectureOpen, setIsArchitectureOpen] = useState(false);
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

  const handleOpenArchitecture = (moduleId?: string) => {
    if (moduleId) {
      setSelectedModuleId(moduleId);
    }
    setIsArchitectureOpen(true);
  };

  const handleCloseArchitecture = () => {
    setIsArchitectureOpen(false);
    setSelectedModuleId(null);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col bg-grid-subtle">
      {/* Top Bar adhering to the Top Bar Contract */}
      <Navbar
        onOpenArchitecture={() => handleOpenArchitecture()}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Command Center & Hero (The Core 3-Step Experience) */}
        <CommandCenter onOpenArchitecture={() => handleOpenArchitecture()} />

        {/* Foundational Principles & 11 Modular Domains */}
        <FoundationalPrinciples onSelectModule={(modId) => handleOpenArchitecture(modId)} />
      </main>

      {/* Architecture Inspector Modal for Deep Boundary Review */}
      <ArchitectureDrawer
        isOpen={isArchitectureOpen}
        onClose={handleCloseArchitecture}
        initialModuleId={selectedModuleId}
      />

      {/* Executive Clean Footer */}
      <Footer />
    </div>
  );
}
