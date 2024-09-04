import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // Directly push the payload to the cart
      state.push(action.payload);
    },
    deleteFromCart(state, action) {
      // Filters out items that match the payload's id
      return state.filter((item) => item.id !== action.payload.id);
    },
    
    clearCart(state) {
      // Clears the entire cart
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
