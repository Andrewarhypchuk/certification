import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import QuizContainer from "./Components/QuizContainer";
import { useDispatch } from "react-redux";
import { setCategories } from "./Redux/quiz-slice";
import ResultsContainer from "./Components/ResultsContainer";

function App() {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(setCategories())
   })

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<QuizContainer />} />
        <Route path="/result" element={<ResultsContainer /> } />
        <Route path="*" element={<div>no such page</div>} />
      </Routes>
    </div>
  );
}

export default App;
