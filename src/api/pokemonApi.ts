export const getPokemonList = async (limit: number, offset: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  if (!res.ok) throw new Error('Failed to fetch Pokémon list');
  return res.json();
};

export const getPokemonDetails = async (name: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) throw new Error('Failed to fetch Pokémon details');
  return res.json();
};
