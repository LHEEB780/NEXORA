/**
 * NEXORA — Integrations Module Contracts
 */

import type { BaseEntity, ID } from '../../types/common';

export type IntegrationCategory = 'communication' | 'social' | 'crm' | 'payment' | 'productivity' | 'custom';
export type IntegrationStatus = 'connected' | 'disconnected' | 'error' | 'pending_auth';

export interface IntegrationDefinition {
  id: string;
  name: string;
  category: IntegrationCategory;
  description: string;
  authType: 'oauth2' | 'api_key' | 'webhook';
}

export interface ConnectedIntegration extends BaseEntity {
  organizationId: ID;
  integrationId: string;
  status: IntegrationStatus;
  lastSyncedAt?: string;
}

export interface IIntegrationsHubService {
  listAvailableIntegrations(): Promise<IntegrationDefinition[]>;
  getConnectedIntegrations(organizationId: ID): Promise<ConnectedIntegration[]>;
}
