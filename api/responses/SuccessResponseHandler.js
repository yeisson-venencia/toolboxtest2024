const responseStatus = require("./responseStatuses.const");

class SuccessResponseHandler {
  static send(res, data) {
    return res.status(responseStatus.SUCCESS).json(data);
  }
}

module.exports = SuccessResponseHandler;
