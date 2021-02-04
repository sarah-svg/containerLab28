import fetch from 'node-fetch';

const API_URL_BASE = 'http://newsapi.org/v2/everything?';
const API_SEARCH = 'q=';
const API_CONSTRAINTS = '&from=2021-02-03&sortBy=popularity';
const NEWS_API_KEY = `&apiKey=${process.env.NEWS_API_KEY}`;

const searchArticles = (query) => {
  return fetch(
    `${API_URL_BASE}${API_SEARCH}${query}${API_CONSTRAINTS}${NEWS_API_KEY}`
  ).then((res) => res.json());
};

export default searchArticles;
