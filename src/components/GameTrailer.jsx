import React, { useState, useEffect } from "react";
import moviesData from "../data/movies.json";

const GameTrailer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // client
    //   .get("/games")
    //   .then(({ data }) => setGames(data.results))
    //   .catch(({ message }) => setError(message));
    setMovies(moviesData.results);
  }, []);
  const first = movies[0];

  return first ? (
    <>
      <h2 className="my-3">{first.name}</h2>
      <video
        src={first.data[480]}
        poster={first.preview}
        width="100%"
        controls
      />
    </>
  ) : null;
};

export default GameTrailer;
