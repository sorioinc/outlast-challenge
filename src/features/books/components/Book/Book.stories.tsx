import { ComponentStory, ComponentMeta } from '@storybook/react';

import Book from './Book';

export default {
  title: 'Book',
  component: Book,
  argTypes: {},
} as ComponentMeta<typeof Book>;

const Template: ComponentStory<typeof Book> = function componentStory(args) {
  return <Book {...args} />;
};

export const Main = Template.bind({});
Main.args = {
  id: 768,
  title: 'Wuthering Heights',
  authors: 'Brontë, Emily',
  cover: 'https://www.gutenberg.org/cache/epub/768/pg768.cover.small.jpg',
};

export const IsFavorite = Template.bind({});
IsFavorite.args = {
  id: 768,
  title: 'Wuthering Heights',
  authors: 'Brontë, Emily',
  cover: 'https://www.gutenberg.org/cache/epub/768/pg768.cover.small.jpg',
  isFavorite: true,
};
