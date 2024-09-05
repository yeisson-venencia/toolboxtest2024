const ErrorResponse = require("./ErrorResponse");

class ErrorResponseHandler {
  static sendError(error, res) {
    return res
      .status(error.status)
      .json(new ErrorResponse(error.status, error.message));
  }
}

module.exports = ErrorResponseHandler;
