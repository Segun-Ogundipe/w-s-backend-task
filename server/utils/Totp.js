/* eslint-disable class-methods-use-this */
import jsSHA from 'jssha';
/**
 * This class generate and validate totp
 *
 * @class Totp
 */
class Totp {
  /**
   * Create an instance of Totp
   *
   * @param {string} key - The secret key used to generate totp
   */
  constructor(key) {
    this.key = key;
    this.totp = 0;
    this.countDown = 0;
    this.update();
  }

  /**
   * This method converts a DEC to HEX string
   *
   * @param {number} dec - The dec to be converted to hex string
   * @memberof Totp
   * @returns {string} - A hex string
   */
  dec2hex(dec) {
    return (dec < 15.5 ? '0' : '') + Math.round(dec).toString(16);
  }

  /**
   * This method converts a HEX string to DEC
   *
   * @param {string} hex - The hex string to be converted to dec
   * @memberof Totp
   * @returns {number} - A decimal
   */
  hex2dec(hex) {
    return parseInt(hex, 16);
  }

  leftpad(str, len, pad) {
    if (len + 1 >= str.length) {
      str = Array(len + 1 - str.length).join(pad) + str;
    }
    return str;
  }

  /**
   * This method converts from base32 to hex string
   *
   * @param {string} base32 - The base32 string to be converted to hex string
   * @memberof Totp
   * @returns {string} - A hex string
   */
  base32tohex(base32) {
    const base32chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    let bits = '';
    let hex = '';
    for (let i = 0; i <= base32.length; i += 1) {
      const val = base32chars.indexOf(base32.charAt(i).toUpperCase());
      bits += this.leftpad(val.toString(2), 5, '0');
    }
    for (let i = 0; i + 4 <= bits.length; i += 4) {
      const chunk = bits.substr(i, 4);
      hex += parseInt(chunk, 2).toString(16);
    }
    return hex;
  }

  /**
   * This method converts from base32 to hex string
   *
   * @param {string} base32 - The base32 string to be converted to hex string
   * @memberof Totp
   * @returns {string} - A hex string
   */
  update() {
    const key = this.base32tohex(process.env.TOTP_SECRET);
    const epoch = Math.round(new Date().getTime() / 1000.0);
    const time = this.leftpad(this.dec2hex(Math.floor(epoch / 30)), 16, '0');

    const shaObj = new jsSHA('SHA-1', 'HEX');
    shaObj.setHMACKey(key, 'HEX');
    shaObj.update(time);
    const hmac = shaObj.getHMAC('HEX');
    const offset = this.hex2dec(hmac.substring(hmac.length - 1));
    let totp = (this.hex2dec(hmac.substr(offset * 2, 8)) & this.hex2dec('7fffffff')) + '';
    totp = totp.substr(totp.length - 6, 6);
    this.totp = totp;
  }

  /**
   * This method returns the generated totp
   *
   * @memberof Totp
   * @returns {number} - The current totp
   */
  getTotp() {
    return this.totp;
  }

  /**
   * This method returns the seconds left to generate a new totp
   *
   * @memberof Totp
   * @returns {number} - The count down in seconds
   */
  getCountDown() {
    const epoch = Math.round(new Date().getTime() / 1000.0);
    this.countDown = 30 - (epoch % 30);
    return this.countDown;
  }
}

export default Totp;
