// Article - Display an articles title, author, and description
////////creates one article 

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
