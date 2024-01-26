import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Genres from "../components/Genres";
import Platforms from "../components/Platforms";
import GamesSort from "../components/GamesSort";
import Games from "../components/Games";

function Home() {
  return (
    <div className="row">
      <Genres />
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
            <Games />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
