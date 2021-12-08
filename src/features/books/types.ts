export interface GetBookResponse {
  nextPage: number | null;
  books: Book[];
}

export interface Book {
  id: number;
  title: string;
  authors: string;
  cover: string;
  isFavorite?: boolean;
}

export interface IsFavoriteResponse {
  bookId: number;
  isFavorite: boolean;
}

export interface IBooksState {
  books: Book[];
  nextPage: number;
  isFetchingBooks: boolean;
  isUpdatingFavorite: boolean;
  isFetchingFavorite: boolean;
  error?: string;
}
