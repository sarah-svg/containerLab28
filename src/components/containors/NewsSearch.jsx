  
import React, { Component } from 'react';
import getArticles from '../services/newsApi';
import searchArticles from '../services/searchArticles';
import Main from '../Main';
import ListOfArticles from '../news/ListOfArticles';

export default class NewsSearch extends Component {
  state = {
    loading: true,
    articles: [],
    search: '',
  };

  handleSearch = ({ target }) => {
    if(target.value.trim()) {
      searchArticles(target.value).then(({ articles }) =>
        this.setState({ articles, search: target.value })
      );
      this.setState({ search: target.value.trim() });
    }
  };


  componentDidMount() {
    return getArticles().then(({ articles }) =>
      this.setState({ articles, loading: false })
    );
  }

  render() {
    const { articles, loading, search } = this.state;
    const { handleSearch } = this;
    return (
      <>
        <Main handleSearch={handleSearch} />
        {loading ? (
          <>Loading...</>
        ) : (
          <ListOfArticles articles={articles} search={search} />
        )}
      </>
    );
  }
}
