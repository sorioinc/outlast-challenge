import { ComponentStory, ComponentMeta } from '@storybook/react';

import BookItem from './BookItem';

export default {
  title: 'Book Item',
  component: BookItem,
  argTypes: {},
} as ComponentMeta<typeof BookItem>;

const Template: ComponentStory<typeof BookItem> = function componentStory(args) {
  return <BookItem {...args} />;
};

export const Main = Template.bind({});
Main.args = {
  id: 234,
  authors: 'Jeanette Winterson',
  title: 'Oranges Are Not the Only Fruit',
  cover: 'https://picsum.photos/400',
};
