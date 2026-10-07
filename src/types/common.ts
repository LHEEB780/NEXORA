/**
 * NEXORA — AI Business Operating System
 * Common Foundation Types
 *
 * Provides shared primitives across all modular domains.
 */

export type ID = string;

export type Timestamp = string; // ISO 8601 string

export interface BaseEntity {
  id: ID;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export type SystemStatus = 'operational' | 'degraded' | 'maintenance' | 'offline';

export type AppEnvironment = 'development' | 'staging' | 'production';
