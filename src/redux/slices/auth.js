import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signin = createAsyncThunk("auth/signin", async (data) => {
  try {
    const res = await axios.post(
      "http://localhost:5400/api/v1/auth/signin",
      data
    );
    const response = await res.data;
    return response;
  } catch (error) {
    return error.response.data;
  }
});

const initialState = {
  user: {},
  token: "",
  isloading: false,
  error: null,
};
const adminAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signin.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      state.isloading = false;
      state.token = action.payload.data.token.token;
      state.user = action.payload.data.user;
    });
    builder.addCase(signin.rejected, (state, action) => {
      state.isloading = false;
      state.action = action.error.message;
    });
  },
});

export const { logout } = adminAuthSlice.actions

export default adminAuthSlice.reducer;
