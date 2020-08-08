import axios from "axios";
import {appConfig} from '../../config/app.config';

//https://jsonplaceholder.typicode.com/posts/1
let host = "jsonplaceholder.typicode.com";
let port = "80";
let prefix = "";
let baseURL = "http://" + host + ':' + port + "/" + prefix;



export function request(config) {
  const axiosInstance = axios.create({
    baseURL: appConfig.network.environment === "dev" ? appConfig.network.mockPath : baseURL,
    timeout: 30000,
    headers: {
      "Accept": "application/json",
      "Content-Type": 'application/json'
    },

  });

  return axiosInstance(config);
}
