export interface QuizOption {
  text: string;
  /** Maps persona IDs to the score this option awards them */
  scores: Record<string, number>;
}

export interface QuizQuestion {
  id: number;
  scenario: string;
  options: QuizOption[];
}

export const questions: QuizQuestion[] = [
  {
    id: 1,
    scenario: "The market drops 20% in a single week. What's your first move?",
    options: [
      {
        text: "Buy the dip aggressively — this is a gift!",
        scores: { trailblazer: 3, maverick: 3, "wave-rider": 1 },
      },
      {
        text: "Check my watchlist and pick up quality stocks at a discount",
        scores: { "wise-owl": 3, strategist: 2, maverick: 1 },
      },
      {
        text: "Do nothing — my SIPs will average out the cost",
        scores: { "zen-investor": 3, "steady-oak": 2 },
      },
      {
        text: "Panic a little, then call my advisor for reassurance",
        scores: { "steady-oak": 2, explorer: 1, strategist: 1 },
      },
    ],
  },
  {
    id: 2,
    scenario:
      "Your friend raves about a stock that's already up 200% this year. You...",
    options: [
      {
        text: "Jump in immediately — FOMO is real!",
        scores: { "wave-rider": 3, trailblazer: 2 },
      },
      {
        text: "Research the company's fundamentals before deciding",
        scores: { "wise-owl": 3, strategist: 2 },
      },
      {
        text: "Stay away — if everyone's talking about it, it's probably too late",
        scores: { maverick: 3, "zen-investor": 1 },
      },
      {
        text: "Put a small amount in, but keep most of my money diversified",
        scores: { explorer: 3, "steady-oak": 1, strategist: 1 },
      },
    ],
  },
  {
    id: 3,
    scenario: "You just received a bonus of ₹5 lakhs. How do you invest it?",
    options: [
      {
        text: "All into the hottest sector right now — AI, EV, or whatever's trending",
        scores: { "wave-rider": 3, trailblazer: 2 },
      },
      {
        text: "Split it across 5+ different asset classes globally",
        scores: { explorer: 3, strategist: 2 },
      },
      {
        text: "Lump sum into index funds and forget about it",
        scores: { "zen-investor": 3, "steady-oak": 1 },
      },
      {
        text: "Park it in FDs and bonds while I research the best opportunities",
        scores: { "steady-oak": 3, "wise-owl": 2 },
      },
    ],
  },
  {
    id: 4,
    scenario: "What best describes your portfolio check routine?",
    options: [
      {
        text: "Multiple times a day — I have price alerts for everything",
        scores: { "wave-rider": 3, trailblazer: 2, strategist: 1 },
      },
      {
        text: "Weekly deep dives with detailed spreadsheets and notes",
        scores: { strategist: 3, "wise-owl": 2 },
      },
      {
        text: "Once a quarter — just a quick health check",
        scores: { "zen-investor": 3, "steady-oak": 1 },
      },
      {
        text: "Only when there's big news — otherwise I trust my picks",
        scores: { maverick: 2, explorer: 2, "wise-owl": 1 },
      },
    ],
  },
  {
    id: 5,
    scenario: "Your ideal dinner conversation about money would be...",
    options: [
      {
        text: "Debating which crypto will 10x next and early-stage startup ideas",
        scores: { trailblazer: 3, "wave-rider": 1 },
      },
      {
        text: "Discussing hidden gems and undervalued companies nobody's heard of",
        scores: { "wise-owl": 3, maverick: 2 },
      },
      {
        text: "Sharing global macro trends and interesting international markets",
        scores: { explorer: 3, strategist: 1 },
      },
      {
        text: "I'd rather not talk about money — let it grow silently",
        scores: { "zen-investor": 3, "steady-oak": 2 },
      },
    ],
  },
  {
    id: 6,
    scenario:
      "A new fintech platform promises 25% annual returns with 'revolutionary AI'. Your reaction?",
    options: [
      {
        text: "I'm in! Early adopters always win big",
        scores: { trailblazer: 3, "wave-rider": 1 },
      },
      {
        text: "Sounds like a scam — if it's too good to be true, it usually is",
        scores: { maverick: 2, "steady-oak": 3 },
      },
      {
        text: "Let me read their whitepaper, check SEBI registration, and verify claims",
        scores: { "wise-owl": 3, strategist: 2 },
      },
      {
        text: "Interesting, but I'll wait and see how it performs for 6 months first",
        scores: { explorer: 2, "zen-investor": 2, strategist: 1 },
      },
    ],
  },
  {
    id: 7,
    scenario: "If your investment portfolio were a movie genre, it would be...",
    options: [
      {
        text: "Action thriller — high stakes, big wins, occasional explosions",
        scores: { trailblazer: 3, "wave-rider": 2 },
      },
      {
        text: "Documentary — fact-based, educational, occasionally dry but rewarding",
        scores: { "wise-owl": 3, strategist: 1 },
      },
      {
        text: "Feel-good drama — slow build, satisfying ending, no surprises",
        scores: { "zen-investor": 2, "steady-oak": 3 },
      },
      {
        text: "Heist movie — unconventional moves that everyone doubts until the big reveal",
        scores: { maverick: 3, explorer: 1 },
      },
    ],
  },
  {
    id: 8,
    scenario: "What's the most important thing you want from your investments?",
    options: [
      {
        text: "Massive growth — I want to build serious wealth, fast",
        scores: { trailblazer: 3, "wave-rider": 2, maverick: 1 },
      },
      {
        text: "Safety and peace of mind — I never want to lose sleep over money",
        scores: { "steady-oak": 3, "zen-investor": 2 },
      },
      {
        text: "A perfectly balanced, tax-efficient, optimized portfolio",
        scores: { strategist: 3, explorer: 2, "wise-owl": 1 },
      },
      {
        text: "Financial freedom — passive income that lets me live on my terms",
        scores: { "zen-investor": 2, "wise-owl": 2, explorer: 2 },
      },
    ],
  },
];
