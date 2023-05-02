import axios from "axios";
import { BASEURL } from "./constrain";

const instance = axios.create({
  baseURL: BASEURL,
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
