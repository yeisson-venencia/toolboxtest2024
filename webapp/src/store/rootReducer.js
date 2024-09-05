import { combineReducers } from "@reduxjs/toolkit";

import filesSlice from "./files/slice";

const rootReducer = combineReducers({
  files: filesSlice,
});

export default rootReducer;
