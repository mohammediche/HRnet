import { createReducer } from "@reduxjs/toolkit";
import { deleteEmployees, getEmployees, nextStep, prevStep } from "./Employee.actions";

// const employeeDetails = {
//   FirstName: "",
//   LastName: "",
//   Birthdate: "",
//   StartDate: "",
//   Street: "",
//   City: "",
//   State: "",
//   ZipCode: 0,
//   Department: "",
// };
const initialState = {
  employee: [],
  step: 1,
};

const EmployeeSlice = createReducer(initialState, (builder) => {
  builder
    .addCase(getEmployees, (state, action) => {
      state.employee = [...state.employee, action.payload.data];
      console.log(action);
    })
    .addCase(nextStep, (state, action) => {
      state.step += 1;
    })
    .addCase(prevStep, (state, action) => {
      state.step--;
    })
    .addCase(deleteEmployees, (state, action) => {
      state.employee = null;
    });
});
export default EmployeeSlice;
