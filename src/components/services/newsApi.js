///////created a const api
/// key brought it from the .env 
////file along with creating a cont url
const NEWS_API_KEY = process.env.NEWS_API_KEY;

const URL = `http://newsapi.org/v2/top-headlines?
country=us&apiKey=${NEWS_API_KEY}`;

const getArticles = () => {
  return fetch(URL).then((res) => res.json);
};

export default getArticles;
