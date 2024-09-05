class ApiError extends Error {
  constructor(type, message = "error", status) {
    super(type);
    this.type = type;
    this.message = message;
    this.status = status;
  }
}

module.exports = ApiError;
