import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const signin = createAsyncThunk("auth/signin", async (data,{ rejectWithValue }) => {
  try {
    const res = await axios.post("/auth/signin", data);
    const response = await res.data;
    return response;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const initialState = {
  user: {},
  token: "",
  isLoading: false,
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
      state.isLoading = true;
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.data.token.token;
      state.user = action.payload.data.user;
    });
    builder.addCase(signin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
