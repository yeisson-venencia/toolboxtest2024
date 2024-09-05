const ApiError = require("./ApiError");
const ErrorTypes = require("./ErrorTypes.const");
const ResponseStatus = require("../responses/responseStatuses.const");

class NotFoundError extends ApiError {
  constructor(message = "Not Found Error") {
    super(ErrorTypes.NOT_FOUND, message, ResponseStatus.NOT_FOUND);
  }
}

module.exports = NotFoundError;
