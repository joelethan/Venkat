import { createSlice } from "@reduxjs/toolkit";
import Data from "../components/Data";

const cartSlice = createSlice({
  name: "cart-slice",
  initialState: [],
  reducers: {
    addITemToCart(state, action) {
      const product = Data.find((item) => {
        return item.id === action.payload.cartItem;
      });
      state.push(product);
      console.log(product);
    },
    removeFromCart(state, action) {
      const product = Data.find((item) => {
        return item.id === action.payload.cartItem;
      });
      state = state.map((item) => {
        if (item.id !== product.id) {
          return item;
        }
        return null;
      });
      console.log(state);
      return [...state];
    },
  },
});

export const { addITemToCart, removeFromCart, fetchAllData } =
  cartSlice.actions;
export default cartSlice.reducer;
