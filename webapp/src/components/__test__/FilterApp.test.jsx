import { render, screen, fireEvent } from "@testing-library/react";
// redux
import { store } from "../../store";
// constants
import requestingStatuses from "../../constants/requestingStatuses";
// component
import { FilterApp, mapStateToProps } from "../FilterApp";

const testFileNames = ["test1.csv", "test2.csv"];
const mockFetchFileListAction = jest.fn();
const mockFetchFileNamesAction = jest.fn();

function makeView({
  listRequestStatus = requestingStatuses.INITIAL,
  namesRequestStatus = requestingStatuses.INITIAL,
}) {
  return (
    <FilterApp
      listRequestStatus={listRequestStatus}
      fileNames={testFileNames}
      namesRequestStatus={namesRequestStatus}
      fetchFileListAction={mockFetchFileListAction}
      fetchFileNamesAction={mockFetchFileNamesAction}
    />
  );
}

describe("FilterApp component test", () => {
  it("correctly maps state to props", () => {
    const mappedProps = mapStateToProps(store.getState());
    expect(mappedProps.namesRequestStatus).toBeDefined();
    expect(mappedProps.listRequestStatus).toBeDefined();
    expect(mappedProps.fileNames).toBeDefined();
  });

  it("fetch data when mounting component", () => {
    render(makeView({}));

    expect(mockFetchFileListAction).toHaveBeenCalled();
    expect(mockFetchFileNamesAction).toHaveBeenCalled();
  });

  it("renders loading when requesting data", () => {
    render(makeView({ namesRequestStatus: requestingStatuses.REQUESTING }));

    expect(screen.getByTestId("filter-loader")).toBeInTheDocument();
  });

  it("correctly renders when data is loaded", () => {
    render(makeView({ namesRequestStatus: requestingStatuses.SUCCESS }));
    expect(screen.getByText("File")).toBeInTheDocument();
    expect(screen.queryByTestId("filter-loader")).not.toBeInTheDocument();
  });

  it("handle file selector change", () => {
    render(makeView({ namesRequestStatus: requestingStatuses.SUCCESS }));
    const selector = screen.getByRole("combobox");
    expect(selector).toBeInTheDocument();
    fireEvent.change(selector, { target: { value: "test2.csv" } });
    expect(mockFetchFileListAction).toHaveBeenCalled();
  });
});
