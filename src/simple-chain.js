const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(position <= 0 || position > this.chain.length || typeof position != 'number'){
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!'); 
    }
    
    this.chain.splice(position-1,1);
    return this;
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let temp;
    for(let i=0;i<Math.floor(this.chain.length/2);i++){
      temp = this.chain[i];
      this.chain[i] = this.chain[this.chain.length-i-1];
      this.chain[this.chain.length-i-1] = temp;
    }
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let strEx = '( )';
    let strStart = '( ';
    let strEnd = ' )';
    let strMiddle = ' )~~( ';
    let str = '( ';
    if(this.chain.length == 0){
      return strEx;
    }
    for(let i=0;i<this.chain.length;i++){
      if(i<this.chain.length-1){
        str += this.chain[i] + strMiddle;
      }else{
        str += this.chain[i]+strEnd;
      }
      
    }
  this.chain = [];
  return str;

  }
};

module.exports = {
  chainMaker
};
