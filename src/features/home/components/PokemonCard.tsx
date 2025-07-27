import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  name: string;
  image: string;
  id?: string | number;
}

const PokemonCard = ({ name, image, id }: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      to={`/pokemon/${name}`}
      className="bg-white rounded-lg shadow hover:shadow-lg transition border border-gray-200 p-4 text-center"
    >
      <div className="bg-[#f2f4f7] rounded-md w-full h-[160px] flex justify-center items-center mb-3 relative overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md" />
        )}
        <img
          src={image}
          alt={name}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-contain p-4 transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      <p className="capitalize font-semibold text-lg">{name}</p>
      {id && <p className="text-gray-500 text-sm mt-1">#{String(id).padStart(3, '0')}</p>}
    </Link>
  );
};

export default PokemonCard;
