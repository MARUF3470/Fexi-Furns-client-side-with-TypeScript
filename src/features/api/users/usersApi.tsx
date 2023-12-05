import apiSlice from "../apiSlice";

const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    getUsers: builder.query({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["users"],
    }),
    getSingleUser: builder.query({
      query: (data) => ({
        url: `/user/${data}`,
      }),
    }),
    deleteUser: builder.mutation({
      query: (email) => ({
        url: `/user/${email}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  usePostUserMutation,
  useGetUsersQuery,
  useGetSingleUserQuery,
  useDeleteUserMutation,
} = usersApi;
