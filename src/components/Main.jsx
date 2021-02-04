import React from 'react';
import PropTypes from 'prop-types';
import NewsSearch from './containors/NewsSearch';

const Main = ({ handleSearch }) => {
  return (
    <>
      <h2>news</h2>
      <NewsSearch handleSearch={handleSearch}/>
    </>
  );
};
Main.propTypes = { handleSearch: PropTypes.func.isRequired,
};

export default Main;

