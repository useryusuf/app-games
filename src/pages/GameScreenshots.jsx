import { useState, useEffect } from "react";
import screenshotsData from "../data/screenshots.json";

const GameScreenshots = () => {
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
    // client
    //   .get("/games/id/screenshots")
    //   .then(({ data }) => setGames(data.results))
    //   .catch(({ message }) => setError(message));
    setScreenshots(screenshotsData.results);
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
