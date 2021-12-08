import { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'OutlastTypes';

import Books from './Books';
import { fetchBooks } from '../../booksSlice';
import { selectBooks, selectIsNetworkBusy, selectNextPageNumber } from '../../selectors';

type Props = Record<string, unknown>;

const ConnectedBooks: FC<Props> = function BooksRoute() {
  const isBusy = useSelector(selectIsNetworkBusy);
  const books = useSelector(selectBooks);
  const nextPage = useSelector(selectNextPageNumber);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleOnClick = useCallback(() => {
    dispatch(fetchBooks(nextPage ?? undefined));
  }, [dispatch, nextPage]);

  return (
    <div>
      <Books books={books} isBusy={isBusy} onLoadMore={handleOnClick} />
    </div>
  );
};

export default ConnectedBooks;
