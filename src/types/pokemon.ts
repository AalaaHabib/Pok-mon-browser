export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  abilities: Ability[];
  types: PokemonType[];
  stats: Stat[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

export interface Ability {
  ability: { name: string };
  is_hidden: boolean;
}

export interface PokemonType {
  type: { name: string };
}

export interface Stat {
  stat: { name: string };
  base_stat: number;
}
