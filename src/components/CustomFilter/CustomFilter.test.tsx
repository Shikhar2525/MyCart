import Button from "@mui/material/Button";
import { fireEvent, render, within } from "@testing-library/react";
import CustomFilter from "./CustomFilter";

describe("CustomFilter component", () => {
  it("should render without errors", () => {
    const { getByText } = render(
      <CustomFilter clearFilters={() => {}} getAllFilterValues={() => {}} />
    );
    const header = getByText("Filter");
    expect(header).toBeInTheDocument();
  });
});

test("clicks on apply filter button", () => {
  const getAllFilterValues = jest.fn(); // mock the function passed as a prop to CustomFilter
  const clearFilters = jest.fn();
  const { getByTestId } = render(
    <CustomFilter
      clearFilters={clearFilters}
      getAllFilterValues={getAllFilterValues}
    />
  );
  const applyFilterButton = getByTestId("apply-filter");
  fireEvent.click(applyFilterButton);
  expect(getAllFilterValues).toHaveBeenCalled();
});

test("clicks on clear button", () => {
  const getAllFilterValues = jest.fn();
  const clearFilters = jest.fn();
  const { getByTestId } = render(
    <CustomFilter
      clearFilters={clearFilters}
      getAllFilterValues={getAllFilterValues}
    />
  );
  const clearFilterButton = getByTestId("clear-filter");
  fireEvent.click(clearFilterButton);
  expect(clearFilters).toHaveBeenCalled();
});

