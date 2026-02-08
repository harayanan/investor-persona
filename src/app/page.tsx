"use client";

import { useState } from "react";
import LandingScreen from "@/components/LandingScreen";
import QuizScreen from "@/components/QuizScreen";
import ResultScreen from "@/components/ResultScreen";
import { calculatePersona } from "@/lib/scoring";

type Screen = "landing" | "quiz" | "result";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("landing");
  const [personaId, setPersonaId] = useState<string>("");
  const [answers, setAnswers] = useState<number[]>([]);

  function handleQuizComplete(quizAnswers: number[]) {
    const result = calculatePersona(quizAnswers);
    setAnswers(quizAnswers);
    setPersonaId(result);
    setScreen("result");
  }

  function handleRetake() {
    setScreen("landing");
    setPersonaId("");
    setAnswers([]);
  }

  if (screen === "quiz") {
    return <QuizScreen onComplete={handleQuizComplete} />;
  }

  if (screen === "result") {
    return (
      <ResultScreen
        personaId={personaId}
        answers={answers}
        onRetake={handleRetake}
      />
    );
  }

  return <LandingScreen onStart={() => setScreen("quiz")} />;
}
