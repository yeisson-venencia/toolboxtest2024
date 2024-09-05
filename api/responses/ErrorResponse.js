class ErrorResponse {
  constructor(status, message) {
    this.message = message;
    this.status = status;
  }
}

module.exports = ErrorResponse;
