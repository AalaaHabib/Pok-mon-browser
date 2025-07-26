import type { Ability } from '../../../types/pokemon';

type Props = {
  abilities: Ability[];
};

const PokemonAbilities = ({ abilities }: Props) => {
  return (
    <>
      <h3 className="text-lg font-bold mb-1">Abilities</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {abilities.map((a) => (
          <span
            key={a.ability.name}
            className="px-3 py-1 text-sm bg-gray-200 rounded-full"
          >
            {a.ability.name}
            {a.is_hidden && <span className="text-gray-500 ml-1">(Hidden)</span>}
          </span>
        ))}
      </div>
    </>
  );
};

export default PokemonAbilities;
