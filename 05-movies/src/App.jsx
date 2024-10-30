import { useCallback, useMemo, useState } from 'react';
import './App.css'
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';
import debounce from 'just-debounce-it';

function App() {
  const { search, updateSearch, error } = useSearch();
  const [sort, setSort] = useState(false);
  const { movies, getMovies, loading } = useMovies({ search, sort });

  // igual que useMemo pero memoriza funciones, para no tener que volver a crearlas
  // Debounce: delay para no hacer llamadas continuas al escribir, sino UNA despues del timeout (500ms)
  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 500)
    , []);

  function handleSubmit(event) {
    event.preventDefault();
    getMovies({ search });
  }

  function handleChange(event) {
    const newValue = event.target.value;
    updateSearch(newValue);
    debouncedGetMovies(newValue);
  }

  function toggleSort() {
    setSort(!sort);
  }

  return (
    <main>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='buscador' onSubmit={handleSubmit}>
          <input value={search} onChange={handleChange} type="text" placeholder='Avengers, Spiderman...' />
          <input type='checkbox' value={sort} onClick={toggleSort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      {loading
        ? <p style={{ textAlign: 'center' }}>Cargando...</p>
        : <Movies movies={movies} />
      }
    </main>
  )
}

export default App
