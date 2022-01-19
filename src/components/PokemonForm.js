import React from "react";
import { useState } from "react/cjs/react.development";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleNewPokemon }) {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, hp, front, back);
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        hp: hp,
        sprites: {
          front: front,
          back: back,
        },
      }),
    })
      .then((r) => r.json())
      .then((newPokemon) => handleNewPokemon(newPokemon));
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            fluid
            label="Name"
            placeholder="Name"
            name="name"
          />
          <Form.Input
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
          />
          <Form.Input
            value={front}
            onChange={(e) => setFront(e.target.value)}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            value={back}
            onChange={(e) => setBack(e.target.value)}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
