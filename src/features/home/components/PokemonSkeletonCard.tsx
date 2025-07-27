const PokemonSkeletonCard = () => {
  return (
    <div className="animate-pulse rounded-lg border p-4 shadow-sm bg-white">
      <div className="h-24 w-full rounded bg-gray-200 mb-4"></div>
      <div className="h-4 w-3/4 rounded bg-gray-200 mb-2"></div>
      <div className="h-4 w-1/2 rounded bg-gray-200"></div>
    </div>
  );
};

export default PokemonSkeletonCard;
