import React, { Component } from 'react';
import getArticles from '../../services/newsApi';
import searchArticles from '../../services/searchArticles';
import Main from '../Main';
import ListOfArticles from '../news/ListOfArticles';

export default class NewsSearch extends Component {
    state = {
      articles: [],
      loading: false,
      search: []
    }

    componentDidMount() {
      return getArticles()
        .then(({ articles }) => 
          this.setState({ articles, loading: true }));
    }
    handleSearch = ({ target }) => {
      if(target.value) {
        return searchArticles(target.value).then(({ articles }) => {
          this.setState({ articles });
        });
      }
    };
    render() {
      const { articles, loading } = this.state;
      const { handleSearch } = this;
      return (
        <>
          <Main handleSearch={handleSearch} />
          {loading ? <>Loading...</> : <ListOfArticles articles={articles} />}
        </>
      );
    }
}

