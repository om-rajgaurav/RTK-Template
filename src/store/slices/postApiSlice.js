import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
    prepareHeaders: (headers, {getState}) => {
      const token = getState().auth.token; // Access token directly from state
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => 'products',
    }),
  }),
});

export const {useGetPostsQuery} = postApi;

export default postApi.reducer;
