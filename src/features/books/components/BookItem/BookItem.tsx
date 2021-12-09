import { FC } from 'react';
import { Image, Stat, StatLabel, StatHelpText, Flex, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export interface BookItemProps {
  id: number;
  title: string;
  authors: string;
  cover: string;
}

const BookItem: FC<BookItemProps> = function Book({ id, title, authors, cover }) {
  return (
    <Link to={`${id}`} data-testid={`bookItem-${id}`}>
      <Flex direction="row" p={5}>
        <Box boxSize="75px" borderRadius="sm" overflow="hidden">
          <Image src={cover} alt={title} objectFit="cover" />
        </Box>
        <Box p={4}>
          <Stat>
            <StatLabel>{title}</StatLabel>
            <StatHelpText>{authors}</StatHelpText>
          </Stat>
        </Box>
      </Flex>
    </Link>
  );
};

export default BookItem;
