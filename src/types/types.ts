export type ResultType = {
  name: string;
  url: string;
};

export type DataType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ResultType[];
};

export type DetailedPokemonType = {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    front_default: string;
    other?: {
      dream_world?: {
        front_default: string | null;
      };
      home?: {
        front_default: string | null;
      };
      "official-artwork"?: {
        front_default: string | null;
      };
    };
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  abilities: {
    is_hidden: boolean;
    slot: number;
    ability: {
      name: string;
      url: string;
    };
  }[];
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
  species: {
    name: string;
    url: string;
  };
};
