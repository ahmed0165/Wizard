"use client";

import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import CartItemsTable from "../components/CartItemsTable";

import { RootState } from "@/store";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state: RootState) => ({
    cart: state.cart.cart,
    total: state.cart.cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ),
  }));

  const handleCheckout = () => {
    alert("Checkout successful!");
    dispatch(clearCart());
  };

  if (cart.length === 0) return <p>Your cart is empty</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-mainColor">Checkout</h1>
      <p className="text-mainColor">Total Amount: ${total.toFixed(2)}</p>
      <CartItemsTable />
      {/* <CartSummary /> */}
      <button
        onClick={handleCheckout}
        className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md"
      >
        Complete Purchase
      </button>
    </div>
  );
}
