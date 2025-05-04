import { render } from "@testing-library/react";

import { BrowserRouter } from "react-router";
import Header from "../Header";
import "@testing-library/jest-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: () => mockedUsedNavigate,
}));
it("Should load header component", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
});
