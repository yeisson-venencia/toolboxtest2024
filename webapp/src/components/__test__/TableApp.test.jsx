import { render, screen } from "@testing-library/react";
// redux
import { store } from "../../store";
// constants
import requestingStatuses from "../../constants/requestingStatuses";
// component
import { TableApp, mapStateToProps } from "../TableApp";

describe("TableApp component test", () => {
  it("correctly maps state to props", () => {
    const mappedProps = mapStateToProps(store.getState());
    expect(mappedProps.fileList).toBeDefined();
    expect(mappedProps.listRequestStatus).toBeDefined();
  });

  it("renders loading when requesting data", () => {
    render(
      <TableApp
        fileList={[]}
        listRequestStatus={requestingStatuses.REQUESTING}
      />
    );

    expect(screen.getByTestId("table-loader")).toBeInTheDocument();
  });

  it("correctly renders when data is loaded", () => {
    const testFile = {
      file: "test.csv",
      lines: [{ hex: "hex", number: "number", text: "text" }],
    };
    render(
      <TableApp
        fileList={[testFile]}
        listRequestStatus={requestingStatuses.SUCCESS}
      />
    );
    expect(screen.getByText("test.csv")).toBeInTheDocument();
    expect(screen.getByText("hex")).toBeInTheDocument();
    expect(screen.getByText("number")).toBeInTheDocument();
    expect(screen.getByText("text")).toBeInTheDocument();
    expect(screen.queryByTestId("table-loader")).not.toBeInTheDocument();
  });
});
