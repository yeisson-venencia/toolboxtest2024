import { render, screen } from "@testing-library/react";
// Redux
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText("React Test App");
  expect(linkElement).toBeInTheDocument();
});
