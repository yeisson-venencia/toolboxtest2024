import { connect } from "react-redux";
// funcionts
import {
  isRequestingData,
  isSuccessRequest,
} from "../funtions/requestStatuses";
// components
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import FileDetails from "./FileDetails";

export const TableApp = ({ fileList, listRequestStatus }) => {
  const requestingFiles = isRequestingData(listRequestStatus);
  const successFiles = isSuccessRequest(listRequestStatus);

  return (
    <Row className="px-3">
      {requestingFiles && (
        <Spinner animation="border" role="status" data-testid="table-loader">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {successFiles && (
        <Table striped bordered>
          <thead>
            <tr style={{ fontSize: 14, borderBottom: "2px solid" }}>
              <th>File Name</th>
              <th>Text</th>
              <th>Number</th>
              <th>Hex</th>
            </tr>
          </thead>
          <tbody>
            {fileList.map((file) => (
              <FileDetails file={file} key={file.file} />
            ))}
          </tbody>
        </Table>
      )}
    </Row>
  );
};

export const mapStateToProps = (state) => ({
  fileList: state.files.fileList,
  listRequestStatus: state.files.listRequestStatus,
});

const connector = connect(mapStateToProps, {});

export default connector(TableApp);
