import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import mainReducer from "./main-slice";

const store = configureStore({
  reducer: {
    main: mainReducer,
    cart: cartReducer,
  },
});

export default store;
