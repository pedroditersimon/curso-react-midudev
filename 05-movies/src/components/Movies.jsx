import { Movie } from "./Movie";
import './Movies.css';

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0;

    return (
        hasMovies
            ? <ul className="movies">
                {movies.map(movie => (
                    <Movie movie={movie} />
                ))}
            </ul>
            : <p style={{textAlign: 'center'}}>No hay resultados</p>
    );
}