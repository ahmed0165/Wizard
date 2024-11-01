// src/components/Banner.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter();

  function handleClick() {
    router.push("/category"); // Navigates to the categories page
  }

  return (
    <div className="relative flex items-center justify-center h-60 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Explore the Best Stores Nearby</h2>
        <p className="mt-2">Find top-rated products and amazing deals</p>
        <button
          className="mt-4 px-6 py-2 bg-white text-blue-500 rounded-md font-semibold"
          onClick={handleClick}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}
