const ApiError = require("../exceptions/ApiError");
const InternalError = require("../exceptions/InternalError");
const ErrorResponseHandler = require("../responses/ErrorResponseHandler");

const errorHandlerMiddleware = (err, _req, res, _next) => {
  if (err instanceof ApiError) {
    console.error(err);
    ErrorResponseHandler.sendError(err, res);
  } else {
    console.error(err);
    ErrorResponseHandler.sendError(new InternalError(err.message), res);
  }
};

module.exports = errorHandlerMiddleware;
