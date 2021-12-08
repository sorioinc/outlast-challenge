import { FC } from 'react';
import { Image, Stat, StatLabel, StatHelpText, Flex, Box } from '@chakra-ui/react';

export interface BookProps {
  id: number;
  title: string;
  author: string;
  cover: string;
}

const Book: FC<BookProps> = function Book({ title, author, cover }) {
  return (
    <Flex direction="row" p={5}>
      <Box boxSize="75px" borderRadius="sm" overflow="hidden">
        <Image src={cover} alt={title} objectFit="cover" />
      </Box>
      <Box p={4}>
        <Stat>
          <StatLabel>{title}</StatLabel>
          <StatHelpText>{author}</StatHelpText>
        </Stat>
      </Box>
    </Flex>
  );
};

export default Book;
