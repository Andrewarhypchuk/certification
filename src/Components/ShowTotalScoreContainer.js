import React from "react";
import { useSelector } from "react-redux";
import { selectTotalScore } from "../Redux/quiz-slice";

const ShowTotalScoreContainer = () => {
  const totalScore = useSelector(selectTotalScore);

  const getColorStyle = () => {
    if (totalScore <= 1) {
      return { backgroundColor: "red", color: "white" };
    } else if (totalScore <= 3) {
      return { backgroundColor: "yellow", color: "color" };
    } else {
      return { backgroundColor: "green", color: "white" };
    }
  };

  return <h2 style={getColorStyle()}>Your scored {totalScore} out of 5</h2>;
};

export default ShowTotalScoreContainer;
