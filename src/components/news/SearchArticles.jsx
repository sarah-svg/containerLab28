// Search - Display a form used to search articles by term
////with input
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  render() {
    const { handleSearch } = this.props;
    return (
      <form style={{ textAlign: 'center' }}>
        <input onChange={handleSearch} placeholder="Search all articles..." />
      </form>
    );
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
