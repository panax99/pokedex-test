import PokemonDetails from "@/components/pokemon/PokemonDetails";

interface Props {
  params: { name: string };
}

export default function Page({ params }: Props) {
  return <PokemonDetails name={params.name} />;
}
