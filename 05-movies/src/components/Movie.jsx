import './Movie.css';

export function Movie({movie}) {
    return (
        <li key={movie.id} className='movie'>
            <h3>{movie.title}</h3>
            <img src={movie.image} alt={movie.title} />
            <p>{movie.year}</p>
        </li>
    );
}