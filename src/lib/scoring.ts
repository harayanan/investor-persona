import { personas } from "@/data/personas";
import { questions, type QuizOption } from "@/data/questions";

export function calculatePersona(answers: number[]): string {
  const scores: Record<string, number> = {};

  // Initialize all persona scores to 0
  for (const p of personas) {
    scores[p.id] = 0;
  }

  // Tally scores from each answer
  answers.forEach((optionIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (!question) return;
    const option: QuizOption | undefined = question.options[optionIndex];
    if (!option) return;

    for (const [personaId, score] of Object.entries(option.scores)) {
      scores[personaId] = (scores[personaId] || 0) + score;
    }
  });

  // Find the persona with the highest score
  let maxScore = -1;
  let winningPersonaId = personas[0].id;

  for (const [personaId, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      winningPersonaId = personaId;
    }
  }

  return winningPersonaId;
}

export function getPersonaScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};

  for (const p of personas) {
    scores[p.id] = 0;
  }

  answers.forEach((optionIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (!question) return;
    const option: QuizOption | undefined = question.options[optionIndex];
    if (!option) return;

    for (const [personaId, score] of Object.entries(option.scores)) {
      scores[personaId] = (scores[personaId] || 0) + score;
    }
  });

  return scores;
}
