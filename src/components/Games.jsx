import React from "react";
import Game from "./Game";
import { useState } from "react";
import client from "../services/client";

const Games = ({ games }) => {
  return (
    <div className="row mt-5 row-gap-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
      {games &&
        games.map((game) => (
          <div key={game.id} className="col">
            <Game data={game} />
          </div>
        ))}
    </div>
  );
};

export default Games;
