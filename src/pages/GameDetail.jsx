import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandedText";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";
import GameMeta from "../components/GameMeta";
import Navbar from "../components/Navbar";
import client from "../services/client";

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [errors, setErrors] = useState("");

  useEffect(() => {
    client
      .get("/games/" + id)
      .then(({ data }) => setGame(data))
      .catch(({ message }) => setErrors(message));
  }, []);

  const handleSearch = (term) => console.log(term);

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="container">
        {errors[0] && (
          <div className="alert alert-danger w-50 m-4">{errors[0]}</div>
        )}
        <div className=" row row-cols-1 row-cols-md-2">
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
