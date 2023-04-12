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
  let str = n.toString();
  str = str.split("").map(e => +e);
  let arr = [];
  for (let i = 0; i <= str.length-1; i++) {
    let ar = str.slice();
    ar.splice(i, 1);
    ar = +(ar.join(''));
    arr.push(ar);
    console.log(ar);
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
