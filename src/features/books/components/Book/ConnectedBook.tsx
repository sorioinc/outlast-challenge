import { FC, useCallback, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Center } from '@chakra-ui/react';

import { AppDispatch } from 'OutlastTypes';

import Book from './Book';
import { selectBooks } from '../../selectors';
import { fetchIsFavorite, updateIsFavorite } from '../../booksSlice';

type Props = Record<string, unknown>;

const ConnectedBook: FC<Props> = function ConnectedBook() {
  const { id } = useParams();

  const books = useSelector(selectBooks);

  const dispatch = useDispatch<AppDispatch>();

  const book = useMemo(() => books.find(b => b.id === Number(id)), [books, id]);

  useEffect(() => {
    if (book) {
      dispatch(fetchIsFavorite(book.id));
    }
  }, [dispatch, book]);

  const handleOnMarkAsFavorite = useCallback(
    (bookId: number) => {
      dispatch(updateIsFavorite(bookId));
    },
    [dispatch],
  );

  if (!book) {
    return (
      <Center>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Could not get the Book you are looking for!</AlertTitle>
          <AlertDescription>
            Fear not, go <Link to="/">back</Link> and browse more.
          </AlertDescription>
        </Alert>
      </Center>
    );
  }

  return (
    <Book
      id={book.id}
      title={book.title}
      authors={book.authors}
      cover={book.cover}
      isFavorite={book.isFavorite}
      onMarkAsFavorite={handleOnMarkAsFavorite}
    />
  );
};

export default ConnectedBook;
