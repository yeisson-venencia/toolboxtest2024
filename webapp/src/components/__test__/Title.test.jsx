import { render, screen } from "@testing-library/react";
// component
import Title from "../Title";

describe("Title component test", () => {
  it("correctly renders", () => {
    render(<Title />);
    expect(screen.getByText("React Test App")).toBeInTheDocument();
  });
});
