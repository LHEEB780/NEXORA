/**
 * NEXORA — Billing Module Public Interface
 */

export * from './types';

export const BILLING_MODULE_METADATA = {
  id: 'billing',
  name: 'Billing & Subscriptions',
  description: 'Seat allocations, plan tiers, credit utilization, and invoice processing.',
  phase: 'Phase 0 Ready',
} as const;
