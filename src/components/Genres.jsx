import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import genresData from "../data/genres.json";

const Genres = ({ onGenreSelect }) => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");
  const [currentGenre, setCurrentGenre] = useState(null);

  useEffect(() => {
    // axios
    //   .get("/genres")
    //   .then(({ data }) => setGenres(data.results))
    //   .catch(({ message }) => setError(message));
    setGenres(genresData.results);
  }, []);

  const handleGenreSelect = (genreId) => {
    onGenreSelect(genreId);
    setCurrentGenre(genreId);
  };

  return (
    <div className="col-2 genres-aside d-none d-lg-block">
      <h3 className="fw-bolder m-4">Genres</h3>
      <hr />
      {error && <p className="text-danger m-2">{error}</p>}

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
                onClick={() => handleGenreSelect(genre.id)}
                className={`link ${
                  currentGenre === genre.id ? "activated" : ""
                }`}
              >
                {genre.name}
              </p>
            </div>
          );
        })}
      <hr />
    </div>
  );
};

export default Genres;
