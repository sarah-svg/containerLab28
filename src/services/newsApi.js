export const news = () => {
  // eslint-disable-next-line max-len
  return fetch ('http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=${NEWS_API_KEY}')
    .then(res => res.json())
    .then(json => json.result);
};

export const everything = () => {
  // eslint-disable-next-line max-len
  return fetch ('https://newsapi.org/docs/endpoints/everything' + 'apiKey=${NEWS_API_KEY}')
    .then(res => res.json())
    .then(json => json.result);
};
