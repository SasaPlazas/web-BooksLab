import { configureStore } from "@reduxjs/toolkit";
import { libraryAPI } from "../services/booksAPI";
import BookReducer from "./booksSlices";

export const store = configureStore({
  reducer: {
    [libraryAPI.reducerPath]: libraryAPI.reducer,
    book: BookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(libraryAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
