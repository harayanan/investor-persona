"use client";

import { useState } from "react";
import { questions } from "@/data/questions";
import { ChevronRight } from "lucide-react";

interface QuizScreenProps {
  onComplete: (answers: number[]) => void;
}

export default function QuizScreen({ onComplete }: QuizScreenProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const question = questions[currentQ];
  const progress = ((currentQ) / questions.length) * 100;

  function handleSelect(optionIndex: number) {
    if (isTransitioning) return;
    setSelectedOption(optionIndex);

    setTimeout(() => {
      setIsTransitioning(true);
      const newAnswers = [...answers, optionIndex];
      setAnswers(newAnswers);

      setTimeout(() => {
        if (currentQ + 1 < questions.length) {
          setCurrentQ(currentQ + 1);
          setSelectedOption(null);
          setIsTransitioning(false);
        } else {
          onComplete(newAnswers);
        }
      }, 400);
    }, 300);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 flex flex-col">
      {/* Progress bar */}
      <div className="w-full bg-white/10 h-2">
        <div
          className="h-full bg-gradient-to-r from-yellow-300 to-amber-400 transition-all duration-700 ease-out rounded-r-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
            M
          </div>
          <span className="text-white/80 text-sm font-medium">InvestorPersona</span>
        </div>
        <span className="text-white/60 text-sm">
          {currentQ + 1} of {questions.length}
        </span>
      </div>

      {/* Question area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pb-12">
        <div
          className={`w-full max-w-2xl transition-all duration-400 ${
            isTransitioning
              ? "opacity-0 translate-x-8"
              : "opacity-100 translate-x-0"
          }`}
        >
          {/* Question number badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium">
              Question {currentQ + 1}
            </span>
          </div>

          {/* Question text */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center leading-tight mb-10">
            {question.scenario}
          </h2>

          {/* Options */}
          <div className="space-y-3 sm:space-y-4">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={selectedOption !== null}
                className={`w-full text-left px-5 sm:px-6 py-4 sm:py-5 rounded-2xl border-2 transition-all duration-300 group cursor-pointer
                  ${
                    selectedOption === idx
                      ? "bg-white text-indigo-900 border-white scale-[1.02] shadow-lg shadow-white/20"
                      : selectedOption !== null
                      ? "bg-white/5 text-white/40 border-white/10 cursor-not-allowed"
                      : "bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-[1.01]"
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      selectedOption === idx
                        ? "bg-indigo-600 text-white"
                        : "bg-white/15 text-white/80 group-hover:bg-white/25"
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-base sm:text-lg font-medium leading-snug">
                    {option.text}
                  </span>
                  {selectedOption === idx && (
                    <ChevronRight className="ml-auto flex-shrink-0 w-5 h-5 text-indigo-600 animate-pulse" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom dots indicator */}
      <div className="flex justify-center gap-2 pb-8">
        {questions.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentQ
                ? "w-8 bg-yellow-400"
                : idx < currentQ
                ? "w-2 bg-white/60"
                : "w-2 bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
