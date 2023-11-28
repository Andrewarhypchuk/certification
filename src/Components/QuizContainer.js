import CategoryListContainer from "./CategoryListContainer";
import CreateQuiz from "./CreateQuizButton";
import DifficultyListContainer from "./DifficultyListContainer";
import QuizQuestionListContainer from "./QuizQuestionListContainer";
import SubmitButton from "./SubmitButton";
import { Box } from "@mui/material";

const QuizContainer = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <header>QUIZ MAKER</header>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <CategoryListContainer />
        <DifficultyListContainer />
        <CreateQuiz />
      </Box>
      <QuizQuestionListContainer header="Quiz Question List" />
      <SubmitButton />
    </Box>
  );
};
export default QuizContainer;
