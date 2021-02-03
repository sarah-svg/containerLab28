import React from 'react';
import NewsSearch from '../containors/NewsSearch';
import ListOfArticles from '../news/ListOfArticles';

export default function App() {
  return (
    <>
      <h2>Welcome</h2>
      <NewsSearch />
      <ListOfArticles />
    </>
  );
}
