# NEXORA Architectural Blueprint
## AI Business Operating System — Modular Monolith Foundation

---

### 1. Vision & Core Operating Principle

NEXORA is engineered as a unified, intelligent operating system for modern business operations. The interaction model is structured around a non-negotiable three-stage cycle:

```
[1. Declare Objective] ──► [2. Review Staged Output] ──► [3. Authorize & Execute]
  User expresses goal       AI prepares multi-step plan     Deterministic action
```

- **Stage 1 (Declare)**: The user provides a natural language objective (e.g., "Launch our Q4 expansion campaign across X and LinkedIn with automated lead capture").
- **Stage 2 (Review)**: The system inspects organization parameters, business profile context, and connected tools to present a transparent, staged plan. No external mutation occurs without explicit verification.
- **Stage 3 (Execute)**: Upon human approval, workflows and integrations are triggered with full audit trails.

---

### 2. Architecture Pattern: Modular Monolith

To guarantee agility during early evolution without sacrificing long-term scalability, NEXORA adopts a **Modular Monolith** structure:

```
src/
├── components/          # Reusable UI primitives & layout scaffolds
│   ├── command/         # Command Center & intent input components
│   ├── foundation/      # System architecture & inspectability viewers
│   └── layout/          # Global navigation, headers, footers
├── lib/                 # Core framework utilities, database drivers, config
│   ├── database/        # PostgreSQL/Supabase schema & client contracts
│   └── utils.ts         # Shared helpers
├── modules/             # Autonomous business domains (Zero-coupling boundary)
│   ├── auth/            # Identity & sessions
│   ├── organizations/   # Multi-tenancy & workspace rosters
│   ├── business-profile/# Company DNA, brand voice & market context
│   ├── ai/              # Objective planning & model orchestration
│   ├── integrations/    # SaaS connector hubs & API gateways
│   ├── social/          # Multi-platform content scheduling & distribution
│   ├── crm/             # Contact graph & deal pipelines
│   ├── automation/      # Deterministic workflow engine
│   ├── analytics/       # Operations telemetry & KPI aggregation
│   ├── billing/         # Subscriptions, quotas & usage ledger
│   └── audit/           # Tamper-evident operational audit trail
├── types/               # System-wide ambient contracts & common primitives
└── docs/                # Architecture, database blueprints, and roadmaps
```

#### Invariant Rules:
1. **Module Independence**: Modules may only communicate via public interfaces exported in their root `index.ts`. Deep internal imports across module directories are prohibited.
2. **Schema Segregation**: In subsequent phases, each module manages its dedicated tables with strict foreign key constraints.
3. **Pluggable AI Backend**: The AI module acts as an orchestrator, decoupling core business logic from specific LLM providers.
4. **Human-in-the-Loop Safeguard**: Automated actions must pass through an inspectable plan verification state.
