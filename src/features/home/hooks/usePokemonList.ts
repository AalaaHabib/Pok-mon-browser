import { useCallback, useEffect, useState } from 'react';
import { getPokemonList } from '../../../api/pokemonApi';
import type { PokemonListResponse } from '../../../types/pokemon';

const PAGE_LIMIT = 20;

export const usePokemons = (mode: 'pagination' | 'loadmore', page: number) => {
  const [pokemons, setPokemons] = useState<PokemonListResponse['results']>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const offset = (page - 1) * PAGE_LIMIT;

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await getPokemonList(PAGE_LIMIT, offset);
      setPokemons(prev => (mode === 'pagination' ? data.results : [...prev, ...data.results]));
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [mode, offset]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    pokemons,
    loading,
    error,
    refetch: fetchData,
    pageSize: PAGE_LIMIT,
    totalPages: 66,
  };
};
