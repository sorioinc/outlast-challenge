import { MemoryRouter } from 'react-router-dom';

// https://javascript.plainenglish.io/storybook-with-react-redux-and-material-ui-eeacd04bee26
export const decorators = [
  Story => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
