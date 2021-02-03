import React, { Component } from 'react';
import getArticles from '../../services/newsApi';
import ListOfArticles from '../news/ListOfArticles';

export default class NewsSearch extends Component {
    state = {
      articles: [],
      loading: false,
      search: ''
    }

    componentDidMount() {
      return getArticles()
        .then(({ articles }) => 
          this.setState({ articles, loading: true }));
    }

    render() {
      const { articles, loading } = this.state;
      return (
        <div>
          {loading ? 
            <> loading... </> : 
            <ListOfArticles articles={articles} />}  
        </div>
      );
    }
}

