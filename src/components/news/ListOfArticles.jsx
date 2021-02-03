// Articles - Display a list of Article components
//////Articles listing them out! by mapping throught the OneArticle
//////and returning all the articles! 
import React from 'react';
import PropTypes from 'prop-types';
import OneArticle from './OneArticle';

const ListOfArticles = ({ articles }) => {
  const articleInfo = articles.map(article => (
    <li key={article.publishedAt}>
      <OneArticle {...article} />
    </li>
  ));

  return (
    <ul>
      {articleInfo}
    </ul>
  );
};

ListOfArticles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired
  })).isRequired
};

export default ListOfArticles;
