// import { configureStore } from "@reduxjs/toolkit";
// import Cart from "../pages/cart/Cart";
// import CartSlice from "./cartSlice";

// const store = configureStore({
//     reducer: {
//         cart : CartSlice
//     },
//     devTools: true
// });
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: true,
});

export default store;
