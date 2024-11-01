// src/app/category/[category]/page.tsx

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // New hook to access dynamic route params
import ProductList from "../../components/ProductList";
import StoreList from "../../components/StoreList";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Store = {
  id: number;
  name: string;
  rating: number;
  image: string;
};

export default function CategoryPage() {
  const { category } = useParams(); // Get the category directly from the URL

  const [products, setProducts] = useState<Product[]>([]);
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    if (!category) return; // Exit if category is not available

    console.log(`Fetching data for category: ${category}`); // Debugging statement

    fetchProductsByCategory(category);
    fetchStoresByCategory(category);
  }, [category]); // Only rerun when `category` changes

  const fetchProductsByCategory = async (category: string) => {
    // Mock data; replace with actual API call.
    const productsData: Product[] = [
      {
        id: 1,
        name: "Product 1",
        price: 29.99,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Product 2",
        price: 59.99,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        name: "Product 3",
        price: 39.99,
        image: "https://via.placeholder.com/150",
      },
    ];
    setProducts(productsData);
  };

  const fetchStoresByCategory = async (category: string) => {
    // Mock data; replace with actual API call.
    const storesData: Store[] = [
      {
        id: 1,
        name: "Store 1",
        rating: 4.5,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Store 2",
        rating: 4.2,
        image: "https://via.placeholder.com/150",
      },
    ];
    setStores(storesData);
  };

  // Show loading state if category is not ready
  if (!category) {
    return <div>Loading...</div>; // or some error message
  }

  return (
    <div className="px-6 py-8">
      <h1 className="text-2xl font-bold mb-4">{category}</h1>
      <ProductList products={products} />
      <h2 className="text-xl font-semibold mt-8 mb-4">Available Stores</h2>
      <StoreList stores={stores} />
    </div>
  );
}
