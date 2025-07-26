import { useEffect, useState } from 'react';
import { getPokemonList } from '../api/pokemonApi';
import PokemonCard from '../components/PokemonCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import PaginationControls from '../components/PaginationControls';
import LoadMoreButton from '../components/LoadMoreButton';
import type { PokemonListResponse } from '../types/pokemon';

const PAGE_LIMIT = 20;

const HomePage = () => {
  const [mode, setMode] = useState<'pagination' | 'loadmore'>('pagination');
const [pokemons, setPokemons] = useState<PokemonListResponse['results']>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const offset = (page - 1) * PAGE_LIMIT;

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await getPokemonList(PAGE_LIMIT, offset);
      if (mode === 'pagination') {
        setPokemons(data.results);
      } else {
        setPokemons((prev) => [...prev, ...data.results]);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, mode]);

  const handleRetry = () => fetchData();

  return (
    <div className="p-4 w-full bg-[#f0f4ff] min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold flex justify-center items-center gap-2">
          <span>⚡</span> <span>Pokédex</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Discover and explore Pokémon with page controls
        </p>

        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={() => {
              setMode('pagination');
              setPage(1);
              setPokemons([]);
            }}
            className={`px-4 py-2 rounded ${
              mode === 'pagination'
                ? 'bg-black text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            Page Controls
          </button>
          <button
            onClick={() => {
              setMode('loadmore');
              setPage(1);
              setPokemons([]);
            }}
            className={`px-4 py-2 rounded ${
              mode === 'loadmore'
                ? 'bg-black text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            Infinite Scroll
          </button>
        </div>
      </div>

      {loading && pokemons.length === 0 && <Loader />}
      {error && <ErrorMessage onRetry={handleRetry} />}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
{pokemons.map((p) => {
  const id = p.url.split('/').filter(Boolean).pop();
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <PokemonCard
      key={p.name}
      name={p.name}
      image={image}
      id={id}
    />
  );
})}

      </div>

      {loading && pokemons.length > 0 && <Loader />}

      {mode === 'pagination' && (
       <PaginationControls
  currentPage={page}
  onPageChange={setPage}
  totalPages={66}
  pageSize={PAGE_LIMIT}
/>

      )}
      {mode === 'loadmore' && !loading && !error && (
        <LoadMoreButton onClick={() => setPage((prev) => prev + 1)} />
      )}
    </div>
  );
};

export default HomePage;
