import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Genres from "../components/Genres";
import Platforms from "../components/Platforms";
import GamesSort from "../components/GamesSort";
import Games from "../components/Games";
import { SiH3 } from "react-icons/si";

function Home() {
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const [errors, setErrors] = useState([]);

  const handeGenreSelect = (genre_id) => setSelectedGenreId(genre_id);

  return (
    <div className="container-fluid">
      {errors && <div className="alert alert-danger w-50 m-4">{errors[0]}</div>}
      <div className="row">
        <Genres onGenreSelect={handeGenreSelect} />
        <div className="col">
          <div className="row">
            <h1 className="fw-bolder my-3">Games</h1>
            <div className="col-12">
              <div className="row">
                <div className="col-3">
                  <Platforms />
                </div>
                <div className="col-3">
                  <GamesSort />
                </div>
              </div>
            </div>
            <div className="col-12">
              <Games
                selectedGenreId={selectedGenreId}
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
