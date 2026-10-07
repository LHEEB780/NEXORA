/**
 * NEXORA — Automation & Workflow Engine Contracts
 */

import type { BaseEntity, ID } from '../../types/common';

export type TriggerType = 'webhook' | 'schedule' | 'event' | 'manual';

export interface WorkflowTrigger {
  type: TriggerType;
  configuration: Record<string, unknown>;
}

export interface WorkflowStep {
  id: string;
  name: string;
  targetModule: string;
  action: string;
  parameters: Record<string, unknown>;
}

export interface Workflow extends BaseEntity {
  organizationId: ID;
  name: string;
  description: string;
  isActive: boolean;
  trigger: WorkflowTrigger;
  steps: WorkflowStep[];
}

export interface IAutomationService {
  listWorkflows(orgId: ID): Promise<Workflow[]>;
  dryRunWorkflow(workflowId: ID): Promise<{ simulatedSuccess: boolean }>;
}
