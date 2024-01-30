import Game from "./Game";
import { useState, useEffect } from "react";
import client from "../services/client";

export default function Games({ gameQuery, onError }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const params = {};

    if (gameQuery.selectedPlatformId)
      params.platforms = gameQuery.selectedPlatformId;
    if (gameQuery.selectedGenreId) params.genres = gameQuery.selectedGenreId;
    if (gameQuery.searchTerm) params.search = gameQuery.searchTerm;
    if (gameQuery.ordering) params.ordering = gameQuery.ordering;

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
