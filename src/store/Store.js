import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/BooksSlice";

const store = configureStore({
  reducer: {
    bookReducer: booksReducer,
  }
})
export default store;