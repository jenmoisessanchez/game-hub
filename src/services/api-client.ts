import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  params: {
    key: import.meta.env.RAWG_API,
  },
});
