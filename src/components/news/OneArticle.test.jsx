import React from 'react';
import { render, cleanup } from '@testing-library/react';
import OneArticle from './OneArticle';

describe('Article', () => {
  afterEach(() => cleanup());
  it ('renders the article', () => {
    const { asFragment } = render(<OneArticle />);
    expect(asFragment).toMatchSnapshot();
  });
});
