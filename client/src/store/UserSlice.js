import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { check, login, registration } from "../http/userApi";

// Async thunk for user registration
export const userRegistration = createAsyncThunk(
  "user/userRegistration",
  async ({ email, name, password }) => {
    const user = await registration(email, name, password);
    return user;
  }
);

// Async thunk for user login
export const userLogin = createAsyncThunk(
  "user/userLogin",
  async ({ email, name, password }) => {
    const user = await login(email, name, password);
    return user;
  }
);

// Async thunk for checking user authorization
export const checkAuthorization = createAsyncThunk(
  "user/checkAuthorization",
  async () => {
    const user = await check();
    return user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuth: false,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRegistration.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userRegistration.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuth = true;
      })
      .addCase(userRegistration.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(userLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuth = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(checkAuthorization.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkAuthorization.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuth = true;
      })
      .addCase(checkAuthorization.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
