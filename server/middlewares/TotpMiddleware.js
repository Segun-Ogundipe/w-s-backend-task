import helpers from '../utils/helpers';
import ApiError from '../utils/ApiError';

const { errorResponse } = helpers;

/**
 * Collection of methods for TotpMiddleware
 * @class TotpMiddleware
 */
class TotpMiddleware {
  /**
   *
   * Validates token
   * @static
   * @param {Request} req - request object from the browser.
   * @param {Response} res - response object returned to the browser.
   * @param {Next} next - the returned values going into the next operation.
   * @returns {object} Move to the next operation if validation passes or throws error if validation fails.
   * @memberof TotpMiddleware
   */
  static validateBody(req, res, next) {
    try {
      const { token } = req.body;
      const number = /^[0-9]+$/;

      if (token === undefined) throw new ApiError(400, 'Please provide a valid token');

      if (token.toString().length !== 6) throw new ApiError(400, 'token must be six digits');

      if (!number.test(token)) {
        throw new ApiError(400, 'token must be of type number');
      }

      next();
    } catch (err) {
      errorResponse(res, err.status || 500, err.message);
    }
  }
}

export default TotpMiddleware;
