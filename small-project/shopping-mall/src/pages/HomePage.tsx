import React from "react";
import ProductList from "../components/products/ProductList";

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-xl font-bold"> 전체 상품 보기</h1>
      <ProductList />
    </div>
  );
}
