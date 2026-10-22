# Engineering portfolio roadmap

This document distinguishes shipped coursework, research case studies, and engineering work that is **not complete yet**.

## Portfolio decisions

| Project | Current state | Presentation decision | Next engineering action |
|---|---|---|---|
| Emotion2Art | Personal notebook + hosted classifier | Featured | Make inference portable, freeze dependencies, add tests |
| ArtifyAI | Collaborative Colab workflow and PDF report | Featured, labeled collaborative | Add reproducible setup and representative outputs |
| Insiyab | Synthetic-data academic prototype | Visible with caution | Eliminate leakage, keep held-out test set, evaluate a tabular baseline |
| SDA Booking Agent | Team bootcamp demo with sandbox/payment limits | Visible, labeled team demo | Document specific personal contributions and verify functionality |
| National Happiness Prediction | Course ML notebook | Retain, not featured initially | Refactor data/metrics/reporting for reproducibility |
| hessah-portfolio | Personal Next.js site | Deprioritized | No time allocated until repositories are reliable |
| Intelligent Document Querying | Empty repository | Do not feature | Either implement or archive later after review |
| agent-content-writer | Private early-stage repo | Keep private | Improve error handling, configuration, tests, and README |
| Emora | Graduation project | Public case study *pending permissions* | Explain architecture, methodology, validation, and contribution without confidential material |
| EEG-to-Text / KACST | Internship research | Public poster/case study *if authorized* | Link approved poster/abstract only; do not upload institutional code or datasets |
| Agentic Event Booking Platform | Independent rebuild planned; local scaffold previously created | Flag as in progress only after first deliverable exists | Build a minimum FastAPI service with tests and database constraints |

## Target portfolio mix — **not** a list of completed work

**One substantial independent engineering system**:
Event booking API with PostgreSQL transaction handling, idempotency, auth/roles, tests, CI, and eventually an AI assistant. Begin with plain backend services, not agents or payment integrations.

**One data engineering extension**:
Use *synthetic* bookings/events as a reproducible dataset; ingestion -> PostgreSQL -> quality checks -> analytics, then PySpark/Databricks/Delta if tool access supports it. Explicitly separate OLTP and analytics workloads.

**One focused ML evaluation project**:
Repair Insiyab's validation: split before preprocessing; preserve an untouched test set; check class distribution and feature leakage; compare logistic regression, tree-based models, and a tuned model. Only report newly measured metrics after rerunning.

**One research-focused presentation**:
Emora technical case study and approved EEG-to-Text conference poster/abstract. Explain data, validation, baselines, limitations, and exact personal contributions. Never publish restricted research assets.

## Sequence

### A. Public-facing polish
- [x] Rewrite Emotion2Art README with correct model/metric scope.
- [x] Rewrite ArtifyAI README and clarify collaboration.
- [x] Rewrite Insiyab README and disclose methodological issues.
- [x] Create pixel-inspired GitHub profile *draft*.
- [ ] Create public profile repository named `Heaikyoraku` and copy reviewed README/assets.
- [ ] Pin reviewed work in GitHub's UI.

### B. Skill baseline
- [ ] SQL: relations, constraints, joins, grouping, indexes, transactions.
- [ ] Python: packaging, typing, error handling, tests, Git workflows.
- [ ] Explain each existing project at 30-second / 2-minute / deep-dive levels.

### C. Independent AI Engineering system
- [ ] Verify local scaffolding under WSL; do not overwrite earlier work.
- [ ] Versioned domain model + integrity constraints.
- [ ] Tested FastAPI booking API and PostgreSQL.
- [ ] Concurrent seat-hold tests and cancellation/retry behavior.
- [ ] CI/CD; Docker; security basics; observability.
- [ ] Agent tools only after core workflows pass tests.

### D. Data Engineering and MLOps
- [ ] Incremental ingest + quality tests.
- [ ] SQL analytics + dimensional model and meaningful queries.
- [ ] PySpark/Delta/Databricks extension when foundations are ready.
- [ ] Model or agent evaluations, monitoring and documented trade-offs.

## Portfolio quality gate

Before featuring a repository, it should have:
1. Accurate individual/team attribution.
2. Problem and target user; source and rights of data.
3. Running instructions and locked/reproducible environment when feasible.
4. Methodology, metrics, caveats, and correct data splits.
5. Screenshots or architecture that reflect actual implementation.
6. Tests/CI (or a transparent explanation when absent).
7. No API keys, restricted datasets, or confidential institutional material.

**Do not confuse a polished README with proof of runtime correctness.**
