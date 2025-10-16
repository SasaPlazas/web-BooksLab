//Un slice es un mini contexto, es una parte pequeña que forma el estado global. El estado global es el total de los slices.
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Book {
  id: string;
  title: string;
  author: string;
  year?: number;
}
//Estado inicial
type InitialState = {
  books: Book[];
};
// 1. Darle un nombre al slice
const initialState: InitialState = {
  books: [],
};
// 2. Pasar el estado inicial
// 3. Crear el reducer con las actions
export const booksSlice = createSlice({
  name: "books",
  initialState,
  //Reducer contiene las actiones para determinar que es lo que cambia del estado inicial
  reducers: {
    //Actions
    saveBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },

    addBooks: (state, action: PayloadAction<Book>) => {
      state.books = [...state.books, action.payload]
    },

    deleteBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.id !== action.payload)
    },
    editBook: (state, action: PayloadAction<Book>) => { 
      const bookIndex = state.books.findIndex((book) => book.id === action.payload.id) //funcion de arreglos para encontrar el indice del libro que se quiere editar/ se puede usar Find ()
      if (bookIndex !== -1) { //-1 (no tiene indice)
        state.books[bookIndex] = action.payload // payload
      }
    }
    
  },
});
//Destructurar las actions para exportarlas de manera individual
export const { saveBooks, addBooks, deleteBook, editBook } = booksSlice.actions;
//Exportar el reducer del slice
export default booksSlice.reducer;
//El store es el estado global, es decir, la suma de todos los slices. En este caso solo tenemos un slice que es booksSlice, pero en una app real podemos tener muchos slices.
