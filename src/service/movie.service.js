/* eslint-disable no-undef */
import axios from "axios";

const base = import.meta.env.VITE_API_BASE;
const key = import.meta.env.VITE_API_KEY;

export const getMoviePopular = async () => {
  const movies = await axios.get(`${base}/movie/popular?page=1&api_key=${key}`);
  return movies.data.results;
};

export const getGenre = async () => {
  const genre = await axios.get(
    `${base}/genre/movie/list?page=1&api_key=${key}`
  );
  return genre.data.genres;
};

export const getUpcomingMovie = async () => {
  const upcoming = await axios.get(
    `${base}/movie/upcoming?&page=1&api_key=${key}`
  );
  return upcoming.data.results;
};

export const getTrandingMovies = async () => {
  const topMovies = await axios.get(
    `${base}/trending/movie/day?api_key=${key}`
  );
  return topMovies.data.results;
};

export const getMoviesCollection = async (query) => {
  const movies = await axios.get(
    `${base}/discover/movie?page=1&with_genres=${query}&api_key=${key}`
  );
  return movies.data.results;
};

export const getDetailsMovie = async (id) => {
  const movie = await axios.get(`${base}/movie/${id}?api_key=${key}`);
  return movie.data;
};

export const getCreditsMovie = async (id) => {
  const credits = await axios.get(`${base}/movie/${id}/credits?api_key=${key}`);
  return credits.data.cast;
};

export const getSearchMovie = async (titleMovie) => {
  const movie = await axios.get(
    `${base}/search/movie?query=${titleMovie}&page=1&api_key=${key}`
  );
  return movie.data.results;
};

export const getReview = async (id) => {
  const review = await axios.get(
    `${base}/movie/${id}/reviews?page=1&api_key=${key}`
  );
  return review.data.results;
};

export const getFilterMovie = async (sort, filter) => {
  const movie = await axios.get(
    `${base}/discover/movie?page=1&sort_by=${sort}${filter}&api_key=${key}`
  );
  return movie.data.results;
};
