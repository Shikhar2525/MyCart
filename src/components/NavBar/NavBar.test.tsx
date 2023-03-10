import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("Navbar component", () => {
  test("renders Navbar component", () => {
    render(<NavBar searchProductTitle={() => null} />);
    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();
  });

  test("contains a search bar", () => {
    render(<NavBar searchProductTitle={() => null} />);
    const searchElement = screen.getByPlaceholderText("Search…");
    expect(searchElement).toBeInTheDocument();
  });

  test("triggers onChange function in search bar", () => {
    const mockOnChange = jest.fn();
    render(<NavBar searchProductTitle={() => null} />);
    const searchElement = screen.getByPlaceholderText("Search…");
    fireEvent.change(searchElement, { target: { value: "test" } });
    expect(mockOnChange).toHave;
  });
});
