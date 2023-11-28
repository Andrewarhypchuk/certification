import React from "react";
import { useNavigate } from "react-router";
import useIsAllQuestionsAnswered from "../CustomHooks/useIsAllQuestionsAnswered";
import { Button } from "@mui/material";

const SubmitButton = () => {
  const readyToSubmit = useIsAllQuestionsAnswered();
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate("/result");
  };
  return readyToSubmit && <Button onClick={buttonHandler}>Submit</Button>;
};

export default SubmitButton;
