const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String} 
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr=[];
  let count=0;
  let newStr='';

    if(str === ""){
       return newStr;
    }else{
      for(let i=0; i<str.length;i++){
        if(str[i] != str[i+1]){
          count++;
          arr.push(count, str[i]);
          count=0;
        }else{
          count++;
        }
    }
  }

  for (let i=0;i<arr.length;i++){
    if(arr[i] == 1){
        i++;
        newStr +=arr[i];
    }else{
        newStr +=arr[i];
    }
      
  }

return newStr; 
}

module.exports = {
  encodeLine
};
