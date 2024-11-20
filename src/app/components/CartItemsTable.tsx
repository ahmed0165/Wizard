// src/components/CartItemsTable.tsx
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

import { removeFromCart } from "../../features/cart/cartSlice";

import Image from "next/image";

export default function CartItemsTable() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  console.log(cartItems);

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border-b p-4 text-left text-mainColor">Product</th>
          <th className="border-b p-4 text-left text-mainColor">Price</th>
          <th className="border-b p-4 text-left text-mainColor">Quantity</th>
          <th className="border-b p-4 text-left text-mainColor">Subtotal</th>
          <th className="border-b p-4 text-left text-mainColor"></th>
        </tr>
      </thead>
      <tbody className="text-mainColor">
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td className="p-4 flex items-center">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={50}
                height={50}
                className="mr-4"
              />
              {item.name}
            </td>
            <td className="p-4">${item.price.toFixed(2)}</td>
            <td className="p-4">
              <input
                type="number"
                value={item.quantity}
                className="w-16 text-center border rounded"
                readOnly
              />
            </td>
            <td className="p-4">${(item.price * item.quantity).toFixed(2)}</td>
            <td
              className="p-4 text-red-500 cursor-pointer"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
