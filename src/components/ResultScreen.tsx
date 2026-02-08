"use client";

import { useState } from "react";
import {
  Share2,
  RotateCcw,
  Lightbulb,
  Shield,
  Star,
  PieChart,
  MessageCircle,
  Mail,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Check,
} from "lucide-react";
import { personas, type Persona } from "@/data/personas";
import { getPersonaScores } from "@/lib/scoring";

interface ResultScreenProps {
  personaId: string;
  answers: number[];
  onRetake: () => void;
}

function PortfolioChart({ persona }: { persona: Persona }) {
  let cumulativePercent = 0;

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Donut chart */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56">
        <svg viewBox="0 0 42 42" className="w-full h-full -rotate-90">
          {persona.idealPortfolio.map((slice, i) => {
            const dashArray = slice.pct;
            const dashOffset = 100 - cumulativePercent;
            cumulativePercent += slice.pct;
            return (
              <circle
                key={i}
                cx="21"
                cy="21"
                r="15.91549431"
                fill="transparent"
                stroke={slice.color}
                strokeWidth="5"
                strokeDasharray={`${dashArray} ${100 - dashArray}`}
                strokeDashoffset={dashOffset}
                className="transition-all duration-1000 ease-out"
                style={{
                  animationDelay: `${i * 200}ms`,
                }}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl">{persona.emoji}</span>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
        {persona.idealPortfolio.map((slice, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <div
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: slice.color }}
            />
            <span className="text-gray-600 truncate">{slice.label}</span>
            <span className="text-gray-900 font-semibold ml-auto">
              {slice.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PersonaStrengthBars({
  answers,
  highlightId,
}: {
  answers: number[];
  highlightId: string;
}) {
  const scores = getPersonaScores(answers);
  const maxScore = Math.max(...Object.values(scores));

  // Sort by score descending, show top 4
  const sorted = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 4);

  return (
    <div className="space-y-3">
      {sorted.map(([id, score]) => {
        const p = personas.find((x) => x.id === id);
        if (!p) return null;
        const pct = maxScore > 0 ? (score / maxScore) * 100 : 0;
        const isWinner = id === highlightId;

        return (
          <div key={id}>
            <div className="flex items-center justify-between text-sm mb-1">
              <span
                className={`font-medium ${
                  isWinner ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {p.emoji} {p.name}
              </span>
              <span className="text-gray-400">{score} pts</span>
            </div>
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-out ${
                  isWinner
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                    : "bg-gray-300"
                }`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ResultScreen({
  personaId,
  answers,
  onRetake,
}: ResultScreenProps) {
  const persona = personas.find((p) => p.id === personaId) ?? personas[0];
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [showAllPersonas, setShowAllPersonas] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  async function handleShare() {
    const text = `I'm ${persona.name} ${persona.emoji} — "${persona.tagline}"\n\nDiscover your investing personality!`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "My Investor Persona", text });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(text);
      alert("Result copied to clipboard!");
    }
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, send to your backend/CRM
    setFormSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero result section */}
      <div
        className={`bg-gradient-to-br ${persona.color} relative overflow-hidden`}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white blur-3xl" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold text-sm">
              M
            </div>
            <span className="text-white/80 text-sm font-medium">
              Mutual Fund Dost
            </span>
          </div>
        </div>

        {/* Result */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 pt-6 pb-16">
          <div className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Star className="w-4 h-4 text-yellow-300" />
            Your Investor Persona
          </div>

          <div className="text-7xl sm:text-8xl mb-4 animate-bounce-slow">
            {persona.emoji}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
            {persona.name}
          </h1>

          <p className="text-xl sm:text-2xl text-white/80 italic font-medium mb-8">
            &ldquo;{persona.tagline}&rdquo;
          </p>

          <p className="text-white/90 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            {persona.description}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              Share Result
            </button>
            <button
              onClick={onRetake}
              className="inline-flex items-center gap-2 bg-white/15 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 hover:bg-white/25 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Quiz
            </button>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            className="w-full h-auto block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,35 1440,30 L1440,60 L0,60 Z"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </div>

      {/* Details section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {/* Superpower & Kryptonite */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900">Your Superpower</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{persona.superpower}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                <Shield className="w-4 h-4 text-red-500" />
              </div>
              <h3 className="font-bold text-gray-900">Your Kryptonite</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {persona.kryptonite}
            </p>
          </div>
        </div>

        {/* Famous match */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
              <Star className="w-4 h-4 text-amber-500" />
            </div>
            <h3 className="font-bold text-gray-900">Famous Investor Match</h3>
          </div>
          <p className="text-lg font-semibold text-gray-900 mb-1">
            {persona.famousMatch}
          </p>
          <p className="text-gray-600">{persona.famousMatchDesc}</p>
        </div>

        {/* Portfolio chart */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
              <PieChart className="w-4 h-4 text-indigo-600" />
            </div>
            <h3 className="font-bold text-gray-900">Ideal Portfolio Mix</h3>
          </div>
          <PortfolioChart persona={persona} />
        </div>

        {/* Score breakdown */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-4">
            Your Persona Breakdown
          </h3>
          <PersonaStrengthBars answers={answers} highlightId={personaId} />
        </div>

        {/* Pro tip */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mt-0.5">
              <Lightbulb className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Pro Tip</h3>
              <p className="text-gray-700 leading-relaxed">{persona.tip}</p>
            </div>
          </div>
        </div>

        {/* All personas accordion */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <button
            onClick={() => setShowAllPersonas(!showAllPersonas)}
            className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-bold text-gray-900">
              Explore All 8 Personas
            </h3>
            {showAllPersonas ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          {showAllPersonas && (
            <div className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personas.map((p) => (
                <div
                  key={p.id}
                  className={`flex items-center gap-3 p-3 rounded-xl border ${
                    p.id === personaId
                      ? "border-indigo-200 bg-indigo-50"
                      : "border-gray-100 bg-gray-50"
                  }`}
                >
                  <span className="text-2xl">{p.emoji}</span>
                  <div>
                    <p
                      className={`font-semibold text-sm ${
                        p.id === personaId
                          ? "text-indigo-700"
                          : "text-gray-700"
                      }`}
                    >
                      {p.name}
                      {p.id === personaId && (
                        <span className="ml-2 text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">
                          You!
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-gray-500 italic">
                      {p.tagline}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Lead capture CTA */}
        {!formSubmitted ? (
          <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-5 right-5 w-32 h-32 rounded-full bg-white blur-3xl" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to invest like {persona.name.replace("The ", "a ")}?
              </h3>
              <p className="text-white/80 mb-6 max-w-lg mx-auto">
                Get a personalized investment plan tailored to your{" "}
                {persona.name} personality. Our experts at Mutual Fund Dost will
                guide you.
              </p>

              {!showLeadForm ? (
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setShowLeadForm(true)}
                    className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    Get My Investment Plan
                  </button>
                  <a
                    href="https://wa.me/919876543210?text=Hi!%20I%20just%20took%20the%20InvestorPersona%20quiz%20and%20I%27m%20a%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:bg-green-600 hover:scale-105 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleFormSubmit}
                  className="max-w-md mx-auto space-y-3"
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number (optional)"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
                  />
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
                  >
                    Send My Personalized Plan
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-green-50 rounded-2xl p-8 text-center border border-green-200">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              You&apos;re all set!
            </h3>
            <p className="text-gray-600">
              Our team will send your personalized {persona.name} investment
              plan to <span className="font-medium">{email}</span> shortly.
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center pt-4 pb-8">
          <p className="text-gray-400 text-xs">
            By Mutual Fund Dost &middot; For educational purposes only &middot;
            Not financial advice &middot; Mutual fund investments are subject to
            market risks.
          </p>
        </footer>
      </div>
    </div>
  );
}
