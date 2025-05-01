import PokemonDetails from "@/components/pokemon/PokemonDetails";

export default async function Page() {
  return <PokemonDetails />;
}

export async function generateStaticParams() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await res.json();
  return data.results.map((pokemon: { name: string }) => ({
    name: pokemon.name,
  }));
}
