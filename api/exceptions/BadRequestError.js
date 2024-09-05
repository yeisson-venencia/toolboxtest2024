const ApiError = require("./ApiError");
const ErrorTypes = require("./ErrorTypes.const");
const ResponseStatus = require("../responses/responseStatuses.const");

class BadRequestError extends ApiError {
  constructor(message = "Bad Request") {
    super(ErrorTypes.BAD_REQUEST, message, ResponseStatus.BAD_REQUEST);
  }
}

module.exports = BadRequestError;
