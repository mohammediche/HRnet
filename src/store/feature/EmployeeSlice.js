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
      birthDate: "2023-03-09",
      city: "Sartrouville",
      department: "Legal",
      firstName: "Mohammed",
      lastName: "Iche",
      startDate: "2015-05-08",
      state: "AK",
      street: "2 rue Gustave Flaubert",
      zipCode: 78500,
    },
    {
      birthDate: "2001-12-10",
      city: "Bordeau",
      department: "Sales",
      firstName: "Yacine",
      lastName: "Kader",
      startDate: "2023-01-02",
      state: "AM",
      street: "55 avenue tu connais",
      zipCode: 23200,
    },
    {
      birthDate: "2005-02-25",
      city: "Goreau",
      department: "Engineering",
      firstName: "Doum",
      lastName: "Bayen",
      startDate: "2003-11-15",
      state: "CT",
      street: "No idea",
      zipCode: 45302,
    },
    {
      birthDate: "1999-01-01",
      city: "Kouba",
      department: "Marketing",
      firstName: "Aroum",
      lastName: "Zour",
      startDate: "2018-11-13",
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
