import React, { useState } from "react";
import CartSummary from "./CartSummary";

const Checklist = ({ subtotal, shipping }) => {
  const [coupon, setCoupon] = useState("");

  const handleApplyCoupon = () => {
    // Logic to apply coupon (not implemented here)
    console.log("Applying coupon:", coupon);
  };

  const total = subtotal + shipping;

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start mt-8">
      <div className="flex items-center mb-4 lg:mb-0">
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter Coupon Code"
          className="p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleApplyCoupon}
          className="ml-4 bg-red-500 text-white py-2 px-4 rounded-md"
        >
          Apply Coupon
        </button>
      </div>
      <CartSummary subtotal={subtotal} shipping={shipping} total={total} />
    </div>
  );
};

export default Checklist;
