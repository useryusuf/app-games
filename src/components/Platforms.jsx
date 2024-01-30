import { useState, useEffect } from "react";
import client from "../services/client";
// import platformsData from "../data/platforms.json";

const Platforms = ({ onPlatformSelect, onError }) => {
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    client
      .get("/platforms")
      .then(({ data }) => setPlatforms(data.results))
      .catch(({ message }) => onError(message));
  }, []);

  return (
    <>
      <select
        className="form-select"
        onChange={(e) => {
          onPlatformSelect(
            platforms &&
              platforms.filter((platform) => platform.id === +e.target.value)[0]
          );
        }}
      >
        <option>Platforms</option>
        {platforms &&
          platforms.map((platform) => (
            <option value={platform.id} key={platform.id}>
              {platform.name}
            </option>
          ))}
      </select>
    </>
  );
};

export default Platforms;
