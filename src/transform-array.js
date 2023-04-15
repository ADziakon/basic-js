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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let doubleNext = '--double-next';
  let discardPrev = '--discard-prev';
  let doublePrev = '--double-prev';
  let discardNext = '--discard-next';
  let indexNext, indexPrev, indexPrevDis, indexNextDis;
  let action;
let res = [];
console.log("arr: " + arr);
if(!Array.isArray(arr) ) 
throw new Error("'arr' parameter must be an instance of the Array!");

if(arr.length == 0 || arr == []){
    return [];
}
if( indexNext === undefined ||  indexPrev === undefined ||  indexNextDis === undefined || indexPrevDis=== undefined){
  console.log('test55 ' + indexPrevDis);
  return arr;
  
}
  if(arr.includes(doubleNext)){
    indexNext = arr.indexOf(doubleNext);
    action = 1;
    console.log('test1 ' + indexNext);
  }
  if(arr.includes(doublePrev)){
    indexPrev = arr.indexOf(doublePrev);
    action = 2;
    console.log('test2 ' + indexPrev);
  }
  if(arr.includes(discardNext)){
    indexNextDis = arr.indexOf(discardNext);
    action = 3;
    console.log('test3 ' + indexNextDis);
  }
  if(arr.includes(discardPrev)){
    indexPrevDis = arr.indexOf(discardPrev);
    action = 4;
    console.log('test4 ' + indexPrevDis);
  }
  for(let i = 0;i<arr.length;i++){
    if( i == indexNext ||  i == indexPrev ||  i == indexNextDis){
        if( i == indexNext) {
            if(indexNext != arr.length){
                console.log("test0: " + i + " index " + indexNext + " act: " + action);
                res.push(arr[i+1]);
            }else{
                console.log("test00: " + i + " index " + indexPrev + " act: " + action);
                //res.push(arr[i+1]);
            }
        }
        if( i == indexPrev){
            if(indexPrev != 0){
            res.push(arr[i-1]);
            }else{
                console.log('eee');
            }
        }
        // if( i == indexPrevDis){
        //     res.pop();
        // }
        if( i == indexNextDis){
            console.log("qqq: " + i + " nextdis")
            res.pop();
        }

    }else{
        if( i == indexPrevDis){
            if(indexPrevDis != 0){
                console.log("qqq: " + i + " nextdis")
                res.pop();
            }
        }else{
            res.push(arr[i]);
        }
    }
 
  }
}

module.exports = {
  transform
};
