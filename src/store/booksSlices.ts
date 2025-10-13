import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface Book {
  id: string;
  title: string;
  author: string;
  year?: number;
}

interface BookState {
  bookList: Book[];
}

const initialState: BookState = {
  bookList: [],
};

export const BookSlice = createSlice({
  name: "bookList",
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.bookList = action.payload; 
    },
    addBook: (state, action: PayloadAction<Book>) => {
      state.bookList = [...state.bookList, action.payload];
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.bookList = state.bookList.filter((book) => book.id !== action.payload);
    },
    editBook: (state, action: PayloadAction<Book>) => {
      state.bookList = state.bookList.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );
    },
  },
});

export const { setBooks, addBook, editBook, deleteBook } = BookSlice.actions;
export default BookSlice.reducer;
