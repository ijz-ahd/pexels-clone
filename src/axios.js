import axios from "axios";
import API_KEY from "./keys";

const instance = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    Authorization: API_KEY,
  },
});

export default instance;
