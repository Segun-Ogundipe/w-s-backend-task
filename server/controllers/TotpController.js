import helpers from '../utils/helpers';
import Totp from '../utils/Totp';

const { errorResponse, successResponse } = helpers;
/**
 * A collection of methods that controls otp activities via the otp routes
 *
 * @class OtpController
 */
class TotpController {
  /**
   * Static method for sending generated Totp to the user.
   *
   * @static
   * @param {Request} req - The request from the browser.
   * @param {Response} res - The response returned by the method.
   * @returns { JSON } A JSON response with the generated TOTP.
   * @memberof TotpController
   */
  static send(req, res) {
    try {
      const totp = new Totp(process.env.TOTP_SECRET);

      successResponse(
        res,
        {
          totp: totp.getTotp(),
          countDown: `New totp in ${totp.getCountDown()} seconds`
        },
        200
      );
    } catch (err) {
      errorResponse(res, err.status || 500, err.message);
    }
  }
}

export default TotpController;
