import { useState } from 'react';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import ModeSwitch from '../../components/ModeSwitch';
import PaginationControls from './components/PaginationControls';
import LoadMoreButton from './components/LoadMoreButton';
import PokemonList from './components/PokemonList';
import PokemonSkeletonCard from './components/PokemonSkeletonCard';
import { usePokemons } from './hooks/usePokemonList';

const HomePage = () => {
  const [mode, setMode] = useState<'pagination' | 'loadmore'>('pagination');
  const [page, setPage] = useState(1);

  const { pokemons, loading, error, refetch, pageSize, totalPages } = usePokemons(mode, page);

  const handleModeChange = (selectedMode: 'pagination' | 'loadmore') => {
    setMode(selectedMode);
    setPage(1);
  };

  return (
    <div className="p-4 w-full bg-[#f0f4ff] min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold flex justify-center items-center gap-2">
          <span>⚡</span> <span>Pokédex</span>
        </h1>
        <p className="text-gray-600 mt-2">Discover and explore Pokémon with page controls</p>
        <ModeSwitch mode={mode} onModeChange={handleModeChange} />
      </div>

      {loading && pokemons.length === 0 && (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <PokemonSkeletonCard key={index} />
          ))}
        </div>
      )}

      {error && <ErrorMessage onRetry={refetch} />}

      {!loading && !error && <PokemonList pokemons={pokemons} />}

      {loading && pokemons.length > 0 && <Loader />}

      {mode === 'pagination' && !loading && !error && (
        <PaginationControls
          currentPage={page}
          onPageChange={setPage}
          totalPages={totalPages}
          pageSize={pageSize}
        />
      )}

      {mode === 'loadmore' && !loading && !error && (
        <LoadMoreButton onClick={() => setPage(prev => prev + 1)} />
      )}
    </div>
  );
};

export default HomePage;
