import { useSelector } from "react-redux";
import { selectQuiz } from "../Redux/quiz-slice";

const useIsAllQuestionsAnswered = () => {
  const answeredQuestions = useSelector(selectQuiz);
  const isAllAnswered =
    answeredQuestions?.length > 0 &&
    answeredQuestions.every((question) => {
      return question.userAnswer;
    });
  return isAllAnswered;
};

export default useIsAllQuestionsAnswered;
