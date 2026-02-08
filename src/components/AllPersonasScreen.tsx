"use client";

import { ArrowLeft, ArrowRight, Lightbulb, Shield, Star } from "lucide-react";
import { personas } from "@/data/personas";

interface AllPersonasScreenProps {
  onBack: () => void;
  onStartQuiz: () => void;
}

export default function AllPersonasScreen({
  onBack,
  onStartQuiz,
}: AllPersonasScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative z-10 px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                M
              </div>
              <span className="text-white/80 text-sm font-medium">
                InvestorPersona
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 pt-4 pb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
            The 8 Investor Personas
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Which one sounds like you? Take the quiz to find your match.
          </p>
        </div>

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

      {/* Persona cards */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-6">
        {personas.map((persona) => (
          <div
            key={persona.id}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
          >
            {/* Persona header */}
            <div
              className={`bg-gradient-to-r ${persona.color} px-6 py-5 flex items-center gap-4`}
            >
              <span className="text-4xl">{persona.emoji}</span>
              <div>
                <h2 className="text-xl font-bold text-white">{persona.name}</h2>
                <p className="text-white/80 italic text-sm">
                  &ldquo;{persona.tagline}&rdquo;
                </p>
              </div>
            </div>

            {/* Persona details */}
            <div className="p-6 space-y-4">
              <p className="text-gray-600 leading-relaxed">
                {persona.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Superpower
                    </p>
                    <p className="text-gray-700 text-sm">{persona.superpower}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Kryptonite
                    </p>
                    <p className="text-gray-700 text-sm">
                      {persona.kryptonite}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Star className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">{persona.famousMatch}</span>
                  {" — "}
                  {persona.famousMatchDesc}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="text-center pt-4 pb-2">
          <button
            onClick={onStartQuiz}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-100 transition-all cursor-pointer"
          >
            Take the Quiz
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-gray-400 text-sm mt-3">
            2 minutes &middot; 8 questions &middot; Free
          </p>
        </div>

        {/* Footer */}
        <footer className="text-center pt-4 pb-8">
          <p className="text-gray-400 text-xs">
            By InvestorPersona &middot; For educational purposes only &middot;
            Not financial advice
          </p>
        </footer>
      </div>
    </div>
  );
}
