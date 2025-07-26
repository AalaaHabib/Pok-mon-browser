import type { PokemonType } from '../../../types/pokemon';

type Props = {
  image: string;
  types: PokemonType[];
};

const PokemonImageAndTypes = ({ image, types }: Props) => {
  return (
    <>
      <div className="bg-gray-100 rounded-full p-6 mb-4">
        <img src={image} alt="Pokemon" className="w-40 h-40 object-contain" />
      </div>

      <div className="flex gap-2 mb-4 flex-wrap justify-center">
        {types.map(t => (
          <span
            key={t.type.name}
            className="px-3 py-1 bg-red-500 text-white text-sm rounded-full capitalize"
          >
            {t.type.name}
          </span>
        ))}
      </div>
    </>
  );
};

export default PokemonImageAndTypes;
