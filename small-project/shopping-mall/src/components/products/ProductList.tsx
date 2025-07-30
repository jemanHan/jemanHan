// src/components/products/ProductList.tsx
import React from "react";
import { products } from "../../data/products";
import ProductItem from "./ProductItem";

interface ProductListProps {
  category: string;
}

export default function ProductList({ category }: ProductListProps) {
  const filtered =
    category === "all"
      ? products
      : products.filter((item) => item.category === category);

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {filtered.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
