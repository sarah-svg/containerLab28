// Articles - Display a list of Article components
//////Articles listing them out! by mapping throught the OneArticle
//////and returning all the articles! 

import React from 'react';
import PropTypes from 'prop-types';
import OneArticle from './OneArticle';


const ListOfArticles = ({ articles }) => {
  const articlesList = articles.map((article, index) => {
    return (
      <li key={index}>
        <OneArticle {...article} />
        <br />
      </li>
    );
  });

  return <ul>{articlesList}</ul>;
};

ListOfArticles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
      description: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ListOfArticles;
