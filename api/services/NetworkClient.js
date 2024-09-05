const axios = require("axios");

const networkClient = axios.create({
  baseURL: "https://echo-serv.tbxnet.com/v1/",
  headers: {
    Authorization: "Bearer aSuperSecretKey",
  },
});

module.exports = networkClient;
