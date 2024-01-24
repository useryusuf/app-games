import React from "react";
import Game from "./Game";

const Games = () => {
  return (
    <div className="row mt-5 row-gap-2 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
      <Game />
      <Game />
      <Game />
      <Game />
    </div>
  );
};

export default Games;
