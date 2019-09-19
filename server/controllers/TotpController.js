import helpers from '../utils/helpers';
import Totp from '../utils/Totp';
import ApiError from '../utils/ApiError';

const { errorResponse, successResponse } = helpers;
/**
 * A collection of methods that controls otp activities via the otp routes
 *
 * @class OtpController
 */
class TotpController {
  /**
   * Static method for sending generated TOTP to the user.
   *
   * @static
   * @param {Request} req - The request from the browser.
   * @param {Response} res - The response returned by the method.
   * @returns { JSON } A JSON response with the generated TOTP.
   * @memberof TotpController
   */
  static generateTotp(req, res) {
    try {
      const totp = new Totp(process.env.TOTP_SECRET);

      successResponse(
        res,
        {
          token: totp.getTotp(),
          countDown: `New totp in ${totp.getCountDown()} seconds`
        },
        200
      );
    } catch (err) {
      errorResponse(res, err.status || 500, err.message);
    }
  }

  /**
   * Static method for validating  TOTP provided by the user.
   *
   * @static
   * @param {Request} req - The request from the browser.
   * @param {Response} res - The response returned by the method.
   * @returns { JSON } A JSON response with the status of a validated TOTP.
   * @memberof TotpController
   */
  static validateTotp(req, res) {
    try {
      const { token } = req.body;
      const generatedTotp = new Totp(process.env.TOTP_SECRET).getTotp();

      if (token != generatedTotp) throw new ApiError(401, 'The code you supplied is not correct');

      successResponse(
        res,
        {
          status: 'The code you supplied is true'
        },
        200
      );
    } catch (err) {
      errorResponse(res, err.status || 500, err.message);
    }
  }
}

export default TotpController;
