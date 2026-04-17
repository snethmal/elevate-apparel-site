import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  { id: "01", name: "Ribbed Cashmere Knit", category: "Knitwear", price: 280, image: p1 },
  { id: "02", name: "Pleated Wool Trouser", category: "Trousers", price: 240, image: p2 },
  { id: "03", name: "Oversized Linen Shirt", category: "Shirts", price: 180, image: p3 },
  { id: "04", name: "Canvas Market Tote", category: "Accessories", price: 95, image: p4 },
];
