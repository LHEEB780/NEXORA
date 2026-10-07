/**
 * NEXORA — Organizations Module Contracts
 */

import type { BaseEntity, ID } from '../../types/common';
import type { UserRole } from '../auth/types';

export interface Organization extends BaseEntity {
  slug: string;
  name: string;
  logoUrl?: string;
  defaultTimezone: string;
}

export interface OrganizationMember {
  organizationId: ID;
  userId: ID;
  role: UserRole;
  joinedAt: string;
}

export interface IOrganizationsService {
  getOrganizationById(id: ID): Promise<Organization | null>;
  listMembers(orgId: ID): Promise<OrganizationMember[]>;
}
