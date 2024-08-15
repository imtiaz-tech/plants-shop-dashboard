import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const addCategory = createAsyncThunk("products/addCategory", async (data, { getState }) => {
  try {
    const { token } = getState().auth;
    const res = await axios.post("/products/add-category", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
});

export const getCategories = createAsyncThunk("products/getCategories", async (data, { getState }) => {
  try {
    const { token } = getState().auth;
    const res = await axios.get("/products/get-categories", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("🚀 ~ getCategories ~ res:", res)
    return res.data;
  } catch (error) {
    return error.response.data;
  }
});

const initialState = {
  categories: [],
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
    builder.addCase(getCategories.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.isloading = false;
      state.categories = action.payload.data;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message;
    });
  },
});
export default productAuthSlice.reducer;
