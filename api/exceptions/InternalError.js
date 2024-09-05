const ApiError = require("./ApiError");
const ErrorTypes = require("./ErrorTypes.const");
const ResponseStatus = require("../responses/responseStatuses.const");

class InternalError extends ApiError {
  constructor(message = "Internal Server Error") {
    super(ErrorTypes.INTERNAL, message, ResponseStatus.INTERNAL);
  }
}

module.exports = InternalError;
