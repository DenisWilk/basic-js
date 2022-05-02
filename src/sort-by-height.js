const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  let res = [];
  let count = 0;
  let sortedArr = arr
    .filter(a => a != -1)
    .sort((a, b) => a === -1 || b === -1 ? 0 : a - b);

  arr.map(el => {
    if (el === -1) {
      res.push(el)
    } else {
      res.push(sortedArr[count]);
      count++;
    }
  });

  return res;
}

module.exports = {
  sortByHeight
};
