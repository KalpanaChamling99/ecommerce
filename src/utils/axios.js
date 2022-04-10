import axios from "axios";
import config from '../config';

const { API: { baseURL } } = config;


export default axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  }
});
