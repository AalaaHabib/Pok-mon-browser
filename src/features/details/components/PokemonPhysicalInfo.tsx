import { GiBodyHeight } from 'react-icons/gi';
import { FaWeightHanging } from 'react-icons/fa';

type Props = {
  height: number;
  weight: number;
};

const PokemonPhysicalInfo = ({ height, weight }: Props) => {
  return (
    <div className="flex justify-center gap-4 mt-6 flex-wrap">
      <div className="bg-gray-50 rounded-lg p-3 flex flex-col items-center w-full sm:w-40">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <GiBodyHeight />
          <span>Height</span>
        </div>
        <p className="font-bold">{height / 10} m</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-3 flex flex-col items-center w-full sm:w-40">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FaWeightHanging />
          <span>Weight</span>
        </div>
        <p className="font-bold">{weight / 10} kg</p>
      </div>
    </div>
  );
};

export default PokemonPhysicalInfo;
