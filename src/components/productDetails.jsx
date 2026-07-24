import React from "react";
import { useParams } from "react-router-dom";
import { featuredProducts } from "../assets/data/data";

function ProductDetails() {
  const { id } = useParams();

  const product = featuredProducts.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-2xl"
        />

        <div>
          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="mt-4 text-gray-600">
            {product.description}
          </p>

          <h2 className="mt-6 text-3xl font-bold text-emerald-600">
            ${product.price}
          </h2>

          <button className="mt-8 rounded-xl bg-emerald-600 px-8 py-3 text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;