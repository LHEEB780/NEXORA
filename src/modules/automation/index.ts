/**
 * NEXORA — Automation Module Public Interface
 */

export * from './types';

export const AUTOMATION_MODULE_METADATA = {
  id: 'automation',
  name: 'Automation & Workflow Engine',
  description: 'Deterministic event bus, scheduled triggers, and multi-app execution pipelines.',
  phase: 'Phase 0 Ready (Activepieces / Workflow Engine Integration in Future Phases)',
} as const;
