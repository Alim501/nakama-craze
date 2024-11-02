import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllCartItems,
  deleteCartItems,
  updateCartItem,
} from "../http/cartApi";

// Async thunk для получения корзины
export const fetchUserCart = createAsyncThunk(
  "cart/fetchUserCart",
  async () => {
    const cart = await getAllCartItems();
    return cart;
  }
);

// Async thunk для добавления товара в корзину
export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async ({ product_id, color_id, size_id }) => {
    const updatedCart = await addItemToCart({ product_id, color_id, size_id });
    return updatedCart;
  }
);
export const editCartItemQuantity = createAsyncThunk(
  "cart/editCartItemQuantity",
  async ({ basketItemId, quantity }) => {
    const updatedCart = await updateCartItem(basketItemId, quantity);
    return updatedCart;
  }
);
// Async thunk для удаления товара из корзины
export const removeItemFromCart = createAsyncThunk(
  "cart/removeItemFromCart",
  async ({ userId, productId }) => {
    const updatedCart = await deleteCartItems(userId, productId);
    return updatedCart;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.totalPrice = action.payload.reduce(
          (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
          0
        );
      })
      .addCase(fetchUserCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addItemToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = [...state.items, action.payload];
        state.totalPrice += action.payload.item.price * action.payload.quantity;
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(editCartItemQuantity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editCartItemQuantity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.items;
        state.totalPrice = action.payload.items.reduce(
          (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
          0
        );
      })
      .addCase(editCartItemQuantity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(removeItemFromCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.items;
        state.totalPrice = action.payload.items.reduce(
          (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
          0
        );
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;

