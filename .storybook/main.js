module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@snek-at/storybook-addon-chakra-ui',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
};
