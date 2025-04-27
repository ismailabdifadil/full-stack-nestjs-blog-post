import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const state = getState();

    const token = state?.user?.token;
    console.log('the token is', token);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Blog", "User", "Posts"],
  endpoints: () => ({}),
});
