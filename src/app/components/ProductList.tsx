import React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
  return (
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
            <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
