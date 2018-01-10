import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Text from '../components/Text';

storiesOf('Text', module)
  .add('with text', () => <Text>hola mundo</Text>)
