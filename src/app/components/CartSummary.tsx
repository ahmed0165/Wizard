// src/components/CartSummary.tsx
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Link from "next/link";

export default function CartSummary() {
  //   const total = useSelector((state: RootState) => state.cart.total);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 5.99; // Example flat-rate shipping

  return (
    <div className="mt-6 flex flex-col">
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Enter Coupon Code"
          className="border rounded p-2 w-full mr-2"
        />
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Apply Coupon
        </button>
      </div>
      <div className="p-4 border rounded-md">
        <h2 className="font-semibold text-lg mb-2">Cart Summary</h2>
        <p className="flex justify-between">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </p>
        <p className="flex justify-between">
          <span>Shipping:</span>
          <span>${shipping.toFixed(2)}</span>
        </p>
        <p className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>${(subtotal + shipping).toFixed(2)}</span>
        </p>
        <Link
          href="/checkout"
          className="mt-4 w-full bg-red-500 text-white py-2 rounded"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
