import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, front, back }) {
  const [frontImage, setFrontImage] = useState(true);

  return (
    <Card>
      <div onClick={() => setFrontImage(!frontImage)} className="ui card">
        <div className="image">
          <img src={frontImage ? front : back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
