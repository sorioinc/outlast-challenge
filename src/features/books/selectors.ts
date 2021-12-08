import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'OutlastTypes';

import { Book } from './types';

export function selectBooks(state: RootState): Book[] {
  return state.books.books;
}

export function selectNextPageNumber(state: RootState): number | null {
  return state.books.nextPage;
}

export function selectIsFetchingBooks(state: RootState): boolean {
  return state.books.isFetchingBooks;
}

export function selectIsFetchingFavorite(state: RootState): boolean {
  return state.books.isFetchingFavorite;
}

export function selectIsUpdatingFavorite(state: RootState): boolean {
  return state.books.isUpdatingFavorite;
}

export const selectIsNetworkBusy = createSelector(
  selectIsFetchingBooks,
  selectIsFetchingFavorite,
  selectIsUpdatingFavorite,
  (isFetchingBooks, isFetchingFavorite, isUpdatingFavorite) =>
    isFetchingBooks || isFetchingFavorite || isUpdatingFavorite,
);
