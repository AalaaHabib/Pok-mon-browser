import { Link } from 'react-router-dom';

interface Props {
  name: string;
  image: string;
  id?: string | number;
}

const PokemonCard = ({ name, image, id }: Props) => {
  return (
    <Link
      to={`/pokemon/${name}`}
      className="bg-white rounded-lg shadow hover:shadow-lg transition border border-gray-200 p-4 text-center"
    >
      <div className="bg-[#f2f4f7] rounded-md p-4 mb-3 flex justify-center items-center">
        <img src={image} alt={name} className="w-24 h-24 object-contain" />
      </div>

      <p className="capitalize font-semibold text-lg">{name}</p>

      {id && <p className="text-gray-500 text-sm mt-1">#{String(id).padStart(3, '0')}</p>}
    </Link>
  );
};

export default PokemonCard;
