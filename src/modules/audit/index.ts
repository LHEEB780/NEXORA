/**
 * NEXORA — Audit Module Public Interface
 */

export * from './types';

export const AUDIT_MODULE_METADATA = {
  id: 'audit',
  name: 'Audit Trail & Compliance',
  description: 'Immutable security event logging, compliance records, and forensic change tracking.',
  phase: 'Phase 0 Ready',
} as const;
