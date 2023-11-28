import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAILED, LOADING, SUCCESS } from "../Utils/consts";

export const setCategories = createAsyncThunk(
  "quizInfo/setCategories",
  async (dispatch, getState) => {
    return await fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((json) => json.trivia_categories);
  }
);
export const setQuiz = createAsyncThunk(
  "quizInfo/setQuiz",
  async (dispatch, {getState}) => {
    try {
      const category = getState().quizInfo.selectedCategory.id;
      const difficulty = getState().quizInfo.selectedDifficulty;
      const response = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      return json;
    }catch(error){
      throw new Error(error.message);
    }
  }
);

export const QuizSlice = createSlice({
  name: "quizInfo",
  initialState: {
    categoriesList: [],
    selectedCategory: '',
    selectedDifficulty: '',
    status: null,
    quiz:null,
  },
  reducers: {
    changeCategory: (state, action) => {
      return { ...state, selectedCategory: action.payload };
    },
    changeDifficulty: (state, action) => {
      return { ...state, selectedDifficulty: action.payload };
    },
    setAnswer: (state, action) => {
      state.quiz[action.payload.index].userAnswer = action.payload.answer
    },
    resetQuiz: (state) => {
      state.selectedCategory =  ''; 
      state.selectedDifficulty = '';
      state.status = null;
      state.quiz = null;

    }
  },
  extraReducers: {
    [setCategories.pending]: (state, action) => {
      state.status = LOADING;
    },
    [setCategories.fulfilled]: (state, action) => {
      state.status = SUCCESS;
      state.categoriesList = action.payload;
    },
    [setCategories.rejected]: (state, action) => {
      state.status = FAILED;
    },
    [setQuiz.pending]: (state, action) => {
      state.status = LOADING; 
    },
    [setQuiz.fulfilled]: (state, action) => {
        state.quiz = action.payload?.results
        state.status = SUCCESS;
    },
    [setQuiz.rejected]: (state, action) => {
      state.status = FAILED;
    }
  },
});

export const selectCategoriesList = (state) => state.quizInfo.categoriesList;
export const selectSelectedCategory = (state) =>
  state.quizInfo.selectedCategory;
export const selectSelectedDifficulty = (state) => 
  state.quizInfo.selectedDifficulty;
export const selectQuiz = (state) => state.quizInfo.quiz;
export const selectQuestionAnswer = (index) => (state) => {
  return state.quizInfo?.quiz[index].userAnswer
};
export const selectTotalScore = (state) => {
  const totalScore = state.quizInfo?.quiz?.reduce((acc,question) => {
    const answerScore = question.userAnswer === question.correct_answer ? 1 : 0;
    return acc + answerScore;
  }, 0);

  return totalScore;
};
export const selectStatus = (state) => state.quizInfo.status;
export const { changeCategory, changeDifficulty , setAnswer , resetQuiz } = QuizSlice.actions;

export default QuizSlice.reducer;
