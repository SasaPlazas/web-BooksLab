import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "../services/booksAPI";
import BookReducer from "./booksSlices";

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    book: BookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
