/**
 * NEXORA — Auth Module Contracts
 * Phase 0: Foundation Interface
 */

import type { BaseEntity, ID } from '../../types/common';

export type UserRole = 'owner' | 'admin' | 'member' | 'guest';

export interface User extends BaseEntity {
  email: string;
  fullName: string;
  avatarUrl?: string;
  isEmailVerified: boolean;
}

export interface Session {
  id: ID;
  userId: ID;
  activeOrganizationId?: ID;
  expiresAt: string;
}

export interface IAuthService {
  getCurrentUser(): Promise<User | null>;
  getCurrentSession(): Promise<Session | null>;
}
