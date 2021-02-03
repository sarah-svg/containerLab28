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
    publishedAt: PropTypes.string.isRequired
  })).isRequired
};

export default ListOfArticles;
