import { useMemo } from 'react';

export const useAnswersList = (correctAnswer, incorrectAnswers) => {
  const answersList = useMemo(() => {
    const allAnswers = [correctAnswer, ...incorrectAnswers];

    const randomSort = () => Math.random() - 0.5;

    return allAnswers.sort(randomSort);
  }, [correctAnswer, incorrectAnswers]);

  return answersList;
};
