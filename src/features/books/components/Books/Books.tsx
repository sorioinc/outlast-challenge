import { FC } from 'react';
import { Button, Flex, Spinner, StackDivider, VStack } from '@chakra-ui/react';

import { BookItem } from '../BookItem';
import { Book } from '../../types';

interface BooksProps {
  isBusy: boolean;
  books: Book[];
  onLoadMore: () => void;
}

const Books: FC<BooksProps> = function Books({ isBusy, books, onLoadMore }) {
  return (
    <div>
      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">
        {books.map(book => (
          <BookItem
            key={book.id}
            id={book.id}
            title={book.title}
            authors={book.authors}
            cover={book.cover}
          />
        ))}
      </VStack>
      <div>
        <Button colorScheme="teal" variant="outline" onClick={onLoadMore} disabled={isBusy}>
          <Flex alignItems="center">
            {isBusy ? <Spinner size="xs" mr="7px" /> : null}
            Load More Books
          </Flex>
        </Button>
      </div>
    </div>
  );
};

export default Books;
