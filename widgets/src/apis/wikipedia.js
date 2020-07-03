import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://en.wikipedia.org/w/api.php',
});
//srsearch: 'Nelson Mandela',

// Here due to axios bug
// https://github.com/axios/axios/issues/2190
// https://stackoverflow.com/q/56397239
instance.interceptors.request.use((config) => {
  config.params = {
    action: 'query',
    format: 'json',
    origin: '*',
    list: 'search',
    utf8: 1,
    ...config.params,
  };
  return config;
});

export default instance;
