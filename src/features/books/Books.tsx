import { FC } from 'react';
import { Button, StackDivider, VStack } from '@chakra-ui/react';

import { Book } from './components';

type Props = Record<string, unknown>;

const Books: FC<Props> = function Books() {
  // TODO: This list of books must be brought from store
  const books = [
    {
      id: '1',
      title: 'The Adventures of Tom Sawyer',
      author: 'Mark Twain',
      cover: 'https://placeimg.com/200/200/nature',
    },
    {
      id: '2',
      title: 'Fate Weaver (Wrath of Olympus)',
      author: 'Brian Tripp',
      cover: 'https://placeimg.com/200/200/any',
    },
    {
      id: '3',
      title: 'A Death in the Family (Penguin Classics)',
      author: 'James Agee',
      cover: 'https://placeimg.com/200/200/people',
    },
    {
      id: '4',
      title: 'State of Wonder: A Novel',
      author: 'Anne Patchett',
      cover: 'https://placeimg.com/200/200/tech',
    },
  ];
  return (
    <div>
      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">
        {books.map(book => (
          <Book key={book.id} title={book.title} author={book.author} cover={book.cover} />
        ))}
      </VStack>
      <div>
        <Button colorScheme="teal" variant="outline">
          Load More Books
        </Button>
      </div>
    </div>
  );
};

export default Books;
