import { configureStore, combineReducers } from "@reduxjs/toolkit";
import filesSlice from "./files/slice";

export const rootReducer = combineReducers({
  files: filesSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
