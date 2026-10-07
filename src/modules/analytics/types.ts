/**
 * NEXORA — Analytics & Telemetry Contracts
 */

import type { BaseEntity, ID } from '../../types/common';

export interface BusinessMetricSnapshot extends BaseEntity {
  organizationId: ID;
  periodStart: string;
  periodEnd: string;
  metricKey: string;
  metricValue: number;
  unit: string;
}

export interface IAnalyticsService {
  getLatestMetrics(organizationId: ID): Promise<BusinessMetricSnapshot[]>;
}
