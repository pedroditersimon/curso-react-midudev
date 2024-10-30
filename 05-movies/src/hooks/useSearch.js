import { useEffect, useState, useRef } from "react";

export function useSearch() {
    const [search, updateSearch] = useState(null);
    const [error, setError] = useState(); // vuelve a renderizar cuando su valor cambia
    const isFirstInput = useRef(true); // mantiene valor entre renders (no renderiza)
  
    useEffect(() => {
      if (search === null) return;
      
      if (search === '') {
        setError('Ingresa algo');
        return;
      }
  
      setError(null);
    }, [search]);
  
    return { search: search || '', updateSearch, error };
  }