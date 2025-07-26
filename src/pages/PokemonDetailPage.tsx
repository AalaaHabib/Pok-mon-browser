import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPokemonDetails } from '../api/pokemonApi';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { GiBodyHeight } from 'react-icons/gi';
import { FaWeightHanging } from 'react-icons/fa';
import type { PokemonDetails } from '../types/pokemon';

const PokemonDetailPage = () => {
  const { name } = useParams<{ name: string }>();
const [data, setData] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchDetails = async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await getPokemonDetails(name!);
      setData(res);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [name]);

  if (loading) return <Loader />;
  if (error || !data) return <ErrorMessage onRetry={fetchDetails} />;

  const id = data.id.toString().padStart(3, '0');
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
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-4">
          <h1 className="text-3xl font-bold flex justify-center items-center gap-2">
            ⚡ {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
          </h1>
          <p className="text-sm mt-1">#{id}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 rounded-full p-6 mb-4">
              <img src={image} alt={data.name} className="w-40 h-40 object-contain" />
            </div>

            <div className="flex gap-2 mb-4">
              {data.types.map((t) => (
                <span key={t.type.name} className="px-3 py-1 bg-red-500 text-white text-sm rounded-full capitalize">
                  {t.type.name}
                </span>
              ))}
            </div>

<div className="flex justify-center gap-4 mt-6 flex-wrap">
  {/* Height */}
  <div className="bg-gray-50 rounded-lg p-3 flex flex-col items-center w-full sm:w-40">
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <GiBodyHeight />
      <span>Height</span>
    </div>
    <p className="font-bold">{data.height / 10} m</p>
  </div>

  {/* Weight */}
  <div className="bg-gray-50 rounded-lg p-3 flex flex-col items-center w-full sm:w-40">
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <FaWeightHanging />
      <span>Weight</span>
    </div>
    <p className="font-bold">{data.weight / 10} kg</p>
  </div>
</div>

        

          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Base Stats</h3>
            <div className="space-y-2 mb-6">
              {data.stats.map((s) => (
                <div key={s.stat.name}>
                  <div className="flex justify-between text-sm">
                    <span className="capitalize">{s.stat.name}</span>
                    <span>{s.base_stat}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div
                      className="h-full bg-black rounded"
                      style={{ width: `${Math.min(s.base_stat, 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold mb-1">Abilities</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {data.abilities.map((a) => (
                <span
                  key={a.ability.name}
                  className="px-3 py-1 text-sm bg-gray-200 rounded-full"
                >
                  {a.ability.name}
                  {a.is_hidden && <span className="text-gray-500 ml-1">(Hidden)</span>}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-bold mb-1">Base Experience</h3>
            <p className="text-purple-600 font-extrabold text-xl">
              {data.base_experience} XP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
