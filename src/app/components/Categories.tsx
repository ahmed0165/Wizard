// src/components/Categories.tsx

import React from "react";
import CategoryCard from "./CategoryCard";
import { FaShoppingBag, FaUtensils, FaClinicMedical } from "react-icons/fa"; // Use react-icons for icons

export default function Categories() {
  const categories = [
    { name: "Grocery", icon: <FaShoppingBag /> },
    { name: "Restaurants", icon: <FaUtensils /> },
    { name: "Pharmacy", icon: <FaClinicMedical /> },
  ];

  return (
    <div className="my-8 px-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            icon={category.icon}
          />
        ))}
      </div>
    </div>
  );
}
