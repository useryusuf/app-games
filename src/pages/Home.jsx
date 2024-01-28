import { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Genres from "../components/Genres";
import Platforms from "../components/Platforms";
import GamesSort from "../components/GamesSort";
import Games from "../components/Games";
import gamesData from "../data/games.json";

function Home() {
  const [games, setGames] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // client
    //   .get("/games")
    //   .then(({ data }) => setGames(data.results))
    //   .catch(({ message }) => setError(message));
    setGames(gamesData.results);
  }, []);
  const handeGenreSelect = (genre) => console.log(genre);

  return (
    <div className="container-fluid">
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
              <Games games={games} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
