import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "925b92bb67ee429383a2996bcd3195c6",
  },
});
