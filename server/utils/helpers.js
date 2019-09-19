/**
 *Contains Helper methods
 *
 * @class Helpers
 */
class Helpers {
  /**
   * Generates a JSON response for success scenarios.
   * @static
   * @param {Response} res - Response object.
   * @param {object} data - The payload.
   * @param {number} code -  HTTP Status code.
   * @memberof Helpers
   * @returns {JSON} - A JSON success response.
   */
  static successResponse(res, data, code) {
    return res.status(code).json({
      code,
      status: 'success',
      data
    });
  }

  /**
   * Generates a JSON response for failure scenarios.
   * @static
   * @param {Response} res - Response object.
   * @param {number} code -  HTTP Status code, default is 500.
   * @param {string} message -  Error message.
   * @memberof Helpers
   * @returns {JSON} - A JSON failure response.
   */
  static errorResponse(res, code, message) {
    return res.status(code).json({
      status: 'fail',
      code,
      message
    });
  }
}

export default Helpers;
