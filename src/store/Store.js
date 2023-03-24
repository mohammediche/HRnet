import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";
import EmployeeSlice from "./feature/EmployeeSlice";

// Définir la liste des types d'actions à exclure de la persistance
const excludeActions = ["data/updateEmployeesList"];

// Définir une fonction de transformation pour exclure les actions
const excludeActionsTransform = createTransform(
  (inboundState, key) => {
    // Si l'action est exclue, retourne l'état initial
    if (excludeActions.includes(inboundState.type)) {
      return inboundState.initialState;
    }
    // Sinon, retourne l'état inchangé
    return inboundState;
  },
  (outboundState) => outboundState,
  { whitelist: ["EmployeeSlice"] }
);

const persistConfig = {
  key: "employees",
  storage,
  transforms: [excludeActionsTransform],
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
