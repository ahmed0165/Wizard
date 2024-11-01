import React from "react";

type Store = {
  id: number;
  name: string;
  rating: number;
  image: string;
};

type StoreListProps = {
  stores: Store[]; // Expecting an array of stores
};

export default function StoreList({ stores = [] }: StoreListProps) {
  if (stores.length === 0) {
    return <p>No stores available for this category.</p>; // Provide feedback when no stores are available
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stores.map((store) => (
        <div
          key={store.id}
          className="p-4 border rounded-md shadow-sm hover:shadow-md transition-shadow"
        >
          <img
            src={store.image}
            alt={store.name}
            className="w-full h-32 object-cover rounded-md"
          />
          <div className="mt-3">
            <h4 className="text-lg font-semibold">{store.name}</h4>
            <p className="text-sm text-gray-600">Rating: {store.rating} ⭐</p>
          </div>
        </div>
      ))}
    </div>
  );
}
