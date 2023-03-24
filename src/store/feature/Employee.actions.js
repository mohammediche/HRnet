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

const updateEmployeesList = createAction("data/updateEmployeesList", (data) => ({
  payload: {
    data,
  },
}));

export { getEmployees, nextStep, prevStep, updateEmployeesList };
