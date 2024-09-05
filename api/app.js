const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerOptions = require("./utils/swagger.config");
const appRouter = require("./controllers");
const errorHandlerMiddleware = require("./middlewares/error-handler.middleware");
const NotFoundError = require("./exceptions/NotFoundError");

const { apiPreFix } = require("./config");

const specs = swaggerJsDoc(swaggerOptions);

const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(express.json());
app.use(cors());
app.use(apiPreFix, appRouter);

app.use((_req, _res, next) => next(new NotFoundError("Not Found Endpoint")));

app.use(errorHandlerMiddleware);

module.exports = app;
