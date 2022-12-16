export function shuffle(questions: any[]) {
  return questions.sort(() => 0.5 - Math.random());
}
