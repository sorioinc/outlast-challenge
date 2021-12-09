import { IBooksState } from './types';
import reducer from './booksSlice';

const initialState: IBooksState = {
  books: [],
  error: undefined,
  isFetchingBooks: false,
  isFetchingFavorite: false,
  isUpdatingFavorite: false,
  nextPage: 2,
};

describe('booksSlice', () => {
  test('Should return initial state', () => {
    expect(
      reducer(undefined, {
        type: '',
      }),
    ).toEqual(initialState);
  });

  // Should add more tests if reducers are added in the reducers key of the slice
  // https://redux.js.org/usage/writing-tests#reducers
});
