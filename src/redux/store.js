//ConfigureStore simplifies the process of creating a Redux store.
//combineReducers function allows you to combine multiple reducer functions into a single function that can be passed to the Redux store.
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import productsReducer from "./slices/products"
// REHYDRATE allows the application to restore the user's previous state, including data, authentication status, and other application state
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

const persistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({ auth: persistedReducer, products: productsReducer });

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }) .concat(logger),
});

const persistor = persistStore(store);

export { store, persistor };
