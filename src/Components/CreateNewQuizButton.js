import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { resetQuiz } from "../Redux/quiz-slice";
import { Button } from "@mui/material";

const CreateNewQuizButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resetHandler = () => {
    dispatch(resetQuiz());
    navigate("/");
  };

  return <Button onClick={resetHandler}>Create New Quiz</Button>;
};

export default CreateNewQuizButton;
