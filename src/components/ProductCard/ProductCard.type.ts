export interface ProductCardProps {
    title: string;
    brandName: string;
    imageUrl: string;
    rating: 1 | 2 | 3 | 4 | 5;
    ram: number;
    screenSize: number;
    batteryCapacity: number;
    processor: string;
    price: string;
  }

export interface ProductProps {
    products : [ProductCardProps]
}