import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedCategory,
  selectSelectedDifficulty,
  setQuiz,
} from "../Redux/quiz-slice";
import { Button } from "@mui/material";

const CreateQuiz = () => {
  const dispatch = useDispatch();
  const isCategorySelected = useSelector(selectSelectedCategory);
  const isDifficultySelected = useSelector(selectSelectedDifficulty);

  return (
    <Button
      id="createBtn"
      disabled={!isCategorySelected || !isDifficultySelected}
      onClick={() => dispatch(setQuiz())}
      variant="contained"
    >
      Create Quiz
    </Button>
  );
};

export default CreateQuiz;
