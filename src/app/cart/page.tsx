// src/app/cart/page.tsx

"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import CartItemsTable from "../components/CartItemsTable";
import CartSummary from "../components/CartSummary";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) return <p>Your cart is empty</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-mainColor">Your Cart</h1>
      {/* {cart.map((item) => (
        <div
          key={item.id}
          className="p-4 border-b flex justify-between items-center"
        >
          <div>
            <p className="text-lg font-semibold text-mainColor">{item.name}</p>
            <p className="text-gray-700">
              ${item.price.toFixed(2)} x {item.quantity}
            </p>
          </div>
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-red-500 font-semibold"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="mt-4 font-semibold text-mainColor">
        Total: ${total.toFixed(2)}
      </div>
      <Link href="/checkout">
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md">
          Proceed to Checkout
        </button> */}
      {/* </Link> */}
      <CartItemsTable />
      <CartSummary />
    </div>
  );
}
