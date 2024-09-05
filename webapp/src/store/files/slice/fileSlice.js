import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  fileNames: [],
  fileList: [],
  namesRequestStatus: "initial",
  listRequestStatus: "initial",
};

const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    updateFileList: (state, action) => {
      state.fileList = action.payload;
    },
    updateFileNames: (state, action) => {
      state.fileNames = action.payload;
    },
    updateNameRequestStatus: (state, action) => {
      state.namesRequestStatus = action.payload;
    },
    updateListRequestStatus: (state, action) => {
      state.listRequestStatus = action.payload;
    },
  },
});

export const {
  updateFileList,
  updateFileNames,
  updateListRequestStatus,
  updateNameRequestStatus,
} = fileSlice.actions;

export default fileSlice.reducer;
