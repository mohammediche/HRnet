import { createReducer } from "@reduxjs/toolkit";
import { updateEmployeesList, getEmployees, nextStep, prevStep } from "./Employee.actions";

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
  employee: [
    {
      birthDate: "09/03/2023",
      city: "Sartrouville",
      department: "Legal",
      firstName: "Mohammed",
      lastName: "Iche",
      startDate: "08/05/2015",
      state: "AK",
      street: "2 rue Gustave Flaubert",
      zipCode: 78500,
    },
    {
      birthDate: "19/12/2001",
      city: "Bordeau",
      department: "Sales",
      firstName: "Yacine",
      lastName: "Kader",
      startDate: "02/01/2023",
      state: "AM",
      street: "55 avenue tu connais",
      zipCode: 23200,
    },
    {
      birthDate: "01/01/1999",
      city: "Kouba",
      department: "Marketing",
      firstName: "Aroum",
      lastName: "Zour",
      startDate: "12/11/2018",
      state: "AS",
      street: "Rue je sais pas",
      zipCode: 92600,
    },
  ],
  step: 1,
};

const EmployeeSlice = createReducer(initialState, (builder) => {
  builder
    .addCase(getEmployees, (state, action) => {
      state.employee = [...state.employee, action.payload.data];
    })
    .addCase(nextStep, (state, action) => {
      state.step += 1;
    })
    .addCase(prevStep, (state, action) => {
      state.step--;
    })
    // ça ne marche pas, voir comment faire pour action.payload.data remplace le tableau state.employee
    .addCase(updateEmployeesList, (state, action) => {
      console.log("action payloa data =>", action.payload.data);
      state.employee = action.payload.data;
    });
});
export default EmployeeSlice;
