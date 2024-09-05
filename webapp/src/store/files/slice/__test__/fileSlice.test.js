import fileSliceReducer, {
  initialState,
  updateFileList,
  updateFileNames,
  updateListRequestStatus,
  updateNameRequestStatus,
} from "../fileSlice";

describe("fileSlice test", () => {
  it("handles updateListRequestStatus", () => {
    const result = fileSliceReducer(initialState, {
      type: updateListRequestStatus.type,
      payload: "failure",
    });
    expect(result).toEqual({
      ...initialState,
      listRequestStatus: "failure",
    });
  });

  it("handles updateNameRequestStatus", () => {
    const result = fileSliceReducer(initialState, {
      type: updateNameRequestStatus.type,
      payload: "failure",
    });
    expect(result).toEqual({
      ...initialState,
      namesRequestStatus: "failure",
    });
  });

  it("handles updateFileNames", () => {
    const result = fileSliceReducer(initialState, {
      type: updateFileNames.type,
      payload: ["test1.csv", "test2.csv"],
    });
    expect(result).toEqual({
      ...initialState,
      fileNames: ["test1.csv", "test2.csv"],
    });
  });

  it("handles updateFileList", () => {
    const testFile = {
      file: "test.csv",
      lines: [{ hex: "hex", number: "number", text: "text" }],
    };
    const result = fileSliceReducer(initialState, {
      type: updateFileList.type,
      payload: [testFile],
    });
    expect(result).toEqual({
      ...initialState,
      fileList: [testFile],
    });
  });
});
