import { fireEvent, render, screen } from "@testing-library/react";
import CustomFilter from "./CustomFilter";
const getAllFilterValues = jest.fn();
const clearFilters = jest.fn();

describe("CustomFilter component", () => {
  test("should render without errors", () => {
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

  test("should click on button 2 of pagination and update the current page", async () => {
    const { getByTestId } = render(
      <CustomFilter
        filteredProducts={[]}
        clearFilters={clearFilters}
        getAllFilterValues={getAllFilterValues}
      />
    );

    expect(screen.getByTestId("Manufacturer")).toBeInTheDocument();
    fireEvent.mouseDown(getByTestId("Manufacturer"));
    fireEvent.change(
      getByTestId("Manufacturer").querySelector("input") as HTMLElement,
      { target: { value: "Google" } }
    );
    fireEvent.change(
      getByTestId("rating").querySelector("input") as HTMLElement,
      { target: { value: "2" } }
    );
    fireEvent.change(
      getByTestId("screensize").querySelector("input") as HTMLElement,
      { target: { value: "6" } }
    );
    fireEvent.change(getByTestId("ram").querySelector("input") as HTMLElement, {
      target: { value: "6" },
    });
  });
});
