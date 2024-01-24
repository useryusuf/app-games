import { useState, useEffect } from "react";
import client from "../services/client";

const Platforms = () => {
  const [platforms, setPlatforms] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    client
      .get("/platforms")
      .then(({ data }) => setPlatforms(data))
      .catch(({ message }) => setError(message));
  });
  return (
    <>
      <select class="form-select">
        <option selected>Platforms</option>
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
