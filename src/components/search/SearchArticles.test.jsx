import React from 'react';
import { render } from '@testing-library/react';
import NewsSearch from '../../containers/NewsSearch';

describe('NewsSearch container', () => {
  it('handles search', () => {
    render(<NewsSearch />);
  });
});
