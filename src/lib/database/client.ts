/**
 * NEXORA — Database Client Interface
 *
 * Contract abstraction for PostgreSQL / Supabase client.
 * Prepared for pluggable driver integration in upcoming phases.
 */

export interface DatabaseConnectionConfig {
  supabaseUrl?: string;
  supabaseAnonKey?: string;
  postgresConnectionUri?: string;
}

export interface IDatabaseService {
  isConnected(): boolean;
  connect(config: DatabaseConnectionConfig): Promise<boolean>;
  disconnect(): Promise<void>;
}

/**
 * Phase 0 Stub Database Service
 * Explicitly maintains zero active connections and zero credentials in Phase 0.
 */
export class FoundationDatabaseClient implements IDatabaseService {
  private connected: boolean = false;

  isConnected(): boolean {
    return this.connected;
  }

  async connect(_config: DatabaseConnectionConfig): Promise<boolean> {
    // Database connection will be activated in subsequent phases upon schema migration.
    return false;
  }

  async disconnect(): Promise<void> {
    this.connected = false;
  }
}

export const dbClient = new FoundationDatabaseClient();
