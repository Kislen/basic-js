const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) { throw new Error("'arr' parameter must be an instance of the Array!");}
  let arrPre = [];
  const conSeq = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === '--double-prev' && i === 0) {
      continue;
    }
    if(arr[i] === '--double-next' && i === (arr.length - 1)) {
      break;
    }
    if(conSeq.includes(arr[i]) && conSeq.includes(arr[i-1])) {
     continue;
    }
    arrPre.push(arr[i]);
  }
  let newArr = [];
  for (let i = 0; i < arrPre.length; i++) {
    switch (arrPre[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (arrPre[i-2] === '--discard-next') {
          break;
        }
        newArr.pop();
        break;
      case '--double-next':
        newArr.push(arrPre[i+1]);
        break;
      case '--double-prev':
        if (arrPre[i-2] === '--discard-next') {
          break;
        }
        newArr.push(arrPre[i-1])
        break;
      default:
        newArr.push(arrPre[i]);
        break;
    }
  }
  return newArr;
}

module.exports = {
  transform
};
