/**
 * NEXORA — Billing & Subscription Contracts
 */

import type { BaseEntity, ID } from '../../types/common';

export type PlanTier = 'starter' | 'growth' | 'enterprise';

export interface Subscription extends BaseEntity {
  organizationId: ID;
  tier: PlanTier;
  status: 'active' | 'past_due' | 'canceled' | 'trialing';
  currentPeriodEnd: string;
  seatsQuota: number;
  monthlyCredits: number;
}

export interface IBillingService {
  getSubscription(organizationId: ID): Promise<Subscription | null>;
}
