# InvestorPersona

An interactive investing personality quiz. Users answer 8 fun scenario-based questions to discover which of 8 investor personas they are.

## Stack
- Next.js 16 + React 19 + TypeScript
- Tailwind CSS 4
- Lucide React (icons)
- No database — purely client-side quiz logic

## Project Structure
```
src/
├── app/
│   ├── page.tsx          # Main page (client component, manages screen state)
│   ├── layout.tsx        # Root layout with metadata & fonts
│   └── globals.css       # Global styles + custom animations
├── components/
│   ├── LandingScreen.tsx  # Hero landing page with CTA
│   ├── QuizScreen.tsx     # Question-by-question quiz flow
│   └── ResultScreen.tsx   # Results with persona details, portfolio chart, lead capture
├── data/
│   ├── personas.ts        # 8 investor persona definitions
│   └── questions.ts       # 8 quiz questions with scoring weights
└── lib/
    └── scoring.ts         # Scoring engine to calculate persona from answers
```

## The 8 Personas
1. **The Trailblazer** 🚀 — Aggressive growth, early adopter
2. **The Wise Owl** 🦉 — Research-driven value investor
3. **The Steady Oak** 🌳 — Conservative, capital preservation
4. **The Wave Rider** 🏄 — Trend/momentum follower
5. **The Zen Investor** 🧘 — Passive, index funds, SIPs
6. **The Maverick** 🎯 — Contrarian investor
7. **The Explorer** 🌍 — Global diversifier
8. **The Strategist** ♟️ — Tactical, risk-adjusted optimizer

## Branding
- InvestorPersona brand identity
- Blue-600 → Indigo-700 → Purple-800 gradient
- Geist font family
- Lead capture: Email form

## Development
```bash
npm install
npm run dev       # localhost:3000
npm run build     # Production build
npm run lint      # ESLint
```
