/**
 * NEXORA — CRM Module Contracts
 */

import type { BaseEntity, ID } from '../../types/common';

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'proposal' | 'won' | 'lost';

export interface Contact extends BaseEntity {
  organizationId: ID;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  companyName?: string;
  status: LeadStatus;
  lifetimeValue?: number;
}

export interface DealPipeline extends BaseEntity {
  organizationId: ID;
  name: string;
  stages: { id: string; name: string; probability: number }[];
}

export interface ICRMService {
  listContacts(orgId: ID): Promise<Contact[]>;
  listPipelines(orgId: ID): Promise<DealPipeline[]>;
}
