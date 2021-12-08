import { FC, useCallback, useEffect } from 'react';
import { Button, StackDivider, VStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'OutlastTypes';

import { Book } from './components';
import { fetchBooks } from './booksSlice';
import { selectBooks, selectNextPageNumber } from './selectors';

type Props = Record<string, unknown>;

const Books: FC<Props> = function Books() {
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
      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">
        {books.map(book => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.authors}
            cover={book.cover}
          />
        ))}
      </VStack>
      <div>
        <Button colorScheme="teal" variant="outline" onClick={handleOnClick}>
          Load More Books
        </Button>
      </div>
    </div>
  );
};

export default Books;
