// src/app/store/[storeId]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";

type Store = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
};

const stores = [
  {
    id: "1",
    name: "Best Grocery Store",
    description: "Best Grocery Store",
    imageUrl: "/images/apples.jpg",
  },
  {
    id: "2",
    name: "el manar",
    description: "Ripe and delicious bananas",
    imageUrl: "/images/bananas.jpg",
  },
];

export default function StoresPage() {
  const router = useRouter();
  const params = useParams();
  const { storeId } = params;

  const [store, setStore] = useState<Store | null>(stores);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStoreData() {
      try {
        // Replace this with your actual API call
        const response = await fetch(`/api/stores/${storeId}`);
        const data = await response.json();
        setStore(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching store data:", error);
        setLoading(false);
      }
    }

    fetchStoreData();
    console.log(store);
  }, [storeId]);

  if (loading) return <p>Loading...</p>;

  if (!store) return <p>Store not found</p>;

  return (
    <Link href="./store/id" className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {stores.map((stores) => (
          <div
            key={stores.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={stores.imageUrl}
              alt={stores.name}
              className="w-full h-40 object-cover mb-2 rounded-md"
            />
            <h3 className="text-lg font-semibold  text-blue-500">
              {stores.name}
            </h3>
            <p className="text-gray-700">{stores.description}</p>
          </div>
        ))}
      </div>
    </Link>
  );
}
