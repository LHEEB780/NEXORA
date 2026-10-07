'use client';

/**
 * NEXORA — Foundational Principles & Modular Architecture Overview
 * Clean, executive, unboxed layout with strict anti-slop guidelines.
 */

import React from 'react';
import { MODULES_REGISTRY } from '../../modules';
import { Database, ShieldCheck, Cpu } from 'lucide-react';

interface FoundationalPrinciplesProps {
  onSelectModule: (moduleId: string) => void;
}

export const FoundationalPrinciples: React.FC<FoundationalPrinciplesProps> = ({ onSelectModule }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 space-y-24">
      {/* 3 Core Operating Principles */}
      <section id="principles" className="space-y-8">
        <div className="border-b border-white/[0.08] pb-4">
          <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">The Fundamental Loop</span>
          <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
            Three Steps from Intent to Execution
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            NEXORA eliminates fragmented SaaS dashboards by converting natural language objectives into inspectable, deterministic business workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <span className="font-mono text-xs text-indigo-400">01. Intent Declaration</span>
            <h3 className="text-base font-semibold text-white">Tell NEXORA what you want to achieve</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Express high-level goals in plain language. The system contextualizes requests against your business profile and organization rules.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs text-indigo-400">02. Inspectable Staging</span>
            <h3 className="text-base font-semibold text-white">Review what the AI prepared</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Transparent multi-step plans, generated copy, integration payloads, and validation checks are presented for human verification.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs text-indigo-400">03. Deterministic Execution</span>
            <h3 className="text-base font-semibold text-white">Authorize and execute</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              One-click execution triggers external APIs, records append-only audit entries, and tracks milestone telemetry automatically.
            </p>
          </div>
        </div>
      </section>

      {/* 11 Modules in Modular Monolith */}
      <section id="modules" className="space-y-8">
        <div className="border-b border-white/[0.08] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">Architecture Specification</span>
            <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
              Modular Monolith Foundation
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              11 isolated domain modules with strict zero-coupling contracts ready for progressive rollout.
            </p>
          </div>
          <div className="text-xs font-mono text-slate-400">
            11 / 11 Domains Initialized
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODULES_REGISTRY.map((mod) => (
            <button
              key={mod.id}
              onClick={() => onSelectModule(mod.id)}
              className="text-left p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-slate-400 group-hover:text-indigo-400 transition-colors">
                  modules/{mod.id}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {mod.phase.includes('Ready') ? 'Foundation Ready' : 'Prepared'}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1.5">{mod.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                {mod.description}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Database & Infrastructure Readiness */}
      <section id="database" className="space-y-6">
        <div className="border-b border-white/[0.08] pb-4">
          <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">Persistence Foundation</span>
          <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
            PostgreSQL & Supabase Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] space-y-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <Database className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-semibold text-white">Relational Blueprint</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              DDL schemas designed for PostgreSQL 15+ in <code className="text-indigo-300">src/lib/database/schema.sql</code> including organizations, users, business profiles, and audit ledgers.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] space-y-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-semibold text-white">Multi-Tenant Isolation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Row Level Security (RLS) policies configured to guarantee tenant isolation between business workspaces without cross-tenant data leak.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] space-y-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-semibold text-white">Pluggable Client Contract</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Abstracted database client interface in <code className="text-indigo-300">src/lib/database/client.ts</code> safely holds zero credentials and zero live sockets in Phase 0.
            </p>
          </div>
        </div>
      </section>

      {/* Phased Roadmap Summary */}
      <section id="roadmap" className="space-y-6">
        <div className="border-b border-white/[0.08] pb-4">
          <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">Evolution Plan</span>
          <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
            Implementation Progression
          </h2>
        </div>

        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-indigo-500/30 bg-indigo-500/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-indigo-400">Phase 0 (Current)</span>
                <span className="text-xs text-emerald-400 font-medium">Completed & Active</span>
              </div>
              <h3 className="text-sm font-semibold text-white mt-0.5">Project Foundation & Modular Architecture</h3>
              <p className="text-xs text-slate-400 mt-1">
                Zero commercial stubs, modular boundaries registered, command center input established, database blueprint drafted.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 opacity-75">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-slate-400">Phase 1 (Next Step)</span>
                <span className="text-xs text-slate-500 font-medium">Pending Approval</span>
              </div>
              <h3 className="text-sm font-semibold text-white mt-0.5">Core OS, Identity & Business Profile</h3>
              <p className="text-xs text-slate-400 mt-1">
                Database migrations, Supabase connection, team permissions, and company context engine.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 opacity-60">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-slate-400">Phase 2</span>
                <span className="text-xs text-slate-500 font-medium">Planned</span>
              </div>
              <h3 className="text-sm font-semibold text-white mt-0.5">AI Orchestrator & Live Command Center</h3>
              <p className="text-xs text-slate-400 mt-1">
                Natural language goal compilation, multi-step plan generation, human-in-the-loop review interface.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
