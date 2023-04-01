import { createAction } from "@reduxjs/toolkit";

const getEmployees = createAction("data/getEmployees", (data) => ({
  payload: {
    data,
  },
}));
const goToNextStep = createAction("data/goToNextStep", (step) => ({
  payload: {
    step,
  },
}));
const goToPreviousStep = createAction("data/goToPreviousStep", (step) => ({
  payload: {
    step,
  },
}));
const goToStep = createAction("data/goToStep", (step) => ({
  payload: {
    step,
  },
}));

export { getEmployees, goToNextStep, goToPreviousStep, goToStep };
