# NEXORA Database Blueprint
## Relational Storage Engine: PostgreSQL 15+ & Supabase

---

### 1. Database Philosophy

NEXORA requires strict relational integrity, ACID compliance, and multi-tenant data isolation. PostgreSQL (managed via Supabase or Cloud SQL) is selected as the primary system of record.

### 2. Multi-Tenancy Strategy

Every organization-bound record contains a non-nullable `organization_id` column:
- Enables strict Row Level Security (RLS) enforcement.
- Guarantees zero data leakage between business tenants.
- Facilitates tenant-level archiving, export, or migration.

### 3. Core Tables Specification

1. **`organizations`**:
   - `id`: UUID (Primary Key)
   - `slug`: VARCHAR(64) (Unique identifier for workspaces)
   - `name`: VARCHAR(255)
   - `created_at`, `updated_at`: TIMESTAMPTZ

2. **`users` & `organization_members`**:
   - Identity synced with auth provider.
   - Roles: `owner`, `admin`, `member`, `guest`.

3. **`business_profiles`**:
   - Organization DNA, tone of voice, industry benchmarks, and operational guidelines stored as structured JSONB documents.

4. **`audit_logs`**:
   - Tamper-evident append-only ledger tracking all mutations, approvals, and dispatches.

### 4. Supabase RLS Policy Pattern

```sql
-- Example RLS Policy Blueprint
CREATE POLICY tenant_isolation_policy ON business_profiles
    FOR ALL
    USING (
        organization_id IN (
            SELECT organization_id FROM organization_members
            WHERE user_id = auth.uid()
        )
    );
```
