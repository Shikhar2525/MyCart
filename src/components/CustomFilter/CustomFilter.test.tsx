import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  cleanup,
  fireEvent,
  getByRole,
  getByTestId,
  getByText,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomFilter from "./CustomFilter";
const getAllFilterValues = jest.fn();
const clearFilters = jest.fn();
describe("CustomFilter component", () => {
  it("should render without errors", () => {
    const { getByText } = render(
      <CustomFilter
        filteredProducts={[]}
        clearFilters={() => {}}
        getAllFilterValues={() => {}}
      />
    );
    const header = getByText("Filter");
    expect(header).toBeInTheDocument();
  });
});

test("clicks on apply filter button", () => {
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

describe("Form component", () => {
  it("should update brand value when select is changed", () => {
    const {getByTestId} =render(<CustomFilter
      filteredProducts={[]}
      clearFilters={clearFilters}
      getAllFilterValues={getAllFilterValues}
    />);


    expect(getByTestId('Manufacturer')).toBeInTheDocument();
    
    
  });
});