import axios from './axios'

const API_KEY = 'd8e90991740dbcf6224f4883393c6b61'

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&append_to_response=videos`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&append_to_response=videos`,
  fetchActionMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
  fetchMystery: `/discover/movie/?api_key=${API_KEY}&with_genres=9648`,
  fetchScifi: `/discover/movie/?api_key=${API_KEY}&with_genres=878`,
  fetchWestern: `/discover/movie/?api_key=${API_KEY}&with_genres=37`,
  fetchAnimation: `/discover/movie/?api_key=${API_KEY}&with_genres=16`,
  fetchTV: `/discover/movie/?api_key=${API_KEY}&with_genres=10770`,
}

export const getMovie = async (id) => {
  const result = await axios.get(`/movie/${id}/videos?api_key=${API_KEY}`)
  return result
}
