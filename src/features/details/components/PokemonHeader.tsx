type Props = {
  name: string;
  id: number;
};

const PokemonHeader = ({ name, id }: Props) => {
  const paddedId = id.toString().padStart(3, '0');

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-4">
      <h1 className="text-3xl font-bold flex justify-center items-center gap-2">
        ⚡ {name.charAt(0).toUpperCase() + name.slice(1)}
      </h1>
      <p className="text-sm mt-1">#{paddedId}</p>
    </div>
  );
};

export default PokemonHeader;
