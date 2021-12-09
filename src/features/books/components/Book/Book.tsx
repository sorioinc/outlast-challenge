import { FC, useCallback } from 'react';
import { Image, Flex, Box, Text, Heading } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';

import './Books.scss';

export interface BookProps {
  id: number;
  title: string;
  authors: string;
  cover: string;
  isFavorite?: boolean;
  onMarkAsFavorite: (id: number) => void;
}

const Book: FC<BookProps> = function Book({
  id,
  title,
  authors,
  cover,
  isFavorite,
  onMarkAsFavorite,
}) {
  const handleOnClick = useCallback(() => {
    onMarkAsFavorite(id);
  }, [onMarkAsFavorite, id]);

  return (
    <Flex p={5} alignItems="center">
      <Box borderRadius="md" overflow="hidden">
        <Image src={cover} alt={title} objectFit="cover" />
      </Box>
      <Box p={4}>
        <Heading>{title}</Heading>
        <Text>{authors}</Text>
      </Box>
      <Box>
        <button
          type="button"
          aria-label="Mark as Favorite"
          onClick={handleOnClick}
          data-testid="FavoriteButton"
        >
          <FiHeart className={`${isFavorite ? 'filled' : 'heart'}`} size="25px" />
        </button>
      </Box>
    </Flex>
  );
};

export default Book;
