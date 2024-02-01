import React, { useState, useEffect } from "react";
import client from "../services/client";

const GameTrailer = ({ game_id, onError }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    client
      .get("/games/" + game_id + "/movies")
      .then(({ data }) => setMovies(data.results))
      .catch(({ message }) => onError(message)); // Corrected to onError
  }, []);

  const first = movies[0];

  return first ? (
    <div className="col  mt-4">
      <h2 className="my-3">{first.name}</h2>
      <video
        src={first.data[480]}
        poster={first.preview}
        width="100%"
        controls
      />
    </div>
  ) : null;
};

export default GameTrailer;
