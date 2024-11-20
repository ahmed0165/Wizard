"use client";

import Link from "next/link";
import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Header() {
  const cartItemCount = useSelector((state: RootState) =>
    state.cart.cart.reduce((count, item) => count + item.quantity, 0)
  );

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md">
      <Link href={`/`} className="text-xl font-bold text-blue-500">
        Wizard
      </Link>
      <input
        type="text"
        placeholder="Search for stores or products..."
        className="w-1/3 p-2 border rounded-md"
      />
      <nav className="flex items-center space-x-6 relative">
        <Link
          href={"/cart"}
          className="text-blue-500 hover:text-black text-xl relative"
        >
          <FaShoppingCart />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItemCount}
            </span>
          )}
        </Link>
        <Link
          href={"/profile"}
          className="text-blue-500 hover:text-black text-xl"
        >
          <FaUser />
        </Link>
      </nav>
    </header>
  );
}
