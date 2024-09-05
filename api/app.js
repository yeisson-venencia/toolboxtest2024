const express = require("express");
const cors = require("cors");
const appRouter = require("./controllers");
const errorHandlerMiddleware = require("./middlewares/error-handler.middleware");
const NotFoundError = require("./exceptions/NotFoundError");
const { apiPreFix } = require("./config");

const app = express();
app.use(express.json());
app.use(cors());
app.use(apiPreFix, appRouter);

app.use((_req, _res, next) => next(new NotFoundError("Not Found Endpoint")));

app.use(errorHandlerMiddleware);

module.exports = app;
