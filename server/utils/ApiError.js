/**
 * Error class
 *
 * @extends Error
 */
class ApiError extends Error {
  /**
   * Create an instance of ApiError
   *
   * @param {number} status - The status code of the error
   * @param {string} message - The error message
   */
  constructor(status, message) {
    super();

    this.status = status;
    this.message = message;
  }
}

export default ApiError;
