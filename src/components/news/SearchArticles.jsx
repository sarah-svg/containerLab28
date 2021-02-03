// Search - Display a form used to search articles by term
import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ onChange }) => {
  <input type="text"
    onChange={onChange} />;

  return (
    <input type="text"
      onChange={onChange} />
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Search;
