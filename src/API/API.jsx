import axios, { defaults } from 'axios';

const API_KEY = '0c691c9ea36cc638c018e3ab76aef558';
const baseURL = 'https://api.themoviedb.org/3/';
defaults.baseURL = baseURL;
defaults.params = {
  api_key: API_KEY,
};

export const getTrendingTodayAPI = () => {
  defaults.params = {
    api_key: API_KEY,
  };
  return axios
    .get('trending/movie/day')
    .then(res => res.data.results)
    .catch(err => {
      throw err;
    });
};

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
export const getOneMovieByIdAPI = id => {
  defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
  };

  return axios.get('movie/' + id).then(res => res.data);
};

//https:api.themoviedb.org/3/search/movie?
//api_key =<< api_key >>& language=en - US & page=1 & include_adult=false
export const getMoviesListBySearchAPI = query => {
  defaults.params = {
    api_key: API_KEY,
    query,
    language: 'en-US',
    page: 1,
    include_adult: false,
  };
  return axios.get('search/movie').then(res => {
    return res.data.results;
  });
};

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
export const getReviewsByIdAPI = id => {
  defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
    page: 1,
  };
  return axios.get('movie/' + id + '/reviews').then(res => res.data.results);
};

export const getCastsByIdAPI = id => {
  defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  return axios.get('movie/' + id + '/credits').then(res => res.data.cast);
};
