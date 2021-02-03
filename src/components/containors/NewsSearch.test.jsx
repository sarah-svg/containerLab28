
import React from 'react';
import { render,
  screen,
  fireEvent,
  wairFor } from '@testing-libary/react';
// eslint-disable-next-line no-undef
global.fetch = require('node-fetch');
import NewsSearch from './NewsSearch';

describe('NewsSearch containor', () => {
  it('renders article titles when you search', () => {
    render(<NewsSearch />);
    const display = screen.getByTestId('display');


  });


});
