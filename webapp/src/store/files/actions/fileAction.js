import { getFileNames, getFilesList } from "../../../service/files.service";
import {
  updateFileList,
  updateFileNames,
  updateListRequestStatus,
  updateNameRequestStatus,
} from "../slice/fileSlice";
import requestingStatuses from "../../../constants/requestingStatuses";

export const fetchFileNames = () => async (dispatch) => {
  dispatch(updateNameRequestStatus(requestingStatuses.INITIAL));
  dispatch(updateNameRequestStatus(requestingStatuses.REQUESTING));
  try {
    const response = await getFileNames();
    dispatch(updateFileNames(response));
    return dispatch(updateNameRequestStatus(requestingStatuses.SUCCESS));
  } catch (e) {
    return dispatch(updateNameRequestStatus(requestingStatuses.FAILURE));
  }
};

export const fetchFileList =
  (fileName = "") =>
  async (dispatch) => {
    dispatch(updateListRequestStatus(requestingStatuses.INITIAL));
    dispatch(updateListRequestStatus(requestingStatuses.REQUESTING));
    try {
      const response = await getFilesList(fileName);
      dispatch(updateFileList(response));
      return dispatch(updateListRequestStatus(requestingStatuses.SUCCESS));
    } catch (e) {
      return dispatch(updateListRequestStatus(requestingStatuses.FAILURE));
    }
  };
