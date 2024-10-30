import { useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);
  const previousSearch = useRef(search);


  async function getMovies({search}) {
    if (previousSearch.current === search) return;
    setLoading(true);

    previousSearch.current = search;
    const res = await searchMovies(search);
    setMovies(res);

    setLoading(false);
  }

  // Memoriza el sort para no tener que volver a calcularlo
  // AMENOS QUE: cambien sus dependencias [sort, movies]
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading };
}