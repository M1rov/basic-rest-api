class CustomError {
  static BadRequest = 400;
  static ServerError = 500;

  constructor(type, message) {
    this.code = type;
    this.message = message;
  }
}

module.exports = CustomError;
