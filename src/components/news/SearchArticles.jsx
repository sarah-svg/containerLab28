// Search - Display a form used to search articles by term
////with input
import React, { Component } from 'react';
import PropTypes from 'prop-types';



export default class SearchArticles extends Component {
  render() {
    return (
      <form style={{ textAlign: 'center' }}>
        <input
          onChange={this.props.handleSearch}
          placeholder="Search all articles..."
        />
      </form>
    );
  }
}

SearchArticles.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
