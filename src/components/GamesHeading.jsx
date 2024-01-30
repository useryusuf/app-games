import React from "react";

function GamesHeading({ selectedGenre, selectedPlatform }) {
  return (
    <h1 className="fw-bolder my-4">
      {selectedGenre && selectedGenre.name}{" "}
      {selectedPlatform && selectedPlatform.name} Games
    </h1>
  );
}

export default GamesHeading;
