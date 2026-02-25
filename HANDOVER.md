# HANDOVER — investor-persona

> Interactive investing personality quiz — 8 questions → 8 investor personas

## Status: COMPLETE (Single-Feature)

**Started:** January 2026

## Tech Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **UI:** React 19.2.3 + Tailwind CSS 4 + Lucide icons
- **Type:** Client-side only (no database, no API)

## 8 Investor Personas

1. The Trailblazer (aggressive growth)
2. The Wise Owl (research-driven)
3. The Steady Oak (conservative)
4. The Wave Rider (momentum)
5. The Zen Investor (passive, SIPs)
6. The Maverick (contrarian)
7. The Explorer (global diversifier)
8. The Strategist (tactical optimization)

## User Flow

Landing Screen → 8-Question Quiz → Result Screen (with portfolio chart) → All Personas View

## Source Structure

```
src/
├── app/
│   ├── page.tsx                  # Client component managing screen state
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── LandingScreen.tsx         # Hero + CTA
│   ├── QuizScreen.tsx            # Question flow
│   ├── ResultScreen.tsx          # Results + portfolio chart
│   └── AllPersonasScreen.tsx     # Browse all 8 personas
├── data/
│   ├── personas.ts               # 8 persona definitions
│   └── questions.ts              # 8 quiz questions with scoring weights
└── lib/
    └── scoring.ts                # Persona calculation algorithm
```

## Design

- Blue → Indigo → Purple gradient background
- Geist font family
- Lead capture (email form) on result screen

## Quick Start

```bash
npm install
npm run dev          # localhost:3000
```

## Environment Variables

**None required.** Fully client-side.

## Session: 2026-02-25

### What was done (VPS storage optimization)
- **node_modules removed** to reclaim 723 MB disk. Run `npm install` to restore before development.

---
*Last reviewed: 2026-02-25*
