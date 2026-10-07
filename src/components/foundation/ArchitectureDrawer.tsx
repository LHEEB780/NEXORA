'use client';

/**
 * NEXORA — Architecture Inspector Modal
 *
 * Provides inspectability of:
 * 1. 11 Domain Module Boundaries
 * 2. PostgreSQL / Supabase Schema SQL
 * 3. Architecture Rules
 */

import React, { useState } from 'react';
import { MODULES_REGISTRY } from '../../modules';
import { X, Layers, Database, FileText, CheckCircle2 } from 'lucide-react';

interface ArchitectureDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialModuleId?: string | null;
}

export const ArchitectureDrawer: React.FC<ArchitectureDrawerProps> = ({
  isOpen,
  onClose,
  initialModuleId,
}) => {
  const [activeTab, setActiveTab] = useState<'modules' | 'database' | 'docs'>('modules');
  const [selectedModuleId, setSelectedModuleId] = useState<string>(
    initialModuleId || MODULES_REGISTRY[0].id
  );

  if (!isOpen) return null;

  const currentModule = MODULES_REGISTRY.find((m) => m.id === selectedModuleId) || MODULES_REGISTRY[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[85vh] rounded-2xl border border-white/10 bg-[#0C101B] shadow-2xl flex flex-col overflow-hidden text-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-white">NEXORA Architecture Inspector</h2>
              <p className="text-xs text-slate-400">Phase 0 — Modular Monolith Foundation Verification</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Architecture Inspector"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 px-6 bg-white/[0.02]">
          <button
            onClick={() => setActiveTab('modules')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'modules'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>Modules Registry (11 Domains)</span>
          </button>
          <button
            onClick={() => setActiveTab('database')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'database'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Database className="h-3.5 w-3.5" />
            <span>PostgreSQL & Supabase Blueprint</span>
          </button>
          <button
            onClick={() => setActiveTab('docs')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'docs'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Architecture & Roadmap Specs</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'modules' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Modules list column */}
              <div className="space-y-1.5 md:border-r md:border-white/10 md:pr-4">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Modular Boundaries
                </span>
                {MODULES_REGISTRY.map((mod) => (
                  <button
                    key={mod.id}
                    onClick={() => setSelectedModuleId(mod.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center justify-between ${
                      selectedModuleId === mod.id
                        ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                        : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200'
                    }`}
                  >
                    <span className="truncate">{mod.name}</span>
                    <span className="font-mono text-[10px] text-slate-500">{mod.id}</span>
                  </button>
                ))}
              </div>

              {/* Module details column */}
              <div className="md:col-span-2 space-y-4">
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-indigo-400">src/modules/{currentModule.id}</span>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Boundary Registered</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{currentModule.name}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{currentModule.description}</p>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Directory Artifacts
                  </h4>
                  <div className="space-y-1.5 font-mono text-xs text-slate-300">
                    <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                      <span>src/modules/{currentModule.id}/types.ts</span>
                      <span className="text-slate-500 text-[11px]">Domain contracts & types</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                      <span>src/modules/{currentModule.id}/index.ts</span>
                      <span className="text-slate-500 text-[11px]">Public module export</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                      <span>src/modules/{currentModule.id}/README.md</span>
                      <span className="text-slate-500 text-[11px]">Domain boundary specification</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-400 bg-indigo-500/[0.04] p-3 rounded-lg border border-indigo-500/10">
                  <span className="text-indigo-300 font-medium">Phase 0 Isolation Rule: </span>
                  No business logic or external API calls are executed in this module during Phase 0. Contracts are ready for Phase 1/2 integration.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'database' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-2">
                <h3 className="text-sm font-semibold text-white">PostgreSQL & Supabase DDL Architecture</h3>
                <p className="text-xs text-slate-400">
                  Located in <code className="text-indigo-400">src/lib/database/schema.sql</code>. Ready for immediate execution upon Supabase / Cloud SQL provisioning.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed max-h-[380px]">
                <pre>{`-- Target Version: PostgreSQL 15+ / Supabase
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Organizations & Multi-tenancy
CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(64) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Users & Memberships
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE organization_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role VARCHAR(32) NOT NULL DEFAULT 'member'
);

-- 3. Business Profile (Brand voice, operational identity)
CREATE TABLE business_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID UNIQUE NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    industry VARCHAR(128),
    tone_of_voice VARCHAR(64) DEFAULT 'professional',
    brand_guidelines JSONB DEFAULT '{}'::jsonb
);

-- 4. Immutable Audit Logs
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    actor_id UUID REFERENCES users(id) ON DELETE SET NULL,
    action VARCHAR(128) NOT NULL,
    module VARCHAR(64) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);`}</pre>
              </div>
            </div>
          )}

          {activeTab === 'docs' && (
            <div className="space-y-4 text-xs text-slate-300">
              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-2">
                <h3 className="text-sm font-semibold text-white">Project Documentation Files</h3>
                <p className="text-slate-400">
                  Comprehensive architectural blueprints, database contracts, and progression roadmaps are stored in the <code className="text-indigo-400">/docs</code> directory.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-lg bg-black/40 border border-white/10 space-y-2">
                  <div className="font-semibold text-white">docs/ARCHITECTURE.md</div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Modular Monolith principles, domain boundaries, human-in-the-loop safeguards, and scaling guidelines.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-black/40 border border-white/10 space-y-2">
                  <div className="font-semibold text-white">docs/DATABASE_BLUEPRINT.md</div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Relational data models, Row Level Security (RLS) policies, and foreign key relations for PostgreSQL/Supabase.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-black/40 border border-white/10 space-y-2">
                  <div className="font-semibold text-white">docs/ROADMAP.md</div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Step-by-step evolution from Phase 0 Foundation up to Phase 4 Business Suite without premature feature leakage.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 px-6 py-3 bg-white/[0.02] flex items-center justify-between text-xs text-slate-400">
          <span>Zero external API keys · Zero live sockets · Zero mock commercial bloat</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg bg-white/10 text-white font-medium hover:bg-white/15 cursor-pointer"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
