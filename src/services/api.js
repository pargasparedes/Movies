const API_KEY = "7b4eb2410ae5981312494bcc70a2aa08"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&{encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
};