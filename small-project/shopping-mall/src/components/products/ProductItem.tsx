import React from "react";
import { Product } from "../../data/products";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

export default function ProductItem({ product }: Props) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="block p-3 transition duration-200 transform bg-white border rounded-lg hover:scale-105 hover:shadow-lg">
      <div className="space-y-1 text-center">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain w-20 h-20 mx-auto"
        />
        <h2 className="text-sm font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-500">
          {product.price.toLocaleString()}원
        </p>
      </div>
    </Link>
  );
}
