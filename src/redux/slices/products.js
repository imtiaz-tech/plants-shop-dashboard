import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const addCategory = createAsyncThunk(
  "products/addCategory",
  async (catData, { getState }) => {
    try {
      const { token } = getState().auth;
      const res = await axios.post("/products/add-category", catData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      return data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const initialState = {
  category: {},
  isloading: false,
  error: null,
};

const productAuthSlice = createSlice({
  name: "products",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(addCategory.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.isloading = false;
      state.category = action.payload.data;
    });
    builder.addCase(addCategory.rejected, (state, action) => {
      state.isloading = false;
      state.action = action.error.message;
    });
  },
});
export default productAuthSlice.reducer;
