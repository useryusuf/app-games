import React from "react";
import Game from "./Game";
import { useEffect, useState } from "react";
import client from "../services/client";

const Games = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    client
      .get("/games")
      .then(({ data }) => setGames(data.results))
      .catch(({ message }) => setError(message));
  });
  return (
    <div className="row mt-5 row-gap-2 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
      {error && <p className="text-danger m-2">{error}</p>}
      {games && games.map((game) => <Game key={game.id} data={game} />)}
    </div>
  );
};

export default Games;
