import { render, screen } from "@testing-library/react";
// component
import Layout from "../Layout";

describe("Layout component test", () => {
  it("correctly renders", () => {
    render(<Layout>test</Layout>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
