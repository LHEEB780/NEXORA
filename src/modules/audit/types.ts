/**
 * NEXORA — Audit & Compliance Contracts
 */

import type { BaseEntity, ID } from '../../types/common';

export interface AuditLogEntry extends BaseEntity {
  organizationId: ID;
  actorId?: ID;
  action: string;
  module: string;
  details: Record<string, unknown>;
  ipAddress?: string;
}

export interface IAuditService {
  logAction(entry: Omit<AuditLogEntry, 'id' | 'createdAt' | 'updatedAt'>): Promise<void>;
  listAuditLogs(organizationId: ID): Promise<AuditLogEntry[]>;
}
