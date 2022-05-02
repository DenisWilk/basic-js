const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  let str = String(n);

  for (let i = 0; i < str.length; i++) {
    if (str[i] < str[i + 1]) {
      return Number(str.slice(0, i) + str.slice(i + 1));
    }
  }
  
  return Number(str.slice(0, str.length - 1));
}

module.exports = {
  deleteDigit
};
