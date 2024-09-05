class SuccessResponse {
  constructor(data, operationId = "", operationName = "") {
    this.operationId = operationId;
    this.operationName = operationName;
    this.data = data;
  }
}

module.exports = SuccessResponse;
