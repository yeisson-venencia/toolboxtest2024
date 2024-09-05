import axios from "axios";

const networkClient = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  headers: {
    "access-control-allow-origin": "*",
    "Content-type": "application/json",
  },
});

export default networkClient;
