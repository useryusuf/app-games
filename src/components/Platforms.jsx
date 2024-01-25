import { useState, useEffect } from "react";
import client from "../services/client";

const Platforms = () => {
  const [platforms, setPlatforms] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    client
      .get("/platforms")
      .then(({ data }) => setPlatforms(data.results))
      .catch(({ message }) => setError(message));
  });
  // console.log(platforms);

  return (
    <>
      <select className="form-select">
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
