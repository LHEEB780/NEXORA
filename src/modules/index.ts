/**
 * NEXORA — Modular Monolith Registry
 * Phase 0: Foundation
 *
 * All 11 domain modules registered with their foundational boundaries.
 */

import { AUTH_MODULE_METADATA } from './auth';
import { ORGANIZATIONS_MODULE_METADATA } from './organizations';
import { BUSINESS_PROFILE_METADATA } from './business-profile';
import { AI_MODULE_METADATA } from './ai';
import { INTEGRATIONS_MODULE_METADATA } from './integrations';
import { SOCIAL_MODULE_METADATA } from './social';
import { CRM_MODULE_METADATA } from './crm';
import { AUTOMATION_MODULE_METADATA } from './automation';
import { ANALYTICS_MODULE_METADATA } from './analytics';
import { BILLING_MODULE_METADATA } from './billing';
import { AUDIT_MODULE_METADATA } from './audit';

export const MODULES_REGISTRY = [
  AUTH_MODULE_METADATA,
  ORGANIZATIONS_MODULE_METADATA,
  BUSINESS_PROFILE_METADATA,
  AI_MODULE_METADATA,
  INTEGRATIONS_MODULE_METADATA,
  SOCIAL_MODULE_METADATA,
  CRM_MODULE_METADATA,
  AUTOMATION_MODULE_METADATA,
  ANALYTICS_MODULE_METADATA,
  BILLING_MODULE_METADATA,
  AUDIT_MODULE_METADATA,
] as const;

export type ModuleId = typeof MODULES_REGISTRY[number]['id'];

export * as auth from './auth';
export * as organizations from './organizations';
export * as businessProfile from './business-profile';
export * as ai from './ai';
export * as integrations from './integrations';
export * as social from './social';
export * as crm from './crm';
export * as automation from './automation';
export * as analytics from './analytics';
export * as billing from './billing';
export * as audit from './audit';
