import axios from "axios";

const api = axios.create({
  //   baseURL: process.env.REACT_APP_API_URL,
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

api.interceptors.request.use((config) => {
  config.url = config.url + "&appid=" + "d7fbbf3980983775efee8494fec9fc88";
  return config;
});

export default api;
