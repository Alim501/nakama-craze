import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createProduct, deleteProduct, getAllProducts, updateProduct } from "../http/ProductApi";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await getAllProducts();
    return response;
  }
);
export const createNewProduct = createAsyncThunk(
  "products/createNewProduct",
  async (product) => {
    const response = await createProduct(product);
    return response;
  }
);
export const updateExistingProduct = createAsyncThunk(
  "products/updateExistingProduct",
  async ( {id, product} ) => {
    const response = await updateProduct(id, product);
    return response;
  }
);

export const deleteExistingProduct = createAsyncThunk(
  "products/deleteExistingProduct",
  async (id) => {
    const response = await deleteProduct(id);
    return response;
  }
);
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createNewProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createNewProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.push(action.payload);
      })
      .addCase(createNewProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateExistingProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateExistingProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.items.findIndex(product => product.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateExistingProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteExistingProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteExistingProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = state.items.filter(product => product.id !== action.payload.id);
      })
      .addCase(deleteExistingProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export default productSlice.reducer;
