const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let res = {};

  domains.map((domain) => domain
    .split('.')
    .reverse()
    .reduce((a, b) => {
      let str = `${a}.${b}`;
      res[str] = res[str] + 1 || 1;
      return str;
    }, ''));

  return res;
}

module.exports = {
  getDNSStats
};
