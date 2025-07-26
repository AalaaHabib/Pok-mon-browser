import { useParams, Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import PokemonHeader from './components/PokemonHeader';
import PokemonImageAndTypes from './components/PokemonImageAndTypes';
import PokemonPhysicalInfo from './components/PokemonPhysicalInfo';
import PokemonStats from './components/PokemonStats';
import PokemonAbilities from './components/PokemonAbilities';
import { useQuery } from '@tanstack/react-query';
import { getPokemonDetails } from '../../api/pokemonApi';

const PokemonDetailPage = () => {
  const { name } = useParams<{ name: string }>();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['pokemonDetails', name],
    queryFn: () => getPokemonDetails(name!),
    enabled: !!name,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <Loader />;
  if (isError || !data) return <ErrorMessage onRetry={refetch} />;

  const image = data.sprites.other['official-artwork'].front_default;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-white p-6">
      <Link
        to="/"
        className="mb-4 inline-flex items-center gap-2 text-sm border border-gray-300 rounded px-3 py-1 bg-white hover:bg-gray-100"
      >
        <span>←</span>
        <span>Back to List</span>
      </Link>

      <div className="bg-white rounded-lg shadow mx-auto max-w-4xl overflow-hidden">
        <PokemonHeader name={data.name} id={data.id} />

        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div className="flex flex-col items-center">
            <PokemonImageAndTypes image={image} types={data.types} />
            <PokemonPhysicalInfo height={data.height} weight={data.weight} />
          </div>

          <div>
            <PokemonStats stats={data.stats} />
            <PokemonAbilities abilities={data.abilities} />

            <h3 className="text-lg font-bold mb-1">Base Experience</h3>
            <p className="text-purple-600 font-extrabold text-xl">{data.base_experience} XP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
