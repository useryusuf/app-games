import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../services/client";

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    client
      .get("/genres")
      .then(({ data }) => setGenres(data.results))
      .catch(({ message }) => setError(message));
  });

  return (
    <div className="col-2 genres-aside  d-none d-lg-block">
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
              <Link to={"/"} className="link">
                {genre.name}
              </Link>
            </div>
          );
        })}
      <hr />
    </div>
  );
};

export default Genres;
