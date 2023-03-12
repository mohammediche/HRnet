import { createAction } from "@reduxjs/toolkit";

const getEmployees = createAction("data/getEmployees", (data) => ({
  payload: {
    data,
  },
}));
const nextStep = createAction("data/nextStep", (step) => ({
  payload: {
    step,
  },
}));
const prevStep = createAction("data/prevStep", (step) => ({
  payload: {
    step,
  },
}));

const deleteEmployees = createAction("data/deleteEmployees");

export { getEmployees, nextStep, prevStep, deleteEmployees };
