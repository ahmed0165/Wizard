// src/components/FeaturedProducts.tsx
import React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 29.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Smartwatch",
    price: 59.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 39.99,
    image: "https://via.placeholder.com/150",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="px-6 py-8">
      <h3 className="text-2xl font-bold mb-4">Featured Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover rounded-md"
            />
            <div className="mt-3">
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <p className="text-sm text-gray-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
