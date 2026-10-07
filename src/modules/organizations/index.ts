/**
 * NEXORA — Organizations Module Public Interface
 */

export * from './types';

export const ORGANIZATIONS_MODULE_METADATA = {
  id: 'organizations',
  name: 'Organizations & Multi-Tenancy',
  description: 'Tenant isolation, workspaces, membership rosters, and permission assignment.',
  phase: 'Phase 0 Ready',
} as const;
