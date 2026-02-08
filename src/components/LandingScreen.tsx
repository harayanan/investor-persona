"use client";

import { ArrowRight, TrendingUp, Brain, Zap, Users } from "lucide-react";

interface LandingScreenProps {
  onStart: () => void;
}

export default function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-base shadow-lg">
            M
          </div>
          <span className="text-white font-semibold">InvestorPersona</span>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4 text-yellow-300" />
            2-minute quiz &middot; 8 questions &middot; Free
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
            Discover Your{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Investor Persona
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Are you a bold Trailblazer, a patient Zen Investor, or a calculated
            Strategist? Take our fun quiz to uncover your investing personality
            — and get personalized insights to invest smarter.
          </p>

          {/* CTA Button */}
          <button
            onClick={onStart}
            className="group inline-flex items-center gap-3 bg-white text-indigo-700 font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl shadow-black/20 hover:shadow-3xl hover:scale-105 active:scale-100 transition-all duration-300 cursor-pointer"
          >
            Take the Quiz
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-white/50 text-sm mt-4">
            No sign-up required &middot; Takes less than 2 minutes
          </p>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-16 max-w-2xl">
          {[
            { icon: Brain, label: "8 Unique Personas" },
            { icon: TrendingUp, label: "Portfolio Insights" },
            { icon: Users, label: "Famous Investor Match" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-5 py-2.5 rounded-full text-sm font-medium"
            >
              <Icon className="w-4 h-4 text-yellow-300" />
              {label}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center pb-6 px-4">
        <p className="text-white/30 text-xs">
          By InvestorPersona &middot; For educational purposes only &middot; Not financial advice
        </p>
      </footer>
    </div>
  );
}
