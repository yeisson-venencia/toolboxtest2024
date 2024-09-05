import { useEffect, useState } from "react";
import { connect } from "react-redux";
// actions
import { fetchFileNames, fetchFileList } from "../store/files/actions";
// funcionts
import {
  isRequestingData,
  isSuccessRequest,
} from "../funtions/requestStatuses";

// components
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

export const FilterApp = ({
  namesRequestStatus,
  listRequestStatus,
  fileNames,
  fetchFileNamesAction,
  fetchFileListAction,
}) => {
  useEffect(() => {
    fetchFileNamesAction();
    fetchFileListAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [currentFile, setCurrentFile] = useState("");

  const requestingFileNames = isRequestingData(namesRequestStatus);
  const successFileNames = isSuccessRequest(namesRequestStatus);

  const requestingFileList = isRequestingData(listRequestStatus);

  const handleChangeFile = (value) => {
    setCurrentFile(value);
    fetchFileListAction(value);
  };

  return (
    <Row className="mb-4">
      {requestingFileNames && (
        <Spinner animation="border" role="status" data-testid="filter-loader">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {successFileNames && (
        <Form.Group className="px-0">
          <Form.Label>File</Form.Label>
          <Form.Select
            size="lg"
            value={currentFile}
            disabled={requestingFileList}
            onChange={(e) => {
              handleChangeFile(e.target.value);
            }}
          >
            <option value=""></option>
            {fileNames.map((name) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      )}
    </Row>
  );
};

export const mapStateToProps = (state) => ({
  namesRequestStatus: state.files.namesRequestStatus,
  listRequestStatus: state.files.listRequestStatus,
  fileNames: state.files.fileNames,
});

const reduxActions = {
  fetchFileNamesAction: fetchFileNames,
  fetchFileListAction: fetchFileList,
};

const connector = connect(mapStateToProps, reduxActions);

export default connector(FilterApp);
