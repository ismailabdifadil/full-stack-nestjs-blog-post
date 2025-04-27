import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/apiSlice";
import userReducer from "./features/userSlice";
import { postApiSlice } from "./services/postApiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
    [postApiSlice.reducerPath]: postApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiSlice.middleware
    ),
  devTools: true,
});

export default store;
