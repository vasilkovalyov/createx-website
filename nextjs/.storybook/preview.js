import "../styles/scss/main.scss"
import '../styles/scss/storybook.scss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // layout: 'centered',
  viewMode: 'story',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Design System',
        ['Welcome'],
        'Foundation',
        'Components',
        'Form',
        'Pages',
      ],
    },
  },
  docs: {
    inlineStories: false,
  },
  previewTabs: {
    canvas: {
      title: 'Preview',
      hidden: false,
    },
    'storybook/docs/panel': {
      title: 'Doc',
      hidden: false,
    },
  },
}

const { addDecorator } = require('@storybook/react');
const { jsxDecorator } = require('storybook-addon-jsx');

addDecorator(jsxDecorator);