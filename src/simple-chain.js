const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr:[],
  getLength() {
    return chainMaker.arr.length;
  },
  addLink(value) {
    if (value === undefined) { value = " ";}
      chainMaker.arr.push(`( ${value} )`);
      return chainMaker;
  },
  removeLink(position) {
    if (!chainMaker.arr.includes(chainMaker.arr[position - 1])) {
      chainMaker.arr = []; 
      throw new Error("You can't remove incorrect link!");
    }
      chainMaker.arr.splice(position - 1, 1);
      return chainMaker;
  },
  reverseChain() {
    chainMaker.arr.reverse();
    return chainMaker;
  },
  finishChain() {
      let str = chainMaker.arr.join('~~');
      chainMaker.arr = [];
      return str;
  }
}

module.exports = {
  chainMaker
};
