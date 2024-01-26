import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gameData from "../data/game.json";
import ExpandableText from "../components/ExpandedText";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "./GameScreenshots";

const GameDetail = () => {
  const { id } = useParams();

  const [game, setGame] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    // client
    //   .get("/games/"+id)
    //   .then(({ data }) => setGames(data.results))
    //   .catch(({ message }) => setError(message));
    setGame(gameData);
  }, []);
  return (
    <div className="container">
      {error && <p className="text-danger m-2">{error}</p>}
      <h1 className="fw-bold m-3 mx-0">{game.name}</h1>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameTrailer />
      <GameScreenshots />
    </div>
  );
};

export default GameDetail;
