import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeList, setPokeList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((r) => r.json())
      .then((pokeData) => setPokeList(pokeData));
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleNewPokemon(newPokemon) {
    setPokeList([newPokemon, ...pokeList]);
  }

  if (pokeList.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPokemon={handleNewPokemon} />
      <br />
      <Search search={search} onSearch={handleSearch} />
      <br />
      <PokemonCollection pokeList={pokeList} search={search} />
    </Container>
  );
}

export default PokemonPage;
