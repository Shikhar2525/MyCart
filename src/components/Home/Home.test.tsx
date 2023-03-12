import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";
import "@testing-library/jest-dom/extend-expect";

describe("Home", () => {
  test("renders without errors", () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("home")).toBeInTheDocument();
  });

  test("changes page when pagination button is clicked", async () => {
    render(<Home />);
    const paginationElement = await screen.findByTestId("pagination");
    fireEvent.click(await screen.findByLabelText("Go to page 2"));
    fireEvent.click(await screen.findByLabelText("Go to page 3"));
  });

  test("check search bar is working with results and with no results", () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText, getByText } = render(<Home />);
    const searchElement = getByPlaceholderText("Search…");
    fireEvent.change(searchElement, { target: { value: "Galaxy" } });
    expect(getByText("No records found")).toBeInTheDocument();
    expect(mockOnChange).toHave;
  });
});
