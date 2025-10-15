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
const initialState: InitialState = {
  books: [],
};
// 1. Darle un nombre al slice
// 2. Pasar el estado inicial
// 3. Crear el reducer con las actions
export const booksSlice = createSlice({
  name: "books",
  initialState,
  //Reducer contiene las actiones para determinar que es lo que cambia del estado inicial
  reducers: {
    //Actions
    saveBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = [...state.books, ...action.payload];
    },
  },
});
//Destructurar las actions para exportarlas de manera individual
export const { saveBooks } = booksSlice.actions;
//Exportar el reducer del slice
export default booksSlice.reducer;
//El store es el estado global, es decir, la suma de todos los slices. En este caso solo tenemos un slice que es booksSlice, pero en una app real podemos tener muchos slices.
