import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

// Here due to axios bug
// https://github.com/axios/axios/issues/2190
// https://stackoverflow.com/q/56397239
instance.interceptors.request.use((config) => {
  config.params = {
    part: 'snippet',
    maxResults: 5,
    key: process.env.REACT_APP_YOUTUBE_KEY,
    ...config.params,
  };
  return config;
});

export default instance;
