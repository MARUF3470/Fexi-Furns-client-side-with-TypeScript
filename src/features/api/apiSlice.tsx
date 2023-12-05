/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fexi-furn-api.onrender.com/",
  }),
  tagTypes: ["product", "users", "cart"],
  endpoints: () => ({}),
});

export default apiSlice;
