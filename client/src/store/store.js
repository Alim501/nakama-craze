import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import productReducer from "./productSlice";
import categoryReducer from "./categorySlice";
import AnimeReducer from "./AnimeSlice";
import cartReducer from "./CartSlice";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    categories: categoryReducer,
    anime: AnimeReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
