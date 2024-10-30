const API_KEY = '4287ad07';
const API_URL = 'https://www.omdbapi.com';

export async function searchMovies(search) {
    if (!search || search.length === 0) return null;

    const res = await fetch(`${API_URL}/?apikey=${API_KEY}&s=${search}`);
    const jsonRes = await res.json();
    const moviesRes = jsonRes?.Search || [];

    const mappedMovies = moviesRes.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        image: movie.Poster,
        year: movie.Year
    }));

    return mappedMovies;
}