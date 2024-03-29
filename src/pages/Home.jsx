import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Genres from "../components/Genres";
import Platforms from "../components/Platforms";
import GamesSort from "../components/GamesSort";
import Games from "../components/Games";
import Navbar from "../components/Navbar";
import GamesHeading from "../components/GamesHeading";

function Home({ term }) {
  const [gameQuery, setGameQuery] = useState({ search: term });
  const [errors, setErrors] = useState([]);

  const handleGenreSelect = (genre) =>
    setGameQuery({ ...gameQuery, genres: genre });
  const handleSearch = (search) => setGameQuery({ ...gameQuery, search });
  const handlePlatformSelect = (platform) => {
    setGameQuery({ ...gameQuery, platforms: platform });
  };
  const handleOrderSelect = (order) =>
    setGameQuery({ ...gameQuery, ordering: order });

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="container-fluid">
        <div className="row">
          <Genres
            onGenreSelect={handleGenreSelect}
            onError={(m) => setErrors([...errors, m])}
          />
          <div className="col">
            <div className="row">
              <GamesHeading
                selectedGenre={gameQuery.genres}
                selectedPlatform={gameQuery.platforms}
              />
              <div className="col-12">
                <div className="row">
                  <div className="col-3">
                    <Platforms
                      onError={(m) => setErrors([...errors, m])}
                      onPlatformSelect={handlePlatformSelect}
                    />
                  </div>
                  <div className="col-3">
                    <GamesSort
                      onSelectSortOrder={handleOrderSelect}
                      sortOrder={gameQuery.ordering}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                {errors[0] && (
                  <div className="alert alert-danger w-50 m-4">{errors[0]}</div>
                )}

                <Games
                  gameQuery={gameQuery}
                  onError={(m) => setErrors([...errors, m])}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
