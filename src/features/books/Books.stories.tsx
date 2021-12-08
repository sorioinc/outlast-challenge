import { ComponentStory, ComponentMeta } from '@storybook/react';

import Books from './Books';

export default {
  title: 'Example/Book',
  component: Books,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Books>;

const Template: ComponentStory<typeof Books> = function componentStory(args) {
  return <Books {...args} />;
};

export const Main = Template.bind({});
Main.args = {};
