/**
 * NEXORA — AI Business Operating System
 * Command Center Foundation Types
 *
 * Defines the core 3-stage execution contract:
 * 1. Intent / Goal Input
 * 2. Review & Staging
 * 3. Execution
 */

export type ExecutionStage = 'input' | 'review' | 'execute';

export interface CommandIntent {
  rawPrompt: string;
  category?: 'workflow' | 'marketing' | 'sales' | 'operations' | 'analysis' | 'general';
  targetModules?: string[];
  submittedAt?: string;
}

export interface PreparedExecutionPlan {
  id: string;
  intentSummary: string;
  proposedSteps: {
    id: string;
    title: string;
    targetModule: string;
    description: string;
    requiresApproval: boolean;
  }[];
  estimatedImpact: string;
  status: 'draft' | 'ready_for_review' | 'approved' | 'executing' | 'completed';
}
