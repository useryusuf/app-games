import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Genres from "../components/Genres";
import Platforms from "../components/Platforms";
import GamesSort from "../components/GamesSort";
import Games from "../components/Games";

function Home() {
  //for css class
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const [selectedPlatformId, setSelectedPlatformId] = useState(null);
  const [errors, setErrors] = useState([]);

  const handleGenreSelect = (genre_id) => setSelectedGenreId(genre_id);

  const handlePlatformSelect = (platform_id) =>
    setSelectedPlatformId(platform_id);

  return (
    <div className="container-fluid">
      {errors && <div className="alert alert-danger w-50 m-4">{errors[0]}</div>}
      <div className="row">
        <Genres
          onGenreSelect={handleGenreSelect}
          onError={(m) => setErrors([...errors, m])}
        />
        <div className="col">
          <div className="row">
            <h1 className="fw-bolder my-3">Games</h1>
            <div className="col-12">
              <div className="row">
                <div className="col-3">
                  <Platforms
                    onError={(m) => setErrors([...errors, m])}
                    onPlatformSelect={handlePlatformSelect}
                  />
                </div>
                <div className="col-3">
                  <GamesSort />
                </div>
              </div>
            </div>
            <div className="col-12">
              <Games
                selectedGenreId={selectedGenreId}
                selectedPlatformId={selectedPlatformId}
                onError={(m) => setErrors([...errors, m])}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
