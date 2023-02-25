import { createAction } from "@reduxjs/toolkit";

const getEmployees = createAction("data/getEmployees");

const deleteEmployees = createAction("data/deleteEmployees");

export { getEmployees, deleteEmployees };
