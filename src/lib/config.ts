/**
 * NEXORA — System Configuration
 *
 * Safe foundation configuration with zero secrets.
 * Prepares environment variable mapping for future phases.
 */

export const APP_CONFIG = {
  name: 'NEXORA',
  tagline: 'AI Business Operating System',
  phase: 'PHASE 0 — PROJECT FOUNDATION',
  version: '0.1.0-alpha.0',
  isProduction: import.meta.env.PROD ?? false,
  apiPrefix: '/api/v1',
  defaultTheme: 'dark',
} as const;

export type AppConfig = typeof APP_CONFIG;
