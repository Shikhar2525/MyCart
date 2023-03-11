import { ProductCardProps } from "../ProductCard/ProductCard.type";

export interface FilterValuesProps {
  brand: string;
  rating: string;
  ram: string;
  screenSize: string;
}
export interface CustomFilterPropType {
  getAllFilterValues: ({}: FilterValuesProps) => void;
  clearFilters : ()=>void;
  filteredProducts : ProductCardProps[]
}
