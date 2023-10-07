import apiSlice from "../apiSlice";

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
    }),
    getProduct: builder.query({
      query: () => ({
        url: "/products",
      }),
    }),
  }),
});
export const { usePostProductMutation, useGetProductQuery } = productApi;
