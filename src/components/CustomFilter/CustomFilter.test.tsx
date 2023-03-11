import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  fireEvent,
  getByTestId,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import CustomFilter from "./CustomFilter";

describe("CustomFilter component", () => {
  it("should render without errors", () => {
    const { getByText } = render(
      <CustomFilter filteredProducts={[]} clearFilters={() => {}} getAllFilterValues={() => {}} />
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
    filteredProducts={[]}
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
    filteredProducts={[]}
      clearFilters={clearFilters}
      getAllFilterValues={getAllFilterValues}
    />
  );
  const clearFilterButton = getByTestId("clear-filter");
  fireEvent.click(clearFilterButton);
  expect(clearFilters).toHaveBeenCalled();
});


