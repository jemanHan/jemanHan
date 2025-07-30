// src/pages/HomePage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import ProductList from "../components/products/ProductList";

export default function HomePage() {
  const { category } = useParams();

  return (
    <main className="flex-1 p-6">
      <h1 className="mb-4 text-xl font-bold">
        {category ? `${category} 상품 보기` : "전체 상품 보기"}
      </h1>
      <ProductList category={category || "all"} />
    </main>
  );
}
