/**
 * NEXORA — Auth Module Public Interface
 */

export * from './types';

export const AUTH_MODULE_METADATA = {
  id: 'auth',
  name: 'Authentication & Identity',
  description: 'Manages user identities, secure sessions, and access credentials.',
  phase: 'Phase 0 Ready (Awaiting Phase 1 Core Implementation)',
  targetEngine: 'Supabase Auth / JWT',
} as const;
