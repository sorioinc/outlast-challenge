import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetBookResponse, IBooksState, IsFavoriteResponse } from './types';

import { getAllBooks, getIsFavoriteBook } from './projectService';

const initialState: IBooksState = {
  books: [],
  nextPage: 2,
  isFetchingBooks: false,
  isUpdatingFavorite: false,
  isFetchingFavorite: false,
  error: undefined,
};

const sliceName = 'books';

export const fetchBooks = createAsyncThunk<GetBookResponse, { pageNumber?: number }>(
  `${sliceName}/fetchBooks`,
  async ({ pageNumber }) => {
    const response = await getAllBooks(pageNumber);

    return response;
  },
);

export const fetchIsFavorite = createAsyncThunk<IsFavoriteResponse, { bookId: number }>(
  `${sliceName}/fetchIsFavorite`,
  async ({ bookId }) => {
    const response = await getIsFavoriteBook(bookId);

    return response;
  },
);

export const updateIsFavorite = createAsyncThunk<IsFavoriteResponse, { bookId: number }>(
  `${sliceName}/fetchIsFavorite`,
  async ({ bookId }) => {
    const response = await getIsFavoriteBook(bookId);

    return response;
  },
);

const booksSlice = createSlice({
  name: `${sliceName}`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBooks.pending, state => {
        state.isFetchingBooks = true;
        state.error = undefined;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload.books;
        state.nextPage = action.payload.nextPage ?? 2;
        state.isFetchingBooks = false;
        state.error = undefined;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isFetchingBooks = false;
        state.error = action.error?.message;
      });
    builder
      .addCase(fetchIsFavorite.pending, state => {
        state.isFetchingFavorite = true;
        state.error = undefined;
      })
      .addCase(fetchIsFavorite.fulfilled, (state, action) => {
        const book = state.books.find(b => b.id === action.payload.bookId);
        if (book) {
          book.isFavorite = action.payload.isFavorite;
        }
        state.isFetchingFavorite = false;
        state.error = undefined;
      })
      .addCase(fetchIsFavorite.rejected, (state, action) => {
        state.isFetchingFavorite = false;
        state.error = action.error?.message;
      });
  },
});

export default booksSlice.reducer;
