import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
