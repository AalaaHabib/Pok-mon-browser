import { useCallback, useEffect, useState } from 'react';
import { getPokemonList } from '../../../api/pokemonApi';
import type { PokemonListResponse, PokemonSummary } from '../../../types/pokemon';

const PAGE_LIMIT = 20;

export const usePokemons = (mode: 'pagination' | 'loadmore', page: number) => {
  const [pokemons, setPokemons] = useState<PokemonListResponse['results']>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const offset = (page - 1) * PAGE_LIMIT;

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await getPokemonList(PAGE_LIMIT, offset);

      setCount(data.count);

      setPokemons(prev => {
        if (mode === 'pagination') return data.results;

        const existingNames = new Set(prev.map(p => p.name));
        const uniqueNewPokemons = data.results.filter(
          (p: PokemonSummary) => !existingNames.has(p.name),
        );

        return [...prev, ...uniqueNewPokemons];
      });
    } catch (err) {
      console.warn(err);
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
    totalPages: Math.ceil(count / PAGE_LIMIT),
  };
};
