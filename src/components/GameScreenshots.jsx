import { useState, useEffect } from "react";
import client from "../services/client";

const GameScreenshots = ({ game_id, onError }) => {
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
    client
      .get("/games/" + game_id + "/screenshots")
      .then(({ data }) => setScreenshots(data.results))
      .catch(({ message }) => onError(message));
  }, []);
  return (
    <div className="row mt-5 g-2 row-cols-1 row-cols-lg-2">
      {screenshots &&
        screenshots.map((screenshot) => {
          return (
            <div key={screenshot.id} className="col">
              <img
                src={screenshot.image}
                width="100%"
                height="100%"
                alt="screenshot"
              />
            </div>
          );
        })}
    </div>
  );
};

export default GameScreenshots;
