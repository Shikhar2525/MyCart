import React from "react";
import {
  ByRoleOptions,
  fireEvent,
  getByLabelText,
  getByTestId,
  getByText,
  render,
  RenderResult,
  screen,
  waitFor,
} from "@testing-library/react";
import Home from "./Home";
import Pagination from "@mui/material/Pagination";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

describe("Home", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("home")).toBeInTheDocument();
  });
});

