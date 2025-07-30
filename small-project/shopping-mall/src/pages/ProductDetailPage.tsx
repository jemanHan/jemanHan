import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === String(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>상품을 찾을 수 없습니다.</p>;

  const handleAddToCart = () => {
    alert(`${product.name} (${quantity}개) 장바구니에 담김!`);
  };

  return (
    <div className="max-w-xl p-6 mx-auto space-y-4 bg-white rounded shadow">
      <img
        src={product.image}
        alt={product.name}
        className="object-contain w-32 h-32 mx-auto rounded-lg"
      />
      <h2 className="text-xl font-bold text-center">{product.name}</h2>
      <p className="text-center text-gray-600">
        {product.price.toLocaleString()}원
      </p>
      <p className="text-sm text-center text-gray-500">지금 바로 구매하세여</p>

      <div className="flex items-center justify-center gap-4">
        <button
          className="btn btn-sm"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
          -
        </button>
        <span className="font-bold">{quantity}</span>
        <button
          className="btn btn-sm"
          onClick={() => setQuantity((q) => q + 1)}>
          +
        </button>
      </div>

      <div className="text-center">
        <button className="mt-4 btn btn-primary" onClick={handleAddToCart}>
          장바구니 담기
        </button>
      </div>
    </div>
  );
}
