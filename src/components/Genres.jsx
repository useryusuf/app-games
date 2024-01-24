import React from "react";
import { Link } from "react-router-dom";
const Genres = () => {
  return (
    <div className="col-2 genres-aside  d-none d-lg-block">
      <h3 className="fw-bolder m-4">Genres</h3>
      <hr />
      <Link to={"/"} className="link">
        Horror
      </Link>
      <hr />
    </div>
  );
};

export default Genres;
