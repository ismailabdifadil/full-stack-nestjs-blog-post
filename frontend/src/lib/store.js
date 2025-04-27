import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/apiSlice";
import userReducer from "./features/userSlice";
<<<<<<< HEAD
import { postApiSlice } from "./services/postApiSlice";
=======
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
<<<<<<< HEAD
    [postApiSlice.reducerPath]: postApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiSlice.middleware
    ),
=======
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
  devTools: true,
});

export default store;
