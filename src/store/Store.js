import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import EmployeeSlice from "./feature/EmployeeSlice";

const persistConfig = {
  key: "employees",
  storage,
};

const persistedReducer = persistReducer(persistConfig, EmployeeSlice);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
