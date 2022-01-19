import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokeList, search }) {
  const filteredPokeList = pokeList.filter((pokemon) => {
    return pokemon.name.includes(search);
  });

  const pokeCards = filteredPokeList.map((pokemon) => {
    return (
      <PokemonCard
        key={pokemon.id}
        name={pokemon.name}
        hp={pokemon.hp}
        front={pokemon.sprites.front}
        back={pokemon.sprites.back}
      />
    );
  });

  return <Card.Group itemsPerRow={6}>{pokeCards}</Card.Group>;
}

export default PokemonCollection;
