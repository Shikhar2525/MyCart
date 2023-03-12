import React from "react";
import { render } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { ProductCardProps } from "./ProductCard.type";

describe("ProductCard", () => {
  test("renders with the correct props", () => {
    const props = {
      title: "Test Product",
      brandName: "Test Brand",
      imageUrl: "http://testimage.com",
      rating: 4,
      ram: 8,
      screenSize: 6.2,
      batteryCapacity: 4000,
      processor: "Test Processor",
      price: "$1000",
    };

    const { getByText } = render(
      <ProductCard {...(props as ProductCardProps)} />
    );

    expect(getByText(props.title)).toBeInTheDocument();
  });
});
