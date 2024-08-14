import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import productsReducer from "./slices/products"
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from 'redux-logger'

const persistConfig = {
  key: "auth",
  storage,
};

const rootReducer = combineReducers({ auth: authReducer, products: productsReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

const persistor = persistStore(store);

export { store, persistor };
