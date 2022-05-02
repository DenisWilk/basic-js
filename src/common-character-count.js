const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

  let res = 0;

  s2 = Array.from(s2);

  Array.from(s1).map(el => {
    let index = s2.indexOf(el);
    if (index != -1) {
      res++;
      s2.splice(index, 1);
    }
  });

  return res;
}

module.exports = {
  getCommonCharacterCount
};
