import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "af726101474c457980928e35685c5500",
  },
});
