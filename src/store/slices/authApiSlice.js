import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
    prepareHeaders: (headers, {getState}) => {
      const token = getState().auth.token;
      console.log('token', token);
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: credentials => ({
        url: 'auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    getCurrentUSer: builder.query({
      query: () => 'user/me',
    }),
  }),
});

export const {
  useLoginMutation,
  useGetPostsQuery,
  useRegisterMutation,
  useGetCurrentUSerQuery,
} = authApi;

export default authApi.reducer;
