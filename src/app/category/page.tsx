// src/app/categories/page.tsx

"use client";

import Link from "next/link";

type Category = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export default function CategoriesPage() {
  const categories: Category[] = [
    {
      id: 1,
      name: "Electronics",
      description: "Devices and gadgets",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Fashion",
      description: "Clothing and accessories",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Home Goods",
      description: "Furniture and decor",
      image: "https://via.placeholder.com/150",
    },
    // Add more categories as needed
  ];

  return (
    <div className="px-6 py-8">
      <h1 className="text-2xl font-bold mb-6">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.name.toLowerCase()}`}
          >
            <div className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow cursor-pointer">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold">{category.name}</h2>
              <p className="text-gray-600">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
