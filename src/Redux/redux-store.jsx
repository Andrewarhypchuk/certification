import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quiz-slice";

const store = configureStore({
  reducer: {
    quizInfo: quizSlice,
  },
});

export default store;
