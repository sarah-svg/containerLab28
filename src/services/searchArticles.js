import fetch from 'node-fetch';

const URL = 'http://newsapi.org/v2/everything?';
const SEARCH = 'q=';
const SORT = '&from=2021-02-03&sortBy=popularity';
const NEWS_API_KEY = `&apiKey=${process.env.NEWS_API_KEY}`;

const searchArticles = (query) => {
  return fetch(
    `${URL}${SEARCH}${query}${SORT}${NEWS_API_KEY}`
  ).then((res) => res.json());
};

export default searchArticles;
