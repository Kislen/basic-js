const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(/* value */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(/* position */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let arr = [];
    let chainMaker  = {
      getLength() {
        return arr.length;
      },
      addLink(value) {
        if (value === undefined) { value = " ";}
        arr.push(`( ${value} )~~`);
        return chainMaker;
      },
      removeLink(position) {
        if (arr[position] === undefined) { throw new Error("You can't remove incorrect link!");}
        arr = arr.slice(position, position + 1);
        return chainMaker;
      },
      reverseChain() {
        arr = arr.reverse();
      },
      finishChain() {
        let str = arr.join();
        arr = [];
        return str;
      }
    }
  }
}
module.exports = {
  chainMaker
};
