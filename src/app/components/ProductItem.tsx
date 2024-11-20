import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice

function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-2 rounded-md" />
      <h3 className="text-lg font-semibold text-mainColor">{product.name}</h3>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
      <button onClick={() => dispatch(addToCart(product))} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}
