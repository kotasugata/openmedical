import _axios from "axios";

export const axios = _axios.create({
  baseURL: "http://localhost:3000/api",
});
