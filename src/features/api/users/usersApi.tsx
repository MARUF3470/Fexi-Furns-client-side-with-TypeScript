import apiSlice from "../apiSlice";

const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: `/users`,
      }),
    }),
    getSingleUser: builder.query({
      query: (data) => ({
        url: `/user/${data}`,
      }),
    }),
  }),
});

export const { usePostUserMutation, useGetUsersQuery, useGetSingleUserQuery } =
  usersApi;
