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
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let str, str1, str2;
  str = n.toString();
  // console.log("str: " + str);
  // if()
  // for(let i=0; i<str.length; i++){
     
  // }
  str1 = str.split(1);
  str2 = str.split(0,str.length-2);
  console.log("str: " + str1 + " " + str2);
  if(str1 > str2) {
    return str1.Number;
  }else{
    return str2.Number;
  }
}

module.exports = {
  deleteDigit
};
