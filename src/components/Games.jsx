import Game from "./Game";
import { useState, useEffect } from "react";
import client from "../services/client";

export default function Games({ gameQuery, onError }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const params = {};

    // console.log("b-", gameQuery);

    if (gameQuery.platforms) params.platforms = gameQuery.platforms.id;
    if (gameQuery.genres) params.genres = gameQuery.genres.id;
    if (gameQuery.search) params.search = gameQuery.search;
    if (gameQuery.ordering) params.ordering = gameQuery.ordering;

    console.log(params);
    client
      .get("/games", { params })
      .then(({ data }) => setGames(data.results))
      .catch(({ message }) => onError(message));
  }, [gameQuery]);

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
}
