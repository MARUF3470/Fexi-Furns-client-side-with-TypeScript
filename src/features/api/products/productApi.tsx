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
      query: (query) => ({
        url: `/products?page=${query.page}&size=${query.size}&keyword=${query.keyword}`,
      }),
    }),
    getSingProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
      }),
    }),
  }),
});
export const {
  usePostProductMutation,
  useGetProductQuery,
  useGetSingProductQuery,
} = productApi;
