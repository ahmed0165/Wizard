// src/app/category/[category]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type Store = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
};

const storesData = [
  {
    id: "1",
    name: "Best Grocery Store",
    description: "A place for fresh groceries.",
    imageUrl: "/images/store 4.jpg",
    category: "grocery",
  },
  {
    id: "1",
    name: "Best Grocery Store",
    description: "A place for fresh groceries.",
    imageUrl: "/images/store 1.jpeg",
    category: "grocery",
  },
  {
    id: "1",
    name: "Best Grocery Store",
    description: "A place for fresh groceries.",
    imageUrl: "/images/store2.jpeg",
    category: "grocery",
  },
  {
    id: "1",
    name: "Best Grocery Store",
    description: "A place for fresh groceries.",
    imageUrl: "/images/store3.webp",
    category: "grocery",
  },
  {
    id: "1",
    name: "Best Grocery Store",
    description: "A place for fresh groceries.",
    imageUrl: "/images/store 4.jpg",
    category: "grocery",
  },
  {
    id: "1",
    name: "Best Grocery Store",
    description: "A place for fresh groceries.",
    imageUrl: "/images/images.jpeg",
    category: "grocery",
  },

  {
    id: "2",
    name: "Quick Bites",
    description: "Delicious meals and fast service.",
    imageUrl: "/images/restaurant.jpg",
    category: "restaurants",
  },
  {
    id: "3",
    name: "Pharma Health",
    description: "Your go-to pharmacy for health products.",
    imageUrl: "/images/pharmacy.jpg",
    category: "pharmacy",
  },
  // Add more stores as needed with their respective categories
];

export default function CategoryPage() {
  const { category } = useParams();
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    // Filter stores based on category
    const filteredStores = storesData.filter(
      (store) => store.category === category
    );
    setStores(filteredStores);
  }, [category]);

  if (stores.length === 0) {
    return <p className="text-mainColor">No stores found in this category.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-mainColor text-center">
        Stores in {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stores.map((store) => (
          <Link href={`/store/${store.id}`} key={store.id}>
            <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <Image
                src={store.imageUrl}
                alt={store.name}
                width={200} // Set width for the image
                height={150}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-semibold text-mainColor">
                {store.name}
              </h3>
              <p className="text-gray-600">{store.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
