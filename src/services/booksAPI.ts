import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://openlibrary.org/search.json?q=Queen10",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (limit) => `&limit=${limit}`,
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
