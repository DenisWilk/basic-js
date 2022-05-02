const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    if (value === null) this.arr.push('null');
    else this.arr.push(value);

    return this;
  },

  removeLink(position) {
    if (this.arr[position - 1] == undefined) {
      this.arr = [];
      throw Error("You can\'t remove incorrect link!");
    }
    this.arr.splice((position - 1), 1);

    return this;
  },

  reverseChain() {
    this.arr.reverse();

    return this;
  },

  finishChain() {
    let chain = `( ${this.arr.join(' )~~( ')} )`;
    this.arr = [];

    return chain;
  }
};

module.exports = {
  chainMaker
};
