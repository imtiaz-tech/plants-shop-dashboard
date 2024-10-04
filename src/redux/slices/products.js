//createAsyncThunk will generate three Redux action creators using createAction : pending , fulfilled , and rejected
//createSlice simplifies the process of generating action creators and reducers.
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../config/axios";
// addCategory api used for addCategory  in CategoriesAdd component
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
// getCategories api used for getCategories  in CategoriesList component
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
//getSingleCategory api used for getSingleCategory for edit
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
//updateSingleCategory api used for update Single Category 
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
//deleteSingleCategory api used for delete Single Category 
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
// addProduct api used for addProduct  in ProductAdd component
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
// getProducts api used for getProducts  in CardBlock component
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
// deleteSingleProduct api used for delete single product  in CardBlock component
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
//getSingleProduct api used for get Single Product for edit
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
//updateSingleProduct api used for update Single Product in ProductEdit component 
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
//getOrders api used in RecentTransaction component,CustomerDetail component and OrderListData component for orders shows by status
// orders shows by customer id and shows order by list in  OrderListData component
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
//getSingleOrder api used for get Single order in orderDetail component 
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
//updateOrderStatus api used in StatusOrderBlock component for change order status pending to completed
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
//getUsers api used in CustomerList component for show users in list
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
//updateUserStatus api used in CustomerList component for update user status active to inactive or inactive to active
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
//getDashboardDetails api used in Dashboard component for show customerCount,orderCount,average,averageItemSale,totalSales,productCount
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
  category:{},
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
    });
    builder.addCase(addCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });
    //state.categories used in CategoriesList component for show categories in list;
    //state.categoriesCount used in CategoriesList component for pagination;
    //state.categories used in categories compnent for add product with category;
    //state.categories used in categories compnent for edit product with category
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
    //state.category used in CategoriesList for edit single category
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
      // state.updateCategory = action.payload.data;
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
      // state.deletecategory = action.payload?.data;
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
      // state.product = action.payload.data;
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.isAllProductsLoading = false;
      state.error = action.payload;
    });
    //state.products used in CardBlock component for show products in list;
    //state.productsCount used in CardBlock component for pagination;
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
      // state.deleteproduct = action.payload.data;
    });
    builder.addCase(deleteSingleProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getSingleProduct.pending, (state) => {
      state.isSingleProductLoading = true;
    });
    // state.product used in ProductEdit for edit single product
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
      // state.updateProduct = action.payload.data;
    });
    builder.addCase(updateSingleProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getOrders.pending, (state) => {
      state.isOrdersLoading = true;
    });
    //state.orders used in RecentTransaction component shows orders by status pending;
    //state.orders used in OrderListData component shows orders by list;
    //state.orders used in CustomerDetail component shows orders by customer;
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
    //state.order used in orderDetail component for get total price of order
    //state.order used in cardBlock component for showing data name,email,phone and order created at
    //state.order used in cardBlock component for showing data firstname,lastname,address,city,email,postcode etc.
    //state.order used in cardBlock component for showing showing data product image,name,quantity of products in one order and price
    //state.isSingleOrderLoading is used in orderDetail component for loading
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
    //state.users used in CustomerList component for show users in list
    //state.usersCount used in CustomerList component for pagination;
    //state.isUsersLoading is used in CustomerList component for loading
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
      // state.status = action.payload.data;
    });
    builder.addCase(updateUserStatus.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getDashboardDetails.pending, (state) => {
      state.isOrdersLoading = true;
    });
     //state.users used in Dashboard component for show customerCount,orderCount,average,averageItemSale,totalSales,productCount
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
