/**
 * NEXORA — AI Module Contracts
 *
 * Core engine contracts for the 3-step paradigm:
 * 1. Intent ingestion
 * 2. Plan proposal & preview
 * 3. Execution dispatch
 */

import type { ID } from '../../types/common';
import type { PreparedExecutionPlan } from '../../types/command';

export interface AIPlanningRequest {
  organizationId: ID;
  userId: ID;
  userPrompt: string;
  contextWindow?: Record<string, unknown>;
}

export interface IAIOrchestratorService {
  planObjective(request: AIPlanningRequest): Promise<PreparedExecutionPlan>;
  validatePlan(planId: string): Promise<boolean>;
}
