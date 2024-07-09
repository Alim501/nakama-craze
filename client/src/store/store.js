import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';
import productReducer from './productSlice';
import basketReducer from './basketSlice';
import categoryReducer from './categorySlice';
import AnimeReducer from './AnimeSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    categories:categoryReducer,
    anime:AnimeReducer
    // cart: cartReducer,
  },
});
