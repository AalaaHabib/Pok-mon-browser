import type { Stat } from '../../../types/pokemon';

type Props = {
  stats: Stat[];
};

const PokemonStats = ({ stats }: Props) => {
  return (
    <>
      <h3 className="text-lg font-bold mb-2">Base Stats</h3>
      <div className="space-y-2 mb-6">
        {stats.map(s => (
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
    </>
  );
};

export default PokemonStats;
