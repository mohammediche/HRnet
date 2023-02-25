import { createReducer } from "@reduxjs/toolkit";
import { deleteEmployees, getEmployees } from "./Employee.actions";

const employeeDetails = {
  FirstName: "",
  LastName: "",
  Birthdate: "",
  StartDate: "",
  Street: "",
  City: "",
  State: "",
  ZipCode: 0,
  Department: "",
};

const initialState = {
  employee: employeeDetails,
};

const EmployeeSlice = createReducer(initialState, (builder) => {
  builder
    .addCase(getEmployees, (state, action) => {
      state.employee = action.payload;
      console.log(action.payload);
    })
    .addCase(deleteEmployees, (state, action) => {
      state.employee = null;
    });
});
export default EmployeeSlice;
