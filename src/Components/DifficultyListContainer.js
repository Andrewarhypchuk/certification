import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeDifficulty,
  selectSelectedDifficulty,
} from "../Redux/quiz-slice";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DifficultyListContainer = () => {
  const selectedDifficulty = useSelector(selectSelectedDifficulty);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeDifficulty(event.target.value));
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
      <InputLabel id="demo-simple-select-standard-label">Difficulty</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="difficultySelect"
        value={selectedDifficulty}
        onChange={handleChange}
        label="Difficulty"
      >
        <MenuItem value={'easy'}>Easy</MenuItem>
        <MenuItem value={'medium'}>Medium</MenuItem>
        <MenuItem value={'hard'}>Hard</MenuItem>
      </Select>
    </FormControl>
  );
};
export default DifficultyListContainer;
