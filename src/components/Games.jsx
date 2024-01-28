import Game from "./Game";
import { useState, useEffect } from "react";
import client from "../services/client";
export default function Games({ selectedGenreId, onError }) {
  const [games, setGames] = useState([]);

  console.log(games);
  useEffect(() => {
    const params = selectedGenreId
      ? { params: { genres: selectedGenreId } }
      : null;
    client
      .get("/games", params)
      .then(({ data }) => setGames(data.results))
      .catch(({ message }) => onError(message));
    // setGames(gamesData.results);
  }, [selectedGenreId]);

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
