import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Text from '../components/Text';

storiesOf('Text', module)
  .add('with text', () => <div style={{ width: 200, border: '1px solid #ccc'}}>
  <Text>hola mundo</Text>
  <Text center>hola mundo</Text>
  <Text right>hola mundo</Text>
</div>)

  .add('caps or not', () => <div style={{ width: 200, border: '1px solid #ccc'}}>
    <Text caps>hola mundo</Text>
  </div>)

  .add('with margins', () => <div style={{ width: 200, border: '1px solid #ccc'}}>
    <Text m='20'>hola mundo</Text>
    <Text ml='20' center>hola mundo</Text>
    <Text mr='20' center>hola mundo</Text>
    <Text mt='20' center>hola mundo</Text>
    <Text mb='20' center>hola mundo</Text>
  </div>)

  .add('with paddings', () => <div style={{ width: 200, border: '1px solid #ccc'}}>
    <Text p='20' center style={{border: '1px dashed black'}}>hola mundo</Text>
    <Text pl='20' center>hola mundo</Text>
    <Text pr='20' center>hola mundo</Text>
    <Text pt='20' center>hola mundo</Text>
    <Text pb='20' center>hola mundo</Text>
  </div>)