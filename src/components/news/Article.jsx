import React from "react";
import PropTypes from "prop-types";

const Article = ({  title, author, description }) => {
  return (
    <>
      <a  style={{ fontSize: "1.2rem" }}>
        {title}
      </a>
      {author && <p>Written by: {author}</p>}
      <p>{description}</p>
    </>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string,
};

export default Article;
