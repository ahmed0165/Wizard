"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const storeMock = {
  id: "1",
  name: "Best Grocery Store",
  description: "Your favorite local grocery store",
  categories: ["Fruits", "Vegetables", "Dairy"], // List of categories
  products: [
    {
      id: "1",
      name: "Organic Apples",
      description: "Fresh organic apples",
      price: 3.99,
      imageUrl: "/images/apples.jpg",
      category: "Fruits",
    },
    {
      id: "2",
      name: "Bananas",
      description: "Ripe and delicious bananas",
      price: 1.5,
      imageUrl: "/images/bananas.jpg",
      category: "Fruits",
    },
    {
      id: "3",
      name: "Milk",
      description: "Organic whole milk",
      price: 2.5,
      imageUrl: "/images/milk.jpg",
      category: "Dairy",
    },
    // Add more products with appropriate categories
  ],
};

export default function StorePage() {
  const dispatch = useDispatch();
  const { storeId } = useParams();

  const store = storeMock; // Replace with fetching logic as required
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? store.products.filter((product) => product.category === selectedCategory)
    : store.products;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-mainColor">{store.name}</h1>
      <p className="text-gray-700 mb-6">{store.description}</p>

      {/* Category Selection */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2 text-mainColor">
          Categories
        </h2>
        <div className="flex gap-4">
          {store.categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-mainColor ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
          <button
            onClick={() => setSelectedCategory("")}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === "" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            All
          </button>
        </div>
      </div>

      {/* Product List */}
      <h2 className="text-2xl font-semibold mb-4 text-mainColor">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={200}
              height={150}
              className="w-full h-40 object-cover mb-2 rounded-md"
            />
            <h3 className="text-lg font-semibold text-mainColor">
              {product.name}
            </h3>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-blue-600 font-bold">
              ${product.price.toFixed(2)}
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
