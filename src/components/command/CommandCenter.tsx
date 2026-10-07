'use client';

/**
 * NEXORA — Primary Command Center
 *
 * Core interaction trigger embodying the foundational principle:
 * 1. "Tell NEXORA what you want to accomplish."
 * 2. Review what AI prepared.
 * 3. Execute.
 */

import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';

interface CommandCenterProps {
  onOpenArchitecture: () => void;
}

export const CommandCenter: React.FC<CommandCenterProps> = ({ onOpenArchitecture }) => {
  const [prompt, setPrompt] = useState('');
  const [activeStage, setActiveStage] = useState<'input' | 'review' | 'execute'>('input');

  const handleSimulateReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setActiveStage('review');
  };

  const handleProceedToExecute = () => {
    setActiveStage('execute');
  };

  const handleReset = () => {
    setPrompt('');
    setActiveStage('input');
  };

  const sampleObjectives = [
    "Synchronize qualified leads to CRM and schedule quarterly recap",
    "Prepare omnichannel launch announcement across verified channels",
    "Audit system access permissions and aggregate workspace telemetry",
  ];

  return (
    <section id="hero" className="relative py-20 lg:py-28 px-6 lg:px-8">
      {/* Background glow anchor */}
      <div className="absolute inset-0 pointer-events-none flex justify-center -z-10">
        <div className="w-[600px] h-[350px] bg-indigo-600/10 blur-[130px] rounded-full" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* Brand Kicker */}
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-400">
          <span>AI Business Operating System</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Foundation Stage</span>
        </div>

        {/* Primary Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
          NEXORA
        </h1>

        {/* Clear prompt instruction */}
        <p className="text-xl sm:text-2xl font-medium text-slate-300 max-w-2xl mx-auto mb-10">
          Tell NEXORA what you want to accomplish.
        </p>

        {/* Command Center Interaction Box */}
        <div className="mx-auto max-w-2xl text-left">
          <div className="rounded-2xl border border-white/10 bg-[#0F1422] p-2 sm:p-3 shadow-2xl transition-all focus-within:border-indigo-500/50 focus-within:ring-2 focus-within:ring-indigo-500/20">
            {activeStage === 'input' && (
              <form onSubmit={handleSimulateReview} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1 flex items-center">
                  <div className="pl-3 text-slate-500">
                    <Sparkles className="h-5 w-5 text-indigo-400" />
                  </div>
                  <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g. Expand outreach to enterprise partners and sync contacts..."
                    className="w-full bg-transparent px-3 py-3.5 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
                    aria-label="What do you want to accomplish?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!prompt.trim()}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                >
                  <span>Review Staging</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}

            {activeStage === 'review' && (
              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">Stage 02: Plan Review</span>
                    <h2 className="text-sm font-medium text-white truncate max-w-md">{prompt}</h2>
                  </div>
                  <button
                    onClick={handleReset}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="h-3 w-3" /> Reset
                  </button>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-start justify-between">
                    <div>
                      <div className="font-medium text-white">1. Context Analysis & Schema Mapping</div>
                      <div className="text-slate-400 mt-0.5">Inspect business profile constraints & tenant permissions</div>
                    </div>
                    <span className="text-emerald-400 font-medium">Validated</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-start justify-between">
                    <div>
                      <div className="font-medium text-white">2. Action Plan Preparation</div>
                      <div className="text-slate-400 mt-0.5">Staged multi-module execution pipeline ready for authorization</div>
                    </div>
                    <span className="text-amber-400 font-medium">Awaiting Execution</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    onClick={handleReset}
                    className="px-3 py-1.5 text-xs text-slate-400 hover:text-white cursor-pointer"
                  >
                    Revise Objective
                  </button>
                  <button
                    onClick={handleProceedToExecute}
                    className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-500 cursor-pointer"
                  >
                    <span>Execute Plan</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            )}

            {activeStage === 'execute' && (
              <div className="p-6 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h2 className="text-base font-semibold text-white">Core 3-Stage Cycle Demonstrated</h2>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  1. Goal Declared &rarr; 2. Plan Staged for Review &rarr; 3. Execution Dispatched.
                  <br />
                  Business mutations are deliberately disabled in Phase 0 Foundation.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="rounded-lg border border-white/10 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white cursor-pointer"
                  >
                    Try Another Goal
                  </button>
                  <button
                    onClick={onOpenArchitecture}
                    className="rounded-lg bg-indigo-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-indigo-500 cursor-pointer"
                  >
                    View System Blueprint
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sample Prompts Suggestion */}
          {activeStage === 'input' && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500">Suggested objectives:</span>
              {sampleObjectives.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => setPrompt(sample)}
                  className="rounded-md border border-white/5 bg-white/[0.02] px-2.5 py-1 text-xs text-slate-400 hover:text-white hover:border-white/15 transition-colors cursor-pointer text-left truncate max-w-xs"
                >
                  {sample}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
