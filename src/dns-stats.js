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
 
  for (let i = 0; i < domains.length; i++) {
     domains[i] = domains[i].split('.').reverse();
  }
 
  let ar = [];
  let p ='';
  for (let i = 0; i < domains.length; i++) {
    ar[i]= [];
     for (let j = 0; j < domains[i].length; j++) {
         ar[i][j] = p + '.' + domains[i][j];
         p =  ar[i][j];
     }
     p = '';
  }
  let arr = [];
  for (let i of ar) {
   arr = arr.concat(i);
  }
  let d = {};
   for (let i of arr) {
     let k = arr.filter(e => e === i);
     console.log(k);
     d[`${i}`] = k.length;
   }
   return d;
 }

module.exports = {
  getDNSStats
};
