import { ComponentStory, ComponentMeta } from '@storybook/react';

import Book from './Book';

export default {
  title: 'Example/Book',
  component: Book,
  argTypes: {},
} as ComponentMeta<typeof Book>;

const Template: ComponentStory<typeof Book> = function componentStory(args) {
  return <Book {...args} />;
};

export const Main = Template.bind({});
Main.args = {
  author: 'Jeanette Winterson',
  title: 'Oranges Are Not the Only Fruit',
  cover: 'https://picsum.photos/400',
};
