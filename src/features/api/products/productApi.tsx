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
      providesTags: ["product"],
    }),
    getSingProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `/product/${data.id}`,
        method: "PATCH",
        body: { quantity: data.quantity },
      }),
      invalidatesTags: ["product"],
    }),
    postCartItem: builder.mutation({
      query: (cartData) => ({
        url: "/cartItems",
        method: "POST",
        body: cartData,
      }),
      invalidatesTags: ["cart"],
    }),
    getCartPItems: builder.query({
      query: (email) => ({
        url: `/cartItems/${email}`,
      }),
      providesTags: ["cart"],
    }),
    deleteCartItems: builder.mutation({
      query: ({ id, email }) => ({
        url: `/cartItem/${id}?email=${email}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
    paymentItemDetails: builder.mutation({
      query: (data) => ({
        url: `/payments`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const {
  usePostProductMutation,
  useGetProductQuery,
  useGetSingProductQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetCartPItemsQuery,
  usePostCartItemMutation,
  useDeleteCartItemsMutation,
  usePaymentItemDetailsMutation,
} = productApi;
