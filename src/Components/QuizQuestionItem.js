import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectQuestionAnswer, setAnswer } from "../Redux/quiz-slice";
import { useAnswersList } from "../CustomHooks/useAnswersList";
import { decodeHtml } from "../Utils/decodeHtml";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const QuizQuestionItem = ({ questionInfo, index, showAnswers }) => {
  const dispatch = useDispatch();
  const selectedAnswer = useSelector(selectQuestionAnswer(index));

  const answersList = useAnswersList(
    questionInfo.correct_answer,
    questionInfo.incorrect_answers
  );

  const handleAnswerClick = (answer) => {
    !showAnswers && dispatch(setAnswer({ index, answer }));
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h4>{decodeHtml(questionInfo.question)}</h4>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {answersList.map((answer) => {
          const isCorrectAnswer = answer === questionInfo.correct_answer;
          const isSelectedAnswer = selectedAnswer === answer;
          const shouldHighlight =
            showAnswers &&
            (isCorrectAnswer ? "green" : isSelectedAnswer ? "red" : "initial");
          return (
            <Button
              key={answer}
              onClick={() => handleAnswerClick(answer)}
              value={selectedAnswer}
              sx={{
                backgroundColor:
                  isSelectedAnswer && !showAnswers ? "green" : shouldHighlight,
                color: isSelectedAnswer ? "white" : "initial",
                margin: 1,
                "&:hover": {
                  backgroundColor: "darkgreen",
                  color: "white",
                },
              }}
            >
              {decodeHtml(answer)}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default QuizQuestionItem;
