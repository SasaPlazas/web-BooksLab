import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlices";
import { booksAPI } from "../services/booksAPI";


export const store = configureStore({
  // books: booksReducer,

  
reducer: {
    [booksAPI.reducerPath]: booksAPI.reducer,
    books: booksReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksAPI.middleware),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;