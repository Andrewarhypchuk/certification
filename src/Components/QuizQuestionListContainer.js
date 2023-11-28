import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectQuiz, selectStatus } from "../Redux/quiz-slice";
import CreateNewQuizButton from "./CreateNewQuizButton";
import QuizQuestionItem from "./QuizQuestionItem";
import ShowTotalScoreContainer from "./ShowTotalScoreContainer";
import { Box, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { LOADING } from "../Utils/consts";

const QuizQuestionListContainer = ({ showAnswers, header }) => {
  const questionList = useSelector(selectQuiz);
  const requestStatus = useSelector(selectStatus);
  const navigate = useNavigate();

  if (!questionList && showAnswers) {
    return (
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <h2>No have not answered all question or created a quiz</h2>
        <Button onClick={() => navigate("/")}>Go back</Button>
      </Box>
    );
  }
  if (requestStatus === LOADING) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <CircularProgress />;
      </Box>
    );
  }

  return (
    questionList && (
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <h1>{header}</h1>
        {questionList.map((question, index) => (
          <QuizQuestionItem
            key={question.question}
            index={index}
            questionInfo={question}
            showAnswers={showAnswers}
          />
        ))}
        {showAnswers && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ShowTotalScoreContainer />
            <CreateNewQuizButton />
          </Box>
        )}
      </Box>
    )
  );
};

export default QuizQuestionListContainer;
