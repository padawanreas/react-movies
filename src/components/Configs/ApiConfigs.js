export const API_KEY = process.env.REACT_APP_THE_MOVIE_API_KEY;
export const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  trending: (type) => `${BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
  nowPlaying: (type) => `${BASE_URL}/${type}/now_playing?api_key=${API_KEY}`,
  onTheAir: (type) => `${BASE_URL}/${type}/on_the_air?api_key=${API_KEY}`,
  popular: (type) => `${BASE_URL}/${type}/popular?api_key=${API_KEY}`,
  topRated: (type) => `${BASE_URL}/${type}/top_rated?api_key=${API_KEY}`,
  upcoming: (type) => `${BASE_URL}/${type}/upcoming?api_key=${API_KEY}`,
  airling: (type) => `${BASE_URL}/${type}/airing_today?api_key=${API_KEY}`,
  detail: (type, id) => `${BASE_URL}/${type}/${id}?api_key=${API_KEY}`,
};

export default requests;
