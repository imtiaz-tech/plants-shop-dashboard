import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const addCategory = createAsyncThunk("products/add-category", async (data, { getState }) => {
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

export const getCategories = createAsyncThunk("products/get-categories", async (data, { getState }) => {
  try {
    const { token } = getState().auth;
    const res = await axios.get(`/products/get-categories?perpage=${data.recordsPerPage}&pageno=${data.currentPage}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
});

export const getSingleCategory = createAsyncThunk("product/get-single-category", async (data, { getState }) => {
  try {
    const { token } = getState().auth;
    const res = await axios.get(`/products/get-single-category/${data}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
});
export const updateSingleCategory = createAsyncThunk(
  "products/update-single-category",
  async (updata, { getState }) => {
    try {
      const { token } = getState().auth;
      const res = await axios.patch(`/products/update-single-category/${updata.id}`, updata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }
);
export const deleteSingleCategory = createAsyncThunk("products/delete-single-category", async (id, { getState }) => {
  try {
    const { token } = getState().auth;
    const res = await axios.delete(`/products/delete-single-category/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
});
export const addProduct = createAsyncThunk("products/add-product", async (data, { getState }) => {
  try {
    const { token } = getState().auth;
    const res = await axios.post("/products/add-product", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("🚀 ~ addProduct ~ res:", res)
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
      state.categoriesCount = action.payload.count;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message;
    });
    builder.addCase(getSingleCategory.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getSingleCategory.fulfilled, (state, action) => {
      state.isloading = false;
      state.category = action.payload.data;
    });
    builder.addCase(getSingleCategory.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message;
    });
    builder.addCase(updateSingleCategory.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(updateSingleCategory.fulfilled, (state, action) => {
      state.isloading = false;
      state.updateCategory = action.payload.data;
    });
    builder.addCase(updateSingleCategory.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteSingleCategory.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(deleteSingleCategory.fulfilled, (state, action) => {
      state.isloading = false;
      state.deletecategory = action.payload?.data;
    });
    builder.addCase(deleteSingleCategory.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message;
    });
    builder.addCase(addProduct.pending,(state)=>{
      state.isloading=true;
    });
    builder.addCase(addProduct.fulfilled,(state,action)=>{
      state.isloading=false;
      state.product=action.payload.data;
    });
    builder.addCase(addProduct.rejected,(state,action)=>{
      state.isloading=false;
      state.error=action.error.message;
    })
  },
});
export default productAuthSlice.reducer;
