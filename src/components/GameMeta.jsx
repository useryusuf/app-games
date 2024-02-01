const GameMeta = ({ game }) => {
  return (
    <div className="row row-cols-1 row-cols-lg-2">
      <div className="col">
        <h4>Platforms:</h4>
        {game.parent_platforms &&
          game.parent_platforms.map(({ platform }) => (
            <p key={platform.id} className="">
              {platform.name}
            </p>
          ))}
      </div>
      <div className="col">
        <h4>Metascore:</h4>
        {game.metacritic && game.metacritic && (
          <div className="badge bg-success">{game.metacritic}</div>
        )}
      </div>
      <div className="col">
        <h4>Genres:</h4>
        {game.genres &&
          game.genres.map((g) => (
            <p key={g.id} className="">
              {g.name}
            </p>
          ))}
      </div>
      <div className="col">
        <h4>Publishers:</h4>
        {game.publishers &&
          game.publishers.map((p) => (
            <p key={p.id} className="">
              {p.name}
            </p>
          ))}
      </div>
    </div>
  );
};

export default GameMeta;
