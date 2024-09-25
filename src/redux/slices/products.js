import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const addCategory = createAsyncThunk("products/add-category", async (data, { getState, rejectWithValue }) => {
  try {
    const { token } = getState().auth;
    const res = await axios.post("/products/add-category", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const getCategories = createAsyncThunk(
  "products/get-categories",
  async (data, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const res = await axios.get(
        `/products/get-categories?perpage=${data.recordsPerPage}&pageno=${data.currentPage}&all=${data.all}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getSingleCategory = createAsyncThunk(
  "product/get-single-category",
  async (data, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const res = await axios.get(`/products/get-single-category/${data}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateSingleCategory = createAsyncThunk(
  "products/update-single-category",
  async (updata, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const res = await axios.patch(`/products/update-single-category/${updata.id}`, updata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteSingleCategory = createAsyncThunk(
  "products/delete-single-category",
  async (id, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const res = await axios.delete(`/products/delete-single-category/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const addProduct = createAsyncThunk("products/add-product", async (data, { getState, rejectWithValue }) => {
  try {
    const { token } = getState().auth;
    const res = await axios.post("/products/add-product", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const getProducts = createAsyncThunk("products/get-products", async (data, { getState, rejectWithValue }) => {
  try {
    const { token } = getState().auth;
    const res = await axios.get(`/products/get-products?perpage=${data.recordsPerPage}&pageno=${data.currentPage}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const deleteSingleProduct = createAsyncThunk(
  "products/delete-single-product",
  async (id, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const res = await axios.delete(`/products/delete-single-product/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getSingleProduct = createAsyncThunk(
  "product/get-single-product",
  async (data, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const res = await axios.get(`/products/get-single-product/${data}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateSingleProduct = createAsyncThunk(
  "products/update-single-product",
  async (updata, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const res = await axios.patch(`/products/update-single-product/${updata.id}`, updata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getOrders = createAsyncThunk("products/get-orders", async (data, { getState, rejectWithValue }) => {
  try {
    const { token } = getState().auth;
    const res = await axios.get("/orders/get-orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        userId: data?.userId,
        status: data?.status,
      },
    });
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const getSingleOrder = createAsyncThunk(
  "product/get-single-order",
  async (data, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const res = await axios.get(`/orders/get-single-order/${data}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateOrderStatus = createAsyncThunk(
  "products/update-order-status",
  async (data, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const res = await axios.post(`/orders/update-order-status/${data.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUsers = createAsyncThunk("products/get-users", async (data, { getState, rejectWithValue }) => {
  try {
    const { token } = getState().auth;
    const res = await axios.get("/orders/get-users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        recordsPerPage: data?.recordsPerPage,
        currentPage: data?.currentPage,
      },
    });
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const updateUserStatus = createAsyncThunk(
  "products/update-user-status",
  async (data, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const res = await axios.post(`/orders/update-user-status/${data.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getDashboardDetails = createAsyncThunk("products/get-dashboard-details", async (data, { getState, rejectWithValue }) => {
  try {
    const { token } = getState().auth;
    const res = await axios.post("/orders/get-dashboard-details", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const initialState = {
  status: {},
  order: {},
  userOrders: [],
  users: [],
  orders: [],
  dashboarddetails:[],
  product: {},
  categories: [],
  categoriesCount: 0,
  products: [],
  productsCount: 0,
  usersCount: 0,
  isLoading: false,
  isUsersLoading: false,
  isUserOrdersLoading: false,
  isOrdersLoading: false,
  isSingleProductLoading: false,
  isSingleOrderLoading: false,
  isAllProductsLoading: false,
  error: null,
};

const productAuthSlice = createSlice({
  name: "products",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(addCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.category = action.payload.data;
    });
    builder.addCase(addCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload.data;
      state.categoriesCount = action.payload.count;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getSingleCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSingleCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.category = action.payload.data;
    });
    builder.addCase(getSingleCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(updateSingleCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateSingleCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.updateCategory = action.payload.data;
    });
    builder.addCase(updateSingleCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteSingleCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteSingleCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.deletecategory = action.payload?.data;
    });
    builder.addCase(deleteSingleCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(addProduct.pending, (state) => {
      state.isAllProductsLoading = true;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.isAllProductsLoading = false;
      state.product = action.payload.data;
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.isAllProductsLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload.data;
      state.productsCount = action.payload.count;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteSingleProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteSingleProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.deleteproduct = action.payload.data;
    });
    builder.addCase(deleteSingleProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getSingleProduct.pending, (state) => {
      state.isSingleProductLoading = true;
    });
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.isSingleProductLoading = false;
      state.product = action.payload.data;
    });
    builder.addCase(getSingleProduct.rejected, (state, action) => {
      state.isSingleProductLoading = false;
      state.error = action.payload;
    });
    builder.addCase(updateSingleProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateSingleProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.updateProduct = action.payload.data;
    });
    builder.addCase(updateSingleProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getOrders.pending, (state) => {
      state.isOrdersLoading = true;
    });
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.isOrdersLoading = false;
      state.orders = action.payload.data;
    });
    builder.addCase(getOrders.rejected, (state, action) => {
      state.isOrdersLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getSingleOrder.pending, (state) => {
      state.isSingleOrderLoading = true;
    });
    builder.addCase(getSingleOrder.fulfilled, (state, action) => {
      state.isSingleOrderLoading = false;
      state.order = action.payload.data;
    });
    builder.addCase(getSingleOrder.rejected, (state, action) => {
      state.isSingleOrderLoading = false;
      state.error = action.payload;
    });
    builder.addCase(updateOrderStatus.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateOrderStatus.fulfilled, (state, action) => {
      state.isSingleOrderLoading = false;
      state.status = action.payload.data;
    });
    builder.addCase(updateOrderStatus.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getUsers.pending, (state) => {
      state.isUsersLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isUsersLoading = false;
      state.users = action.payload.data;
      state.usersCount = action.payload.count;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isUsersLoading = false;
      state.error = action.payload;
    });
    builder.addCase(updateUserStatus.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUserStatus.fulfilled, (state, action) => {
      state.Loading = false;
      state.status = action.payload.data;
    });
    builder.addCase(updateUserStatus.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getDashboardDetails.pending, (state) => {
      state.isOrdersLoading = true;
    });
    builder.addCase(getDashboardDetails.fulfilled, (state, action) => {
      state.isOrdersLoading = false;
      state.dashboarddetails = action.payload;
    });
    builder.addCase(getDashboardDetails.rejected, (state, action) => {
      state.isOrdersLoading = false;
      state.error = action.payload;
    });
  },
});
export default productAuthSlice.reducer;
