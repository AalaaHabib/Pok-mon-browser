import PokemonCard from './PokemonCard';

type PokemonListProps = {
  pokemons: { name: string; url: string }[];
};

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6">
      {pokemons.map(p => {
        const id = p.url.split('/').filter(Boolean).pop();
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

        return <PokemonCard key={p.name} name={p.name} image={image} id={id} />;
      })}
    </div>
  );
};

export default PokemonList;
