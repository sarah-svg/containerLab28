import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ListOfArticles from './ListOfArticles';


describe('ArticlesList component', () => {
  afterEach(() => cleanup());
  it('renders by mapping through and listing the articles', () => {
    const { asFragment } = render(<ListOfArticles articles={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
