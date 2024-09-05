import configureMockStore from "redux-mock-store";
import Thunk from "redux-thunk";
import {
  updateFileList,
  updateFileNames,
  updateListRequestStatus,
  updateNameRequestStatus,
} from "../../slice/fileSlice";
import { getFileNames, getFilesList } from "../../../../service/files.service";
// system under test
import { fetchFileList, fetchFileNames, setCurrentFile } from "../fileAction";

jest.mock("../../../../service/files.service", () => ({
  getFileNames: jest.fn(),
  getFilesList: jest.fn(),
}));

const middlewares = [Thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe("fileActions tests", () => {
  beforeEach(() => {
    store.clearActions();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("dispatches correct actions on fetchFileNames request", async () => {
    getFileNames.mockResolvedValue([]);
    const expectedActions = [
      updateNameRequestStatus("initial"),
      updateNameRequestStatus("requesting"),
      updateFileNames([]),
      updateNameRequestStatus("success"),
    ];
    await store.dispatch(fetchFileNames());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches correct actions on fetchFileNames when error occurs", async () => {
    getFileNames.mockRejectedValue(new Error());
    const expectedActions = [
      updateNameRequestStatus("initial"),
      updateNameRequestStatus("requesting"),
      updateNameRequestStatus("failure"),
    ];
    await store.dispatch(fetchFileNames());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches correct actions on fetchFileList request", async () => {
    getFilesList.mockResolvedValue([]);
    const expectedActions = [
      updateListRequestStatus("initial"),
      updateListRequestStatus("requesting"),
      updateFileList([]),
      updateListRequestStatus("success"),
    ];
    await store.dispatch(fetchFileList());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches correct actions on fetchFileList when error occurs", async () => {
    getFilesList.mockRejectedValue(new Error());
    const expectedActions = [
      updateListRequestStatus("initial"),
      updateListRequestStatus("requesting"),
      updateListRequestStatus("failure"),
    ];
    await store.dispatch(fetchFileList("test.csv"));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
