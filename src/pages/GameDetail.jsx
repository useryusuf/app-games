import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gameData from "../data/game.json";
import ExpandableText from "../components/ExpandedText";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "./GameScreenshots";
import GameMeta from "./GameMeta";
import Navbar from "./Navbar";
import client from "../services/client";

const GameDetail = () => {
  const { id } = useParams();

  const [game, setGame] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    client
      .get("/games/" + id)
      .then(({ data }) => setGame(data))
      .catch(({ message }) => setError(message));
    setGame(gameData);
  }, []);

  const handleSearch = (term) => console.log(term);

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="container">
        <div className=" row row-cols-1 row-cols-md-2">
          {error && <p className="text-danger m-2">{error}</p>}
          <div className="col">
            <h1 className="fw-bold m-3 mx-0 mt-4">{game.name}</h1>
            <ExpandableText>{game.description_raw}</ExpandableText>
          </div>
          <div className="col  mt-4">
            <GameTrailer />
          </div>
          <div className="col  mt-4">
            <GameMeta />
          </div>
          <div className="col mt-4">
            <GameScreenshots />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetail;
