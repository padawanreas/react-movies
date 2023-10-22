export const API_KEY = process.env.REACT_APP_THE_MOVIE_API_KEY;
export const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  trendingMovies: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  trendingTv: `${BASE_URL}/trending/tv/week?api_key=${API_KEY}`,
  moviesUpcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,
  moviesTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  moviesPopular: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  seriesPopular: `${BASE_URL}/tv/popular?api_key=${API_KEY}`,
  seriesAirling: `${BASE_URL}/tv/airing_today?api_key=${API_KEY}`,
  seriesTopRated: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}`,
};

export default requests;
