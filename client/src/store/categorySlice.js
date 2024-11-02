import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCategories } from "../http/ProductApi";
import {
  createCategory,
  deleteCategory,
  updateCategory,
} from "../http/AdminApi/CategoryApi";

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const response = await getAllCategories();
    return response;
  }
);
export const createNewCategory = createAsyncThunk(
  "category/createNewCategory",
  async (category) => {
    const response = await createCategory(category);
    return response;
  }
);
export const updateExistingCategory = createAsyncThunk(
  "category/updateExistingCategory",
  async ({ id, title }) => {
    const response = await updateCategory(id, title);
    return response;
  }
);

export const deleteExistingCategory = createAsyncThunk(
  "category/deleteExistingCategory",
  async (id) => {
    console.log(id);
    const response = await deleteCategory(id);
    return response;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    items: [],
    selectedCategory: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createNewCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createNewCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(action.payload);
      })
      .addCase(createNewCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateExistingCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateExistingCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.items.findIndex(
          (category) => category.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateExistingCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteExistingCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteExistingCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = state.items.filter(
          (category) => category.id !== action.payload.id
        );
      })
      .addCase(deleteExistingCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;
