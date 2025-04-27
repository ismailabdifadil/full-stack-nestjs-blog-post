import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const state = getState();

    const token = state?.user?.token;
<<<<<<< HEAD
    console.log('the token is', token);
=======
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
<<<<<<< HEAD
  tagTypes: ["Blog", "User", "Posts"],
=======
  tagTypes: ["Blog", "User"],
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
  endpoints: () => ({}),
});
