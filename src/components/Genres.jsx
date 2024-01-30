import React, { useEffect, useState } from "react";
import client from "../services/client";
// import genresData from "../data/genres.json";

const Genres = ({ onGenreSelect, onError }) => {
  const [genres, setGenres] = useState([]);
  const [currentGenre, setCurrentGenre] = useState(null);

  useEffect(() => {
    client
      .get("/genres")
      .then(({ data }) => setGenres(data.results))
      .catch(({ message }) => onError(message));
  }, []);

  const handleGenreSelect = (genre) => {
    onGenreSelect(genre);
    setCurrentGenre(genre);
  };

  return (
    <div className="col-2 genres-aside d-none d-lg-block">
      <h3 className="fw-bolder m-4">Genres</h3>
      <hr />
      {genres &&
        genres.map((genre) => {
          return (
            <div key={genre.id}>
              <img
                src={genre.image_background}
                className="rounded-1 genre-image m-1"
                alt={genre.name}
              />
              <p
                onClick={() => handleGenreSelect(genre)}
                className={`link ${
                  currentGenre === genre.id ? "activated" : ""
                }`}
              >
                {genre.name}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Genres;
