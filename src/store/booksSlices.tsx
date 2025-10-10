import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
}

type InitialState = {
  books: Book[];
};


const initialState: InitialState = {
  books: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    saveBooks: (state, action: PayloadAction<Book>) => {
      state.books = [...state.books, action.payload]
    },
  },
});


export const selectBooks = (state: RootState) => state.books;

export default booksSlice.reducer;