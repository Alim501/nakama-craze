import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../http/ProductApi";

// Async thunk для получения продуктов с фильтрами и пагинацией
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ anime_id, category_id, limit, page }) => {
    const response = await getAllProducts({
      anime_id,
      category_id,
      limit,
      page,
    });
    return response; //  { products: [], total: number }
  }
);

// Async thunk для создания нового продукта
export const createNewProduct = createAsyncThunk(
  "products/createNewProduct",
  async (product) => {
    const response = await createProduct(product);
    return response;
  }
);

// Async thunk для обновления существующего продукта
export const updateExistingProduct = createAsyncThunk(
  "products/updateExistingProduct",
  async ({ id, product }) => {
    const response = await updateProduct(id, product);
    return response;
  }
);

// Async thunk для удаления существующего продукта
export const deleteExistingProduct = createAsyncThunk(
  "products/deleteExistingProduct",
  async (id) => {
    await deleteProduct(id);
    return id; // возвращаем id для удаления продукта из состояния
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    filters: {
      anime_id: null,
      category_id: null,
    },
    pagination: {
      limit: 9,
      page: 1,
      total: 0,
    },
  },
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    },
    setPage(state, action) {
      state.pagination.page = action.payload;
    },
    setLimit(state, action) {
      state.pagination.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.products;
        state.pagination.total = action.payload.total;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createNewProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createNewProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(action.payload);
      })
      .addCase(createNewProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateExistingProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateExistingProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.items.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateExistingProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteExistingProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteExistingProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = state.items.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(deleteExistingProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Экспорт действий и редьюсера
export const { setFilters, setPage, setLimit } = productSlice.actions;
export default productSlice.reducer;
