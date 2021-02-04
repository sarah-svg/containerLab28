import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Home';

describe('Header component', () => {
  afterEach(() => cleanup());
  it('renders Header', () => {
    const { asFragment } = render(<Header handleSearch={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
