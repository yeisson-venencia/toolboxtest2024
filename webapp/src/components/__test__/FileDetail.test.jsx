import { render, screen } from "@testing-library/react";
// component
import FileDetails from "../FileDetails";

describe("FileDetails component test", () => {
  it("correctly renders", () => {
    const testFile = {
      file: "test.csv",
      lines: [{ hex: "hex", number: "number", text: "text" }],
    };
    render(<FileDetails file={testFile} />);
    expect(screen.getByText("test.csv")).toBeInTheDocument();
    expect(screen.getByText("hex")).toBeInTheDocument();
    expect(screen.getByText("number")).toBeInTheDocument();
    expect(screen.getByText("text")).toBeInTheDocument();
  });
});
