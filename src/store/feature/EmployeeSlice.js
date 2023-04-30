import { createReducer } from "@reduxjs/toolkit";
import { getEmployees, goToNextStep, goToPreviousStep, goToStep } from "./Employee.actions";

const initialState = {
  employee: [],
  step: 1,
};

const EmployeeSlice = createReducer(initialState, (builder) => {
  builder
    .addCase(getEmployees, (state, action) => {
      state.employee = [...state.employee, action.payload.data];
    })
    .addCase(goToNextStep, (state, action) => {
      state.step += 1;
    })
    .addCase(goToPreviousStep, (state, action) => {
      state.step -= 1;
    })
    .addCase(goToStep, (state, action) => {
      state.step = action.payload.step;
    });
});
export default EmployeeSlice;
