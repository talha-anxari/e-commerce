// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       state.push(action.payload);
//     },
//     deleteFromCart(state, action) {
//       state = state.filter((item) => item.id !== action.payload.id);
//     },
//     clearCart(state, action) {
//       state = [];
//     },
//   },
// });
// export const {addToCart, deleteFromCart} = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // Directly push the payload to the cart
      state.push(action.payload);
    },
    deleteFromCart(state, action) {
      // Filters out items that match the payload value (in this case, "Basmati Chawal")
      return state.filter((item) => item !== action.payload);
    },
    clearCart(state) {
      // Clears the entire cart
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
