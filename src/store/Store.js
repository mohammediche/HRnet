import { configureStore } from "@reduxjs/toolkit";
import EmployeeSlice from "./feature/EmployeeSlice";

export const Store = configureStore({
  reducer: {
    data: EmployeeSlice,
  },
});
