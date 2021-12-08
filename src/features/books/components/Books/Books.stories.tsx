import { ComponentStory, ComponentMeta } from '@storybook/react';

import Books from './Books';

export default {
  title: 'Books',
  component: Books,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Books>;

const Template: ComponentStory<typeof Books> = function componentStory(args) {
  return <Books {...args} />;
};

export const Main = Template.bind({});
Main.args = {
  books: [
    {
      id: 6130,
      title: 'The Iliad',
      authors: 'Homer',
      cover: 'https://www.gutenberg.org/cache/epub/6130/pg6130.cover.small.jpg',
    },
    {
      id: 2600,
      title: 'War and Peace',
      authors: 'Tolstoy, Leo, graf',
      cover: 'https://www.gutenberg.org/cache/epub/2600/pg2600.cover.small.jpg',
    },
    {
      id: 41,
      title: 'The Legend of Sleepy Hollow',
      authors: 'Irving, Washington',
      cover: 'https://www.gutenberg.org/cache/epub/41/pg41.cover.medium.jpg',
    },
    {
      id: 408,
      title: 'The Souls of Black Folk',
      authors: 'Du Bois, W. E. B. (William Edward Burghardt)',
      cover: 'https://www.gutenberg.org/cache/epub/408/pg408.cover.medium.jpg',
    },
  ],
  isBusy: false,
  onLoadMore: () => {},
};

export const Fetching = Template.bind({});
Fetching.args = {
  books: [],
  isBusy: true,
  onLoadMore: () => {},
};

export const Empty = Template.bind({});
Empty.args = {
  books: [],
  isBusy: false,
  onLoadMore: () => {},
};
