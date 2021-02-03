// Article - Display an articles title, author, and description
// Articles - Display a list of Article components
// Search - Display a form used to search articles by term
////////
import React from 'react';
import PropTypes from 'prop-types';

const OneArticle = ({ title, author, description }) => (
  <div data-testid="display">
    <h2>{title}</h2>
    <h3>{author}</h3>
    <span>{description}</span>
  </div>
);
OneArticle.propTypes = {
  title: PropTypes.sting.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default OneArticle;
