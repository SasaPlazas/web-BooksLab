import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksAPI = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://openlibrary.org/search.json?q=King",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ``,
    }),
  }),
});

export const { useGetBooksQuery } = booksAPI;
