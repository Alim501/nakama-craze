import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  CreateAnime,
  deleteAnime,
  getAllAnime,
  updateAnime,
} from "../http/AdminApi/AdminAnime";

// Async thunk для загрузки аниме
export const fetchAnime = createAsyncThunk("anime/fetchAnime", async () => {
  const response = await getAllAnime();
  return response;
});

// Async thunk для создания аниме
export const createNewAnime = createAsyncThunk(
  "anime/createNewAnime",
  async (anime) => {
    const response = await CreateAnime(anime);
    return response;
  }
);

// Async thunk для обновления аниме
export const updateExistingAnime = createAsyncThunk(
  "anime/updateExistingAnime",
  async ({ id, anime }) => {
    const response = await updateAnime(id, anime);
    return response;
  }
);

// Async thunk для удаления аниме
export const deleteExistingAnime = createAsyncThunk(
  "anime/deleteExistingAnime",
  async (id) => {
    const response = await deleteAnime(id);
    return response;
  }
);

const animeSlice = createSlice({
  name: "anime",
  initialState: {
    items: [],
    selectedAnime: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setSelectedAnime: (state, action) => {
      state.selectedAnime = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnime.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAnime.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchAnime.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createNewAnime.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createNewAnime.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(action.payload);
      })
      .addCase(createNewAnime.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateExistingAnime.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateExistingAnime.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.items.findIndex(
          (anime) => anime.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateExistingAnime.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteExistingAnime.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteExistingAnime.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = state.items.filter(
          (anime) => anime.id !== action.payload.id
        );
      })
      .addCase(deleteExistingAnime.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSelectedAnime } = animeSlice.actions;
export default animeSlice.reducer;
