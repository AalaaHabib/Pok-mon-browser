import React from 'react';

const PokemonDetailSkeleton = () => {
  return (
    <div className="animate-pulse space-y-6 bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto">
      <div className="h-8 w-1/3 bg-gray-200 rounded"></div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="w-40 h-40 bg-gray-200 rounded-full" />
        <div className="space-y-2 flex-1">
          <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
          <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div>
        <div className="h-5 w-1/4 bg-gray-300 rounded mb-2"></div>
        <div className="space-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-4 w-full bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>

      <div>
        <div className="h-5 w-1/4 bg-gray-300 rounded mb-2"></div>
        <div className="space-y-2">
          <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
          <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div>
        <div className="h-5 w-1/4 bg-gray-300 rounded mb-2"></div>
        <div className="space-y-2">
          <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
          <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailSkeleton;
