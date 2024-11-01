// src/components/Header.tsx
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">MultiStore</h1>
      <input
        type="text"
        placeholder="Search for stores or products..."
        className="w-1/3 p-2 border rounded-md"
      />
      <nav className="flex items-center space-x-6">
        <a href="#" className="text-gray-600 hover:text-black">
          Stores
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          Cart
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          Profile
        </a>
      </nav>
    </header>
  );
}
