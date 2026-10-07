/**
 * NEXORA — Integrations Module Public Interface
 */

export * from './types';

export const INTEGRATIONS_MODULE_METADATA = {
  id: 'integrations',
  name: 'Integrations Hub',
  description: 'Unified gateway for third-party SaaS connectors, OAuth tokens, and API orchestration.',
  phase: 'Phase 0 Ready',
} as const;
