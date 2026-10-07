/**
 * NEXORA — Business Profile Module Contracts
 */

import type { BaseEntity, ID } from '../../types/common';

export interface BusinessBrandIdentity {
  primaryColors: string[];
  toneOfVoice: 'authoritative' | 'conversational' | 'innovative' | 'empathic' | 'concise';
  keywords: string[];
  targetAudience: string;
}

export interface BusinessProfile extends BaseEntity {
  organizationId: ID;
  legalName: string;
  tradingName: string;
  industry: string;
  websiteUrl?: string;
  description: string;
  brandIdentity: BusinessBrandIdentity;
}

export interface IBusinessProfileService {
  getProfile(organizationId: ID): Promise<BusinessProfile | null>;
}
