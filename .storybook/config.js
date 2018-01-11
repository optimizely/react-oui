import { configure } from '@storybook/react';
import * as storybook from '@storybook/react';

const { version } = require('../package.json');

const req = require.context('../src/', true, /story\.js$/);

function loadStories() {
  req.keys().forEach(req)
}

storybook.configure(loadStories, module);