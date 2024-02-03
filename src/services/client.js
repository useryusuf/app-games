import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // key: "dd10ae10db1940d5a967b7c315dd8f07",
  }
});
