export interface Persona {
  id: string;
  name: string;
  tagline: string;
  emoji: string;
  color: string; // tailwind gradient from
  colorHex: string;
  description: string;
  superpower: string;
  kryptonite: string;
  famousMatch: string;
  famousMatchDesc: string;
  idealPortfolio: { label: string; pct: number; color: string }[];
  tip: string;
}

export const personas: Persona[] = [
  {
    id: "trailblazer",
    name: "The Trailblazer",
    tagline: "Fortune favors the bold",
    emoji: "🚀",
    color: "from-red-500 to-orange-500",
    colorHex: "#ef4444",
    description:
      "You're the first one in and the last one out. While others are still reading the whitepaper, you've already placed your bet. You thrive on disruption, early-stage opportunities, and the thrill of outsized returns. Risk? That's just another word for opportunity.",
    superpower: "Spotting the next big thing before anyone else",
    kryptonite: "Overexposure to high-risk bets without a safety net",
    famousMatch: "Cathie Wood",
    famousMatchDesc: "ARK Invest CEO, famous for bold bets on disruptive innovation",
    idealPortfolio: [
      { label: "High-Growth Stocks", pct: 35, color: "#ef4444" },
      { label: "Crypto & Web3", pct: 25, color: "#f97316" },
      { label: "Startup/VC Funds", pct: 20, color: "#eab308" },
      { label: "Thematic ETFs", pct: 15, color: "#84cc16" },
      { label: "Cash Reserve", pct: 5, color: "#22c55e" },
    ],
    tip: "Keep at least 20% of your portfolio in stable assets. Even trailblazers need a base camp.",
  },
  {
    id: "wise-owl",
    name: "The Wise Owl",
    tagline: "Knowledge is my edge",
    emoji: "🦉",
    color: "from-indigo-600 to-blue-500",
    colorHex: "#4f46e5",
    description:
      "You don't invest — you research, analyze, and then invest. Every stock in your portfolio has a story, and you know the P/E ratio, management track record, and competitive moat by heart. You believe in buying wonderful companies at fair prices.",
    superpower: "Finding undervalued gems through deep fundamental analysis",
    kryptonite: "Analysis paralysis — waiting too long for the perfect entry point",
    famousMatch: "Warren Buffett",
    famousMatchDesc: "The Oracle of Omaha, legendary value investor and CEO of Berkshire Hathaway",
    idealPortfolio: [
      { label: "Value Stocks", pct: 40, color: "#4f46e5" },
      { label: "Blue-Chip Dividends", pct: 25, color: "#3b82f6" },
      { label: "Quality Mid-Caps", pct: 20, color: "#6366f1" },
      { label: "Bonds", pct: 10, color: "#8b5cf6" },
      { label: "Cash", pct: 5, color: "#a855f7" },
    ],
    tip: "Set time-boxed deadlines for your research. Sometimes 80% certainty is enough to act.",
  },
  {
    id: "steady-oak",
    name: "The Steady Oak",
    tagline: "Slow and steady wins the race",
    emoji: "🌳",
    color: "from-green-600 to-emerald-500",
    colorHex: "#16a34a",
    description:
      "You're the calm in the storm. Markets crash? You sleep well. You believe in the power of capital preservation, steady returns, and the magic of compound interest over decades. Your portfolio is boring — and that's exactly how you like it.",
    superpower: "Unshakable discipline and emotional stability in volatile markets",
    kryptonite: "Being too conservative — missing growth opportunities due to excess caution",
    famousMatch: "Benjamin Graham",
    famousMatchDesc: "Father of value investing, author of 'The Intelligent Investor'",
    idealPortfolio: [
      { label: "Government Bonds", pct: 30, color: "#16a34a" },
      { label: "Blue-Chip Stocks", pct: 25, color: "#22c55e" },
      { label: "Fixed Deposits", pct: 20, color: "#15803d" },
      { label: "Gold/Commodities", pct: 15, color: "#eab308" },
      { label: "PPF/EPF", pct: 10, color: "#84cc16" },
    ],
    tip: "Allocate 10-15% to growth assets. Even oaks need sunlight to grow taller.",
  },
  {
    id: "wave-rider",
    name: "The Wave Rider",
    tagline: "Catch the momentum",
    emoji: "🏄",
    color: "from-cyan-500 to-teal-500",
    colorHex: "#06b6d4",
    description:
      "You've got your finger on the pulse. Whether it's AI stocks, EV plays, or the latest sectoral boom, you know where the momentum is. You ride trends early and exit before the crowd. Your portfolio is dynamic, always evolving with the times.",
    superpower: "Timing sectoral rotations and catching momentum early",
    kryptonite: "Chasing hype too late and holding on when the trend reverses",
    famousMatch: "George Soros",
    famousMatchDesc: "Legendary macro trader who 'broke the Bank of England'",
    idealPortfolio: [
      { label: "Sectoral/Thematic Funds", pct: 35, color: "#06b6d4" },
      { label: "Momentum Stocks", pct: 25, color: "#14b8a6" },
      { label: "Global Trend ETFs", pct: 20, color: "#0891b2" },
      { label: "Flexi-Cap Funds", pct: 15, color: "#0d9488" },
      { label: "Cash (Dry Powder)", pct: 5, color: "#2dd4bf" },
    ],
    tip: "Always have an exit plan. Set trailing stop-losses and stick to them.",
  },
  {
    id: "zen-investor",
    name: "The Zen Investor",
    tagline: "Time in the market beats timing the market",
    emoji: "🧘",
    color: "from-purple-500 to-violet-500",
    colorHex: "#8b5cf6",
    description:
      "You've mastered the art of doing nothing — strategically. You set up your SIPs, invest in index funds, and let compounding do the heavy lifting. Market noise doesn't bother you. You know that patience is the ultimate wealth-building strategy.",
    superpower: "Consistency and the power of long-term compounding",
    kryptonite: "Being too hands-off — missing rebalancing opportunities",
    famousMatch: "John Bogle",
    famousMatchDesc: "Founder of Vanguard, pioneer of index fund investing",
    idealPortfolio: [
      { label: "Index Funds (Nifty/S&P)", pct: 40, color: "#8b5cf6" },
      { label: "Monthly SIPs", pct: 25, color: "#7c3aed" },
      { label: "Target-Date Funds", pct: 15, color: "#a855f7" },
      { label: "Debt Funds", pct: 10, color: "#6d28d9" },
      { label: "PPF/NPS", pct: 10, color: "#c084fc" },
    ],
    tip: "Review and rebalance once a year. Even zen gardens need occasional raking.",
  },
  {
    id: "maverick",
    name: "The Maverick",
    tagline: "Buy when there's blood in the streets",
    emoji: "🎯",
    color: "from-rose-600 to-pink-500",
    colorHex: "#e11d48",
    description:
      "When everyone is selling, you're buying. When everyone is euphoric, you're quietly taking profits. You trust your conviction over consensus. Your best investments came when the market called you crazy — and you didn't flinch.",
    superpower: "Iron conviction and the courage to go against the herd",
    kryptonite: "Being contrarian just for the sake of it — not every falling knife is a bargain",
    famousMatch: "Howard Marks",
    famousMatchDesc: "Co-founder of Oaktree Capital, master of contrarian investing",
    idealPortfolio: [
      { label: "Distressed/Turnaround Stocks", pct: 30, color: "#e11d48" },
      { label: "Deep Value Picks", pct: 25, color: "#f43f5e" },
      { label: "Contrarian Sector Bets", pct: 20, color: "#be123c" },
      { label: "Corporate Bonds", pct: 15, color: "#ec4899" },
      { label: "Cash for Opportunities", pct: 10, color: "#fb7185" },
    ],
    tip: "Validate your contrarian thesis with data. Being different is only valuable when you're also right.",
  },
  {
    id: "explorer",
    name: "The Explorer",
    tagline: "Don't put all eggs in one basket",
    emoji: "🌍",
    color: "from-amber-500 to-yellow-500",
    colorHex: "#f59e0b",
    description:
      "Your portfolio is a world map. US tech, Indian mid-caps, European bonds, Asian REITs, African frontier markets — you believe true diversification means going beyond borders and asset classes. You spread risk like a seasoned global traveler.",
    superpower: "True diversification across geographies, asset classes, and currencies",
    kryptonite: "Over-diversification — owning too many things without deep conviction in any",
    famousMatch: "Ray Dalio",
    famousMatchDesc: "Founder of Bridgewater, architect of the 'All Weather Portfolio'",
    idealPortfolio: [
      { label: "Indian Equities", pct: 25, color: "#f59e0b" },
      { label: "US/Global Stocks", pct: 25, color: "#eab308" },
      { label: "Gold & Commodities", pct: 15, color: "#d97706" },
      { label: "REITs & Real Estate", pct: 15, color: "#fbbf24" },
      { label: "International Bonds", pct: 10, color: "#f97316" },
      { label: "Crypto (small alloc)", pct: 10, color: "#fcd34d" },
    ],
    tip: "Simplify. Even explorers need a home base. Pick 3-4 core asset classes and go deep.",
  },
  {
    id: "strategist",
    name: "The Strategist",
    tagline: "Every move is calculated",
    emoji: "♟️",
    color: "from-slate-700 to-gray-500",
    colorHex: "#334155",
    description:
      "Investing is chess to you. Every move has a purpose. You balance risk and reward with mathematical precision, rebalance quarterly, and optimize for tax efficiency. Your spreadsheets have spreadsheets, and your portfolio is a well-oiled machine.",
    superpower: "Risk-adjusted returns and systematic portfolio optimization",
    kryptonite: "Over-optimization — spending more time on spreadsheets than on conviction",
    famousMatch: "Jim Simons",
    famousMatchDesc: "Founder of Renaissance Technologies, the most successful quant fund ever",
    idealPortfolio: [
      { label: "Large-Cap Core", pct: 30, color: "#334155" },
      { label: "Multi-Asset Funds", pct: 20, color: "#475569" },
      { label: "Factor-Based ETFs", pct: 20, color: "#64748b" },
      { label: "Debt Allocation", pct: 15, color: "#94a3b8" },
      { label: "Tax-Saving (ELSS)", pct: 15, color: "#cbd5e1" },
    ],
    tip: "Don't let the perfect be the enemy of the good. Sometimes a simple 60/40 portfolio beats an over-engineered one.",
  },
];
