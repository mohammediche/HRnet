import { createAction } from "@reduxjs/toolkit";

const getEmployees = createAction("data/getEmployees", (data) => ({
  payload: {
    data,
  },
}));

const deleteEmployees = createAction("data/deleteEmployees");

export { getEmployees, deleteEmployees };
